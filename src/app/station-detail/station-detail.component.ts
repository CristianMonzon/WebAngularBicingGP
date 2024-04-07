import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Station, stations} from '../../domain/station';

import { gpParamStationId } from '../../domain/routes';


@Component({
  selector: 'app-station-detail',
  standalone: false,
  templateUrl: './station-detail.component.html'  
})

export class StationDetailComponent implements OnInit
{
  station : Station | undefined;


  //Injection Dependencias
  constructor(private activatedRoute : ActivatedRoute)
  {
  }

  ngOnInit(): void {
    const paramstation = this.getParameter();
    this.station = stations.find((c) => c.id== paramstation);
  }

  getParameter() : number {
    const routeParam = this.activatedRoute.snapshot.paramMap;
    return Number(routeParam.get(gpParamStationId));
  }

}
