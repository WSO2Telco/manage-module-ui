export const apiEndpoints = {
    operatorOnboarding: {
        getOperators: '/operator/onboarding/get/operators',
        getOperatorByMnc: '/operator/onboarding/get/operator',
        addOperator: '/operator/onboarding/add/operator',
        getEndpoints: '/operator/onboarding/get/endpoints',
        getEndpointById: '/operator/onboarding/get/endpoint',
        addEndpoint: '/operator/onboarding/add/endpoint',
        updateEndpoint: '/operator/onboarding/update/endpoint',
        deleteEndpoint: '/operator/onboarding/delete/endpoint',
        getCountries: 'https://raw.githubusercontent.com/pbakondy/mcc-mnc-list/master/mcc-mnc-list.json',
    }
};
