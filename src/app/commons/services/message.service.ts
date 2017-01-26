import {Injectable} from '@angular/core';
import {ToastyService, ToastOptions, ToastyConfig, toastyServiceFactory} from "ng2-toasty";

@Injectable()
export class MessageService {

    constructor(private toast: ToastyService) {
    }

    private toastOptions: ToastOptions = {
        title: '',
        msg: '',
        showClose: true,
        timeout: 5000,
        theme: 'material'
    };


    success(message: string, title?: string) {
        this.toast.success(Object.assign({}, this.toastOptions, {title, msg: message}));
    }

    error(message: string, title?: string) {
        this.toast.error(Object.assign({}, this.toastOptions, {title, msg: message}));
    }

    warning(message: string, title?: string) {
        this.toast.warning(Object.assign({}, this.toastOptions, {title, msg: message}));
    }

    info(message: string, title?: string) {
        this.toast.info(Object.assign({}, this.toastOptions, {title, msg: message}));
    }

}
