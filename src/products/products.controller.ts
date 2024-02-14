import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductRequestDTO } from './Interfaces/ProductRequestDTO';

@Controller('products')
export class ProductsController {
  @Get()
  getProducts() {
    return [];
  }

  @Post()
  addProduct(@Body() productRequest: ProductRequestDTO) {
    return { id: 1, ...productRequest };
  }
}
