import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MatDialog} from '@angular/material/dialog';
import {OpenRegisterDialogComponent} from "../open-register-dialog/open-register-dialog.component";
import {AuthService} from "../../services/auth.service";
import {finalize, switchMap} from "rxjs";
import {Router} from "@angular/router";

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
    private dialog: MatDialog,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  private openRegisterDialog() {
    this.dialog.open(OpenRegisterDialogComponent)
      .afterClosed()
      .pipe(
        switchMap(res => this.authService.register(res.username, res.password)),
      )
      .subscribe(res => {if(res) {
        this.router.navigate(['/login'])
      }});
  }

  createAccount() {
    this.openRegisterDialog();
  }

  submit() {
    if (this.loginForm.valid) {
      const payload = {
        email: this.loginForm.get('username')?.value,
        password: this.loginForm.get('password')?.value
      };
      this.router.navigate(['/dashboard']);
      this.authService.login(payload.email, payload.password)
        .subscribe();
    }
  }
}
