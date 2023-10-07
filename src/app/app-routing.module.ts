import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizIndexComponent } from './quiz/quiz-index/quiz-index.component';
import { ReviewIndexComponent } from './review/review-index/review-index.component';
import { ResultIndexComponent } from './result/result-index/result-index.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  // { path: '', component: AppComponent },
  { path: 'quiz', component: QuizIndexComponent },
  { path: 'review', component: ReviewIndexComponent },
  { path: 'result', component: ResultIndexComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
