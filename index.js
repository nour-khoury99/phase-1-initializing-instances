// Write your code here

class Breakfast {
    constructor(food,drink){
        this.food = food;
        this.drink = drink;
    }
}

class Lunch{
   constructor(salad,soup,drink){
    this.salad=salad;
    this.soup=soup;
    this.drink = drink;
   }

}

class Dinner{
    #dessert
    constructor(dessert , salad , soup,entree){
        this.dessert = dessert;
        this.salad = salad;
        this.soup = soup;
        this.entree = entree;
    }
}

let breakfast = new Breakfast('sandwich' , 'orange juice');
