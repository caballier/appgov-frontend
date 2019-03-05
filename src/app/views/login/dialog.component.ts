import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-change-password-dialog',
  templateUrl: './dialog.component.html'
})
export class ChangePasswordDialogComponent {
  constructor(public dialogRef: MatDialogRef<ChangePasswordDialogComponent>) {}

  onOkClick(): void {
    this.dialogRef.close();
  }
}
