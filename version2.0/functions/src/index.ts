import * as functions from "firebase-functions";
import { Webhook, MessageBuilder } from "discord-webhook-node";

const DISCORD_WEBHOOK_AVATAR_URL = process.env.DISCORD_WEBHOOK_AVATAR_URL;
const DISCORD_CHANNEL_WEBHOOK_VISITS =
  process.env.DISCORD_CHANNEL_WEBHOOK_VISITS;
const DISCORD_CHANNEL_WEBHOOK_MESSAGES =
  process.env.DISCORD_CHANNEL_WEBHOOK_MESSAGES;

// Firestore Trigger: Sends a notification to a Discord webhook when a new document is created in siteVisits
export const sendDiscordMessageSiteVisits = functions.firestore
  .document("/siteVisits/{id}")
  .onCreate((snap) => {
    // Create the Webhook
    const hook = new Webhook(DISCORD_CHANNEL_WEBHOOK_VISITS as string);

    // Set webhook username and avatar
    hook.setUsername("bpmiller.com");
    hook.setAvatar(DISCORD_WEBHOOK_AVATAR_URL as string);

    // Firestore data from the new document
    const data = snap.data();

    // Create the message embed for Discord
    const embed = new MessageBuilder()
      .setColor(0x00b0f4)
      .setTitle(data.ipAddress)
      .setDescription(
        `City: ${data.location.city}
State: ${data.location.region}
Country: ${data.location.country}`
      )
      .setFooter(
        "Time received",
        "https://cdn.discordapp.com/embed/avatars/0.png"
      )
      .setTimestamp();

    // Send the embed to the Discord webhook
    return hook.send(embed);
  });

// Firestore Trigger: Sends a notification to a Discord webhook when a new document is created in websiteMessages
export const sendDiscordMessageWebsiteMessages = functions.firestore
  // .document("/{collection}/{id")
  .document("/websiteMessages/{id}")
  .onCreate((snap) => {
    // Create the Webhook
    const hook = new Webhook(DISCORD_CHANNEL_WEBHOOK_MESSAGES as string);

    // Set webhook username and avatar
    hook.setUsername("bpmiller.com");
    hook.setAvatar(DISCORD_WEBHOOK_AVATAR_URL as string);

    // Firestore data from the new document
    const data = snap.data();

    // Create the message embed for Discord
    const embed = new MessageBuilder()
      .setColor(0x00b0f4)
      .setTitle(data.email)
      .setDescription(data.message)
      .setFooter(
        "Time received",
        "https://cdn.discordapp.com/embed/avatars/0.png"
      )
      .setTimestamp();

    // Send the embed to the Discord webhook
    return hook.send(embed);
  });
