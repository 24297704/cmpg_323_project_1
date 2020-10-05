import { Component, OnInit } from '@angular/core'
import { ApiService } from '../../shared/services'

@Component({
  selector: 'app-home',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  joke: string
  loading: boolean = false

  constructor (public apiService: ApiService) {
  }

  ngOnInit (): void {
  }

  getJoke() {
    this.loading = true
    this.apiService.getJoke().subscribe((res: any) => {
      this.loading = false
      this.joke = res.content
    })
  }

}
