import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import 'rxjs/add/operator/map';
import { UserType } from './UserType';
import { RoleType } from './RoleType';

@Injectable()
export class FirebaseService {
  users: FirebaseListObservable<UserType[]>;
  roles: FirebaseListObservable<RoleType[]>;
  

  constructor(private _af: AngularFire) { 
  
   }

   getUsers(){
     
      this.users = this._af.database.list('/users') as FirebaseListObservable<UserType[]>;
      return this.users;
   }

   getRoles(){
     this.roles = this._af.database.list('/roles') as FirebaseListObservable<RoleType[]>;
     return this.roles;
   }

   addUser(newUser){
     return this.users.push(newUser);
   }

   updateUser(key, updateUser){
    return this.users.update(key, updateUser);
   }

   deleteUser(key){
     return this.users.remove(key);
   }

    
} // class 
