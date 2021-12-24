# ./Dockerfile 
FROM nginx:stable 

COPY ./nginx/conf.d/nginx.conf /etc/nginx/nginx.conf 

COPY ./nginx/project-lb.conf /etc/nginx/conf.d/project-lb.conf

CMD ["nginx", "-g", "daemon off;"]
