import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 
import { MatDialogRef } from '@angular/material/dialog';
import { Router,ActivatedRoute } from '@angular/router';
import { AppPaths } from '../app-paths'; // Adjust the import path if necessary

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css'] // Ensure this is 'styleUrls' not 'styleUrl'
})
export class LoginModalComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private dialogRef: MatDialogRef<LoginModalComponent>,
    private router: Router // Inject Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value; // Destructure for easier access

      // Check username and password
      if (username.toLowerCase() === 'student' && password === '123') {
        this.dialogRef.close(); // Close the modal
        // Redirect to the student page
        this.router.navigate([AppPaths.studentPage]); // Navigate to student page
      } 
      if (username.toLowerCase() === 'teacher' && password === '123') {
        this.dialogRef.close(); // Close the modal
        // Redirect to the student page
        this.router.navigate([AppPaths.teacherPage]); // Navigate to student page
      } 
      else {
        alert('Username or password is not recognized.');
      }
    } else {
      console.log('Form is invalid!');
    }
  }
}
