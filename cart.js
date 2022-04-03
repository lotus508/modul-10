'use strict';
//Создайте объект cart — корзина:
  const cart = {
    items: [],      //пустой массив - это товары
    totalPrice: 0,  //- общая стоимость корзины
    count: 0,       //- количество товаров

    //getTotalPrice() { 
     // return this.totalPrice;
    //},
    add(ProductName, ProductPrice, ProductCount = 1) {
      const Product = {
        'Продукт': ProductName,
        ProductPrice: ProductPrice,
        'ProductCount': ProductCount,
      };
      this.items.push(Product);
      this.increaseCount(ProductCount);
      //this.calculateItemPrice();
    },
    increaseCount(ProductCount) {
      this.count += ProductCount;
    },
    calculateItemPrice() {
      //this.totalPrice = this.items.reduce(
      return this.items.reduce(
        (total, item) => total + item.ProductPrice * item.ProductCount, 0
      );
    },
    clear() {
      this.items = [];
      this.totalPrice = 0;
      this.count = 0;
    },
    print() {
      console.log(`${JSON.stringify(this.items)}\n стоимость корзины: ${this.totalPrice}`);
    },
  };
//Для добавления геттера к существующему объекту в любое время используйте Object.defineProperty()
  Object.defineProperty(cart, 'totalPrice', {
    get() {
      return this.calculateItemPrice();
    },
  });

    cart.add("Лук", 720, 1);
    cart.add("Картофель", 320, 7);
    cart.add("Апельсин", 880, 2);
    cart.add("Курица", 2200, 3);
    cart.add("Сахар", 375, 4);
    //cart.totalPrice = 10;

    cart.print();
