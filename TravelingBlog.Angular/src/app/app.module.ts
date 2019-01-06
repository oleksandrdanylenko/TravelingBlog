import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, XHRBackend } from '@angular/http';
import { AuthenticateXHRBackend } from './authenticate-xhr.backend';

import { routing } from './app.routing';

/* App Root */
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

/* Account Imports */
import { AccountModule } from './account/account.module';
/* Dashboard Imports */
import { DashboardModule } from './dashboard/dashboard.module';
/*Edit Imports */
import { EditModule } from './edit/edit.module';
import { UserInfoModule } from './userinfo/userinfo.module';

import { ConfigService } from './shared/utils/config.service';
import { FooterComponent } from './footer/footer.component';
import { TripsModule } from './trips/trips.module';
import { SearchModule } from './search/search.module';
import { AdminComponent } from './admin/admin.component';
import { HasRoleDirective } from './directives/has-role.directive';
import { AdminService } from './admin/admin.service';
import { UserManagementComponent } from './admin/user-management/user-management.component';
import {TabsModule, ModalModule} from 'ngx-bootstrap';
import { RolesModalComponent } from './admin/roles-modal/roles-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    AdminComponent,
    HasRoleDirective,
    UserManagementComponent,
    RolesModalComponent
  ],
  imports: [
    AccountModule,
    DashboardModule,
    EditModule,
    UserInfoModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    TripsModule,
    SearchModule,
    routing,
    TabsModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [ConfigService, {
    provide: XHRBackend,
    useClass: AuthenticateXHRBackend
  },AdminService],
  entryComponents: [
    RolesModalComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
