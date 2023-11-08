import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FormsModule } from './pages/forms/forms.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { UsersModule } from './pages/users/users.module';
import { SharedModule } from '../shared/shared.module';
import { MatListModule} from '@angular/material/list';
import { ToolbarComponent } from './component/toolbar/toolbar.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { DashboardRountingModule } from './dashboard-routing.module';
import { UsersRoutingModule } from './pages/users/users-routing.module';

@NgModule({
  declarations: [
    DashboardComponent,
    ToolbarComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    SharedModule,
    DashboardRountingModule,
    ],

  exports: [DashboardComponent]
  
})
export class DashboardModule {
  
}
