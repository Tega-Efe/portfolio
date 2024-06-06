// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-projects',
//   standalone: true,
//   imports: [],
//   templateUrl: './projects.component.html',
//   styleUrl: './projects.component.css'
// })
// export class ProjectsComponent {
  
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  faArrowLeft = faArrowLeft;
  faArrowRight = faArrowRight;
  faGithub = faGithub;

  frameworksLibrariesProjects = [
    {
      image: 'notes.jpg',
      title: 'Notes App',
      description: 'This is a notes app built using react. It allows users to create, view, update delete notes stored in a Django database. It is quite simalr to the common iphone notes app.',
      githubLink: 'https://github.com/Tega-Efe/frontend',
      githubRepo: 'frontend',
      liveLink: 'https://notesapp-x0v3.onrender.com/'
    },
    
    {
      image: 'portfolio-website.jpg',
      title: 'Portfolio Website',
      description: 'This is my portfolio website built using Angular and styled with TailwindCSS. It showcases my projects, skills, certificates and contact information. It also has a dark mode and light mode feature.',
      githubLink: 'https://github.com/Sotonye0808/portfolio-website',
      githubRepo: 'portfolio-website',
      liveLink: 'https://sotonye-dagogo.netlify.app/'
    }
  ];

  basicHtmlCssJsProjects = [
    {
      image: 'quizgame.jpg',
      title: 'Quiz game app',
      description: 'This is a simple Trivia game application built using basic HTML, CSS and JavaScript. It retrievs questions from a databank and dispays then accordingly.',
      githubLink: 'https://github.com/Tega-Efe/quizgame',
      githubRepo: 'Quizgame',
      liveLink: 'https://quizgame-3912.onrender.com/'
    },
    
    {
      image: 'webdev-practice.jpg',
      title: 'Web Development Practice',
      description: 'This is a simple web development practice project built using basic HTML, CSS and JavaScript. It is a very simple generic landing page.',
      githubLink: 'https://github.com/Sotonye0808/web_dev_practice',
      githubRepo: 'web_dev_practice',
      liveLink: 'https://sotonye0808.github.io/web_dev_practice/'
    }
  ];

  pythonProjects = [
    {
      image: 'API.jpg',
      title: 'Resful API',
      description: 'This is a simple restful API built using Django rest framework. It responds to fetch calls from a notes application to perform basic CRUD operations ',
      githubLink: 'https://github.com/Tega-Efe/MyAPI',
      githubRepo: 'MyAPI',
      liveLink: 'https://efeoghene.pythonanywhere.com/api/notes/'
    },
  ];

  miniProjects = [
    {
      image: 'todolist.jpg',
      title: 'ToDo List App',
      description: 'This is a simple To Do list app with User Registration, Login, Search and full Create Read Update and DELETE functionality..',
      githubLink: 'https://github.com/Tega-Efe/TodoList',
      githubRepo: 'TodoList',
      liveLink: 'https://tega.pythonanywhere.com/'
    },
    
  ];

  currentFrameworksLibrariesIndex = 0;
  currentBasicHtmlCssJsIndex = 0;
  currentPythonIndex = 0;
  currentMiniProjectsIndex = 0;

  prevProject(section: string) {
    switch (section) {
      case 'frameworksLibraries':
        this.currentFrameworksLibrariesIndex = (this.currentFrameworksLibrariesIndex > 0) ? this.currentFrameworksLibrariesIndex - 1 : this.frameworksLibrariesProjects.length - 1;
        break;
      case 'basicHtmlCssJs':
        this.currentBasicHtmlCssJsIndex = (this.currentBasicHtmlCssJsIndex > 0) ? this.currentBasicHtmlCssJsIndex - 1 : this.basicHtmlCssJsProjects.length - 1;
        break;
      case 'python':
        this.currentPythonIndex = (this.currentPythonIndex > 0) ? this.currentPythonIndex - 1 : this.pythonProjects.length - 1;
        break;
      case 'miniProjects':
        this.currentMiniProjectsIndex = (this.currentMiniProjectsIndex > 0) ? this.currentMiniProjectsIndex - 1 : this.miniProjects.length - 1;
        break;
    }
  }

  nextProject(section: string) {
    switch (section) {
      case 'frameworksLibraries':
        this.currentFrameworksLibrariesIndex = (this.currentFrameworksLibrariesIndex < this.frameworksLibrariesProjects.length - 1) ? this.currentFrameworksLibrariesIndex + 1 : 0;
        break;
      case 'basicHtmlCssJs':
        this.currentBasicHtmlCssJsIndex = (this.currentBasicHtmlCssJsIndex < this.basicHtmlCssJsProjects.length - 1) ? this.currentBasicHtmlCssJsIndex + 1 : 0;
        break;
      case 'python':
        this.currentPythonIndex = (this.currentPythonIndex < this.pythonProjects.length - 1) ? this.currentPythonIndex + 1 : 0;
        break;
      case 'miniProjects':
        this.currentMiniProjectsIndex = (this.currentMiniProjectsIndex < this.miniProjects.length - 1) ? this.currentMiniProjectsIndex + 1 : 0;
        break;
    }
  }
}
// }
// import { Component } from '@angular/core';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
// import { faGithub } from '@fortawesome/free-brands-svg-icons';
// import { ProjectService } from '../../services/project.service';

// @Component({
//   selector: 'app-projects',
//   standalone: true,
//   imports: [FontAwesomeModule],
//   templateUrl: './projects.component.html',
//   styleUrls: ['./projects.component.scss']
// })
// export class ProjectsComponent {
//   faArrowLeft = faArrowLeft;
//   faArrowRight = faArrowRight;
//   faGithub = faGithub;

//   frameworksLibrariesProjects: Project[];
//   basicHtmlCssJsProjects: Project[];
//   pythonProjects: Project[];
//   miniProjects: Project[];

//   constructor(private projectService: ProjectService) {
//     this.frameworksLibrariesProjects = this.projectService.getFrameworksLibrariesProjects();
//     this.basicHtmlCssJsProjects = this.projectService.getBasicHtmlCssJsProjects();
//     this.pythonProjects = this.projectService.getPythonProjects();
//     this.miniProjects = this.projectService.getMiniProjects();
//   }

  
// }