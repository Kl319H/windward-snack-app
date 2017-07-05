import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import './cards.css';
import './cards.html';

import { CommissaryItems } from '../../api/CommissaryItems.js';

Template.body.onCreated(function() {
    console.log(`commissaryItems: ${CommissaryItems.find().count()}`);
  Meteor.subscribe('commissaryItems', function(){
      console.log(`commissaryItems: ${CommissaryItems.find().count()}`);
      console.log(CommissaryItems.find().fetch());
  });
  console.log(`commissaryItems: ${CommissaryItems.find().count()}`);
});


Template.body.helpers({
    commissaryItems: function(){
        return CommissaryItems.find();
    }
})
Template.card.helpers({
    userLikedClass: function(){
        const liked = Meteor.users.findOne({likedCommissaryItems: {$in: [this._id]}});
        return liked? 'springgreen': '';
    },
    userDislikedClass: function(){
        const disliked = Meteor.users.findOne({dislikedCommissaryItems: {$in: [this._id]}});
        return disliked? 'red': '';
    }
})
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
