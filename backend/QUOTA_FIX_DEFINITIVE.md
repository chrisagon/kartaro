# 🎯 Solution définitive au quota Imagen 3

## 🔍 Diagnostic précis

### Le problème réel

L'erreur indique :
```
Quota exceeded for aiplatform.googleapis.com/generate_content_requests_per_minute_per_project_per_base_model
with base model: imagen-3.0-generate
```

**Ce n'est PAS le quota global** (que vous voyez à 20% dans la console).

C'est un **quota spécifique** :
- **Nom** : `Generate content requests per minute per project per base model`
- **Modèle** : `imagen-3.0-generate`
- **Limite par défaut** : **5 requêtes/minute**

## 📋 Comment trouver et augmenter ce quota

### Étape 1 : Filtrer les quotas Vertex AI

1. Allez sur https://console.cloud.google.com/iam-admin/quotas?project=fresquia-imagen
2. Dans le filtre, tapez : **`imagen`** ou **`generate content`**
3. Cherchez spécifiquement :
   ```
   Vertex AI API - Generate content requests per minute per project per base model
   ```

### Étape 2 : Identifier le quota Imagen 3

Vous devriez voir plusieurs lignes, cherchez celle avec :
- **Dimensions** : `base_model: imagen-3.0-generate`
- **Limite actuelle** : 5 (ou un nombre faible)

### Étape 3 : Demander une augmentation

1. Cochez la case du quota `imagen-3.0-generate`
2. Cliquez sur **"Modifier les quotas"** (en haut)
3. Remplissez le formulaire :
   - **Nouvelle limite** : 60 (recommandé pour commencer)
   - **Justification** : "Application de génération de cartes éducatives, besoin de générer 20 images par session"
4. Soumettez la demande

### Étape 4 : Attendre l'approbation

- **Délai** : Généralement 1-2 jours ouvrables
- **Notification** : Vous recevrez un email
- **Vérification** : Le quota apparaîtra mis à jour dans la console

## 🚀 Alternative immédiate : Utiliser un autre modèle

En attendant l'augmentation du quota, vous pouvez essayer **Imagen 2** qui pourrait avoir des quotas différents :

### Modifier le modèle dans `.env`

```env
# Essayer Imagen 2 au lieu de Imagen 3
IMAGEN_MODEL=imagegeneration@006
```

Ou utiliser le modèle de génération standard :

```env
IMAGEN_MODEL=imagegeneration@002
```

## 🔄 Solution temporaire : Mode hybride

En attendant l'augmentation, générez seulement **3 images** par session :

### Configuration `.env`

```env
NUM_CARDS_TO_GENERATE=10
MAX_IMAGEN_IMAGES=3
IMAGEN_DELAY_MS=20000
```

### Modification du code (optionnel)

Ajoutez une limite d'images Imagen 3 dans `GeminiService.js` :

```javascript
const appendImagesToCards = async (cards, theme, context, metrics = null) => {
  if (!vertexAI) {
    console.warn('Vertex AI not initialized. Using fallback images for all cards.');
    return cards.map(card => ({ ...card, image: FALLBACK_IMAGE_DATA_URL }));
  }

  const MAX_IMAGEN_IMAGES = parseInt(process.env.MAX_IMAGEN_IMAGES || cards.length, 10);
  const generativeModel = vertexAI.getGenerativeModel({ model: IMAGE_MODEL });
  const cardsWithImages = [];
  const DELAY_BETWEEN_REQUESTS = parseInt(process.env.IMAGEN_DELAY_MS || '15000', 10);

  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    const cardWithImage = { ...card };

    // Générer avec Imagen 3 seulement pour les N premières cartes
    if (i < MAX_IMAGEN_IMAGES) {
      try {
        // ... code de génération Imagen 3 ...
      } catch (imageError) {
        console.error(`Failed to generate image for card "${card.title}"`);
        cardWithImage.image = FALLBACK_IMAGE_DATA_URL;
      }
      
      if (i < MAX_IMAGEN_IMAGES - 1) {
        await sleep(DELAY_BETWEEN_REQUESTS);
      }
    } else {
      // Utiliser fallback pour les cartes suivantes
      cardWithImage.image = FALLBACK_IMAGE_DATA_URL;
    }

    cardsWithImages.push(cardWithImage);
  }

  return cardsWithImages;
};
```

## 📊 Comparaison des modèles Imagen

| Modèle | Nom technique | Qualité | Quota par défaut | Coût |
|--------|---------------|---------|------------------|------|
| Imagen 3 | imagen-3.0-generate-001 | ⭐⭐⭐⭐⭐ | 5 req/min | $0.04 |
| Imagen 2 | imagegeneration@006 | ⭐⭐⭐⭐ | 10 req/min* | $0.02 |
| Imagen 1 | imagegeneration@002 | ⭐⭐⭐ | 20 req/min* | $0.01 |

*Quotas indicatifs, peuvent varier selon le projet

## 🎯 Recommandation

### Court terme (aujourd'hui)

**Option A** : Essayer Imagen 2
```env
IMAGEN_MODEL=imagegeneration@006
NUM_CARDS_TO_GENERATE=10
IMAGEN_DELAY_MS=6000
```

**Option B** : Mode hybride (3 Imagen 3 + 7 fallback)
```env
IMAGEN_MODEL=imagen-3.0-generate-001
NUM_CARDS_TO_GENERATE=10
MAX_IMAGEN_IMAGES=3
IMAGEN_DELAY_MS=20000
```

### Moyen terme (1-2 jours)

Demander l'augmentation du quota Imagen 3 à 60 req/min.

Une fois approuvé :
```env
IMAGEN_MODEL=imagen-3.0-generate-001
NUM_CARDS_TO_GENERATE=20
IMAGEN_DELAY_MS=1000
```

## 🔍 Vérifier les quotas via gcloud CLI

```bash
# Lister tous les quotas Vertex AI
gcloud compute project-info describe --project=fresquia-imagen \
  | grep -i "vertex\|imagen"

# Voir les quotas détaillés
gcloud services quotas list \
  --service=aiplatform.googleapis.com \
  --project=fresquia-imagen \
  --filter="metric.displayName:generate"
```

## 📞 Support Google Cloud

Si la demande d'augmentation est refusée ou prend trop de temps :

1. Ouvrez un ticket de support : https://console.cloud.google.com/support
2. Catégorie : "Quotas"
3. Expliquez votre cas d'usage éducatif
4. Mentionnez que vous êtes prêt à payer pour l'utilisation

## 💡 Alternative : Utiliser DALL-E ou Stable Diffusion

Si les quotas Google restent problématiques :

### DALL-E 3 (OpenAI)
- Quota : 50 images/minute
- Coût : $0.04 par image (1024x1024)
- Qualité : ⭐⭐⭐⭐⭐

### Stable Diffusion (Stability AI)
- Quota : 150 images/minute
- Coût : $0.002 par image
- Qualité : ⭐⭐⭐⭐

## 📝 Résumé

✅ Le quota global (20%) n'est pas le problème
❌ Le quota **par minute par modèle** (5 req/min) est le blocage
🎯 **Solution immédiate** : Essayer Imagen 2 ou mode hybride
🚀 **Solution long terme** : Demander augmentation à 60 req/min
⏱️ **Délai d'approbation** : 1-2 jours ouvrables
