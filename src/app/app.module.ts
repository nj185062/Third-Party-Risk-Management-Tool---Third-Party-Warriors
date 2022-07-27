import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MemberLoginComponent } from './member-login/member-login.component';
import { HomePageComponent } from './home-page/home-page.component';
import { OnboardAssessmentComponent } from './onboard-assessment/onboard-assessment.component';
import { AssessmentPageComponent } from './assessment-page/assessment-page.component';
import { ThirdpartyInventoryComponent } from './thirdparty-inventory/thirdparty-inventory.component';
import { ChartComponent } from './chart/chart.component';


@NgModule({
  declarations: [
    AppComponent,
    MemberLoginComponent,
    HomePageComponent,
    OnboardAssessmentComponent,
    AssessmentPageComponent,
    ThirdpartyInventoryComponent,
    ChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path:'',redirectTo:'home-page', pathMatch: 'full' },
      {path: 'home-page', component: HomePageComponent},
      {path: 'member-login', component: MemberLoginComponent},
      {path: 'onboard-assessment', component: OnboardAssessmentComponent},
      {path: 'assessment-page', component:AssessmentPageComponent},
      {path: 'thirdparty-inventory', component:ThirdpartyInventoryComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
