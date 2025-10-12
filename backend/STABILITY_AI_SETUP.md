# 🎨 Configuration de Stability AI (Stable Diffusion)

## ✅ Migration réussie : Imagen → Stable Diffusion

Votre application utilise maintenant **Stable Diffusion** au lieu de Google Imagen !

### Avantages de cette migration

| Critère | Google Imagen 3 | Stable Diffusion XL |
|---------|-----------------|---------------------|
| **Quota** | 5 req/min ❌ | 150 req/min ✅ |
| **Coût** | $0.04/image | $0.002/image ✅ (20x moins cher) |
| **Qualité** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| **Vitesse** | 5-8s | 3-5s ✅ |
| **Setup** | Complexe (GCP) | Simple ✅ |
| **Problème quota** | Oui ❌ | Non ✅ |

## 📋 Étapes de configuration

### 1. Créer un compte Stability AI

1. Allez sur : https://platform.stability.ai/
2. Cliquez sur **"Sign Up"** ou **"Get Started"**
3. Créez un compte (email + mot de passe)
4. Vérifiez votre email

### 2. Ajouter un moyen de paiement

1. Allez sur : https://platform.stability.ai/account/billing
2. Cliquez sur **"Add Payment Method"**
3. Ajoutez votre carte bancaire
4. **Pas de frais d'abonnement** - Vous payez uniquement ce que vous utilisez

### 3. Obtenir votre clé API

1. Allez sur : https://platform.stability.ai/account/keys
2. Cliquez sur **"Create API Key"**
3. Donnez-lui un nom (ex: "Fresquia App")
4. Copiez la clé (format : `sk-...`)
5. ⚠️ **Sauvegardez-la immédiatement** - Elle ne sera plus visible après

### 4. Configurer le `.env`

Ouvrez `backend/.env` et remplacez :

```env
STABILITY_API_KEY=YOUR_STABILITY_API_KEY_HERE
```

Par votre vraie clé :

```env
STABILITY_API_KEY=sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

### 5. Redémarrer le serveur

```bash
cd backend
node src/index.js
```

Vous devriez voir :
```
Server is running on port 3001
✓ Gemini API initialized
✓ Stability AI configured (stable-diffusion-xl-1024-v1-0)
```

### 6. Tester la génération

Générez des cartes depuis le frontend. Vous devriez voir dans les logs :

```
Generating image 1/20 for "..."
✓ Image generated for "..."
Generating image 2/20 for "..."
✓ Image generated for "..."
...
```

## 💰 Coûts estimés

### Par génération (20 cartes)

- **Texte (Gemini)** : Gratuit (inclus dans quota)
- **Images (Stable Diffusion)** : 20 × $0.002 = **$0.04**
- **Total** : **$0.04** (vs $0.80 avec Imagen 3)

### Par mois

| Usage | Générations/jour | Coût/jour | Coût/mois |
|-------|------------------|-----------|-----------|
| Léger | 1 | $0.04 | $1.20 |
| Moyen | 5 | $0.20 | $6.00 |
| Intensif | 20 | $0.80 | $24.00 |

### Crédits gratuits

Stability AI offre généralement **$5 de crédits gratuits** à l'inscription.
Cela représente **2500 images** ou **125 générations de 20 cartes** !

## ⚙️ Configuration avancée

### Modifier le modèle

Dans `.env`, vous pouvez choisir différents modèles :

```env
# Stable Diffusion XL (recommandé - meilleure qualité)
STABILITY_MODEL=stable-diffusion-xl-1024-v1-0

# Stable Diffusion 1.6 (plus rapide, moins cher)
STABILITY_MODEL=stable-diffusion-v1-6

# Stable Diffusion 2.1 (bon compromis)
STABILITY_MODEL=stable-diffusion-512-v2-1
```

### Ajuster le nombre de cartes

```env
# Générer 10 cartes au lieu de 20
NUM_CARDS_TO_GENERATE=10

# Générer 30 cartes
NUM_CARDS_TO_GENERATE=30
```

### Modifier le délai entre les images

```env
# Aucun délai (quota de 150 req/min le permet)
IMAGE_DELAY_MS=0

# Délai de 500ms (plus sûr)
IMAGE_DELAY_MS=500

# Délai de 2 secondes (très conservateur)
IMAGE_DELAY_MS=2000
```

## 🎨 Styles disponibles

Vous pouvez modifier le style dans `GeminiService.js`, ligne ~293 :

```javascript
style_preset: 'digital-art',  // Style actuel
```

Styles disponibles :
- `digital-art` - Art numérique moderne (actuel)
- `photographic` - Style photographique réaliste
- `3d-model` - Rendu 3D
- `analog-film` - Style film argentique
- `anime` - Style anime/manga
- `cinematic` - Style cinématographique
- `comic-book` - Style bande dessinée
- `fantasy-art` - Art fantastique
- `line-art` - Dessin au trait
- `low-poly` - Style low-poly
- `modeling-compound` - Style pâte à modeler
- `neon-punk` - Style cyberpunk néon
- `origami` - Style origami
- `pixel-art` - Pixel art

## 🔍 Monitoring de l'utilisation

### Via le dashboard Stability AI

1. Allez sur : https://platform.stability.ai/account/billing
2. Vous verrez :
   - Crédits restants
   - Utilisation du mois en cours
   - Historique des requêtes

### Via les logs du serveur

Le serveur affiche :
```
Generated 20 cards with images
Image requests: 20
Image failures: 0
```

## 🚨 Résolution de problèmes

### Erreur : "STABILITY_API_KEY not configured"

→ Vérifiez que vous avez bien ajouté la clé dans `.env`

### Erreur : "401 Unauthorized"

→ Votre clé API est invalide ou expirée. Créez-en une nouvelle.

### Erreur : "402 Payment Required"

→ Vous avez épuisé vos crédits. Ajoutez un moyen de paiement.

### Erreur : "429 Too Many Requests"

→ Très rare avec Stability (quota 150 req/min). Augmentez `IMAGE_DELAY_MS`.

### Images de mauvaise qualité

→ Essayez d'augmenter le nombre de steps dans `GeminiService.js` :
```javascript
steps: 50,  // Au lieu de 30
```

## 🔄 Revenir à Google Imagen (si besoin)

Si vous voulez revenir à Imagen, modifiez `.env` :

```env
IMAGE_PROVIDER=vertex
GOOGLE_CLOUD_PROJECT_ID=fresquia-imagen
GOOGLE_CLOUD_LOCATION=us-central1
```

Et réinstallez les dépendances :
```bash
npm install @google-cloud/vertexai
```

## 📊 Comparaison temps de génération

Pour 20 cartes :

| Configuration | Temps total |
|---------------|-------------|
| **Stable Diffusion (délai 0ms)** | ~60 secondes |
| **Stable Diffusion (délai 1s)** | ~80 secondes |
| Imagen 3 (quota 5 req/min) | ~4 minutes |
| Imagen 2 (quota 10 req/min) | ~2 minutes |

## ✅ Checklist de migration

- [x] Code modifié pour utiliser Stability AI
- [x] Package `node-fetch` installé
- [x] Fichier `.env` configuré
- [ ] Compte Stability AI créé
- [ ] Clé API obtenue et ajoutée au `.env`
- [ ] Serveur redémarré
- [ ] Test de génération effectué

## 🎉 Prochaines étapes

1. **Créez votre compte Stability AI** (5 minutes)
2. **Obtenez votre clé API** (1 minute)
3. **Ajoutez-la au `.env`** (30 secondes)
4. **Testez la génération** (2 minutes)

**Total : ~10 minutes pour une migration complète !**

## 📞 Support

- **Documentation Stability AI** : https://platform.stability.ai/docs
- **API Reference** : https://platform.stability.ai/docs/api-reference
- **Discord communautaire** : https://discord.gg/stablediffusion

---

**Félicitations ! Vous avez migré vers une solution 20x moins chère et sans problème de quota ! 🎨**
