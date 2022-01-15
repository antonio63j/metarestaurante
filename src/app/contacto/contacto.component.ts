import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';

import { isPlatformBrowser, Location } from '@angular/common';

import Swal from 'sweetalert2';

// import { ShowErrorService } from 'src/app/shared/services/show-error.service';
// import { AuthService } from 'src/app/usuarios/auth.service';

import { EmailContactoCliente } from '../modelos/email-contacto-cliente';
import { ContactoService } from './contacto.service';
import { Meta, Title } from '@angular/platform-browser';
import { CanonicalService } from '../services/canonical.service';
import { ShowErrorService } from '../services/show-error.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  public erroresValidacion: string[] = [];

  emailContactoCliente: EmailContactoCliente = new EmailContactoCliente();

  private unsubscribe$ = new Subject();

  constructor(
    private contactoService: ContactoService,
    private location: Location,
    private showErrorService: ShowErrorService,
    @Inject(PLATFORM_ID) private platformId: string,
    private titleService: Title,
    private metaTagService: Meta,
    private canonicalService: CanonicalService


  ) {

  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo(0, 0);
    }

    this.updateTitleAndMetaTags();
  }

  updateTitleAndMetaTags(): void {

    this.titleService.setTitle(`Envíanos tu consulta o sugerencia a metaRestaurante`);
    // tslint:disable-next-line: max-line-length
    // this.metaTagService.updateTag({name: 'keywords', content: 'menu, platos, postres, primero, sugundo, arroces, pescados, pedidos, online, cocina, tradicional, calidad, buen precio'}, "name='keywords'");
    this.metaTagService.updateTag({
      name: 'description', content: `Solicita información \
sobre cómo puedes conseguir sitio web o pagina web para tu restaurante, \
resolveremos tus consultas lo antes posible. Ten en cuenta que nuestras web para \
restaurantes tienen la posibilidad de que el cliente diseñe su pedido online \
con entraga a domicilio o recogida en restaurante`}, `name='description'`);

    this.canonicalService.updateCanonicalUrl();

  }

  enviar(emailContactoCliente: EmailContactoCliente): void {
    this.erroresValidacion = [];
    this.contactoService.emailCliente(emailContactoCliente).pipe(
      takeUntil(this.unsubscribe$)
    )
      .subscribe(
        json => {
          Swal.fire('Resultado: ', `${json.mensaje}`, 'success');
        }
        , err => {
          if (err.status === 400) {
            this.erroresValidacion = err.error.errors as string[];
            console.log(this.erroresValidacion);
          } else {
            this.showErrorService.httpErrorResponse(err, 'Envio de mensaje', err.error.mensaje, 'error');
          }
        }
      );
  }

  salir(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.location.back();
    }
  }

}
