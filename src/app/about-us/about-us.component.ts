import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { ApiConfigService } from '../services/api-config.service';
import { Articles } from './articles.interface';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor(private apiConfigService : ApiConfigService) { }
  articlesData:Articles[] = [];
  ngOnInit(): void {
    this.showConfig();
  }
  showConfig() {
    this.apiConfigService.getaArticles()
    .pipe(
      map(responseData => {
        return responseData["articles"];
      })
    )
    .subscribe((data: Articles) => this.articlesData = [{
          title: data[0].title,
          description:  data[0].description,
          urlToImage: data[0].urlToImage,
          publishedAt: data[0].publishedAt
      }]);

  }

}
