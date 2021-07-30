import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryDashboardComponent } from './history-dashboard/history-dashboard.component';
import { HistoryDetailComponent } from './history-detail/history-detail.component';
import { HomeDashboardComponent } from './home-dashboard/home-dashboard.component';
import { InputRealizationComponent } from './input-realization/input-realization.component';
import { LoginOneComponent } from './login-one/login-one.component';
import { LoginComponent } from './login/login.component';
import { PredictionDashboardComponent } from './prediction-dashboard/prediction-dashboard.component';
import { PredictionDetailComponent } from './prediction-detail/prediction-detail.component';
import { PredictionComponent } from './prediction/prediction.component';
import { ProfileDashboardComponent } from './profile-dashboard/profile-dashboard.component';
import { ResultPredictionComponent } from './result-prediction/result-prediction.component';
import { SearchPredictionComponent } from './search-prediction/search-prediction.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login-signup', component: LoginComponent },
  { path: 'login', component: LoginOneComponent },
  { path: 'signup', component: SignUpComponent },

  // HOME
  { path: 'home', component: HomeDashboardComponent },

  // PREDICTION
  { path: 'prediction', component: PredictionComponent },
  { path: 'prediction-dashboard', component: PredictionDashboardComponent },
  { path: 'prediction/:id', component: PredictionDetailComponent },
  { path: 'result-prediction', component: ResultPredictionComponent },
  { path: 'input-realization', component: InputRealizationComponent },
  { path: 'search-prediction', component: SearchPredictionComponent },

  // HISTORY
  { path: 'history-dashboard', component: HistoryDashboardComponent },
  { path: 'history/:id', component: HistoryDetailComponent },

  // Profile
  { path: 'profile-dashboard', component: ProfileDashboardComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,]
})
export class AppRoutingModule { }
