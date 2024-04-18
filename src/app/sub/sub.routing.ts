import { RouterModule, Routes } from '@angular/router';
import { EditServerComponent } from './edit-server/edit-server.component';
import { HomeServersComponent } from './home-servers/home-servers.component';
import { InfoServerComponent } from './info-server/info-server.component';

const subRoutes: Routes = [
  {
    path: '',
    component: HomeServersComponent,
    children: [
      {
        path: ':serverid',
        component: InfoServerComponent,
      },
      {
        path: ':id/edit',
        component: EditServerComponent,
      },
    ],
  },
];

export const SUB_ROUTING = RouterModule.forChild(subRoutes);
