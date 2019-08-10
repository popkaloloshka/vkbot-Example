console.log("Starting...");
const fs = require('fs');
const vkio = require('vk-io');
const token = "TOKEN";
const VkBot = require("node-vk-bot-api"),
bot = new VkBot(token);
const spam = fs.readFileSync('txt/666.txt', 'utf8');
console.log("Bot started!");
bot.command("bts", msg =>{
  msg.reply("who is this?");
});
bot.command("/about", msg =>{
  msg.reply("the description of the bot");
});

bot.command("/666", msg =>{
  msg.reply(spam);
  msg.reply(spam);
  msg.reply(spam);
  msg.reply(spam);
  msg.reply(spam);
  msg.reply(spam);
  msg.reply(spam);
  msg.reply(spam);
});
bot.startPolling();
