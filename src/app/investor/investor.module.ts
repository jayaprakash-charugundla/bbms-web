import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvestorCreateComponent } from './investor-create/investor-create.component';
import { InvestorListComponent } from './investor-list/investor-list.component';
import { InvestorViewComponent } from './investor-view/investor-view.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [InvestorCreateComponent, InvestorListComponent, InvestorViewComponent]
})
export class InvestorModule { }
