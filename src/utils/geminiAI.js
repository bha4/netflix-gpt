import {GENERATIVE_AI_API_KEY} from "./constants"
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(GENERATIVE_AI_API_KEY);

export const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
