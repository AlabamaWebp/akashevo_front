import { Component, Input } from '@angular/core';
import {
  CdkDrag,
  CdkDropList,
  moveItemInArray,
  CdkDragDrop,
} from '@angular/cdk/drag-drop';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-formula',
  standalone: true,
  imports: [CdkDrag, CdkDropList, MatIconModule],
  templateUrl: './formula.component.html',
  styleUrl: './formula.component.scss',
})
export class FormulaComponent {
  @Input() vars: string[] = [
    'В',
    'ЧР',
    'ХЗ',
    'g',
    'ЧР',
    'ХЗ',
    'g',
    'ЧР',
    'ХЗ',
    'g',
  ];
  @Input() formula: string[] = ['='];
  operations1: string[] = ['*', '/', '+', '-'];
  operations2: string[] = ['(', ')'];

  operations = [...this.operations1, ...this.formula, ...this.operations2];
  ngOnInit() {}
  dropToFormula(event: CdkDragDrop<string[]>) {
    console.log(event);
    const item = event.item.element.nativeElement.innerText;
    if (!event.isPointerOverContainer) {
      if (
        (event.event.target as HTMLElement).classList.contains('trash') &&
        item != '='
      )
        this.formula.splice(event.previousIndex, 1);
      return;
    }
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      this.formula.splice(event.currentIndex, 0, item);
    }
  }
  clear() {
    // this.formula = ['='];
    while (this.formula.length) this.formula.shift();
    this.formula.push('=');
  }
  // isOperation(s: string) {
  //   if (s == undefined) return undefined;
  //   return this.operations.includes(s) || s === "=";
  // }
  // sortPredicate = (index: number, item: CdkDrag<string>) => {
  //   if (this.formula == undefined) return true;
  //   if (index == 0) return true;
  //   const cur = item.element.nativeElement.innerText; // кто вставляется
  //   const pre = this.formula[index - 1]; // элемент перед вставкой
  //   const pos = this.formula[index + 1]; // элемент перед вставкой
  //   // console.log(this.isOperation(cur), this.isOperation(pre));

  //   return (
  //     this.isOperation(cur) !== this.isOperation(pre) &&
  //     this.isOperation(cur) !== this.isOperation(pos)
  //   );
  // };
}
