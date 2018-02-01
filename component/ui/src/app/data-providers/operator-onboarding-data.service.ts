import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import {
  Operator, OperatorEndpoint, AddOperatorEndpointParam,
  Country, CountryOperator, Brand, GetOperatorEndpointParam,TokenData,
  TokenDataEndpointParam
} from '../commons/models/operator-onboarding-data-models';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import { MessageService } from 'app/commons/services/message.service';
import { apiEndpoints } from '../config/api.endpoints';
import { AuthenticationService } from 'app/commons/services/authentication.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class OperatorOnboardingDataService {

  public OperatoEndpointProvider: Subject<OperatorEndpoint[]> = new BehaviorSubject<OperatorEndpoint[]>(null);
  public CountriesProvider: Subject<Country[]> = new BehaviorSubject<Country[]>(null);
  public BrandProvider: Subject<Brand[]> = new BehaviorSubject<Brand[]>([]);
  public OperatorProvider: Subject<CountryOperator[]> = new BehaviorSubject<CountryOperator[]>([]);
  public OnboardOperatorProvider: Subject<Operator[]> = new BehaviorSubject<Operator[]>([]);
  public SelectedOperatorProvider: Subject<Operator> = new BehaviorSubject<Operator>(null);
  public SelectedOperatorEndpointProvider: Subject<OperatorEndpoint> = new BehaviorSubject<OperatorEndpoint>(null);
  public TokenProvider: Subject<TokenData[]> = new BehaviorSubject<TokenData[]>([]);


  private countriesResult: CountryOperator[];

  constructor(private http: Http,
    private slimLoadingBarService: SlimLoadingBarService,
    private authService: AuthenticationService,
    private message: MessageService) { }


  addOperator(operator: Operator) {
    this.slimLoadingBarService.start();
    this.http.post(apiEndpoints.operatorOnboarding.addOperator, operator, this.getOptions())
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw({
        success: false,
        message: 'Error Add Operator',
        error: error
      }))
      .subscribe(data => {
        this.message.success('Operator successfully added');
        this.getOperators();
        this.slimLoadingBarService.complete();
      },
      error => {
        this.message.error(error.message);
        this.slimLoadingBarService.stop();
      });
  }

  getOperators() {
    this.slimLoadingBarService.start();
    this.http.get(apiEndpoints.operatorOnboarding.getOperators, this.getOptions())
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw({
        success: false,
        message: 'Error Loading Operator List',
        error: error
      }))
      .subscribe(data => {
        this.OnboardOperatorProvider.next(data);
        this.slimLoadingBarService.complete();
      },
      error => {
        this.message.error(error.message);
        this.slimLoadingBarService.stop();
      });
  }

  getOperatorByMnc(mnc: number) {
    this.slimLoadingBarService.start();
    this.http.post(apiEndpoints.operatorOnboarding.getOperatorByMnc, mnc, this.getOptions())
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw({
        success: false,
        message: 'Error Loading Operator',
        error: error
      }))
      .subscribe(data => {
        this.SelectedOperatorProvider.next(data);
        this.slimLoadingBarService.complete();
      },
      error => {
        this.message.error(error.message);
        this.slimLoadingBarService.stop();
      });
  }

  getOperatorEndpoints(operatorId: number) {
    this.slimLoadingBarService.start();
    this.http.post(apiEndpoints.operatorOnboarding.getEndpoints, operatorId, this.getOptions())
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw({
        success: false,
        message: 'Error Loading Operator Api endpoints',
        error: error
      }))
      .subscribe(data => {
        this.OperatoEndpointProvider.next(data);
        this.slimLoadingBarService.complete();
      },
      error => {
        this.message.error(error.message);
        this.slimLoadingBarService.stop();
      });
  }


  addOperatorEndpoint(param: AddOperatorEndpointParam) {
    this.slimLoadingBarService.start();
    this.http.post(apiEndpoints.operatorOnboarding.addEndpoint, param, this.getOptions())
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw({
        success: false,
        message: 'Error Loading Operator Api endpoints',
        error: error
      }))
      .subscribe(data => {
        this.getOperatorEndpoints(param.operatorMnc);
        this.message.success('API endpoint successfully added');
        this.slimLoadingBarService.complete();
      },
      error => {
        this.message.error(error.message);
        this.slimLoadingBarService.stop();
      });
  }
 
  updateOperatorEndpoint(param: AddOperatorEndpointParam) {
    this.slimLoadingBarService.start();
    this.http.post(apiEndpoints.operatorOnboarding.updateEndpoint, param, this.getOptions())
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw({
        success: false,
        message: 'Error Updating Operator Api endpoints',
        error: error
      }))
      .subscribe(data => {
        this.getOperatorEndpoints(param.operatorMnc);
        this.message.success('API endpoint successfully updated');
        this.slimLoadingBarService.complete();
      },
      error => {
        this.message.error(error.message);
        this.slimLoadingBarService.stop();
      });
  }

  deleteOperatorEndpoint(endpoint: OperatorEndpoint) {
    this.slimLoadingBarService.start();
    this.http.post(apiEndpoints.operatorOnboarding.deleteEndpoint, endpoint.id, this.getOptions())
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw({
        success: false,
        message: 'Error Delete Operator Api endpoints',
        error: error
      }))
      .subscribe(data => {
        this.getOperatorEndpoints(endpoint.operatorMnc);
        this.message.success('API endpoint successfully deleted');
        this.slimLoadingBarService.complete();
      },
      error => {
        this.message.error(error.message);
        this.slimLoadingBarService.stop();
      });
  }

  setSelectedOperatorEndpointById(param: GetOperatorEndpointParam) {
    this.slimLoadingBarService.start();
    this.http.post(apiEndpoints.operatorOnboarding.getEndpointById, param, this.getOptions())
      .map((response: Response) => response.json())
      .catch((error: Response) => Observable.throw({
        success: false,
        message: 'Error Retrieving Operator Api endpoints',
        error: error
      }))
      .subscribe(data => {
        this.SelectedOperatorEndpointProvider.next(data);
        this.slimLoadingBarService.complete();
      },
      error => {
        this.message.error(error.message);
        this.slimLoadingBarService.stop();
      });
  }


  loadCountries() {
    if (!!this.countriesResult) {
      this.CountriesProvider.next(this.countriesAdaptor(this.countriesResult));
    } else {
      this.http.get(apiEndpoints.operatorOnboarding.getCountries)
        .map((response: Response) => response.json())
        .catch((error: Response) => Observable.throw({
          success: false,
          message: 'Error Load Countries',
          error: error
        }))
        .subscribe(data => {
          this.CountriesProvider.next(this.countriesAdaptor(data));
          this.slimLoadingBarService.complete();
        },
        error => {
          this.message.error(error.message);
          this.slimLoadingBarService.stop();
        });
    }
  }

  loadBrandsForCountry(country: Country) {
    if (!!this.countriesResult && !!country) {
      this.BrandProvider.next(this.brandAdaptor(this.countriesResult, country));
    } else {
      this.BrandProvider.next([]);
    }
  }

  loadOperatorsForCountryBrand(country: Country, brand: Brand) {
    if (!!this.countriesResult) {
      this.OperatorProvider.next(this.operatorAdaptor(this.countriesResult, country, brand));
    } else {
      this.BrandProvider.next([]);
    }
  }


  private brandAdaptor(result: CountryOperator[], country: Country): Brand[] {
    if (result) {
      return (result.filter((co: CountryOperator) => co.countryCode === country.countryCode)
        .reduce((acc, item) => {
          if (acc.brandArr.indexOf(item.brand.toUpperCase()) < 0) {
            acc.brandArr.push(item.brand.toUpperCase());
            acc.filtered.push(new Brand(item.brand.toUpperCase(), item.mcc));
          }
          return acc;
        }, { brandArr: [], filtered: [] })).filtered;
    } else {
      return [];
    }
  }

  private operatorAdaptor(result: CountryOperator[], country: Country, brand: Brand): CountryOperator[] {
    if (result) {
      return result.filter((co: CountryOperator) => co.countryCode === country.countryCode && co.brand.toUpperCase() === brand.brandName)
    } else {
      return [];
    }
  }

  private countriesAdaptor(result: CountryOperator[]): Country[] {
    if (result) {
      this.countriesResult = result;
      return (this.countriesResult.map((obj) => {
        return {
          countryName: obj.countryName,
          countryCode: obj.countryCode,
          mcc: obj.mcc
        };
      }).reduce((acc, item) => {
        if (acc.nameArr.indexOf(item.countryCode) < 0 && item.countryCode !== null) {
          acc.countries.push(item);
          acc.nameArr.push(item.countryCode);
        }
        return acc;
      }, { countries: [], nameArr: [] })).countries;
    } else {
      return [];
    }
  }

  private getOptions(): RequestOptions {
    const token = this.authService.loginUserInfo.getValue().token;
    const useName = this.authService.loginUserInfo.getValue().userName;
    const headers = new Headers(
      {
        'Authorization': 'Basic ' + token,
        'user-name': useName,
        'Content-Type': 'application/json'
      });
    return new RequestOptions({ headers: headers });
  }

  addToken(token: TokenDataEndpointParam) {
    this.slimLoadingBarService.start();
    this.http.post(apiEndpoints.operatorOnboarding.addToken, token, this.getOptions())
        .map((response: Response) => response.json())
        .catch((error: Response) => Observable.throw({
          success: false,
          message: 'Error Add Token',
          error: error
        }))
        .subscribe(data => {
              this.message.success('Token successfully added');
              this.getToken();
              this.slimLoadingBarService.complete();
            },
            error => {
              this.message.error(error.message);
              this.slimLoadingBarService.stop();
            });
  }

  getToken() {
    this.slimLoadingBarService.start();
    this.http.get(apiEndpoints.operatorOnboarding.getToken, this.getOptions())
        .map((response: Response) => response.json())
        .catch((error: Response) => Observable.throw({
          success: false,
          message: 'Error Loading Token List',
          error: error
        }))
        .subscribe(data => {
              this.TokenProvider.next(data);
              this.slimLoadingBarService.complete();
            },
            error => {
              this.message.error(error.message);
              this.slimLoadingBarService.stop();
            });
  }

}
