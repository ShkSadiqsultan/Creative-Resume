import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  public aboutData = {
    name: 'Sadiq Sultan',
    title: 'Full Stack Web Developer, .Net Core',
    age: 32,
    email: 'shksadiqsultan@gmail.com',
    phone: '+1416-786-4020',
    address: '5646 WatersField Ave Mississauga',
    languages: ['English', 'Urdu'],
    description: `Full-stack web development with .NET Core and Angular offers a powerful combination for building
     efficient and scalable web applications. .NET Core provides a robust back-end platform, while Angular delivers 
     a comprehensive front-end framework. Together, they enable developers to create dynamic, interactive, and cross-platform applications 
     with strong type safety, scalability, and a thriving community.. Learn More`
  };
}