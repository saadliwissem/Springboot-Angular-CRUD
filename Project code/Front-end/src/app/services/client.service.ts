import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
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
 private  httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};
  constructor(private httpC : HttpClient) {
    
   }
   getClients() :Observable<Client[]>{
    const url =`${this.ApiUri+this.ClientsEndPoint}`;
    return this.httpC
    .get<Client[]>(url)
   }
   //delete client function 
   deleteClient(id: number): Observable<any> {
    return this.httpC.delete(`${this.ApiUri+this.deleteClientsEndPoint}/${id}`);
  }
 

  //add client function 
   addClient(client:Client):Observable<Client>{
    const url = `${this.ApiUri+this.ClientsEndPoint}`;
    
    return this.httpC.post<Client>(url, client, this.httpOptions);

  }
  //update client
  updateClient(id:number,client:Client){
    const url = `${this.ApiUri+"/client/"+id}`;
    return this.httpC.put<Client>(url, client, this.httpOptions);

  }
  //get client by id 
  getClient(id:number) :Observable<Client>{
    const url =`${this.ApiUri+"/client/"+id}`;
    return this.httpC
    .get<Client>(url)
   }
}
