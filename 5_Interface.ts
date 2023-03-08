interface Musician{
    name:string,
    instrument:string,
    play( action:string):string
}


class Guitarist implements Musician{
    name:string
    instrument: string
    constructor(name:string,instrument:string){
        this.name=name
        this.instrument=instrument
    }
    
    play(action: string): string {
        return `${this.name} ${action} the ${this.instrument}`  
    }

}


const Page=new Guitarist ("Jimmy", "guiatar")

console.log(Page.play("plays"))

console.log(Page.play("breaks"))

console.log(Page.play("picks"))