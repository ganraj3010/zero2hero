import { LightningElement } from 'lwc';

export default class Accessiblity extends LightningElement {
    handleClick(){
        this.template.querySelector(".ptag").innerHTML = "<div>Hell I am Div tag</div>"
    }

    addTitle(){
        let element = this.template.querySelector(".ptag")
        element.setAttribute("title","This is P Tag")
    }
    addManualy(){
        this.template.querySelector(".newptag").innerHTML = "this new P tag"
    }
}