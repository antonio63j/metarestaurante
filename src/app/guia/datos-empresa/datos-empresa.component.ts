import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { CanonicalService } from '../../services/canonical.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-datos-empresa',
  templateUrl: './datos-empresa.component.html',
  styleUrls: ['./datos-empresa.component.css']
})

export class DatosEmpresaComponent implements OnInit {

  public video: string = `${environment.carpetaVideos}/datos-empresa-converted.mp4`;
  public urlWebDemo: string = `${environment.urlWebDemo}`; 
  
  constructor(
    private titleService: Title,
    private metaTagService: Meta,
    private canonicalService: CanonicalService
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle(`Actualización de datos de tu restaurante desde la propia web`);
    // this.metaTagService.updateTag({name: 'keywords', content: 'cocina, pedidos,
    // restaurante, tradicional, calidad, buen precio, menú, carta, pedidos, online'});

    this.metaTagService.updateTag({
      name: 'description', content: `Como administrador, tendrás muy fácil la \
actualización de los datos de tu restaurante, como por ejemplo dirección, teléfono, \
horario, etc. Además, te explicamos como hacerlo con un video tutorial`}, `name='description'`);

    this.canonicalService.updateCanonicalUrl();
  }

}
