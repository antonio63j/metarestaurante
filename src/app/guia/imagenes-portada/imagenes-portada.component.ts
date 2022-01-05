import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Meta, Title } from '@angular/platform-browser';
import { CanonicalService } from '../../services/canonical.service';

@Component({
  selector: 'app-imagenes-portada',
  templateUrl: './imagenes-portada.component.html',
  styleUrls: ['./imagenes-portada.component.css']
})
export class ImagenesPortadaComponent implements OnInit {

  public video: string = `${environment.carpetaVideos}/imagenes-portada-converted.mp4`;
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
actualización de las imágenes que se muestran en la página web de tus restaurante \
sólo las tendrás que seleccionar las imágenes desde tu pc y estarán visibles al instante`}, `name='description'`);

    this.canonicalService.updateCanonicalUrl();

  
  }

}
