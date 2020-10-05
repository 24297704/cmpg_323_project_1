import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor (private http: HttpClient) { }

  getJoke () {
    return this.http.get('https://joke3.p.rapidapi.com/v1/joke', {
      headers: {
        'x-rapidapi-host': 'joke3.p.rapidapi.com',
        'x-rapidapi-key': '523ff2d6c7mshae999b555b81f1ep1bb411jsn08ed4f5e33ea'
      }
    })
  }
}
