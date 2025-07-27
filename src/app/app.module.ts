import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { SquarePipe } from './pipes/square.pipe';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { PipesComponent } from './pipes/pipes.component';
import { TemplateReferenceVariableComponent } from './template-reference-variable/template-reference-variable.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { TypographyComponent } from './angular-material/typography/typography.component';
import { ButtonsComponent } from './angular-material/buttons/buttons.component';
import { SharedModule } from './shared/shared.module';
import { ButtonTogglesComponent } from './angular-material/button-toggles/button-toggles.component';
import { IconsComponent } from './angular-material/icons/icons.component';
import { BadgesComponent } from './angular-material/badges/badges.component';
import { MenusComponent } from './angular-material/menus/menus.component';
import { PanelsComponent } from './angular-material/panels/panels.component';
import { TabsComponent } from './angular-material/tabs/tabs.component';
import { StepperComponent } from './angular-material/stepper/stepper.component';
import { InputsComponent } from './form/inputs/inputs.component';
import { DialogsComponent } from './angular-material/dialogs/dialogs.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { EmployeeListComponent } from './employee/components/employee-list/employee-list.component';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './not-found/not-found.component';
import { EmployeeDetailsComponent } from './employee/components/employee-details/employee-details.component';
import { UserListComponent } from './user/components/user-list/user-list.component';
import { UserDetailsComponent } from './user/components/user-details/user-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    SquarePipe,
    ParentComponent,
    ChildComponent,
    ClassBindingComponent,
    InterpolationComponent,
    PropertyBindingComponent,
    StyleBindingComponent,
    EventBindingComponent,
    PipesComponent,
    TemplateReferenceVariableComponent,
    TwoWayBindingComponent,
    BootstrapComponent,
    EmployeeListComponent,
    NotFoundComponent,
    EmployeeDetailsComponent,
    UserListComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule, 
    NgbModule,
    FormsModule,
    HttpClientModule // Ensure HttpClientModule is imported for HTTP requests
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
