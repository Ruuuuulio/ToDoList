import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class CountryLayerService {
    constructor(private _http: HttpClient){}
}