
export const env = {
    protocol: 'https',
    domain: 'fernandezlucena.es',
    app: 'metarestaurante.',
    urlWebDemo: 'https://restaurante.fernandezlucena.es'
};

export const environment = {
    production: true,

    urlWebDemo: `${env.urlWebDemo}`,
    urlWebDemoServices: `${env.urlWebDemo}:8084`,
    carpetaVideos: 'assets/videos/guias',

    serverSsrPort: 8075,
    domain: `${env.domain}`,
    domainUrl: `${env.protocol}://${env.app}${env.domain}`,

    googleAnalyticsId: 'C0JMPBWNPM'

    // domain: 'restaurante.fernandezlucena.es',
    // urlEndPoint: 'https://restaurante-back.fernandezlucena.es:8084'

};
