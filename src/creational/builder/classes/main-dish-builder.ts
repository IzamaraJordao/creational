import { MealBuilderProtocol } from "../interfaces/meal-builder-protocol";
import { MealBox } from "./composed-meal";
import { Beans, Beverage, Dessert, Meat, Rice } from "./meals";



export class MainDishBuilder implements MealBuilderProtocol {
 private _meal:MealBox = new MealBox(); //builder

 reset(): this { //reseta a refeição
    this._meal = new MealBox();
    return this;
 }

    makeMeal(): this {
        const rice = new Rice('Arroz', 5);
        const beans = new Beans('Feijão', 5);
        const meat = new Meat('Carne', 25);
        this._meal.add(rice, beans, meat)
        return this;

    }
    makeBeverage(): this {
        const beverage = new Beverage('Bebida', 5);
        this._meal.add(beverage)
        return this;
    }
    makeDessert(): this {
        const dessert = new Dessert('Sobremesa', 5);
        this._meal.add(dessert)
        return this;
    }

    getMeal(): MealBox {//retorna a meal box
        return this._meal;
    }
}