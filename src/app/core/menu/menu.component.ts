import { Component, Input, ViewEncapsulation } from '@angular/core';

import { Menu } from '../../shared/interfaces/menu.interface';
import { UtilsService } from '../../shared/services/utils.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MenuComponent {

  @Input() menu: Menu[];

  constructor(
    private utilsService: UtilsService
  ) {
  }

  public goTo(path: string): void {
    this.utilsService.goTo(path);
  }

}
