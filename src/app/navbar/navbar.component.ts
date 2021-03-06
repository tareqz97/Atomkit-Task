import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  mainMenuListItem  = [
    {
      title: "About Us",
      redirectTo: "\about-us",
    },
    {
      title: "Our Magazine",
      redirectTo: "\our-magazine",
    },
    {
      title: "Multimedia",
      redirectTo: "\multimedia",
    },
    {
      title: "Community",
      redirectTo: "\community",
    },
    {
      title: "Activities",
      redirectTo: "\activities",
    },
    {
      title: "Contact us",
      redirectTo: "\contact-us",
    }
  ]
  constructor() { }
  
  ngOnInit(): void {
    
  }

}
