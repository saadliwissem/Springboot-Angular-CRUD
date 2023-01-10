import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss'],
})
export class AddClientComponent implements OnInit {
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
  expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  validMail:boolean | undefined =undefined;
  
  verifMail (mail:string ):void{
if(mail !=""){
  if(this.expression.test(mail)){
    this.validMail=true
    console.log(mail)
  }
  else {
    this.validMail=false
    console.log(mail)
  }
}
 else{
      this.validMail=undefined
    }
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  constructor() {
    
  }
}
