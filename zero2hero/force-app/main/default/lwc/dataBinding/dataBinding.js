import { LightningElement } from 'lwc';

export default class DataBinding extends LightningElement {
    name = "Ganesh rajput"
    title = "Salesforce developer"
    handelChangeTitle(event) {
        this.title = event.target.value;
    }
}