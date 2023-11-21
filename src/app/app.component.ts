import {Component, inject, OnInit} from '@angular/core';
import {CommonModule, DOCUMENT} from '@angular/common';
import {MenuBurgerComponent} from './menu-burger/menu-burger.component';
import {ContactFormComponent} from './forms/contact-form/contact-form.component';
import {TranslateModule} from '@ngx-translate/core';
import {animate, style, transition, trigger} from '@angular/animations';
function fadeInOut(fadeInTime = '1s', fadeOutTime = '1s') {
  return trigger(
    'fadeInOut',
    [
      transition(
        ':enter',
        [
          style({  opacity: 0 }),
          animate(fadeOutTime+ ' ease-out',
            style({  opacity: 1 }))
        ]
      ),
      transition(
        ':leave',
        [
          style({ opacity: 1 }),
          animate(fadeInTime+' ease-in',
            style({ opacity: 0 }))
        ]
      )
    ]
  );
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MenuBurgerComponent, ContactFormComponent, TranslateModule],
  template: `
      <div class="overflow-x-hidden">
          <section id="header" data-aos-anchor="#header" class=" w-full min-h-screen bg-[rgba(11,40,73,0.6)]">
              <div [@fadeInOut]="true" class="logo" data-aos="zoom-in" data-aos-duration="1500">
                  <img src="../assets/img/Network_Artist_Logo_white.svg" alt="test">
              </div>
          </section>
          <div id="weare" data-aos="fade-left" class="diagonal-shape bg-[rgba(11,40,73,0.6)]"></div>
          <section id="weare" data-aos="fade-left"
                   class=" md:p-10 p-5 min-h-screen flex flex-col drop-shadow-2xl items-center bg-[rgba(1,14,51,0.95)] text-white justify-center">

              <h1 data-aos="fade-right" class="title-right ">WE ARE NETWORK ARTISTS.</h1>
              <p data-aos="fade-left" class="mt-10 md:mx-10 mx-5 content-text">A 360o music consultancy group and talent
                  buying company that
                  belongs at the
                  heart of music, culture and brands.
                  Who are we? The same as you: curious minds looking to connect deeper than the surface and using music
                  to pursue the future of sound.</p>

          </section>

          <!--<section data-aos="fade-right" class="bg-slate-800 h-1/2"></section>!-->
          <section id="purpose" data-aos-anchor="#purpose" data-aos="fade-right"
                   class="min-h-screen overflow-auto bg-[rgba(11,40,73,0.95)] text-white drop-shadow-2xl">
              <div class="md:p-10 p-5 h-screen flex flex-col justify-center ">
                  <h1 data-aos="fade-left" class="title-left">OUR PURPOSE </h1>
                  <p class="mt-10 md:ml-10 ml-5 content-text">The purpose behind our company is to
                      CONNECT DOTS AND COMBINE WORKFORCES to fulfil desires and the gap in the market.</p>

                  <p data-aos="fade-right" class="mt-5 md:mx-10 mx-5 content-text">

                      Philipp Straub and Andrew van Ginneken were the first to incite this connection. Drawing from
                      their
                      numerous endeavours, rich experiences and achievements to build trust within the music industry
                      they
                      successfully created NETWORK ARTISTS.
                  </p>
              </div>
          </section>
          <section id="bio" data-aos-anchor="#bio" data-aos="fade-up"
                   class="md:p-10 p-5 min-h-screen flex flex-col drop-shadow-2xl items-center bg-[rgba(1,14,51,0.95)] text-white justify-center">
              <h1 data-aos="fade-up" class="title-left-6">BIO</h1>
              <h1 data-aos="fade-left" class="title-left ml-5 ">ANDREW</h1>
              <ul data-aos="fade-left" data-aos-delay="200" class="mt-10 md:mr-10 md:ml-16 ml-5 mr-5 content-text">
                  <li class="mt-5">Promoted 1000+ shows across the UK, working with the biggest electronic artists,
                      labels and brands
                      of
                      the time.
                  </li>
                  <li class="mt-5">Operated 7 music venues across South East UK.</li>
                  <li class="mt-5">Brokered agreements with labels such as EMI and BMG on breakthrough pop/rock acts of
                      the time.
                  </li>
                  <li class="mt-5">Worked as Senior agent at Paramount Artists, gaining experience representing talent
                      on a global scale, negotiating multi-million Euro contracts and planning tours worldwide.
                  </li>
                  <li class="mt-5">Manages Grammy-nominated & multi-million record selling house music legend Dennis
                      Ferrer.
                  </li>
              </ul>
              <h1 data-aos="fade-left" class="title-left ml-5 ">PHILLIP</h1>
              <ul data-aos="fade-left" data-aos-delay="200" class="mt-10 md:mr-10 md:ml-16 ml-5 mr-5 content-text">
                  <li class="mt-5">Globally touring DJ and 1st Austrian live act signed to Sony. - Partnered ID&T’s
                      Merchandise &
                      Ticketing operation
                      in Austria.
                  </li>
                  <li class="mt-5">Produced and distributed The Partysan franchise.</li>
                  <li class="mt-5">CEO of the 1st DJ booking agency in Austria, Titan International.
                  </li>
                  <li class="mt-5">Introduced brands such as Timewarp, Creamfields, Mayday, Loveparade and more into new
                      markets. -
                      Former music consultant for Coca Cola and Monster
                      Energy group.
                  </li>
                  <li class="mt-5">Previous head of music for Burn Energy active in 122 countries and head mentor for
                      Burn Residency. -
                      General consultant Sekoya Management Group and music advisor for Soho Garden Developments in UAE
                      and
                      across the GCC area.
                  </li>
              </ul>
          </section>
          <section id="service" data-aos-anchor="#service" data-aos="fade-down"
                   class="md:p-10 p-5 min-h-screen flex flex-col drop-shadow-2xl items-center bg-[rgba(1,14,51,0.8)] text-white justify-center">
              <h1 data-aos="fade-up" class="title-right-6">Service</h1>

              <p data-aos="fade-in" class="mt-10 md:mx-10 mx-5 content-text">
                  From strategic planning, project management to on-site execution...
                  Our in-house team provides customised support, guidance and consultancy on all project needs.
              </p>
          </section>
          <section id="vision" data-aos-anchor="#vision" data-aos="fade-in"
                   class=" flex flex-col drop-shadow-2xl items-center justify-center bg-white text-[rgba(1,14,51,0.8)] p-20">
              <h1 data-aos="fade-in" data-aos-delay="100" class="title-6">HOW CAN WE BRING YOUR VISION TO LIFE?</h1>
          </section>

          <section id="consultancy" data-aos="fade-left"
                   class="p-10 min-h-screen flex flex-col drop-shadow-2xl items-center bg-[rgba(1,14,51,0.95)] text-white justify-center">

              <h1 data-aos="fade-right" class="title-left">CONSULTANCY</h1>
              <p data-aos="fade-left" class="mt-10 md:mx-10 mx-5 content-text">We work with our partners to develop
                  long-term strategies to strike gold and obtain milestones that feel beyond reach, and we’re available
                  to support every step of the way:</p>
              <ul data-aos="fade-right" class="mt-10 md:mx-10 mx-5 content-text">
                  <li class="mt-5">We help you navigate the entire in-house executional process by designing an optimal
                      organisational structure and timeline to fast-track your goals.
                  </li>
                  <li class="mt-5">Depending on the scale of the project, we can outsource, on-board and nurture local
                      teams.
                  </li>
                  <li class="mt-5">If you want your event to have the voice it deserves, we are also the key to
                      unlocking access to top artists worldwide and from all genres. Our network includes top event
                      producers and artists to create unique customer experiences that last.
                  </li>
              </ul>
          </section>
          <section id="talentbuying" data-aos="fade-left"
                   class="md:p-10 p-5 min-h-screen flex flex-col drop-shadow-2xl items-center bg-[rgba(11,40,73,0.95)] text-white justify-center">

              <h1 data-aos="fade-right" class="title-right">TALENT BUYING</h1>
              <p data-aos="fade-left" class="mt-10 md:mx-10   mx-5 content-text">Our database includes direct contacts to
                  all talent within the world of electronic music and beyond. We are privileged to have personal and
                  strong relationships with many artists, managers and agents, which helps us ensure a smooth and fast
                  operation. The rise and growth in electronic music has brought many new possibilities, from festivals,
                  to collaborations and it has opened doors in the ever-evolving genres of pop, rock and urban.</p>

          </section>


          <section id="events" data-aos-anchor="#events" data-aos="fade-in"
                   class=" flex  min-h-screen flex-col drop-shadow-2xl items-center justify-center bg-white text-[rgba(1,14,51,0.8)] md:p-20 p-5">
              <h1 data-aos="fade-right" class="title-left">EVENTS</h1>
              <p data-aos="fade-left" class="mt-10 md:mx-10 mx-5  content-text">The NETWORK ARTISTS are your sidekick to
                  custom event management, from conceptualization to coordination, to implementation.
                  We play a competitive role in the perimeters of public and private events, whether it is discreet for
                  your close circle, or you are a corporation looking to connect brands and talent for universal
                  exposure. There’s always an event master plan that encompasses the venue, logistics and entertainment
                  to ensure that everyone in your world holds an everlasting imprint of the experience.</p>
          </section>
          <section id="show_creation" data-aos-anchor="#show_creation" data-aos="fade-in"
                   class=" flex  min-h-screen flex-col drop-shadow-2xl items-center justify-center bg-[rgba(11,40,73,0.6)] text-white md:p-20 p-5">
              <h1 data-aos="fade-left" class="title-right">SHOW CREATION</h1>
              <p data-aos="fade-left" class="mt-10 md:mx-10 mx-5 content-text">
                  At the heart of our offering is our dynamic creative team who is always ready to transform your brand
                  identity. Whether you're a new venue aiming for a unique vibe and a recognisable profile, a DJ looking
                  to upscale your performances with a modern audio aspect, or a touring band seeking to revamp your
                  show... we've got you covered. But that's not all—we're here to customise ideas for corporate
                  presentations, merchandise, and beyond. With us, your brand's potential is limited only by your
                  imagination.
              </p>
              <ul data-aos="fade-right" class="mt-10 mr-10 ml-16 content-text">
                  <li class="mt-5">Crafting unique brand identities and aesthetics.
                  </li>
                  <li class="mt-5">Enhancing DJ performances / touring with innovative audio, visuals and overall
                      production.
                  </li>
                  <li class="mt-5">Customising creative solutions for corporate presentations, merchandise, and more...
                  </li>
              </ul>

          </section>
          <section id="roll_out" data-aos="roll_out"
                   class=" md:p-10 p-5 min-h-screen flex flex-col drop-shadow-2xl items-center bg-[rgba(1,14,51,0.95)] text-white justify-center">

              <h1 data-aos="fade-right" class="title-left">GLOBAL ROLL-OUTS.</h1>
              <p data-aos="fade-left" class="mt-10 mr-5 ml-5 md:mr-10 md:ml-10 content-text">Network Artists brings to light the
                  pioneering features of your brand through unique strategies and 360o rollouts to launch a total brand
                  activation, which will create the opportunity for global recognition, growth and value across
                  worldwide markets.
              </p>
              <p data-aos="fade-left" class="mt-10 mr-10 ml-10 content-text">The secret formula:
              </p>
              <ul data-aos="fade-right" class="mt-10 mr-10 ml-16 content-text">
                  <li class="mt-5">Data analysis and subsequent planning.</li>
                  <li class="mt-5">Organic workflows and modular structures to maximise growth potential and results.</li>
                  <li class="mt-5">Immersive events that embody your core principles and overall presence.</li>
              </ul>
          </section>
        <section id="outro" data-aos-anchor="#outro" data-aos="fade-in"
                 class=" flex  min-h-screen flex-col drop-shadow-2xl items-center justify-center bg-white text-[rgba(1,14,51,0.8)] md:p-20 p-5">
          <h1 data-aos="fade-left" class="title-right">OUTRO</h1>
          <p data-aos="fade-right" class="mt-10 md:mx-10 mx-5  content-text">
            After 30 years in the music industry, we have not only acquired the knowledge, experience and network, but the recognition as one of the leading consultancy companies that stands for quality. We have immersed ourselves in every aspect of the industry, leaving our signature on the music scene – Whether you are a venue owner, an event promoter or an entertainment/lifestyle focused hospitality group, we can put ourselves in your world.<br><br>
            Let’s connect dots.
        </section>
          <section class="h-full"></section>
      </div>
  `,
  styles: [`
    .title-right {
      @apply font-bold justify-end flex w-full mt-5 mr-5 md:text-4xl text-2xl;
    }
    .title-left {
      @apply font-bold justify-start flex w-full mt-5 md:text-4xl text-2xl;
    }
    .title{
      @apply font-bold mt-5 md:text-4xl text-2xl;
    }
    .title-6{
      @apply font-bold mt-5 md:text-4xl md:text-6xl text-3xl;
    }
    .title-left-6 {
      @apply font-bold justify-start flex w-full mt-5 md:text-6xl text-3xl;
    }
    .title-right-6 {
      @apply font-bold justify-end flex w-full mt-5 md:text-6xl text-3xl;
    }
     .content-text {
       @apply md:text-2xl text-xl font-extralight;
     }
    ul li {
      /* Bullet color */
      color: white;
      list-style-type: disc;
    }

    .diagonal-shape {
      height: 0;
      border-style: solid;
      border-width: 0 0 40px 100vw;
      border-color: transparent rgba(1,14,51,0.95) rgba(1,14,51,0.95) transparent;
    }

    `
  ],
  animations: [fadeInOut('10s', '5s')]
})
export class AppComponent implements OnInit {
  document = inject(DOCUMENT);

  ngOnInit() {
    this.document.body.classList.add('bg');
  }
}
