import { LightningElement } from 'lwc';

export default class LoopingInLwC extends LightningElement {
    carList = ["TATA","KIA","Audi", "Toyota"]
    users = [
        {
            "id": 1,
            "FirstName": "Ganesh",
            "LastName": "Rajut",
            "Age": 28
        },
        {
            "id": 2,
            "FirstName": "Ganesh",
            "LastName": "Rajut",
            "Age": 28
        },
        {
            "id": 3,
            "FirstName": "John",
            "LastName": "Doe",
            "Age": 35
        },
        {
            "id": 4,
            "FirstName": "Alice",
            "LastName": "Smith",
            "Age": 30
        },
        {
            "id": 5,
            "FirstName": "Bob",
            "LastName": "Johnson",
            "Age": 45
        }
    ]
    
    
}