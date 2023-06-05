import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const httOption = {
  headers: new HttpHeaders({
    "Content-Type": "application/json; charset=utf-8",
  })
}

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  constructor(private http: HttpClient) { }

  private urlApi: string = environment.urlApi

  getList(): Observable<any[]> {
    return this.http.get<any[]>(`${this.urlApi}menu`);
  }
  getListId(): Observable<any[]> {
    return this.http.get<any[]>(`${this.urlApi}submenu`);
  }

}
