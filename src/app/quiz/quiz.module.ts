import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionComponent } from './question/question.component';
import { QuizIndexComponent } from './quiz-index/quiz-index.component';
import { FormsModule } from '@angular/forms';



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
    FormsModule
  ]
})
export class QuizModule { }
