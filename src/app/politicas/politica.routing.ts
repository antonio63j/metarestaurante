import { Routes } from '@angular/router';
import { CookiesComponent } from './cookies/cookies.component';
import { PrivacidadComponent } from './privacidad/privacidad.component';
import { TerminosServicioComponent } from './terminos-servicio/terminos-servicio.component';

export const PoliticasRoutes: Routes = [
	{
		path: '',
		children: [
			{
				path: 'cookies',
				component: CookiesComponent
			},
			{
				path: 'privacidad',
				component: PrivacidadComponent
			},
			{
				path: 'terminos-servicio',
				component: TerminosServicioComponent
			}

		]
	}
];