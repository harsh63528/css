class calculate{
    constructor(val1,val2){
        this.value1=val1;
        this.value2=val2;
    }

    addition(){
        let add= this.value1 + this.value2;
        console.dir(add)
    }

    substract(){
        let sub=this.value1-this.value2
        console.log(`sub: ${sub}`)
    }


}

const v1= new calculate(5,10)
const v2=new calculate(10,16)
v1.addition();
v1.substract();
v2.addition();
v2.substract();