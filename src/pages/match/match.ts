import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, UrlSerializer } from 'ionic-angular';
import { MenuController } from 'ionic-angular/components/app/menu-controller';
import { MatchService } from '../../services/domain/match.service';
import { ComparatorUtil } from '../../utilities/comparaton.util';

@IonicPage()
@Component({
  selector: 'page-match',
  templateUrl: 'match.html',
})
export class MatchPage {

  idPartida: any;
  match: any;
  url_config: string[];
  urls: UrlImagesDTO[] = [];
  contador: any;
  button1: boolean;
  button2: boolean;
  partidaFinalize: string;
  soma: any;


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public menu: MenuController,
    public matchService: MatchService,
    public comparator: ComparatorUtil,
    public alertCtrl: AlertController) {
    var a;
    for (a = 0; a < 12; a++)this.urls[a] = { urlGrande: "", urlPequena: "" }
  }

  ionViewWillEnter() {
    this.menu.swipeEnable(false);
    this.partidaFinalize = "Não finalizada!";
  }

  start() {
    this.contador = 0;
    this.matchService.start()
      .subscribe(response => {
      
        var c;
        for (c = 0; c < this.urls.length; c++) { this.urls.splice(i) }

        var a;
        for (a = 0; a < 12; a++)this.urls[a] = { urlGrande: "", urlPequena: "" }

        this.match = response;
        console.log(this.match);
        this.partidaFinalizada(response);

        this.idPartida = this.match.dados.idPartida;

        this.soma = this.match.soma;

        this.urls[this.contador] = (this.comparator.compareLetter(response.dados.carUsuPar, this.contador));
        ++this.contador;
        this.urls[this.contador] = (this.comparator.compareLetter(response.dados.carUsuPar, this.contador));

        if (this.soma == 21) {
          this.alertNotProceed(response);
        }

        var i;
        for (i = 0; i < this.urls.length; ++i) { console.log(this.urls[i]); }
        console.log(this.soma);

        ++this.contador;
      });
  }

  proceed() {
    this.matchService.proceed(this.idPartida)
      .subscribe(response => {
        this.match = response;
        console.log(this.match);
        this.partidaFinalizada(response);
        this.soma = this.match.soma;
        if (this.match.mensagem == "Esta Partida já foi finalizada!" || this.soma == 21 || this.soma > 21) {
          if (this.match.mensagem == "Esta Partida já foi finalizada!") {
             this.alertNotProceed(response); 
            }
          else if (this.soma > 21) {
            this.urls[this.contador] = (this.comparator.compareLetter(response.dados.carUsuPar, this.contador));
            this.alertNotProceed(response);
          }
          else if (this.soma == 21) {
            this.urls[this.contador] = (this.comparator.compareLetter(response.dados.carUsuPar, this.contador));
             this.alertNotProceed(response) 
            }
        } else {
          this.urls[this.contador] = (this.comparator.compareLetter(response.dados.carUsuPar, this.contador));
          ++this.contador;
          var i;
          for (i = 0; i < this.urls.length; ++i) { console.log(this.urls[i]); }
          console.log(this.soma);
        }
      },
        error => { this.alertNotProceed(this.match) })
  }

  notProceed() {
    this.matchService.notProceed(this.idPartida)
      .subscribe(response => {

        this.partidaFinalizada(response);
        this.match = response;
        console.log(this.match);
        this.alertNotProceed(response);
      })
  }


  alertNotProceed(response: any) {
    let alerta = this.alertCtrl.create({
      title: 'Alert',
      message: response.mensagem,
      buttons: [{ text: 'ok', }]
    })
    alerta.present();
  }

  partidaFinalizada(response: any) {
    if (response.dados.partidaFinalizada != true) {
      this.partidaFinalize = "Não finalizada!";
    } else {
      this.partidaFinalize = "Partida finalizada!"
    }
  }
}



