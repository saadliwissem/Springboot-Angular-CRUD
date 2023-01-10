import { Component } from '@angular/core';

@Component({
  selector: 'app-code-postal',
  templateUrl: './code-postal.component.html',
  styleUrls: ['./code-postal.component.scss']
})
export class CodePostalComponent {

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

}
