📦 Components
- Jenkins (installed on Ubuntu server)
- Kubernetes Cluster (VMs on VMware)
- 1x Master Node
- 1x Worker Node
- Go Application
- Node.js Application
- GitHub (for storing source code and pipeline files)
- DockerHub (for storing application images)

🚀 Project Structure

Folder	Description
- /go-app	Simple Go HTTP server
- /node-app	Simple Node.js HTTP server
- /manifests	Kubernetes deployment and service YAML files
- /jenkins	Jenkins pipeline configuration (defined in UI)

⚙️ Setup Instructions
1. Jenkins Setup
- Install Jenkins using Ubuntu.
- Mount Docker socket for Jenkins container to build images.
- Install necessary Jenkins plugins:
- Kubernetes CLI Plugin
- Docker Pipeline
- GitHub Integration
- Configure Jenkins credentials:
  * GitHub credentials (for cloning repo)
  * DockerHub credentials (for pushing images)
  * Kubernetes kubeconfig credential (for deployment)

2. Kubernetes Cluster Setup
- 1 Master Node + 1 Worker Node (on VMware)
- Deployed Go and Node.js apps using Kubernetes Deployment and Service resources.
- Services exposed via NodePort to allow external access.

3. GitHub Setup
- Repository contains:
  * Go app and Node.js app source code.
  * Kubernetes YAML deployment files.
  * Jenkins pipeline pulls the latest code from GitHub.

4. DockerHub Setup
Applications are built as Docker images and pushed to DockerHub from Jenkins.

5. CI/CD Pipeline Flow
✅ Jenkins Pipeline Steps:

- Pull source code from GitHub.
- Build Docker images (Go app, Node.js app).
- Push Docker images to DockerHub.
- Apply Kubernetes deployment using kubectl from Jenkins.
