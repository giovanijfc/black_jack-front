import { Injectable } from "@angular/core";


@Injectable()
export class ComparatorUtil{

    urls : UrlImagesDTO;

    compareLetter(carUsuPartida: any[], i: number) : UrlImagesDTO{  
       
    
        let naipe = carUsuPartida[i].cartas.naipe;
        let valor = carUsuPartida[i].cartas.valor;

        if(naipe == "OUROS" || naipe == "ÁS_OUROS" || naipe == "Q_OUROS" || naipe == "J_OUROS" || naipe == "K_OUROS"){
        switch(valor){
            case 11:
            this.urls = {
                urlGrande: "/assets/imgs/Cartas_Naipes/OUROS/Grandes/1.png",
                urlPequena: "/assets/imgs/Cartas_Naipes/OUROS/Pequenas/1.png"
            }
            
            return this.urls;
            case 2:
            this.urls = {
                urlGrande: "/assets/imgs/Cartas_Naipes/OUROS/Grandes/2.png",
                urlPequena: "/assets/imgs/Cartas_Naipes/OUROS/Pequenas/2.png"
            }
            
            return this.urls;
            case 3:
            this.urls = {
                urlGrande: "/assets/imgs/Cartas_Naipes/OUROS/Grandes/3.png",
                urlPequena: "/assets/imgs/Cartas_Naipes/OUROS/Pequenas/3.png"
            }
            
            return this.urls;
            case 4:
            this.urls = {
                urlGrande: "/assets/imgs/Cartas_Naipes/OUROS/Grandes/4.png",
                urlPequena: "/assets/imgs/Cartas_Naipes/OUROS/Pequenas/4.png"
            }
            
            return this.urls;
            case 5:
            this.urls = {
                urlGrande: "/assets/imgs/Cartas_Naipes/OUROS/Grandes/5.png",
                urlPequena: "/assets/imgs/Cartas_Naipes/OUROS/Pequenas/5.png"
            }
            
            return this.urls;
            case 6:
            this.urls = {
                urlGrande: "/assets/imgs/Cartas_Naipes/OUROS/Grandes/6.png",
                urlPequena: "/assets/imgs/Cartas_Naipes/OUROS/Pequenas/6.png"
            }
            
            return this.urls;
            case 7:
            this.urls = {
                urlGrande: "/assets/imgs/Cartas_Naipes/OUROS/Grandes/7.png",
                urlPequena: "/assets/imgs/Cartas_Naipes/OUROS/Pequenas/7.png"
            }
            
            return this.urls;
            case 8:
            this.urls = {
                urlGrande: "/assets/imgs/Cartas_Naipes/OUROS/Grandes/8.png",
                urlPequena: "/assets/imgs/Cartas_Naipes/OUROS/Pequenas/8.png"
            }
            
            return this.urls;
            case 9:
            this.urls = {
                urlGrande: "/assets/imgs/Cartas_Naipes/OUROS/Grandes/9.png",
                urlPequena: "/assets/imgs/Cartas_Naipes/OUROS/Pequenas/9.png"
            }
           
            return this.urls;
            case 10:
            if(naipe == "K_OUROS"){
                this.urls = {
                    urlGrande: "/assets/imgs/Cartas_Naipes/OUROS/Grandes/K.png",
                    urlPequena: "/assets/imgs/Cartas_Naipes/OUROS/Pequenas/K.png"
                }
            
            return this.urls;
            }
            else if(naipe == "Q_OUROS"){
                this.urls = {
                    urlGrande: "/assets/imgs/Cartas_Naipes/OUROS/Grandes/Q.png",
                    urlPequena: "/assets/imgs/Cartas_Naipes/OUROS/Pequenas/Q.png"
                }
            
            return this.urls;
            }else if(naipe == "J_OUROS") {
                this.urls = {
                    urlGrande: "/assets/imgs/Cartas_Naipes/OUROS/Grandes/J.png",
                    urlPequena: "/assets/imgs/Cartas_Naipes/OUROS/Pequenas/J.png"
                }
            
            return this.urls;
            }else{
                this.urls = {
                    urlGrande: "/assets/imgs/Cartas_Naipes/OUROS/Grandes/10.png",
                    urlPequena: "/assets/imgs/Cartas_Naipes/OUROS/Pequenas/10.png"
                }
            
            return this.urls;
            }  
        }
    }
        if(naipe == "COPAS" || naipe == "ÁS_COPAS" || naipe == "Q_COPAS" || naipe == "J_COPAS" || naipe == "K_COPAS"){
        switch(valor){
            case 11:
            this.urls = {
                urlGrande: "/assets/imgs/Cartas_Naipes/COPAS/Grandes/1.png",
                urlPequena: "/assets/imgs/Cartas_Naipes/COPAS/Pequenas/1.png"
            }
            
            return this.urls;
            case 2:
            this.urls = {
                urlGrande: "/assets/imgs/Cartas_Naipes/COPAS/Grandes/2.png",
                urlPequena: "/assets/imgs/Cartas_Naipes/COPAS/Pequenas/2.png"
            }
           
            return this.urls;
            case 3:
            this.urls = {
                urlGrande: "/assets/imgs/Cartas_Naipes/COPAS/Grandes/3.png",
                urlPequena: "/assets/imgs/Cartas_Naipes/COPAS/Pequenas/3.png"
            }
            
            return this.urls;
            case 4:
            this.urls = {
                urlGrande: "/assets/imgs/Cartas_Naipes/COPAS/Grandes/4.png",
                urlPequena: "/assets/imgs/Cartas_Naipes/COPAS/Pequenas/4.png"
            }
            
            return this.urls;
            case 5:
            this.urls = {
                urlGrande: "/assets/imgs/Cartas_Naipes/COPAS/Grandes/5.png",
                urlPequena: "/assets/imgs/Cartas_Naipes/COPAS/Pequenas/5.png"
            }
           
            return this.urls;
            case 6:
            this.urls = {
                urlGrande: "/assets/imgs/Cartas_Naipes/COPAS/Grandes/6.png",
                urlPequena: "/assets/imgs/Cartas_Naipes/COPAS/Pequenas/6.png"
            }
            
            return this.urls;
            case 7:
            this.urls = {
                urlGrande: "/assets/imgs/Cartas_Naipes/COPAS/Grandes/7.png",
                urlPequena: "/assets/imgs/Cartas_Naipes/COPAS/Pequenas/7.png"
            }
            
            return this.urls;
            case 8:
            this.urls = {
                urlGrande: "/assets/imgs/Cartas_Naipes/COPAS/Grandes/8.png",
                urlPequena: "/assets/imgs/Cartas_Naipes/COPAS/Pequenas/8.png"
            }
            
            return this.urls;
            case 9:
            this.urls = {
                urlGrande: "/assets/imgs/Cartas_Naipes/COPAS/Grandes/9.png",
                urlPequena: "/assets/imgs/Cartas_Naipes/COPAS/Pequenas/9.png"
            }
            
            return this.urls;
            case 10:
            if(naipe == "K_COPAS"){
                this.urls = {
                    urlGrande: "/assets/imgs/Cartas_Naipes/COPAS/Grandes/K.png",
                    urlPequena: "/assets/imgs/Cartas_Naipes/COPAS/Pequenas/K.png"
                }
           
            return this.urls;
            }
            else if(naipe == "Q_COPAS"){
                this.urls = {
                    urlGrande: "/assets/imgs/Cartas_Naipes/COPAS/Grandes/Q.png",
                    urlPequena: "/assets/imgs/Cartas_Naipes/COPAS/Pequenas/Q.png"
                }
            
            return this.urls;
            }else if(naipe == "J_COPAS") {
                this.urls = {
                    urlGrande: "/assets/imgs/Cartas_Naipes/COPAS/Grandes/J.png",
                    urlPequena: "/assets/imgs/Cartas_Naipes/COPAS/Pequenas/J.png"
                }
            
            return this.urls;
            }else{
                this.urls = {
                    urlGrande: "/assets/imgs/Cartas_Naipes/COPAS/Grandes/10.png",
                    urlPequena: "/assets/imgs/Cartas_Naipes/COPAS/Pequenas/10.png"
                }
           
            return this.urls;
            }
        }
    }
        if(naipe == "ESPADAS" || naipe == "ÁS_ESPADAS" || naipe == "Q_ESPADAS" || naipe == "J_ESPADAS" || naipe == "K_ESPADAS"){
        switch(valor){
            case 11:
            this.urls = {
                urlGrande: "/assets/imgs/Cartas_Naipes/ESPADAS/Grandes/1.png",
                urlPequena: "/assets/imgs/Cartas_Naipes/ESPADAS/Pequenas/1.png"
            }
            
            return this.urls;
            case 2:
            this.urls = {
                urlGrande: "/assets/imgs/Cartas_Naipes/ESPADAS/Grandes/2.png",
                urlPequena: "/assets/imgs/Cartas_Naipes/ESPADAS/Pequenas/2.png"
            }
           
            return this.urls;
            case 3:
            this.urls = {
                urlGrande: "/assets/imgs/Cartas_Naipes/ESPADAS/Grandes/3.png",
                urlPequena: "/assets/imgs/Cartas_Naipes/ESPADAS/Pequenas/3.png"
            }
            return this.urls;
            case 4:
            this.urls = {
                urlGrande: "/assets/imgs/Cartas_Naipes/ESPADAS/Grandes/4.png",
                urlPequena: "/assets/imgs/Cartas_Naipes/ESPADAS/Pequenas/4.png"
            }
            
            return this.urls;
            case 5:
            this.urls = {
                urlGrande: "/assets/imgs/Cartas_Naipes/ESPADAS/Grandes/5.png",
                urlPequena: "/assets/imgs/Cartas_Naipes/ESPADAS/Pequenas/5.png"
            }
            
            return this.urls;
            case 6:
            this.urls = {
                urlGrande: "/assets/imgs/Cartas_Naipes/ESPADAS/Grandes/6.png",
                urlPequena: "/assets/imgs/Cartas_Naipes/ESPADAS/Pequenas/6.png"
            }
            
            return this.urls;
            case 7:
            this.urls = {
                urlGrande: "/assets/imgs/Cartas_Naipes/ESPADAS/Grandes/7.png",
                urlPequena: "/assets/imgs/Cartas_Naipes/ESPADAS/Pequenas/7.png"
            }
            
            return this.urls;
            case 8:
            this.urls = {
                urlGrande: "/assets/imgs/Cartas_Naipes/ESPADAS/Grandes/8.png",
                urlPequena: "/assets/imgs/Cartas_Naipes/ESPADAS/Pequenas/8.png"
            }
            
            return this.urls;
            case 9:
            this.urls = {
                urlGrande: "/assets/imgs/Cartas_Naipes/ESPADAS/Grandes/9.png",
                urlPequena: "/assets/imgs/Cartas_Naipes/ESPADAS/Pequenas/9.png"
            }
          
            return this.urls;
            case 10:
            if(naipe == "K_ESPADAS"){
                this.urls = {
                    urlGrande: "/assets/imgs/Cartas_Naipes/ESPADAS/Grandes/K.png",
                    urlPequena: "/assets/imgs/Cartas_Naipes/ESPADAS/Pequenas/K.png"
                }
            
            return this.urls;
            }
            else if(naipe == "Q_ESPADAS"){
                this.urls = {
                    urlGrande: "/assets/imgs/Cartas_Naipes/ESPADAS/Grandes/Q.png",
                    urlPequena: "/assets/imgs/Cartas_Naipes/ESPADAS/Pequenas/Q.png"
                }
            
            return this.urls;
            }else if(naipe == "J_ESPADAS") {
                this.urls = {
                    urlGrande: "/assets/imgs/Cartas_Naipes/ESPADAS/Grandes/J.png",
                    urlPequena: "/assets/imgs/Cartas_Naipes/ESPADAS/Pequenas/J.png"
                }
            
            return this.urls;
            }else{
                this.urls = {
                    urlGrande: "/assets/imgs/Cartas_Naipes/ESPADAS/Grandes/10.png",
                    urlPequena: "/assets/imgs/Cartas_Naipes/ESPADAS/Pequenas/10.png"
                }
           
            return this.urls;
            }
        }
        if(naipe == "PAUS" || naipe == "ÁS_PAUS" || naipe == "Q_PAUS" || naipe == "J_PAUS" || naipe == "K_PAUS"){
        switch(valor){
            case 11:
            this.urls = {
                urlGrande: "/assets/imgs/Cartas_Naipes/PAUS/Grandes/1.png",
                urlPequena: "/assets/imgs/Cartas_Naipes/PAUS/Pequenas/1.png"
            }
            
            return this.urls;
            case 2:
            this.urls = {
                urlGrande: "/assets/imgs/Cartas_Naipes/PAUS/Grandes/2.png",
                urlPequena: "/assets/imgs/Cartas_Naipes/PAUS/Pequenas/2.png"
            }
           
            return this.urls;
            case 3:
            this.urls = {
                urlGrande: "/assets/imgs/Cartas_Naipes/PAUS/Grandes/3.png",
                urlPequena: "/assets/imgs/Cartas_Naipes/PAUS/Pequenas/3.png"
            }
           
            return this.urls;
            case 4:
            this.urls = {
                urlGrande: "/assets/imgs/Cartas_Naipes/PAUS/Grandes/4.png",
                urlPequena: "/assets/imgs/Cartas_Naipes/PAUS/Pequenas/4.png"
            }
            
            return this.urls;
            case 5:
            this.urls = {
                urlGrande: "/assets/imgs/Cartas_Naipes/PAUS/Grandes/5.png",
                urlPequena: "/assets/imgs/Cartas_Naipes/PAUS/Pequenas/5.png"
            }
            
            return this.urls;
            case 6:
            this.urls = {
                urlGrande: "/assets/imgs/Cartas_Naipes/PAUS/Grandes/6.png",
                urlPequena: "/assets/imgs/Cartas_Naipes/PAUS/Pequenas/6.png"
            }
            
            return this.urls;
            case 7:
            this.urls = {
                urlGrande: "/assets/imgs/Cartas_Naipes/PAUS/Grandes/7.png",
                urlPequena: "/assets/imgs/Cartas_Naipes/PAUS/Pequenas/7.png"
            }
            
            return this.urls;
            case 8:
            this.urls = {
                urlGrande: "/assets/imgs/Cartas_Naipes/PAUS/Grandes/8.png",
                urlPequena: "/assets/imgs/Cartas_Naipes/PAUS/Pequenas/8.png"
            }
           
            return this.urls;
            case 9:
            this.urls = {
                urlGrande: "/assets/imgs/Cartas_Naipes/PAUS/Grandes/9.png",
                urlPequena: "/assets/imgs/Cartas_Naipes/PAUS/Pequenas/9.png"
            }
            
            return this.urls;
            case 10:
            if(naipe == "K_PAUS"){
                this.urls = {
                    urlGrande: "/assets/imgs/Cartas_Naipes/PAUS/Grandes/K.png",
                    urlPequena: "/assets/imgs/Cartas_Naipes/PAUS/Pequenas/K.png"
                }
            
            return this.urls;
            }
            else if(naipe == "Q_PAUS"){
                this.urls = {
                    urlGrande: "/assets/imgs/Cartas_Naipes/PAUS/Grandes/Q.png",
                    urlPequena: "/assets/imgs/Cartas_Naipes/PAUS/Pequenas/Q.png"
                }
            
            return this.urls;
            }else if(naipe == "J_PAUS") {
                this.urls = {
                    urlGrande: "/assets/imgs/Cartas_Naipes/PAUS/Grandes/J.png",
                    urlPequena: "/assets/imgs/Cartas_Naipes/PAUS/Pequenas/J.png"
                }
            
            return this.urls;
            }else{
                this.urls = {
                    urlGrande: "/assets/imgs/Cartas_Naipes/PAUS/Grandes/10.png",
                    urlPequena: "/assets/imgs/Cartas_Naipes/PAUS/Pequenas/10.png"
                }
            
            return this.urls;
            }
        }
      }
    }
   }
  }

