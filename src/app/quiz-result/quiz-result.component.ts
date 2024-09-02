import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-quiz-result',
  templateUrl: './quiz-result.component.html',
  styleUrls: ['./quiz-result.component.scss']
})
export class QuizResultComponent implements OnInit {

  score: number = 0;
  nbAnsweredQuestion: number = 0;

  constructor(
    private route: ActivatedRoute, 
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log('RESULT-QUIZ - OnInit')
    const scoreParam = this.route.snapshot.paramMap.get('score');
    const answeredParam = this.route.snapshot.paramMap.get('nbAnsweredQuestion');

    this.score = scoreParam ? parseInt(scoreParam, 10) : 0;
    this.nbAnsweredQuestion = answeredParam ? parseInt(answeredParam, 10) : 0;
  }

  returnHome(){
    console.log('QUIZ-RESULT - returnHome')
    this.router.navigate(['/quiz']);
  }

}
