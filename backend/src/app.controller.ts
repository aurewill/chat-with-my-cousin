import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { AppService } from './app.service';

function sendGeneric501(res: any, e: any) {
  return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(e.message);
}

@Controller('items')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getItems(@Res() res) {
    try {
      console.log("NEST");
      const items = await this.appService.getItems();
      return res.status(HttpStatus.OK).json(items);
    } catch (e: any) {
      console.error(e.message);
      sendGeneric501(res, e);
    }
  }

  @Post()
  async addItem(@Res() res, @Body() createItemDTO: any) {
    try {
      const result = await this.appService.addItem(createItemDTO.name);
      return res.status(HttpStatus.OK).json({ id: result.insertedid});
    } catch (e: any) {
      console.error(e.message);
      sendGeneric501(res, e);
    }
  }

  @Put('/:id')
  async editItem(@Res() res, @Param("id") id, @Body() createItemDTO: any) {
    try {
      const result = await this.appService.updateItem(id, createItemDTO.done);
      return res.status(HttpStatus.OK).json(result);
    } catch (e: any) {
      console.error(e.message);
      res.status(500).send(e.message);
    }
  }

  @Delete('/:id')
  async deleteItem(@Res() res, @Param("id") id) {
    try {
      const result = await this.appService.deleteItem(id);
      return res.status(HttpStatus.OK).json(result);
    } catch (e: any) {
      console.error(e.message);
      res.status(500).send(e.message);
    }
  }
}
