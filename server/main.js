import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Email } from 'meteor/email';
import { CommissaryItems } from '../imports/api/CommissaryItems.js';
import { commissaryItemData } from './commissaryItemData.js';
import { users } from './users.js';
import '../imports/api/userAccounts.js';


Meteor.methods({
    sendEnrollmentEmail(userId){
        const isAdmin = Roles.userIsInRole(Meteor.userId(), ['admin']);
        if (!isAdmin) {
        	throw new Meteor.Error('not-authorized');
        }
        Accounts.sendEnrollmentEmail(userId);
    }
})

Meteor.startup(() => {
    const emailPassword = Meteor.settings.emailPassword;
    process.env.MAIL_URL=`smtps://windwardsnackapp@gmail.com:${emailPassword}@smtp.gmail.com:465/`;

/*    Email.send({
        from: "windwardsnackapp@gmail.com",
        to: "windwardsnackapp@gmail.com",
        subject: "Test",
        text: "This is a body"
    });
*/

    // code to run on server at startup
    //remove all items from db
    //CommissaryItems.remove({});
    //make sure to remove this line before production
    const itemsCount = CommissaryItems.find({}).count();
    console.log(`itemsCount: ${itemsCount}`);

    if (itemsCount === 0) {
        commissaryItemData.forEach(function(item, i) {
            if (item.name !== "") {
                item.likes = 0;
                item.dislikes = 0;
                item.userLikeIds = [];
                item.userDislikeIds = [];

                const id = CommissaryItems.insert(item);
                console.log(`inserted item : ${id}`);
            }
        });
    }
    const userCount = Meteor.users.find().count();
    if (userCount === 0) {
        users.forEach(function(user, i) {

            if(user.firstName === "Krista"){
                user.password = "temp";
            }
            const id = Accounts.createUser(user);

            if (user.roles && user.roles.length > 0) {
                Roles.addUsersToRoles(id, user.roles);
            }
            console.log(user.firstName );
        });
    }
});



Meteor.publish("user", function() {
    return Meteor.users.find({
        _id: this.userId
    }, {
        fields: {
            likedCommissaryItems: 1,
            dislikedCommissaryItems: 1
        }
    });
});

Meteor.publish("users", function() {
    if (Roles.userIsInRole(this.userId, ['admin'])) {
        return Meteor.users.find({});
    } else {
        this.stop();
        return;
    }
});
