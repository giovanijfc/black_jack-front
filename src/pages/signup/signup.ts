import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { MenuController } from 'ionic-angular/components/app/menu-controller';
import { UsuarioService } from '../../services/domain/usuario.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PerfilPage } from '../perfil/perfil';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  formGroup: FormGroup;


  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public menu: MenuController,
     public usuarioService: UsuarioService,
     public formBuilder: FormBuilder,
     public alertCtrl: AlertController) {
       this.formGroup = this.formBuilder.group({
         nome:["Giovani",[Validators.required, Validators.minLength(6), Validators.maxLength(60)]],
         email:["giovanichiodi666@gmail.com",[Validators.required, Validators.email, Validators.minLength(10), Validators.maxLength(40)]],
         senha:["123456",[Validators.required, Validators.minLength(6), Validators.maxLength(35),]],
         palavraChave:["geogeo",[Validators.required, Validators.minLength(6), Validators.maxLength(20)]]
        
       })
  }

  ionViewWillEnter() {
    this.menu.swipeEnable(false);
  }

  signupUser(){
    this.usuarioService.insert(this.formGroup.value)
     .subscribe(response => {
      this.showInsertOk();
     },
     error=>{});
  }

  showInsertOk(){
    let alert = this.alertCtrl.create({
      title: 'Successfully ',
      message: 'Registration successfully complete ',
      enableBackdropDismiss:false,
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
