import { Configuration } from '../models/common-data-models';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ConfigService {
    private config: Configuration;

    constructor(private http: HttpClient) {
    }

    load(url: string) {
        return new Promise(
            (resolve) => {
                this.http.get<Configuration>(url)
                    .subscribe(config => {
                        this.config = config;
                        resolve();
                    });
            });
    }

    getConfiguration(): Configuration {
        return this.config;
    }

}