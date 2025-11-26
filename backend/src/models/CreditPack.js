/**
 * CreditPack Model
 * 
 * Represents predefined credit packages available for purchase.
 */

class CreditPack {
  constructor(db) {
    this.db = db;
  }

  /**
   * Create a new credit pack
   * @param {Object} packData - Pack data
   * @param {string} packData.name - Pack name
   * @param {number} packData.credit_amount - Number of credits (display format)
   * @param {number} packData.price_cents - Price in cents
   * @param {string} packData.description - Optional description
   * @param {Array} packData.features - Optional features array
   * @param {number} packData.sort_order - Display order
   * @returns {Promise<Object>} Created pack record
   */
  async create(packData) {
    const { name, credit_amount, price_cents, description, features, sort_order = 0 } = packData;
    
    // Convert display credits to storage format (multiply by 5)
    const storageAmount = Math.round(credit_amount * 5);
    
    const stmt = this.db.prepare(`
      INSERT INTO credit_packs (name, credit_amount, price_cents, description, features, sort_order, is_active)
      VALUES (?, ?, ?, ?, ?, ?, TRUE)
    `);

    try {
      const result = stmt.run(
        name,
        storageAmount,
        price_cents,
        description,
        features ? JSON.stringify(features) : null,
        sort_order
      );
      
      return this.findById(result.lastInsertRowid);
    } catch (error) {
      if (error.code === 'SQLITE_CONSTRAINT_UNIQUE') {
        throw new Error('Credit pack with this name already exists');
      }
      throw error;
    }
  }

  /**
   * Find credit pack by ID
   * @param {number} id - Pack ID
   * @returns {Promise<Object|null>} Pack record or null
   */
  async findById(id) {
    const stmt = this.db.prepare(`
      SELECT 
        id,
        name,
        credit_amount,
        price_cents,
        is_active,
        sort_order,
        description,
        features,
        created_at,
        updated_at
      FROM credit_packs 
      WHERE id = ?
    `);

    const pack = stmt.get(id);
    
    if (!pack) {
      return null;
    }

    // Convert storage format to display format and parse JSON
    return {
      ...pack,
      credit_amount: pack.credit_amount / 5,
      features: pack.features ? JSON.parse(pack.features) : null
    };
  }

  /**
   * Find credit pack by name
   * @param {string} name - Pack name
   * @returns {Promise<Object|null>} Pack record or null
   */
  async findByName(name) {
    const stmt = this.db.prepare(`
      SELECT 
        id,
        name,
        credit_amount,
        price_cents,
        is_active,
        sort_order,
        description,
        features,
        created_at,
        updated_at
      FROM credit_packs 
      WHERE name = ?
    `);

    const pack = stmt.get(name);
    
    if (!pack) {
      return null;
    }

    return {
      ...pack,
      credit_amount: pack.credit_amount / 5,
      features: pack.features ? JSON.parse(pack.features) : null
    };
  }

  /**
   * Get all active credit packs
   * @param {Object} options - Query options
   * @returns {Promise<Array>} Array of active pack records
   */
  async getActive(options = {}) {
    const { orderBy = 'sort_order', order = 'ASC' } = options;
    
    const stmt = this.db.prepare(`
      SELECT 
        id,
        name,
        credit_amount,
        price_cents,
        is_active,
        sort_order,
        description,
        features,
        created_at,
        updated_at
      FROM credit_packs 
      WHERE is_active = TRUE
      ORDER BY ${orderBy} ${order}
    `);

    const packs = stmt.all();
    
    // Convert storage format to display format and parse JSON
    return packs.map(pack => ({
      ...pack,
      credit_amount: pack.credit_amount / 5,
      features: pack.features ? JSON.parse(pack.features) : null
    }));
  }

  /**
   * Get all credit packs (including inactive)
   * @param {Object} options - Query options
   * @returns {Promise<Array>} Array of all pack records
   */
  async getAll(options = {}) {
    const { orderBy = 'sort_order', order = 'ASC', limit, offset } = options;
    
    let query = `
      SELECT 
        id,
        name,
        credit_amount,
        price_cents,
        is_active,
        sort_order,
        description,
        features,
        created_at,
        updated_at
      FROM credit_packs 
      ORDER BY ${orderBy} ${order}
    `;

    if (limit) {
      query += ` LIMIT ${limit}`;
      if (offset) {
        query += ` OFFSET ${offset}`;
      }
    }

    const stmt = this.db.prepare(query);
    const packs = stmt.all();
    
    // Convert storage format to display format and parse JSON
    return packs.map(pack => ({
      ...pack,
      credit_amount: pack.credit_amount / 5,
      features: pack.features ? JSON.parse(pack.features) : null
    }));
  }

  /**
   * Update credit pack
   * @param {number} id - Pack ID
   * @param {Object} updates - Fields to update
   * @returns {Promise<Object>} Updated pack record
   */
  async update(id, updates) {
    const allowedFields = ['name', 'credit_amount', 'price_cents', 'description', 'features', 'sort_order', 'is_active'];
    const updateFields = [];
    const values = [];

    Object.keys(updates).forEach(key => {
      if (allowedFields.includes(key) && updates[key] !== undefined) {
        if (key === 'credit_amount') {
          // Convert display credits to storage format
          updateFields.push(`${key} = ?`);
          values.push(Math.round(updates[key] * 5));
        } else if (key === 'features') {
          // Stringify JSON
          updateFields.push(`${key} = ?`);
          values.push(updates[key] ? JSON.stringify(updates[key]) : null);
        } else {
          updateFields.push(`${key} = ?`);
          values.push(updates[key]);
        }
      }
    });

    if (updateFields.length === 0) {
      throw new Error('No valid fields to update');
    }

    values.push(id);

    const stmt = this.db.prepare(`
      UPDATE credit_packs 
      SET ${updateFields.join(', ')}, updated_at = CURRENT_TIMESTAMP
      WHERE id = ?
    `);

    const result = stmt.run(...values);
    
    if (result.changes === 0) {
      throw new Error('Credit pack not found');
    }

    return this.findById(id);
  }

  /**
   * Activate/deactivate credit pack
   * @param {number} id - Pack ID
   * @param {boolean} active - Active status
   * @returns {Promise<Object>} Updated pack record
   */
  async setActive(id, active) {
    return this.update(id, { is_active: active });
  }

  /**
   * Check if credit pack exists and is active
   * @param {number} id - Pack ID
   * @returns {Promise<boolean>} True if pack exists and is active
   */
  async existsAndActive(id) {
    const stmt = this.db.prepare('SELECT 1 FROM credit_packs WHERE id = ? AND is_active = TRUE');
    const result = stmt.get(id);
    return !!result;
  }

  /**
   * Delete credit pack
   * @param {number} id - Pack ID
   * @returns {Promise<boolean>} True if deleted
   */
  async delete(id) {
    const stmt = this.db.prepare('DELETE FROM credit_packs WHERE id = ?');
    const result = stmt.run(id);
    return result.changes > 0;
  }

  /**
   * Get pack pricing information
   * @param {number} id - Pack ID
   * @returns {Promise<Object>} Pricing info
   */
  async getPricingInfo(id) {
    const stmt = this.db.prepare(`
      SELECT id, name, credit_amount, price_cents, is_active
      FROM credit_packs 
      WHERE id = ?
    `);

    const pack = stmt.get(id);
    
    if (!pack) {
      throw new Error('Credit pack not found');
    }

    return {
      id: pack.id,
      name: pack.name,
      credits: pack.credit_amount / 5, // Display format
      price_cents: pack.price_cents,
      price_euros: (pack.price_cents / 100).toFixed(2),
      is_active: pack.is_active,
      credit_per_euro: ((pack.credit_amount / 5) / (pack.price_cents / 100)).toFixed(2)
    };
  }

  /**
   * Initialize default credit packs
   * @returns {Promise<Array>} Array of created packs
   */
  async initializeDefaults() {
    const defaultPacks = [
      {
        name: 'Découverte',
        credit_amount: 25,
        price_cents: 499,
        description: 'Perfect for trying out our card generation features',
        features: ['25 credits', 'Basic support', '1 month validity'],
        sort_order: 1
      },
      {
        name: 'Pro',
        credit_amount: 85,
        price_cents: 1499,
        description: 'Ideal for regular users and small projects',
        features: ['85 credits', 'Priority support', '3 month validity'],
        sort_order: 2
      },
      {
        name: 'Organisme',
        credit_amount: 250,
        price_cents: 3999,
        description: 'Best value for educational institutions and organizations',
        features: ['250 credits', 'Premium support', '6 month validity', 'Admin access'],
        sort_order: 3
      }
    ];

    const createdPacks = [];
    
    for (const packData of defaultPacks) {
      try {
        const existingPack = await this.findByName(packData.name);
        if (!existingPack) {
          const pack = await this.create(packData);
          createdPacks.push(pack);
        } else {
          createdPacks.push(existingPack);
        }
      } catch (error) {
        console.warn(`Failed to create default pack "${packData.name}":`, error.message);
      }
    }

    return createdPacks;
  }

  /**
   * Get statistics about credit packs
   * @returns {Promise<Object>} Statistics
   */
  async getStats() {
    const stmt = this.db.prepare(`
      SELECT 
        COUNT(*) as total_packs,
        COUNT(CASE WHEN is_active = TRUE THEN 1 END) as active_packs,
        MIN(price_cents) as min_price_cents,
        MAX(price_cents) as max_price_cents,
        AVG(price_cents) as avg_price_cents
      FROM credit_packs
    `);

    const stats = stmt.get();
    
    return {
      total_packs: stats.total_packs,
      active_packs: stats.active_packs,
      min_price_euros: stats.min_price_cents ? (stats.min_price_cents / 100).toFixed(2) : null,
      max_price_euros: stats.max_price_cents ? (stats.max_price_cents / 100).toFixed(2) : null,
      avg_price_euros: stats.avg_price_cents ? (stats.avg_price_cents / 100).toFixed(2) : null
    };
  }
}

module.exports = CreditPack;