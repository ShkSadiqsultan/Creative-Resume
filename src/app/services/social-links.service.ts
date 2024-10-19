import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocialLinksService {
  constructor() {}

  getSocialLinks(): Observable<any[]> {
    const links = [
      { name: 'Facebook', url: 'https://www.facebook.com/Sadiq.Sultan.Shk', icon: 'fab fa-facebook-f' },
      { name: 'Twitter', url: 'https://x.com/shksadiqsultan', icon: 'fab fa-twitter' },
      { name: 'LinkedIn', url: 'https://www.linkedin.com/in/shksadiqsultan/', icon: 'fab fa-linkedin-in' },
      { name: 'GitHub', url: 'https://github.com/ShkSadiqsultan', icon: 'fab fa-github' }
    ];
    return of(links); 
  }
}

