// import { MealBox } from './classes/composed-meal';
// import { Beans, Beverage, Dessert, Meat, Rice } from "./classes/meals";

import { MainDishBuilder } from "./classes/main-dish-builder";

// const rice = new Rice('Arroz', 5);
// const beans = new Beans('Feijão', 5);
// const meat = new Meat('Carne', 5);
// const beverage = new Beverage('Bebida', 5);
// const dessert = new Dessert('Sobremesa', 5);


// const meal = new MealBox()//Composite

// meal.add(rice, beans, meat, beverage, dessert)
// console.log(meal)
// console.log('Preço total: ','R$' ,meal.getPrice())

const mainDishBuilder = new MainDishBuilder(); // 
mainDishBuilder.makeMeal().makeBeverage;
console.log(mainDishBuilder.getMeal())

console.log('Preço total: ','R$' ,mainDishBuilder.getMeal().getPrice())
mainDishBuilder.reset();

const meal2 = mainDishBuilder.makeBeverage().getMeal();
console.log(meal2)
console.log('Preço total: ','R$' ,meal2.getPrice())

const meal3 = mainDishBuilder.makeDessert().getMeal();
console.log(meal3)
console.log('Preço total: ','R$' ,meal3.getPrice())