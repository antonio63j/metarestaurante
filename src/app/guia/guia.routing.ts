import { Routes } from '@angular/router';
import { CartaComponent } from './carta/carta.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { DatosEmpresaComponent } from './datos-empresa/datos-empresa.component';
import { ImagenesPortadaComponent } from './imagenes-portada/imagenes-portada.component';
import { MenuComponent } from './menu/menu.component';
import { PedidosComponent } from './pedidos/pedidos.component';


export const GuiaRoutes: Routes = [
	{
		path: '',
		children: [
			{
				path: 'datos-empresa',
				component: DatosEmpresaComponent
			},
			{
				path: 'categorias',
				component: CategoriasComponent
			},
			{
				path: 'imagenes-portada',
				component: ImagenesPortadaComponent
			},
			{
				path: 'carta',
				component: CartaComponent
			},
			{
				path: 'menu',
				component: MenuComponent
			},
			{
				path: 'pedidos',
				component: PedidosComponent
			},

		]
	}
];
