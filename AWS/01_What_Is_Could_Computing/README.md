## What Is Cloud Computing

---

- Could computing is the on-demand delivery of compute power: database storage, applications and other IT resources
- Through a could services platform with pay-as-you-go pricing (pay for what you have used)
- You can provision exactly the right type and size of computing resources you need
- You can access as many resources as you need, almost instantly
- Simple way to access serves, storage, databases and a set of application services
-

Amazon Web Services owns and maintains the network-connected hardware required for these applications services, while
you provision and use what you need via a web application

## The Deployment Models of the Could

---

### Private Could

- Cloud service used by a single organization, not exposed to the public.
- Complete control
- Security for sensitive applications
- Meet specific business needs

### Public Could (Microsoft Azure, Google Cloud, AWS)

- Cloud resources owned and operated by a third-party cloud service provider delivered over the internet
- Six Advantages of the cloud computing

### Hybrid Cloud

- Keep some servers on premises and extend some capabilities to the Cloud
- Control over sensitive assets in your private infrastructure
- Flexibility and cost-effectiveness of using the public cloud

## The Five Characteristics of the Cloud Computing

---

#### On-demand self-service:

- Users can provision resources and use them without human interactions from the service provider

#### Broad network access:

- Resources available over the network, and can be accessed by diverse client platforms

#### Multi-tenancy and resource pooling:

- Multiple customers can share the same infrastructure and applications with security and privacy
- Multiple customers are serviced from the same physical resources

#### Rapid elasticity and scalability:

- Automatically and quickly acquire and dispose resources when needed
- Quickly and easily scale based on demand

#### Measured service:

- Usage will be measured, and we will pay only for what we have used

## Six Advantages of Cloud Computing

---

- Trade capital expense (CAPEX) for operational expense (OPEX)
    - Pay on demand: don't own hardware
    - Reduced Total Cost of Ownership (TCO) & Operational Expense (OPEX)
- Benefit from massive economies of scale
    - Prices are reduced as AWS is more efficient due to large scale
- Stop guessing capacity
    - Scale based on actual measured usage
- Increase speed and agility
- Stop spending money running and maintaining data centers
- Go global in minutes: leverage the AWS global infrastructure

## Problems solved by the Cloud

---

- Flexibility: change resource types when needed
- Cost-effectiveness: pay as you go, for what you use
- Scalability: accommodate larger loads by making hardware stronger or adding additional nodes
- Elasticity: ability to scale out and cale-in when needed
- High-availability and fault-tolerance: build across data centers
- Agility: rapidly develop, test and launch software applications

## Types of Cloud Computing

---

- Infrastructure as a Service (IaaS)
    - Provide building blocks for cloud IT
    - Provides networking, computers, data storage space
    - Highest level of flexibility
    - Easy parallel with traditional on-premises IT
- Platform as a Service (PaaS)
    - Removes the need for your organization to manage the underlying infrastructure
    - Focus on the deployment and management of your applications
- Software as A Service (SaaS)
    - Completed product that is run and managed by the service provider

## Pricing of the Cloud - Quick Overview

---

- AWS has 3 pricing fundamentals, following the pay-as-you-go pricing model
- Compute
    - Pay for compute time
- Storage
    - Pay for data stored in the Cloud
- Data transfer OUT of the CLoud:
    - Data transferred IN the cloud is FREE
- Solves the expensive issue of traditional IT

## AWS Global Infrastructure

---

- AWS Regions: geographical areas that consist of 2 or more Availability Zones
- AWS Availability Zones: data centers that are physically separate from each other
- AWS Data Centers: physical locations where AWS stores its servers
- AWS Edge Locations: endpoints for AWS which are used for caching content, serving requests for CloudFront, and route
  traffic to AWS

## AWS Regions

---

### How to choose a region?

- Compliance requirements
- Proximity to users
- Availability of services
- Pricing
- Latency

## AWS Availability Zones

---

- Each region has many availability zones (usually 3)
- Each Availability Zone is a separate data center They are separate from each other. So if one AZ goes down, the others
  are still up and running
- AZ are connected with low-latency, high-bandwidth, and redundant network connections. They form a region.

## AWS Points of Presence (Edge Locations)

---

- Amazon has 216 Points of Presence (PoPs) around the world in 84 cities across 42 countries.
- Content is delivered to the end users with lower latency.

## Shared Responsibility Model

---

- Customers are responsible for the security *IN* the Cloud.
- AWS is responsible for the security *OF* the Cloud.

## IAM: Users and Groups

---

- IAM (Identity and Access management global service) is a web service that helps you securely control access to AWS
  resources.
- Rot account create by default, shouldn't be used or shared .
- Users are people within your organization, and can be grouped together.
- Groups can only contain users, and can be assigned permissions.
- Users don't have to belong to a group, and user can belong to multiple groups at the same time.
- Users can be assigned permissions directly, or through groups.
- Apply least privilege principle: only give users the permissions they need to perform their job.

## IAM Policies inheritance
- Users that belong to a group will inherit the permissions of the group.
- You can assign inline permissions to a user, but it's not recommended.
- If a user belong to multiple groups, the permissions will be added together.

## Shared Responsibility Model for IAM

---

- AWS
  -  AWS manages the IAM infrastructure
  - Configuration and vulnerability analysis
  - Compile validation
- Users (you)
  - Create and manage users and groups
  - Assign permissions to users and groups
  - Apply least privilege principle
  - Configure multi factor authentication (MFA)
  - Configure password policies
  - Configure access keys
  - Configure password rotation policies
  
## IAM Summary
- Users: mapped to physical user, has a password for AWS Console
- Groups: contains users only
- Policies: JSON document that outlines permissions for users or groups
- Roles: for EC2 instances or AWS services
- Security: MFA + Password policy
- AWS CLI: manage your AWS services using the command-line
- AWS SDK: manage your AWS services using code
- Access Keys: used to access AWS services using the API or CLI
- Audit: IAM Credentials Report and IAM Access Advisor

*Roles are permissions for the services, not for the users*