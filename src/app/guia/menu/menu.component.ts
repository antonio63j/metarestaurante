import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { CanonicalService } from '../../services/canonical.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  
  public video: string = `${environment.carpetaVideos}/menu-converted.mp4`;
  public urlWebDemo: string = `${environment.urlWebDemo}`; 

  constructor(
    private titleService: Title,
    private metaTagService: Meta,
    private canonicalService: CanonicalService
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle(`Actualización de las imágenes de portada de la página web de tu restaurante`);

    this.metaTagService.updateTag({
      name: 'description', content: `Como administrador, tendrás muy fácil la \
confección de los menús de tu restaurante. Podrás configurar diferentes menús y con cada uno de \
ellos el cliente podrá elegir entre varios primeros, varios \
segundos y varios postres. El cliente podrá llenar el carrito con diferentes menús y/o sugerencias de la \
carta.`}, `name='description'`);

    this.canonicalService.updateCanonicalUrl();

  
  }

}
