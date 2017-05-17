module.exports ={
class Car {

  constructor(name,model,type){
    
    this.name = (name ==='') ? "General":name; 
    this.model =(model ==='') ?"GM":model;
    this.numOfDoor =(this.name ==='Porshe'|| this.name === 'Koenigsegg') ? 2:4;
    this.type=type;
    this.numOfWheels = (this.type ==='trailer') ? 8:4; 
    this.isSaloon =(this.type !=='trailer') ? true:false;
    
    this.speed = this.prototype.speed= function() {
      return this.speed = (this.drive ==='') ? "0 km/h":speed;
    }
  }
  
drive(speed){
  if(this.name ==='Porshe'){
      this.speed = '250 km/h';
    }else if(this.name === 'Man'){
      this.speed = '77 km/h';
    }
  }

  }  

}