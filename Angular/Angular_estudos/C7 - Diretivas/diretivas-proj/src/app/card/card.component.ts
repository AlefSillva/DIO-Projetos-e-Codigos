import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  produtos: string[] = []
  menuType:string = 'user'
  constructor() {
    this.produtos = [
      'mouse',
      'teclado',
      'cabo',
      'font'
    ]
  }

  adicionar() {
    this.produtos.push("Alef")
  }

  remover(index:number) {
    this.produtos.splice(index, 1)
  }

}
