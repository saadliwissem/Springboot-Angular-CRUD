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
 /* AddClient(client:Client):Observable<Client>{
      return this.
  }*/

  //add client function 
   addClient(client:Client):Observable<Client>{
    const url = `${this.ApiUri+this.ClientsEndPoint}`;
    /*const params = new HttpParams({
      fromObject: {
        nom :client.nom,
        adresse:client.adresse,
        email:client.email,
        tel:client.tel,
        ville: client.ville,
        region: client.region,
        codePostale: client.codePostale,
        
      }
    });*/
    return this.httpC.post<Client>(url, client, this.httpOptions);

  }
  //update client function 
  /*updateClient(id:number):Observable<Client>{
    const url : String=`${this.ApiUri+this.deleteClientsEndPoint}`
    const params= new HttpParams({
      fromObject:{
        nom :client.nom,
        adresse:client.adresse,
        email:client.email,
        tel:client.tel,
        ville: client.ville,
        region: client.region,
        codePostale: client.codePostale,
        
      }
    })
  }*/
  //get client by id function

  
  
}
