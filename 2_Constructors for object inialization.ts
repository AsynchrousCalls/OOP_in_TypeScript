/*
1) It is a Block having same name as of Class Name but
in TS we have default constructor 
2) Don't have an any return type not even void
3) Modifiers applicable for constructor private,public,
   Protected and Default
4) It Ecetutes automatically when we creates an objects 
5) Default Constructor Creates By Compiler when we dont create constructor
6) If I creates constrcutor then compiler Dont Create any constructor
*/

class Vehicle{
    public Name:string;
    public Type:string;
    public Model:number;
    constructor(Name:string,Type:string,Model:number){
        console.log("Constructor Call When Object Creates")
        this.Name=Name
        this.Type=Type
    }
  
}

let BMW=new Vehicle("BMW","C-Class",2023)
let Mercedes=new Vehicle("Mercedes","B-Class",2022)


