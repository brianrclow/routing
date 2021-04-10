import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterExtensions } from '@nativescript/angular';

@Component({
  selector: 'ns-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent {
  constructor(private _route: ActivatedRoute, private _routerExtension: RouterExtensions) {}

  goToLogin() {
    this._routerExtension.navigate(['/auth/login'], {
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
