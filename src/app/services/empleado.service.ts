import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

// const httOption = {
//   headers: new HttpHeaders({
//     "Content-Type": "application/json; charset=utf-8",
//   })
// }


@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  constructor(private http: HttpClient) { }

  private urlApi: string = environment.urlApi

  getListEmpleado(): Observable<any[]> {
    return this.http.get<any[]>(`${this.urlApi}empleado`);
  }

  addEmpleado(data: any) {
    return this.http.post(`${this.urlApi}insertEmpleado`, data);
  }
  // Delete Empleado
  deleteEmpleado(id: number) {

    return this.http.delete(`${this.urlApi}eliminar/${id}`)
  }
}
