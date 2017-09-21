# Express Over HTTPS

Sometimes test your api with the real world is important and how your services simulate on https. This repository tell you about minimal configuration service api with express js over https.

1. Clone this repository
2. Create folder sslcert on root of project folder
3. Change dir to sslcert then generate ssl key with command

    openssl req -x509 -newkey rsa:2048 -keyout key.pem -out cert.pem -days 365

    (This key will valid for 365 days).

4. Try to run the app

    node index.js

5. If you see an error 'bad password read'. Remove the pass

    openssl rsa -in key.pem -out newkey.pem && mv newkey.pem key.pem