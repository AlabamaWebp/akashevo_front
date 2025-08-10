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
import { IModelVar } from '../var-table.component';
import { MatButton } from '@angular/material/button';
import { IModelVarCreate } from '../../moderator.component';
import { FormsModule, NgModel } from '@angular/forms';
import { FormulaComponent } from '../../../../shared/components/formula/formula.component';

@Component({
  selector: 'app-var-create-edit',
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
    FormulaComponent,
  ],
  templateUrl: './var-create-edit.component.html',
  styleUrl: './var-create-edit.component.scss',
})
export class VarCreateEditComponent {
  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA)
    public constructor_data: {
      edit?: IModelVar;
    }
  ) {}
  data: IModelVarCreate = this.constructor_data.edit ?? {};
  computed = false;
  get disableClose() {
    return !(
      (this.data.name && this.data.shortname && this.data.metric)
      // && (!this.computed || (this.computed && this.data.shortname))
    );
  }
  createEdit() {
    this.dialogRef.close();
  }
}
