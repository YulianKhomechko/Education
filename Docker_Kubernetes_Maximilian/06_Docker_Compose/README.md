# Docker Compose

## What is Docker Compose

Docker Compose is a tool that allows you to replace `docker build` & `docker run` commands with one configuration file.

- Docker Compose does NOT replace Dockerfiles for custom Images
- Docker Compose does NOT replace Images or Containers
- Docker Compose is NOT suited for managing multiple containers on different hosts (machines)

## Writing Docker Compose Files 

- Services (Containers)
  - Published Ports
  - Environment Variables 
  - Volumes 
  - Networks
  - ...

Docker Compose automatically creates network.