import { LightningElement } from 'lwc';

export default class P2cParentComponent extends LightningElement {
    crausalData = [{
            src: "https://developer.salesforce.com/path/to/carousel-01.jpg",
            header: "First card",
            description: "First card description"
        },{
            src: "https://developer.salesforce.com/path/to/carousel-02.jpg",
            header: "Second card",
            description: "Second card description"
        },{
            src: "https://developer.salesforce.com/path/to/carousel-02.jpg",
            header: "Third card",
            description: "Third card description"
        }
    ]
    hadleProgress(event){
        this.template.querySelector("c-p2c-child-component").progressValue = event.target.value
        this.template.querySelector("c-p2c-child-component").handleAction(event)
    }
}