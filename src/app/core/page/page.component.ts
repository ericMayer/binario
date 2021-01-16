import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Menu } from '../../shared/interfaces/menu.interface';
import { MenuService } from '../../shared/services/menu.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PageComponent implements OnInit {

  public menu: Menu[];

  constructor(
    private menuService: MenuService
  ) { }

  ngOnInit() {
    this.getMenu();
  }

  private getMenu(): void {
    this.menuService.getMenu().subscribe((menu: Menu[]) => this.menu = menu);
  }

}
