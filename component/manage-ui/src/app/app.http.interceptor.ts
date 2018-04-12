import {
  Http,
  ConnectionBackend,
  Request,
  Response,
  RequestOptions,
  RequestOptionsArgs
} from "@angular/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { TimerService } from "./commons/services/timer.service";

@Injectable()
export class AppHTTPInterceptor extends Http {
  constructor(
    backend: ConnectionBackend,
    defaultOptions: RequestOptions,
    private service:TimerService
  ) {
    super(backend, defaultOptions);
  }

  request(
    url: string | Request,
    options?: RequestOptionsArgs
  ): Observable<Response> {

    this.service.resetLogoutTimer();
    return super.request(url, options);
  }

  
}
