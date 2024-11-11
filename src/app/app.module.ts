// agrgado  para revisar


import { NgModule } from '@angular/core'; // Importar la función NgModule
import { BrowserModule } from '@angular/platform-browser'; // Importar BrowserModule
import { HttpClientModule } from '@angular/common/http'; // Para peticiones HTTP
import { AppComponent } from './app.component'; // Componente raíz de la app
import { PlayersComponent } from './components/players/players.component'; // Componente de jugadores (si ya lo tienes)

@NgModule({
  declarations: [
    AppComponent, // Registrar el componente raíz
    PlayersComponent // Registrar otros componentes que uses
  ],
  imports: [
    BrowserModule, // Este módulo es obligatorio en cualquier app Angular
    HttpClientModule // Para que puedas usar HttpClient en tus servicios
  ],
  providers: [], // Si necesitas servicios globales, los puedes agregar aquí
  bootstrap: [AppComponent] // Indica que este es el componente raíz de la aplicación
})
export class AppModule { }

// agrgado  para revisar
