import { Component,Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz-index',
  templateUrl: './quiz-index.component.html',
  styleUrls: ['./quiz-index.component.css']
})
export class QuizIndexComponent implements OnInit {
  @Input() question: any; // Input property to receive the question
 chosenAnswer: string | null = null; // Initialize chosenAnswer

 questions: any[] = []; // Initialize as an empty array



 constructor() {}

//  ngOnInit(): void {
//    // Load the questions data from session storage
//    const storedQuestions = sessionStorage.getItem('questions');
//    if (storedQuestions) {
//      const questions = JSON.parse(storedQuestions);
//      // Find the corresponding question using a unique identifier (e.g., question ID)
//      if (this.question && this.question.id) {
//        const matchingQuestion = questions.find((q: any) => q.id === this.question.id);
//        if (matchingQuestion) {
//          this.question = matchingQuestion;
//        }
//      }
//    }
//  }

 ngOnInit(): void {
    // Load questions from session storage
    const storedQuestions = sessionStorage.getItem('questions');
    if (storedQuestions) {
      this.questions = JSON.parse(storedQuestions);
    }
  }

}
