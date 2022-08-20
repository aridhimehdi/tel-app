import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './pages/main/main.component';
import { AuthGuard } from './utils/guards/auth.guard';
import { ReactiveFormsModule } from '@angular/forms';
import { AddSimComponent } from './views/add-sim/add-sim.component';
import { ArchiveComponent } from './views/archive/archive.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: MainComponent,
    canActivate: [AuthGuard],
    children:[
      {
        path:"addsim",
        component:AddSimComponent
      },
      {
        path:"archive",
        component:ArchiveComponent
      }
    ]
    
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
