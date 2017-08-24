import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import './charts.html';

Template.charts.onCreated(function(){
    const instance = this;

    instance.subscribe('users', function(){
        const users = Meteor.users.find();
        console.log(`users: ${users.count()}`)
        console.log(users.fetch())
    })
})


Template.charts.helpers({
    users(){
        return Meteor.users.find();
    }
})
