# 🔐 Correction de l'erreur d'authentification

## ❌ Erreur actuelle

```
[VertexAI.GoogleAuthError]: Unable to authenticate your request
```

## ✅ Solution en 3 étapes

### Étape 1 : Redémarrer le terminal

1. **Fermez complètement** votre terminal PowerShell actuel
2. **Ouvrez un nouveau** terminal PowerShell
3. Naviguez vers le backend :
   ```powershell
   cd E:\projetsIA\fresquia\backend
   ```

### Étape 2 : Vérifier que gcloud fonctionne

```powershell
gcloud --version
```

**Si ça ne fonctionne pas** :
- Trouvez où Google Cloud SDK est installé (généralement `C:\Users\VotreNom\AppData\Local\Google\Cloud SDK\google-cloud-sdk\bin`)
- Ajoutez ce chemin au PATH système

**Pour ajouter au PATH temporairement** :
```powershell
$env:Path += ";C:\Users\VotreNom\AppData\Local\Google\Cloud SDK\google-cloud-sdk\bin"
```

### Étape 3 : S'authentifier

```powershell
# S'authentifier avec votre compte Google
gcloud auth application-default login
```

Cela ouvrira votre navigateur. Connectez-vous avec votre compte Google.

### Étape 4 : Créer le projet (si nécessaire)

```powershell
# Vérifier si le projet existe
gcloud projects describe fresquia-imagen

# Si le projet n'existe pas, le créer
gcloud projects create fresquia-imagen --name="Fresquia Imagen"

# Configurer le projet par défaut
gcloud config set project fresquia-imagen
```

### Étape 5 : Activer l'API Vertex AI

```powershell
gcloud services enable aiplatform.googleapis.com
```

### Étape 6 : Configurer la facturation

⚠️ **Important** : Vertex AI nécessite un compte de facturation actif.

1. Allez sur https://console.cloud.google.com/billing
2. Créez ou sélectionnez un compte de facturation
3. Liez-le au projet :

```powershell
# Lister vos comptes de facturation
gcloud billing accounts list

# Lier le compte au projet (remplacez BILLING_ACCOUNT_ID)
gcloud billing projects link fresquia-imagen --billing-account=010C09-9F4B9B-B13723
```

### Étape 7 : Redémarrer le serveur

```powershell
node src/index.js
```

## 🎯 Vérification

Vous devriez voir :
```
Server is running on port 3001
✓ Vertex AI initialized for project: fresquia-imagen
```

Et lors de la génération :
```
Generated 20 cards with images
Image requests: 20
Image failures: 0
```

## 🔄 Alternative : Service Account (Pour production)

Si vous préférez ne pas utiliser vos credentials personnels :

### 1. Créer un service account

```powershell
gcloud iam service-accounts create fresquia-sa --display-name="Fresquia Service Account"
```

### 2. Donner les permissions

```powershell
gcloud projects add-iam-policy-binding fresquia-imagen `
    --member="serviceAccount:fresquia-sa@fresquia-imagen.iam.gserviceaccount.com" `
    --role="roles/aiplatform.user"
```

### 3. Créer une clé JSON

```powershell
gcloud iam service-accounts keys create E:\projetsIA\fresquia\backend\fresquia-key.json `
    --iam-account=fresquia-sa@fresquia-imagen.iam.gserviceaccount.com
```

### 4. Ajouter au .env

```env
GOOGLE_APPLICATION_CREDENTIALS=E:\projetsIA\fresquia\backend\fresquia-key.json
```

## 🆘 Si ça ne fonctionne toujours pas

### Option temporaire : Désactiver Imagen 3

Commentez temporairement les variables dans `.env` :

```env
GEMINI_API_KEY="AIzaSyABeeyMDtGM40Yp5FyMOIBHnc-tFvafrTs"
# GOOGLE_CLOUD_PROJECT_ID="fresquia-imagen"
# GOOGLE_CLOUD_LOCATION="us-central1"
GEMINI_TEXT_MODEL="gemini-2.5-flash-lite"
IMAGEN_MODEL="imagen-3.0-generate-001"
```

Le système utilisera automatiquement les images de fallback (icônes SVG).

## 📞 Ressources

- [Installation Google Cloud SDK](https://cloud.google.com/sdk/docs/install)
- [Authentification](https://cloud.google.com/docs/authentication/getting-started)
- [Console Google Cloud](https://console.cloud.google.com/)
- [Vertex AI Pricing](https://cloud.google.com/vertex-ai/pricing)
