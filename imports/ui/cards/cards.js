import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
//import './cards.css';
import './cards.html';

import { CommissaryItems } from '../../api/CommissaryItems.js';

let itemCount = 0;
const renderCount = new ReactiveVar(0);

Template.body.onCreated(function() {
    //console.log(`commissaryItems: ${CommissaryItems.find().count()}`);
  Meteor.subscribe('commissaryItems', function(){
      itemCount = CommissaryItems.find().count();
      //console.log(`commissaryItems: ${itemCount}`);
      //console.log(CommissaryItems.find().fetch());
  });
});

Template.body.onRendered(function() {
    this.autorun(function(){

        const curCount = renderCount.get();
        console.log(`curCount: ${curCount}`);

        if(curCount === itemCount){
            var mySwiper = new Swiper('.swiper-container', {
                // Optional parameters
                direction: 'horizontal',
                loop: true,

                // Navigation arrows
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',

                // And if we need scrollbar
                scrollbar: '.swiper-scrollbar',
            })
        }
    });
});

Template.body.helpers({
    commissaryItems: function(){
        return CommissaryItems.find();
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
