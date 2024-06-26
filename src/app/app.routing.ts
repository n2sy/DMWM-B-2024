import { RouterModule, Routes } from '@angular/router';
import { HomeAccountComponent } from './accounts/home-account/home-account.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AddComponent } from './add/add.component';
import { allowGuard } from './allow.guard';
import { blockGuard } from './block.guard';
import { CvComponent } from './cv/cv.component';
import { EditComponent } from './edit/edit.component';
import { InfosComponent } from './infos/infos.component';
import { loginGuard } from './login.guard';
import { LoginComponent } from './login/login.component';
import { ManageServersComponent } from './manage-servers/manage-servers.component';
import { MsWordComponent } from './ms-word/ms-word.component';
import { NotFoundComponent } from './not-found/not-found.component';

// Version 2 with children
// const myRoutes: Routes = [
//   { path: '', component: AccueilComponent },
//   {
//     path: 'cv',
//     component: CvComponent,
//     children: [
//       { path: 'add', component: AddComponent },
//       {
//         path: ':id',
//         children: [
//           { path: '', component: InfosComponent },
//           { path: 'edit', component: EditComponent },
//         ],
//       },
//     ],
//   },
//   { path: 'ms-word', component: MsWordComponent },
//   { path: 'login', component: LoginComponent },
//   { path: 'accounts', component: HomeAccountComponent },
//   {
//     path: 'servers',
//     loadChildren: () => import('./sub/sub.module').then((m) => m.SubModule),
//   },
//   { path: 'manage-servers', component: ManageServersComponent },
//   { path: 'not-found', component: NotFoundComponent },
//   { path: '**', redirectTo: 'not-found' },
// ];
// Version 1 with children
const myRoutes: Routes = [
  { path: '', component: AccueilComponent },
  {
    path: 'cv',
    children: [
      { path: '', component: CvComponent },
      { path: 'add', component: AddComponent, canActivate: [allowGuard] },
      {
        path: ':id',
        children: [
          { path: '', component: InfosComponent },
          { path: 'edit', component: EditComponent, canActivate: [allowGuard] },
        ],
      },
    ],
  },
  { path: 'ms-word', component: MsWordComponent },
  { path: 'accounts', component: HomeAccountComponent },
  { path: 'servers', component: ManageServersComponent },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [blockGuard],
    canDeactivate: [loginGuard],
  },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' },
];

// Version without Children
// const myRoutes: Routes = [
//   { path: '', component: AccueilComponent },
//   { path: 'cv', component: CvComponent },
//   { path: 'cv/add', component: AddComponent },
//   { path: 'cv/:id', component: InfosComponent },
//   { path: 'cv/edit/:id', component: EditComponent },
//   { path: 'ms-word', component: MsWordComponent },
//   { path: 'accounts', component: HomeAccountComponent },
//   { path: 'servers', component: ManageServersComponent },
//   { path: 'not-found', component: NotFoundComponent },
//   { path: '**', redirectTo: 'not-found' },
// ];

export const DMWM_ROUTING = RouterModule.forRoot(myRoutes);
