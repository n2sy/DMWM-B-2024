import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {
  HttpClientModule,
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AddAccountComponent } from './accounts/add-account/add-account.component';
import { HomeAccountComponent } from './accounts/home-account/home-account.component';
import { ItemAccountComponent } from './accounts/item-account/item-account.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AddComponent } from './add/add.component';
import { addtokenInterceptor } from './addtoken.interceptor';
import { AppComponent } from './app.component';
import { DMWM_ROUTING } from './app.routing';
import { ChildComponent } from './child/child.component';
import { CustomDirDirective } from './custom-dir.directive';
import { CvComponent } from './cv/cv.component';
import { DetailsComponent } from './details/details.component';
import { DirectComponent } from './direct/direct.component';
import { EditComponent } from './edit/edit.component';
import { ExpObsComponent } from './exp-obs/exp-obs.component';
import { FirstComponent } from './first/first.component';
import { InfosComponent } from './infos/infos.component';
import { ItemComponent } from './item/item.component';
import { ListeComponent } from './liste/liste.component';
import { LoginComponent } from './login/login.component';
import { ManageServersComponent } from './manage-servers/manage-servers.component';
import { MsWordComponent } from './ms-word/ms-word.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FilterPipe } from './pipes/filter.pipe';
import { NoImagePipe } from './pipes/no-image.pipe';
import { ShortPipe } from './pipes/short.pipe';
import { RecruterComponent } from './recruter/recruter.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    ChildComponent,
    CvComponent,
    ListeComponent,
    ItemComponent,
    DetailsComponent,
    HomeAccountComponent,
    AddAccountComponent,
    ItemAccountComponent,
    DirectComponent,
    MsWordComponent,
    ManageServersComponent,
    CustomDirDirective,
    ShortPipe,
    FilterPipe,
    RecruterComponent,
    AccueilComponent,
    NavbarComponent,
    InfosComponent,
    NoImagePipe,
    AddComponent,
    EditComponent,
    NotFoundComponent,
    LoginComponent,
    ExpObsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DMWM_ROUTING,
    // SubModule,
    HttpClientModule,
  ],
  providers: [provideHttpClient(withInterceptors([addtokenInterceptor]))],
  bootstrap: [AppComponent],
})
export class AppModule {}
