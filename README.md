# Textminder

You can view the site here https://textminder.firebaseapp.com

Remind yourself with a friendly text from the future!

This small web app allows you send a text message to a number at a any given time in the future.

It uses [Textbelt](http://textbelt.com) api for sending messages which could cause failures if too many messages are sent or to an unsupported carrier.

It uses [Later](https://github.com/bunkat/later) for scheduling of sending the messages.

TODO:
* Create backend using node so it still sends texts when user closes browser
