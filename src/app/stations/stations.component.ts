import { Component } from '@angular/core';
import { Station,stations } from '../../domain/station';

@Component({
  selector: 'app-stations',
  standalone: false,
  templateUrl: './stations.component.html'  

})

export class StationsComponent {

  stations = stations;

  GetLink(pStation : Station):string {
    return '/station/'+pStation.id;
  }

}
