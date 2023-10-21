import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ErrorService } from "./error.service";
import { GenericHttpServiceService } from "./generic-http-service.service";

@Injectable({
    providedIn:'root'
})
export class AppService{
    private apiKey = "edfa39ac8d63493ab348b327b6a6de48"; 

    constructor(
        private _http: GenericHttpServiceService,
        private _err: ErrorService
    ) { }

    get(callBack: (res: any) => void) {
        this._http.get("country=tr&apiKey=" + this.apiKey)
        .subscribe({
            next: (res: any) => {
                callBack(res);
            },
            error: (err: HttpErrorResponse) => {
                this._err.errorHandler(err);
            }
        });
    }

    getNewsByCategory(category: string, callBack: (res: any) => void) {
        const url = `https://newsapi.org/v2/top-headlines?country=tr&category=${category}&apiKey=${this.apiKey}`;
        this._http.get(url)
          .subscribe({
            next: (res: any) => {
              callBack(res);
            },
            error: (err: HttpErrorResponse) => {
              this._err.errorHandler(err);
            }
          });
      }
}
