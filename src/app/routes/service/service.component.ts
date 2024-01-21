import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [CommonModule],
  template: `

      <section class="w-full h-full flex  items-center flex-col service">
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
    .service{
        background-image: linear-gradient(
            100deg,
            hsl(208deg 32% 49%) 0%,
            hsl(209deg 34% 44%) 12%,
            hsl(209deg 36% 39%) 22%,
            hsl(210deg 39% 34%) 32%,
            hsl(211deg 42% 29%) 42%,
            hsl(211deg 48% 24%) 52%,
            hsl(211deg 49% 23%) 62%,
            hsl(211deg 51% 22%) 71%,
            hsl(211deg 54% 21%) 81%,
            hsl(212deg 56% 19%) 90%,
            hsl(212deg 59% 18%) 100%
        );
    }
    `
  ]
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
