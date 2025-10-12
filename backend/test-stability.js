// Script de test pour Stability AI
require('dotenv').config();
const fetch = require('node-fetch');

const STABILITY_API_KEY = process.env.STABILITY_API_KEY;
const STABILITY_MODEL = process.env.STABILITY_MODEL || 'stable-diffusion-xl-1024-v1-0';

async function testStabilityAI() {
  console.log('🧪 Test de connexion à Stability AI...\n');

  if (!STABILITY_API_KEY || STABILITY_API_KEY === 'YOUR_STABILITY_API_KEY_HERE') {
    console.error('❌ STABILITY_API_KEY non configurée dans .env');
    console.log('\n📋 Pour configurer :');
    console.log('1. Créez un compte sur https://platform.stability.ai/');
    console.log('2. Obtenez votre clé API sur https://platform.stability.ai/account/keys');
    console.log('3. Ajoutez-la dans backend/.env : STABILITY_API_KEY=sk-...');
    process.exit(1);
  }

  console.log('✓ Clé API trouvée');
  console.log(`✓ Modèle : ${STABILITY_MODEL}\n`);

  try {
    console.log('📤 Envoi d\'une requête de test...');
    
    const response = await fetch(
      `https://api.stability.ai/v1/generation/${STABILITY_MODEL}/text-to-image`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${STABILITY_API_KEY}`,
          Accept: 'application/json',
        },
        body: JSON.stringify({
          text_prompts: [
            {
              text: 'A simple red circle on white background, minimalist, clean',
              weight: 1,
            },
          ],
          cfg_scale: 7,
          height: 1024,
          width: 1024,
          steps: 20,
          samples: 1,
        }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`\n❌ Erreur ${response.status}:`, errorText);
      
      if (response.status === 401) {
        console.log('\n💡 Votre clé API est invalide ou expirée.');
        console.log('   Créez une nouvelle clé sur https://platform.stability.ai/account/keys');
      } else if (response.status === 402) {
        console.log('\n💡 Crédits épuisés.');
        console.log('   Ajoutez un moyen de paiement sur https://platform.stability.ai/account/billing');
      }
      
      process.exit(1);
    }

    const data = await response.json();
    
    if (!data.artifacts || data.artifacts.length === 0) {
      console.error('\n❌ Aucune image générée');
      process.exit(1);
    }

    console.log('✅ Image générée avec succès !');
    console.log(`✓ Taille : ${data.artifacts[0].base64.length} caractères (base64)`);
    console.log(`✓ Format : PNG 512x512`);
    
    // Estimation du coût
    const cost = 0.002; // Coût pour 1024x1024, moins pour 512x512
    console.log(`✓ Coût estimé : ~$${cost.toFixed(4)}\n`);
    
    console.log('🎉 Stability AI est correctement configuré !');
    console.log('\n📋 Prochaines étapes :');
    console.log('1. Redémarrez le serveur : node src/index.js');
    console.log('2. Générez des cartes depuis le frontend');
    console.log('3. Profitez des images de qualité sans problème de quota !\n');

  } catch (error) {
    console.error('\n❌ Erreur lors du test:', error.message);
    console.log('\n💡 Vérifiez :');
    console.log('- Votre connexion internet');
    console.log('- Que la clé API est correcte');
    console.log('- Que vous avez des crédits disponibles');
    process.exit(1);
  }
}

testStabilityAI();
