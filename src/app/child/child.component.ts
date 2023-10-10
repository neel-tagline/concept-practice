import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {

  @Input() options: any;
  @Input({ required: true }) feedBack: any;
  @Input() toggle :Boolean | undefined;
  @Output() toggleChange = new EventEmitter<any>();
  @Output() answer = new EventEmitter<string>();

  public arrayList: number[] = [1,2,3]

  constructor() {
    console.log('Constructorn here');
  }

  ngOnChanges(changes: SimpleChanges) {
    
    console.log('changes ===>>>:>> ', changes);
  }

  ngOnInit() {
    console.log('Ng on init');
    console.log('options :>> ', this.options);
    console.log('arrayList :>> ', this.arrayList);
  }

  ngDoCheck(){
    console.log('Do check');
  }

  ngAfterViewInit() {
    console.log("After view init is here");
  }


  public onAnswer(event: any): void {
    this.answer.emit(event.target.value);
  }

  childClose(){
    this.toggle = false;
    this.toggleChange.emit(this.toggle);
  }

  ngOnDestroy() {
    console.log('Component is destroyed');
  }
}
