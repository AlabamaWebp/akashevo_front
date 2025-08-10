import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  signal,
  WritableSignal,
} from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { NgClass, NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-simple-table',
  templateUrl: './simple-table.component.html',
  styleUrls: ['./simple-table.component.scss'],
  standalone: true,
  imports: [NgClass, MatIcon, NgTemplateOutlet],
})
export class SimpleTableComponent implements OnChanges {
  @Input() split_by: string = '';
  @Input() data: SimpleTable = new SimpleTable();
  @Input() no_data_text: string = 'Нет данных для отображения';
  @Input() is_load: boolean = false;
  @Input() icon_columns: string[] = [];
  @Input() sortable_columns: string[] = []; // список сортируемых колонок
  @Input() sort = new Sort();

  @Output() row_click = new EventEmitter();
  @Output() sort_ev = new EventEmitter();
  constructor() {}
  split_index: { [x: number]: string } = {};
  // get tableData(): table_data[] {
  //   return typeof this.data.table_data == 'object'
  //     ? this.data.table_data
  //     : this.data.table_data();
  // }

  findSplitIndexes() {
    this.split_index = {};
    this.data.tableData.forEach((d, i) => {
      if (!Object.values(this.split_index).includes(String(d[this.split_by])))
        this.split_index[i] = d[this.split_by] as string;
    });
  }
  getCurrentSplitValue(i: number) {
    return this.split_index[i];
  }

  ngOnChanges(ch: any) {
    if (ch.data) {
      this.split_index = {};
      if (this.split_by) this.findSplitIndexes();
    }

    // const tmp = ch.is_load.currentValue;
    // this.anim = false
    // if (tmp) {
    //   setTimeout(() => {
    //     this.anim = true;
    //   }, 350);
    // }
  }
  // anim: boolean = false;
  selectRow(num: number, dbl: boolean = false) {
    this.data.row_id = num; // (this.data.row_id != num) ? num : -1;
    this.row_click.emit(dbl);
  }
  sortEv(column: string) {
    if (!this.sortable_columns.includes(column)) return;
    this.sort_ev.emit(this.sort.next(column));
  }
}
interface table_data {
  [index: string]: string | number;
}
interface rus_cols {
  [index: string]: string;
}
export class SimpleTable {
  constructor(
    columns?: string[],
    rus_cols?: rus_cols,
    table_data?: table_data[] | WritableSignal<any>
  ) {
    this.columns = columns ?? [];
    this.rus_cols = rus_cols ?? {};
    this.table_data = table_data ?? [];
    // console.log(table_data);
  }
  columns: string[];
  rus_cols: rus_cols;
  private table_data: table_data[] | WritableSignal<any>;
  get tableData(): table_data[] {
    return typeof this.table_data == 'object'
      ? this.table_data
      : this.table_data();
  }
  row_id = -1;
}
export class Sort {
  constructor(column?: string) {
    this.order_by = column;
  }
  next(c: string) {
    if (this.order_by != c) {
      this.descending = false;
      this.order_by = c;
    } else {
      if (!this.descending) this.descending = true;
      else {
        this.order_by = undefined;
        this.descending = false;
      }
    }
    return this;
  }
  order_by: string | undefined;
  descending: boolean | undefined;
}
