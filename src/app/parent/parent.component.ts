import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {

  public queOptions: any = {
    question: 'Neel, Do you have work completed?',
    options: [],
  }
  public feedBack: string = '';
  public reply: string = '';
  public feedBackBg: boolean = false;
  public toggle: boolean = false;
  public buttonName:string = 'Show Child';

  constructor(){ 
    this.queOptions.options = ['yes', 'no']
    console.log('parent constructor :>> ');
  }
  ngOnChange(){
    console.log('parent Changes :>> ', this.buttonName);
    this.buttonName = 'Close Child'
  }
  showExpression(event: any) {

    event == 'yes' ? this.feedBack = 'Very Good' : this.feedBack = 'Very Bad';
    event == 'yes' ? this.feedBackBg = true : this.feedBackBg = false;
    setTimeout(() => {
      event == 'yes' ? this.reply = 'Thank You!!!' : this.reply = 'Sorry...';
    }, 500);
  }

  sum(a: number, b: number): number {
    return a + b;
  }

  showChild(){
    this.buttonName = this.toggle ? 'Show Child' : 'Close Child'
    this.toggle = !this.toggle;
  }

}