import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component'
import { ArtistComponent } from './components/artist/artist.component';
import { AlbumesComponent } from './components/albumes/albumes.component';
import { AlbumComponent } from './components/album/album.component';

//rutas
import { FeatureRoutingModule } from './app.routes';

//peticiones http
import { HttpClientModule } from '@angular/common/http';

//PIPE
import { NoImagePipe } from './pipes/image.pipe';
import { DOMSeguroPipe } from './pipes/domseguro.pipe';

//Shared Components
import { TarjetasComponent } from './components/shared/tarjetas/tarjetas.component';
import { LoadingComponent} from './components/shared/loading/loading.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { TablaComponent } from './components/shared/tabla/tabla.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    NavbarComponent,
    ArtistComponent,
    NoImagePipe,
    TarjetasComponent,
    LoadingComponent,
    DOMSeguroPipe,
    AlbumesComponent,
    AlbumComponent,
    TablaComponent
  ],
  imports: [
    BrowserModule,
    FeatureRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
