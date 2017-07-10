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


const getItemUserStatus = function(commissaryId, userId){
        const item = CommissaryItems.findOne(commissaryId);
        let status = "none";
        const userLiked = item.userLikeIds.includes(userId);
        if(userLiked){
            status = "liked";
        }
        const userDisliked = item.userDislikeIds.includes(userId);
        if(userDisliked){
            status = "disliked";
        }

        return status;
};

Meteor.methods({
    likeCommissaryItem: function(commissaryId){
        const userId = Meteor.userId();

        if (! userId) {
            throw new Meteor.Error('not-authorized');
        }

        const status = getItemUserStatus(commissaryId, userId);
        if(status === "disliked"){
            CommissaryItems.update(
                {_id: commissaryId},
                {
                    $inc: {likes: 1, dislikes: -1},
                    $push: {userLikeIds: userId},
                    $pull: {userDislikeIds: userId}
                }
            );
            Meteor.users.update(
                {_id: userId},
                {
                    $push: {likedCommissaryItems: commissaryId},
                    $pull: {dislikedCommissaryItems: commissaryId}
                }
            );
        }else if(status === "none") {
            CommissaryItems.update(
                {_id: commissaryId},
                {$inc: {likes: 1},$push: {userLikeIds: userId}}
            );
            Meteor.users.update(
                {_id: userId},
                {$push: {likedCommissaryItems: commissaryId}}
            );
        }
    },
    dislikeCommissaryItem: function(commissaryId){
        const userId = Meteor.userId();
        if (! Meteor.userId()) {
          throw new Meteor.Error('not-authorized');
        }

        const status = getItemUserStatus(commissaryId, userId);
        if (status === "liked"){
            CommissaryItems.update(
                {_id: commissaryId},
                {
                    $inc: {dislikes: 1, likes: -1},
                    $push: {userDislikeIds: userId},
                    $pull: {userLikeIds: userId}
                }
            );
            Meteor.users.update(
                {_id: userId},
                {
                    $push: {dislikedCommissaryItems: commissaryId},
                    $pull: {likedCommissaryItems: commissaryId}
                }
            );
        }else if(status === "none"){
            CommissaryItems.update(
                {_id: commissaryId, userDislikeIds: {$nin: [userId]} },
                {$inc: {dislikes: 1},$push: {userDislikeIds: userId}}
            );
            Meteor.users.update(
                {_id: userId, dislikedCommissaryItems: {$nin: [commissaryId]}},
                {$push: {dislikedCommissaryItems: commissaryId}}
            );
        }
    }
});
