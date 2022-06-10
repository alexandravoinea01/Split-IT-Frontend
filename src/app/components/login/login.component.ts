import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MatDialog} from '@angular/material/dialog';
import {OpenRegisterDialogComponent} from "../open-register-dialog/open-register-dialog.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  private openRegisterDialog() {
    this.dialog.open(OpenRegisterDialogComponent);
  }

  createAccount() {
    this.openRegisterDialog();
  }

  submit() {
    if (this.loginForm.valid) {
      const payload = {
        username: this.loginForm.get('username')?.value,
        password: this.loginForm.get('password')?.value
      };
      console.log(payload)
    }
  }
}
