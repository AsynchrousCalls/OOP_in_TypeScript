
//Bloood Relation -> due to Which Tightly Coupled
//dog IS-A Animal(Is-A Relationship)
//Study Types of inheritance
//Constructor is not inherit to other Class
//Privated Methods and fields are not inherited

/*
Advantages of Inheritance
1) Code Resuablity
2) We can achive Polymorphism using Inheritance i.e Method Overiding

Disavantages of Inheritance
1) Tightly Coupled
2) Changes all Code in Child Classes if Anything Changes in Parent Class
*/


//Declaration 
//Instantiation (new Key-word)
// Initialization(using Constructor)

/* 
Object initialization Methods
1 By using refernce Variable
2 By Using Methods
3 By Using Constructors
*/

class Coder{
    public name:string
    public music:string
    public age:number
    protected lang:string="Typescript"
   
    

    constructor(name:string, music:string, age:number,lang:string){
        this.name=name
        this.music=music
        this.age=age
        this.lang=lang
      
    }
    public setName=(name:string)=>{
        return this.name=name
    }
    public getName=()=>{
        return `My name is ${this.name}`
    }

    public setAge=(age:number)=>{
        return this.age=age
    }
    public getAge=()=>{
        return `hello ,I'm ${this.age}`
    }
    
}


// const Dave=new Coder("Dave","Rock",42,"urdu")

// Dave.setName("Ali")
// console.log(Dave.getAge())
// console.log(Dave.getName())


class WebDev extends Coder{

    
    constructor(
        public computer:string,
        name:string,
        music:string,
        age:number,
        lang:string
        
        ){
            super(name,music,age,lang)
            this.lang=lang
            this.computer=computer
        }
        public getLang(){
            return `I write ${this.lang}`
        }
        
}


const Sara=new WebDev("Mac Machine","Sara Ali","One Direction",22,"JS")
console.log(Sara)

console.log(Sara.getLang())
