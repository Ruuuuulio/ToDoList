import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatChipsModule} from '@angular/material/chips'
import { HarryPotterComponent } from "./pages/harry-potter/harry-potter.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatToolbarModule, MatChipsModule, HarryPotterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(){

  }
  title = 'toDoList';

  ngOnInit(){
  }
  
}
