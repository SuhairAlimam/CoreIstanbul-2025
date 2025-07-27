import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialComponent } from './angular-material.component';
import { BadgesComponent } from './badges/badges.component';
import { ButtonTogglesComponent } from './button-toggles/button-toggles.component';
import { SharedModule } from '../shared/shared.module';
import { TypographyComponent } from './typography/typography.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { IconsComponent } from './icons/icons.component';
import { MenusComponent } from './menus/menus.component';
import { PanelsComponent } from './panels/panels.component';
import { TabsComponent } from './tabs/tabs.component';
import { StepperComponent } from './stepper/stepper.component';
import { DialogsComponent } from './dialogs/dialogs.component';
import { AngularMaterialRoutingModule } from './angular-material-routing.module';
import { FormsModule } from '@angular/forms';
import { InputsComponent } from '../form/inputs/inputs.component';



@NgModule({
  declarations: [
    AngularMaterialComponent,
    TypographyComponent,
    ButtonsComponent,
    ButtonTogglesComponent,
    IconsComponent,
    BadgesComponent,
    MenusComponent,
    PanelsComponent,
    TabsComponent,
    StepperComponent,
    DialogsComponent,
    InputsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule, 
    AngularMaterialRoutingModule
  ]
})
export class AngularMaterialModule { }
