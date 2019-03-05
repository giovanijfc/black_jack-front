import { Injectable, Component } from "@angular/core";
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HTTP_INTERCEPTORS,  } from '@angular/common/http';
import { Observable } from 'rxjs/Rx'; 
import { AlertController } from "ionic-angular";
import { StorageService } from "../services/storage.service";


@Injectable()
export class AuthInterception implements HttpInterceptor{

    constructor(public storage: StorageService){
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

            let localUser = this.storage.getLocalUser();

            if(localUser){
                const authReq = req.clone({headers: req.headers.set('Authorization', 'Bearer ' + localUser.token)});
                return next.handle(authReq);
            }
            else{
             return next.handle(req);
            }
    }
}


export const AuthInterceptorProvider ={
    provide: HTTP_INTERCEPTORS,
    useClass:AuthInterception,
    multi: true,
};