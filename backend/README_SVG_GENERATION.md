# Génération d'images SVG via Gemini

## 🎨 Vue d'ensemble

Le système génère maintenant des **illustrations SVG personnalisées** pour chaque carte via l'API Gemini, au lieu d'essayer d'utiliser un modèle de génération d'images inexistant.

## ⚙️ Fonctionnement

### 1. Modèle utilisé
- **Modèle** : `gemini-2.5-flash-lite` (configurable via `GEMINI_SVG_MODEL`)
- **Type** : Génération de texte (code SVG)
- **Avantages** :
  - ✅ Gratuit et fiable
  - ✅ Illustrations vectorielles évolutives
  - ✅ Personnalisées selon le contexte
  - ✅ Utilise les couleurs de catégorie

### 2. Processus de génération

Pour chaque carte :
1. **Prompt détaillé** envoyé à Gemini avec :
   - Titre et description de la carte
   - Catégorie et couleur associée
   - Thème et contexte du workshop
   - Instructions de style (flat design, moderne, centré)

2. **Extraction du SVG** :
   - Recherche du code SVG dans la réponse
   - Support des réponses avec ou sans markdown
   - Validation du format

3. **Conversion en Data URL** :
   - Encodage base64 du SVG
   - Format : `data:image/svg+xml;base64,...`

4. **Fallback** :
   - En cas d'échec, utilisation d'une icône SVG par défaut (point d'interrogation)

### 3. Exemple de prompt

```
You are a skilled SVG artist creating an illustration for a card in an educational workshop.

Card Details:
- Title: "Le Site de Pompéi"
- Description: "Site archéologique majeur..."
- Category: Lieux/Sites et Objets
- Theme: Archéologie
- Context: Archéologue pédagogue expert...

Create a clean, modern SVG illustration (512x512 viewBox) that visually represents this card's concept.

Requirements:
- Use the category color #14b8a6 as the primary color
- Modern flat design style with 2-3 complementary colors
- Simple, bold shapes that are easy to understand
- No text or labels in the SVG
- Centered composition
- Professional and visually appealing

Return ONLY the complete SVG code, starting with <svg> and ending with </svg>.
```

## 📊 Métriques

Le système continue de tracker :
- `imageRequests` : Nombre de requêtes SVG
- `imageFailures` : Nombre d'échecs de génération
- `textRequests` : Requêtes pour le texte des cartes

## 🔧 Configuration

Variables d'environnement (`.env`) :
```env
GEMINI_API_KEY=votre_clé_api
GEMINI_TEXT_MODEL=gemini-2.5-flash-lite  # Optionnel
GEMINI_SVG_MODEL=gemini-2.5-flash-lite   # Optionnel
```

## 🎯 Résultat

Chaque carte reçoit une illustration SVG unique :
- Adaptée au contenu de la carte
- Utilisant la palette de couleurs de la catégorie
- Style moderne et professionnel
- Vectorielle (scalable sans perte de qualité)

## 🚀 Améliorations futures possibles

1. **Cache des SVG** : Éviter de régénérer les mêmes illustrations
2. **Styles prédéfinis** : Templates SVG par catégorie
3. **Optimisation SVG** : Minification du code généré
4. **Variantes** : Plusieurs styles au choix (flat, 3D, minimaliste)
