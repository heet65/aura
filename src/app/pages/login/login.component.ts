import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
   showLogin: boolean = true;
  vehicleSelection: boolean = false;

  loginEmail = '';
  loginPassword = '';

  signupName = '';
  signupEmail = '';
  signupPassword = '';
  constructor(private router:Router){}
  toggleForms() {
    this.showLogin = !this.showLogin;
  }

  onLoginSubmit(event: Event) {
    event.preventDefault();
    // Simulate successful login
    if(this.loginEmail=="kalantriheet@gmail.com"&&this.loginPassword=="123456"){
    this.vehicleSelection = true;}
    this.showLogin = false;
  }

  onSignupSubmit(event: Event) {
    event.preventDefault();
    alert('Account created! Please log in.');
    this.toggleForms();
  }

  selectVehicle(vehicle: string) {
    alert(`Redirecting to ${vehicle} Page...`);
    if(vehicle=="Car"){
      this.router.navigate(["/car"])
    }else if(vehicle=="Bike"){
      this.router.navigate(["/bike"])

    }
  }

}
