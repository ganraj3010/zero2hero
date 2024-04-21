import { LightningElement } from 'lwc';

export default class C2pChildComponent extends LightningElement {
    handleClose(){
        const childData = new CustomEvent("close",{
            detail:{
                msg:"Child has been close!"
            }
        });

        this.dispatchEvent(childData);
    }
}