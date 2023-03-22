## Amazon S3

- Amazon S3 is one of the main building blocks of AWS
- It's as infinitely scaling storage
- Many websites use Amazon S3 as a backbone
- Many AWS services use Amazon S3 as an integration as well

### Amazon S3 Use cases

- Backup and storage
- Disaster Recovery
- Archive
- Hybrid Cloud storage
- Application hosting
- Media hosting
- Data lakes and big data analytics
- Software deliver
- Static website

### Amazon S3 - Buckets

- Amazon S3 allows people to store objects (files) in "buckets" (directories)
- Buckets must have a globally unique name (across all regions and all accounts)
- Buckets are defined at the region level
- S3 looks like a global service but buckets are created in a region
- Naming convention
    - No uppercase, No underscore
    - 3-63 characters long
    - Not an IP
    - Must start with a lowercase letter or number
    - Must NOT start with the prefix xn--
    - Must NOT end with the suffix -s3alias

### Amazon S3 - Objects

- Objects (files) have a Key
- The Key is the FULL path:
    - s3://my-bucket/my_file.txt
    - s3://my-bucket/my_folder/my_file.txt
- The key is composed of prefix + object name
- There's no concept of directories within buckets (although the UI will trick you to think otherwise)
- Just keys with very long names that contain slashes ("/")
- Object values are the content of the body:
    - Max. Object size is 5TB
    - If uploading more than 5Gb, must use the 'Multipart Upload'
- Metadata (list of text key / value pairs - system or user metadata)
- Tags (Unicode key / value pair - up to 10) - useful for security / lifecycle
- Version ID (if versioning is enabled)

### Amazon S3 - Security

- User-based
    - IAM Policies - which API calls should be allowed for a specific user from IAM
- Resource-Based
    - Bucket policies - bucket wide rules from the S3 console - allows across account
    - Object Access Control List (ACL) - finer grain (can be disabled)
    - Bucket Access Control List (ACL) - less common (can be disabled)
    - Most common way is to use IAM policies
- Note: an IAM principal can access an S3 object if
    - The user IAM permissions Allow it OR the resource policy ALLOWS it
    - AND there's no explicit DENY
- Encryption: encrypt objects in Amazon S3 using encryption keys

### S3 Bucket Policies

- JSON based policies
    - Resources: buckets and objects
    - Effect: Allow / Deny
    - Actions: set of API to Allow or Deny
- Advanced: Cross-Account Access - Use Bucket Policy
- Bucket settings for Block Public Access
    - These settings were created to prevent company data leaks
    - If you know your bucket should never be public, leave these on
    - Can be set at the account level

### Amazon S3 - Static Website Hosting

- S3 can host static websites and have them accessible on the internet
- The website URL will be (depending on the region)
    - http://my-bucket.s3-website-us-east-1.amazonaws.com
    - http://my-bucket.s3-website.aws-region.amazonaws.com
- If you get a 403 Forbidden error, make sure the bucket policy allows public reads

### Amazon S3 - Versioning

- You can version your files in Amazon S3
- It is enabled at the bucket level
- Same key overwrite will change the version
- It is the best practice to version your buckets
    - It will protect against unintended deletes (ability to restore a version)
    - Easy roll back to previous version
- Notes:
    - Any file that is not versioned prior to enabling versioning will have version "null"
    - Suspending versioning does not delete the previous versions

### Amazon S3 - Replication (CRR & SRR)

- Must enable versioning in source and destination buckets
- Copying is asynchronous
- Must give proper permissions to S3

- Cross-Region Replication (CRR)
    - Replicate data to another region
    - Useful for Disaster Recovery
    - Can be used for cost optimization
- Same-Region Replication (SRR)
    - Replicate data to another bucket in the same region
    - Useful for backup
    - Can be used for cost optimization

- Use cases:
    - CRR - compliance, lower latency access, replication across accounts
    - SRR - log aggregation, live replication between production and test accounts

### S3 Storage Classes

- Amazon S3 Standard - General Purpose
- Amazon S3 Infrequent Access (IA)
- Amazon S3 One Zone Infrequent Access
- Amazon S3 Glacier Instant Retrieval
- Amazon S3 Glacier Flexible Retrieval
- Amazon S3 Glacier Deep Archive
- Amazon S3 Intelligent-Tiering

- Can move between classes manually or using S3 lifecycle configurations

### Durability and Availability

- Durability:
    - Height durability (99.999999999%) of objects across multiple AZ
    - If you store 10,000,000 objects with Amazon S3, you can on average expect to incur a loss of a single object once
      every 10,000 years
    - Same for all storage classes
- Availability
    - Measures how readily available a service is
    - Varies depending on storage class
    - Example: S3 standard has 99.99% availability = not available for 52 minutes per year

### S3 Standard - General Purpose

- 99.99% availability
- Used for frequently accessed data
- Low latency and high throughput
- Sustain 2 concurrent facility failures without data loss
- *Use Cases*: Big Data analytics, mobile and gaming applications, content distribution...

### S3 infrequent access (IA)

- For data that is less frequently accessed but requires rapid access when needed
- Lower cost than S3 standard

- Amazon S3 Standard-Infrequent Access (S3 Standard-IA) is designed for data that is accessed less frequently, but
  requires rapid access when needed.
    - 99.9% availability
    - Use cases: Disaster Recovery, backups
- Amazon S3 One Zone-Infrequent Access (S3 One Zone-IA)
    - Highly durable and available in a single AZ. Data loss when AZ is destroyed
    - 99.5% availability
    - Use cases: Storing secondary backup copies of on-premise data, or data you can recreate

### S3 Glacier Storage Classes

- Low-cost object storage meant for archiving / backup
- Pricing: price for storage + object retrieval cost

- Amazon S3 Glacier Instant Retrieval
    - Millisecond retrieval, great for data accessed once a quarter
    - Minimum storage duration of 90 days

- Amazon S3 Glacier Flexible Retrieval (formerly Amazon S3 Glacier)
    - Expedited (1 to 5 minutes); Standard (3-5 hours); Bulk (5 to 12 hours FREE). Great for data accessed once a year
    - Minimum storage duration of 90 days

- Amazon S3 Glacier Deep Archive
    - Standard (12 hours); Bulk (48hours). Great for data accessed once every 5 years
    - Minimum storage duration of 180 days

### S3 Intelligent-Tiering

- Small monthly monitoring and auto-tiering fee
- Moves object automatically between Access Tiers based on usage
- There are not retrieval charges in S3 Intelligent-Tiering

- Frequent Access tier (automatic): default tier
- Infrequent Access tier (automatic): objects that are not accessed for 30 days
- Archive Instant Access tier (automatic): objects that are not accessed for 90 days
- Archive Access tier (optional): configurable from 90 days to 700+ days
- Deep Archive Access tier (optional): configurable from 180 days to 700+ days

### S3 Encryption

- Server-Side Encryption (default)
- Client-Side Encryption - encrypt before uploading to S3

### Shared Responsibility Model for S3

- AWS is responsible for the security of the infrastructure (global security durability, avaiability, sustain concurrent
  loss of data in two facilities)
- Configuration and vulnerability analysis 
- Compliance validation 

- Customer is responsible for:
    - S3 versioning
    - S3 bucket policies
    - S3 Replication Setup
    - Logging and Monitoring
    - S3 Storage Classes

### AWS snow Family

- Highly secure, portable devices to collect and process data at the edge and migrate data into and out of AWs

- Data migration:
  - Snowcone
  - Snowball Edge
  - Snowmobile
- Edge computing 
  - Snowcone
  - Snowball Edge

#### Data Migration with AWS Snowball Family

Challenges
- Limited connectivity 
- Limited bandwidth
- High network cost
- Shared bandwidth(can't maximize the line)
- Connector stability

AWS Snow Family: offline devices to perform data migrations
- If it takes more than a week to transfer over the network, use Snowball devices 

#### Snowball Edge (for data transfers)

- Physical data transport solution: move TBs or PBs of data in or out of AWS
- Alternative to moving data over the network (and paying network fees)
- Pay per data transfer job
- Provide block storage and Amazon S3-compatible object storage
- Snowball Edge Storage Optimized
  - 80 TB of storage for block volume and S3 compatible object storage
- Snowball Edge Compute Optimized 
  - 42 TB of storage for block volume and S3 compatible object storage
- Use cases: large data cloud migrations 

#### AWS Snowcone and Snowcone SSD

- Small portable computing anywhere, rugged and secure, withstand harsh environments
- light (2.1kg)
- Device used for edge computing, storage, and  data transfer
- Snowcone - 8TB of HDD SStorage 
- Snowcone SSD - 14 Tb of SSD Storage
- Use Snowcone where Snowball does not fit (space-constrained environments)
- Must provide your own batter / cables 
- Can be sent back to AWS offline, or connect it to internet and use AWS DataSync to send data

#### AWS Snowmobile

- Transfer exabytes of data (1EB = 1,000 PB) into and out of AWS
- Each Snowmobile has 100PB of capacity (use multiple in parallel)
- Use cases: large data cloud migrations, disaster recovery, data warehousing, big data analytics
- High security
- Better than snowball if you have more than 10PB of data to transfer

### Edge Computing 

- Process data while it's being created on an edge location 
- Edge location:
- Data center
    - Limited or no internet access
    - Limited not easy access to computing power
- We setup a Snowball Edge / Snowcone device to do edge computing 
- Use cases of Edge Computing 
  - Preprocess data
  - Machine learning at the edge
  - Transcoding media streams
- Eventually (if need be) we can ship back the device to AWS (for transferring data for example)

Snow Family - Edge Computing 

- Snowcone and Snowcone SSD (smaller)
  - 2 CPUs, 4GB of memory, wired or wireless access
  - USB-C power using a cord or the optional battery
- Snowball Edge - Compute Optimized 
  - 52 vCPUs, 208 GiB of RAM
  - Optional GPU (useful for video processing or machine learning)
- ALL: Can run EC2 Instances and AWS Lambda functions (using AWS IoT Greengrass)
- Long-term deployment options: 1 or 3 years. 

### AWS OpsHub

- Historically, to use SnowFamily devices, you needed a CLI (command Line Interface tool)
- Today, you can use AWS OpsHub (a software you install on your computre / laptop to manage your Snow Family Device)

### Storage Gateway Overview 

#### Hybrid Cloud for Storage 

- AWS is pushing for "hybrid cloud"
  - Part of your infrastructure is on-premisses
  - Part of your infrastucture is in the cloud
- This can be due to 
  - Long cloud migrations
  - Security requirements
  - Compliance requirements
  - IT Strategy
- S3 is a proprietary storage technology (unlike EFS / NFS), so how do you expose the S3 data on-premise?

#### AWS Storage CLoud Native Options

- Block (Amazon EBS - Elastic Block Storage)
- File (Amazon EFS - Elastic File System)
- Object (Amazon S3 - Simple Storage Service, Glacier

#### AWS Storage Gateway

- Bridge between on-premise data and cloud data in S3
- Hybrid storage service to allow on-premises to seamlessly use the AWS Cloud 
- Use cases: disaster recovery, backup and restore, tiered storage 
- Types of Storage Gateway:
  - File Gateway
  - Volume gateway
  - Tape gateway
- No need to know the types at the exam

### Amazon S3 - Summary 

- Buckets vs Objects: global unique name, tied to a region
- S3 security: IAM policy, S3 Bucket Policy (public access), S3 Encryption
- S3 Websites: host a static website on Amazon S3
- S3 Versioning: multiple versions for files, prevent accidental deletes
- S3 Replication: same-region or cross-region, must enable versioning
- S3 Storage Classes: S3 Standard, S3 Standard-IA, S3 One Zone-IA, S3 Intelligent-Tiering, S3 Glacier, S3 Glacier Deep Archive
- Snow Family: Import data onto S3 through a physical device, edge computing
- OpsHub: desktop application to manage Snow Family devices
- Storage Gateway: hybrid solution to extend on-premises storage to AWS