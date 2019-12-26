import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HeaderModule } from "./core/header/header.module";
import { BodyModule } from "./core/body/body.module";
import { FooterModule } from "./core/footer/footer.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HeaderModule,
    BodyModule,
    FooterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
