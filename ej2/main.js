'use strict';
class Square {
    constructor(side){
        this.side = side;
    }
    
    perimeter(){
        const perimeter = this.side * 4
        console.log(`El perimetro es ${perimeter}`)  
    } 
    area(){
        const area = this.side * this.side;
        console.log(`El area es ${area}`)  
    }
    
}

const square1 = new Square(1);
console.log(square1.perimeter());
console.log(square1.area());

const square3 = new Square(3);
console.log(square3.perimeter());
console.log(square3.area());

const square7 = new Square(7);
console.log(square7.perimeter());
console.log(square7.area());
