import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { StorageService } from "../storage.service";
import { API_CONFIG } from "../../config/api.config";

@Injectable()
export class MatchService{


    constructor(public http: HttpClient, public storage: StorageService){       
    }

    start() : Observable<any>{
        let email = this.storage.getLocalUser().email;
         return this.http.get<any>(`${API_CONFIG.baseUrl}/21/partida/iniciar?value=${email}`);
    }
    proceed(id: any) : Observable<any>{
        return this.http.get<any>(`${API_CONFIG.baseUrl}/21/partida/continuacao?partida=${id}`)
    }
    notProceed(id: any){
        return this.http.get<any>(`${API_CONFIG.baseUrl}/21/partida/naoContinuar?partida=${id}`)
    }
}