import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {CommonModule, DOCUMENT} from '@angular/common';
import {fadeInOut} from '../../animations';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [CommonModule],
  template: `

      <section [@fadeInOut]="true"
               class="mx-auto mt-10 md:mt-20 lg:mt-32  h-full overflow-y-scroll flex md:w-[70%] w-[80%] text-white   items-center flex-col service">
          <ng-container
                  *ngFor="let tab of tabs"
          >
              <ng-container *ngTemplateOutlet="entry; context: { $implicit: tab }"></ng-container>
          </ng-container>
      </section>

      <ng-template #entry let-ctx>
          <div class="mt-2 w-full z-20 ">
              <div [class.rounded-b-md]="!ctx.isExpanded" class="w-full p-5 bg-[rgba(235,235,235,0.4)] h-auto min-h-[50px] rounded-t-md center text-2xl">
                  <p (click)="toggleCtx(ctx)" class="uppercase cursor-pointer ">{{ctx.title}}</p>
              </div>
              <div *ngIf="ctx.isExpanded"
                   class="{{fixTitle(ctx.title)}} tap-animation w-full px-10 pb-10 bg-[rgba(235,235,235,0.4)] h-auto min-h-[50px] border-l-2 rounded-b-md  center">
                  <p>
                      {{ctx.text}}
                  </p>
              </div>
          </div>

      </ng-template>

      <div class="fixed bottom-0  mb-1.5 pr-1 w-full text-white flex justify-end text-[rgba(255,255,255,0.3)]  ">
        <p class="footer-text uppercase text-4xl font-extralight">Service</p>
      </div>
  `,
  styles: [
    `
    .talent_buying {
      // background-color: wheat;
    }
    `
  ],
  animations: [fadeInOut('4s')]
})
export class ServiceComponent implements OnInit, OnDestroy{
  fixTitle = (t: string) => t.replace(/ /g, '_').toLowerCase();
  tabs = [
    {
      title: 'consultancy',
      text: `We work with our partners to develop long-term strategies to strike gold and obtain milestones that feel beyond reach, and we’re  available  to support every step of the way:

We help you navigate the entire in-house executional process by designing an optimal organisational structure and timeline to fast-track your goals.

Depending on the scale of the project, we can outsource, on-board and nurture local teams.

If you want your event to have the voice it deserves, we are also the key to unlocking access to  top artists worldwide and from all genres. Our network includes top event producers and artists to create unique customer experiences that last.`,
      isExpanded: false,
    },
    {
      title: 'Talent buying',
      text: `Our database includes direct contacts to all talent within the world of electronic music and beyond. We are privileged to have personal and strong relationships with many artists, managers and agents, which helps us ensure a smooth and fast operation. The rise and growth in electronic music has brought many new possibilities, from festivals, to collaborations and it has opened doors in the ever-evolving genres of pop, rock and urban.`,
      isExpanded: false,
    },{
      title: 'Event management',
      text: `
The NETWORK ARTISTS are your sidekick to custom event management, from conceptualization to coordination, to implementation.

We play a competitive role in the perimeters of public and private events, whether it is discreet for your close circle, or you are a corporation looking to connect brands and talent for universal exposure. There’s always an event master plan that encompasses the venue, logistics and entertainment to ensure that everyone in your world holds an everlasting imprint of the experience.`,
      isExpanded: false,
    },
    {
      title: 'Show creation',
      text: `At the heart of our offering is our dynamic creative team who is always ready to transform your brand identity. Whether you're a new venue aiming for a unique vibe and a recognisable profile, a DJ looking to upscale your performances with a modern audio aspect, or a touring band seeking to revamp your show... we've got you covered. But that's not all—we're here to customise ideas for corporate presentations, merchandise, and beyond. With us, your brand's potential is limited only by your imagination.

Our experience:

Crafting unique brand identities and aesthetics.

Enhancing DJ performances / touring with innovative audio, visuals and overall production.

Customising creative solutions for corporate presentations, merchandise, and more…`,
      isExpanded: false,
    },
    {
      title: 'Global rollouts',
      text: `Network Artists brings to light the pioneering features of your brand through unique strategies and 360º rollouts to launch a total brand activation, which will create the opportunity for global recognition, growth and value across worldwide markets.


The secret formula:

Data analysis and subsequent planning.

Organic workflows and modular structures to maximise growth potential and results.

Immersive events that embody your core principles and overall presence.`,
      isExpanded: false,
    }
  ]

  toggleCtx(ctx: any) {
    this.tabs = this.tabs.map(ctxEntry => {
      if(ctxEntry.title !== ctx.title) {
        ctxEntry.isExpanded = false;
      }
      return ctxEntry;
    })
    ctx.isExpanded = ! ctx.isExpanded;
  }

  doc = inject(DOCUMENT);
  ngOnInit() {
    this.doc.body.classList.add("service");
  }
  ngOnDestroy() {
    this.doc.body.classList.remove("service");

  }
}
