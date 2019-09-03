'use strict';

class Square{
    // constructor(side){
        
    //     this.side = side;
    // }
    
    perimeter(side){
        //const perimeter = this.side *4
        const perimeter = side * 4
        console.log(`El perimetro es ${perimeter}`)  
    } 
    area(side){
         //const area = this.side * this.side
         const area = side * side
        console.log(`El area es ${area}`)  
    }
    
}


//const square = new Square(9);
const square = new Square();
console.log(square.perimeter(9))
console.log(square.area(9))



