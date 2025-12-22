const { GoogleGenAI } = require("@google/genai");
const ai = new GoogleGenAI({apiKey: process.env.GEMINI_API_KEY});
const dotenv = require("dotenv");
dotenv.config();
const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
;

exports.summaryController = async (req, res) => {
  try {
    const { text } = req.body;
    // console.log('1',text)
    const result = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `Summarize this:\n${text}`,
    });
    
    
    // console.log("2", result.candidates[0].content.parts[0].text);
    
    const summary = result.candidates[0].content.parts[0].text;
    if (summary) {
      return res.status(200).json(summary);
      // console.log("3");
    }
  } catch (err) {
    console.log(err);
    return res.status(404).json({
      message: err.message,
    });
  }
};
exports.paragraphController = async (req, res) => {
  try {
    const { text } = req.body;
    const result = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `create randome para about:\n${text}`,
    });
  
    const para = result.candidates[0].content.parts[0].text;
    if (para) {
      return res.status(200).json(para);
      // console.log("3");
    }
  } catch (err) {
    // console.log(err);
    return res.status(404).json({
      message: err.message,
    });
  }
};
exports.chatbotController = async (req, res) => {
  try {
    const { text } = req.body;
    const result = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `Answer question similar to how chatgpt  would.
      //   Me: 'ai'
      //   Me: ${text}`,
    });
  
    const para = result.candidates[0].content.parts[0].text;
    if (para) {
      return res.status(200).json(para);
    }
  } catch (err) {
    // console.log(err);
    return res.status(404).json({
      message: err.message,
    });
  }
};

exports.jsconverterController = async (req, res) => {
  try {
    const { text } = req.body;
    const result = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `/* convert these instruction into javascript code \n${text}`,
    });
  
    const para = result.candidates[0].content.parts[0].text;
    if (para) {
      return res.status(200).json(para);
    }
    
  } catch (err) {
    // console.log(err);
    return res.status(404).json({
      message: err.message,
    });
  }
};


exports.scifiImageController = async (req, res) => {
  try {
    const { text } = req.body;
    
    const result = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `generate a scifi image of ${text}`,
    });
  
    const para = result.candidates[0].content.parts[0].text;
    if (para) {
      return res.status(200).json(para);
    }
  } catch (err) {
    // console.log(err);
    return res.status(404).json({
      message: err.message,
    });
  }
};
