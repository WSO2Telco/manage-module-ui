/**
 * Created by sahanK on 10/01/18.
 */
import { Component, OnInit, OnDestroy } from '@angular/core';
import { OperatorOnboardingDataService } from 'app/data-providers/operator-onboarding-data.service';
import { Country, Brand, CountryOperator, Operator } from 'app/commons/models/operator-onboarding-data-models';
import { FieldSet } from 'app/commons/models/common-data-models';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router/src/router_state';

@Component({
    selector: 'app-operatoronboarding-main',
    templateUrl: './operatoronboarding.component.html',
    styleUrls: ['./operatoronboarding.component.scss']
})
export class OperatorOnboardingMainComponent implements OnInit, OnDestroy {

    /*Used in edit mode*/
    private operatorMNC: number;
    private operatorToBeEdited: Operator;

    public countryList: Country[];
    public brandList: Brand[];
    public operatorsList: CountryOperator[];
    public onboardOperators: Operator[];

    public selectedCountry: Country;
    public selectedBrand: Brand;
    public selectedOperator: CountryOperator;
    public operatorDescrption: string;

    public operatorName: string;
    public brandName: string;

    /*
    subscriptns
    */
    private operatorMncSubscription;
    private countriesProviderSubscription;
    private brandProviderSubscription;
    private operatorProviderSubscription;
    private onboardOperatorProviderSubscription;

    private fieldSet: FieldSet[] = [
        { columnName: 'Operator', fieldName: 'operator' },
        { columnName: 'Brand Name', fieldName: 'brand' },
        { columnName: 'MCC', fieldName: 'mcc' },
        { columnName: 'MNC', fieldName: 'mnc' },
        { columnName: 'Country', fieldName: 'countryName' },
        { columnName: 'Country Code', fieldName: 'countryCode' },
        { columnName: 'Status', fieldName: 'status' }];

    constructor(
        private router: Router,
        private service: OperatorOnboardingDataService,
        private activatedRoute: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.operatorMncSubscription = this.activatedRoute.params.subscribe(params => {
            this.operatorMNC = +params['operator-mnc'];
            if (!!this.operatorMNC) {
                this.service.getOperatorByMnc(this.operatorMNC);
            }
        });

        this.service.SelectedOperatorProvider.subscribe((op) => {
            this.operatorToBeEdited = op;
        });

        this.countriesProviderSubscription = this.service.CountriesProvider.subscribe((countries) => {
            this.countryList = countries;
        });

        this.brandProviderSubscription = this.service.BrandProvider.subscribe((brands) => {
            this.brandList = brands;
        });

        this.operatorProviderSubscription = this.service.OperatorProvider.subscribe((operators) => {
            this.operatorsList = operators;
        });

        this.onboardOperatorProviderSubscription = this.service.OnboardOperatorProvider.subscribe((op) => {
            this.onboardOperators = op;
        });

        this.service.loadCountries();
        this.service.getOperators();
    }

    ngOnDestroy(): void {
        this.operatorMncSubscription.unsubscribe();
        this.countriesProviderSubscription.unsubscribe();
        this.brandProviderSubscription.unsubscribe();
        this.operatorProviderSubscription.unsubscribe();
        this.onboardOperatorProviderSubscription.unsubscribe();
    }

    public onCountrySelected(event) {
        this.selectedCountry = event && event.item;
        this.brandName = '';
        this.operatorName = '';
        this.service.loadBrandsForCountry(this.selectedCountry);
    }

    public onCountryType() {
        this.brandName = '';
        this.operatorName = '';
    }

    public onBrandSelected(event) {
        this.selectedBrand = event && event.item;
        this.operatorName = '';
        this.service.loadOperatorsForCountryBrand(this.selectedCountry, this.selectedBrand);
    }

    public onOperatorSelected(event) {
        this.selectedOperator = event && event.item;
    }

    public OpOnboardingFormSubmit(form) {
        if (form.valid) {
            this.service.addOperator({
                type: this.selectedOperator.type,
                countryName: this.selectedOperator.countryName,
                countryCode: this.selectedOperator.countryCode,
                mcc: this.selectedOperator.mcc,
                mnc: this.selectedOperator.mnc,
                brand: this.selectedOperator.brand,
                operator: this.selectedOperator.operator,
                status: this.selectedOperator.status,
                bands: this.selectedOperator.bands,
                notes: this.selectedOperator.notes,
                description: this.operatorDescrption
            });
            form.reset();
        }
    }




    onIconClick(op: Operator, action: string) {

        switch (action) {
            case 'EDIT':
                break;

            case 'ENDPOINT':
                this.router.navigate(['operator/onboarding/api-endpints'], { queryParams: { 'operator-mnc': op.mnc } });
                break;

            case 'TOKEN':
                this.router.navigate(['operator/onboarding/set-token']);
                break;

            default:
                break;
        }
    }


}

