import { Component, OnDestroy, OnInit, Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';
import { NgcCookieConsentService, NgcInitializeEvent, NgcNoCookieLawEvent, NgcStatusChangeEvent } from 'ngx-cookieconsent';
import { TranslateService } from '@ngx-translate/core';
import { isPlatformBrowser } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { ShowErrorService } from './services/show-error.service';
import { Router } from '@angular/router';
import { environment } from '../environments/environment';
import { CanonicalService } from './services/canonical.service';

declare global {
  interface Window { dataLayer: any[]; }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  title = 'Consigue una web responsive para tu restaurante';

  private unsubscribe$ = new Subject();

  // keep refs to subscriptions to be able to unsubscribe later
  private popupOpenSubscription: Subscription | undefined;
  private popupCloseSubscription: Subscription | undefined;
  private initializeSubscription: Subscription | undefined;
  private statusChangeSubscription: Subscription | undefined;
  private revokeChoiceSubscription: Subscription | undefined;
  private noCookieLawSubscription: Subscription = new Subscription;

  constructor(
    private showErrorService: ShowErrorService,
    private ccService: NgcCookieConsentService,
    private translateService: TranslateService,
    @Inject(PLATFORM_ID) private platformId: string,
    private titleService: Title,
    private metaTagService: Meta,
    private router: Router,
    private canonicalService: CanonicalService
  ) {

  }

  ngOnInit(): void {
    this.setTittleAndMetaTags();
    if (isPlatformBrowser(this.platformId)) {
      this.prepararCookieService();
    }
  }

  setTittleAndMetaTags(): void {
    this.titleService.setTitle(`metaRestaurante diseño web para restaurantes`);

    this.metaTagService.addTags([
      { name: 'keywords', content: 'web, restaurante, pedido, online, domicilio, recoger, cocina, carta, menu' },
      { name: 'author', content: 'metaRestaurante' },
      // { name: 'date', content: '2019-10-31', scheme: 'YYYY-MM-DD' }
      {
        name: 'description', content: `Con metaRestauramte tendrás disponible \
fácilmente un sitio web o pagina web para tu restaurante, \
Tú tendrás un sencillo mantenimiento de la web, podrás actualizar tu carta y menús \ 
desde la propia aplicación. \
También los clientes podrán crear sus pedidos rápidamente con un diseño claro, estético y \
amigable, lo que hará que el cliente vuelva a navegar por tu web. \
Los pedidos online que elabora el cliente se podrán entregar a domicilio o \
recogida en restaurante`}]);

    this.canonicalService.updateCanonicalUrl();
  }

  prepararCookieService(): void {

    // Support for translated cookies messages

    // this.translateService.addLangs(['en', 'es']);
    // this.translateService.setDefaultLang('en');

    // const browserLang = this.translateService.getBrowserLang();
    // this.translateService.use(browserLang.match(/en|es/) ? browserLang : 'en');

    this.translateService
      .get(['cookie.header', 'cookie.message', 'cookie.dismiss', 'cookie.allow', 'cookie.deny', 'cookie.link', 'cookie.policy'])
      .subscribe(data => {

        this.ccService.getConfig().content = this.ccService.getConfig().content || {};

        // Override default messages with the translated ones
        this.ccService.getConfig().content!.header = data['cookie.header'];
        this.ccService.getConfig().content!.message = data['cookie.message'];
        this.ccService.getConfig().content!.dismiss = data['cookie.dismiss'];
        this.ccService.getConfig().content!.allow = data['cookie.allow'];
        this.ccService.getConfig().content!.deny = data['cookie.deny'];
        this.ccService.getConfig().content!.link = data['cookie.link'];
        this.ccService.getConfig().content!.policy = data['cookie.policy'];

        this.ccService.destroy(); // remove previous cookie bar (with default messages)
        this.ccService.init(this.ccService.getConfig()); // update config with translated messages

        if (this.ccService.hasConsented()) {
          this.cookiesOn()
        } else {
          this.cookiesOff()
        }

      });

    // subscribe to cookieconsent observables to react to main events
    this.popupOpenSubscription = this.ccService.popupOpen$.subscribe(
      () => {
        // you can use this.ccService.getConfig() to do stuff...

        // console.log('popupOpenSubscription');
        // console.log(this.ccService.getConfig());
      });

    this.popupCloseSubscription = this.ccService.popupClose$.subscribe(
      () => {
        // you can use this.ccService.getConfig() to do stuff...

        // console.log('popupCloseSubscription');

      });

    this.initializeSubscription = this.ccService.initialize$.subscribe(
      (event: NgcInitializeEvent) => {
        // you can use this.ccService.getConfig() to do stuff...

        // console.log('initializeSubscription');

      });

    this.statusChangeSubscription = this.ccService.statusChange$.subscribe(
      (event: NgcStatusChangeEvent) => {

        // if (event.status === 'deny') {
        //   // this.cookiesDetalle(this.cookieParams);
        //   console.log('hasConsented:');
        //   console.log(this.ccService.hasConsented());

        //   if (isPlatformBrowser(this.platformId)) {
        //     window.dataLayer.push({ event: 'cookieNoOK' });
        //     this.deleteCookies();
        //   }
        //   // this.ccService.close(false);
        // } else {
        //   if (event.status === 'allow') {
        //     // window['dataLayer'].push({cookiesSet: true});
        //     if (isPlatformBrowser(this.platformId)) {
        //       window.dataLayer.push({ event: 'cookieOK' });
        //     }
        //   }
        // }



        if (isPlatformBrowser(this.platformId)) {
          console.log(`ccService.hasConsented()=${this.ccService.hasConsented()}`);
          console.log(`event.status=${event.status}`);

          switch (event.status) {
            case 'allow': {
              this.cookiesOn();
              break;
            }
            case 'deny': {
              this.cookiesOff();
              break;
            }

            default: {
              console.log('event.status <> allow y de deny');
              break;
            }
          }
        }

      });

    this.revokeChoiceSubscription = this.ccService.revokeChoice$.subscribe(
      () => {
        // you can use this.ccService.getConfig() to do stuff...

        // console.log('revokeChoiceSubscription');

      });

    this.noCookieLawSubscription = this.ccService.noCookieLaw$.subscribe(
      (event: NgcNoCookieLawEvent) => {
        // you can use this.ccService.getConfig() to do stuff...

        // console.log('noCookieLawSubscription');

      });

  }

  cookiesOn(): void {
    if (isPlatformBrowser(this.platformId)) {
      console.log('push=cookieOK');
      window.dataLayer.push({ event: 'cookieOK' });
    }
  }

  cookiesOff(): void {
    if (isPlatformBrowser(this.platformId)) {
      console.log('push=cookieNoOK');
      window.dataLayer.push({ event: 'cookieNoOK' });
      this.deleteCookies();
    }
  }

  deleteCookies(): void {
    document.cookie = `_ga=; Path=/; Domain=${environment.domain}; Expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
    document.cookie = `_ga_${environment.googleAnalyticsId}=; Path=/; Domain=${environment.domain}; Expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
  }
  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.popupOpenSubscription!.unsubscribe();
      this.popupCloseSubscription!.unsubscribe();
      this.initializeSubscription!.unsubscribe();
      this.statusChangeSubscription!.unsubscribe();
      this.revokeChoiceSubscription!.unsubscribe();
      this.noCookieLawSubscription!.unsubscribe();
    }
  }
}
