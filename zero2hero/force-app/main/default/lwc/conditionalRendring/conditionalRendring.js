import { LightningElement } from 'lwc';

export default class ConditionalRendring extends LightningElement {
    block = false
    block2 = false
    block3 = false

    toggelBlock(){
        // falsy values: "", null, Undefine, 0, NaN, false
        this.block = !this.block
    }

    toggelBlock2(){
        this.block2 = true
        this.block3 = false
    }

    toggelBlock3(){
        this.block3 = true
        this.block2 = false
    }

    toggelBlock4(){
        this.block3 = undefined
        this.block2 = undefined
    }
}