//import {AccountsTemplates} from 'meteor/useraccounts:core'
/**
https://github.com/meteor-useraccounts/core/blob/master/Guide.md#configuring-texts
*/


AccountsTemplates.configure({
    forbidClientAccountCreation: true,
    texts: {
        errors: {
            loginForbidden: "error.accounts.Incorrect Email or Password"
        }
    }
});
