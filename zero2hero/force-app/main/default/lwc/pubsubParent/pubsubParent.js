import { LightningElement } from 'lwc';
import pubsub from 'c/pubsub';
export default class PubsubParent extends LightningElement {
    msg
    getMsg(event){
        this.msg = event.target.value
        
    }

    sendMsg(){
        pubsub.publish('comunication',this.msg)
    }
}