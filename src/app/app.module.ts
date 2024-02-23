import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AddAccountComponent } from './accounts/add-account/add-account.component';
import { HomeAccountComponent } from './accounts/home-account/home-account.component';
import { ItemAccountComponent } from './accounts/item-account/item-account.component';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { CustomDirDirective } from './custom-dir.directive';
import { CvComponent } from './cv/cv.component';
import { DetailsComponent } from './details/details.component';
import { DirectComponent } from './direct/direct.component';
import { FirstComponent } from './first/first.component';
import { ItemComponent } from './item/item.component';
import { ListeComponent } from './liste/liste.component';
import { ManageServersComponent } from './manage-servers/manage-servers.component';
import { MsWordComponent } from './ms-word/ms-word.component';
import { FilterPipe } from './pipes/filter.pipe';
import { ShortPipe } from './pipes/short.pipe';
import { FirstService } from './services/first.service';
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
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
