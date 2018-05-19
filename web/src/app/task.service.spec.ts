import { TestBed, inject } from '@angular/core/testing';

import { TaskService } from './task.service';

describe('TaskService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaskService]
    });
  });

  it('should be created', inject([TaskService], (service: TaskService) => {
    expect(service).toBeTruthy();
  }));

  it('should provide tasks', inject([TaskService], (service: TaskService) => {
    expect(service.getTasks().length).toBe(0); // TODO: Figure out how to inject stuff into the service for the test.
  }));
});
