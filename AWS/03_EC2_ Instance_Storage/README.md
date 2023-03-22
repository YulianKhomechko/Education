## EC2 Instance Storage

---

### What's an EBS Volume?

- EBS stands for Elastic Block Store
- An EBS Volume is a network drive you can attach to your instances while they run
- It allows your instances to persist data, even after their termination
- They can only be mounted to one instance at a time (at the CCP level (Certified Cloud Practitioner))
- They are bound to a specific availability zone
- Analogy: Think of them as a "network USB stick"
- Free tier: 30GB of General Purpose SSD (gp2) storage per month for 1 year
- It's a network drive (i.e. not a physical drive)
    - It uses the network to communicate with the EC2 instance
    - In can be detached from an EC2 instance and attached to another one
- It's locked to an Availability Zone
    - An EBS volume can only be attached to an EC2 instance in the same Availability Zone
    - To move a volume to another AZ, you need to snapshot it and restore it in the other AZ
- Have a provisioned capacity (size in GBs, and IOPS)
    - You get billed for all the provisioned capacity
    - You can increase the capacity of the drive over time
- EBS - Delete on Termination (D.O.T)
    - When you terminate an EC2 instance, the root EBS volume is deleted by default
    - You can change this behavior and keep the root volume
    - You can also change this behavior for any other EBS volume attached to the instance

## EBS Snapshots

---

- Make a backup (snapshot) of your EBS volume at a point in time
- Not necessary to detach a volume to do snapshot, but it is recommended
- You can copy snapshots across azs or regions

### EBS Snapshots Features

- EBS Snapshot Archive
    - Move a Snapshot to an "archive tier" that is 75 cheaper
    - Takes within 24 to 72 hours to move a snapshot to the archive tier
- Recycle Bin for EBS Snapshots
    - Setup rules to retain deleted snapshots, so you can recover them after an accidental deletion
    - Specify retention (from 1 day to 1year)

## AMI - Amazon Machine Images

---

- AMI stands for Amazon Machine Image
- It's a template for your EC2 instance
    - You add your own software, configuration, operating system, monitoring...
    - Faster boot / configuration time because all your software is pre-installed
- AMI are built for a specific region (and can be copied across regions)
- You can launch EC2 instance from:
    - A Public AMI: AWS provided
    - Your own AMI: you make and maintain them yourself
    - An AWS Marketplace AMI: an AMI someone else made (and potentially sells)

### AMI Process (from an EC2 Instance)

- Create an EC2 instance and customize it
- Stop the instance (for data integrity)
- Build an AMI - this will also create EBS snapshots
- Launch instances from other AMIs

## EC2 Image Builder 

---

- Used to automate the creation of virtual machines or container images.
- Automate the creation, maintain, validate and test EC2 AMis

EC2 Image Builder => Builder EC2 instance => New AMI => Test EC2 Instance  => AMI is distributed (can be multiple regions)

- Can be run on a schedule (weekly, whenever packages are updated, etc...)
- Free service (only pay for the underlying resources)

## EC2 Instance Store

---

- EBS volumes are network drives with good but "limited" performance
- If you need a high-performance hardware disk, use EC2 Instance Store
- It's a physical disk attached to the host
- Better performance than EBS volumes
- EC2 Instance STore lose their storage if they are stopped or terminated (ephermal storage)
- Good for buffer / cache / scratch data / temporary data
- Risk of data loss if hardware fails
- Back-ups and replication are your responsibility

## EFS  - Elastic File System

---

- Manage NFS (network file system) that can be mounted on hundreds of EC2 instances
- EFS works with Linux EC2 instances in multi-AZ
- Highly available, scalable, expensive (3x gp2), pay per use, no capacity planning

## EBS vs EFS

- EBS can be attached to only one EC2 instance at a time in the same AZ
- EFS can be mounted on multiple EC2 instances in multiple AZs

### EFS Infrequent Access (EFS-IA)

- Storage class that is cost-optimized for files not accessed very day
- Up to 92% cheaper than standard EFS
- EFS will automatically move your files to EFS-IA based on the last time they were accessed
- Enable EFS-IA with a Lifecycle Policy
- Example: move files that are not accessed for 60 days to EFS-IA

### Shared Responsibility Model for EC2 Storage  

- AWS
  - Infrastructure
  - Replication for data for EBS volumes and EFS drives 
  - Replacing faulty hardware
  - Ensuring their employees cannot access your data
- You
  - Setting up backup / snapshot procedures 
  - Setting up data encryption 
  - Responsibility of any data on the drives 
  - Understanding the risk of using EC2 Instance Store

## Amazon FSx - Overview

--- 

- Launch 3rd party high-performance file systems on AWS 
- Fully managed service 
- FSx for Lustre, FSx for Windows File Server, FSx for NetApp ONTAP

### Amazon FSx for Windows File Server 

- A fully managed, highly reliable, and scalable Windows native shared file system
- Built on Windows File Server
- Supports SMB protocol and Windows NTFS

### Amazon FSx for Lustre

- A fully managed, high-performance, parallel file system for compute-intensive workloads
- The name Lustre is derived from Linux and cluster 
- Machine Learning, Analytics, Video Processing, Financial Modeling, ...
- Scales up to 100s GB/s, millions of IO/PS, sub-ms latencies 

## EC3 Instance Storage - Summary

---

- EBS volumes
  - network drives attached to one EC2 instance at a time 
  - Mapped to an Availability Zone
  - Can use EBS snapshots to back up and move volumes across AZs
- AMI: create ready-to-use EC2 instances with our customizations 
- EC2 Image Builder: automatically build, test, and distribute AMIs
- EC2 Instance Store: 
  - high performance physical disks attached to out EC2 instances
  - Lost if our instance is stopped / terminated 
- EFS: network file system, that can be attached to hundreds of instance in a region 
- EFS-IA: cost-optimized storage class for infrequent accessed files 
- FSx for Windows: Network File System for Windows servers 
- FSx for Lustre: High Performance Computing Linux file system 
