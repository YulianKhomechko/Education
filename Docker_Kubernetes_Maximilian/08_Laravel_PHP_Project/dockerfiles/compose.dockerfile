FROM composer:latest

WORKDIR /var/www/html

VOLUME ["./src:/var/www/html"]

ENTRYPOINT ["composer", "--ignore-platform-reqs"]