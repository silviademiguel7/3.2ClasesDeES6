'use strict';

class Polygon{
    constructor(numberOfSides, base ,height){
        this.numberOfSides = numberOfSides;
        this.base = base;
        this.height = height;
    }
    
    perimeter(){
        const perimeter = this.base * this.numberOfSides
        //console.log(`El perimetro es ${perimeter}`)  
    } 
    area(){
        const area = this.base * this.height
        //console.log(`El area es ${area}`)  
    }
    
}


class Square extends Polygon{
    constructor(){
        super(numberOfSides,side);
        this.numberOfSides = 4;
        this.side = this.base
    }
}


class Triangle extends Polygon{
    constructor(base, height){
        super(base, height);;
    }
    area(){
        super.area() / 2;
    }

}
const square = new Square(4);
const triangle = new Triangle(4,3);


