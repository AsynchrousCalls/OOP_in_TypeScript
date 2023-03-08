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
    private name:string
    public music:string
    private age:number
    public language:string

    constructor(name:string, music:string, age:number,language:string){
        this.name=name
        this.music=music
        this.age=age
        this.language=language
    }
    setName=(name:string)=>{
        return this.name=name
    }
     getName=()=>{
        return this.name
    }

    setAge=(age:number)=>{
        return this.age=age
    }
     getAge=()=>{
        return this.age
    }



    
}

let programmer1=new Coder("Waqar","Slow Version",22,"English")
let programmer2=new Coder("Haris","Band Music",22,"English")
let programmer3=new Coder("Adeel","Sad Music",23,"English")

//return Objects
console.log(programmer1)
console.log(programmer2)
console.log(programmer3)
//return Only access public Properties 
console.log(programmer1.music)
console.log(programmer2.music)
console.log(programmer3.music)

programmer1.setAge(24)
programmer1.setName("Subha")

console.log(programmer1.getName())
console.log(programmer1.getAge())

