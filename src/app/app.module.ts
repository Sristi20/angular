import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewComponent } from './new/new.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { FormsModule } from '@angular/forms';
import { ChangeTextDirective } from './change-text.directive';
import { CustomPipe } from './custom.pipe';
import { SquarePipe } from './square.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { MyserviceService } from './myservice.service';
import { HttpClientModule } from '@angular/common/http';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NewComponent,
    DropdownComponent,
    ChangeTextDirective,
    CustomPipe,
    SquarePipe,
    ChildComponent,
    ParentComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {
         path: 'new',
         component: NewComponent
      }
   ])
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
