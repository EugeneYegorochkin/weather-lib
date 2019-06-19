/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { WeatherLibComponent } from './weather-lib.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ChartComponent } from './shared/highcharts/chart.component';
var WeatherLibModule = /** @class */ (function () {
    function WeatherLibModule() {
    }
    WeatherLibModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [WeatherLibComponent, ChartComponent],
                    imports: [
                        BrowserModule,
                        CommonModule,
                        HttpClientModule,
                        FormsModule
                    ],
                    exports: [
                        WeatherLibComponent,
                        BrowserModule,
                        CommonModule,
                        HttpClientModule,
                        FormsModule
                    ]
                },] }
    ];
    return WeatherLibModule;
}());
export { WeatherLibModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VhdGhlci1saWIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vd2VhdGhlci1saWIvIiwic291cmNlcyI6WyJsaWIvd2VhdGhlci1saWIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzFELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUtyRTtJQUFBO0lBZ0JnQyxDQUFDOztnQkFoQmhDLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxjQUFjLENBQUM7b0JBQ25ELE9BQU8sRUFBRTt3QkFDUCxhQUFhO3dCQUNiLFlBQVk7d0JBQ1osZ0JBQWdCO3dCQUNoQixXQUFXO3FCQUNaO29CQUNELE9BQU8sRUFBRTt3QkFDUCxtQkFBbUI7d0JBQ25CLGFBQWE7d0JBQ2IsWUFBWTt3QkFDWixnQkFBZ0I7d0JBQ2hCLFdBQVc7cUJBQ1o7aUJBQ0Y7O0lBQytCLHVCQUFDO0NBQUEsQUFoQmpDLElBZ0JpQztTQUFwQixnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgV2VhdGhlckxpYkNvbXBvbmVudCB9IGZyb20gJy4vd2VhdGhlci1saWIuY29tcG9uZW50JztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBDaGFydENvbXBvbmVudCB9IGZyb20gJy4vc2hhcmVkL2hpZ2hjaGFydHMvY2hhcnQuY29tcG9uZW50JztcblxuXG5cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbV2VhdGhlckxpYkNvbXBvbmVudCwgQ2hhcnRDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbXG4gICAgQnJvd3Nlck1vZHVsZSxcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgV2VhdGhlckxpYkNvbXBvbmVudCxcbiAgICBCcm93c2VyTW9kdWxlLFxuICAgIENvbW1vbk1vZHVsZSxcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgV2VhdGhlckxpYk1vZHVsZSB7IH1cbiJdfQ==