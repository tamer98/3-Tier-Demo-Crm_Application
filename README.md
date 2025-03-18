# [PROJECT_NAME]

> A SaaS-based microservices application demonstrating DevOps best practices with CI/CD, Kubernetes, Terraform, and AWS infrastructure.
## Table of Contents

- [Overview](#overview)
- [Architecture](#architecture)
- [Technology Stack](#technology-stack)
- [Repository Structure](#repository-structure)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [CI/CD Pipeline](#cicd-pipeline)
- [Contributing](#contributing)
- [Release History](#release-history)
- [Contact](#contact)
- [Acknowledgments](#acknowledgments)

## Overview

This project showcases a SaaS-based application deployed on AWS using Kubernetes, with CI/CD automation through GitHub Actions. The project emphasizes:
Key features:

- Cloud-based infrastructure (AWS with Terraform)
- Microservices deployment using Kubernetes
- CI/CD automation via GitHub Actions
- Database integration with MongoDB
- Containerization using Docker & ECR

## Key Features
- REST API-based application using Next.js/Node.js
- Infrastructure as Code with Terraform
- Kubernetes cluster setup with EKS
- Helm-based service deployment
- CI/CD workflows with automated testing & deployment

## Architecture

**3-Tier Docker Diagram**

![Docker Diagram](https://github.com/user-attachments/assets/312e785e-46b9-4209-b0a1-60eb30704089)

-----------------------------------

**AWS Diagram**
![aws diagram drawio-2](https://github.com/user-attachments/assets/4922ab40-6711-47a8-8f96-93ef3173264e)



![Architecture Diagram](images/architecture_diagram.png)

## Technology Stack

| Category             | Technologies   |
| -------------------- | -------------- |
| **Infrastructure**   | AWS, Terraform |
| **Containerization** | Docker, ECR    |
| **CI/CD**            | GitHub Actions |
| **Version Control**  |    GitHub      |
| **Security**         | IAM, Secret Management |
| **Application**      | Next.js, Node.js, React|
| **Database**         | MongoDB |

## Repository Structure

```
project-root/
├── [DIRECTORY_1]/       # [DESCRIPTION]
│   ├── [FILE_1]         # [DESCRIPTION]
│   └── [FILE_2]         # [DESCRIPTION]
├── [DIRECTORY_2]/       # [DESCRIPTION]
│   ├── [SUBDIRECTORY_1]/# [DESCRIPTION]
│   └── [SUBDIRECTORY_2]/# [DESCRIPTION]
└── [FILE_3]             # [DESCRIPTION]
```

## Prerequisites

Requirements for building and running the project:

- AWS CLI configured
- Terraform installed
- Kubernetes CLI (kubectl) installed
- Docker & Docker Compose installed
- Helm package manager installed

## Getting Started


### Infrastructure Setup

1. **Initialize Terraform & Configure AWS:**

```bash
aws configure
# set your Access Key & Secret Key or use AWS IAM 
terraform init
terraform plan
terraform apply
# make sure to shoutdown Infrastructure when finish with :
terraform destroy
```

### Application Deployment

2. **Configure a StorageClass - create volume in the cloud for MongoDB database**

```bash
kubectl apply -f sc-ebs-csi-gp3.yaml
```

3. **Setup and Deploy MongoDB (using Helm)**

```
helm repo add bitnami https://charts.bitnami.com/bitnami
helm install -f dbvalues.yaml my-mongodb bitnami/mongodb --version 16.4.3
```

```
#Expected output
export MONGODB_ROOT_PASSWORD=$(kubectl get secret --namespace default mymongodb -o jsonpath="{.data.mongodb-root-password}" | base64 -d)

To connect to your database, create a MongoDB&reg; client container:

    kubectl run --namespace default mymongodb-client --rm --tty -i --restart='Never' --env="MONGODB_ROOT_PASSWORD=$MONGODB_ROOT_PASSWORD" --image docker.io/bitnami/mongodb:8.0.5-debian-12-r0 --command -- bash

Then, run the following command:
mongosh admin --host "my-mongodb-0.my-mongodb-headless.default.svc.cluster.local:27017,my-mongodb-1.my-mongodb-headless.default.svc.cluster.local:27017" --authenticationDatabase admin -u root -p $MONGODB_ROOT_PASSWORD
```

**run the three** 

3. **Deploy Next.js/Node.js Application (using Helm)**

```
helm install demo-crm .
```

4. **Set Up Ingress Controller**

```
helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx

helm install -n ingress --create-namespace controller ingress-nginx/ingress-nginx --set controller.ingressClassResource.default=true
kubectl apply -f demo-crm-ingress.yaml

#check creation
kubectl get service -n ingress
```

```
kubectl apply -f demo-crm-ingress.yaml

#check creation
kubectl get ingress
```

**Note: must setup a domain and DNS record that will point to our Ingress Controller’s singular Load Balancer service**

Expected result: [EXPECTED_RESULT_DESCRIPTION]

## CI/CD Pipeline

[PIPELINE_DESCRIPTION]

```mermaid
graph LR
    Clone/Pull --> Build Application
```


## Contributing

(For open source projects)

[CONTRIBUTION_GUIDELINES]

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/[FEATURE_NAME]`)
3. Commit your changes (`git commit -m '[DESCRIPTIVE_MESSAGE]'`)
4. Push to the branch (`git push origin feature/[FEATURE_NAME]`)
5. Open a Pull Request

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

## Release History

- 0.2.1
  - CHANGE:
- 0.2.0
  - CHANGE:
  - ADD:
- 0.1.1
  - FIX:
- 0.1.0
  - First real release
  - CHANGE:
- 0.0.1
  - Initial Version

## Contact

[YOUR_NAME] - LinkedIn - [EMAIL]

Project Link: [https://github.com/[USERNAME]/[REPOSITORY]](https://github.com/[USERNAME]/[REPOSITORY])

## Acknowledgments

- [ACKNOWLEDGMENT_1]
- [ACKNOWLEDGMENT_2]
- [ACKNOWLEDGMENT_3]
