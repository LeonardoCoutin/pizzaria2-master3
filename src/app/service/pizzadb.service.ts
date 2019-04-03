import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

const URL_API = `http://localhost:3000/Cardapio`;
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json;charset=utf-8'})
}

@Injectable({
  providedIn: 'root'
})


export class pizzadbService {

  constructor(private http: HttpClient) { }

  getPizzas():Observable<any>{
    return this.http.get(URL_API,httpOptions);
  }
  


  private handleError<T>(Operator = `operation`, result?: T){
      return (error:any):Observable<T> => {
        console.error(error); // log de error
        return of(result as T);
      }
    }}