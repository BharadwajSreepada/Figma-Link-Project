import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule], // ✅ important!
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-code-generator';
  componentName = '';
  description = '';
  generated = false;
  tsFile = '';
  htmlFile = '';
  cssFile = '';

  generateCode() {
    this.tsFile = `export class ${this.componentName}Component {}`;
    this.htmlFile = `<div>${this.componentName}</div>`;
    this.cssFile = `.component { color: blue; }`;
    this.generated = true;
  }
}
