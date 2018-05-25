import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Inject, Component } from '@angular/core';

@Component({
  selector: 'td-image-dialog',
  templateUrl: 'image.dialog.html',
  styleUrls: ['image.dialog.scss']
})
export class ImageDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ImageDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onClick(): void {
    this.dialogRef.close();
  }
}
