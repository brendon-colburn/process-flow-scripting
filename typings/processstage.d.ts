/// <reference path="../node_modules/@types/xrm/index.d.ts" />
declare namespace ProcessstageEnum {
    const enum stagecategory {
        Qualify = 0,
        Develop = 1,
        Propose = 2,
        Close = 3,
        Identify = 4,
        Research = 5,
        Resolve = 6,
        Approval = 7,
    }

}

declare namespace Xrm {
    type Processstage = Omit<FormContext, 'getAttribute'> & Omit<FormContext, 'getControl'> & ProcessstageAttributes;

    interface EventContext {
        getFormContext(): Processstage;
    }

    interface ProcessstageAttributes {
        getAttribute(name: "primaryentitytypecode"): Attributes.Attribute;
        getAttribute(name: "stagecategory"): Attributes.OptionSetAttribute;
        getAttribute(name: "stagename"): Attributes.StringAttribute;
        getControl(name: "primaryentitytypecode"): Controls.Control;
        getControl(name: "stagecategory"): Controls.OptionSetControl;
        getControl(name: "stagename"): Controls.StringControl;
    }

}

