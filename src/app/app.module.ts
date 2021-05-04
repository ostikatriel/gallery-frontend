import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListarComponent } from './pages/listar/listar.component';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { NuevaComponent } from './pages/nueva/nueva.component';
// external
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    DetalleComponent,
    NuevaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,

    NgbModalModule,
    HttpClientModule,
    FormsModule
  ],
  entryComponents:[DetalleComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
