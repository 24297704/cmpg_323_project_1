import { Component, OnInit } from '@angular/core'
import { ApiService } from '../../services'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  weather: { temp: any, sky: any }

  constructor (private apiService: ApiService) { }

  ngOnInit (): void {
    this.apiService.getWeather().subscribe((res: any) => {
      this.weather = { temp: res.main.temp, sky: res.weather[0].main }
    })
  }

}
