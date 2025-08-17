import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  imports: [RouterLink],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card {

  @Input() card: any = {
    thumbnail: '',
    title: '',
    description: '',
    price: 0,
    id: 0
  };

}
