import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateChatRequestDTO } from './dtos/createChatRequest.dto';

function sendGeneric501(res: any, e: any) {
  return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(e.message);
}

@Controller('chat')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async chat(@Res() res, @Body() createChatRequestDTO: CreateChatRequestDTO) {
    try {
      const result = await this.appService.chat(createChatRequestDTO);
      return res.status(HttpStatus.OK).json(result);
    } catch (e: any) {
      console.error(e.message);
      sendGeneric501(res, e);
    }
  }
}
