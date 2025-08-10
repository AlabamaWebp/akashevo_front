import { Component, Inject } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { FormsModule, NgModel } from '@angular/forms';
import { IRight, IUser, IUserCreate } from '../admin-panel.component';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-admin-create-edit',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInput,
    MatCheckboxModule,
    MatDialogContent,
    MatDialogActions,
    MatButton,
    MatDialogClose,
    FormsModule,
    MatSelectModule
  ],
  templateUrl: './admin-create-edit.component.html',
  styleUrl: './admin-create-edit.component.scss',
})
export class AdminCreateEditComponent {
  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA)
    public constructor_data: {
      edit?: IUser;
      rights: IRight[]
    }
  ) {}
  data: IUserCreate = this.constructor_data.edit ?? {};
  computed = false;
  get disableClose() {
    return !(
      (
        this.data.f &&
        this.data.i &&
        this.data.o &&
        this.data.rights &&
        this.data.login
      )
      // && (!this.computed || (this.computed && this.data.shortname))
    );
  }
  createEdit() {
    this.dialogRef.close();
  }
}
