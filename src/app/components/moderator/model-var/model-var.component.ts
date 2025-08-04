import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-model-var',
  standalone: true,
  imports: [],
  templateUrl: './model-var.component.html',
  styleUrl: './model-var.component.scss',
})
export class ModelVarComponent {
  @Input({ required: true }) data!: IModelVar;
}
export interface IModelVar {
  name: string; // Название
  shortname: string; // Коротокое название
  metric: string; // в чём измеряется
  computed?: string; // как вычисляется (если вычисляемое)
}
