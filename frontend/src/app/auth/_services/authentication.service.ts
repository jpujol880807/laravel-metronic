import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import "rxjs/add/operator/map";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class AuthenticationService {
	clientId: number = 2;
	clientSecret: string = 'EgiCjJEZgpzThiFGoPaXpRrAm1qnhoFLUswG2Rnu';
	constructor(private http: HttpClient) {
	}

	login(email: string, password: string) {
		return this.http.post('/oauth/token',{
			username: email,
			password: password,
			grant_type: 'password',
			client_id: this.clientId,
			client_secret: this.clientSecret
		})
			// .subscribe((response) => {
			// 	// login successful if there's a jwt token in the response
			// 	let token = response;
			// 	if (token) {
			// 		// store user details and jwt token in local storage to keep user logged in between page refreshes
			// 		localStorage.setItem('token', JSON.stringify(token));
			// 	}
			// });
	}


	logout() {
		// remove user from local storage to log user out
		localStorage.removeItem('token');
		localStorage.removeItem('user');
	}
}