
  
  import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse, Character, Spell, House, MagicalObject } from '../interface/harry-potter.interface';


@Injectable({
  providedIn: 'root'
})
export class HarryPotterService {
  private apiUrl = 'https://api.potterdb.com/v1'; // Remplacez par l'URL de l'API

  constructor(private http: HttpClient) {}

  getCharacters(): Observable<ApiResponse<Character[]>> {
    return this.http.get<ApiResponse<Character[]>>(`${this.apiUrl}/characters`);
  }

  getSpells(): Observable<ApiResponse<Spell[]>> {
    return this.http.get<ApiResponse<Spell[]>>(`${this.apiUrl}/spells`);
  }

  getHouses(): Observable<ApiResponse<House[]>> {
    return this.http.get<ApiResponse<House[]>>(`${this.apiUrl}/houses`);
  }

  getMagicalObjects(): Observable<ApiResponse<MagicalObject[]>> {
    return this.http.get<ApiResponse<MagicalObject[]>>(`${this.apiUrl}/magical-objects`);
  }
}