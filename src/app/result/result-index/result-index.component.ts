import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-result-index',
  templateUrl: './result-index.component.html',
  styleUrls: ['./result-index.component.css']
})
export class ResultIndexComponent {
  @Input() question: any;

  questions: any[] = [];
  submitted : boolean = false;

  isAnswerCorrect(): boolean {
    return this.question.chosenAnswer === this.question.correctAnswer;
  }

  ngOnInit(): void {
    const storedQuestions = sessionStorage.getItem('questions');
    const submitted = sessionStorage.getItem('submitted')
    if (storedQuestions && submitted) {
      this.questions = JSON.parse(storedQuestions);
      this.submitted = true;
    }

  }


}
