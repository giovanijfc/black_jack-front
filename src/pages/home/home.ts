import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  creds: CredenciaisDTO ={
    email: "",
    senha: ""
  };

  constructor(public navCtrl: NavController,
     public menu: MenuController,
     public auth: AuthService) {
  }

  ionViewDidEnter(){
    this.menu.swipeEnable(false);
  }
  
  login(){
    this.auth.authenticate(this.creds)
     .subscribe(response => {
      this.auth.sucessfulLogin(response.headers.get('Authorization'))
      this.navCtrl.setRoot('PerfilPage');
     },
     error =>{})
  }
}
