import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private router : Router){}
  isRoute1Active(): boolean {
    // Check if the current route is 'route1'
    return this.router.url === '/';
  }
  title = 'Online Test App';
  questions = [
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
    }
  ];

  ngOnInit(): void {
    currentRoute: '';
      sessionStorage.setItem('questions', JSON.stringify(this.questions))
  }


}
