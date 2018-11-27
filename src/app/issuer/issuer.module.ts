import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IssuerComponent } from './issuer.component';
import { IssuerCreateComponent } from './issuer-create/issuer-create.component';
import { IssuerListComponent } from './issuer-list/issuer-list.component';
import { IssuerViewComponent } from './issuer-view/issuer-view.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [IssuerComponent, IssuerCreateComponent, IssuerListComponent, IssuerViewComponent]
})
export class IssuerModule { }
