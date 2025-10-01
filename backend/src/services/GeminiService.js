require('dotenv').config();

const { GoogleGenerativeAI } = require('@google/generative-ai');

// IMPORTANT: Make sure to create a .env file in the backend directory with your API_KEY
const API_KEY = process.env.GEMINI_API_KEY;

const genAI = new GoogleGenerativeAI(API_KEY);

class GeminiService {
  static async generateCards(theme, context) {
    try {
      // Modèle mis à jour selon votre demande
      const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash-lite' });

      const prompt = `Générez une liste de cartes pour un atelier sur le thème \"${theme}\" et le contexte \"${context}\".
      Les catégories de cartes sont : Processus, Étapes, Composants, Actions, Bonus et Malus, Catégories et Critères, Lieux/sites et Choses/Objets, Personas, Concepts.
      Pour chaque carte, fournissez un titre, une description, une icône (emoji) et une catégorie.
      Le format de sortie doit être un tableau JSON d'objets, où chaque objet représente une carte.
      Exemple de format de sortie :
      [
        {
          "title": "Titre de la carte",
          "description": "Description de la carte",
          "icon": "💡",
          "category": "Concept"
        }
      ]
      `;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = await response.text();

      // Attempt to parse the entire response as JSON first
      try {
        const jsonData = JSON.parse(text);
        return jsonData;
      } catch (e) {
        // If parsing fails, try to extract from markdown
        const jsonMatch = text.match(/```json\s*([\s\S]*?)\s*```/);
        if (jsonMatch && jsonMatch[1]) {
          try {
            return JSON.parse(jsonMatch[1]);
          } catch (parseError) {
            console.error('Failed to parse JSON from markdown:', parseError);
            console.error('Original text that failed parsing:', jsonMatch[1]);
            throw new Error('Invalid JSON format in model response.');
          }
        }

        // Fallback for non-markdown, partial JSON
        const startIndex = text.indexOf('[');
        const endIndex = text.lastIndexOf(']');
        if (startIndex !== -1 && endIndex !== -1) {
          const jsonText = text.substring(startIndex, endIndex + 1);
          try {
            return JSON.parse(jsonText);
          } catch (parseError) {
            console.error('Failed to parse substring JSON:', parseError);
            console.error('Original text that failed parsing:', jsonText);
            throw new Error('Invalid JSON format in model response.');
          }
        }

        console.error('Could not find valid JSON in model response. Full text:', text);
        throw new Error('No valid JSON found in model response.');
      }
    } catch (error) {
      console.error('Error generating cards from Gemini:', error.message || error);
      throw new Error('Failed to generate cards via external service.');
    }
  }
}

module.exports = GeminiService;