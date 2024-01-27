import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {fadeInOut} from '../../animations';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [CommonModule],
  template: `

      <section [@fadeInOut]="true" class="w-full h-full flex  items-center flex-col service">
          <ng-container
                  *ngFor="let tab of tabs"
          >
              <ng-container *ngTemplateOutlet="entry; context: { $implicit: tab }"></ng-container>
          </ng-container>
      </section>

      <ng-template #entry let-ctx>
          <div>
              <p (click)="ctx.isExpanded = ! ctx.isExpanded" class="uppercase">{{ctx.title}}</p>
              <div class="{{fixTitle(ctx.title)}}">
                  <p *ngIf="ctx.isExpanded">
                      {{ctx.text}}
                  </p>
              </div>
          </div>

      </ng-template>
  `,
  styles: [
    `
    .talent_buying {
      background-color: wheat;
    }
    `
  ],
  animations: [fadeInOut('2s')]
})
export class ServiceComponent {
  fixTitle = (t: string) => t.replace(/ /g, '_').toLowerCase();
  tabs = [
    {
      title: 'consultancy',
      text: 'blablablablabla',
      isExpanded: false,
    },
    {
      title: 'Talent buying',
      text: 'blablablablabla',
      isExpanded: false,
    },{
      title: 'Event management',
      text: 'blablablablabla',
      isExpanded: false,
    },
    {
      title: 'Show creation',
      text: 'blablablablabla',
      isExpanded: false,
    },
    {
      title: 'Global rollouts',
      text: 'blablablablabla',
      isExpanded: false,
    }
  ]
}
