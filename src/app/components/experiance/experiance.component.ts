import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiance',
  templateUrl: './experiance.component.html',
  styleUrls: ['./experiance.component.css']
})
export class ExperianceComponent {

  public workExperience:
  any[] = [
     {
       title: 'Front-End Developer',
       company: 'BCDAPPS',
       startDate: 'JUNE 2022',
       endDate: 'APRIL 2024',
       description: 'As a Front-End Developer at BCDAPPS, I successfully designed and developed E-commerce. I utilized React,HTML,CSS,Javascript,Jquery,SQL Server to create a user-friendly and visually appealing interface, optimizing website performance and ensuring cross-browser compatibility'
 
     },

     {
      title: 'Web Developer',
      company: 'IMPACT ESTATE MARKETING',
      startDate: 'JANUARY 2022',
      endDate: 'JUNE 2022',
      description: 'As a Web Developer at IMPACT ESTATE MARKETING, I successfully designed and developed Real Estate Website. I utilized React,HTML,CSS,Javascript,Jquery,SQL Server to create a user-friendly and visually appealing interface, optimizing website performance and ensuring cross-browser compatibility' 

    },

     {
       title: 'Web Developer',
       company: 'AFC',
       startDate: '2019',
       endDate: '2021',
       description: 'As a Web Developer at AFC, I successfully designed and developed POS(Point of Sale). I utilized React,HTML,CSS,Javascript,Jquery,SQL Server to create a user-friendly and visually appealing interface, optimizing website performance and ensuring cross-browser compatibility' 
 
     },
   ];
 }

