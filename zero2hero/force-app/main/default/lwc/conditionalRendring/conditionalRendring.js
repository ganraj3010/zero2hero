import { LightningElement } from 'lwc';

export default class ConditionalRendring extends LightningElement {
    block = false

    toggelBlock(){
        // falsy values: "", null, Undefine, 0, NaN, false
        this.block = !this.block
    }
}