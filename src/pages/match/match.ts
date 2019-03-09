import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuController } from 'ionic-angular/components/app/menu-controller';
import { MatchService } from '../../services/domain/match.service';
import { ComparatorUtil } from '../../utilities/comparaton.util';
import { AnonymousSubject } from 'rxjs';

@IonicPage()
@Component({
  selector: 'page-match',
  templateUrl: 'match.html',
})
export class MatchPage {

    idPartida: any;
    match: any;
    urls1: UrlImagesDTO;
    urls2: UrlImagesDTO;
    contador: any;
   

    

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public menu: MenuController,
     public matchService: MatchService,
     public comparator: ComparatorUtil){
  }

  ionViewWillEnter() {
    this.menu.swipeEnable(false);
    
  }

  start(){
    this.contador = 0;
    this.matchService.start()
     .subscribe(response =>{
       this.match = response;
       console.log(this.match);
       console.log(response.dados.carUsuPar[0].cartas.naipe)
       console.log(response.dados.carUsuPar[0].cartas.valor)
       console.log(response.dados.carUsuPar[1].cartas.naipe)
       console.log(response.dados.carUsuPar[1].cartas.valor)

       
       

       this.idPartida = this.match.dados.idPartida;

       this.urls1 = this.comparator.compareLetter(response.dados.carUsuPar, "0");

       this.urls2 = this.comparator.compareLetter(response.dados.carUsuPar, "1");

       console.log(this.idPartida);

       console.log(this.urls1.urlGrande);
       console.log(this.urls1.urlPequena);

       console.log(this.urls2.urlGrande);
       console.log(this.urls2.urlPequena);
     });
  }

  proceed(){
    this.matchService.proceed(this.idPartida)
    .subscribe(response => {
      this.match = response;
       console.log(this.match);
       console.log(response.dados.carUsuPar[this.contador].cartas.naipe)
       console.log(response.dados.carUsuPar[this.contador].cartas.valor)

       

       this.urls1 = this.comparator.compareLetter(response.dados.carUsuPar, this.contador);
       
       console.log(this.idPartida);
       console.log(this.urls1.urlGrande);
       console.log(this.urls1.urlPequena);
      ++this.contador;
    })
  }

  notProceed(){
    this.matchService.notProceed(this.idPartida)
    .subscribe(response => {
      this.match = response;
      console.log(this.match); 
    })
  }
}
 

