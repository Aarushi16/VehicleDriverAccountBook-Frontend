import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatFormFieldModule} from '@angular/material/form-field';
// import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
// import { AngularFireModule } from 'angularfire2';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import { LoginComponent } from './login/login.component';
// import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import { RouterModule } from '@angular/router';
import {MatTableModule} from '@angular/material/table';
// import {MatIconModule} from '@angular/material/icon'
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import { DriverComponent } from './driver/driver.component';
import { BookingComponent } from './booking/booking.component';
@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    LoginComponent,
    // AdminDashboardComponent,
    CustomerDashboardComponent,
    HeaderComponent,
    SidebarComponent,
    DriverComponent,
    BookingComponent
  ],
  imports: [
    BrowserModule,
    MatSelectModule,
    // AngularFireModule.initializeApp(environment.firebase),
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatRadioModule,
    MatButtonModule,
    MatToolbarModule,
    MatTableModule,
    HttpClientModule,
    MatDialogModule,
    RouterModule.forRoot([
      {path: 'signup', component:  SigninComponent },
      {path: 'login', component: LoginComponent},
      {path: 'dashboard', component: CustomerDashboardComponent},
      {path: 'driver', component: DriverComponent},
      {path: 'booking', component: BookingComponent},
    ]),

  ],
  providers: [],
  bootstrap: [AppComponent],
 
})
export class AppModule { }
