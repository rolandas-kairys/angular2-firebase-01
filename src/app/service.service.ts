import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import 'rxjs/add/operator/map';
import { UserType } from './UserType';
import { RoleType } from './RoleType';

@Injectable()
export class ServiceService {
  addUsers: FirebaseListObservable<UserType[]>;
  addRoles: FirebaseListObservable<RoleType[]>;
  

  constructor(private _af: AngularFire) { 
  
   }

   getUsers(){
     
      this.addUsers = this._af.database.list('/users') as FirebaseListObservable<UserType[]>;
      return this.addUsers;
   }

   getRoles(){
     this.addRoles = this._af.database.list('/roles') as FirebaseListObservable<RoleType[]>;
     return this.addRoles;
   }

   addUser(newUser){
     return this.addUsers.push(newUser);
   }


    
} // class 
