import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-review-index',
  templateUrl: './review-index.component.html',
  styleUrls: ['./review-index.component.css']
})
export class ReviewIndexComponent {
  questions: any[] = [];

  constructor(private router: Router) { }

  submitQuiz(): void {
    // Check if all questions are answered
    const unansweredQuestions = this.questions.filter(
      (question) => question.chosenAnswer === null
    );

    if (unansweredQuestions.length === 0) {
      // All questions are answered, set a new session key
      sessionStorage.setItem('submitted', 'true');
      this.router.navigate(['/result']);
    } else {
      // Some questions are unanswered, display an alert
      alert('Please finish all the questions before submitting.');
    }
  }

  ngOnInit(): void {
    const storedQuestions = sessionStorage.getItem('questions');
    if (storedQuestions) {
      this.questions = JSON.parse(storedQuestions);
    }

  }

}
