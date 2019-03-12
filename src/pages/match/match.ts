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
  match: any = null;
  url_config: string[];
  urls: UrlImagesDTO[] = [];
  urls2: UrlImagesDTO[] = [];
  contador: any;
  button1: boolean;
  button2: boolean;
  partidaFinalize: string;
  soma: any;
  somaMaq: any = 0;
  


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public menu: MenuController,
    public matchService: MatchService,
    public comparator: ComparatorUtil,
    public alertCtrl: AlertController) {
    var a;
    for (a = 0; a < 52; a++)this.urls[a] = { urlGrande: "", urlPequena: "" }
    var b;
    for (b = 0; b < 52; b++)this.urls2[b] = { urlGrande: "", urlPequena: "" }
  }

  ionViewWillEnter() {
    this.menu.swipeEnable(false);
    this.partidaFinalize = "Not finishid!";
  }

  start() {
    this.contador = 0;
    this.matchService.start()
      .subscribe(response => { 
        this.somaMaq = 0;
        var c;
        for (c = 0; c < this.urls.length; c++) { this.urls.splice(c) }
        var b;
        for (b = 0; b < 52; b++){this.urls2.splice(b)}
        var a;
        for (a = 0; a < 52; a++)this.urls[a] = { urlGrande: "", urlPequena: "" }
        this.match = response;
        this.partidaFinalizada(response);
        this.idPartida = this.match.dados.idPartida;
        this.soma = this.match.soma;
        this.urls[this.contador] = (this.comparator.compareLetter(response.dados.carUsuPar, this.contador));
        ++this.contador;
        this.urls[this.contador] = (this.comparator.compareLetter(response.dados.carUsuPar, this.contador));
        if (this.soma == 21) {
          this.alertNotProceed(response);
        }
        ++this.contador;
      });
  }

  proceed() {
    this.matchService.proceed(this.idPartida)
      .subscribe(response => {
        this.match = response;
       
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
         
          
        }
      },
        error => { this.alertNotProceed(this.match) })
  }

  notProceed() {
    this.matchService.notProceed(this.idPartida)
      .subscribe(response => {
      let contador2 = 0;  
      var i;
      
      for(i=0;i < response.dados.carUsuPar.length; ++i){
      if(response.dados.carUsuPar[i].usuarios.idUsuario == 1){
      this.urls2[contador2] = this.comparator.compareLetter(response.dados.carUsuPar, i);
      
      this.somaMaq = response.dados.carUsuPar[i].cartas.valor + this.somaMaq;
      
      ++contador2;
      }
    }
      
        this.partidaFinalizada(response);
        this.match = response;
       
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
      this.partidaFinalize = "Not finished!";
    } else {
      this.partidaFinalize = "Game finished!"
    }
  }
  showMachineChart(){
    if(this.match == null){
      let alerta = this.alertCtrl.create({
        title: 'Alert',
        message: "Departure does not exist",
        buttons: [{ text: 'ok', }]
      })
      alerta.present();
    }
    else{
    this.navCtrl.push('CartasMaquinaPage', {urls2: this.urls2,soma: this.somaMaq, partidaId: this.idPartida})
    }
  }
 
}



