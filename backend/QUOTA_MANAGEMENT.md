# 📊 Gestion des quotas Imagen 3

## 🚨 Problème résolu : Quota exceeded

### Erreur rencontrée
```
429 Too Many Requests
Quota exceeded for generate_content_requests_per_minute_per_project
```

### Cause
Par défaut, Google Cloud limite les nouveaux projets à **5 requêtes/minute** pour Imagen 3.
Générer 20 cartes en même temps dépasse ce quota.

## ✅ Solution implémentée

### Délai automatique entre les requêtes

Le code ajoute maintenant un **délai de 12 secondes** entre chaque génération d'image.

**Configuration dans `.env`** :
```env
IMAGEN_DELAY_MS=12000  # 12 secondes = 5 requêtes/minute
```

### Temps de génération

Pour 20 cartes :
- **Avant** : Toutes en parallèle → Erreur de quota
- **Maintenant** : 20 × 12s = **~4 minutes** pour générer toutes les images

### Logs améliorés

Vous verrez maintenant :
```
Generating image 1/20 for "La Fouille Stratigraphique"...
✓ Image generated for "La Fouille Stratigraphique"
Waiting 12s before next request...
Generating image 2/20 for "Analyse des Vestiges"...
✓ Image generated for "Analyse des Vestiges"
...
```

## 📈 Augmenter les quotas (Optionnel)

Si vous voulez générer plus rapidement, demandez une augmentation de quota :

### 1. Via la console Google Cloud

1. Allez sur https://console.cloud.google.com/iam-admin/quotas
2. Sélectionnez votre projet `fresquia-imagen`
3. Recherchez : `Vertex AI API - Generate content requests per minute per project per base model`
4. Sélectionnez le quota pour `imagen-3.0-generate`
5. Cliquez sur "Edit Quotas"
6. Demandez une augmentation (ex: 60 requêtes/minute)

### 2. Via gcloud CLI

```bash
# Voir les quotas actuels
gcloud compute project-info describe --project=fresquia-imagen

# Demander une augmentation nécessite un formulaire web
```

### 3. Ajuster le délai après augmentation

Si vous obtenez **60 requêtes/minute** :
```env
IMAGEN_DELAY_MS=1000  # 1 seconde entre chaque requête
```

Pour 20 cartes : **~20 secondes** au lieu de 4 minutes !

## 💰 Impact sur les coûts

Le délai n'affecte **pas** les coûts, seulement le temps de génération.

**Coût** : ~$0.04 par image × 20 cartes = **~$0.80 par génération**

Que vous génériez en 20 secondes ou 4 minutes, le coût reste le même.

## 🎯 Quotas par défaut Google Cloud

| Quota | Valeur par défaut | Après demande |
|-------|-------------------|---------------|
| Requêtes/minute | 5 | 60-300 |
| Requêtes/jour | 1000 | 10000+ |
| Images/projet | Illimité | Illimité |

## 🔧 Configuration recommandée

### Pour développement (quota par défaut)
```env
IMAGEN_DELAY_MS=12000  # 5 req/min
```
→ 4 minutes pour 20 cartes

### Pour production (quota augmenté à 60/min)
```env
IMAGEN_DELAY_MS=1000   # 60 req/min
```
→ 20 secondes pour 20 cartes

### Pour tests rapides (quota augmenté à 300/min)
```env
IMAGEN_DELAY_MS=200    # 300 req/min
```
→ 4 secondes pour 20 cartes

## 🚀 Alternative : Génération asynchrone

Pour une meilleure expérience utilisateur, vous pourriez implémenter :

### 1. Génération en arrière-plan
- L'utilisateur reçoit les cartes avec des placeholders
- Les images se génèrent progressivement
- WebSocket pour mettre à jour en temps réel

### 2. Cache des images
- Sauvegarder les images générées
- Réutiliser pour les mêmes cartes
- Économie de coûts et de temps

### 3. Batch processing
- Queue système (Bull, BullMQ)
- Générer plusieurs collections en parallèle
- Respecter les quotas globaux

## 📊 Monitoring des quotas

### Via la console
https://console.cloud.google.com/apis/api/aiplatform.googleapis.com/quotas

### Via gcloud
```bash
gcloud monitoring time-series list \
    --filter='metric.type="serviceruntime.googleapis.com/quota/rate/net_usage"' \
    --project=fresquia-imagen
```

## ⚠️ Gestion des erreurs

Le code gère automatiquement les erreurs de quota :
- Si une image échoue → Utilise l'image de fallback (SVG)
- Les autres images continuent à se générer
- Métriques trackées : `imageFailures`

## 🎓 Résumé

✅ **Problème résolu** : Délai automatique entre les requêtes
✅ **Temps actuel** : ~4 minutes pour 20 cartes
✅ **Configurable** : Variable `IMAGEN_DELAY_MS` dans `.env`
✅ **Évolutif** : Ajustable selon vos quotas Google Cloud

Pour générer plus vite, demandez une augmentation de quota via la console Google Cloud !
