# 🚀 Démarrage rapide - Imagen 3

## ✅ Ce qui est déjà fait

- ✅ Configuration du `.env` avec les bonnes variables
- ✅ Installation de `@google-cloud/vertexai` dans le backend
- ✅ Code backend mis à jour pour utiliser Imagen 3
- ✅ Google Cloud SDK installé

## 📋 Étapes restantes

### 1. Redémarrer votre terminal PowerShell

Fermez et rouvrez PowerShell pour que `gcloud` soit reconnu dans le PATH.

### 2. Vérifier que gcloud fonctionne

```powershell
gcloud --version
```

Vous devriez voir :
```
Google Cloud SDK 456.0.0
...
```

### 3. S'authentifier avec Google Cloud

```powershell
gcloud auth application-default login
```

Cela ouvrira votre navigateur pour vous connecter avec votre compte Google.

### 4. Configurer le projet

```powershell
gcloud config set project fresquia-imagen
```

### 5. Activer l'API Vertex AI

```powershell
gcloud services enable aiplatform.googleapis.com
```

### 6. Vérifier que le projet existe

```powershell
gcloud projects describe fresquia-imagen
```

**Si le projet n'existe pas**, créez-le :

```powershell
# Créer le projet
gcloud projects create fresquia-imagen --name="Fresquia Imagen"

# Lier la facturation (remplacez BILLING_ACCOUNT_ID)
gcloud billing projects link fresquia-imagen --billing-account=BILLING_ACCOUNT_ID
```

Pour trouver votre BILLING_ACCOUNT_ID :
```powershell
gcloud billing accounts list
```

### 7. Démarrer le serveur backend

```powershell
cd E:\projetsIA\fresquia\backend
node src/index.js
```

Vous devriez voir :
```
Server is running on port 3001
✓ Gemini API initialized
✓ Vertex AI initialized for project: fresquia-imagen
```

### 8. Tester la génération

Depuis le frontend (http://localhost:3000 ou 3002), générez des cartes !

## 🔍 Vérification

### Si vous voyez ce warning :
```
⚠ GOOGLE_CLOUD_PROJECT_ID is not defined. Image generation will use fallback.
```
→ Vérifiez le fichier `.env`

### Si vous voyez :
```
Error: Could not load the default credentials
```
→ Exécutez `gcloud auth application-default login`

### Si vous voyez :
```
Error: Permission denied
```
→ Vérifiez que l'API Vertex AI est activée et que la facturation est configurée

## 🎯 Test rapide sans configuration complète

Si vous voulez tester sans configurer Imagen 3 tout de suite :

1. Le système utilisera automatiquement les images SVG de fallback
2. Vous verrez : `⚠ Vertex AI not initialized. Using fallback images for all cards.`
3. Les cartes auront une icône de point d'interrogation

## 💡 Alternative : Utiliser un Service Account

Si vous préférez ne pas utiliser vos credentials personnels :

1. Créer un service account :
```powershell
gcloud iam service-accounts create fresquia-sa --display-name="Fresquia Service Account"
```

2. Donner les permissions :
```powershell
gcloud projects add-iam-policy-binding fresquia-imagen `
    --member="serviceAccount:fresquia-sa@fresquia-imagen.iam.gserviceaccount.com" `
    --role="roles/aiplatform.user"
```

3. Créer une clé :
```powershell
gcloud iam service-accounts keys create fresquia-key.json `
    --iam-account=fresquia-sa@fresquia-imagen.iam.gserviceaccount.com
```

4. Ajouter au `.env` :
```env
GOOGLE_APPLICATION_CREDENTIALS=E:\projetsIA\fresquia\backend\fresquia-key.json
```

## 📞 Besoin d'aide ?

- [Documentation complète](./IMAGEN3_SETUP.md)
- [Console Google Cloud](https://console.cloud.google.com/)
- [Vertex AI Console](https://console.cloud.google.com/vertex-ai)
