import { GoogleGenAI } from "@google/genai";

// Initialize Gemini Client
// The API key must be obtained exclusively from process.env.API_KEY per guidelines.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are "Naarad", a mytho-cyberpunk storyteller for a cultural tourism app. 
Your tone is evocative, mysterious, yet highly educational. 
You speak like a mix of an ancient temple priest and a futuristic AI guide.
Target Audience: Young Indian travelers exploring heritage sites.
Constraint: Keep answers concise (under 100 words) but dopamine-inducing. 
Focus on hidden secrets, gory history, or architectural marvels.
`;

export const askTheOracle = async (query: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: query,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.8,
        topK: 40,
      },
    });

    return response.text || "The signals from the past are weak. Try again.";
  } catch (error) {
    console.error("Oracle Error:", error);
    return "The connection to the Akasic Records is severed. Please check your network.";
  }
};