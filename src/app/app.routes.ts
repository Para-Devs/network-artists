import {Routes} from '@angular/router';
import {ConnectComponent} from './routes/connect/connect.component';
import {HomeComponent} from './routes/home/home.component';
import {MethodComponent} from './routes/method/method.component';
import {MissionComponent} from './routes/mission/mission.component';
import {ServiceComponent} from './routes/service/service.component';
import {VisionComponent} from './routes/vision/vision.component';

export const appRoutes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home' },
  {path: 'home', pathMatch: 'full', component: HomeComponent },
  {path: 'connect', pathMatch: 'full', component: ConnectComponent},
  {path: 'method', pathMatch: 'full', component: MethodComponent},
  {path: 'mission', pathMatch: 'full', component: MissionComponent},
  {path: 'service', pathMatch: 'full', component: ServiceComponent},
  {path: 'vision', pathMatch: 'full', component: VisionComponent}
]
