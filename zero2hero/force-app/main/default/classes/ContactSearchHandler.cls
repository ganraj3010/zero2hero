public with sharing class ContactSearchHandler {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getAllContacts(){
        try {
           return [SELECT ID,FirstName,LastName,Email FROM Contact]; 
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled(cacheable=true)
    public static List<Contact> getContacts(String name){
        try {
            name = '%' + name + '%';
            System.debug('name ' +name);
            return [SELECT ID,FirstName,LastName,Email FROM Contact WHERE Name LIKE :name ]; 
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}