import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { OurMagazineComponent } from './our-magazine/our-magazine.component';


const routes: Routes = [
    
    { path: 'about-us', component: AboutUsComponent },
    { path: 'our-magazine', component: OurMagazineComponent },
    { path: '**', component: AboutUsComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }