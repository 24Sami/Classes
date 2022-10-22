// Qno1;
// class PersonAccount{
//     constructor(incomes){
//         this.firstname;
//         this.lastname;
//         this.incomes[{Salary:salary,
//         Description:description}];
//         this.expenses[{Expenses:expenses,ExpensesDescription:expdescp}]
//     }
//     totalIncome(){
    
//     }
    
//     totalexpense(){
    
//     }
//     accountinfo(){
    
//     }
    
//     addIncome(){
    
    
//     }
    
//     addexpense(){
    
//     }
    
//     accountbalance(){
    
    
//     }
    
//     }
//     let anus=new PersonAccount();
//     console.log(sami);

// Qno2;
class Automobile {
    constructor(colour,name,model,type){
        this.colour=colour
        this.name=name
        this.model=model
        this.type=type
    }

    OpenDoors(){
       
        console.log(this.name + "Doors are opened")
    }
CloseDoors (){

    console.log(this.name + "Doors are closed")
}
Start(){

    console.log(this.name + "Automobile is ready to drive")
}
}

let mobile1 = new Automobile ("green", "Grande", "2018", "4 wheel" )
console.log(mobile1);

class car extends Automobile{
    engine;
    dimension;
    wheels;
}

class bus extends Automobile{
    weight;
    wheels;

}

class truck extends Automobile{
    truckweight;
    doorcolour;
    truckmirrors;
}

let truck1 = new truck();
let car1 = new car();
let bus1 = new bus();


