import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mon-projet-blog';

  postItems = [
    {
       title: 'Mon premier post',
      date: new Date(),
      content: 'Ceci est un test exemple 1'
    },
    {
      title: 'Mon deuxième post',
      date: new Date(),
      content: 'Ceci est un test exemple 2'
    },
    {
      title: 'Mon troisième post',
      date: new Date(),
      content: 'Ceci est un test exemple 3'
    }
  ];
}
