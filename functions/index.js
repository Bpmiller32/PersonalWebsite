const functions = require("firebase-functions");
const { Webhook, MessageBuilder } = require("discord-webhook-node");

// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", { structuredData: true });
//   response.send("Hello from Firebase!");
// });

exports.sendNotification = functions.firestore
  .document("/{collection}/{id}")
  .onCreate((snap, context) => {
    const collection = context.params.collection;
    const id = context.params.id;

    // Overall hook
    const hook = new Webhook(
      "https://discord.com/api/webhooks/799379913458843710/XytHRu3A8dX-1hXWvVvGKUBRjnf43rWbkcn4OoTacVAxzDaCEtYqRs4hxS91HVN53-J0"
    );

    // User and avatar
    hook.setUsername("bpmiller.com");
    hook.setAvatar(
      "https://storage.googleapis.com/bpmillerwebsitestorage/BpmillerLogo.png"
    );

    // Firestore message embed
    const embed = new MessageBuilder()
      .setColor("#00b0f4")
      .setTitle(snap.data().email)
      .setDescription(snap.data().message)
      .setFooter(
        "Time recieved",
        "https://cdn.discordapp.com/embed/avatars/0.png"
      )
      .setTimestamp();

    hook.send(embed);

    return null;
  });
