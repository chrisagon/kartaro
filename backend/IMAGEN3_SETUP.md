# Configuration d'Imagen 3 pour la génération d'images

## 📋 Prérequis

1. **Compte Google Cloud Platform (GCP)**
2. **Projet GCP avec facturation activée**
3. **API Vertex AI activée**

## 💰 Coûts Imagen 3

### Tarification (au 11 octobre 2025)

| Type de génération | Résolution | Prix par image |
|-------------------|------------|----------------|
| Standard | 1024x1024 | ~$0.04 |
| Rapide | 1024x1024 | ~$0.02 |

**Pour 20 cartes** : ~$0.40 à $0.80 par génération complète

### Estimation mensuelle
- 10 générations/jour : ~$120-240/mois
- 5 générations/jour : ~$60-120/mois
- 1 génération/jour : ~$12-24/mois

## 🔧 Configuration étape par étape

### 1. Créer un projet Google Cloud

```bash
# Via la console : https://console.cloud.google.com/
# Ou via gcloud CLI :
gcloud projects create fresquia-imagen --name="Fresquia Imagen"
gcloud config set project fresquia-imagen
```

### 2. Activer la facturation

1. Aller sur https://console.cloud.google.com/billing
2. Lier une carte de crédit au projet
3. Activer la facturation pour le projet `fresquia-imagen`

### 3. Activer l'API Vertex AI

```bash
# Via gcloud CLI :
gcloud services enable aiplatform.googleapis.com

# Ou via la console :
# https://console.cloud.google.com/apis/library/aiplatform.googleapis.com
```

### 4. Configurer l'authentification

#### Option A : Application Default Credentials (Développement local)

```bash
# Installer gcloud CLI : https://cloud.google.com/sdk/docs/install
gcloud auth application-default login
```

#### Option B : Service Account (Production)

```bash
# 1. Créer un service account
gcloud iam service-accounts create fresquia-imagen-sa \
    --display-name="Fresquia Imagen Service Account"

# 2. Donner les permissions nécessaires
gcloud projects add-iam-policy-binding fresquia-imagen \
    --member="serviceAccount:fresquia-imagen-sa@fresquia-imagen.iam.gserviceaccount.com" \
    --role="roles/aiplatform.user"

# 3. Créer et télécharger la clé
gcloud iam service-accounts keys create ~/fresquia-key.json \
    --iam-account=fresquia-imagen-sa@fresquia-imagen.iam.gserviceaccount.com

# 4. Définir la variable d'environnement
export GOOGLE_APPLICATION_CREDENTIALS="$HOME/fresquia-key.json"
```

### 5. Configurer le fichier `.env`

Copier `.env.example` vers `.env` et remplir :

```env
# Gemini API Key (pour la génération de texte)
GEMINI_API_KEY=votre_clé_gemini

# Google Cloud Project (pour Imagen 3)
GOOGLE_CLOUD_PROJECT_ID=fresquia-imagen
GOOGLE_CLOUD_LOCATION=us-central1

# Optionnel
GEMINI_TEXT_MODEL=gemini-2.5-flash-lite
IMAGEN_MODEL=imagen-3.0-generate-001
```

### 6. Installer les dépendances

```bash
npm install @google-cloud/vertexai
```

### 7. Tester la configuration

```bash
# Démarrer le serveur
node src/index.js

# Tester via le frontend ou curl
curl -X POST http://localhost:3001/api/generate-cards \
  -H "Content-Type: application/json" \
  -d '{"theme":"Test","context":"Test context"}'
```

## 🔍 Vérification

### Logs attendus au démarrage

```
Server is running on port 3001
✓ Gemini API initialized
✓ Vertex AI initialized for project: fresquia-imagen
```

### En cas d'erreur

```
⚠ GOOGLE_CLOUD_PROJECT_ID is not defined. Image generation will use fallback.
```
→ Vérifier le fichier `.env`

```
Error: Could not load the default credentials
```
→ Exécuter `gcloud auth application-default login`

## 📊 Monitoring des coûts

### Via la console GCP

1. Aller sur https://console.cloud.google.com/billing
2. Sélectionner votre projet
3. Voir "Reports" pour les coûts détaillés

### Configurer des alertes de budget

```bash
# Créer un budget de $50/mois avec alerte à 80%
gcloud billing budgets create \
    --billing-account=YOUR_BILLING_ACCOUNT_ID \
    --display-name="Fresquia Imagen Budget" \
    --budget-amount=50USD \
    --threshold-rule=percent=80
```

## 🎨 Qualité des images

### Paramètres configurables

Dans `GeminiService.js`, ligne ~278 :

```javascript
generationConfig: {
  maxOutputTokens: 8192,
  temperature: 0.4,  // 0.0-1.0 : Créativité (0.4 = équilibré)
  topP: 0.95,        // 0.0-1.0 : Diversité
}
```

### Ajuster la qualité vs coût

- **Haute qualité** : `temperature: 0.3, topP: 0.9` → Plus cohérent, légèrement plus cher
- **Créatif** : `temperature: 0.6, topP: 0.95` → Plus varié, même coût
- **Économique** : Réduire le nombre de cartes générées

## 🚀 Optimisations possibles

### 1. Cache des images
Sauvegarder les images générées pour éviter de régénérer :

```javascript
// À implémenter : système de cache basé sur hash du prompt
const cacheKey = crypto.createHash('md5').update(prompt).digest('hex');
```

### 2. Génération asynchrone
Générer les images en arrière-plan :

```javascript
// Queue system avec Bull ou similaire
```

### 3. Batch processing
Générer plusieurs images en parallèle (attention aux quotas) :

```javascript
await Promise.all(cards.map(card => generateImage(card)));
```

## 📝 Résolution de problèmes

### Quota exceeded
```
Error: Quota exceeded for quota metric 'Generate requests'
```
→ Demander une augmentation de quota : https://console.cloud.google.com/iam-admin/quotas

### Images de mauvaise qualité
→ Améliorer le prompt dans `buildImagePrompt()`
→ Ajuster `temperature` et `topP`

### Coûts trop élevés
→ Implémenter un système de cache
→ Réduire le nombre de cartes par génération
→ Utiliser des images prédéfinies pour certaines catégories

## 🔗 Ressources

- [Documentation Imagen 3](https://cloud.google.com/vertex-ai/docs/generative-ai/image/overview)
- [Tarification Vertex AI](https://cloud.google.com/vertex-ai/pricing)
- [Quotas et limites](https://cloud.google.com/vertex-ai/docs/quotas)
- [Exemples de code](https://github.com/GoogleCloudPlatform/nodejs-docs-samples/tree/main/generative-ai)
