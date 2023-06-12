import { Injectable } from '@nestjs/common';
import { CreateChatRequestDTO } from './dtos/createChatRequest.dto';
import { OPENAI_API_KEY, PARKER_SYS_MSG } from './constants';
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

@Injectable()
export class AppService {
  async chat(chatRequest: CreateChatRequestDTO): Promise<any> {
    const systemMessage = {
      "role": "system",
      "content": PARKER_SYS_MSG,
    }

    const localCachedMessages = [];
    chatRequest.cachedMessages.map(cachedMessage => {
      localCachedMessages.push({
        "role": "user",
        "content": cachedMessage.user,
      });
      localCachedMessages.push({
        "role": "assistant",
        "content": cachedMessage.assistant,
      });
    })

    const newUserMessage = {
      "role": "user", 
      "content": chatRequest.userMessage,
    }

    const messages = [systemMessage, ...localCachedMessages, newUserMessage];

    const response = await openai.createChatCompletion ({
      model: "gpt-3.5-turbo",
      messages
    });

    return response.data;
  }
}
