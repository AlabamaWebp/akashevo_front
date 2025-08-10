import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from '../../shared/services/userdata.service';
import { SimpleTableComponent } from '../../shared/components/simple-table/simple-table.component';
import { FormulaComponent } from '../../shared/components/formula/formula.component';
import { IModelVar, VarTableComponent } from './var-table/var-table.component';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-moderator',
  standalone: true,
  imports: [
    SimpleTableComponent,
    FormulaComponent,
    MatFormFieldModule,
    MatSelectModule,
  ],
  templateUrl: './moderator.component.html',
  styleUrl: './moderator.component.scss',
})
export class ModeratorComponent {
  constructor(
    private user: UserDataService, // private router: Router
    private dialog: MatDialog
  ) {}
  _interface: show = 0;
  headers: any = {
    1: 'Создание переменных',
    2: 'Создание формулы',
    3: 'Выбор анализа',
  };
  header = this.headers[1];
  set interface(value: show) {
    this._interface = value;
    this.header = this.headers[value];
  }
  get interface() {
    return this._interface;
  }
  models = ['model1', 'model2'];
  model?: IModel;
  //2
  vars_for_formula?: string[];
  formula = ['='];
  //3
  analyz = [
    { name: 'analyz1', disabled: true },
    { name: 'analyz2', disabled: false },
  ];
  cur_analyz = [this.analyz[0]];
  ngOnInit() {
    // this.choiceModel('1');
    // this.openVarsComp();
    // this.goToFormula();
  }

  choiceModel(item: string) {
    this.interface = 1;
    this.model = {
      name: item,
      fields: [
        { name: 'B', shortname: 'B', metric: 'B' },
        { name: 'е', shortname: 'Е', metric: 'е' },
        { name: 'Г', shortname: 'Г', metric: 'Г' },
      ],
    };
  }
  create() {
    this.interface = 1;
  }
  goToFormula() {
    this.vars_for_formula = this.model!.fields?.map((e) => e.shortname);
    this.goNext();
  }
  goNext() {
    this.interface++;
  }
  goBack() {
    this.interface--;
  }
  logout() {
    this.user.logout();
  }

  openVarsComp() {
    this.dialog
      .open(VarTableComponent, { width: '90%', height: '90%' })
      .afterClosed()
      .subscribe((e) => {
        if (e) console.log(e);
      });
  }

  saveAndExit() {
    this.interface = 0;
  }
}
type show = 0 | 1 | 2 | 3; // 0 - выбор \ создание, 1 - переменные, 2 - формула, 3 - выбор анализа
export interface IModel {
  name?: string;
  fields?: IModelVar[];
  formula?: string;
  analiz?: string[];
}
export interface IModelVarCreate {
  name?: string; // Название
  shortname?: string; // Коротокое название
  metric?: string; // в чём измеряется
  computed?: string; // как вычисляется (если вычисляемое)
}
