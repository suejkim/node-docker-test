# # ./Dockerfile 
# FROM nginx:stable 

# COPY ./nginx/conf.d/nginx.conf /etc/nginx/nginx.conf 

# COPY ./nginx/project-lb.conf /etc/nginx/conf.d/project-lb.conf

# CMD ["nginx", "-g", "daemon off;"]



FROM nginx:1.16-alpine

# Install certbot
RUN apk add --no-cache certbot

# Copy renew cron script
COPY ./renew /etc/periodic/daily/renew
RUN chmod +x /etc/periodic/daily/renew

RUN mkdir /var/lib/certbot

# Copy entrypoint
COPY ./entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# nginx config
# COPY nginx/nginx.conf /etc/nginx/nginx.conf
COPY ./nginx/conf.d/nginx.conf /etc/nginx/nginx.conf 

# COPY ./nginx/project-lb.conf /etc/nginx/conf.d/project-lb.conf

# Something to serve
# RUN mkdir /var/lib/website
# COPY index.html /var/lib/website/

ENTRYPOINT [ "../entrypoint.sh" ]