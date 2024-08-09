import { Component } from '@angular/core';
import { MealsComponent } from "./meals/meals.component";

@Component({
  selector: 'app-our-menu',
  standalone: true,
  imports: [MealsComponent],
  templateUrl: './our-menu.component.html',
  styleUrl: './our-menu.component.scss'
})

export class OurMenuComponent {

}