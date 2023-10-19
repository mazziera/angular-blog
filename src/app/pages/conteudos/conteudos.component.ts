import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conteudos',
  templateUrl: './conteudos.component.html',
  styleUrls: ['./conteudos.component.css']
})
export class ConteudosComponent implements OnInit {

  conteudoTitulo: string = 'Novo jogo da saga Warhammer 40k é anúnciado!'
  conteudoDescricao: string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
