import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { FirebaseService } from '../../firebase.service';
import { RoleType } from '../../RoleType';
import { UserType } from '../../UserType';


@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css'],
  providers: [FirebaseService]
})
export class AdduserComponent implements OnInit {
  addusers: UserType[];
  addroles: RoleType[];
  
  appState:string;
  activeKey: string;

  constructor(private _af: FirebaseService) { }

  ngOnInit() {
    this._af.getUsers().subscribe( addusers => {
      this.addusers = addusers;
    });

    this._af.getRoles().subscribe( addroles => {
      this.addroles = addroles;
    });
   
  }

  addUser(
     role:string,
      name:string,
      surname:string,
      email:string,
      phone:string,
      street:string,
      city:string,
      country:string,
      details:string,
      postcode:string){

        var newUser = {
          role:role,
          name:name,
          surname:surname,
          email:email,
          phone:phone,
          street:street,
          city:city,
          country:country,
          details:details,
          postcode:postcode }

          
          this._af.addUser(newUser);
          this.changeState('default','');
   }

  changeState(state, key){
     console.log('state: ' +state+ '; - key: '+key)
     if(key){
       this.activeKey = key;
     }
     this.appState = state;
   } // changeState

}
