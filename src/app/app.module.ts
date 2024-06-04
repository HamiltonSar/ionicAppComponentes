import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
//import { AppHeader from './app.component'; 
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AvatarComponent } from './pages/avatar/avatar.component';

@NgModule({
  declarations: [AppComponent , AvatarComponent ],

  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
 // exports:[AppHeaderComponent],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
