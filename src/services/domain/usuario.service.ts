import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { API_CONFIG } from "../../config/api.config";
import { ResponseType } from "@angular/http";

@Injectable()
export class UsuarioService{

    usuario: UsuarioDTO;

    constructor(public http: HttpClient){   
    }

    findByEmail(email: string) : Observable<UsuarioDTO>{
        return this.http.get<UsuarioDTO>(`${API_CONFIG.baseUrl}/21/user/email?value=${email}`)
    }

    insert(usuario: UsuarioDTO){
        return this.http.post(`${API_CONFIG.baseUrl}/21/user/registrando`,
        usuario,{
            observe: 'response',
            responseType:'text'
        });
    }
}