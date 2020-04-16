
import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { TimerService } from "../commons/services/timer.service";
import { Observable } from "rxjs";

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
    constructor(private service: TimerService) { }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let url = request.url;
        if (!url.includes('change-password-by-user')) {
            let token = localStorage.getItem('token');
            request = request.clone({
                withCredentials: true,
                setHeaders: {
                    'Content-Type': 'application/json',
                    // 'Authorization': `Bearer ${token}`
                }
            });
        }
        return next.handle(request);
    }
}