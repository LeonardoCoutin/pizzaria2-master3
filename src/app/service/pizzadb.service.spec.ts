import { TestBed } from '@angular/core/testing';

import { PizzadbService } from './pizzadb.service';

describe('PizzadbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PizzadbService = TestBed.get(PizzadbService);
    expect(service).toBeTruthy();
  });
});
