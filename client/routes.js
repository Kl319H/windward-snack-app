import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import '../imports/ui/layouts/mainLayout.js';
import '../imports/ui/login/login.js';
import '../imports/ui/nav/nav.js';
import '../imports/ui/cards/cards.js';
import '../imports/ui/admin/admin.js';
import '../imports/ui/navAdmin/navAdmin.js';



Accounts.onLogin(function(){
    const path = FlowRouter.current().path;
   if (path === "/login") {
       FlowRouter.go("/");
   }
})

FlowRouter.route('/', {
    triggersEnter: [function(context, redirect) {
        const userId = Meteor.userId();
        if(!userId){
            redirect('/login');
        }
    }],
    action: function(params, queryParams) {
        console.log("Params:", params);
        console.log("Query Params:", queryParams);
        BlazeLayout.render('mainLayout', {main: 'cards', nav: 'nav'});
    },

    name: "home" // optional
});

FlowRouter.route('/login', {
    triggersEnter: [function(context, redirect) {
        const userId = Meteor.userId();
        if(userId){
            redirect('/');
        }
        console.log('!');
    }],
    action: function(params, queryParams) {
        console.log("Params:", params);
        console.log("Query Params:", queryParams);
        BlazeLayout.render('mainLayout', {main: 'login'});
    },

    name: "login" // optional
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
