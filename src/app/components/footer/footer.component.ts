import { Component, OnInit } from '@angular/core';
import { SocialLinksService } from 'src/app/services/social-links.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  socialLinks: any[] = [];  

  constructor(private socialLinksService: SocialLinksService) {}

  ngOnInit(): void {
    this.socialLinksService.getSocialLinks().subscribe(links => {
      this.socialLinks = links;
    });
  }
}
