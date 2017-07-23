import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import './admin.html';

Template.admin.onCreated(function(){
    const instance = this;

    instance.subscribe('users', function(){
        const users = Meteor.users.find();
        console.log(`users: ${users.count()}`)
        console.log(users.fetch())
    })
})


Template.admin.helpers({
    users(){
        return Meteor.users.find();
    }
})
Template.userListItem.events({
    'click [data-send-enrollment]'(event, instance){
        const user = this;
        console.log(user);
        Meteor.call('sendEnrollmentEmail', user._id);
    }
})
