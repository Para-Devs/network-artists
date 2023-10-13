import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';

interface MenuItem {
  title: string;
  childItems?: MenuItem[];
  showChilds?: boolean;
}

@Component({
  selector: 'app-menu-burger',
  standalone: true,
  imports: [CommonModule],
  template: `
      <div>
          <div class="fixed top-5 right-5" (click)="toggleMenu()">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
                  <path
                          d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"></path>
              </svg>
          </div>
          <div *ngIf="menuVisible" class=" fixed border  w-[250px] h-[500px] right-[20px] top-10">
              <ng-container *ngFor="let item of menuItems">
                  <div (mouseenter)="item.showChilds = true" (mouseleave)="item.showChilds = false"
                       class="cursor-pointer">
                      <div (click)="selectItem(item)">
                          {{item.title}}
                      </div>
                      <ng-container *ngIf="item.childItems && item.showChilds">
                          <div class="child-items">
                              <ng-container
                                      *ngTemplateOutlet="childMenu;context: {$implicit: item.childItems}"></ng-container>
                          </div>
                      </ng-container>
                  </div>
              </ng-container>
          </div>
      </div>

      <ng-template #childMenu let-items>
          <div (click)="selectItem(item)" *ngFor="let item of items" class="cursor-pointer">
              {{item.title}}
          </div>
      </ng-template>
  `,
  styles: []
})
export class MenuBurgerComponent {
  menuVisible = false;
  selectedAnchor!: string;
  menuItems: MenuItem[] = [
    {title: 'Home'},
    {title: 'Info'},
    {
      title: 'Service',
      childItems: [{title: 'Test'}]
    },
    {title: 'Background'},
    {title: 'References'},
    {title: 'Contact'},
  ]

  toggleMenu(): void {
    this.menuVisible = !this.menuVisible
  }

  selectItem(item: MenuItem) {
    if (item.childItems) {

      return;
    }
    this.selectedAnchor = item.title;
    this.menuVisible = false;
  }
  activateChildMenu(item: MenuItem) {
    item.showChilds = true;
  }
}
