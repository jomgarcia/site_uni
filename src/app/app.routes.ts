import { RouterModule, Routes } from '@angular/router';
import { AlmaMaterComponent } from './components/alma-mater/alma-mater.component';
import { RecintosComponent } from './components/recintos/recintos.component';
import { AcademicaComponent } from './components/academica/academica.component';
import { InvestigacionComponent } from './components/investigacion/investigacion.component';
import { ExtensionComponent } from './components/extension/extension.component';
import { PosgradoComponent } from './components/posgrado/posgrado.component';
import { VidaEstudiantilComponent } from './components/vida-estudiantil/vida-estudiantil.component';
import { HomeComponent } from './components/home/home.component';
import { RectoriaComponent } from './components/rectoria/rectoria.component';



const APP_ROUTES: Routes = [
  { path: 'alma-mater', component: AlmaMaterComponent },
  { path: 'recintos', component: RecintosComponent },
  { path: 'academica', component: AcademicaComponent },
  { path: 'investigacion', component: InvestigacionComponent },
  { path: 'extension', component: ExtensionComponent },
  { path: 'posgrado', component: PosgradoComponent },
  { path: 'vida-estudiantil', component: VidaEstudiantilComponent },
  { path: 'home', component: HomeComponent },
  { path: 'rectoria', component: RectoriaComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
