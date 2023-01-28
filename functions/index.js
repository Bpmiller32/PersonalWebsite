const functions = require("firebase-functions");
const { Webhook } = require("discord-webhook-node");

// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", { structuredData: true });
//   response.send("Hello from Firebase!");
// });

exports.sendNotification = functions.firestore
  .document("/{collection}/{id}")
  .onCreate((snap, context) => {
    const collection = context.params.collection;
    const id = context.params.id;

    const hook = new Webhook(
      "https://discord.com/api/webhooks/799379913458843710/XytHRu3A8dX-1hXWvVvGKUBRjnf43rWbkcn4OoTacVAxzDaCEtYqRs4hxS91HVN53-J0"
    );

    const IMAGE_URL =
      "https://homepages.cae.wisc.edu/~ece533/images/airplane.png";
    hook.setUsername("Bpmiller website");
    // hook.setAvatar(IMAGE_URL);

    hook.send("Hello there!");

    return null;
  });
