import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent {

  cards = [
    {
      title: 'Quiz',
      label: 'Quiz',
      description: 'Click Here to view the quiz questions.',
      url: '/quiz' // Define the route path for Quiz
    },
    {
      title: 'Review',
      label: 'Review',
      description: 'Review the answers of quiz done',
      url: '/review' // Define the route path for Review
    },
    {
      title: 'Result',
      label: 'Result',
      description: 'Here are the results of the quiz done ',
      url: '/result' // Define the route path for Result
    }
  ];

}
