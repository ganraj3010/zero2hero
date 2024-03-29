import { LightningElement } from 'lwc';

export default class GetterAndSetter extends LightningElement {
    num1 = 0
    num2 = 0
    operator
    handelnum1(event){
        this.num1 = event.target.value
    }
    handelOperator(event){
        this.operator = event.target.value
        console.log(' this.operator == '+ this.operator)
    }
    handelnum2(event){
        this.num2 = event.target.value
    }

    get total(){
        console.log('this.operator == '+this.operator)
        if(this.operator == 'add'){
            return Number(this.num1) + Number(this.num2)
        }else if(this.operator == 'minus'){
            return Number(this.num1) - Number(this.num2)
        }else if(this.operator == 'Multiply'){
            return Number(this.num1) * Number(this.num2)
        }else if(this.operator == 'devide'){
            return Number(this.num1) / Number(this.num2)
        }else{
            return 0
        }
    }
    
}