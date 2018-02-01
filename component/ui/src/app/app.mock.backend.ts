import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod, XHRBackend, RequestOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { OperatorEndpoint, AddOperatorEndpointParam, Operator, GetOperatorEndpointParam, TokenData, TokenDataEndpointParam} from './commons/models/operator-onboarding-data-models';
import { apiEndpoints } from './config/api.endpoints';


export function mockBackendFactory(backend: MockBackend, options: BaseRequestOptions, realBackend: XHRBackend) {

    backend.connections.subscribe((connection: MockConnection) => {
        setTimeout(() => {

            /*
                 ADD OPERATOR MOCK 
            */
            if (connection.request.url.endsWith(apiEndpoints.operatorOnboarding.addOperator) &&
                connection.request.method === RequestMethod.Post) {

                const param: Operator = JSON.parse(connection.request.getBody());

                const allOperators: Operator[] = JSON.parse(localStorage.getItem('operators')) || [];

                allOperators.push(param);
                localStorage.setItem('operators', JSON.stringify(allOperators));
                connection.mockRespond(new Response(new ResponseOptions({
                    status: 200,
                    body: { success: true }
                })));

                return;
            }

            /*
                 GET OPERATORS MOCK 
            */
            if (connection.request.url.endsWith(apiEndpoints.operatorOnboarding.getOperators) &&
                connection.request.method === RequestMethod.Get) {

                const allOperators: Operator[] = JSON.parse(localStorage.getItem('operators')) || [];
                connection.mockRespond(new Response(new ResponseOptions({
                    status: 200,
                    body: allOperators
                })));

                return;
            }


            /*
                 GET OPERATOR BY MNC MOCK 
            */
            if (connection.request.url.endsWith(apiEndpoints.operatorOnboarding.getOperatorByMnc) &&
                connection.request.method === RequestMethod.Post) {

                const allOperators: Operator[] = JSON.parse(localStorage.getItem('operators')) || [];
                const param = +connection.request.getBody();
                connection.mockRespond(new Response(new ResponseOptions({
                    status: 200,
                    body: (allOperators.filter((op) => {

                        return op.mnc == param;
                    })[0])
                })));

                return;
            }

            /*
                 GET OPERATOR ENDPOINTS For OPERATOR MOCK 
            */
            if (connection.request.url.endsWith(apiEndpoints.operatorOnboarding.getEndpoints) &&
                connection.request.method === RequestMethod.Post) {
                const allEndpoints = JSON.parse(localStorage.getItem('operator-endpoints')) || [];
                const param = parseInt(connection.request.getBody(), 10);

                const filtered = allEndpoints.filter((oep: OperatorEndpoint) => {
                    return oep.operatorMnc == param;
                });

                connection.mockRespond(new Response(new ResponseOptions({
                    status: 200,
                    body: filtered
                })));
                return;
            }


            /*
                 GET OPERATOR ENDPOINT BY OPERATOR MNC and ENDPOINT ID MOCK 
            */
            if (connection.request.url.endsWith(apiEndpoints.operatorOnboarding.getEndpointById) &&
                connection.request.method === RequestMethod.Post) {

                const allEndpoints = JSON.parse(localStorage.getItem('operator-endpoints')) || [];
                const param: GetOperatorEndpointParam = JSON.parse(connection.request.getBody());

                const filtered = allEndpoints.filter((oep: OperatorEndpoint) => {
                    return oep.operatorMnc == param.operatorMnc && oep.id == param.endpointId;
                });

                connection.mockRespond(new Response(new ResponseOptions({
                    status: 200,
                    body: filtered.length && filtered[0]
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
                        operatorMnc: param.operatorMnc,
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
                UPDATE OPERATOR ENDPOINT MOCK
             */
            if (connection.request.url.endsWith(apiEndpoints.operatorOnboarding.updateEndpoint) &&
                connection.request.method === RequestMethod.Post) {

                const p: AddOperatorEndpointParam = JSON.parse(connection.request.getBody());
                const ep: OperatorEndpoint[] = JSON.parse(localStorage.getItem('operator-endpoints')) || [];
                const filtered = ep.filter((o) => o.operatorMnc == p.operatorMnc && o.id != p.endpointId);
                filtered.push(
                    {
                        id: p.endpointId,
                        operatorMnc: p.operatorMnc,
                        api: p.api,
                        endpointUrl: p.endpointUrl
                    }
                );
                localStorage.setItem('operator-endpoints', JSON.stringify(filtered));

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
			
			 /*
             ADD TOKEN MOCK
             */
            if (connection.request.url.endsWith(apiEndpoints.operatorOnboarding.addToken) &&
                connection.request.method === RequestMethod.Post) {
                const param: TokenDataEndpointParam = JSON.parse(connection.request.getBody());
                const ep: TokenData[] = JSON.parse(localStorage.getItem('tokendata')) || [];
                ep.push(
                    {
                        id: ep.length + 1,
                        name: param.name,
                        validity: param.validity,
                        date: param.date,
                        url: param.url,
                        type: param.type
                    }
                );
                localStorage.setItem('tokendata', JSON.stringify(ep));
                connection.mockRespond(new Response(new ResponseOptions({
                    status: 200,
                    body: { success: true }
                })));
                return;
            }

            /*
             GET TOKEN MOCK
             */
            if (connection.request.url.endsWith(apiEndpoints.operatorOnboarding.getToken) &&
                connection.request.method === RequestMethod.Get) {

                const alltoken: TokenData[] = JSON.parse(localStorage.getItem('tokendata')) || [];
                connection.mockRespond(new Response(new ResponseOptions({
                    status: 200,
                    body: alltoken
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
