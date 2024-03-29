import { LightningElement, track } from 'lwc';

export default class Decorators extends LightningElement {
    @track
    addres = {
        street: '123 Any Street',
        city: 'Anytown',
        state: 'CA',
        zip: '12345'
    }

    addres2 = {
        street: '123 Any Street',
        city: 'Anytown',
        state: 'CA',
        zip: '12345'
    }

    addres3 = {
        street: '123 Any Street',
        city: 'Anytown',
        state: 'CA',
        zip: '12345'
    }
    

    handleCityChange(event){
        this.addres.city = event.target.value;
    }
    handleCityChange2(event){
        this.addres2.city = event.target.value;
    }
    handleCityChange3(event){
        this.addres3 = {...this.addres,"city":event.target.value}
    }
}