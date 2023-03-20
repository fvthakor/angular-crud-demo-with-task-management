import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { MatirialModule } from 'src/app/matirial.module';
import { StoreModule } from '@ngrx/store';
import * as fromUser from './store/user.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './store/user.effects';
import { ViewUserComponent } from './view-user/view-user.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
  },
  {
    path:':id',
    component: UserComponent
  }
]

@NgModule({
  declarations: [
    UserComponent,
    UserListComponent,
    ViewUserComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatirialModule,
    StoreModule.forFeature(fromUser.userFeatureKey, fromUser.reducer),
    EffectsModule.forFeature([UserEffects])
  ]
})
export class UserModule { }
