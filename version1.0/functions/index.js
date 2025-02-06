const functions = require("firebase-functions");
const { Webhook, MessageBuilder } = require("discord-webhook-node");

// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", { structuredData: true });
//   response.send("Hello from Firebase!");
// });

const DISCORD_WEBHOOK_AVATAR_URL = process.env.DISCORD_WEBHOOK_AVATAR_URL;
const DISCORD_CHANNEL_WEBHOOK_MESSAGES =
  process.env.DISCORD_CHANNEL_WEBHOOK_MESSAGES;

exports.sendNotification = functions.firestore
  .document("/websiteMessages/{id}")
  .onCreate(async (snap, context) => {
    try {
      console.log('New message received. Document ID:', context.params.id);
      
      const data = snap.data();
      console.log('Message data:', data);

      if (!data.email || !data.message) {
        console.error('Invalid message format - missing required fields');
        return null;
      }

      // Overall hook
      const hook = new Webhook(DISCORD_CHANNEL_WEBHOOK_MESSAGES);
      if (!DISCORD_CHANNEL_WEBHOOK_MESSAGES) {
        console.error('Discord webhook URL not configured');
        return null;
      }

      // User and avatar
      hook.setUsername("bpmiller.com");
      if (DISCORD_WEBHOOK_AVATAR_URL) {
        hook.setAvatar(DISCORD_WEBHOOK_AVATAR_URL);
      }

      // Firestore message embed
      const embed = new MessageBuilder()
        .setColor("#00b0f4")
        .setTitle(data.email)
        .setDescription(data.message)
        .setFooter(
          "Time received",
          "https://cdn.discordapp.com/embed/avatars/0.png"
        )
        .setTimestamp();

      console.log('Sending Discord notification...');
      await hook.send(embed);
      console.log('Discord notification sent successfully');

      return null;
    } catch (error) {
      console.error('Error in sendNotification function:', error);
      return null;
    }
  });
