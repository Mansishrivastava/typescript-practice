abstract class Shapes{
constructor(protected color:String){}
abstract calculatedArea():number;
abstract displayedArea():void;
}

class Rectangle extends Shapes{
constructor(protected color,protected length,protected width){
    super(color);
}
/**
 * calculatedArea
 */
public calculatedArea():number {
    return this.length*this.width;
}
/**
 * displayedArea
 */
public displayedArea():void {
    console.log(`The ${this.color} rectangle area is`+this.calculatedArea());
}
}
const rectangle1=new Rectangle("red",7,10);
rectangle1.displayedArea();