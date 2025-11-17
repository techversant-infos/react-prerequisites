import Person from "./person.js"

export default class Engineer extends Person{

    constructor(name,qualification){
      super(name);
      this.qualification=qualification;
    }
  
    code(){
      console.log("Coding...")
    }
}

export  function getFunction() {
  console.log("Inside getFunction");
}