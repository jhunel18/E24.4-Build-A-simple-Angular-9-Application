import { Component } from '@angular/core';
import { Contacts } from 'src/app/interfaces/contacts';
//import { Contacts } from 'src/app/interfaces/contacts';
import { CONTACTS } from 'src/app/mock-data/mock-contact';



@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {

  contacts = CONTACTS;
  id = ''
  cName = '';
  cPhone='';
  cType='';
  selectedContact?:Contacts;

  addContact(){
    this.contacts.push({
      name: this.cName,
      phone: this.cPhone,
      contactType:this.cType
    })
  }

  deleteContact(id:number){
    this.contacts.splice(id,1);
}
updateContact(contact: Contacts){
  this.selectedContact= contact;
}

}
