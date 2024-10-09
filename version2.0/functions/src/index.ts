import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import { Webhook, MessageBuilder } from "discord-webhook-node";

// Initialize Firebase Admin SDK (if needed)
admin.initializeApp();

// Firestore Trigger: Sends a notification to a Discord webhook when a new document is created in any collection
export const sendDiscordMessage = functions.firestore
  .document("/{collection}/{id}")
  .onCreate((snap) => {
    // Create the Webhook
    const hook = new Webhook(
      "https://discord.com/api/webhooks/799379913458843710/XytHRu3A8dX-1hXWvVvGKUBRjnf43rWbkcn4OoTacVAxzDaCEtYqRs4hxS91HVN53-J0"
    );

    // Set webhook username and avatar
    hook.setUsername("bpmiller.com");
    hook.setAvatar(
      "DISCORD_WEBHOOK_AVATAR_URL"
    );

    // Firestore data from the new document
    const data = snap.data();

    // Create the message embed for Discord
    const embed = new MessageBuilder()
      .setColor(0x00b0f4)
      .setTitle(data.email) // Assuming there's an 'email' field in the document
      .setDescription(data.message) // Assuming there's a 'message' field in the document
      .setFooter(
        "Time received",
        "https://cdn.discordapp.com/embed/avatars/0.png"
      )
      .setTimestamp();

    // Send the embed to the Discord webhook
    hook.send(embed);

    return null;
  });
