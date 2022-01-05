import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { CanonicalService } from '../services/canonical.service';

@Component({
  selector: 'app-ventajas',
  templateUrl: './ventajas.component.html',
  styleUrls: ['./ventajas.component.css']
})
export class VentajasComponent implements OnInit {

  constructor(
    private titleService: Title,
    private metaTagService: Meta,
    private canonicalService: CanonicalService
  ) { }

  ngOnInit() {
    this.titleService.setTitle(`Ventajas de tener una página web para tu restaurante de metaRestaurante`);
    // this.metaTagService.updateTag({name: 'keywords', content: 'cocina, pedidos,
    // restaurante, tradicional, calidad, buen precio, menú, carta, pedidos, online'});

    this.metaTagService.updateTag({
      name: 'description', content: `Las ventajas de las paginas metaRestaurante son: \
El diseño de las web para restaurantes de metaRestaurante tienen muy encuenta los motores \ 
de busqueda en internet, para que la página se encuentre en las primeras posiciones de \
las busquedas relacionadas con nuestra porpuesta. Por ello tenemos muy en cuenta \
la tecnología SEO en nuestro diseño.\
Diseño responsive, la web del restaurante se mostrará perfectamente en móvil, tablet y pc. \
En la implementación metaRestaurante se emplean los frameworks, lenguajes y bases de datos \ 
y en general tecnologías mas difundidas actualmente. En la parte front-end podemos destacar \
la utilización de Angular 12, y en lado back-end java, spring y postgreSQL.\
Adaptación a la nueva ley de privacidad de datos llamada Reglamento General de Protección \
de Datos (GDPR), que se aplica a todas las organizaciones que recopilan datos personales de \
ciudadanos de la UE. \
Asesoramiento técnico y opción de mantenimiento integral para garantizar la disponibilidad de \
la aplicación. Los cambios importantes de estructura y diseño, se realizaran bajo presupuesto.
`}, `name='description'`);

    this.canonicalService.updateCanonicalUrl();

  }

}
