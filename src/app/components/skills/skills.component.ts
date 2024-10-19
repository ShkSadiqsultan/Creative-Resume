import { Component, OnInit } from '@angular/core';
import { SkillsService } from 'src/app/services/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

    public skillsData: any[];
  
    constructor(private skillsService: SkillsService) {
      this.skillsData = this.skillsService.skillsData;
    }
  
    ngOnInit() {
      this.skillsData = this.skillsService.skillsData;
    }
  }
