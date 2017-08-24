import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import './cart.html';

Template.cart.onCreated(function(){
    const instance = this;

    instance.subscribe('users', function(){
        const users = Meteor.users.find();
        console.log(`users: ${users.count()}`)
        console.log(users.fetch())
    })
})


Template.cart.helpers({
    users(){
        return Meteor.users.find();
    }
})
