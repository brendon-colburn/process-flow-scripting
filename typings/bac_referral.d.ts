/// <reference path="../node_modules/@types/xrm/index.d.ts" />
declare namespace Bac_referralEnum {
    const enum bac_altedapprovalstatus {
        Accept = 123000000,
        SendBack = 123000001,
        Denied = 123000002,
    }

}

declare namespace Xrm {
    type Bac_referral = Omit<FormContext, 'getAttribute'> & Omit<FormContext, 'getControl'> & Bac_referralAttributes;

    interface EventContext {
        getFormContext(): Bac_referral;
    }

    interface Bac_referralAttributes {
        getAttribute(name: "bac_altedapprovalstatus"): Attributes.OptionSetAttribute;
        getAttribute(name: "bac_attendance"): Attributes.StringAttribute;
        getAttribute(name: "bac_contactedaltedschooladmin"): Attributes.BooleanAttribute;
        getAttribute(name: "bac_contactedaltedschooldate"): Attributes.DateAttribute;
        getAttribute(name: "bac_discipline"): Attributes.StringAttribute;
        getAttribute(name: "bac_ell"): Attributes.BooleanAttribute;
        getAttribute(name: "bac_ellstatus"): Attributes.StringAttribute;
        getAttribute(name: "bac_iep"): Attributes.BooleanAttribute;
        getAttribute(name: "bac_iepreviewdate"): Attributes.DateAttribute;
        getAttribute(name: "bac_name"): Attributes.StringAttribute;
        getAttribute(name: "bac_parentguardiansignaturedate"): Attributes.DateAttribute;
        getAttribute(name: "bac_principalsignaturedate"): Attributes.DateAttribute;
        getAttribute(name: "bac_referralid"): Attributes.StringAttribute;
        getAttribute(name: "bac_reviewdate"): Attributes.DateAttribute;
        getAttribute(name: "bac_s504"): Attributes.BooleanAttribute;
        getAttribute(name: "bac_student"): Attributes.LookupAttribute;
        getAttribute(name: "bac_studentname"): Attributes.StringAttribute;
        getAttribute(name: "bac_submittaldate"): Attributes.DateAttribute;
        getAttribute(name: "createdby"): Attributes.LookupAttribute;
        getAttribute(name: "createdbyname"): Attributes.StringAttribute;
        getAttribute(name: "createdbyyominame"): Attributes.StringAttribute;
        getAttribute(name: "createdon"): Attributes.DateAttribute;
        getAttribute(name: "createdonbehalfby"): Attributes.LookupAttribute;
        getAttribute(name: "createdonbehalfbyname"): Attributes.StringAttribute;
        getAttribute(name: "createdonbehalfbyyominame"): Attributes.StringAttribute;
        getAttribute(name: "importsequencenumber"): Attributes.NumberAttribute;
        getAttribute(name: "modifiedby"): Attributes.LookupAttribute;
        getAttribute(name: "modifiedbyname"): Attributes.StringAttribute;
        getAttribute(name: "modifiedbyyominame"): Attributes.StringAttribute;
        getAttribute(name: "modifiedon"): Attributes.DateAttribute;
        getAttribute(name: "modifiedonbehalfby"): Attributes.LookupAttribute;
        getAttribute(name: "modifiedonbehalfbyname"): Attributes.StringAttribute;
        getAttribute(name: "modifiedonbehalfbyyominame"): Attributes.StringAttribute;
        getAttribute(name: "overriddencreatedon"): Attributes.DateAttribute;
        getAttribute(name: "ownerid"): Attributes.LookupAttribute;
        getAttribute(name: "owneridname"): Attributes.StringAttribute;
        getAttribute(name: "owneridtype"): Attributes.Attribute;
        getAttribute(name: "owneridyominame"): Attributes.StringAttribute;
        getAttribute(name: "owningbusinessunit"): Attributes.LookupAttribute;
        getAttribute(name: "owningbusinessunitname"): Attributes.StringAttribute;
        getAttribute(name: "owningteam"): Attributes.LookupAttribute;
        getAttribute(name: "owninguser"): Attributes.LookupAttribute;
        getAttribute(name: "statecode"): Attributes.OptionSetAttribute;
        getAttribute(name: "statuscode"): Attributes.OptionSetAttribute;
        getAttribute(name: "timezoneruleversionnumber"): Attributes.NumberAttribute;
        getAttribute(name: "utcconversiontimezonecode"): Attributes.NumberAttribute;
        getAttribute(name: "versionnumber"): Attributes.NumberAttribute;
        getControl(name: "bac_altedapprovalstatus"): Controls.OptionSetControl;
        getControl(name: "bac_attendance"): Controls.StringControl;
        getControl(name: "bac_contactedaltedschooladmin"): Controls.StandardControl;
        getControl(name: "bac_contactedaltedschooldate"): Controls.DateControl;
        getControl(name: "bac_discipline"): Controls.StringControl;
        getControl(name: "bac_ell"): Controls.StandardControl;
        getControl(name: "bac_ellstatus"): Controls.StringControl;
        getControl(name: "bac_iep"): Controls.StandardControl;
        getControl(name: "bac_iepreviewdate"): Controls.DateControl;
        getControl(name: "bac_name"): Controls.StringControl;
        getControl(name: "bac_parentguardiansignaturedate"): Controls.DateControl;
        getControl(name: "bac_principalsignaturedate"): Controls.DateControl;
        getControl(name: "bac_referralid"): Controls.StringControl;
        getControl(name: "bac_reviewdate"): Controls.DateControl;
        getControl(name: "bac_s504"): Controls.StandardControl;
        getControl(name: "bac_student"): Controls.LookupControl;
        getControl(name: "bac_studentname"): Controls.StringControl;
        getControl(name: "bac_submittaldate"): Controls.DateControl;
        getControl(name: "createdby"): Controls.LookupControl;
        getControl(name: "createdbyname"): Controls.StringControl;
        getControl(name: "createdbyyominame"): Controls.StringControl;
        getControl(name: "createdon"): Controls.DateControl;
        getControl(name: "createdonbehalfby"): Controls.LookupControl;
        getControl(name: "createdonbehalfbyname"): Controls.StringControl;
        getControl(name: "createdonbehalfbyyominame"): Controls.StringControl;
        getControl(name: "importsequencenumber"): Controls.NumberControl;
        getControl(name: "modifiedby"): Controls.LookupControl;
        getControl(name: "modifiedbyname"): Controls.StringControl;
        getControl(name: "modifiedbyyominame"): Controls.StringControl;
        getControl(name: "modifiedon"): Controls.DateControl;
        getControl(name: "modifiedonbehalfby"): Controls.LookupControl;
        getControl(name: "modifiedonbehalfbyname"): Controls.StringControl;
        getControl(name: "modifiedonbehalfbyyominame"): Controls.StringControl;
        getControl(name: "overriddencreatedon"): Controls.DateControl;
        getControl(name: "ownerid"): Controls.LookupControl;
        getControl(name: "owneridname"): Controls.StringControl;
        getControl(name: "owneridtype"): Controls.Control;
        getControl(name: "owneridyominame"): Controls.StringControl;
        getControl(name: "owningbusinessunit"): Controls.LookupControl;
        getControl(name: "owningbusinessunitname"): Controls.StringControl;
        getControl(name: "owningteam"): Controls.LookupControl;
        getControl(name: "owninguser"): Controls.LookupControl;
        getControl(name: "statecode"): Controls.OptionSetControl;
        getControl(name: "statuscode"): Controls.OptionSetControl;
        getControl(name: "timezoneruleversionnumber"): Controls.NumberControl;
        getControl(name: "utcconversiontimezonecode"): Controls.NumberControl;
        getControl(name: "versionnumber"): Controls.NumberControl;
    }

}

