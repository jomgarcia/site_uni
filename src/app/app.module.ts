import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/*rutas*/
import { APP_ROUTING } from './app.routes';

/*Servicios*/


/*component*/
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AlmaMaterComponent } from './components/alma-mater/alma-mater.component';
import { RecintosComponent } from './components/recintos/recintos.component';
import { AcademicaComponent } from './components/academica/academica.component';
import { InvestigacionComponent } from './components/investigacion/investigacion.component';
import { ExtensionComponent } from './components/extension/extension.component';
import { PosgradoComponent } from './components/posgrado/posgrado.component';
import { VidaEstudiantilComponent } from './components/vida-estudiantil/vida-estudiantil.component';
import { RectoriaComponent } from './components/rectoria/rectoria.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AlmaMaterComponent,
    RecintosComponent,
    AcademicaComponent,
    InvestigacionComponent,
    ExtensionComponent,
    PosgradoComponent,
    VidaEstudiantilComponent,
    RectoriaComponent,

  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
