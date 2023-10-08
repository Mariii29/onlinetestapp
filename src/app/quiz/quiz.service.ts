import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private questions = [
    {
      id: 1,
      question: 'What is the capital of France?',
      options: ['London', 'Berlin', 'Madrid', 'Paris'],
      correctAnswer: 'Paris',
      chosenAnswer: null
    },
    {
      id: 2,
      question: 'Which planet is known as the Red Planet?',
      options: ['Earth', 'Jupiter', 'Mars', 'Venus'],
      correctAnswer: 'Mars',
      chosenAnswer: null
    },
    {
      id: 3,
      question: 'What is the largest mammal in the world?',
      options: ['Elephant', 'Giraffe', 'Blue Whale', 'Hippopotamus'],
      correctAnswer: 'Blue Whale',
      chosenAnswer: null
    },
    {
      id: 4,
      question: 'Which gas do plants absorb from the atmosphere?',
      options: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Hydrogen'],
      correctAnswer: 'Carbon Dioxide',
      chosenAnswer: null
    },
    // New Questions
    {
      id: 5,
      question: 'Which element has the chemical symbol "H"?',
      options: ['Helium', 'Hydrogen', 'Hassium', 'Hafnium'],
      correctAnswer: 'Hydrogen',
      chosenAnswer: null
    },
    {
      id: 6,
      question: 'What is the largest planet in our solar system?',
      options: ['Earth', 'Saturn', 'Jupiter', 'Uranus'],
      correctAnswer: 'Jupiter',
      chosenAnswer: null
    },
    {
      id: 7,
      question: 'Which country is known as the Land of the Rising Sun?',
      options: ['China', 'Korea', 'Japan', 'Thailand'],
      correctAnswer: 'Japan',
      chosenAnswer: null
    },
    {
      id: 8,
      question: 'What is the smallest prime number?',
      options: ['0', '1', '2', '3'],
      correctAnswer: '2',
      chosenAnswer: null
    },
    {
      id: 9,
      question: 'Which gas do humans exhale when they breathe out?',
      options: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Hydrogen'],
      correctAnswer: 'Carbon Dioxide',
      chosenAnswer: null
    },
    {
      id: 10,
      question: 'What is the closest star to Earth?',
      options: ['Vega', 'Sirius', 'Proxima Centauri', 'Betelgeuse'],
      correctAnswer: 'Proxima Centauri',
      chosenAnswer: null
    }
  ];

  constructor() {
    // Load questions from session storage during service initialization
    const storedQuestions = sessionStorage.getItem('questions');
    if (storedQuestions) {
      this.questions = JSON.parse(storedQuestions);
    }
  }

  getQuestions(): any[] {
    return this.questions;
  }

  setQuestions(questions: any[]): void {
    this.questions = questions;
    // Save updated questions to session storage
    sessionStorage.setItem('questions', JSON.stringify(questions));
  }

  // Add methods for getting and updating chosen answers if needed
}
