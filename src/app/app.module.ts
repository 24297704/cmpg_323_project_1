import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HomeComponent } from './pages/home/home.component'
import { FooterComponent, HeaderComponent } from './shared/components'
import { SkillsComponent } from './pages/skills/skills.component'
import { HttpClientModule } from '@angular/common/http'
import { CommonModule } from '@angular/common'
import { ApiService } from './shared/services'
import { ExperienceComponent } from './pages/experience/experience.component'
import { ProjectsComponent } from './pages/projects/projects.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SkillsComponent,
    ExperienceComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
