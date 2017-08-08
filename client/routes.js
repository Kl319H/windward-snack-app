import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import '../imports/ui/layouts/mainLayout.js';
import '../imports/ui/account/account.js';
import '../imports/ui/nav/nav.js';
import '../imports/ui/cards/cards.js';
import '../imports/ui/admin/admin.js';
import '../imports/ui/navAdmin/navAdmin.js';



Accounts.onLogin(function(){
    const path = FlowRouter.current().path;
   if (path === "/account") {
      FlowRouter.go("/");
   }
})

FlowRouter.route('/', {
    triggersEnter: [function(context, redirect) {
        const userId = Meteor.userId();
        if(!userId){
            redirect('/account');
        }
    }],
    action: function(params, queryParams) {
        console.log("Params:", params);
        console.log("Query Params:", queryParams);
        BlazeLayout.render('mainLayout', {main: 'cards', nav: 'nav'});
    },

    name: "home" // optional
});

FlowRouter.route('/logout', {
    triggersEnter: [function(context, redirect) {
        Meteor.logout(function() {
            console.log("/account")
            FlowRouter.go('/account');
        });
    }],

    name: "logout" // optional
});

FlowRouter.route('/account', {
    triggersEnter: [function(context, redirect) {
        const userId = Meteor.userId();
        if(userId){
            //redirect('/');
        }
        console.log('!');
    }],
    action: function(params, queryParams) {
        console.log("Params:", params);
        console.log("Query Params:", queryParams);
        BlazeLayout.render('mainLayout', {main: 'account', nav: 'nav'});
    },

    name: "account" // optional
});

FlowRouter.route('/admin', {
    triggersEnter: [function(context, redirect) {
        const userId = Meteor.userId();
        if(!userId){
            redirect('/login');
        }
    }],
    action: function(params, queryParams) {
        console.log("Params:", params);
        console.log("Query Params:", queryParams);
        BlazeLayout.render('mainLayout', {main: 'admin', nav: 'navAdmin'});
    },

    name: "admin" // optional
});
