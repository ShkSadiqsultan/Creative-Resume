import { Component, OnInit } from '@angular/core';
import { SocialLinksService } from 'src/app/services/social-links.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  socialLinks: any[] = []; 

  constructor(private socialLinksService: SocialLinksService) {}

  ngOnInit(): void {
    
    this.socialLinksService.getSocialLinks().subscribe(links => {
      this.socialLinks = links;
    });
  }

 onHireMeClick(): void {
   alert('You clicked Hire Me!');
 }

 downloadCV() {
  const cvFilePath = 'assets/Resume-SadiqSultan.pdf'; 
  const link = document.createElement('a');
  link.href = cvFilePath;
  link.download = 'Resume-SadiqSultan.pdf'; 
  link.click();
}

}