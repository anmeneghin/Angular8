import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if-ng-for',
  templateUrl: './ng-if-ng-for.component.html',
  styleUrls: ['./ng-if-ng-for.component.sass']
})
export class NgIfNgForComponent implements OnInit {
numero: number;
arrNumeros = ["Amanda", "Nogueira", "Meneghin"];

  constructor() { }

  ngOnInit(): void {
  }

}
