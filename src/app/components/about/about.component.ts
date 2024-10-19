import { Component, OnInit } from '@angular/core';
import { AboutService } from 'src/app/services/about.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {

   public aboutData: any;
 
   constructor(private aboutService: AboutService) {}
 
   
    ngOnInit() {
      this.aboutData = this.aboutService.aboutData;
    }
   }
 