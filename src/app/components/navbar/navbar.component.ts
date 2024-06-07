import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from '../../pages/about/about.component';
import {Router, RouterOutlet, RouterModule } from '@angular/router';
import { ThemeToggleComponent } from '../theme-toggle/theme-toggle.component';
import { CertificatesComponent } from '../../pages/certificates/certificates.component';
import { ProjectsComponent } from '../../pages/projects/projects.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,
    AboutComponent,
    RouterOutlet,
    RouterModule,
    ThemeToggleComponent,
    CertificatesComponent,
    ProjectsComponent
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    // Listen for click events on the document
    this.renderer.listen('document', 'click', (event) => {
      this.onDocumentClick(event);
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.closeMenu();
  }

  toggleMenu() {
    const btn = this.elementRef.nativeElement.querySelector('#menu-btn');
    const nav = this.elementRef.nativeElement.querySelector('#mobile-menu');
    if (nav.classList.contains('hidden')) {
      btn.classList.add('open');
      nav.classList.remove('hidden');
      nav.classList.remove('slide-out');
      nav.classList.add('slide-in');
    } else {
      this.closeMenu();
    }
  }

  private closeMenu() {
    const btn = this.elementRef.nativeElement.querySelector('#menu-btn');
    const nav = this.elementRef.nativeElement.querySelector('#mobile-menu');
    if (!nav.classList.contains('hidden')) {
      btn.classList.remove('open');
      nav.classList.remove('slide-in');
      nav.classList.add('slide-out');
      setTimeout(() => {
        nav.classList.add('hidden');
      }, 300); // Wait for the animation to finish
    }
  }

  private onDocumentClick(event: Event) {
    const clickedInside = this.elementRef.nativeElement.contains(event.target);
    if (!clickedInside) {
      this.closeMenu();
    }
  }
}
