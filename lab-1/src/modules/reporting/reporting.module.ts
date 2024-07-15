import { Module } from '@nestjs/common';
import { WarehouseModule } from '../warehouse/warehouse.module';
import { ReportingService } from './reporting.service'

@Module({
  imports: [WarehouseModule],
  providers: [ReportingService],
})
export class ReportingModule {}
