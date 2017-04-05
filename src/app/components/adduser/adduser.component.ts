import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { ServiceService } from '../../service.service';
import { RoleType } from '../../RoleType';
import { UserType } from '../../UserType';


@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css'],
  providers: [ServiceService]
})
export class AdduserComponent implements OnInit {
  myusers: UserType[];
  myroles: RoleType[];
  
  appState:string;
  activeKey: string;

  constructor(private _serviceService: ServiceService) { }

  ngOnInit() {
    this._serviceService.getUsers().subscribe( myusers => {
      this.myusers = myusers;
    });

    this._serviceService.getRoles().subscribe( myroles => {
      this.myroles = myroles;
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

          
          this._serviceService.addUser(newUser);
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
