import { Component } from '@angular/core';
import {
  SimpleTable,
  SimpleTableComponent,
} from '../../../shared/components/simple-table/simple-table.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { VarCreateEditComponent } from './var-create-edit/var-create-edit.component';

@Component({
  selector: 'app-var-table',
  standalone: true,
  imports: [SimpleTableComponent],
  templateUrl: './var-table.component.html',
  styleUrl: './var-table.component.scss',
})
export class VarTableComponent {
  constructor(
    private dialogRef: MatDialogRef<any>,
    private dialog: MatDialog
  ) {}
  rus_cols = {
    name: 'name',
    shortname: 'shortname',
    metric: 'metric',
    computed: 'computed',
  };
  cols = Object.keys(this.rus_cols);
  data: SimpleTable = new SimpleTable(
    this.cols,
    this.rus_cols,
    testData as any
  );
  close(c = true) {
    const a =
      c && this.data.row_id != -1
        ? this.data.tableData[this.data.row_id]
        : undefined;

    this.dialogRef.close(a);
  }
  openCreate() {
    this.dialog
      .open(VarCreateEditComponent, { data: {} })
      .afterClosed()
      .subscribe((e) => {
        console.log(e);
      });
  }
}
const testData: IModelVar[] = [
  {
    name: 'name',
    shortname: 'shortname',
    metric: 'metric',
    computed: 'computed',
  },
  {
    name: 'name',
    shortname: 'shortname',
    metric: 'metric',
    computed: 'computed',
  },
  {
    name: 'name',
    shortname: 'shortname',
    metric: 'metric',
    computed: 'computed',
  },
];
export interface IModelVar {
  name: string; // Название
  shortname: string; // Коротокое название
  metric: string; // в чём измеряется
  computed?: string; // как вычисляется (если вычисляемое)
}
