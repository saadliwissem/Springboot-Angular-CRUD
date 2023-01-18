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
  'Kef',
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
        region1 :String[] =[];
        codePostale :String []=[];
        selectedCity='Tozeur'
        
        regionByState(ville :string ){
            this.region1=[];
          switch (ville) {
              case this.Tunisie[0]:{
                  
                  this.region1.push("DEGUECHE","TOZEUR","HEZOUA","NEFTA","TAMEGHZA");
                  
                  break;
              }
              case this.Tunisie[1]:{
                  
                  this.region1.push("BORJ EL AMRI","JEDAIDA","OUED ELLIL","TEBOURBA","EL BATTAN","MANNOUBA","DOUAR");
                  break;
              }
              case this.Tunisie[2]:{
                  
                  this.region1.push("BEJA NORD","NEFZA","GOUBELLAT","MEJEZ EL BAB","AMDOUN","TEBOURSOUK","TESTOUR","THIBAR","BEJA SUD")
                  break;
              }
              case this.Tunisie[3]:{
                  
                  this.region1.push("EZZAHRA","MOHAMADIA","RADES","EL MOUROUJ","FOUCHANA","HAMMAM","MEGRINE","NOUVELLE MEDINA","MORNAG","BOU MHEL EL BASSTINE","BEN AROUS,BEN AROUS","BEN AROUS,BEN AROUS SUD")
                  break;}
              case this.Tunisie[4]:{
                  
                  this.region1.push("MENZEL BOURGUIBA","UTIQUE","MENZEL JEMIL","BIZERTE NORD","BIZERTE SUD","EL ALIA","SEJNANE","GHAR EL MELH","GHEZALA","JARZOUNA","JOUMINE","MATEUR","RAS JEBEL","TINJA")
                  break;}
              case this.Tunisie[5]:{
                  
                  this.region1.push("FERNANA","GHARDIMAOU","TABARKA","JENDOUBA","AIN DRAHAM","JENDOUBA NORD","OUED MLIZ","BOU SALEM","BALTA BOU AOUENE")
                  break;}
              case this.Tunisie[6]:{
                  
                  this.region1.push("KORBA","SOLIMAN","TAKELSA","MENZEL BOUZELFA","MENZEL TEMIME","NABEUL","BENI KHIAR","BENI KHALLED","HAMMAMET","EL HAOUARIA","KELIBIA","GROMBALIA","EL MIDA","BOU ARGOUB","DAR CHAABANE","HAMMAM EL GHEZAZ")
                  break;}
              case this.Tunisie[7]:{
                  
                  this.region1.push("EL MENZAH","EL HRAIRIA","EL KABBARIA","EL KRAM","BAB SOUIKA",'CARTHAGE',"CITE EL KHADRA","BAB BHAR","LA MARSA","EZZOUHOUR","JEBEL JELLOUD","SIDI EL BECHIR","LA GOULETTE","LE BARDO","EL OMRANE","EL OUERDIA","ETTAHRIR","SIDI HASSINE","ESSIJOUMI","LA MEDINA")
                  break;}
              case this.Tunisie[8]:{
                  
                  this.region1.push("TAJEROUINE","TOUIREF","SAKIET SIDI YOUSSEF","LE SERS","EL KSOUR","LE KEF EST","DAHMANI","KALAAT","JERISSA","KALAA EL KHASBA","LE KEF OUEST")
                  break;}
              case this.Tunisie[9]:{
                  
                  this.region1.push("HAIDRA","SBEITLA","MEJEL BEL ABBES","KASSERINE NORD","EL AYOUN","EZZOUHOUR","FERIANA","FOUSSANA","HASSI EL FRID","JEDILIANE","SBIBA","THALA")
                  break;}
              case this.Tunisie[10]:{
                  
                  this.region1.push("EL METOUIA","GABES MEDINA","GABES OUEST","GABES SUD","EL HAMMA","NOUVELLE MATMATA","MARETH","GHANNOUCHE","MATMATA","MENZEL HABIB")
                  break;}
              case this.Tunisie[11]:{
                  
                  this.region1.push("BELKHIR","EL GUETTAR","EL KSAR","EL MDHILLA","SNED","MOULARES","REDEYEF","SIDI AICH","GAFSA SUD","METLAOUI","GAFSA NORD")
                  break;}
              case this.Tunisie[13]:{
                  
                  this.region1.push("BEN OUN","BIR EL HAFFEY","JILMA","CEBBALA","OULED HAFFOUZ","MEZZOUNA","REGUEB","SIDI BOUZID OUEST","SOUK JEDID","SIDI BOUZID EST","MAKNASSY","MENZEL BOUZAIENE")
                  break;}
              case this.Tunisie[14]:{
                  
                  this.region1.push("EL HENCHA","ESSKHIRA","GHRAIBA","EL AMRA","BIR ALI BEN KHELIFA","AGAREB","SFAX VILLE","SAKIET EDDAIER","MAHRAS","MENZEL CHAKER","SFAX EST","SFAX SUD","JEBENIANA","KERKENAH","SAKIET EZZIT")
                  break;}
              case this.Tunisie[15]:{
                  
                  this.region1.push("SILIANA SUD","SIDI BOU ROUIS","SILIANA NORD","GAAFOUR","KESRA","LE KRIB","BOU ARADA","BARGOU","MAKTHAR","ROHIA","EL AROUSSA")
                  break;}
              case this.Tunisie[16]:{
                  
                  this.region1.push("MELLOULECH","SIDI ALOUENE","MAHDIA","SOUASSI","OULED CHAMAKH","BOU MERDES","CHORBANE","KSOUR ESSAF","HBIRA","LA CHEBBA","EL JEM")
                  break;}
              case this.Tunisie[17]:{
                  
                  this.region1.push("SAYADA LAMTA BOU HAJAR","KSIBET EL MEDIOUNI","KSAR HELAL","JEMMAL","SAHLINE","MONASTIR","MOKNINE","OUERDANINE","TEBOULBA","ZERAMDINE","BEKALTA","BEMBLA","BENI HASSEN")
                  break;}
              case this.Tunisie[18]:{
                  
                  this.region1.push("SBIKHA","KAIROUAN SUD","OUESLATIA","NASRALLAH","KAIROUAN NORD","EL ALA","HAJEB EL AYOUN","CHEBIKA","HAFFOUZ","CHERARDA","BOU HAJLA")
                  break;}
              case this.Tunisie[19]:{
                  
                  this.region1.push("SIDI BOU ALI","SIDI EL HENI","SOUSSE JAOUHARA","SOUSSE RIADH","SOUSSE VILLE","BOU FICHA","AKOUDA","HAMMAM SOUSSE","KALAA ESSGHIRA","KONDAR","MSAKEN","ENFIDHA","HERGLA","KALAA EL KEBIRA","SOUSSE")
                  break;}
              case this.Tunisie[20]:{
                  
                  this.region1.push("ENNADHOUR","EL FAHS","BIR MCHERGA","ZAGHOUAN","HAMMAM ZRIBA","SAOUEF")
                  break;}
              case this.Tunisie[21]:{
                  
                  this.region1.push("HOUMET ESSOUK","MEDENINE SUD","BENI KHEDACHE","SIDI MAKHLOUF","MIDOUN","ZARZIS","MEDENINE NORD","BEN GUERDANE","AJIM")
                  break;}
              case this.Tunisie[21]:{
                  
                  this.region1.push("SOUK EL AHAD","KEBILI SUD","KEBILI NORD","DOUZ","EL FAOUAR")
                  break;}
              case this.Tunisie[22]:{
                  
                  this.region1.push("TATAOUINE SUD","BIR LAHMAR","GHOMRASSEN","TATAOUINE NORD","REMADA","SMAR")
                  break;}
              case this.Tunisie[23]:{
                  
                  this.region1.push("RAOUED","SIDI THABET","ARIANA VILLE","LA SOUKRA","KALAAT LANDLOUS","ETTADHAMEN","MNIHLA")
                  break;}
              
          }
  
      }

    //a function that takes the region value and fill in the zipcodes of it 
        zipcodeByRegion(region:string){
            this.codePostale=[];
            switch (region){
            case "DEGUECHE":{
                this.codePostale.push("2214","2224","2260","2261","2263","2261","2262")
                break
            }
            case "RAOUED":{
                this.codePostale.push("2081","2056","2083","2081","2088","2081")
                break
            }
            case "SIDI THABET":{
                this.codePostale.push("2020","2032","2057")
                break
            }
            case "ARIANA":{
                this.codePostale.push("2027","2037","2058","2080","2091","2058","")
                break
            }
            case "LA SOUKRA":{
                this.codePostale.push("2036","2035","2073")
                break
            }
            case "KALAAT LANDLOUS":{
                this.codePostale.push("2061","2022","2032")
                break
            }
            case "ETTADHAMEN":{
                this.codePostale.push("2041")
                break
            }
            case "MNIHLA":{
                this.codePostale.push("2094")
                break
            }
            case "BEJA NORD":{
                this.codePostale.push("9000")
                break
            }
            case "NEFZA":{
                this.codePostale.push("9010","9011","9012")
                break
            }
            case "GOUBELLAT":{
                this.codePostale.push("9080","9083")
                break
            }
            case "MEJEZ EL BAB":{
                this.codePostale.push("9013","9015","9024","9034","9070","9044","9072","9075")
                break
            }
            case "AMDOUN":{
                this.codePostale.push("9030","9084")
                break
            }
            case "TEBOURSOUK":{
                this.codePostale.push("9040","9032")
                break
            }
            case "TESTOUR":{
                this.codePostale.push("9014","9060","9061","9062")
                break
            }

            }
            
        }

   

      

  
  constructor() {
    
  }
}
