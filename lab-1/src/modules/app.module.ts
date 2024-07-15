// src/app.module.ts
import { Module } from '@nestjs/common';
import { MoneyModule } from './money/money.module';
import { ProductModule } from './product/product.module';
import { WarehouseModule } from './warehouse/warehouse.module';
import { ReportingModule } from './reporting/reporting.module';

@Module({
  imports: [MoneyModule, ProductModule, WarehouseModule, ReportingModule],
})
export class AppModule {}
