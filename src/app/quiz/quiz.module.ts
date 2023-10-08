import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionComponent } from './question/question.component';
import { QuizIndexComponent } from './quiz-index/quiz-index.component';



@NgModule({
  declarations: [
    QuestionComponent,
    QuizIndexComponent

  ],
  exports: [
    QuestionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  // schemas:[
  //   CUSTOM_ELEMENTS_SCHEMA
  // ]
})
export class QuizModule { }
