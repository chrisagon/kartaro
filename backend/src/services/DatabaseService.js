const { Low } = require('lowdb');
const { JSONFile } = require('lowdb/node');

class DatabaseService {
  constructor() {
    const adapter = new JSONFile('db.json');
    const defaultData = { collections: [] };
    // Les données par défaut SONT requises dans le constructeur pour lowdb v7
    this.db = new Low(adapter, defaultData);
  }

  async init() {
    await this.db.read();
    // Assurez-vous que les données par défaut sont écrites si le fichier n'existe pas
    await this.db.write();
    return this.db;
  }
}

const dbService = new DatabaseService();
// Exporte la promesse qui se résoudra avec l'instance de la base de données initialisée
module.exports = dbService.init();