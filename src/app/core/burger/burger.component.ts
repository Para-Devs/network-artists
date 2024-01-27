import {Component, ElementRef, HostListener, inject, Inject, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Router, RouterLink, RouterLinkActive} from '@angular/router';
import {fadeInOut} from "../../animations";

interface MenuItem {
  title: string;
  childItems?: MenuItem[];
  showChilds?: boolean;
  routerLink?: string;
}

@Component({
  selector: 'app-burger',
  standalone: true,
  imports: [CommonModule, RouterLinkActive, RouterLink],
  template: `
    <div>
      <div class="fixed top-5 right-5 text-white md:hidden block" (click)="toggleMenu()">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
             stroke-width="1.5" stroke="currentColor" [class.rotate-180]="menuVisible"
             class="hover:scale-110 cursor-pointer transition-all duration-300 transform w-6 h-6 title bar-button">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5"/>
        </svg>
      </div>
      section
      <div *ngIf="menuVisible" [@fadeInOut]="true" class="bg-[rgba(235,235,235,0.9)] fixed mt-5 rounded-md pl-5 pr-7 py-5 w-auto  right-[25px] top-10 z-50">
        <ng-container *ngFor="let item of menuItems">
          <div (mouseenter)="item.showChilds = true" (mouseleave)="item.showChilds = false"
               class="cursor-pointer" >
            <div  (click)="selectItem(item)" class="text-blue-900 text-2xl mb-2  uppercase" >
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
  styles: [],
  animations: [fadeInOut('0.5s')]
})
export class MenuBurgerComponent {
  menuVisible = false;
  router: Router = inject(Router);
  elementRef: ElementRef = inject(ElementRef);
  menuItems: MenuItem[] = [
    {title: 'Network',routerLink: 'home'},
    {title: 'Vision', routerLink: 'vision'},
    {title: 'Mission', routerLink: 'mission'},
    {title: 'Method', routerLink: 'method'},
    {title: 'Service', routerLink: 'service'},
    {title: 'Connect', routerLink: 'connect'},
  ]


  toggleMenu(): void {
    this.menuVisible = !this.menuVisible

  }

  selectItem(item: MenuItem) {
    if (item.childItems) {
      return;
    }
    this.menuVisible = false;
    return this.router.navigate([item.routerLink]);
  }
  activateChildMenu(item: MenuItem) {
    item.showChilds = true;
  }
  /*@HostListener('document:click', ['$event'])
  clickout(event: any) {
    if(!this.elementRef.nativeElement.contains(event.target)) {
      this.toggleMenu();
    }
  }*/
}
