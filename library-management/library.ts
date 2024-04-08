// Implementing a Simple Library System

class Library{
   private bookNames:string[];
   constructor(){
    this.bookNames=[];
   }
   addBook(bookName:string){
    this.bookNames.push(bookName);
   }
   removeBook(bookName:string){
    const index=this.bookNames.indexOf(bookName);
    if(index!==-1){
        this.bookNames.splice(index,1);
    }
   }
   listAllBooks():string[]{
    return this.bookNames;
   }
}
class System extends Library{
    countBooks():number{
        return this.listAllBooks().length;
    }
}
const myLibrary=new System();
myLibrary.addBook("The Great Gatspy");
myLibrary.addBook("Concepts of Physics");
myLibrary.addBook("Modern ABC Physics")
console.log("List of Books",myLibrary.listAllBooks());
console.log("Total no. of Books",myLibrary.countBooks());


myLibrary.removeBook("The Great Gatspy");

console.log("List of Books",myLibrary.listAllBooks());
console.log("Total no. of Books",myLibrary.countBooks());