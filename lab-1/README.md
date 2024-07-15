# Warehouse Management System

## Principles Demonstrated

1. **DRY (Don't Repeat Yourself)**
   - Code reuse in classes such as `MoneyService`, `ProductService`, and `WarehouseService`.
   - Example: [money.service.ts](src/money/money.service.ts)

2. **KISS (Keep It Simple, Stupid)**
   - Simple and clear class structures and methods.
   - Example: [product.service.ts](src/product/product.service.ts)

3. **SOLID Principles**
   - **Single Responsibility Principle**
     - Each class has a single responsibility.
     - Example: `MoneyService` class handles only money-related operations.
   - **Open/Closed Principle**
     - Classes are open for extension but closed for modification.
   - **Liskov Substitution Principle**
     - Subtypes can replace their base types.
   - **Interface Segregation Principle**
     - Not applied in this context.
   - **Dependency Inversion Principle**
     - High-level modules are not dependent on low-level modules.

4. **YAGNI (You Aren't Gonna Need It)**
   - Only implemented necessary functionality.
   - Example: Simple getter and setter methods.

5. **Composition Over Inheritance**
   - Composition used for building complex types.
   - Example: `ProductService` class has a `MoneyService` instance.

6. **Program to Interfaces, not Implementations**
   - Not applied in this context.

7. **Fail Fast**
   - Simple and clear error handling by type safety.

## Files and References

- [money.service.ts](src/money/money.service.ts)
- [product.service.ts](src/product/product.service.ts)
- [warehouse.service.ts](src/warehouse/warehouse.service.ts)
- [reporting.service.ts](src/reporting/reporting.service.ts)
- [main.ts](src/main.ts)

## Running the Application

```sh
npm install
npm run start
```

This structure and implementation demonstrate a professional use of NestJS modules and services while adhering to the given programming principles.
