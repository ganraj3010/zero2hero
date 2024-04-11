import { LightningElement, api } from 'lwc';

export default class P2cChildComponent extends LightningElement {
    @api
    valueFromParent
    @api
    crausalDetails

    @api
    progressValue
    
    progressValueAction
    @api
    handleAction(event){
        this.progressValueAction = event.target.value;
    }
}
