import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeServersComponent } from './home-servers/home-servers.component';
import { EditServerComponent } from './edit-server/edit-server.component';
import { InfoServerComponent } from './info-server/info-server.component';
import { SUB_ROUTING } from './sub.routing';

@NgModule({
  declarations: [
    HomeServersComponent,
    EditServerComponent,
    InfoServerComponent,
  ],
  imports: [CommonModule, SUB_ROUTING],
})
export class SubModule {}
