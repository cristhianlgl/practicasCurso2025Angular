import { Routes } from '@angular/router';
import { HeroPageComponent } from './components/hero-page/hero-page.component';
import { HomeComponent } from './components/shared/home/home.component';
import { DragonballPageComponent } from './components/dragonball-page/dragonball-page.component';
import { DragonballSuperPageComponent } from './components/dragonball-super-page/dragonball-super-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'hero',
    component: HeroPageComponent,
  },
  {
    path: 'dragonball',
    component: DragonballPageComponent,
  },
  {
    path: 'dragonball-super',
    component: DragonballSuperPageComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
