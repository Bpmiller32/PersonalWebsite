const functions = require("firebase-functions");
const { Webhook, MessageBuilder } = require("discord-webhook-node");

// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", { structuredData: true });
//   response.send("Hello from Firebase!");
// });

const DISCORD_WEBHOOK_AVATAR_URL = process.env.DISCORD_WEBHOOK_AVATAR_URL;
const DISCORD_CHANNEL_WEBHOOK_1 = process.env.DISCORD_CHANNEL_WEBHOOK_1;

exports.sendNotification = functions.firestore
  .document("/{collection}/{id}")
  .onCreate((snap, context) => {
    const collection = context.params.collection;
    const id = context.params.id;

    // Overall hook
    const hook = new Webhook(DISCORD_CHANNEL_WEBHOOK_1);

    // User and avatar
    hook.setUsername("bpmiller.com");
    hook.setAvatar(DISCORD_WEBHOOK_AVATAR_URL);

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
