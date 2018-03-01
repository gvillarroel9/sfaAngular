import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import { Usuario } from '../models/usuario';
import { GLOBAL } from './global';
import { Promise } from 'q';

@Injectable ()
export class UsuarioService {
  headers: Headers;
  options: RequestOptions;
  private usuarioLogueado;
  private nombreUsuario;
  public url: string;
  public cantRegPagina: number;
  public pagActual: number;

  constructor(private _http: Http) {
    this.usuarioLogueado = false;
    this.nombreUsuario = '';
    this.url = GLOBAL.url;
    this.cantRegPagina = GLOBAL.cantRegPagina;
    this.headers = new Headers({ 'Content-Type': 'application/json' });
    this.options = new RequestOptions({ headers: this.headers });
  }
  getUsuarios() {
    return this._http.get(this.url + 'usuarios')
                    .map((res: Response) => {
                            return (res.json());
                        })
                    .catch(this.manejarError);
  }
  getUsuariosPagina(pagina: number) {
    return this._http.get(this.url + 'usuarios?_start=' + (pagina * this.cantRegPagina) + '&_limit=' + this.cantRegPagina)
                    .map((res: Response) => {
                            return (res.json());
                        })
                    .catch(this.manejarError);
  }
  getUsuario(id) {
    return this._http.get(this.url + 'usuarios/' + id)
                     .map(res => res.json());
  }
  addUsuario(usuario: Usuario) {
    const json = JSON.stringify(usuario);
    const headers = new Headers({'Content-Type': 'application/json'});

    return this._http.post(this.url + 'usuarios', json, {headers: headers})
                    .map(res => res.json());
   }
   editUsuario(id, usuario: Usuario) {
    const json = JSON.stringify(usuario);
    const headers = new Headers({'Content-Type': 'application/json'});

    return this._http.put(this.url + 'usuarios/' + id, json, {headers: headers})
                    .map(res => res.json());
   }
   deleteUsuario(id) {
     return this._http.delete(this.url + 'usuarios/' + id)
                      .map(res => res.json());
   }
  setUsuarioLogueado() {
    this.usuarioLogueado = true;
  }
  getUsuarioLogueado() {
    return this.usuarioLogueado;
  }
  getNombreUsuario() {
    return this.nombreUsuario;
  }
  setNombreUsuario(nombreUsuario: string) {
    this.nombreUsuario = nombreUsuario;
  }
  private manejarError(error: HttpErrorResponse) {
    console.error('Error en servidor:', error);
    if (error.error instanceof Error) {
        const errMessage = error.error.message;
        return Observable.throw(errMessage);
    }
    return Observable.throw(error || 'Node.js servidor error');
  }

}
