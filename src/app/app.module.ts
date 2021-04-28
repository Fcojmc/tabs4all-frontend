import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from './auth/auth.module';
import { ValidateTokenGuard } from './guards/validate-token.guard';
import { interceptorProvider } from './interceptors/token-interceptor';
import { UserImagesPipe } from './pipes/user-images.pipe';
import { YouTubePlayerModule } from "@angular/youtube-player";

@NgModule({
  declarations: [
    AppComponent,
    UserImagesPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    AuthModule,
    HomeModule,
    SharedModule,
    FlexLayoutModule,
    YouTubePlayerModule
  ],
  providers: [ 
    ValidateTokenGuard,
    interceptorProvider 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
