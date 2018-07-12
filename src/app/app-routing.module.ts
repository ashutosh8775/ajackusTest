import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { FormsModule } from  '@angular/forms';


const routes: Routes = [
    
	{path:'',component:HomeComponent},
	{path:'Signup',component:SignUpComponent},
	{path:'ThankYou',component:ThankyouComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
