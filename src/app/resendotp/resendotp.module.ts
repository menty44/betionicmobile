import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResendotpPageRoutingModule } from './resendotp-routing.module';

import { ResendotpPage } from './resendotp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResendotpPageRoutingModule
  ],
  declarations: [ResendotpPage]
})
export class ResendotpPageModule {}
