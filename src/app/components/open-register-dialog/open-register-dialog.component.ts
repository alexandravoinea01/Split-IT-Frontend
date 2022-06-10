import {Component, Inject, OnInit} from "@angular/core";
import {FormGroup, FormControl, Validators, FormBuilder} from "@angular/forms";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: 'app-open-register-dialog',
  templateUrl: './open-register-dialog.component.html',
  styleUrls: ['./open-register-dialog.component.scss']
})

export class OpenRegisterDialogComponent implements OnInit {

  registerForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<any>,

) {
  }

  ngOnInit() {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  register() {
    if (this.registerForm.valid) {
      const payload = {
        username: this.registerForm.get('username')?.value,
        password: this.registerForm.get('password')?.value
      };
      console.log(payload);
      this.dialogRef.close(payload);
    }
  }
}
