import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  portfolioItems = [
    {
      image: '/assets/portfolio1.jpg',
      title: 'E-commerce Platform',
      description: 'An online marketplace where users can browse, search, and purchase products from various sellers. The platform will include features such as product listings, shopping carts, secure payment gateways, and user reviews.'
    },
    {
      image: '/assets/portfolio2.jpg',
      title: 'Social Media Platform',
      description: 'A social networking site where users can create profiles, connect with friends, share updates, and engage in discussions. The platform will include features such as news feeds, messaging, groups, and event planning.'
    },

    {
      image: '/assets/portfolio3.jpg',
      title: 'Educational Platform',
      description: 'An online learning platform offering courses, tutorials, and quizzes on various subjects. The platform will provide interactive content, progress tracking, and certification options.'
    }, 
    {
      image: '/assets/portfolio4.jpg',
      title: 'Portfolio Website',
      description: 'A personal website to showcase your skills, projects, and experience. The website will include sections for your bio, resume, portfolio, and contact information.'
    }
    
  ];
}
