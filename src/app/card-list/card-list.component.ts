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
      url: '/quiz'
    },
    {
      title: 'Review',
      label: 'Review',
      description: 'Review the answers of quiz done',
      url: '/review'
    },
    {
      title: 'Result',
      label: 'Result',
      description: 'Here are the results of the quiz done ',
      url: '/result'
    }
  ];

}
