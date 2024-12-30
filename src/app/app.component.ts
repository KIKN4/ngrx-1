import {Component} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {HeaderComponent} from './header/header.component';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule, HeaderComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: []
})
export class AppComponent{

}
