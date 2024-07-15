import { Injectable } from '@nestjs/common';
import { MoneyService } from '../money/money.service';

@Injectable()
export class ProductService {
  private name: string;
  private price: MoneyService;

  constructor() {
    this.name = '';
    this.price = new MoneyService();
  }

  setName(value: string) {
    this.name = value;
  }

  setPrice(value: MoneyService) {
    this.price = value;
  }

  getName(): string {
    return this.name;
  }

  getPrice(): MoneyService {
    return this.price;
  }

  reducePrice(amount: number) {
    const newPriceWholePart = this.price.getWholePart() - amount;
    this.price.setWholePart(newPriceWholePart);
  }
}
