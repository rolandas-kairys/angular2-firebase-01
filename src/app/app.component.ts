import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { FirebaseService } from './firebase.service';
import { UserType } from './UserType';
import { RoleType } from './RoleType';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FirebaseService]
})
export class AppComponent implements OnInit {
  users: UserType[];
  roles: RoleType[];
  appState:string;
  activeKey: string;

   activeRole:string; activeName:string; activeSurname:string; activeDetails:string; activeStreet:string; activeCity:string; activeCountry:string; activePostcode:string; activeEmail:string; activePhone:string;

  
  constructor(private _firebaseService: FirebaseService) { 
   } // constructor

   ngOnInit(){
    this._firebaseService.getUsers().subscribe( users => {
      this.users = users;
    });

    this._firebaseService.getRoles().subscribe( roles => {
      this.roles = roles;
    });

   }// ngOnInit

   changeState(state, key){
     console.log('state: ' +state+ '; - key: '+key)
     if(key){
       this.activeKey = key;
     }
     this.appState = state;
   } // changeState


   showEdit(user){
     this.changeState('edit', user.$key);
     this.activeRole = user.role; 
     this.activeName = user.name; 
     this.activeSurname = user.surname; 
     this.activeDetails = user.details; 
     this.activeStreet = user.street; 
     this.activeCity = user.city; 
     this.activeCountry = user.country; 
     this.activePostcode = user.postcode;
     this.activeEmail = user.email;
     this.activePhone = user.phone;
   }

   updateUser(){
     var updateUser = {
        role: this.activeRole,
        name: this.activeName,
        surname: this.activeSurname,
        email: this.activeEmail,
        phone: this.activePhone,
        street: this.activeStreet,
        city: this.activeCity,
        country: this.activeCountry,
        details: this.activeDetails,
        postcode: this.activePostcode
     }
     this._firebaseService.updateUser(this.activeKey, updateUser);
     this.changeState('default', '');
   }

   deleteUser(key){
    this._firebaseService.deleteUser(key);
    this.changeState('default','');
   }

   
 
} // Class
 
