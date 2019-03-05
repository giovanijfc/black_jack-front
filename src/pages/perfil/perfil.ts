import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UsuarioService } from '../../services/domain/usuario.service';
import { StorageService } from '../../services/storage.service';

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

  usuario: UsuarioDTO;

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public usuarioService: UsuarioService,
     public storage: StorageService) {
  }

  ionViewDidLoad() {
    let localUser = this.storage.getLocalUser();
    if(localUser && localUser.email){
    this.usuarioService.findByEmail(localUser.email)
     .subscribe(response =>{
      this.usuario = response;
      console.log(this.usuario);
     },
     error=> {});
    }

  }

}
