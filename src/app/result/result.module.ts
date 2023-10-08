import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultIndexComponent } from './result-index/result-index.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ResultIndexComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ResultModule { }
