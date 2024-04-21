import { LightningElement } from 'lwc';

export default class C2pParentComponent extends LightningElement {
    showMadal = false
    msg
    openModal(){
        this.showMadal = true
    }

    closeModal(event){
        this.showMadal = false
        this.msg = event.detail.msg
    }
}