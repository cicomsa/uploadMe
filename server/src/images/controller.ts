import {JsonController, Get, Param, Post, HttpCode, Body} from 'routing-controllers'
import Image from './entity'

@JsonController()
export default class ImageController {

  @Post('/images')
  @HttpCode(201)
  addImage(
    @Body() image: Image
  ) {
    return image.save()
  }

  @Get('/images/:id')
  getImage(
    @Param('id') id: number
  ) {
    return Image.findOne(id)
  }

  @Get('/images')
  async getImages(
  ) {
    return await Image.find()
  }
}