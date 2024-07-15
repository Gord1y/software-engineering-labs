import { Injectable } from '@nestjs/common';

@Injectable()
export class MoneyService {
  private wholePart: number;
  private fractionalPart: number;

  constructor() {
    this.wholePart = 0;
    this.fractionalPart = 0;
  }

  setWholePart(value: number) {
    this.wholePart = value;
  }

  setFractionalPart(value: number) {
    this.fractionalPart = value;
  }

  getWholePart(): number {
    return this.wholePart;
  }

  getFractionalPart(): number {
    return this.fractionalPart;
  }

  toString(): string {
    return `${this.wholePart}.${this.fractionalPart}`;
  }
}
