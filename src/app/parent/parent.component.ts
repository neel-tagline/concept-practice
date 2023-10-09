import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {

public queOptions : any = {
    question : 'Neel, Do you have work completed?',
    options : [ 'yes', 'no'],
  }

public feedBack: string = '';
public reply: string = '';
public feedBackBg: boolean = false;

showExpression(event:any){
  event == 'yes' ? this.feedBack = 'Very Good' : this.feedBack = 'Very Bad';
  event == 'yes' ? this.feedBackBg = true : this.feedBackBg = false;
  setTimeout(() => {
    event == 'yes' ? this.reply = 'Thank You!!!' : this.reply = 'Sorry...';
  }, 500);
  console.log("Event>>>>>>",event);
}
}
