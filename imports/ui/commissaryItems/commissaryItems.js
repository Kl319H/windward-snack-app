import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import './commissaryItems.html';

Template.commissaryItems.onCreated(function(){
    const instance = this;

    instance.subscribe('users', function(){
        const users = Meteor.users.find();
        console.log(`users: ${users.count()}`)
        console.log(users.fetch())
    })
})


Template.commissaryItems.helpers({
    users(){
        return Meteor.users.find();
    }
})
