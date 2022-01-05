import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { CanonicalService } from '../../services/canonical.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css']
})
export class CartaComponent implements OnInit {

  public video: string = `${environment.carpetaVideos}/carta-converted.mp4`;
  public urlWebDemo: string = `${environment.urlWebDemo}`; 
  
  constructor(
    private titleService: Title,
    private metaTagService: Meta,
    private canonicalService: CanonicalService
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle(`Confección de los articulos o sugerencias de la carta del restaurante`);

    this.metaTagService.updateTag({
      name: 'description', content: `Como administrador, tendrás muy fácil la \
actualización de los productos que componen la carta de tu restaurante, \
agruparemos los productos o sugerencias de la carta con la finalidad de que el \
usuario pueda confeccionar su pedidon online rápidamente.`}, `name='description'`);

    this.canonicalService.updateCanonicalUrl();

  
  }

}
