import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  public skillsData = [
    { skill: 'HTML', proficiency: 80 },
    { skill: 'CSS', proficiency: 75 },
    { skill: 'JAVASCRIPT', proficiency: 60 },
    { skill: 'SASS', proficiency: 60 },
    { skill: 'BOOTSTRAP', proficiency: 75 },
    { skill: 'PHOTOSHOP', proficiency: 70 }
  ];
}
