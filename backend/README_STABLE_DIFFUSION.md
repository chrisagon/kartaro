# 🎨 Fresquia - Génération d'images avec Stable Diffusion

## 🚀 Migration réussie !

Votre application utilise maintenant **Stable Diffusion XL** pour générer des images de haute qualité.

## ⚡ Avantages

- ✅ **Quota 30x plus élevé** : 150 req/min (vs 5 pour Imagen 3)
- ✅ **Coût 20x moins cher** : $0.002/image (vs $0.04)
- ✅ **Plus rapide** : 60 secondes pour 20 cartes (vs 4 minutes)
- ✅ **Aucun problème de quota** : Fini les erreurs 429 !
- ✅ **Configuration simple** : Une seule clé API
- ✅ **$5 de crédits gratuits** : 2500 images offertes !

## 📋 Configuration rapide (10 minutes)

### 1. Créer un compte Stability AI

```
https://platform.stability.ai/
```

### 2. Obtenir votre clé API

```
https://platform.stability.ai/account/keys
```

### 3. Configurer le `.env`

```env
STABILITY_API_KEY=sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

### 4. Tester la configuration

```bash
node test-stability.js
```

Vous devriez voir :
```
✅ Image générée avec succès !
🎉 Stability AI est correctement configuré !
```

### 5. Démarrer le serveur

```bash
node src/index.js
```

### 6. Générer des cartes !

Ouvrez le frontend et générez vos premières cartes avec Stable Diffusion.

## 💰 Coûts

| Action | Coût |
|--------|------|
| 1 image | $0.002 |
| 20 cartes | $0.04 |
| 100 cartes | $0.20 |
| 1000 cartes | $2.00 |

**Crédits gratuits** : $5 = 2500 images = 125 générations de 20 cartes !

## 📚 Documentation

- **Guide complet** : `STABILITY_AI_SETUP.md`
- **Migration** : `MIGRATION_COMPLETE.md`
- **Options** : `IMAGE_GENERATION_OPTIONS.md`

## 🧪 Test de connexion

```bash
node test-stability.js
```

## 🔧 Configuration

### Variables d'environnement (`.env`)

```env
# Gemini pour le texte
GEMINI_API_KEY=your_key

# Stability AI pour les images
IMAGE_PROVIDER=stability
STABILITY_API_KEY=sk-your_key
STABILITY_MODEL=stable-diffusion-xl-1024-v1-0

# Paramètres de génération
NUM_CARDS_TO_GENERATE=20
IMAGE_DELAY_MS=1000
```

### Modèles disponibles

```env
# Meilleure qualité (recommandé)
STABILITY_MODEL=stable-diffusion-xl-1024-v1-0

# Plus rapide et moins cher
STABILITY_MODEL=stable-diffusion-v1-6

# Bon compromis
STABILITY_MODEL=stable-diffusion-512-v2-1
```

## 🎨 Styles disponibles

Modifiez dans `src/services/GeminiService.js` (ligne ~293) :

```javascript
style_preset: 'digital-art',  // Actuel
```

Autres styles :
- `photographic` - Réaliste
- `3d-model` - Rendu 3D
- `anime` - Style anime
- `cinematic` - Cinématographique
- `comic-book` - Bande dessinée
- `fantasy-art` - Art fantastique
- `pixel-art` - Pixel art

## ⚙️ Optimisations

### Générer plus vite

```env
IMAGE_DELAY_MS=0  # Aucun délai (quota le permet)
```

### Générer plus de cartes

```env
NUM_CARDS_TO_GENERATE=30
```

### Améliorer la qualité

Dans `GeminiService.js` :
```javascript
steps: 50,  // Au lieu de 30
```

## 🚨 Résolution de problèmes

### Erreur : "STABILITY_API_KEY not configured"

→ Ajoutez votre clé dans `.env`

### Erreur : "401 Unauthorized"

→ Clé API invalide. Créez-en une nouvelle.

### Erreur : "402 Payment Required"

→ Crédits épuisés. Ajoutez un moyen de paiement.

### Images de mauvaise qualité

→ Augmentez `steps` à 50 dans `GeminiService.js`

## 📊 Monitoring

### Dashboard Stability AI

```
https://platform.stability.ai/account/billing
```

Vous y verrez :
- Crédits restants
- Utilisation du mois
- Historique des requêtes

### Logs du serveur

```
Generated 20 cards with images
Image requests: 20
Image failures: 0
Total time: ~60 seconds
```

## 🔄 Revenir à Imagen (non recommandé)

Si vraiment nécessaire, modifiez `.env` :

```env
IMAGE_PROVIDER=vertex
GOOGLE_CLOUD_PROJECT_ID=fresquia-imagen
```

## 📞 Support

- **Documentation** : https://platform.stability.ai/docs
- **API Reference** : https://platform.stability.ai/docs/api-reference
- **Discord** : https://discord.gg/stablediffusion

## ✅ Checklist

- [ ] Compte Stability AI créé
- [ ] Clé API obtenue
- [ ] `.env` configuré
- [ ] Test réussi (`node test-stability.js`)
- [ ] Serveur démarré
- [ ] Première génération testée

## 🎉 Prêt à générer !

Une fois la clé API configurée, vous pouvez générer des cartes sans limite de quota !

**Temps de setup** : 10 minutes
**Économies** : 95% sur les coûts d'images
**Quota** : 150 images/minute (vs 5 avec Imagen)

---

**Besoin d'aide ?** Consultez `STABILITY_AI_SETUP.md` pour un guide détaillé.
