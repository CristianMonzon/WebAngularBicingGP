import { ParamMap,convertToParamMap, RouterModule, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { gpRoutesMap,gpParamStationId } from '../../domain/routes';

import { StationDetailComponent } from './station-detail.component';

describe('StationDetailComponent', () => {
  let component: StationDetailComponent;
  let fixture: ComponentFixture<StationDetailComponent>;
  let mockActiveRoute: Partial<ActivatedRoute>;

  const paramStationId: ParamMap = convertToParamMap({ [gpParamStationId]: '2' });

  beforeEach(async () => {
    mockActiveRoute = {
      snapshot: {
        paramMap: paramStationId // Simula un paramMap con un parámetro 'StationId'
      } as ActivatedRouteSnapshot
    };

    await TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot(gpRoutesMap)
      ],
      declarations: [
        StationDetailComponent
      ],
      providers: [
        { provide: ActivatedRoute, useValue: mockActiveRoute }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('GetValuesStation_Id=2', () => {
    const expectedId=2;
    expect(component.station?.id).toBe(expectedId);

    const expectedAddress="C/ ROGER DE FLOR, 126";
    expect(component.station?.address).toBe(expectedAddress);
  });

});
