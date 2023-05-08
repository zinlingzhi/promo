import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router) {}
  email = new FormControl('', [Validators.required, Validators.email])
  onSubmit() {
    this.router.navigateByUrl('/gallery')
  }
}
