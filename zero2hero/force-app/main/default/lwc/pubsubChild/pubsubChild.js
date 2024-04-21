import { LightningElement } from 'lwc';
import pubsub from 'c/pubsub';
export default class PubsubChild extends LightningElement {
    msg
    callback
    connectedCallback(){
        
    }

    handlesubscrib(){
        this.callback = (msg)=>{
            this.msg = msg;
        }
        pubsub.subscribe('comunication',this.callback)
    }

    handleUnsubscrib(){
        pubsub.unsubscribe('comunication',this.callback)
    }
}