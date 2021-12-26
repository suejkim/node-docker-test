#!/bin/sh

# Get certs
certbot certonly -n -d dev.hellotome.shop --standalone --preferred-challenges http --email abbccc0225@gmail.com --agree-tos --expand

# # Kick off cron
/usr/sbin/crond -f -d 8 &

# Start nginx
/usr/sbin/nginx -g "daemon off;"