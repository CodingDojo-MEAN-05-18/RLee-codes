import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ScoreService } from '../score.service';
import { User } from '../user';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {

  constructor(private scoreService: ScoreService) { }

  gitName: string;
  user: User;
  score: number;
  comment: string;
  found: boolean;
  color: string;

  OnSubmit(event: Event, form: NgForm) {
    event.preventDefault;
    console.log("form submitted", this.gitName);
    this.scoreService.getUser(this.gitName)
      .subscribe(
      success => {
        this.found = true;
        this.user = new User(
          success['alias'],
          success['followers'],
          success['public_repos']
        );
        console.log(this.user);
        this.setComment();
      },
        //handle errors
      error => {
        console.log('Error retrieving user.', error.error['message'])
        this.score = null;
        this.user = null;
        this.comment = null;
        this.found = false;
      });
    form.reset();
  }

  setComment() {
    //calculate the score, set the comment and the color
    this.score = this.user.public_repos + this.user.followers;
    if (this.score < 20) {
      this.comment = 'Needs Work!'
      this.color = 'red';
    } else if (this.score >= 20 && this.score < 50) {
      this.comment = 'A decent start!';
      this.color = 'orange';
    } else if (this.score >= 50 && this.score < 100) {
      this.comment = 'Doing good!';
      this.color = 'black';
    } else if (this.score >= 100 && this.score < 200) {
      this.comment = 'Great job!';
      this.color = 'green';
    } else if (this.score >= 200) {
      this.comment = 'Github Elite!';
      this.color = 'blue';
    }


  }

  ngOnInit() {
  }

}
