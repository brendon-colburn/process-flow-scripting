var DCMTC;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it uses a non-standard name for the exports (exports).
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/AltEd.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.bac_referral = void 0;
class bac_referral {
    /* Use typings to create entity specific formContext. Like shown below is for 'Account' */
    //private static formContext: Xrm.Account;
    static onLoad(executionContext) {
        this.formContext = executionContext.getFormContext();
        //this.formContext.getAttribute("accountnumber").getValue();
    }
    static referralOnChange(executionContext) {
        // if this is a send back referral
        this.formContext = executionContext.getFormContext();
        debugger;
        let referral = this.formContext.getAttribute("bac_altedapprovalstatus").getValue();
        if (referral == 123000001 /* Bac_referralEnum.bac_altedapprovalstatus.SendBack */) {
            // set the process flow to work
            var activeProcess = this.formContext.data.process.getActiveProcess();
            let stageCollection = activeProcess.getStages();
            this.formContext.data.process.setActiveStage(stageCollection.get()[1].getId(), function () { console.log('It Worked!'); });
        }
    }
}
exports.bac_referral = bac_referral;

})();

DCMTC = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=maps/AltEd.js.map