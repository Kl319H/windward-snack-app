import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import './cards.css';
import './cards.html';

import { CommissaryItems } from '../../api/CommissaryItems.js';

let itemCount = 0;
const renderCount = new ReactiveVar(0);

Template.cards.onCreated(function() {
    //console.log(`commissaryItems: ${CommissaryItems.find().count()}`);
    const instance = this;

    instance.autorun(function(){
        instance.subscribe('commissaryItems', function(){
            itemCount = CommissaryItems.find().count();
            //console.log(`commissaryItems: ${itemCount}`);
            //console.log(CommissaryItems.find().fetch());
        });
    });
});

Template.cards.helpers({
    commissaryItems: function(){
        FlowRouter.watchPathChange();
        const filter = FlowRouter.current().route.name;
        const user = Meteor.user();
        let commissaryItems = [];
        if (user && user.likedCommissaryItems) {
            if (filter === 'likes'){
                commissaryItems = CommissaryItems.find({_id: {$in: user.likedCommissaryItems}});
            } else if (filter === 'dislikes'){
                commissaryItems = CommissaryItems.find({_id: {$in: user.dislikedCommissaryItems}});
            } else {
                commissaryItems = CommissaryItems.find();
            }
        }

        console.log(filter, user);
        return commissaryItems;
    }
});

Template.card.onRendered(function(){
    let curCount = renderCount.get();
    curCount++;
    renderCount.set(curCount);
});

Template.card.helpers({
    userLikedClass: function(){
        const liked = Meteor.users.findOne({likedCommissaryItems: {$in: [this._id]}});
        return liked? 'dodgerblue': '';
    },
    userDislikedClass: function(){
        const disliked = Meteor.users.findOne({dislikedCommissaryItems: {$in: [this._id]}});
        return disliked? 'red': '';
    }
});

Template.card.events({
    'click [data-like]': function(event, instance){
        console.log(event, instance, this);
        Meteor.call('likeCommissaryItem', this._id);
    },
    'click [data-dislike]': function(event, instance){
        console.log(event, instance, this);
        Meteor.call('dislikeCommissaryItem', this._id);
    },
    'click [data-comment]': function(event, instance){
        console.log(event, instance, this);
        Meteor.call('', this._id);
    }
})
