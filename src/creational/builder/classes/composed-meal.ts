import { MealCompositeProtocol } from './../interfaces/meal-composite-protocol';


export class MealBox implements MealCompositeProtocol{
  private readonly _children: MealCompositeProtocol[] = [];//adiciona as refeições
  
    getPrice(): number {
    return this._children.reduce((sum, meal) => sum + meal.getPrice(), 0);//soma o preço das refeições
    }

    add(...meal: MealCompositeProtocol[]): void {//adiciona as refeições
        meal.forEach(item => this._children.push(item))
    }
}