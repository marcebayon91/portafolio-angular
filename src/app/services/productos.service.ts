import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargada = true;
  productos: Producto[] = [];
  productosFiltrado: Producto[] = [];


  constructor(private _http: HttpClient) {
    this.cargarProductos();
  }

  private cargarProductos() {

    return new Promise((resolve, reject) => {
      this._http.get('https://portafolio-578bf.firebaseio.com/productos_idx.json')
        .subscribe((resp: Producto[]) => {
          this.productos = resp;
          this.cargada = false;
          resolve();
        })
    })


  }

  getProducto(id: string) {
    return this._http.get(`https://portafolio-578bf.firebaseio.com/productos/${id}.json`);
  }

  buscarProducto(valor: string) {

    if (this.productos.length === 0) {
      //Debemos esperar que se cargue la informmación
      this.cargarProductos().then(() => {
        //Ejecutar después de tener los productos
        //Aplicar el filtro
        this.filtrarProductos(valor)
      })
    }
    else {
      //Aplicar el filtro
      this.filtrarProductos(valor)
    }
  }

  private filtrarProductos(valor: string) {

    this.productosFiltrado = [];
    valor = valor.toLocaleLowerCase();

    this.productos.forEach(prod => {
      const tituloLower = prod.titulo.toLowerCase();
      const categoriaLower = prod.categoria.toLowerCase();

      if (categoriaLower.indexOf(valor) >= 0 || tituloLower.indexOf(valor) >= 0) {
        this.productosFiltrado.push(prod);
      }
    })
  }
}
