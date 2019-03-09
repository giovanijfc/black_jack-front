import { Component } from '@angular/core';
import { NavController, MenuController, IonicPage } from 'ionic-angular';
import { AuthService } from '../../services/auth.service';
import { StorageService } from '../../services/storage.service';
import { LottieAnimationViewModule } from 'ng-lottie';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  creds: CredenciaisDTO ={
    email: "",
    senha: ""
  };

  lottieConfig: any;

  constructor(public navCtrl: NavController,
     public menu: MenuController,
     public auth: AuthService,
     public storage: StorageService) {
      LottieAnimationViewModule.forRoot()
      this.lottieConfig ={
        path: '/assets/imgs/Animations/loginSucess.json',
        autoplay: true,
        loop: false
       }
  }
  ionViewWillEnter(){
    this.menu.swipeEnable(false);
  }
  ionViewWillLeave(){
    this.menu.swipeEnable(true);
  }

  ionViewDidEnter(){
    this.auth.refresh_Token()
     .subscribe(response =>{
       this.auth.sucessfulLogin(response.headers.get('Authorization'));
       LottieAnimationViewModule.forRoot()
       this.lottieConfig ={
        path: '/assets/imgs/Animations/loginSucess.json',
        autoplay: true,
        loop: false
       }
       this.navCtrl.setRoot('StartPage');
     },
     error =>{})
  }
  
  
  login(){
    this.auth.authenticate(this.creds)
     .subscribe(response => {
      this.auth.sucessfulLogin(response.headers.get('Authorization')) 
      this.navCtrl.setRoot('StartPage');
     },
     error =>{})
  }

  signup(){
   this.navCtrl.push('SignupPage');
  }
  forgot(){
    this.navCtrl.push('ForgotPage');
  }
}
