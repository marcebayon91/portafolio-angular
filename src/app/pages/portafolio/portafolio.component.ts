import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {

  constructor(public productoService: ProductosService,private _ngxSpinner: NgxSpinnerService) 
  {
    
  }

  ngOnInit() {
    this._ngxSpinner.show();
    if(!this.productoService.cargada){
      this._ngxSpinner.hide();
    }
  }

}
