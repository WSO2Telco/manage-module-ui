import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod, XHRBackend, RequestOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { OperatorEndpoint, AddOperatorEndpointParam } from './commons/models/operator-onboarding-data-models';
import { apiEndpoints } from './config/api.endpoints';

export function mockBackendFactory(backend: MockBackend, options: BaseRequestOptions, realBackend: XHRBackend) {

    backend.connections.subscribe((connection: MockConnection) => {
        setTimeout(() => {
            /*
                 GET OPERATOR ENDPOINT MOCK 
            */
            if (connection.request.url.endsWith(apiEndpoints.operatorOnboarding.getEndpoints) &&
                connection.request.method === RequestMethod.Post) {
                const allEndpoints = JSON.parse(localStorage.getItem('operator-endpoints')) || [];
                const param = parseInt(connection.request.getBody(), 10);
                const filtered = allEndpoints.filter((oep: OperatorEndpoint) => {
                    return oep.operatorId === param;
                });

                connection.mockRespond(new Response(new ResponseOptions({
                    status: 200,
                    body: filtered
                })));
                return;
            }

            /* 
                ADD OPERATOR ENDPOINT MOCK
             */
            if (connection.request.url.endsWith(apiEndpoints.operatorOnboarding.addEndpoint) &&
                connection.request.method === RequestMethod.Post) {
                const param: AddOperatorEndpointParam = JSON.parse(connection.request.getBody());
                const ep: OperatorEndpoint[] = JSON.parse(localStorage.getItem('operator-endpoints')) || [];
                ep.push(
                    {
                        id: ep.length + 1,
                        operatorId: param.operatorId,
                        api: param.api,
                        endpointUrl: param.endpointUrl
                    }
                );
                localStorage.setItem('operator-endpoints', JSON.stringify(ep));
                connection.mockRespond(new Response(new ResponseOptions({
                    status: 200,
                    body: { success: true }
                })));
                return;
            }
            /* 
                DELETE OPERATOR ENDPOINT MOCK
            */
            if (connection.request.url.endsWith(apiEndpoints.operatorOnboarding.deleteEndpoint) &&
                connection.request.method === RequestMethod.Post) {
                const endpointId = parseInt(connection.request.getBody(), 10);
                const ep = JSON.parse(localStorage.getItem('operator-endpoints')) || [];
                const filtered = ep.filter((e: OperatorEndpoint) => e.id !== endpointId);
                localStorage.setItem('operator-endpoints', JSON.stringify(filtered));

                connection.mockRespond(new Response(new ResponseOptions({
                    status: 200,
                    body: { success: true }
                })));
                return;
            }

            // pass through any requests not handled above
            const realHttp = new Http(realBackend, options);
            const requestOptions = new RequestOptions({
                method: connection.request.method,
                headers: connection.request.headers,
                body: connection.request.getBody(),
                url: connection.request.url,
                withCredentials: connection.request.withCredentials,
                responseType: connection.request.responseType
            });
            realHttp.request(connection.request.url, requestOptions)
                .subscribe((response: Response) => {
                    connection.mockRespond(response);
                },
                (error: any) => {
                    connection.mockError(error);
                });

        }, 500);

    });

    return new Http(backend, options);
};

export const MockBackendProvider = {
    provide: Http,
    useFactory: mockBackendFactory,
    deps: [MockBackend, BaseRequestOptions, XHRBackend]
};
