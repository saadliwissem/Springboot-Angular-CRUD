import { Component } from '@angular/core';
@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss'],
})
export class AddClientComponent  {
  //an array of tunisia cities 
  Tunisie: String[] = [
  'Tozeur',
  'Manubah',
  'Béja',
  'Ben Arous (Tunis Sud)',
  'Bizerte',
  'Jendouba',
  'Nabeul',
  'tunis',
  'Le Kef',
  'Kassérine',
  'Gabès',
  'Gafsa',
  'Sidi Bou Zid',
  'Sfax',
  'Siliana',
  'Mahdia',
  'Monastir',
  'Kairouan',
  'Sousse',
  'Zaghouan',
  'Médenine',
  'Kebili',
  'Tataouine',
  'Ariana',];



  ex="example@gmail.com";
  //expression to verify the mail format 
  expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  // status of the mail valid or not or nothing 
  validMail:boolean | undefined =undefined;
  //a function to set the email status 
  verifMail (/*it takes the mail from the form as a parameter*/mail:string ):void{
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
      //a function that takes the city value and fill the region select with regions from the entred city       
        ville :String ="";
        region1 :String[] =[];
        
        codePostale :String []=[];

        yourlocation(ville :string ){
          console.log("active")
          switch (ville) {
              case 'Tozeur':{
                  this.region1=[];
                  this.region1.push("DEGUECHE","TOZEUR","HEZOUA","NEFTA","TAMEGHZA");
                  break;
              }
              case this.Tunisie[1]:{
                  this.region1=[];
                  this.region1.push("BORJ EL AMRI","JEDAIDA","OUED ELLIL","TEBOURBA","EL BATTAN","MANNOUBA","DOUAR");
                  break;
              }
              case this.Tunisie[2]:{
                  this.region1=[];
                  this.region1.push("BEJA NORD","NEFZA","GOUBELLAT","MEJEZ EL BAB","AMDOUN","TEBOURSOUK","TESTOUR","THIBAR","BEJA SUD")
                  break;
              }
              case this.Tunisie[3]:{
                  this.region1=[];
                  this.region1.push("EZZAHRA","MOHAMADIA","RADES","EL MOUROUJ","FOUCHANA","HAMMAM","MEGRINE","NOUVELLE MEDINA","MORNAG","BOU MHEL EL BASSTINE","BEN AROUS,BEN AROUS","BEN AROUS,BEN AROUS SUD")
                  break;}
              case this.Tunisie[4]:{
                  this.region1=[];
                  this.region1.push("MENZEL BOURGUIBA","UTIQUE","MENZEL JEMIL","BIZERTE NORD","BIZERTE SUD","EL ALIA","SEJNANE","GHAR EL MELH","GHEZALA","JARZOUNA","JOUMINE","MATEUR","RAS JEBEL","TINJA")
                  break;}
              case this.Tunisie[5]:{
                  this.region1=[];
                  this.region1.push("FERNANA","GHARDIMAOU","TABARKA","JENDOUBA","AIN DRAHAM","")
                  break;}
              case this.Tunisie[6]:{
                  this.region1=[];
                  this.region1.push("DEGUECHE","TOZEUR","HEZOUA","NEFTA","TAMEGHZA")
                  break;}
              case this.Tunisie[7]:{
                  this.region1=[];
                  this.region1.push("DEGUECHE","TOZEUR","HEZOUA","NEFTA","TAMEGHZA")
                  break;}
              case this.Tunisie[8]:{
                  this.region1=[];
                  this.region1.push("DEGUECHE","TOZEUR","HEZOUA","NEFTA","TAMEGHZA")
                  break;}
              case this.Tunisie[9]:{
                  this.region1=[];
                  this.region1.push("DEGUECHE","TOZEUR","HEZOUA","NEFTA","TAMEGHZA")
                  break;}
              case this.Tunisie[10]:{
                  this.region1=[];
                  this.region1.push("DEGUECHE","TOZEUR","HEZOUA","NEFTA","TAMEGHZA")
                  break;}
              case this.Tunisie[11]:{
                  this.region1=[];
                  this.region1.push("DEGUECHE","TOZEUR","HEZOUA","NEFTA","TAMEGHZA")
                  break;}
              case this.Tunisie[13]:{
                  this.region1=[];
                  this.region1.push("DEGUECHE","TOZEUR","HEZOUA","NEFTA","TAMEGHZA")
                  break;}
              case this.Tunisie[14]:{
                  this.region1=[];
                  this.region1.push("DEGUECHE","TOZEUR","HEZOUA","NEFTA","TAMEGHZA")
                  break;}
              case this.Tunisie[15]:{
                  this.region1=[];
                  this.region1.push("DEGUECHE","TOZEUR","HEZOUA","NEFTA","TAMEGHZA")
                  break;}
              case this.Tunisie[16]:{
                  this.region1=[];
                  this.region1.push("DEGUECHE","TOZEUR","HEZOUA","NEFTA","TAMEGHZA")
                  break;}
              case this.Tunisie[17]:{
                  this.region1=[];
                  this.region1.push("DEGUECHE","TOZEUR","HEZOUA","NEFTA","TAMEGHZA")
                  break;}
              case this.Tunisie[18]:{
                  this.region1=[];
                  this.region1.push("DEGUECHE","TOZEUR","HEZOUA","NEFTA","TAMEGHZA")
                  break;}
              case this.Tunisie[19]:{
                  this.region1=[];
                  this.region1.push("DEGUECHE","TOZEUR","HEZOUA","NEFTA","TAMEGHZA")
                  break;}
              case this.Tunisie[20]:{
                  this.region1=[];
                  this.region1.push("DEGUECHE","TOZEUR","HEZOUA","NEFTA","TAMEGHZA")
                  break;}
              case this.Tunisie[21]:{
                  this.region1=[];
                  this.region1.push("DEGUECHE","TOZEUR","HEZOUA","NEFTA","TAMEGHZA")
                  break;}
              case this.Tunisie[21]:{
                  this.region1=[];
                  this.region1.push("DEGUECHE","TOZEUR","HEZOUA","NEFTA","TAMEGHZA")
                  break;}
              case this.Tunisie[22]:{
                  this.region1=[];
                  this.region1.push("DEGUECHE","TOZEUR","HEZOUA","NEFTA","TAMEGHZA")
                  break;}
              case this.Tunisie[23]:{
                  this.region1=[];
                  this.region1.push("DEGUECHE","TOZEUR","HEZOUA","NEFTA","TAMEGHZA")
                  break;}
              
          }
  
      }

  
  constructor() {
    
  }
}
