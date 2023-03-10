
//https://www.c-sharpcorner.com/UploadFile/cda5ba/object-oriented-programming-with-real-world-scenario/





class Mobile implements IMobile,ITelephone{
    constructor(
        private IMEICode :string,
        public SIMCard:string,
        public Processor:string,
        public internalMemory:number,
        public isSingleSim:boolean){
            this.IMEICode=IMEICode;
            this.SIMCard=SIMCard;
            this.Processor=Processor;
            this.internalMemory=internalMemory;
            this.isSingleSim=isSingleSim
        }
    public GetIEMICode()  
     {  
         console.log("IEMI Code - IEDF34343435235");  
     }  
  
     public  Dial()  
     {  
        console.log("Dial a number");  
     }  
     public  Receive()  
     {  
        console.log("Receive a call");  
     }  
     public  SendMessage()  
     {  
        console.log("Message Sent");  
     }  
 }  




 class Samsumg extends Mobile  
 {  
     public GetWIFIConnection()  
     {  
        console.log("WIFI connected");  
     }  
   
     //This is one mwthod which shows camera functionality  
     public  CameraClickk()
     {  
        console.log("Camera clicked");  
     }  
   
     //This is one overloaded method which shows camera functionality as well but with its camera's different mode(panaroma)  
     public  CameraClick(CameraMode : string):void
     {  
        return console.log("Camera clicked in " + CameraMode + " Mode");  
     }  
 }  


class  Nokia extends Mobile  
{  
     public  GetBlueToothConnection()  
     {  
         console.log("Bluetooth connected");  
     }  
   
     //New implementation for this method which was available in Mobile Class  
     //This is runtime polymorphism  
     public SendMessage()  
     {  
        console.log("Message Sent to a group");  
     }  
}  


interface IMobile  
{  
   Dial():void;  
}  
  
interface ITelephone  
{  
    Dial():void;  
  
}  

