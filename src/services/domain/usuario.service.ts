import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { API_CONFIG } from "../../config/api.config";

@Injectable()
export class UsuarioService{

    usuario: UsuarioDTO

    constructor(public http: HttpClient){   
    }

    findByEmail(email: string) : Observable<UsuarioDTO>{
        return this.http.get<UsuarioDTO>(`${API_CONFIG.baseUrl}/21/user/email?value=${email}`)
    }
}