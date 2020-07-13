import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public onlyNumbers: number;
  public mayBePrimeNumber = 9879879879;
  public isPrime = 'Is prime';
  public isLoaded = false;
  public isloaderLoaded = false;

  public startLoading(): void {
    this.isloaderLoaded = true;
    this.isLoaded = false;
    setTimeout(() => {
      this.isLoaded = true;
      this.isloaderLoaded = false;
    }, 1000);
  }
}
