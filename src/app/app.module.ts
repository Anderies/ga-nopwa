import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { LoginOneComponent } from './login-one/login-one.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeDashboardComponent } from './home-dashboard/home-dashboard.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MatCardModule } from '@angular/material/card';
import { PredictionComponent } from './prediction/prediction.component';
import { BottomBarComponent } from './bottom-bar/bottom-bar.component';
import { MatSelectModule } from '@angular/material/select';
import { PredictionDashboardComponent } from './prediction-dashboard/prediction-dashboard.component';
import { ResultPredictionComponent } from './result-prediction/result-prediction.component';
import { HistoryDashboardComponent } from './history-dashboard/history-dashboard.component';
import { ProfileDashboardComponent } from './profile-dashboard/profile-dashboard.component';
import { HistoryDetailComponent } from './history-detail/history-detail.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { InputRealizationComponent } from './input-realization/input-realization.component';
import { SearchPredictionComponent } from './search-prediction/search-prediction.component';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { PredictionDetailComponent } from './prediction-detail/prediction-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginOneComponent,
    SignUpComponent,
    HomeDashboardComponent,
    PredictionComponent,
    BottomBarComponent,
    PredictionDashboardComponent,
    ResultPredictionComponent,
    HistoryDashboardComponent,
    ProfileDashboardComponent,
    HistoryDetailComponent,
    TopBarComponent,
    InputRealizationComponent,
    SearchPredictionComponent,
    PredictionDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    NgxChartsModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HttpClientModule,
    BrowserAnimationsModule, 
    Ng2SearchPipeModule
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
