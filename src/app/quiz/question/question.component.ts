import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
   @Input() question: any; // Input property to receive the question
  chosenAnswer: string | null = null; // Initialize chosenAnswer

  constructor() {}

  ngOnInit(): void {
    // Load the questions data from session storage
    const storedQuestions = sessionStorage.getItem('questions');
    if (storedQuestions) {
      const questions = JSON.parse(storedQuestions);
      // Find the corresponding question using a unique identifier (e.g., question ID)
      if (this.question && this.question.id) {
        const matchingQuestion = questions.find((q: any) => q.id === this.question.id);
        if (matchingQuestion) {
          this.question = matchingQuestion;
        }
      }
    }
  }

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
