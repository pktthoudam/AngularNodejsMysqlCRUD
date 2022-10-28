import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persons } from './persons';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private httpClient:HttpClient) { }
  
  apiUrl="http://localhost:3000/persons"

  postPerson(body:any):Observable<Persons>{
    return this.httpClient.post<Persons>(`${this.apiUrl}`, body)
  };

  getPersons():Observable<Persons>{
    return this.httpClient.get<Persons>(`${this.apiUrl}`)
  };

  getPersonById(id:number):Observable<Persons>{
    return this.httpClient.get<Persons>(`${this.apiUrl}/${id}`)
  };

  deletePerson(id:number):Observable<Persons>{
    return this.httpClient.delete<Persons>(`${this.apiUrl}/${id}`)
  }

  putPerson(id:number, body:Persons):Observable<Persons>{
    return this.httpClient.put<Persons>(`${this.apiUrl}/${id}`, body)
  }
}
