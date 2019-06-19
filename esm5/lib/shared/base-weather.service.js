/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var /**
 * @abstract
 */
BaseWeather = /** @class */ (function () {
    function BaseWeather(key, http) {
        this.key = key;
        this.http = http;
        this.apiKey = '&appid=de4ced2e2547330fcc10bc405dddc049';
        this.configUrl = "http://api.openweathermap.org/data/2.5/" + this.key;
        this.units = '&units=metric';
    }
    /**
     * @template T
     * @param {?} city
     * @return {?}
     */
    BaseWeather.prototype.getDataByCityName = /**
     * @template T
     * @param {?} city
     * @return {?}
     */
    function (city) {
        return this.get(this.configUrl + 'weather?q=' + city + this.apiKey + this.units);
    };
    /**
     * @template T
     * @param {?} url
     * @return {?}
     */
    BaseWeather.prototype.get = /**
     * @template T
     * @param {?} url
     * @return {?}
     */
    function (url) {
        return this.http.get(url);
    };
    /**
     * @template T
     * @param {?} zip
     * @return {?}
     */
    BaseWeather.prototype.getDataByCityZip = /**
     * @template T
     * @param {?} zip
     * @return {?}
     */
    function (zip) {
        return this.get(this.configUrl + 'weather?zip=' + zip + this.apiKey + this.units);
    };
    //  have not finished yet
    //  have not finished yet
    /**
     * @template T
     * @param {?} city
     * @return {?}
     */
    BaseWeather.prototype.getForecastByCityName = 
    //  have not finished yet
    /**
     * @template T
     * @param {?} city
     * @return {?}
     */
    function (city) {
        return this.get(this.configUrl + 'forecast/daily?q=' + city + this.apiKey + this.units);
    };
    return BaseWeather;
}());
/**
 * @abstract
 */
export { BaseWeather };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS13ZWF0aGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly93ZWF0aGVyLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9zaGFyZWQvYmFzZS13ZWF0aGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUlBOzs7O0lBS0kscUJBQW9CLEdBQVcsRUFBVSxJQUFnQjtRQUFyQyxRQUFHLEdBQUgsR0FBRyxDQUFRO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUVyRCxJQUFJLENBQUMsTUFBTSxHQUFHLHlDQUF5QyxDQUFDO1FBQ3hELElBQUksQ0FBQyxTQUFTLEdBQUcsNENBQTBDLElBQUksQ0FBQyxHQUFLLENBQUM7UUFDdEUsSUFBSSxDQUFDLEtBQUssR0FBRyxlQUFlLENBQUM7SUFDakMsQ0FBQzs7Ozs7O0lBRUQsdUNBQWlCOzs7OztJQUFqQixVQUFxQixJQUFZO1FBQzdCLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBSSxJQUFJLENBQUMsU0FBUyxHQUFHLFlBQVksR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEYsQ0FBQzs7Ozs7O0lBQ00seUJBQUc7Ozs7O0lBQVYsVUFBYyxHQUFXO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUksR0FBRyxDQUFDLENBQUM7SUFDakMsQ0FBQzs7Ozs7O0lBRUQsc0NBQWdCOzs7OztJQUFoQixVQUFvQixHQUFXO1FBQzNCLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBSSxJQUFJLENBQUMsU0FBUyxHQUFHLGNBQWMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDekYsQ0FBQztJQUVELHlCQUF5Qjs7Ozs7OztJQUN6QiwyQ0FBcUI7Ozs7Ozs7SUFBckIsVUFBeUIsSUFBWTtRQUNqQyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUksSUFBSSxDQUFDLFNBQVMsR0FBRyxtQkFBbUIsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDL0YsQ0FBQztJQUNMLGtCQUFDO0FBQUQsQ0FBQyxBQTNCRCxJQTJCQzs7Ozs7OztJQTFCRyw2QkFBZTs7SUFDZixnQ0FBa0I7O0lBQ2xCLDRCQUFjOzs7OztJQUVGLDBCQUFtQjs7Ozs7SUFBRSwyQkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJV2F0aGVyU2VydmljZSB9IGZyb20gJy4vd2VhdGhlci5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFzZVdlYXRoZXIgaW1wbGVtZW50cyBJV2F0aGVyU2VydmljZSB7XHJcbiAgICBhcGlLZXk6IHN0cmluZztcclxuICAgIGNvbmZpZ1VybDogc3RyaW5nO1xyXG4gICAgdW5pdHM6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGtleTogc3RyaW5nLCBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHtcclxuXHJcbiAgICAgICAgdGhpcy5hcGlLZXkgPSAnJmFwcGlkPWRlNGNlZDJlMjU0NzMzMGZjYzEwYmM0MDVkZGRjMDQ5JztcclxuICAgICAgICB0aGlzLmNvbmZpZ1VybCA9IGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS8ke3RoaXMua2V5fWA7XHJcbiAgICAgICAgdGhpcy51bml0cyA9ICcmdW5pdHM9bWV0cmljJztcclxuICAgIH1cclxuXHJcbiAgICBnZXREYXRhQnlDaXR5TmFtZTxUPihjaXR5OiBzdHJpbmcpOiBPYnNlcnZhYmxlPFQ+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXQ8VD4odGhpcy5jb25maWdVcmwgKyAnd2VhdGhlcj9xPScgKyBjaXR5ICsgdGhpcy5hcGlLZXkgKyB0aGlzLnVuaXRzKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXQ8VD4odXJsOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFQ+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxUPih1cmwpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldERhdGFCeUNpdHlaaXA8VD4oemlwOiBudW1iZXIpOiBPYnNlcnZhYmxlPFQ+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXQ8VD4odGhpcy5jb25maWdVcmwgKyAnd2VhdGhlcj96aXA9JyArIHppcCArIHRoaXMuYXBpS2V5ICsgdGhpcy51bml0cyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gIGhhdmUgbm90IGZpbmlzaGVkIHlldFxyXG4gICAgZ2V0Rm9yZWNhc3RCeUNpdHlOYW1lPFQ+KGNpdHk6IHN0cmluZyk6IE9ic2VydmFibGU8VD4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldDxUPih0aGlzLmNvbmZpZ1VybCArICdmb3JlY2FzdC9kYWlseT9xPScgKyBjaXR5ICsgdGhpcy5hcGlLZXkgKyB0aGlzLnVuaXRzKTtcclxuICAgIH1cclxufVxyXG4iXX0=