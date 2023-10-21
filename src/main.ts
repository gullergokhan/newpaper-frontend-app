import { CommonModule } from "@angular/common";
import { importProvidersFrom } from "@angular/core";
import { bootstrapApplication, BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app/app.component";
import { provideHttpClient } from '@angular/common/http'
import { NgxSpinnerModule } from "ngx-spinner";
import { NgxPaginationModule } from "ngx-pagination";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    importProvidersFrom(
      CommonModule,
      RouterModule.forRoot([
      
        {
          path: "",
          loadComponent: ()=> import("./app/components/layouts/layouts.component")
                        .then(c=> c.LayoutsComponent),
          children: [
            {
              path: "",
              loadComponent:()=> import("./app/components/home/home.component")
                        .then(c=> c.HomeComponent)
            },
            {
              path: "about",
              loadComponent:()=> import("./app/components/about/about.component")
                        .then(c=> c.AboutComponent)
            },
            {
              path: "business",
              loadComponent: ()=> import("./app/components/business/business.component")
                        .then(c=> c.BusinessComponent)
            },
            {
              path: "entertainment",
              loadComponent: ()=> import("./app/components/entertainment/entertainment.component")
                        .then(c=> c.EntertainmentComponent)
            },  {
              path: "general",
              loadComponent: ()=> import("./app/components/general/general.component")
                        .then(c=> c.GeneralComponent)
            },  {
              path: "health",
              loadComponent: ()=> import("./app/components/health/health.component")
                        .then(c=> c.HealthComponent)
            },  {
              path: "science",
              loadComponent: ()=> import("./app/components/science/science.component")
                        .then(c=> c.ScienceComponent)
            },  {
              path: "sports",
              loadComponent: ()=> import("./app/components/sports/sports.component")
                        .then(c=> c.SportsComponent)
            },  {
              path: "technology",
              loadComponent: ()=> import("./app/components/technology/technology.component")
                        .then(c=> c.TechnologyComponent)
            },
            
          ]
        },
        {
          path: "**",
          loadComponent: ()=> import("./app/components/not-found/not-found.component")
                        .then(c=> c.NotFoundComponent)
        }
      ]),
      BrowserModule,
      NgxPaginationModule,
      BrowserAnimationsModule,
      NgxSpinnerModule
    )
  ]
})