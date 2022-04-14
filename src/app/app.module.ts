import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserdataserviceService } from './userdataservice.service';
import { MyserviceService } from './myservice.service';
import { DropdownComponent } from './dropdown/dropdown.component';
import { MessageService } from './message.service';
@NgModule({
  declarations: [
    AppComponent,
    DropdownComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [MyserviceService,MessageService,UserdataserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
