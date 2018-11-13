import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [
    HomepageComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,

    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: HomepageComponent}
    ])
  ]
})
export class HomeModule {}
