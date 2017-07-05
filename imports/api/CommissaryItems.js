import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const CommissaryItems = new Mongo.Collection("commissaryItems");

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('commissaryItems', function () {
      return CommissaryItems.find({});
  });
}
//TODO add security check for only liking or disliking once by user

Meteor.methods({
    likeCommissaryItem: function(id){
        const userId = Meteor.userId();
        console.log(id);

        if (! userId) {
            throw new Meteor.Error('not-authorized');
        }


        CommissaryItems.update(
            {_id: id, userLikeIds: {$nin: [userId]} },
            {$inc: {likes: 1},$push: {userLikeIds: userId}}
        );


        Meteor.users.update(
            {_id: userId, likedCommissaryItems: {$nin: [id]}},
            {$push: {likedCommissaryItems: id}}
        );
    },
    dislikeCommissaryItem: function(id){
        const userId = Meteor.userId();
        console.log(id);
        if (! Meteor.userId()) {
          throw new Meteor.Error('not-authorized');
        }
        CommissaryItems.update(
            {_id: id, userDislikeIds: {$nin: [userId]} },
            {$inc: {dislikes: 1},$push: {userDislikeIds: userId}}
        );


        Meteor.users.update(
            {_id: userId, dislikedCommissaryItems: {$nin: [id]}},
            {$push: {dislikedCommissaryItems: id}}
        );
    }
});
