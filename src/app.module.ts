import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ProductsController } from './controllers/products.controller';
import { CategoriesController } from './controllers/categories.controller';
import { CustomersController } from './controllers/customers.controller';
import { UsersController } from './controllers/users.controller';
import { OrdersController } from './controllers/orders.controller';
import { BrandsController } from './controllers/brands.controller';
import { AppService } from './app.service';
import { ProductsService } from './services/products.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    ProductsController,
    CategoriesController,
    CustomersController,
    UsersController,
    OrdersController,
    BrandsController,
  ],
  providers: [AppService, ProductsService],
})
export class AppModule {}
