import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' // <-- FIX 2: Change HttpClientModule to HttpClient
import { Observable, throwError } from 'rxjs'; // <-- FIX 3: Add throwError
import { map, catchError } from 'rxjs/operators'; // <-- FIX 3: Import map and catchError operators
import { Conversao, ConversaoResponse } from '../models'; // <-- FIX 1: Import Conversao (assuming it's in '../models')


@Injectable({
  providedIn: 'root'
})
export class ConversorService {

  // NOTE: The fixer.io free tier might require an access key and uses 'api.apilayer.com/fixer'
  //       Ensure your BASE_URL and API are correct and accessible.
  //       The original URL "http://api.fixer.io/latest" is often deprecated.
  private readonly BASE_URL = "http://api.fixer.io/latest?0138904fb6412bdba3aafede67e6c015"; 

  // FIX 2: Inject HttpClient instead of HttpClientModule
  constructor(private http: HttpClient) { } 


  converter(conversao: Conversao): Observable<ConversaoResponse> {
    let params = `?base=${conversao.moedaDe}&symbols=${conversao.moedaPara}`

    return this.http
      .get<ConversaoResponse>(this.BASE_URL + params) // FIX 3: .get is now on HttpClient. Use <T> for type safety
      .pipe( // <-- FIX 3: Use .pipe() for RxJS operators
        // .map(response => response.json() as ConversaoResponse) is old/incorrect
        // HttpClient.get() already returns the JSON object, so direct type casting is usually enough.
        // If the data structure requires transformation, use a map operator:
        // map(response => response as ConversaoResponse), 
        
        // FIX 3: Use catchError operator inside pipe
        catchError(error => { 
          console.error('API Error:', error); // Log the error for debugging
          return throwError(() => error); // <-- FIX 3: Use throwError
        })
      );
  }

  cotacaoPara(ConversaoResponse: ConversaoResponse,
      conversao: Conversao): number {
    if (ConversaoResponse === undefined) {
      return 0;
    }

    return ConversaoResponse.rates[conversao.moedaPara];
  }
  

  cotacaoDe(conversaoResponse: ConversaoResponse,
      conversao: Conversao): string {
    if (conversaoResponse === undefined) {
      return '0';
    }
    return (1 / conversaoResponse.rates[conversao.moedaPara])
      .toFixed(4);
  }

  dataCotacao(conversaoResponse: ConversaoResponse): string {
    if (conversaoResponse === undefined) {
      return '';
    }
    return conversaoResponse.date;
  }
}

// NOTE: You would also need to ensure that 'HttpClientModule' is imported
// in your main Angular module (e.g., app.module.ts)
// in the 'imports' array for this service to work.
// e.g., imports: [ HttpClientModule, ... ]