import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent {
  constructor(private router: Router) {}

  score = 0;
  nbAnsweredQuestion = 0;
  doShowScore = false;

  quiz: {
    [key: string]: {
      question: string;
      choices: { A: string; B: string; C: string; D: string };
      reponse: string;
      isAnswered: boolean;  // Ajout du champ isAnswered
    }
  } = {
    question1: {
        question: "Quel est le nom de la capitale du Nilfgaard ?",
        choices: {
            A: "Vizima",
            B: "Oxenfurt",
            C: "Novigrad",
            D: "Nilfgaard"
        },
        reponse: "A",
        isAnswered: false
    },
    question2: {
        question: "Quel est le véritable nom de Geralt ?",
        choices: {
            A: "Geralt de Kaer Morhen",
            B: "Geralt d'Aedirn",
            C: "Geralt de Rivia",
            D: "Geralt du Nilfgaard"
        },
        reponse: "C",
        isAnswered: false
    },
    question3: {
        question: "Quel est le nom de l'épée en argent de Geralt ?",
        choices: {
            A: "Aerondight",
            B: "Zireael",
            C: "Gwyhyr",
            D: "Iris"
        },
        reponse: "A",
        isAnswered: false
    },
    question4: {
        question: "Quel est le nom de la fille adoptive de Geralt ?",
        choices: {
            A: "Yennefer",
            B: "Triss",
            C: "Ciri",
            D: "Keira"
        },
        reponse: "C",
        isAnswered: false
    },
    question5: {
        question: "Quel est le surnom donné à Geralt par les paysans ?",
        choices: {
            A: "Le Boucher de Blaviken",
            B: "L'Ange de la Mort",
            C: "Le Loup Blanc",
            D: "L'Épée de Zerrikania"
        },
        reponse: "A",
        isAnswered: false
    },
    question6: {
        question: "Quel est le signe magique que Geralt utilise pour repousser ses ennemis ?",
        choices: {
            A: "Igni",
            B: "Aard",
            C: "Yrden",
            D: "Quen"
        },
        reponse: "B",
        isAnswered: false
    },
    question7: {
        question: "Quel est le nom de la guilde de sorceleurs à laquelle appartient Geralt ?",
        choices: {
            A: "L'École du Chat",
            B: "L'École du Loup",
            C: "L'École de la Vipère",
            D: "L'École de l'Ours"
        },
        reponse: "B",
        isAnswered: false
    },
    question8: {
        question: "Quelle créature Geralt doit-il affronter lors de la quête 'Le Seigneur des Bois' à Velen ?",
        choices: {
            A: "Un Griffon",
            B: "Une Strige",
            C: "Un Leshen",
            D: "Un Fiellon"
        },
        reponse: "C",
        isAnswered: false
    },
    question9: {
        question: "Quelle est la profession de Jaskier, le meilleur ami de Geralt ?",
        choices: {
            A: "Sorcier",
            B: "Chasseur de monstres",
            C: "Poète et barde",
            D: "Marchand"
        },
        reponse: "C",
        isAnswered: false
    },
    question10: {
        question: "Quel est le nom de l'ennemie qui pourchasse Ciri ?",
        choices: {
            A: "La Chasse Sanguinaire",
            B: "La Chasse Fantôme",
            C: "La Chasse Sauvage",
            D: "La Chasse Maudite"
        },
        reponse: "C",
        isAnswered: false
    }
  };

  handleAnswer(questionKey: string, answerKey: string){
    console.log('QUIZ - HandleAnswer');
    if(!this.quiz[questionKey].isAnswered){
      const correctAnswer = this.quiz[questionKey].reponse
      if(answerKey === correctAnswer) {
        this.score = this.score + 1;
      }
      this.quiz[questionKey].isAnswered = true
      this.nbAnsweredQuestion = this.nbAnsweredQuestion + 1;
    }
  }

  handleShowScore(){
    console.log('QUIZ - handleShowScore')
    if(this.nbAnsweredQuestion > 0){
      // this.doShowScore = true;
      this.router.navigate(['/result', this.score, this.nbAnsweredQuestion]);

    }
  }

  debugQuiz(){
    console.log('[DEBUG]');
    console.log('score ', this.score);
    console.log('doShowScore ', this.doShowScore);
    console.log('nbAnsweredQuestion ', this.nbAnsweredQuestion);
    console.log('Quiz state', this.quiz);
  }

}
