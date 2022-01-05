// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const env = {
  protocol: 'http',
  domain: 'localhost',
  app: ''
};


export const environment = {
  production: false,

  urlWebDemo: 'https://restaurante.fernandezlucena.es:8084',
  carpetaVideos: 'assets/videos/guias',

  // Solo para el envio de mensajes hacia nosotros
  serverSsrPort: 9999,
  domain: `${env.domain}`,
  domainUrl: `${env.protocol}://${env.app}${env.domain}`,
  urlEndPoint: `${env.protocol}://${env.app}${env.domain}:8084`,
  googleAnalyticsId: 'G-C0JMPBWNPM'

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
