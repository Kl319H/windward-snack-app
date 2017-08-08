import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import './account.html';


Template.account.helpers({
    loginState: function(){
        return "hide";
    }
});
