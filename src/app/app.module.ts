import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserdataserviceService } from './userdataservice.service';
import { MyserviceService } from './myservice.service';
import { DropdownComponent } from './dropdown/dropdown.component';
import { MessageService } from './message.service';
import { ChildComponent } from './child/child.component';
import { ChangeTextDirective } from './change-text.directive';
import { SqrtPipe } from './sqrt.pipe';
import { NewCmpComponent } from './new-cmp/new-cmp.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    DropdownComponent,
    ChildComponent,
    ChangeTextDirective,
    SqrtPipe,

    NewCmpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {
         path: 'new-cmp',
         component: NewCmpComponent
      }
   ])
  ],
  providers: [MyserviceService,MessageService,UserdataserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
