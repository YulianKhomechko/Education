# Images & Containers

## Images 
Images are templates / blueprints for containers 
Contains code + required tools / runtimes.
We can use image to create multiple containers, based on that image

## Containers 
The running unit software.
We run containers based on images.

## Attached and Detached containers 
By default if you run a Container without `-d`, you run in in "attached mode".
If you started a container in detached mode (with `-d`), you can still attach to it afterwards without restarting the Container with the following command:
`docker attach CONTAINER`
attaches you to a running Container with an ID or name of CONTAINER.
Also you can use 
`docker logs [-f] CONTAINER`
to see logs of CONTAINER. use -f (follow) flag to keep listening to incoming logs of the Container.
