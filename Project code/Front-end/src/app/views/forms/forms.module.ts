import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  DropdownModule,
  FormModule,
  GridModule,
  ListGroupModule,
  SharedModule
} from '@coreui/angular';

import { DocsComponentsModule } from '@docs-components/docs-components.module';

import { FormsRoutingModule } from './forms-routing.module';

import { ValidationComponent } from './validation/validation.component';


@NgModule({
  declarations: [

    ValidationComponent
  ],
  imports: [
    CommonModule,
    FormsRoutingModule,
    DocsComponentsModule,
    CardModule,
    FormModule,
    GridModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    FormModule,
    ButtonModule,
    ButtonGroupModule,
    DropdownModule,
    SharedModule,
    ListGroupModule
  ]
})
export class CoreUIFormsModule {
}
