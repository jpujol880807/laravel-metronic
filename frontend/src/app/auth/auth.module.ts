import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {BaseRequestOptions, HttpModule} from "@angular/http";
import {MockBackend} from "@angular/http/testing";

import {AuthRoutingModule} from "./auth-routing.routing";
import {AuthComponent} from "./auth.component";
import {AlertComponent} from "./_directives/alert.component";
import {LogoutComponent} from "./logout/logout.component";
import {AuthGuard} from "./_guards/auth.guard";
import {AlertService} from "./_services/alert.service";
import {AuthenticationService} from "./_services/authentication.service";
import {UserService} from "./_services/user.service";
import {fakeBackendProvider} from "./_helpers/index";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AllInterceptor} from "./auth-interceptor";

@NgModule({
	declarations: [
		AuthComponent,
		AlertComponent,
		LogoutComponent,
	],
	imports: [
		CommonModule,
		FormsModule,
		HttpClientModule,
		AuthRoutingModule,
	],
	providers: [
		AuthGuard,
		AlertService,
		AuthenticationService,
		UserService,
		// api backend simulation
		// fakeBackendProvider,
		// MockBackend,
		// BaseRequestOptions,
		{
			provide: HTTP_INTERCEPTORS,
			useClass: AllInterceptor,
			multi: true
		},

	],
	entryComponents: [AlertComponent]
})

export class AuthModule {
}