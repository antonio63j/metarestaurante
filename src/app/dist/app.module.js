"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var environment_1 = require("../environments/environment");
var ngx_cookieconsent_1 = require("ngx-cookieconsent");
var common_1 = require("@angular/common");
var http_1 = require("@angular/common/http");
var animations_1 = require("@angular/platform-browser/animations");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var core_2 = require("@ngx-translate/core");
var language_translation_module_1 = require("./modules/language-translation/language-translation.module");
var cookieConfig = {
    cookie: {
        domain: environment_1.env.app + environment_1.environment.domain // it is recommended to set your domain, for cookies to work properly
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
        messagelink: "\n    <span id=\"cookieconsent:desc\" class=\"cc-message\">{{message}}\n      <a aria-label=\"learn more about cookies\" tabindex=\"0\" class=\"cc-link\" href=\"{{cookiePolicyHref}}\" target=\"_blank\">{{cookiePolicyLink}}</a>, \n      <a aria-label=\"learn more about our privacy policy\" tabindex=\"1\" class=\"cc-link\" href=\"{{privacyPolicyHref}}\" target=\"_blank\">{{privacyPolicyLink}}</a> y \n      <a aria-label=\"learn more about our terms of service\" tabindex=\"2\" class=\"cc-link\" href=\"{{tosHref}}\" target=\"_blank\">{{tosLink}}</a>\n    </span>\n    "
    },
    content: {
        message: 'By using our site, you acknowledge that you have read and understand our ',
        cookiePolicyLink: 'Política de cookies',
        cookiePolicyHref: environment_1.environment.urlEndPoint + '/api/politica-cookies',
        privacyPolicyLink: 'Política de privacidad',
        privacyPolicyHref: environment_1.environment.urlEndPoint + '/api/politica-cookies',
        tosLink: 'Términos del servicio',
        tosHref: environment_1.environment.urlEndPoint + '/api/politica-cookies'
    }
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent
            ],
            imports: [
                platform_browser_1.BrowserModule.withServerTransition({ appId: 'serverApp' }),
                animations_1.BrowserAnimationsModule,
                app_routing_module_1.AppRoutingModule,
                common_1.CommonModule,
                core_2.TranslateModule,
                language_translation_module_1.LanguageTranslationModule,
                platform_browser_1.BrowserModule.withServerTransition({ appId: 'serverApp' }),
                http_1.HttpClientModule,
                animations_1.BrowserAnimationsModule,
                ng_bootstrap_1.NgbModule,
                ngx_cookieconsent_1.NgcCookieConsentModule.forRoot(cookieConfig),
                app_routing_module_1.AppRoutingModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
