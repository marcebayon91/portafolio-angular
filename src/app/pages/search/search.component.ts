import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private _route: ActivatedRoute, public productoService: ProductosService, public ngxSpinner: NgxSpinnerService) { }

  ngOnInit() {
    this.ngxSpinner.show();
    this._route.params.subscribe(params => {
      this.productoService.buscarProducto(params['valor']);
      setTimeout(() => {
        this.ngxSpinner.hide();
      }, 1000);

    })
  }

}
