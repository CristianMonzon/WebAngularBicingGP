import {StationsComponent} from '../app/stations/stations.component';
import {StationDetailComponent} from '../app/station-detail/station-detail.component';

export const gpParamStationId : string = "stationId";

export const gpRoutesMap = [
  { path: '', component: StationsComponent },
  { path: 'stations', component: StationsComponent },
  { path: 'station/:'+gpParamStationId, component:  StationDetailComponent},
];

