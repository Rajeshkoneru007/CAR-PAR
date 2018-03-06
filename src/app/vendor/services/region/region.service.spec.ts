import { TestBed, inject } from '@angular/core/testing';

import { RegionService } from './region.service';

import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing'

import { HttpClient} from '@angular/common/http';

fdescribe('RegionService', () => {
  let httpClient:HttpClient;
  let httpTestingController:HttpTestingController;
  let regionService:RegionService

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RegionService]
    });
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should be created', inject([RegionService], (service: RegionService) => {
    expect(service).toBeTruthy();
  }));

  it('can test HttpClient.get',() =>{
    regionService = TestBed.get(RegionService);
    const testData = [{
      "code": "Region 1"
     },
     {
      "code": "Region 1"
     },
     {
      "code": "Region 3"
     },
     {
      "code": "Region 4"
     }]
    httpClient.get(regionService.regionURL).subscribe((data) => {
      expect(data).toEqual(testData)
    });
    const req = httpTestingController.expectOne(regionService.regionURL);
    expect(req.request.method).toEqual('GET');
    req.flush(testData);
    httpTestingController.verify();
  })

});
