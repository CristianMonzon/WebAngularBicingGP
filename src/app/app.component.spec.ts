import { TestBed } from '@angular/core/testing';
import { ActivatedRoute,RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { StationsComponent } from './stations/stations.component';
import { StationDetailComponent } from './station-detail/station-detail.component';

import { gpRoutesMap } from '../domain/routes';


describe('AppComponent', () => {

  //Creo un objeto Partial de ActivatedRoute para el mock
  let mockActiveRoute: Partial<ActivatedRoute>;

  beforeEach(async () => {

    mockActiveRoute = {};

    await TestBed.configureTestingModule({
      imports: [
        TestBed,
        RouterModule.forRoot(gpRoutesMap)
    ],
      declarations:[
        AppComponent,
        AppHeaderComponent,
        AppFooterComponent,
        StationsComponent,
        StationDetailComponent
      ],
      providers: [
        { provide: ActivatedRoute, useValue: mockActiveRoute }
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it("should have the 'Bicing GP Angular Prototype' title", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Bicing GP Angular Prototype');
  });
});
