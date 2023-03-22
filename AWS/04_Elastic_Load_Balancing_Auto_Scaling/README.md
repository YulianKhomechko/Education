## Elastic Load Balancing & Auto Scaling Groups

### Scalability & High Availability
- scalability means that an application / system can handle greater loads by adapting
- There are two kinds of scalability 
  - Vertical Scalability
  - Horizontal Scalability
- Scalability is linked to High Availability but different 

### Vertical Scalability

- Vertical scalability means that we increase the capacity of a single instance
- Vertical scalability is very common for non distributed systems, such as database
- There is usually a limit to how much you can upgrade a single instance

### Horizontal Scalability
- Horizontal Scalability means increasing the amount of instances / systems for your application
- Horizontal scalability is very common for distributed systems, such as web servers
- It's easy to horizontally scale thanks the could offerings such as Amazon EC2

### High Availability

- High Availability usually goes hand in hand with horizontal scaling
- High availability means running your application / system in at least 2 Availability zones

### High Availability & Scalability for EC2

- Vertical scaling: increase instance size (= scale up / down)
- Horizontal scaling: add more instances (= scale out / in)
  - Auto Scaling Group
  - Load Balancer
- High Availability: run your application in at least 2 Availability Zones
  - Auto Scaling Group multi AZ
  - Load Balancer multi AZ

### Scalability vs Elasticity (vs Agility)

- Scalability is the ability to accommodate a larger load by making the hardware stronger (scale up), or by adding nodes (scale out)
- Elasticity once a system is scalable, elasticity means that there will be some "auto-scaling" so that the system can scale based on the load. This is "could-friendly" because you only pay for what you use, and optimize your expenses
- Agility (not related to scalability - distractor) new IT resources are only a click away, which means that you reduce the time to make those resources available to your developers from weeks to just minutes

## What is load balancing?

- Load balancers are servers that forward internet traffic to multiple servers (EC2 Instances) downstream.

### Why use a load balancer?

- Spread load across multiple downstream instances
- Expose a single point of access (DNS) to your application
- Seamlessly handle failures of downstream instances 
- Do regular health checks to your instances 
- Provide SSL termination (HTTPS) for your websites
- High availability across zones

### Why use an Elastic Load Balancer 

- and ELB (Elastic Load Balancer) is a managed load balancer
  - AWS guarantees that it will be working
  - AWS takes care of upgrades, maintenance, high availability 
  - AWS provides only a few configuration knobs 
- It costs less to setup your own load balancer but it will be a lot more effort on your end (maintenance, integrations)
- 3 kinds of load balancers offered by AWS (1 deprecated):
  - Application Load Balancer (HTTP/ HTTPS only) - Layer 7
  - Network Load Balancer (ultra-high performance, allows for TCP) - Layer 4
  - Gateway Load Balancer - Layer 3 
  - Classic Load Balancer (retired in 2023) Layer 4 & 7

- Application Load Balancer 
  - HTTP / HTTPS / gRPC protocols (Layer 7)
  - HTTP Routing features
  - Static DNS (URL)
- Network Load Balancer
  - TCP / UDP protocols (Layers 4)
  - High Performance: millions of request per seconds 
  - Static IP through Elastic IP 
- Gateway Load Balancer 
  - GENEVE protocol on IP Packets (Layer 3)
  - Route Traffic to Firewalls that you manage on EC2 Instances 
  - Intrusion detection 

### What's an Auto Scaling Group?

- In real-life the load on your websites and application can change
- In the cloud, you can create and get rid of servers very quickly 
- The goal of an Auto Scaling Group (ASG) is to:
  - Scale out (add EC2 instances) to match an increased load
  - Ensure we have a minimum number of servers running
  - Automatically register new instances to a load balancer
  - Replace unhealthily instances
- Cost Savings: ony run at an optimal capacity (principle of the cloud)

### Auto Scaling Group in AWS

- Minimum size => Actual size / Desired capacity => Maximum size
- Works with Load balancer

### Auto Scaling Groups - Scaling Strategies 

- Manual Scaling: Update the size of an ASG manually
- Dynamic Scaling: Respond to changing demand
  - Simple / Step Scaling: When a CloudWatch alarm triggers, add or remove a certain number of instances
  - Target Tracking Scaling: Add or remove instances to keep a metric (CPU, Network, etc) at a certain target value
  - Scheduled Scaling: Scale based on a schedule (cron job)
  - Predictive Scaling: Use machine learning to predict future load and scale accordingly

