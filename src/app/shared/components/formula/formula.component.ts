import { Component, Input } from "@angular/core";
import {
  CdkDrag,
  CdkDropList,
  moveItemInArray,
  CdkDragDrop,
} from "@angular/cdk/drag-drop";
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: "app-formula",
  standalone: true,
  imports: [CdkDrag, CdkDropList, MatIconModule],
  templateUrl: "./formula.component.html",
  styleUrl: "./formula.component.scss",
})
export class FormulaComponent {
  @Input() vars: string[] = ["В", "ЧР", "ХЗ"];
  @Input() formula: string[] = ["="];
  operations: string[] = ["*", "/", "+", "-", "(", ")"];
  dropToFormula(event: CdkDragDrop<string[]>) {
    console.log(event);
    const item = event.item.element.nativeElement.innerText;
    if (!event.isPointerOverContainer) {
      if (
        (event.event.target as HTMLElement).classList.contains("trash") &&
        item != "="
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
      this.formula.push(item);
      moveItemInArray(
        event.container.data,
        this.formula.length - 1,
        event.currentIndex
      );
    }
  }
  // isOperation(s: string) {
  //   return this.operations.includes(s) || s === "=";
  // }
  // sortPredicate(index: number, item: CdkDrag<string>) {
  //   console.log(this.formula, item);
  //   if (this.formula == undefined) return true;
  //   console.log(index, item);
  //   if (index == 0) return true;
  //   const cur = item.element.nativeElement.innerText; // кто вставляется
  //   const pre = this.formula[index - 1]; // элемент перед вставкой
  //   console.log(this.isOperation(cur), this.isOperation(pre));

  //   return this.isOperation(cur) !== this.isOperation(pre);
  // }
}
