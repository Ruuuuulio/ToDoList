import { Component, OnInit } from '@angular/core';
import { HarryPotterService } from '../../services/harryPotter.service';
import { Character } from '../../interface/harry-potter.interface';

@Component({
  selector: 'app-harry-potter',
  standalone: true,
  imports: [],
  templateUrl: './harry-potter.component.html',
  styleUrl: './harry-potter.component.scss'
})
export class HarryPotterComponent implements OnInit {

  characters: Character[] = []; // Tableau pour stocker les personnages
  errorMessage: string = ''; // Message d'erreur en cas de problème

  constructor(private _harryPotterService: HarryPotterService){}


  ngOnInit(): void {
    this.getAllCharacters(); // Appel de la fonction pour récupérer les personnages au démarrage
    console.log(this.characters);
  }

  getAllCharacters(): void {
    this._harryPotterService.getCharacters().subscribe({
      next: (response) => {
        if (response.success) {
          this.characters = response.data; // Assignez les données reçues au tableau characters
        } else {
          this.errorMessage = 'Erreur lors de la récupération des personnages.';
        }
      },
      error: (err) => {
        console.error('Erreur HTTP:', err);
        this.errorMessage = 'Impossible de récupérer les personnages. Veuillez réessayer plus tard.';
      }
    });
  }
}
