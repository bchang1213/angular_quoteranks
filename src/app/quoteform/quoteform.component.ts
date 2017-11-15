import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from './../quote';
@Component({
  selector: 'app-quoteform',
  templateUrl: './quoteform.component.html',
  styleUrls: ['./quoteform.component.css']
})
export class QuoteformComponent implements OnInit {
  quote: Quote;

  @Output() outputQuote = new EventEmitter();

  constructor() { }

  ngOnInit() {
  	this.quote = new Quote();
  }

  onSubmit(){
  	console.log(this.quote);
  	this.outputQuote.emit(this.quote);
  	this.quote = new Quote();
  }

}
