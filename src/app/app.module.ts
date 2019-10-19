import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { ProfessorLoginComponent } from './professor-login/professor-login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminAddFacultyComponent } from './admin-add-faculty/admin-add-faculty.component';
import { AdminAddStudentComponent } from './admin-add-student/admin-add-student.component';
import { AdminStudentComponent } from './admin-student/admin-student.component';
import { AdminFacultyComponent } from './admin-faculty/admin-faculty.component';
import { AdminViewFacultyComponent } from './admin-view-faculty/admin-view-faculty.component';
import { AdminViewStudentComponent } from './admin-view-student/admin-view-student.component';
import { StudentHomeComponent } from './student-home/student-home.component';
import { StudentGiveTestComponent } from './student-give-test/student-give-test.component';
import { StudentViewResultComponent } from './student-view-result/student-view-result.component';
import { StudentViewFinalComponent } from './student-view-final/student-view-final.component';
import { FacultyHomeComponent } from './faculty-home/faculty-home.component';
import { FacultyCreateTestComponent } from './faculty-create-test/faculty-create-test.component';
import { FacultyViewAllComponent } from './faculty-view-all/faculty-view-all.component';
import { FacultyUploadComponent } from './faculty-upload/faculty-upload.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    WelcomeComponent,
    LoginComponent,
    ErrorComponent,
    HomeComponent,
    StudentLoginComponent,
    ProfessorLoginComponent,
    AdminLoginComponent,
    AdminHomeComponent,
    AdminAddFacultyComponent,
    AdminAddStudentComponent,
    AdminStudentComponent,
    AdminFacultyComponent,
    AdminViewFacultyComponent,
    AdminViewStudentComponent,
    StudentHomeComponent,
    StudentGiveTestComponent,
    StudentViewResultComponent,
    StudentViewFinalComponent,
    FacultyHomeComponent,
    FacultyCreateTestComponent,
    FacultyViewAllComponent,
    FacultyUploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
