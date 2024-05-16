import {LightningElement,wire} from 'lwc';
import getAllContactDetails from '@salesforce/apex/ContactSearchHandler.getAllContacts';
import getContactDetails from '@salesforce/apex/ContactSearchHandler.getContacts'
import getAccountAsOption from '@salesforce/apex/ContactSearchHandler.getAccountAsOption'

const columns = [{label:"First Name",fieldName:"FirstName"},
                {label:"Last Name",fieldName:"LastName"},
                {label:"Email",fieldName:"Email"}]

export default class SearchContacts extends LightningElement{
    columns = columns
    options
    contactDetails
    errorMsg
    searchKey = ''
    value
    connectedCallback(){
        getAccountAsOption().then(data=>{
            if(data){
                console.log('data == ',JSON.stringify(data));
                this.options = data;
            }
            
        }).catch(error=>{
            if(error){
                this.errorMsg = JSON.stringify(error);
            }
        })
    }

    handleKeyChange(event){
       this.searchKey = event.targate.value;
       getContactDetails({name:this.searchKey,accountId : this.value}).then(data=>{
        this.contactDetails = data;
    }).catch(error=>{
        this.errorMsg = JSON.stringify(error);
    })
    }

    handleChange(event){

        this.value = event.target.value;
        console.log('value == ',this.value);
        getContactDetails({name:this.searchKey,accountId : this.value}).then(data=>{
            this.contactDetails = data;
        }).catch(error=>{
            this.errorMsg = JSON.stringify(error);
        })
    }
    getContact(){
        
    }
}