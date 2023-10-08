import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { QuizModule } from './quiz/quiz.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { CardListComponent } from './card-list/card-list.component'
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card'
import {MatIconModule} from '@angular/material/icon'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReviewModule } from './review/review.module';
import { ResultModule } from './result/result.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardListComponent,
  ],
  imports: [
    BrowserModule,
    MatSlideToggleModule,
    QuizModule,
    ReviewModule,
    ResultModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatCardModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
