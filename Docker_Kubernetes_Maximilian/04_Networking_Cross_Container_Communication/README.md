# Networking: (Cross-)Container Communication 

---

`host.docker.internal` use it instead of **localhost** to communicate with localhost server

`docker container inspect CONTAINER_NAME` to inspect the container. Use IPAddress to communicate with a container. 

## Creating Container Networks

You can put containers into the same network using `docker run --network my_network`
Within a Docker network, all containers can communicate with each other and IPs are automatically resolved

Docker won't automatically create a *network*. You have to do it on your own.

If both containers are in the same network you cant just use name of the container to communicate with that container. Like this: 
`mongodb://mongodb:27017/swfavorites`