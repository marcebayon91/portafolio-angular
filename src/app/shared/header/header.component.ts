import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfoPaginaService } from '../../services/info-pagina.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public _info: InfoPaginaService, private _router: Router) { }

  ngOnInit() {
  }

  buscarProducto(valor: string) {
    if (valor.length < 1) {
      return;
    }

    this._router.navigate(['/search', valor]);
  }
}
