import { Component } from '@angular/core';
import { NgRedux, select } from 'ng2-redux';
import { IAppState } from './store';
import { INCREMENT } from './actions';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'abe-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'abe';
  counter = 0;
  @select('counter') counter$: Observable<number>;
  
  constructor(private ngRedux: NgRedux<IAppState>) {

  }

  increment() {
    console.log(this.ngRedux);
    this.ngRedux.dispatch({ type: INCREMENT });
    //console.log(this.ngRedux.select("rootReducer"));
  }
}
