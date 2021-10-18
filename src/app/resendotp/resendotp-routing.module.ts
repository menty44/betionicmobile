import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResendotpPage } from './resendotp.page';

const routes: Routes = [
  {
    path: '',
    component: ResendotpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResendotpPageRoutingModule {}
