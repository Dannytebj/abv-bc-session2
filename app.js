export class Car {

  constructor(name,model,type){
    
    this.name = (name ==='') ? "General":name; 
    this.model =(model ==='') ?"GM":model;
    this.numOfDoor =(this.name ==='Porshe'|| this.name === 'Koenigsegg') ? 2:4;
    this.type = type;
    this.numOfWheels = (this.type ==='trailer') ? 8:4; 
    this.isSaloon =(this.type !=='trailer') ? true:false;
    
  
  }
  
drive(speed){
  if(this.name ==='Porshe' && speed != 0){
      this.speed = '250 km/h';
    }else if(this.name === 'Man' && speed !=0){
      this.speed = '77 km/h';
    }else{
      this.speed= '0 km/h';
    }
  }

  

}