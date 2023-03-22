# Deploying Docker Containers

- Bind Mounts shouldn't be used in Production!
- Containerized aps might need a build step (e.g. React apps)
- Multi-Container projects might need to be split (or should be split) across multiple hosts / remote machines
- Trade-offs between control and responsibility might be worth it.


- **In Development**
  - Containers should encapsulate the runtime environment but not necessarily the code
  - Use Bind Mounts to provide your local host project files to the running container 
  - Allows for instant updated without restarting the container 
- **In Production** 
  - A container should really work standalone, you should NOT have source code on your remote machine
  - Use COPY to copy a code snapshot into the image
  - Ensures that every image runs without any extra, surrounding configuration code 


sudo - superuser do - to run command with sufficient permissions (as admin)
1. sudo yum update -y - to update all necessary packages
2. sudo amazon-linux-extras install docker - to install docker
3. sudo service docker start - to start docker

## Deploy Source Code vs Image 
- Option 1: Deploy Source
  - Build image on remote machine
  - Push source code to remote machine run docker build and then docker run 
  - Unnecessary complexity 
- Option 2: Deploy Built Image 
  - Build image before deployment (on local machine)
  - Just execute docker run

## A Managed / Automated Approach
- Your Own Remote Machines (e.g. AWS EC2)
  - You need to create them, manage them, keep them updated, monitor them, scale them etc.
  - Great if you're an experienced admin / could expert
- Managed Remote Machines (e.g. AWS ECS - Elastic Container Service)
  - Creation, management, updating is handled automatically, monitoring and scaling is simplified
  - Great if you simply want to deploy your app / containers.