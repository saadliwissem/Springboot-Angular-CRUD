import { Component } from '@angular/core';
import {liste} from "../../../../../poste"
@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss'],
})
export class AddClientComponent  {
    llist= liste
  //an array of tunisia states 
  Tunisie: String[] = [
  'TOZEUR',
  'MANOUBA',
  'BEJA',
  'BEN AROUS',
  'BIZERTE',
  'JENDOUBA',
  'NABEUL',
  'TUNIS',
  'KEF',
  'KASSERINE',
  'GABES',
  'GAFSA',
  'SIDI BOUZID',
  'SFAX',
  'SILIANA',
  'MAHDIA',
  'MONASTIR',
  'KAIROUAN',
  'SOUSSE',
  'ZAGHOUAN',
  'MEDENINE',
  'KEBILI',
  'TATAOUINE',
  'ARIANA',];



  ex="example@gmail.com";
  //expression to verify the mail format 
  expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  // status of the mail valid or not or nothing 
  validMail:boolean | undefined ;
  //a function to set the email status 
  /*it takes the mail from the form as a parameter*/
  verifMail (mail:string ):void{
    //verify if it's not empty 
    if(mail !=""){
      //verify if it has the expression email format 
      if(this.expression.test(mail)){
        //set it status to true 
        this.validMail=true
        console.log(mail)
      }
      else {
        //if not set the status to false 
        this.validMail=false
        console.log(mail)
      }
    }
        //if mail is empty 
    else{
          this.validMail=undefined
        }
      }
//a function that verifies the adress input type 
      AdressValidity: boolean | undefined 
      validAdresse(address:string) {
        //he regular expressionis used to match the address. It allows for alphanumeric characters, spaces, commas, apostrophes, and dashes
        let addressRegex = /^[0-9a-zA-Z\s,'-]*$/;
        this.AdressValidity = addressRegex.test(address);
        
      }

//a function that verifies validity of the name input
    nameValidity :boolean | undefined 
    isValidName(name: string) {
        let nameRegex = /^[a-zA-Z\s]*$/;
        this.nameValidity= nameRegex.test(name);
    } 
//a function that takes the city value and fill the region select with regions from the entred city       
        ville :String ="";
        region1 :unknown[]=["DEGUECHE","TOZEUR","HEZOUA","NEFTA","TAMEGHZA"];
        codePostale :unknown[]=["2214","2224","2260","2261","2263","2261","2262"];
        selectedCity='Tozeur'

        regionByState(state:string){
            this.region1=[]
            this.codePostale=[]
            let region = new Set()
            for (const element of this.llist) {
                let city = element.split(",")[0];
                if (city == state) {
                  let rregion = element.split(",")[1];
                  region.add(rregion);
                }
              }
              this.region1=Array.from(region);
        }
//a function that takes the region value and fill in the zipcodes of it 
     zipcodeByRegion(region:string){
            this.codePostale=[]
            let codePostale = new Set();
            for (const element of this.llist) {
              let region1 = element.split(",")[1];
              if (region1 == region) {
                let zipcode = element.split(",")[3];
                codePostale.add(zipcode);
              }
            }
            this.codePostale= Array.from(codePostale);
          }

  constructor() {
    
  }
}
