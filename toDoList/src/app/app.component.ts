import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatChipsModule} from '@angular/material/chips'
import { TrefleService } from './services/trefle.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatToolbarModule, MatChipsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private _trefleService: TrefleService){

  }
  kingdoms: any;
  title = 'toDoList';

  ngOnInit(){
    this.kingdoms = this._trefleService.getKingdoms();
    console.log(this.kingdoms);
  }
}
