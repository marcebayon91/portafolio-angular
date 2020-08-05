import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductoDescripcion } from '../../interfaces/producto-descripcion.interface';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  producto: ProductoDescripcion;
  idProducto: string;

  constructor(private route: ActivatedRoute, public productoService: ProductosService, private ngxSpinner: NgxSpinnerService) { }

  ngOnInit() {
    this.ngxSpinner.show();
    this.route.params
      .subscribe(paramertros => {
        // console.log(paramertros['id']);

        this.productoService.getProducto(paramertros['id'])
          .subscribe((producto: ProductoDescripcion) => {
            this.idProducto = paramertros['id'];
            this.producto = producto;
            this.ngxSpinner.hide();
          });
      })
  }

}
