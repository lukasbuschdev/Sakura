import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-meals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './meals.component.html',
  styleUrl: './meals.component.scss'
})

export class MealsComponent {
  meals: meal[] = [
    {
      name: "Tonkasu Ramen",
      img: "./assets/img/r1.png"
    },
    {
      name: "Spicy Miso Ramen",
      img: "./assets/img/r2.png"
    },
    {
      name: "Shio Ramen",
      img: "./assets/img/r3.png"
    }
  ]
}

type meal = {name: string, img: string}