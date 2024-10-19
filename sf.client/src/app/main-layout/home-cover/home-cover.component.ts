import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginModalComponent } from '../../login-modal/login-modal.component';
@Component({
  selector: 'app-home-cover',
  templateUrl: './home-cover.component.html',
  styleUrl: './home-cover.component.css'
})
export class HomeCoverComponent {
  constructor(private dialog: MatDialog) { }

  openLoginModal(): void {
    const dialogRef = this.dialog.open(LoginModalComponent, {
      width: '400px',  // Optional: Set dialog width
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      if (result) {
        // Handle the login result (result contains form data if login was successful)
      }
    });
  }

}
