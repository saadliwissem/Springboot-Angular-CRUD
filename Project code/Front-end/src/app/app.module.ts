import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule ,FormsModule } from '@angular/forms';
import {ClientService} from "./services/client.service";

import {
  PERFECT_SCROLLBAR_CONFIG,
  PerfectScrollbarConfigInterface,
  PerfectScrollbarModule,
} from 'ngx-perfect-scrollbar';

// Import routing module
import { AppRoutingModule } from './app-routing.module';

// Import app component
import { AppComponent } from './app.component';

// Import containers
import {
  DefaultFooterComponent,
  DefaultHeaderComponent,
  DefaultLayoutComponent,
} from './containers';
import { 
	IgxButtonModule,
	IgxIconModule,
	IgxCardModule,
	IgxRippleModule
 } from "igniteui-angular";
import {
  AvatarModule,
  BadgeModule,
  BreadcrumbModule,
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  DropdownModule,
  FooterModule,
  FormModule,
  GridModule,
  HeaderModule,
  ListGroupModule,
  NavModule,
  ProgressModule,
  SharedModule,
  SidebarModule,
  TableModule,
  TabsModule,
  UtilitiesModule,
  
} from '@coreui/angular';

import { IconModule, IconSetService } from '@coreui/icons-angular';
import { ClinetsComponent } from './views/clients/clinets.component';
import { DocsComponentsModule } from "../components/docs-components.module";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ArticlesComponent } from './views/articles/articles.component';
import { CardComponent } from './views/articles/card/card.component';
import { AddClientComponent } from './views/clients/add-client/add-client.component';
import { EditClientComponent } from './views/clients/edit-client/edit-client.component';


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
};

const APP_CONTAINERS = [
  DefaultFooterComponent,
  DefaultHeaderComponent,
  DefaultLayoutComponent,
];

@NgModule({
    declarations: [AppComponent, ...APP_CONTAINERS, ClinetsComponent, ArticlesComponent, CardComponent, AddClientComponent, EditClientComponent,],
    providers: [
        {
            provide: LocationStrategy,
            useClass: HashLocationStrategy,
        },
        {
            provide: PERFECT_SCROLLBAR_CONFIG,
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
        },
        IconSetService,
        Title,
        ClientService
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        AvatarModule,
        BreadcrumbModule,
        FooterModule,
        DropdownModule,
        GridModule,
        HeaderModule,
        SidebarModule,
        IconModule,
        PerfectScrollbarModule,
        NavModule,
        ButtonModule,
        FormModule,
        UtilitiesModule,
        ButtonGroupModule,
        ReactiveFormsModule,
        SidebarModule,
        SharedModule,
        TabsModule,
        ListGroupModule,
        ProgressModule,
        BadgeModule,
        ListGroupModule,
        CardModule,
        DocsComponentsModule,
        TableModule,
        HttpClientModule,
        IgxButtonModule,
        IgxIconModule,
        IgxCardModule,
        IgxRippleModule,
        FormsModule,
        
    ]
})
export class AppModule {
}
