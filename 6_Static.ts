class Peeps{
    //We Can Track static variable using class and dont need to instiaite class
    static count:number=0
    static getCount():number{
        return Peeps.count
    }
    public id:number
    constructor(public name:string){
        this.name=name;
        this.id=++Peeps.count
    }

}

const John=new Peeps("John")
const Dave=new Peeps("Dave")
const Raj=new Peeps("Raj")
const Daves=new Peeps("Daves")
const Rajty=new Peeps("Rajity")
console.log(John.id)
console.log(Rajty.id)
console.log(Peeps.count)//this will tell us how many time class has been istantiated to create objects