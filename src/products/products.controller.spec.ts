import { Test, TestingModule } from '@nestjs/testing';
import { ProductsController } from './products.controller';

describe('ProductsController', () => {
  let controller: ProductsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductsController],
    }).compile();

    controller = module.get<ProductsController>(ProductsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return Hello World', () => {
    expect(controller.getProducts()).toMatchObject([]);
  });

  it('should add a product', () => {
    expect(
      controller.addProduct({ name: 'Sandals', price: 1000 }),
    ).toMatchObject({ id: 1, name: 'Sandals', price: 1000 });
  });
});
