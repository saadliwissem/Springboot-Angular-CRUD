import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/Models/client.model';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-clinets',
  templateUrl: './clinets.component.html',
  styleUrls: ['./clinets.component.scss']
})
export class ClinetsComponent implements OnInit{
  title = 'Manager';
  clients: Client[] = [];
  codePostaleTunisie:object[]=[
    {
      ARIANA:
      {
        RAOUED:{
          "BOU HNECH":"2081",
          "CITE CHAKER":"2081",
          "CITE DE LA MOSQUE":"2081"
        }
      }
  }
  ]
  constructor(private ServiceC : ClientService){
  }
  ngOnInit() {
    this.reviewClients()
  }
  //get clients function
  reviewClients(){
    
    this.ServiceC.getClients().subscribe({
      next: (data)=>{
        this.clients=data;
        //console.log(data);
      },
      error:(e)=>console.log(e)
    });
  }
  //delete client function 
  deleteClient(id:number, name: string): void {
    let reponse = confirm('are you sure you want to delete '+ name );
    if (reponse) {
    this.ServiceC.deleteClient(id)
      .subscribe({
        next: (res) => {
          console.log(res);
          window.location.reload();
        },
        error: (e) => console.error(e)
      });
  }
  }

   //editing existing client
   editClient(id:number){
    
   }
}
