import { Component } from '@angular/core';
import { Keg } from './models/keg.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: string = 'A list of our beers on tap!';

  masterKegList: Keg[] = [
new Keg("coors", "dark", 5, 15),
new Keg("michelob", "medium", 6, 13),
new Keg("bud", "light", 7, 12),
  ];

  addKegToList(newKeg: Keg) {
    console.log(newKeg);
    this.masterKegList.push(newKeg);
  }

  
}
