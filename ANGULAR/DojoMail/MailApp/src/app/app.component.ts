import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'app';

  emailData: Object[] = [ email1, email2, email3, email4, email5 ];
}

interface IEmailForm {
  address: string;
  importance: boolean;
  subject: string;
  content: string;
}

class Email implements IEmailForm {
  constructor(public address: string, public importance: boolean, public subject: string, public content: string) {}
}

const email1 = new Email('Bill@Gates.com', true, 'New Windows', 'Windows XI will launch in year 2100');
const email2 = new Email('Ada@lovelace.com', true, 'Programming', 'Enchantress of Numbers');
const email3 = new Email('JOHN@camrac.com', false, 'Updated Algo', 'New algorithm for shadow volumes');
const email4 = new Email('gabe@NEWEL.com', false, 'HL3!', 'Just Kidding...');
const email5 = new Email('Lee31978@gmail.com', true, 'Just cuz..', 'I figured I\'d add myself to the emails list');
