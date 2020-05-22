import { Component, OnInit } from '@angular/core';
import {CrudService} from "src/app/services/crud.service";
import {Images} from "../../models/placeholder.model";

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.sass']
})
export class CrudComponent implements OnInit {
  images: any;
  erro: any;
  constructor(private crudService: CrudService ) {
    this.getter();
  }
  ngOnInit(){}
  getter(){
    this.crudService.getFotos().subscribe(
      (data: Images) => {
        this.images = data;
        console.log('O data que recebemos ', data);
        console.log('A variavel que recebemos', this.images);
      },
      (error:any) => {
        this.erro = error;
        console.error("ERROR: ", error)
      }
    );
  }
}
