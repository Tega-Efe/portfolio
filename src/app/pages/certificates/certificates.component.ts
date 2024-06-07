import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-certificates',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent {
  faArrowLeft = faArrowLeft;
  faArrowRight = faArrowRight;

  currentFrontendIndex = 0;
  currentBackendIndex = 0;
  currentFullstackIndex = 0;

  frontendCertificates = [
    {
      image: 'certificate1.jpg',
      title: 'Responsive Web Design',
      description: 'Comprehensive training on building responsive web pages using HTML, CSS, Javascript and media queries.',
      link: 'Dominic.pdf'
    },
    
  ];

  backendCertificates = [
    {
      image: 'backend-cert1.jpg',
      title: 'Back End Development and APIs',
      description: 'Expertise in building back end applications and RESTful APIs using Django Python framework.',
      link: 'https://www.freecodecamp.org/certification/Sotonye/back-end-development-and-apis'
    },
    
  ];

  fullstackCertificates = [
    {
      image: 'dmll.jpg',
      title: 'Digital Marketing',
      description: 'Comprehensive mastery of digital marketing strategies and tools to create dynamic and interactive marketing campaigns.',
      link: 'dml.pdf'
    }
  ];

  prevCertificate(section: string) {
    switch (section) {
      case 'frontend':
        this.currentFrontendIndex = (this.currentFrontendIndex > 0) ? this.currentFrontendIndex - 1 : this.frontendCertificates.length - 1;
        break;
      case 'backend':
        this.currentBackendIndex = (this.currentBackendIndex > 0) ? this.currentBackendIndex - 1 : this.backendCertificates.length - 1;
        break;
      case 'fullstack':
        this.currentFullstackIndex = (this.currentFullstackIndex > 0) ? this.currentFullstackIndex - 1 : this.fullstackCertificates.length - 1;
        break;
    }
  }

  nextCertificate(section: string) {
    switch (section) {
      case 'frontend':
        this.currentFrontendIndex = (this.currentFrontendIndex < this.frontendCertificates.length - 1) ? this.currentFrontendIndex + 1 : 0;
        break;
      case 'backend':
        this.currentBackendIndex = (this.currentBackendIndex < this.backendCertificates.length - 1) ? this.currentBackendIndex + 1 : 0;
        break;
      case 'fullstack':
        this.currentFullstackIndex = (this.currentFullstackIndex < this.fullstackCertificates.length - 1) ? this.currentFullstackIndex + 1 : 0;
        break;
    }
  }
}