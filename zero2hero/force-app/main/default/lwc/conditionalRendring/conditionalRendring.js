import { LightningElement } from 'lwc';

export default class ConditionalRendring extends LightningElement {
    block = false

    toggelBlock(){
        this.block = !this.block
    }
}