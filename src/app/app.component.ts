import { Component, OnInit} from '@angular/core';
import { UsuarioService } from './services/usuario.service';
import { Router } from '@angular/router';
import { MenuItem } from './models/menu-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Ventas';
  public logueado = true;
  public menuItems: Array<MenuItem>;
  constructor(private router: Router, private usuarioService: UsuarioService ) {
  }

  ngOnInit() {
      this.logueado = this.usuarioService.getUsuarioLogueado();
      this.cargarMenu();
      console.log(this.menuItems);
  }

  getLogueado() {
    this.logueado = this.usuarioService.getUsuarioLogueado();
    return this.logueado;
  }

 cargarMenu () {
  this.menuItems = [
    new MenuItem ('Dashboard', 'dashboard', '#', ['Ventas del Dia', 'Ventas del Mes']),
    new MenuItem ('Empresas', 'business', '#', ['Usuarios']),
    new MenuItem ('Almacenes', 'shopping_cart', '#', ['Almacenes', 'Movimientos de Inventario']),
    new MenuItem ('Camiones', 'local_shipping', '#', ['Camiones', 'Cargas/Descargas']),
    new MenuItem ('Rutas', 'directions', '#', ['Rutas', 'Clientes', 'Planificacion de Visitas', 'Vendedores', 'Cuotas', 'Numeradores']),
    new MenuItem ('Ventas', 'shopping_basket', '#', ['Jornadas', 'Pedidos y Facturas', 'Cobranzas',
                                                      'Chequeo de Stock', 'Documentos por Cobrar']),
    new MenuItem ('Configuraciones', 'build', '#', ['Ubicaciones', 'Formas de Pago', 'Impuestos', 'Bancos',
                                                    'Canales', 'Tipos de Negocio', 'Categorias', 'Proveedores', 'Literales']),
    new MenuItem ('Reportes', 'chrome_reader_mode', '#', []),
    new MenuItem ('Ayuda', 'live_help', '#', []),
    new MenuItem ('App Movil', 'android', '#', [])
  ];
 }

}
