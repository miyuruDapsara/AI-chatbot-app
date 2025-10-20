import { APP_CONFIG } from "../config/app.config";
import { GoogleGenAI } from "@google/genai";

export class GeminiService {

  private geminiApiKey: string;
  private gemini:GoogleGenAI;

  private static instance: GeminiService;

  public static getInstance(): GeminiService {
    if (!GeminiService.instance) {
      GeminiService.instance = new GeminiService();
    }
    return GeminiService.instance;
  }

  private constructor() {
    this.geminiApiKey = APP_CONFIG.GEMINI_API_KEY ||'';
    this.gemini = new GoogleGenAI({});
  }


  public async generateReply(message: string): Promise<string> {
   try {
     const response = await this.gemini.models.generateContent({
       model: "gemini-2.5-flash",
       contents: "explain how AI works in a few words",
     });
     return response.text || "Sorry, I couldn't generate a reply at the moment.";
   } catch (error) {
     console.error("Error generating reply from Gemini:", error);
     return "Sorry, I couldn't generate a reply at the moment.";
   }
  }

}