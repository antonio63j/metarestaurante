import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { env, environment } from '../environments/environment';
import { NgcCookieConsentConfig, NgcCookieConsentModule } from 'ngx-cookieconsent';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageTranslationModule } from './modules/language-translation/language-translation.module';

const cookieConfig: NgcCookieConsentConfig = {
  cookie: {
    domain: env.app + environment.domain // it is recommended to set your domain, for cookies to work properly
  },
  palette: {
    popup: {
      background: '#D67124'
    },
    button: {
      background: '#D67124'
    }
  },
  theme: 'classic',
  position: 'bottom-right',
  type: 'opt-out',
  layout: 'basic',
  layouts: {
    'my-custom-layout': '{{messagelink}}{{compliance}}'
  },
  elements: {
    messagelink: `
    <span id="cookieconsent:desc" class="cc-message">{{message}}
      <a aria-label="learn more about cookies" tabindex="0" class="cc-link" href="{{cookiePolicyHref}}" target="_blank">{{cookiePolicyLink}}</a>, 
      <a aria-label="learn more about our privacy policy" tabindex="1" class="cc-link" href="{{privacyPolicyHref}}" target="_blank">{{privacyPolicyLink}}</a> y 
      <a aria-label="learn more about our terms of service" tabindex="2" class="cc-link" href="{{tosHref}}" target="_blank">{{tosLink}}</a>
    </span>
    `,
  },
  content: {
    message: 'By using our site, you acknowledge that you have read and understand our ',

    cookiePolicyLink: 'Política de cookies',
    cookiePolicyHref: '/politica/cookies',

    privacyPolicyLink: 'Política de privacidad',
    privacyPolicyHref: 'politica/privacidad',

    tosLink: 'Términos del servicio',
    tosHref: '/politica/terminos-servicio',
  }
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,

    AppRoutingModule,
    CommonModule,
    TranslateModule,
    LanguageTranslationModule,

    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule,
    NgcCookieConsentModule.forRoot(cookieConfig),

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
