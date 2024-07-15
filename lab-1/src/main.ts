// src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
import { ReportingService } from './modules/reporting/reporting.service';
import { ProductService } from './modules/product/product.service';
import { MoneyService } from './modules/money/money.service';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const reportingService = app.get(ReportingService);
  const moneyService = new MoneyService();
  moneyService.setWholePart(100);
  moneyService.setFractionalPart(50);

  const productService = new ProductService();
  productService.setName('Laptop');
  productService.setPrice(moneyService);

  reportingService.addProductToWarehouse(productService);

  console.log('Inventory Report:', reportingService.generateInventoryReport());

  await app.close();
}
bootstrap();
