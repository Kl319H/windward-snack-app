import { Meteor } from 'meteor/meteor';
import { CommissaryItems } from '../imports/api/CommissaryItems.js';
import { commissaryItemData } from './commissaryItemData.js';

Meteor.startup(() => {
  // code to run on server at startup
    //remove all items from db
    //CommissaryItems.remove({});
    //make sure to remove this line before production
    const itemsCount = CommissaryItems.find({}).count();
    console.log(`itemsCount: ${itemsCount}`);

    if(itemsCount === 0){
        commissaryItemData.forEach(function(item, i){
            if (item.name !== "") {
                const id = CommissaryItems.insert(item);
                console.log(`inserted item : ${id}`);
            }
        });
    }
});

Meteor.publish("users", function(){
    return Meteor.users.find({_id: this.userId}, {fields: {
        likedCommissaryItems: 1,
        dislikedCommissaryItems: 1
    }});
});
