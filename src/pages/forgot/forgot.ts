import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, AlertController } from 'ionic-angular';
import { AuthService } from '../../services/auth.service';

/**
 * Generated class for the ForgotPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forgot',
  templateUrl: 'forgot.html',
})
export class ForgotPage {

  newPass: ChangeNewPassDTO = {
    email: "",
    palavraChave:"",
    newSenha : "",
  };

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public menu: MenuController,
     public auth: AuthService,
     public alertCtrl: AlertController) {
  }

  ionViewWillEnter() {
    this.menu.swipeEnable(false);
  }

  forgotPass(){
    console.log(this.newPass);
    this.auth.forgot(this.newPass)
     .subscribe(response=> {
      this.showChangedPass();
     },
     error => {})
  }

  showChangedPass(){
    let alert = this.alertCtrl.create({
      title: "Success",
      message:"Password change done successfully",
      buttons:[{
        text:'OK',
         handler: () => {
        this.navCtrl.pop();
      }
     }]
    });
    alert.present();
  }
}
