import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { TopNavComponent } from './layout/top-nav/top-nav.component';
import { SideNavComponent } from './layout/side-nav-left/side-nav/side-nav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SideNavClosedComponent } from './layout/side-nav-left/side-nav-closed/side-nav-closed.component';
import { MaterialModule } from '../material.module';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule
  ],
  declarations: [
    LayoutComponent, 
    TopNavComponent, 
    SideNavComponent, 
    SideNavClosedComponent, 
  ],
  providers: []
})
export class AdminModule {}
