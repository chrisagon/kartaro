# 🔍 Comment trouver et augmenter le quota Imagen

## ❌ Pourquoi vous ne trouvez pas "imagen" dans les quotas

Les quotas Imagen 3 n'apparaissent pas dans la liste IAM par défaut car :
1. Ils sont dans la section **API & Services** (pas IAM)
2. Ils n'apparaissent qu'après la première utilisation de l'API
3. Le nom exact peut varier

## ✅ Méthode 1 : Via API & Services (Recommandé)

### Étape 1 : Aller dans API & Services

1. Allez sur : https://console.cloud.google.com/apis/api/aiplatform.googleapis.com/quotas?project=fresquia-imagen
2. Ou depuis le menu : **API & Services** → **Vertex AI API** → **Quotas**

### Étape 2 : Filtrer les quotas

Dans la barre de recherche, tapez :
```
generate content
```

Ou :
```
imagen
```

### Étape 3 : Trouver le bon quota

Cherchez :
- **Nom** : `Generate content requests per minute per project per base model`
- **Dimensions** : Cliquez pour voir les détails
- **Base model** : `imagen-3.0-generate` ou `imagen-3.0-generate-002`

### Étape 4 : Demander l'augmentation

1. Cliquez sur le quota
2. Cliquez sur **"Edit Quotas"** ou **"Request quota increase"**
3. Remplissez :
   - **Nouvelle limite** : 60
   - **Justification** : "Application éducative de génération de cartes pédagogiques. Besoin de générer 10-20 images par session."

## ✅ Méthode 2 : Via gcloud CLI

### Lister tous les quotas Vertex AI

```bash
gcloud services quotas list \
  --service=aiplatform.googleapis.com \
  --project=fresquia-imagen \
  --filter="metric.displayName:generate"
```

### Trouver le quota Imagen spécifique

```bash
gcloud services quotas list \
  --service=aiplatform.googleapis.com \
  --project=fresquia-imagen \
  --filter="dimensions.base_model:imagen"
```

### Demander une augmentation via CLI

```bash
# Remplacez QUOTA_ID par l'ID trouvé ci-dessus
gcloud services quotas update QUOTA_ID \
  --service=aiplatform.googleapis.com \
  --project=fresquia-imagen \
  --value=60
```

## ✅ Méthode 3 : Forcer l'apparition du quota

Si le quota n'apparaît toujours pas, c'est peut-être parce qu'il n'a jamais été utilisé.

### Faire une requête test

Le serveur backend est configuré. Essayez de générer des cartes :
1. Le quota apparaîtra après la première erreur 429
2. Retournez dans la console quotas
3. Le quota devrait maintenant être visible

## ✅ Méthode 4 : Utiliser le formulaire de support

Si rien ne fonctionne :

### Ouvrir un ticket de support

1. Allez sur : https://console.cloud.google.com/support/cases?project=fresquia-imagen
2. Cliquez sur **"Create Case"**
3. Sélectionnez :
   - **Type** : Quota increase
   - **Service** : Vertex AI
   - **Quota** : Generate content requests per minute per base model (imagen-3.0-generate)
4. Demandez : 60 requêtes/minute
5. Justification : "Application éducative nécessitant la génération de 10-20 images par session"

## 🎯 Solution temporaire : Tester avec le quota actuel

En attendant l'augmentation, votre configuration actuelle devrait fonctionner :

```env
IMAGEN_MODEL="imagen-3.0-generate-002"
NUM_CARDS_TO_GENERATE=10
IMAGEN_DELAY_MS=30000  # 30 secondes entre chaque image
```

Avec 30 secondes de délai, vous générez **2 images/minute**, bien en dessous du quota de 5.

### Temps de génération

Pour 10 cartes :
- Texte : ~5 secondes
- Images : 10 × 30s = 300 secondes (5 minutes)
- **Total : ~5 minutes**

C'est lent, mais ça devrait fonctionner sans erreur 429.

## 📊 Quotas par défaut selon les modèles

| Modèle | Nom technique | Quota par défaut |
|--------|---------------|------------------|
| Imagen 3 Fast | imagen-3.0-fast-generate-001 | 10 req/min |
| Imagen 3 | imagen-3.0-generate-001 | 5 req/min |
| Imagen 3 v2 | imagen-3.0-generate-002 | 5 req/min |
| Imagen 2 | imagegeneration@006 | 10-20 req/min |

## 🚀 Alternative : Essayer Imagen 3 Fast

Imagen 3 Fast a un quota plus élevé par défaut :

```env
IMAGEN_MODEL="imagen-3.0-fast-generate-001"
NUM_CARDS_TO_GENERATE=10
IMAGEN_DELAY_MS=6000  # 6 secondes
```

Avantages :
- Quota : 10 req/min (au lieu de 5)
- Vitesse : Plus rapide
- Coût : Légèrement moins cher

Inconvénient :
- Qualité légèrement inférieure à Imagen 3 standard

## 📝 Checklist de dépannage

- [ ] API Vertex AI activée : https://console.cloud.google.com/apis/library/aiplatform.googleapis.com?project=fresquia-imagen
- [ ] Facturation activée : https://console.cloud.google.com/billing?project=fresquia-imagen
- [ ] Première requête effectuée (pour faire apparaître le quota)
- [ ] Recherche dans API & Services → Vertex AI API → Quotas
- [ ] Recherche avec les termes : "generate content", "imagen", "base model"

## 🔗 Liens directs utiles

- **API Vertex AI** : https://console.cloud.google.com/apis/api/aiplatform.googleapis.com?project=fresquia-imagen
- **Quotas Vertex AI** : https://console.cloud.google.com/apis/api/aiplatform.googleapis.com/quotas?project=fresquia-imagen
- **Facturation** : https://console.cloud.google.com/billing?project=fresquia-imagen
- **Support** : https://console.cloud.google.com/support?project=fresquia-imagen

## 💡 Conseil

Pendant que vous attendez l'augmentation de quota ou que vous cherchez comment le modifier, **testez avec la configuration actuelle** (30s de délai). Ça devrait fonctionner et vous permettre de valider que tout le reste fonctionne correctement !
