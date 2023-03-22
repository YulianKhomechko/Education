# Getting Started with Kubernetes

- Containers might crash / go down and need to be replaced
- We might need more container instances upon traffic spikes
- Incoming traffic should be distributed equally 

## Benefits of Kubernetes
Kubernetes Configuration => (Some Provider-specific Setup or Tool) => ANY Cloud Provider or Remote Machines
Extensible, Yet Standardized Configuration.

## What Kubernetes Is nad Is NOT
- Not a cloud service provider 
- It's an open-source project that can be used with a cloud provider
- It's not a service by a cloud service provider
- It can be used with any service provider
- It's not restricted to any specific cloud service provider
- It's not just a software you run on some machine 
- It's a collection of concepts and tools
- It's not an alternative to Docker 
- It works with Docker containers
- It's not a paid service 
- It's a free open-source project

## Using Kubernetes 
Kubernetes is like docker-compose for multiple machines.


## Core Kubernetes Concepts & Architecture 
Master Node - The Control Plane - controls your deployment (i.e. all Worker Nodes)


Worker Node - run the containers of your application ("Nodes are your machines / virtual instances")

||      ||      ||\
\/      \/      \/

Proxy / Config - Control the network traffic of the pod
Pop (Container) - the smallest unit that holds a container (or multiple containers)

All above forms a Cluster and one Network in which all parts are connected 

## Your Work / Kubernetes' Work
- What Kubernetes Will Do
  - Create your object (e.g. Pods) and manage them
  - Monitor Pods and re-create them, scale Pods etc.
  - Kubernetes utilizes the provided (clouds) resources to apply your configuration / goals
- What You Need to Do / Setup (i.e. what Kubernetes requires)
  - Create the Cluster and the Node instances (Worked + Master Nodes)
  - Setup API Server, kubelet and other Kubernetes services / software on Nodes
  - Create other (cloud) provider resources that might be needed (e.g. Load Balancer, Filesystems)

## A Closer Look At The Worker Nodes
Worker Node - think of it as one computer / machine / virtual instance
The Worker Node is managed by the **Master Node** 

Pod hosts one or more application containers and their resources (volumes, IP, run config)
Pods are created and managed by Kubernetes
You usually have more than more Pod in one Worker Node

Worker Node also includes kubelet - which is responsible for communication between master and worker node; Docker; kube-proxy - managed node and Pod network communication.  

## Core Kubernetes Concepts & Architecture 
API Server - service which is running on the Master Node machine which is responsible for communication between Master Node and Worker Node
Scheduler - Watches for new Pods selects Worker Nodes to run them on
Kube_Controller Manager - Watches and controls Worker Nodes, correct number of Pods & more.
Cloud-Controller Manager - Like Kube-Controller-Manager BUT for a specific Clouds Provider: Knows how to interact with Clouds Provider resources 

## Core Concepts 
- Cluster - A set of Node machines which are running the Containerized Application (Worker Nodes) or control other Nodes (Master Node)
- Nodes - Physical or virtual machine with a certain hardware capacity which hosts one or multiple Pods and communicates with the Cluster
  - Master Node - Cluster Control Plane, managing the Pods across Worker Nodes.
  - Worker Node - Hosts Pods, running App Containers (+ resources)
- Pods - Pods hold the actual running App Containers + their required resource (e.g. volumes)
- Containers - Normal (Docker) Container
- Services - a logical set (group) of Pods with a unique, Pod - and Container- independent IP address.

