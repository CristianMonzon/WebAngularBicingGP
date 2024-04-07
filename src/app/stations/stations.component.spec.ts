
import { RouterModule } from '@angular/router';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StationsComponent } from './stations.component';

import { gpRoutesMap } from '../../domain/routes';


describe('StationsComponent', () => {

  let component: StationsComponent;
  let fixture: ComponentFixture<StationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
          RouterModule.forRoot(gpRoutesMap)
      ],
      declarations:[StationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('ShouldCreate', () => {
    expect(component).toBeTruthy();
  }); 

  it('TotalStation_IsEqual_501',() =>{

    //Action
    let stations = fixture.componentInstance.stations;

    //Assert
    const expectResult = 501;
    expect(stations.length).toBe(expectResult);
  });

  it('FirstLinkStation',() =>{

    //Action
    let stations = fixture.componentInstance.stations;
    let firstLink = fixture.componentInstance.GetLink(stations[0]);
    
    //Assert
    const actualResult = firstLink;
    const expectResult = "/station/1";
    expect(actualResult).toBe(expectResult);
  });
  

});
