import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from './../quote'
@Component({
  selector: 'app-quotelist',
  templateUrl: './quotelist.component.html',
  styleUrls: ['./quotelist.component.css']
})
export class QuotelistComponent implements OnInit {
  
  @Input() quotes:Quote[];
  @Output() deleteQuoteEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  upVote(quote){
  	quote.rating++;
  }

  downVote(quote){
  	quote.rating--;
  }

  delete(quote){
  	this.deleteQuoteEvent.emit(quote);
  }

}
