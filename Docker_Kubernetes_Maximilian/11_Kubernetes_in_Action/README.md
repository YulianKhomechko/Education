# Your Work / Kubernetes' Work
- What Kubernetes Will Do
  - Managing Deployed Application
  - Create your object (e.g. Pods) and manage them
  - Monitor Pods and re-create them, scale Pods etc.
  - Kubernetes utilizes the provided (cloud) resources to apply your configuration / goals
- What You Need To Do / Setup 
  - Create the Cluster and the Node Instances (Worker + Master Nodes)
  - Setup API Server, kubelet and other Kubernetes services / software of Nodes
  - Create other (cloud) provider resources that might be needed (e.g. Load Balancer, Filesystems)

## Installation 
- Cluster: Master Node, Worker Node(s) and all required services.
- kubectl (kube control) - a tool to send instructions to the cluster

## Understanding Kubernetes Objects (Resources)
Kubernetes works with objects
- Pods
- Deployments
- Services
- Volume
- etc

Objects can be created in two ways: Imperatively or Declarative

### The "Pod" Object (Resource)
The smallest "unit" Kubernetes interacts with
Contains and runs one or multiple containers. The most common use-case is "one container per Pod"
Pods contain shared resources (e.g. volumes) for all Pod containers.
Has a cluster-internal IP by default. 
Containers inside a Pod can communicate via localhost

Pods are designed to be ephemeral: Kubernetes will start, stop and replace them as needed. They don't persist. 

### The Deployment Object (Resource)
Controls (multiple) Pods.
You set a desired state, Kubernetes then changes the actual state.
Define which Pods and containers to run and the number of instances.

Deployments can be paused, deleted and rolled back.

Deployments can be scaled dynamically (and automatically)
You can change the number of desired Pods as needed 

You therefore typically don't directly control Pods, instead you use Deployments to set up the desired end state. 


### The "Service" Object (Resource)
The Service exposes pods to the Cluster or Externally - Pods have an internal IP by default - it changed when a Pod is replaced. 
Services group Pods with a shared IP.
Services can allow external access to Pods (The default (internal only) can be overwritten). 
Without Services, Pods are very hard to reach and communication is difficult .
Reaching a Pods from outside the Cluster is not possible at all without Services. 

`kubectl` - command to send instructions to our kubernetes cluster.

`kubectl create deployment NAME --image=IMGAGE`

`kubectl scale deployment/NAME --replicas=NUMBER` - scale pods

`kubectl set image deployment/NAME CONTAINER_NAME=IMAGE` it'll work only if image has a different tag.

`kubectl rollout status deployment/NAME` - check rollout status

`kubectlrollout undo deployment/NAME`

`kubectl rollout history deployment/NAME`

### Resource Definition File 
Write configuration options in .yaml file. 

Imperative - individual commands are executed to trigger certain Kubernetes actions

Declarative - a config file is defined and applied to change the desired state

