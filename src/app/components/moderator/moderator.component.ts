import { Component } from '@angular/core';

@Component({
  selector: 'app-moderator',
  standalone: true,
  imports: [],
  templateUrl: './moderator.component.html',
  styleUrl: './moderator.component.scss'
})
export class ModeratorComponent {

}
export interface IFieldModel {
  name: string; // Название
  shortname: string; // Коротокое название
  metric: string; // в чём измеряется
  computed?: string // как вычисляется (если вычисляемое)
} 