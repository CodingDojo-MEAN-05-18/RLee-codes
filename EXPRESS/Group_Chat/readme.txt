Assignment: Group Chat

Create a simple app where multiple people can go to your nodeJS app and start chatting with each other. 
You could connect to your web app from multiple browsers (one from Safari, one from Firefox, one from 
Chrome for example) to mimic multiple people visiting your site. Use javascript 'prompt' to get the 
user's name. 
Your chat board should update in real time and even show all the chats that occurred before the user
joined the room.


1. server renders index.ejs
    a. user is presented with a prompt for "name" value which is saved to variable "name".
    b. blank name entry is disallowed by forced page reload.
2. "name" variable is emitted to the server as "named_entry" event
3. "named_entry" triggers:
    a. client update with past "chat_log" entries.
        i. client update comes via sever emitted event "catching_up"
    b. client name saved to session w/ session_id#
        i. clients may not duplicate the name of another client active in the session.
4. messages entered in message entry form are caught by jQuery on the client-side and event
    'message_posted' is emitted to server.
5. 'message_posted' event triggers 
    a. "chat_log" dictionary to be updated w/ new message
    b. broadcast to all connected users with "updated_chat_log" event
6. When a user "disconnects" their name & id are removed from session data. 
    a. Their chat messages remain in the "chat_log".
