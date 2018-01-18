import {Injectable} from "@angular/core";

import {User} from "../_models/index";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class UserService {
	constructor(private http: HttpClient) {
	}

	verify() {
		return this.http.get('/api/user');
	}

	forgotPassword(email: string) {
		return this.http.post('/api/forgot-password', {email: email});
	}

	getAll() {
		return this.http.get('/api/users');
	}

	getById(id: number) {
		return this.http.get('/api/users/' + id);
	}

	create(user: User) {
		return this.http.post('/api/users', user);
	}

	update(user: User) {
		return this.http.put('/api/users/' + user.id, user);
	}

	delete(id: number) {
		return this.http.delete('/api/users/' + id);
	}

	// private helper methods
}