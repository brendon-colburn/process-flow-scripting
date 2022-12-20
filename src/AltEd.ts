export class bac_referral {
    static formContext: Xrm.FormContext;
    /* Use typings to create entity specific formContext. Like shown below is for 'Account' */
    //private static formContext: Xrm.Account;

    static onLoad(executionContext: Xrm.Events.EventContext) {
        this.formContext = executionContext.getFormContext();
        //this.formContext.getAttribute("accountnumber").getValue();
    }
    static referralOnChange(executionContext: Xrm.Events.EventContext) {
        // if this is a send back referral
        this.formContext = executionContext.getFormContext();
        debugger;
        let referral = this.formContext.getAttribute("bac_altedapprovalstatus").getValue();
        if (referral == Bac_referralEnum.bac_altedapprovalstatus.SendBack) {
            // set the process flow to work
            var activeProcess = this.formContext.data.process.getActiveProcess();
            let stageCollection = activeProcess.getStages();
            this.formContext.data.process.setActiveStage(stageCollection.get()[1].getId(), function(){console.log('It Worked!')});
        }
    }

}