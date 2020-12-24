import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeElecteursComponent } from './liste-electeurs.component';

describe('ListeElecteursComponent', () => {
  let component: ListeElecteursComponent;
  let fixture: ComponentFixture<ListeElecteursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeElecteursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeElecteursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
