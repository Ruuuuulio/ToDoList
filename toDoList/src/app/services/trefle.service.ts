import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class TrefleService {
    AuthToken: string = "_enhScRePk3gaBWfgxa59QBt4VpiE3K__Wak2OctWWk";
    trefleUrl: string;
    constructor(private _http: HttpClient){
        this.trefleUrl = "https://trefle.io/api/v1";
    }

    getKingdoms(){
        return this._http.get(`${this.trefleUrl}/verify?${this.AuthToken}`);
    }

}