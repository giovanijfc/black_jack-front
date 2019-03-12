import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ComparatorUtil } from '../../utilities/comparaton.util';

@IonicPage()
@Component({
  selector: 'page-cartas-maquina',
  templateUrl: 'cartas-maquina.html',
})
export class CartasMaquinaPage {

  urls: UrlImagesDTO[] = [];
  soma: any = 0;
  partidaId: any="";

  constructor(public navCtrl: NavController, public navParams: NavParams, public comparation: ComparatorUtil) {
    var c;
    for(c=0; c<52; ++c){
    this.urls[c]={urlGrande:"",urlPequena:""}
    }
  }

  ionViewDidEnter() {
    this.urls = this.navParams.get('urls2');
    this.soma= this.navParams.get('soma');
    this.partidaId= this.navParams.get('partidaId');
    var a;
  }
}
