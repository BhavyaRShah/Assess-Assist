import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ProfessorLoginComponent } from './professor-login/professor-login.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'welcome/:name',component:WelcomeComponent},
  {path:'adminLogin',component:AdminLoginComponent},
  {path:'professorLogin',component:ProfessorLoginComponent},
  {path:'studentLogin',component:StudentLoginComponent},
  {path:'adminHome',component:AdminHomeComponent},
  {path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
