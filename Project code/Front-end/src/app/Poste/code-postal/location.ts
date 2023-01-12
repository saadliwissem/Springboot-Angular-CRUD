export class location {
     ville :String ="";
     region1 :String[] =[];
     
     codePostale :String []=[];
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
        'Ariana',
    ];

    yourlocation(ville :string ){
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
}