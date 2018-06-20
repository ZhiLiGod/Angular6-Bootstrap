import { Component } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { IAppState } from './store';
import { INCREMENT } from './actions';

@Component({
  selector: 'abe-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'abe';
  counter = 0;
  
  constructor(private ngRedux: NgRedux<IAppState>) {

  }

  increment() {
    //this.counter++;
    this.ngRedux.dispatch({ type: INCREMENT });
  }
}
