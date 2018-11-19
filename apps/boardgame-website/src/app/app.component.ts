import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {
  BOARDGAME_BY_ID_ENDPOINT,
  Boardgame
} from '@boardgame-website/boardgame/contract';

@Component({
  selector: 'boardgame-website-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'boardgame-website';

  data = this.http.get<Boardgame>(BOARDGAME_BY_ID_ENDPOINT.replace(':id', '1'));

  constructor(private http: HttpClient) {}
}
