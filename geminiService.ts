
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const SYSTEM_INSTRUCTION = `
You are HealthHub AI, a highly knowledgeable and compassionate virtual medical assistant. 
Your goal is to provide helpful health information, explain medical terms, suggest over-the-counter remedies for mild symptoms, and explain how to use various medications available in an e-pharmacy.

CRITICAL GUIDELINES:
1. Always include a disclaimer: "I am an AI assistant, not a doctor. For emergencies or serious concerns, please consult a professional."
2. Never diagnose specific diseases with 100% certainty.
3. Be professional, empathetic, and clear.
4. If a user describes severe symptoms (chest pain, difficulty breathing, high fever), urge them to seek immediate medical attention.
5. Use markdown for better readability.
`;

export const getAiHealthAdvice = async (prompt: string): Promise<string> => {
  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topP: 0.95,
      },
    });

    return response.text || "I'm sorry, I couldn't generate a response at this time.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to my health knowledge base. Please try again later.";
  }
};
