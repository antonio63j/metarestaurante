import { Component, AfterViewInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { CanonicalService } from '../services/canonical.service';
//declare var require: any;

@Component({
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
  constructor(
    private titleService: Title,
    private metaTagService: Meta,
    private canonicalService: CanonicalService
  ) {
    this.datosTitleMetaTagsAndCanonical();

  }

  private datosTitleMetaTagsAndCanonical(): void {
    this.titleService.setTitle(' ');
    // this.metaTagService.updateTag({name: 'keywords', content: `platos de nuestra carta: ${tPlatos}`});
    this.metaTagService.updateTag({name: 'description', content: `Con metaRestauramte tendrás disponible \
fácilmente un sitio web o pagina web para tu restaurante, \
Tú tendrás un sencillo mantenimiento de la web, podrás actualizar tu carta y menús \ 
desde la propia aplicación. \
También los clientes podrán crear sus pedidos rápidamente con un diseño claro, estético y \
amigable, lo que hará que el cliente vuelva a navegar por tu web. \
Los pedidos online que elabora el cliente se podrán entregar a domicilio o \
recogida en restaurante`}, `name='description'`);
    this.canonicalService.updateCanonicalUrl();
  }

}
