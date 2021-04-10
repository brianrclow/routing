import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterExtensions } from '@nativescript/angular';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  constructor(private _route: ActivatedRoute, private _routerExtension: RouterExtensions) {
    // Use the component constructor to inject providers.
  }

  ngOnInit(): void {
    // Use the "ngOnInit" handler to initialize data for the view.
  }

  goToTabs() {
    this._routerExtension.navigate(['/tabs'], {
      clearHistory: true,
      relativeTo: this._route,
      animated: true,
      transition: {
        name: 'slide',
        duration: 350,
        curve: 'ease',
      },
    });
  }
}
