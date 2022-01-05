import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { CanonicalService } from '../../services/canonical.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  public video: string = `${environment.carpetaVideos}/pedidos-converted.mp4`;
  public urlWebDemo: string = `${environment.urlWebDemo}`; 
  
  constructor(
    private titleService: Title,
    private metaTagService: Meta,
    private canonicalService: CanonicalService
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle(`Control sobre los pedidos online realizados por los clientes`);

    this.metaTagService.updateTag({
      name: 'description', content: `Como administrador, tendrás muy fácil la \
el control y la gestión de los pedidos realizados por los clientes de la página \
web de tu restaurante. Podrás hacer múltiples filtrado sobre los pedidos, \
de forma que sabrás rápìdamente los pedidos pendientes de elaborar, cobrar o \
pendientes de entregar, bien sea entrega en domicilio del cliente o bien recogida \
en el propio restaurante.`}, `name='description'`);

    this.canonicalService.updateCanonicalUrl();

  
  }

}
