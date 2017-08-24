import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import '../imports/ui/layouts/mainLayout.js';
import '../imports/ui/account/account.js';
import '../imports/ui/nav/nav.js';
import '../imports/ui/cards/cards.js';
import '../imports/ui/charts/charts.js';
import '../imports/ui/users/users.js';
import '../imports/ui/commissaryItems/commissaryItems.js';
import '../imports/ui/cart/cart.js';

const ensureLoggedIn = function(context, redirect) {
    const userId = Meteor.userId();
    if(!userId){
        redirect('/login');
    }
};


Accounts.onLogin(function(){
    const path = FlowRouter.current().path;
    if (path === "/account") {
        FlowRouter.go("/");
    }
})

FlowRouter.route('/', {
    name: "home", // optional
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
    }
});
FlowRouter.route('/likes', {
    name: "likes", // optional
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
    }
});
FlowRouter.route('/dislikes', {
    name: "dislikes", // optional
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
    }
});

FlowRouter.route('/logout', {
    name: "logout", // optional
    triggersEnter: [function(context, redirect) {
        Meteor.logout(function() {
            console.log("/account")
            FlowRouter.go('/account');
        });
    }],
});

FlowRouter.route('/account', {
    name: "account", // optional
        action: function(params, queryParams) {
        console.log("Params:", params);
        console.log("Query Params:", queryParams);
        BlazeLayout.render('mainLayout', {main: 'account', nav: 'nav'});
    }
});

FlowRouter.route('/admin/charts', {
    name: "charts", // optional
    triggersEnter: [ensureLoggedIn],
    action: function(params, queryParams) {
        console.log("Params:", params);
        console.log("Query Params:", queryParams);
        BlazeLayout.render('mainLayout', {main: 'charts', nav: 'nav'});
    }
});

FlowRouter.route('/admin/users', {
    name: "users", // optional
    triggersEnter: [ensureLoggedIn],
    action: function(params, queryParams) {
        console.log("Params:", params);
        console.log("Query Params:", queryParams);
        BlazeLayout.render('mainLayout', {main: 'users', nav: 'nav'});
    }
});
FlowRouter.route('/admin/commissary-items', {
    name: "commissary-items", // optional
    triggersEnter: [ensureLoggedIn],
    action: function(params, queryParams) {
        console.log("Params:", params);
        console.log("Query Params:", queryParams);
        BlazeLayout.render('mainLayout', {main: 'commissaryItems', nav: 'nav'});
    }
});
FlowRouter.route('/admin/cart', {
    name: "cart", // optional
    triggersEnter: [ensureLoggedIn],
    action: function(params, queryParams) {
        console.log("Params:", params);
        console.log("Query Params:", queryParams);
        BlazeLayout.render('mainLayout', {main: 'cart', nav: 'nav'});
    }
});
