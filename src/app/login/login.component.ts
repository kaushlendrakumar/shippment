import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup | any;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    if(localStorage.getItem('sessionUser')){
      this.router.navigate(['home']);
    }
    this.buildFilterRowForm();
  }

  buildFilterRowForm() {
		this.loginForm = this.fb.group({
			username: new FormControl('', [Validators.required]),
			password: new FormControl('', [Validators.required])
		});
	}

  onSubmit(){
    console.log(this.loginForm.valid)
    if(this.loginForm.valid){
      const userInfo = this.loginForm.getRawValue();
      localStorage.setItem('sessionUser', userInfo)
      this.router.navigate(['home']);
    }
  }

}
