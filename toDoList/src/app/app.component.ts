import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatChipsModule} from '@angular/material/chips'
import { TrefleService } from './services/trefle.service';
import { ApiError, Plant } from './interface/trefle.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatToolbarModule, MatChipsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(private _trefleService: TrefleService){

  }
  plant?: Plant;  // Variable pour stocker les détails de la plante
  errorMessage?: string; // Variable pour stocker les messages d'erreur
  title = 'toDoList';

  ngOnInit(){
    this.getPlantById(238331)
  }

  getPlantById(id: number): void {
    this._trefleService.getPlantById(id).subscribe({
      next: (response: Plant | ApiError) => {
        if ('id' in response) {
          // Si l'objet a un 'id', c'est un objet Plant valide
          this.plant = response as Plant;
        } else {
          // Sinon, c'est un ApiError
          this.errorMessage = (response as ApiError).message || 'Erreur inconnue';
        }
      },
      error: (error) => {
        this.errorMessage = 'Erreur lors de la récupération des détails de la plante';
        console.error('Erreur API:', error);  // Log l'erreur pour le débogage
      }
    });
  }
  
}
