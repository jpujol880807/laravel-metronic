import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {UserService} from "../_services/user.service";
import {Observable} from "rxjs/Rx";

@Injectable()
export class AuthGuard implements CanActivate {

	constructor(private _router: Router, private _userService: UserService) {
	}

	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
		this._userService.verify().subscribe(data=>{
			localStorage.setItem('user',JSON.stringify(data));
		}, error =>{
			localStorage.removeItem('user');
		});
		let tokenObject = JSON.parse(localStorage.getItem('token'));
		if(tokenObject && tokenObject.access_token != null)
			return true;
		return false;
	}
}