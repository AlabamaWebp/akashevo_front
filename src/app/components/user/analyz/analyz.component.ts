import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';

@Component({
  selector: 'app-analyz',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInput,
    MatSelectModule,
    MatIcon,
    FormsModule,
  ],
  templateUrl: './analyz.component.html',
  styleUrl: './analyz.component.scss',
})
export class AnalyzComponent {
  constructor(private router: Router) {}
  interface: front = 0;
  title = {
    0: 'Выбор модели',
    1: 'Выбор периодов',
    2: 'Ввод параметров',
    3: '',
  };
  // //
  models = ['model1', 'model2'];
  model?: string;
  // //
  type: Types = 'Год';
  years: number[] = [];
  months: Month[] = [
    { id: 1, name: 'Январь' },
    { id: 2, name: 'Февраль' },
    { id: 3, name: 'Март' },
    { id: 4, name: 'Апрель' },
    { id: 5, name: 'Май' },
    { id: 6, name: 'Июнь' },
    { id: 7, name: 'Июль' },
    { id: 8, name: 'Август' },
    { id: 9, name: 'Сентябрь' },
    { id: 10, name: 'Октябрь' },
    { id: 11, name: 'Ноябрь' },
    { id: 12, name: 'Декабрь' },
  ];
  quarters: Quarter[] = [
    { id: 'Q1', name: '1 квартал' },
    { id: 'Q2', name: '2 квартал' },
    { id: 'Q3', name: '3 квартал' },
    { id: 'Q4', name: '4 квартал' },
  ];
  periods: Periods[] = [];
  fields: IUserField[] = []

  ngOnInit() {
    this.choiceModel(this.models[0]);
    this.fillYears();
  }
  fillYears() {
    const current_year = new Date().getFullYear();
    const stop_year = 2019;
    for (let year = current_year; year >= stop_year; year--) {
      this.years.push(year);
    }
  }
  choiceModel(item: string) {
    this.model = item;
    this.interface = 1;
  }
  goFillFields() {
    this.interface = 2;
  }
  goBack() {
    if (this.interface == 0) this.router.navigate(['home']);
    else this.interface--;
  }
  addPeriod() {
    this.periods.push({ year: this.years[0] });
  }
  delPeriod(i: number) {
    this.periods.splice(i, 1);
  }

  test(a: any) {
    console.log(a);
    setTimeout(() => {
      console.log(this.type);
    }, 200);
  }
}

interface IUserField {
  
}
type Types = 'Год' | 'Квартал' | 'Месяц';
interface Periods {
  year: number;
  dop?: string;
}
interface Month {
  id: number;
  name: string;
}
interface Quarter {
  id: string;
  name: string;
}
type front = 0 | 1 | 2 | 3;
// 0 - выбор модели
// 1 - выбор периода
// 2 - ввод данных
// 3 - анализ
