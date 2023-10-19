import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {

  @Input()
  imagemBanner: string = "";

  @Input()
  tituloCard: string = "";

  @Input()
  descricao: string = " ";
  
  constructor() { }

  ngOnInit(): void {
  }

}
