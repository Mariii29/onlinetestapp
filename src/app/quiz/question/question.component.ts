import { Component, Input, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
})
export class QuestionComponent {
  @Input() question: any;
  chosenAnswer: string | null = null;

  constructor(private quizService: QuizService) {}

  onAnswerSelected(answer: string): void {
    this.chosenAnswer = answer;
    // Update the chosenAnswer in session storage for the respective question
    if (this.question) {
      this.question.chosenAnswer = this.chosenAnswer;
      // Update the entire questions array in session storage
      const storedQuestions = sessionStorage.getItem('questions');
      if (storedQuestions) {
        const questions = JSON.parse(storedQuestions);
        const index = questions.findIndex((q: any) => q.id === this.question.id);
        if (index !== -1) {
          questions[index] = this.question;
          sessionStorage.setItem('questions', JSON.stringify(questions));
        }
      }
    }
  }
}
