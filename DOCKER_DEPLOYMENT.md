# Déploiement avec Docker

Cette application peut maintenant être déployée facilement avec Docker et docker-compose.

## 🚀 Déploiement sur Render (Recommandé)

### Configuration automatique avec render.yaml

1. **Poussez votre code sur GitHub**
   ```bash
   git add .
   git commit -m "feat: add Docker deployment configuration"
   git push origin main
   ```

2. **Connectez Render à votre dépôt GitHub**
   - Allez sur [Render Dashboard](https://dashboard.render.com)
   - Cliquez sur "New" → "Blueprint"
   - Connectez votre dépôt GitHub
   - Render détectera automatiquement le fichier `render.yaml`

3. **Configurez les variables d'environnement secrètes**
   Dans le dashboard Render, ajoutez ces variables :
   - `GEMINI_API_KEY` : Votre clé Google Gemini
   - `STABILITY_API_KEY` : Votre clé Stability AI
   - `FIREBASE_PROJECT_ID` : Votre ID projet Firebase

4. **Déployez**
   - Render lira automatiquement la configuration `render.yaml`
   - **Deux services** seront créés automatiquement :
     - `fresquia-backend` : API Docker (plan payant)
     - `fresquia-frontend` : Site statique React (gratuit)
   - Le déploiement prendra quelques minutes
   - Votre application sera disponible sur deux URLs :
     - Frontend : `https://fresquia-frontend.onrender.com`
     - Backend : `https://fresquia-backend.onrender.com`

5. **Configuration finale**
   - Le frontend se connecte automatiquement au backend via `REACT_APP_API_URL`
   - Ajoutez vos clés API seulement dans le service backend

### Configuration manuelle (si pas de render.yaml)

Si vous préférez configurer manuellement :

1. Créez un nouveau **Web Service** sur Render
2. Sélectionnez **Docker** comme runtime
3. Pointez vers votre dépôt GitHub
4. Dans "Dockerfile Path" : `./Dockerfile`
5. Ajoutez les variables d'environnement comme ci-dessus

## 🏗️ Architecture de déploiement

Votre application est déployée selon une architecture moderne **frontend/backend séparés** :

### Services créés automatiquement

1. **fresquia-frontend** (Static Site - Gratuit)
   - Sert l'interface React compilée
   - Construit automatiquement avec `build-frontend.bat`
   - Reçoit automatiquement l'URL de l'API backend
   - URL : `https://fresquia-frontend.onrender.com`

2. **fresquia-backend** (Docker - Payant)
   - API Express.js + SQLite
   - Gemini AI, Stability AI, Firebase
   - Base de données persistée
   - URL : `https://fresquia-backend.onrender.com`

### Communication

- Le frontend appelle automatiquement le backend via `REACT_APP_API_URL`
- CORS configuré pour permettre la communication
- Toutes les clés API sont stockées uniquement côté backend

## Développement local avec Docker Compose

### Prérequis

- Docker
- Docker Compose

## Démarrage rapide

1. **Cloner le projet**
   ```bash
   git clone <your-repo-url>
   cd fresquia-local
   ```

2. **Configurer les variables d'environnement**

   Copiez le fichier d'exemple et configurez vos clés API :
   ```bash
   cp backend/.env.example backend/.env
   ```

   Éditez `backend/.env` avec vos vraies clés :
   ```env
   GEMINI_API_KEY=your_gemini_api_key
   STABILITY_API_KEY=your_stability_api_key
   FIREBASE_PROJECT_ID=your_firebase_project_id
   PDF_ASSET_BASE_URL=https://your-domain.com
   ```

3. **Construire et démarrer les services**
   ```bash
   docker-compose up --build
   ```

4. **Vérifier que l'application fonctionne**

   L'API sera accessible sur http://localhost:3001

   Test rapide :
   ```bash
   curl http://localhost:3001/api/cards/generate-context \
     -X POST \
     -H "Content-Type: application/json" \
     -d '{"theme":"test","publicTarget":"test"}'
   ```

## Commandes utiles

```bash
# Démarrer en arrière-plan
docker-compose up -d

# Voir les logs
docker-compose logs -f backend

# Arrêter les services
docker-compose down

# Reconstruire après modification
docker-compose up --build --force-recreate

# Nettoyer les volumes (attention : supprime les données)
docker-compose down -v
```

## Structure des services

- **Backend** : API Express.js avec SQLite, Gemini AI, Stability AI
  - Port : 3001
  - Base de données : SQLite (persistée dans volume Docker)
  - Cache : Persisté dans volume Docker

## Variables d'environnement importantes

| Variable | Description | Obligatoire |
|----------|-------------|-------------|
| `GEMINI_API_KEY` | Clé API Google Gemini | Oui |
| `STABILITY_API_KEY` | Clé API Stability AI | Oui |
| `FIREBASE_PROJECT_ID` | ID projet Firebase | Oui |
| `PDF_ASSET_BASE_URL` | URL de base pour les assets PDF | Non |

## Déploiement en production

Pour la production, considérez :

1. **Railway** (recommandé) :
   ```bash
   # Déployer directement depuis GitHub
   # Railway détecte automatiquement docker-compose.yml
   ```

2. **Render** :
   - Créez un service web
   - Connectez votre repo GitHub
   - Render lira automatiquement le Dockerfile

3. **Autres options** :
   - DigitalOcean App Platform
   - Google Cloud Run
   - AWS ECS

## Volumes persistés

- `backend_data` : Base de données SQLite
- `backend_cache` : Cache des images générées

Ces volumes assurent que vos données persistent entre les redémarrages de conteneurs.

## Dépannage

### Problèmes courants

1. **Erreur de build sqlite3**
   - Assurez-vous que Docker dispose de suffisamment de mémoire

2. **API ne répond pas**
   ```bash
   docker-compose logs backend
   ```

3. **Données perdues**
   - Les volumes Docker sont persistés automatiquement
   - Pour réinitialiser : `docker-compose down -v`

### Logs détaillés

```bash
# Logs du backend
docker-compose logs -f backend

# Logs avec timestamps
docker-compose logs -f --timestamps backend
```
