import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.scss']
})
export class JobCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  mouseHover(card: HTMLElement) {
    gsap.to(card, {
      translateY: '-5px',
      boxShadow: '0px 0px 10px 2px rgba(0, 1, 1, 0.1)',
    })
  }

  mouseLeave(card: HTMLElement) {
    gsap.to(card, {
      translateY: '0',
      boxShadow: '0px 0px 0px 0px rgba(0, 1, 1, 0.1)'
    })
  }

}
