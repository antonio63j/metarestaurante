import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { CanonicalService } from '../../services/canonical.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  public video: string = `${environment.carpetaVideos}/clasificacion-converted.mp4`;
  public urlWebDemo: string = `${environment.urlWebDemo}`; 
  
  constructor(
    private titleService: Title,
    private metaTagService: Meta,
    private canonicalService: CanonicalService
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle(`Clasificación de los producto de la página web del restaurante`);

    this.metaTagService.updateTag({
      name: 'description', content: `Como administrador, tendrás muy fácil la \
la clasificación de productos o sugerencias de tu carta. De esta manera conseguimos \
que el cliente pueda crear sus pedidos online de forma sencilla y rápida.`}, `name='description'`);

    this.canonicalService.updateCanonicalUrl();

  
  }

}
