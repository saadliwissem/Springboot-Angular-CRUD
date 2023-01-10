import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../Models/client.model';
@Injectable({
  providedIn: 'root'
})
export class ClientService {

  //url:
 readonly ApiUri="http://localhost:8080"
 readonly ClientsEndPoint="/clients"
 readonly deleteClientsEndPoint="/client"
 /*private  httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/x-www-form-urlencoded',
  })
};*/
  constructor(private httpC : HttpClient) {
    
   }
   getClients() :Observable<Client[]>{
    const url =`${this.ApiUri+this.ClientsEndPoint}`;
    return this.httpC
    .get<Client[]>(url)
   }
   deleteClient(id: number): Observable<any> {
    return this.httpC.delete(`${this.ApiUri+this.deleteClientsEndPoint}/${id}`);
  }
}
