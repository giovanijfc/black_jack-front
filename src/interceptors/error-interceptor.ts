import { Injectable, Component } from "@angular/core";
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HTTP_INTERCEPTORS,  } from '@angular/common/http';
import { Observable } from 'rxjs/Rx'; // IMPORTANTE: IMPORT ATUALIZADO
import { AlertController } from "ionic-angular";


@Injectable()
export class ErrorInterceptor implements HttpInterceptor{

    constructor(public alertCtrl: AlertController){

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        console.log("Passou no interceptor")
        return next.handle(req)
         .catch((error, caught) => {
             let errorObj = error;

             if(errorObj.error){
                errorObj = errorObj.error;
             } 
             if(!errorObj.status){
                errorObj = JSON.parse(errorObj);
             }
             console.log("Erro detectado pelo interceptor")
             console.log(errorObj);

            switch(errorObj.status){
            case 401:
            this.handle401();
            break;
            }

             return Observable.throw(error);
         }) as any;
    }

    handle401(){
        let alert = this.alertCtrl.create({
            title: 'Erro 401: Falha de autenticação',
            message: 'Email ou senha incorretos!',
            enableBackdropDismiss: false,
            buttons: ['Continuar']
           
          });
          alert.present();
        }
    }



export const ErrorInterceptorProvider ={
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true,
};