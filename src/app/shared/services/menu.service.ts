import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { HttpService } from './http.service';
import { Menu } from '../interfaces/menu.interface';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(
    private http: HttpService
  ) { }

  public getMenu(): Observable<Menu[]> {
    return this.http.get('./assets/json/menu.json').pipe(take(1));
  }

}
