import { Component, Input } from '@angular/core';
import { Keg } from '../models/keg.model';

@Component({
  selector: 'app-keg',
  templateUrl: './keg.component.html',
  styleUrls: ['./keg.component.css']
})

export class KegComponent {
  showDetails: boolean = false;
  @Input() childKegList: Keg[];
  // @Input() keg: Keg;

  clickFunc() {
    this.showDetails = !this.showDetails;
  }

  
}
