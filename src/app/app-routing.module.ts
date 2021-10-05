import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'login-farmaceutico',
    loadChildren: () => import('./pages/login-farmaceutico/login-farmaceutico.module').then( m => m.LoginFarmaceuticoPageModule)
  },
  {
    path: 'maps',
    loadChildren: () => import('./pages/maps/maps.module').then( m => m.MapsPageModule)
  },
  {
    path: 'chats',
    loadChildren: () => import('./pages/chats/chats.module').then( m => m.ChatsPageModule)
  },
  {
    path: 'iniciado',
    loadChildren: () => import('./pages/iniciado/iniciado.module').then( m => m.IniciadoPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'listadofarmacias',
    loadChildren: () => import('./pages/listadofarmacias/listadofarmacias.module').then( m => m.ListadofarmaciasPageModule)
  },
  {
    path: 'loginfarmaceutico',
    loadChildren: () => import('./pages/loginfarmaceutico/loginfarmaceutico.module').then( m => m.LoginfarmaceuticoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
