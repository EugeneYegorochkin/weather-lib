/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
export class BaseWeather {
    /**
     * @param {?} key
     * @param {?} http
     */
    constructor(key, http) {
        this.key = key;
        this.http = http;
        this.apiKey = '&appid=de4ced2e2547330fcc10bc405dddc049';
        this.configUrl = `http://api.openweathermap.org/data/2.5/${this.key}`;
        this.units = '&units=metric';
    }
    /**
     * @template T
     * @param {?} city
     * @return {?}
     */
    getDataByCityName(city) {
        return this.get(this.configUrl + 'weather?q=' + city + this.apiKey + this.units);
    }
    /**
     * @template T
     * @param {?} url
     * @return {?}
     */
    get(url) {
        return this.http.get(url);
    }
    /**
     * @template T
     * @param {?} zip
     * @return {?}
     */
    getDataByCityZip(zip) {
        return this.get(this.configUrl + 'weather?zip=' + zip + this.apiKey + this.units);
    }
    //  have not finished yet
    /**
     * @template T
     * @param {?} city
     * @return {?}
     */
    getForecastByCityName(city) {
        return this.get(this.configUrl + 'forecast/daily?q=' + city + this.apiKey + this.units);
    }
}
if (false) {
    /** @type {?} */
    BaseWeather.prototype.apiKey;
    /** @type {?} */
    BaseWeather.prototype.configUrl;
    /** @type {?} */
    BaseWeather.prototype.units;
    /**
     * @type {?}
     * @private
     */
    BaseWeather.prototype.key;
    /**
     * @type {?}
     * @private
     */
    BaseWeather.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS13ZWF0aGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly93ZWF0aGVyLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZWQvYmFzZS13ZWF0aGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUlBLE1BQU0sT0FBZ0IsV0FBVzs7Ozs7SUFLN0IsWUFBb0IsR0FBVyxFQUFVLElBQWdCO1FBQXJDLFFBQUcsR0FBSCxHQUFHLENBQVE7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFZO1FBRXJELElBQUksQ0FBQyxNQUFNLEdBQUcseUNBQXlDLENBQUM7UUFDeEQsSUFBSSxDQUFDLFNBQVMsR0FBRywwQ0FBMEMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ3RFLElBQUksQ0FBQyxLQUFLLEdBQUcsZUFBZSxDQUFDO0lBQ2pDLENBQUM7Ozs7OztJQUVELGlCQUFpQixDQUFJLElBQVk7UUFDN0IsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFJLElBQUksQ0FBQyxTQUFTLEdBQUcsWUFBWSxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4RixDQUFDOzs7Ozs7SUFDTSxHQUFHLENBQUksR0FBVztRQUNyQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFJLEdBQUcsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7Ozs7OztJQUVELGdCQUFnQixDQUFJLEdBQVc7UUFDM0IsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFJLElBQUksQ0FBQyxTQUFTLEdBQUcsY0FBYyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6RixDQUFDOzs7Ozs7O0lBR0QscUJBQXFCLENBQUksSUFBWTtRQUNqQyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUksSUFBSSxDQUFDLFNBQVMsR0FBRyxtQkFBbUIsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDL0YsQ0FBQztDQUNKOzs7SUExQkcsNkJBQWU7O0lBQ2YsZ0NBQWtCOztJQUNsQiw0QkFBYzs7Ozs7SUFFRiwwQkFBbUI7Ozs7O0lBQUUsMkJBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSVdhdGhlclNlcnZpY2UgfSBmcm9tICcuL3dlYXRoZXIuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VXZWF0aGVyIGltcGxlbWVudHMgSVdhdGhlclNlcnZpY2Uge1xyXG4gICAgYXBpS2V5OiBzdHJpbmc7XHJcbiAgICBjb25maWdVcmw6IHN0cmluZztcclxuICAgIHVuaXRzOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBrZXk6IHN0cmluZywgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7XHJcblxyXG4gICAgICAgIHRoaXMuYXBpS2V5ID0gJyZhcHBpZD1kZTRjZWQyZTI1NDczMzBmY2MxMGJjNDA1ZGRkYzA0OSc7XHJcbiAgICAgICAgdGhpcy5jb25maWdVcmwgPSBgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvJHt0aGlzLmtleX1gO1xyXG4gICAgICAgIHRoaXMudW5pdHMgPSAnJnVuaXRzPW1ldHJpYyc7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RGF0YUJ5Q2l0eU5hbWU8VD4oY2l0eTogc3RyaW5nKTogT2JzZXJ2YWJsZTxUPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0PFQ+KHRoaXMuY29uZmlnVXJsICsgJ3dlYXRoZXI/cT0nICsgY2l0eSArIHRoaXMuYXBpS2V5ICsgdGhpcy51bml0cyk7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0PFQ+KHVybDogc3RyaW5nKTogT2JzZXJ2YWJsZTxUPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8VD4odXJsKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXREYXRhQnlDaXR5WmlwPFQ+KHppcDogbnVtYmVyKTogT2JzZXJ2YWJsZTxUPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0PFQ+KHRoaXMuY29uZmlnVXJsICsgJ3dlYXRoZXI/emlwPScgKyB6aXAgKyB0aGlzLmFwaUtleSArIHRoaXMudW5pdHMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vICBoYXZlIG5vdCBmaW5pc2hlZCB5ZXRcclxuICAgIGdldEZvcmVjYXN0QnlDaXR5TmFtZTxUPihjaXR5OiBzdHJpbmcpOiBPYnNlcnZhYmxlPFQ+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXQ8VD4odGhpcy5jb25maWdVcmwgKyAnZm9yZWNhc3QvZGFpbHk/cT0nICsgY2l0eSArIHRoaXMuYXBpS2V5ICsgdGhpcy51bml0cyk7XHJcbiAgICB9XHJcbn1cclxuIl19