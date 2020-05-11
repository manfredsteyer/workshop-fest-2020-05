(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/router')) :
    typeof define === 'function' && define.amd ? define('@flight-workspace/bonus-miles', ['exports', '@angular/core', '@angular/common', '@angular/router'], factory) :
    (global = global || self, factory((global['flight-workspace'] = global['flight-workspace'] || {}, global['flight-workspace']['bonus-miles'] = {}), global.ng.core, global.ng.common, global.ng.router));
}(this, (function (exports, core, common, router) { 'use strict';

    var BonusMilesComponent = /** @class */ (function () {
        function BonusMilesComponent() {
        }
        BonusMilesComponent.prototype.ngOnInit = function () {
        };
        BonusMilesComponent.ɵfac = function BonusMilesComponent_Factory(t) { return new (t || BonusMilesComponent)(); };
        BonusMilesComponent.ɵcmp = core["ɵɵdefineComponent"]({ type: BonusMilesComponent, selectors: [["flight-workspace-bonus-miles"]], decls: 4, vars: 0, template: function BonusMilesComponent_Template(rf, ctx) { if (rf & 1) {
                core["ɵɵelementStart"](0, "h1");
                core["ɵɵtext"](1, "Your Bonus Miles");
                core["ɵɵelementEnd"]();
                core["ɵɵelementStart"](2, "p");
                core["ɵɵtext"](3, " You have 17,388 bonus miles.\n");
                core["ɵɵelementEnd"]();
            } }, styles: [""] });
        return BonusMilesComponent;
    }());
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](BonusMilesComponent, [{
            type: core.Component,
            args: [{
                    selector: 'flight-workspace-bonus-miles',
                    templateUrl: './bonus-miles.component.html',
                    styleUrls: ['./bonus-miles.component.css']
                }]
        }], function () { return []; }, null); })();

    var BonusMilesModule = /** @class */ (function () {
        function BonusMilesModule() {
        }
        BonusMilesModule.ɵmod = core["ɵɵdefineNgModule"]({ type: BonusMilesModule });
        BonusMilesModule.ɵinj = core["ɵɵdefineInjector"]({ factory: function BonusMilesModule_Factory(t) { return new (t || BonusMilesModule)(); }, imports: [[
                    common.CommonModule,
                    router.RouterModule.forChild([
                        { path: '', component: BonusMilesComponent }
                    ])
                ]] });
        return BonusMilesModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core["ɵɵsetNgModuleScope"](BonusMilesModule, { declarations: [BonusMilesComponent], imports: [common.CommonModule, router.RouterModule] }); })();
    /*@__PURE__*/ (function () { core["ɵsetClassMetadata"](BonusMilesModule, [{
            type: core.NgModule,
            args: [{
                    imports: [
                        common.CommonModule,
                        router.RouterModule.forChild([
                            { path: '', component: BonusMilesComponent }
                        ])
                    ],
                    declarations: [
                        BonusMilesComponent
                    ]
                }]
        }], null, null); })();

    exports.BonusMilesModule = BonusMilesModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=flight-workspace-bonus-miles.umd.js.map
