import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(
    private router: Router,
    private location: Location
  ) { }

  public goTo(path: string): void {
    this.router.navigateByUrl(path);
  }

  public back(): void {
    this.location.back();
  }

}
