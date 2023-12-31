import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { logoutAction } from '../auth/store/auth.actions';
import { selectedAuthUser } from '../auth/store/auth.selectors';
import { User } from '../auth/store/auth.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  mobileQueryData?: MediaQueryList;
  opened = true
  user$= this.store.select(selectedAuthUser)
  toogleSidebarEvent(status:boolean){
    this.opened = status;
  }

  private _mobileQueryListener: () => void;
  constructor(
    private store:Store,
    changeDetectorRef: ChangeDetectorRef,
     media: MediaMatcher
  ){
    this.mobileQueryData = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQueryData.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQueryData?.removeListener(this._mobileQueryListener);
  }
}
