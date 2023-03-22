## EC2 - Elastic Compute Cloud

---

- EC2 is one of the most popular AWS services
- EC2 = Elastic Compute Cloud = Infrastructure as a Service
- It mainly consists in the capability of:
    - Renting virtual machines (EC2).
    - Storing data on virtual drives (EBS).
    - Distributing the load across machines (ELB).
    - Scaling the services using an auto-scaling group (ASG).

## EC2 sizing and configuration options

---

- Operating System: Linux, Windows, RHEL, SUSE, etc.
- How much compute power do you need?
    - CPU.
    - Memory.
    - Storage.
- How much network bandwidth do you need?
    - Network Performance.
- Firewall
    - Security Groups.
- Bootstrapping
    - EC2 User Data.

## EC2 User Data

---

- It is possible to bootstrap an EC2 instance using a EC2 User Data script
- bootstrapping means that you can run commands on the EC2 instance when the instance first start
- EC2 user data is used to automate boot tasks such as:
    - Installing updates.
    - Installing software.
    - Downloading common files from the internet.
    - Executing scripts from S3.
    - Anything else you can think of.
- The EC2 user data script is executed as the root user.

## EC2 Instance Types - Overview

---

- General Purpose - balance between compute, memory, and network resources.
- Compute Optimized - designed for CPU intensive workloads.
- Memory Optimized - Fast performance for workloads that process large data sets in memory. Use Cases:
    - Relational Databases.
    - Distributed Caches.
    - In-Memory Analytics.
- Storage Optimized - Great for storage-intensive tasks that require high, sequential read and write access to large
  data sets on local storage.
- HPC Optimized (High performance computing)
- Accelerated Computing

## Security Groups Introduction

---

- Security Groups are the fundamental of network security in AWS
- They control how traffic is allowed into or out of our EC2 instances
- Security Groups only contain allow rules
- Security groups rules can reference by IP or by other security groups

Security groups are acting as a 'firewall' for EC2 instances

They regulate:

- Access to Ports
- Authorised IP ranges - IPv4 and IPv6
- Control of inbound (from outside to the instance) and outbound (from the instance to the others) traffic

### Security Groups Good to Know Tips

- Security groups can be attached to multiple EC2 instances
- Locked down to a region / VPC (Virtual Private Cloud) combination
- Does live 'outside' the EC2 - if traffic is blocked the EC2 instance won't see it
- It's good to maintain one separate security group for SSH access
- If your application is not accessible (time out), then it's likely a security group issue
- If your application gives a 'connection refused' error, then it's an application error, or it's not launched
- All inbound traffic is blocked by default
- All outbound traffic is allowed by default

## Classic Ports to Know

---

- 21 - FTP (File Transfer Protocol) - upload files into a file share.
- 22 - SFTP (Secure File Transfer Protocol)  - upload files using ssh.
- 22 - SSH(Secure Shell).
- 80 - HTTP (Hypertext Transfer Protocol) - access unsecured websites.
- 443 - HTTPS (Hypertext Transfer Protocol Secure) - access secured websites.
- 3389 - RDP (Remote Desktop Protocol) - access Windows desktops.

## Connection Summary Table

---

| 	              | SSH 	 | Putty 	 | EC2 Instance Connect 	 |
|----------------|-------|---------|------------------------|
| Mac          	 | +  	  | 	       | +          	           |
| Linux        	 | +  	  | 	       | +          	           |
| Windows < 10 	 | 	     | +   	   | +          	           | 
| Windows > 10 	 | +  	  | +   	   | +          	           | 

## EC2 Instances Purchasing Options

---

- On Demand - short workloads, predictable pricing.
- Reserved - long workloads, up to 75% discount.
- Saving Plans - long workloads, up to 72% discount.
- Spot - flexible, up to 90% discount short workloads, can lose instances.
- Dedicated Hosts - control instance placement, book an entire physical server.
- Dedicated Instances - no other customers will share your hardware.
- Capacity Reservations - guarantee capacity in a specific AZ (availability zone) for your AWS account.

## EC2 Instance On Demand

---

- Pay for what you use, no long term commitment.
    - Linux or Windows - billing per second, after the first minute.
    - All other operating systems - billing per hour.
- Has the highest cost, but no upfront payment
- No long term commitment

- Recommended for short-term and un-interrupted workloads where you can't predict the usage.

## EC2 Reserved Instances

---

- Up to 75% discount compared to On Demand.
- You reserve a specific instance attributes (Instance Type, Region, Tenancy, OS).
- Reservation is for 1 or 3 years.
- Payment Options - No Upfront, Partial Upfront, All Upfront.
- Reserved Instance's scope - Regional or Zonal (Reserve capacity in an AZ).
- Recommended for steady state or predictable usage.
- You can buy and sell in the Reserved Instance Marketplace.
- Convertible Reserved Instances - change the attributes of the reserved instance.
    - Smaller discount, but more flexibility.

## EC2 Savings Plans

---

- Get a discount based on long-term usage
- Commit to a certain type of usage
- Usage beyond EC2 Savings Plans is billed at the On-Demand price
- Locked to a specific instance family & AWS region
- Flexible across:
    - Instance Size
    - Operating System
    - Tenancy (Host, Default, Dedicated Host)

## EC2 Spot Instances

---

- Can get a discount of up to 90% compared to On Demand.
- Instances can be interrupted with 2 minutes notice.
- The most cost-effective option.
- Useful for workloads that are flexible with start and end times.
- Not suitable for critical jobs and databases applications.

## EC2 Dedicated Hosts

---

- Physical EC2 server dedicated for your use.
- Allows you address compliance requirements and use your existing server bound software licenses.
- Purchasing options:
    - On Demand - pay as you go.
    - Reservation - up to 70% discount.
- The most expensive option.
- Recommended for regulated workloads that require licensing for software that can't be transferred or shared.

## EC2 Dedicated Instances

---

- Instances run on hardware that's dedicated to you
- May share hardware with other customers
- No control over instance placement

## EC2 Capacity Reservations

---

- Reserve On-Demand capacity in a specific AZ (Availability Zone) for your AWS account.
- You always have access to the reserved capacity when you need it.
- No time commitment (create/cancel/anytime), no billing discounts.
- You're charged at On-Demand rate whether you run instances or not.
- Suitable for short-term capacity needs, that have to be in a specific AZ zone.