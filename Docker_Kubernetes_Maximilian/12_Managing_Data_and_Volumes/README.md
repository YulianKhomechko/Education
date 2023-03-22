## State
State is data created and used by your application which must not be lost.

Kubernetes can mount Volumes into Containers. 
It supports variety of Volume types / drivers are supported. 
"Local" Volumes, Cloud-provider specific volumes.

Volume's lifetime depends on Pod lifetime.
Volumes are removed when Pods are destroyed.

## Kubernetes Volumes vs Docker Volumes 
- Kubernetes Volumes
  - Supports many Drivers and Types
  - Volumes are not necessarily persistent
  - Volumes survive Containers restarts and removals
- Docker Volumes
  - Basically no Driver / Type Support
  - Volumes persist until manually cleared 
  - Volumes survive Containers restarts and removals

Volumes are attached to Pods when using `emptyDir`.
With `hostPath` multiple Pods will share the same path (on the same Node).

Persistent Volumes.

## Normal Volumes vs. Persistent Volumes
Volumes allow you to persist data
- "Normal" Volumes
  - Independent of containers, but not from pods. They attached to the pod
  - Defined and created together with Pod
  - Repetitive and hard to administer on a global level
- Persistent Volumes
  - Volume is a standalone Cluster resource (NOT attached to a Pod)
  - Created standalone, claimed via a PVC (PersistentVolumeClaim)
  - Can be defined once and used multiple times

