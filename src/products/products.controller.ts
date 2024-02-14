import { Controller } from "@nestjs/common";

@Controller("products")
export class ProductsController {
  getProducts(): string {
    return 'Hello World!';
  }
}
