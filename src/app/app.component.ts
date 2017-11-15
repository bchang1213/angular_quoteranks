import { Component } from '@angular/core';
import { Quote } from './quote';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes:Quote[] = [
    {text: 'I never am really satisfied that I understand anything; because, understand it well as I may, my comprehension can only be an infinitesimal fraction of all I want to understand about the many connections and relations which occur to me.', author: 'Ada Lovelace', rating: 25},
    {text: 'To be, or not to be', author: 'Prince Hamlet', rating: 2},
    {text: 'There are risks and costs to action. But they are far less than the long range risks of comfortable inaction.', author: 'John F. Kenndy', rating: 23}
  ];

  createQuote(quote) {
    console.log("Added quote to array:", quote);
    this.quotes.push(quote);
  }

  deleteQuote(quote) {
    const idx = this.quotes.indexOf(quote);
    this.quotes.splice(idx, 1);
  }

}
