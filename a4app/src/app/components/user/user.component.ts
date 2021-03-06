import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name : string;
  age : number;
  email : string;
  address : Address;
  hobbies : string[];
  
  constructor() { 
    console.log('Constructor ran...');
  }
  ngOnInit() {
    console.log('ngOnInit ran...');
    this.name = 'John Doe';
    this.email = 'john@gmail.com'
    this.age = 30;
    this.address = {
      street : '50 Main St.',
      city : 'Boston',
      state : 'MA'
    }
    this.hobbies = ['Write code', 'Watch movies', 'Listen to music'];
  }

  onClick() {
    this.name='Erik Robles';
    this.hobbies.push('New Hobby');
  }

  addHobby(hobby) {
    console.log(hobby);
    this.hobbies.unshift(hobby);
    return false;
  }

  deleteHobby(hobby) {
    for(let i = 0; i < this.hobbies.length; i++) {
      if (this.hobbies[i] == hobby) {
        this.hobbies.splice(i, 1);
      }
    }
  }

}

interface Address {
  street : string;
    city : string;
    state : string;
}
