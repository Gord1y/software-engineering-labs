import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { MoneyModule } from '../money/money.module';

@Module({
  imports: [MoneyModule],
  providers: [ProductService],
  exports: [ProductService],
})
export class ProductModule {}
