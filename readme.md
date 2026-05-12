# 🚀 CI/CD Pipeline using GitHub, Jenkins & Docker

## 📌 Project Overview
This project demonstrates a complete CI/CD pipeline where Jenkins automatically pulls code from GitHub, builds a Docker image, and deploys the application using a container.

---

## ⚙️ Tech Stack
- GitHub (Code Repository)
- Jenkins (Automation Server)
- Docker (Containerization)
- Node.js (Application)

---

## 🔄 CI/CD Pipeline Flow
1. Code is pushed to GitHub repository
2. Jenkins pulls the latest code
3. Docker image is built using Dockerfile
4. Existing container is stopped and removed
5. New container is deployed automatically

---

## 🐳 Docker Commands Used
```bash
docker build -t cicd-app .
docker stop cicd-container || true
docker rm cicd-container || true
docker run -d -p 3000:3000 --name cicd-container cicd-app
```

---

## 📸 Screenshots

![Screenshot 1](./ScreenShots/Screenshot%202026-04-17%20173652.png)

![Screenshot 2](./ScreenShots/Screenshot%202026-04-17%20173702.png)


### Console Output

'''
17:22:27 Started by user Shivang Chaurasia
17:22:27 Running as SYSTEM
17:22:27 Building in workspace /var/jenkins_home/workspace/cicd-app
17:22:27 The recommended git tool is: NONE
17:22:27 No credentials specified
17:22:27 Cloning the remote Git repository
17:22:27 Cloning repository https://github.com/ShivangChaurasia/CI-CD-Jenkins-Docker
17:22:27  > git init /var/jenkins_home/workspace/cicd-app # timeout=10
17:22:27 Fetching upstream changes from https://github.com/ShivangChaurasia/CI-CD-Jenkins-Docker
17:22:27  > git --version # timeout=10
17:22:27  > git --version # 'git version 2.47.3'
17:22:27  > git fetch --tags --force --progress -- https://github.com/ShivangChaurasia/CI-CD-Jenkins-Docker +refs/heads/*:refs/remotes/origin/* # timeout=10
17:22:29  > git config remote.origin.url https://github.com/ShivangChaurasia/CI-CD-Jenkins-Docker # timeout=10
17:22:29  > git config --add remote.origin.fetch +refs/heads/*:refs/remotes/origin/* # timeout=10
17:22:29 Avoid second fetch
17:22:29  > git rev-parse refs/remotes/origin/main^{commit} # timeout=10
17:22:29 Checking out Revision 7483be41fe615daa259cad6bb3fb8ab0ec1c3c22 (refs/remotes/origin/main)
17:22:29  > git config core.sparsecheckout # timeout=10
17:22:29  > git checkout -f 7483be41fe615daa259cad6bb3fb8ab0ec1c3c22 # timeout=10
17:22:33 Commit message: "chore: initialize project dependencies and node_modules structure"
17:22:33 First time build. Skipping changelog.
17:22:33 [cicd-app] $ /bin/sh -xe /tmp/jenkins4345444579391292363.sh
17:22:33 + docker build -t cicd-app .
17:22:33 DEPRECATED: The legacy builder is deprecated and will be removed in a future release.
17:22:33             Install the buildx component to build images with BuildKit:
17:22:33             https://docs.docker.com/go/buildx/
17:22:33 
17:22:33 Sending build context to Docker daemon  256.5kB
17:22:33 
17:22:36 Step 1/7 : FROM node:18
17:22:38 18: Pulling from library/node
17:22:38 461077a72fb7: Pulling fs layer
17:22:38 3e6b9d1a9511: Pulling fs layer
17:22:38 37927ed901b1: Pulling fs layer
17:22:38 79b2f47ad444: Pulling fs layer
17:22:38 e23f099911d6: Pulling fs layer
17:22:38 cda7f44f2bdd: Pulling fs layer
17:22:38 c6b30c3f1696: Pulling fs layer
17:22:39 3697be50c98b: Pulling fs layer
17:22:40 1cfd1b2a145f: Download complete
17:22:40 461077a72fb7: Download complete
17:22:40 3697be50c98b: Download complete
17:22:44 cda7f44f2bdd: Download complete
17:22:46 37a8114c5a8f: Download complete
17:22:50 37927ed901b1: Download complete
17:22:52 3e6b9d1a9511: Download complete
17:22:54 c6b30c3f1696: Download complete
17:23:13 79b2f47ad444: Download complete
17:23:13 3e6b9d1a9511: Pull complete
17:23:18 e23f099911d6: Download complete
17:23:34 37927ed901b1: Pull complete
17:24:19 79b2f47ad444: Pull complete
17:24:19 e23f099911d6: Pull complete
17:24:33 cda7f44f2bdd: Pull complete
17:24:34 c6b30c3f1696: Pull complete
17:24:34 461077a72fb7: Pull complete
17:24:34 3697be50c98b: Pull complete
17:24:34 Digest: sha256:c6ae79e38498325db67193d391e6ec1d224d96c693a8a4d943498556716d3783
17:24:34 Status: Downloaded newer image for node:18
17:24:34  ---> c6ae79e38498
17:24:35 Step 2/7 : WORKDIR /app
17:25:41  ---> Running in c534d9fa7061
17:25:41  ---> Removed intermediate container c534d9fa7061
17:25:41  ---> d0bd84986e2e
17:26:46 Step 3/7 : COPY package*.json ./
17:26:46  ---> 79962354b34f
17:26:46 Step 4/7 : RUN npm install
17:26:53  ---> Running in 8527bd9e84d3
17:26:53 
17:26:53 added 68 packages, and audited 69 packages in 5s
17:26:53 
17:26:53 15 packages are looking for funding
17:26:53   run `npm fund` for details
17:26:53 
17:26:53 found 0 vulnerabilities
17:26:53 [91mnpm notice
17:26:53 npm notice New major version of npm available! 10.8.2 -> 11.12.1
17:26:53 npm notice Changelog: https://github.com/npm/cli/releases/tag/v11.12.1
17:26:53 npm notice To update run: npm install -g npm@11.12.1
17:26:53 npm notice
17:28:01 [0m ---> Removed intermediate container 8527bd9e84d3
17:28:01  ---> e27325e6ffd8
17:29:05 Step 5/7 : COPY . .
17:29:05  ---> 5154feaf467d
17:29:06 Step 6/7 : EXPOSE 3000
17:30:15  ---> Running in 1989ab0e2852
17:30:15  ---> Removed intermediate container 1989ab0e2852
17:30:15  ---> 2e2307ad0b3e
17:30:15 Step 7/7 : CMD ["node", "app.js"]
17:31:22  ---> Running in e37853c33503
17:31:22  ---> Removed intermediate container e37853c33503
17:31:22  ---> d96c6df1f4aa
17:31:22 Successfully built d96c6df1f4aa
17:31:22 Successfully tagged cicd-app:latest
17:31:22 + docker stop cicd-container
17:31:22 Error response from daemon: No such container: cicd-container
17:31:22 + true
17:31:22 + docker rm cicd-container
17:31:22 Error response from daemon: No such container: cicd-container
17:31:22 + true
17:31:23 + docker run -d -p 3000:3000 --name cicd-container cicd-app
17:31:25 c24dc54224ec171513b4ae2a156e8894bac783f8d41be736b95b374ca616529e
Finished: SUCCESS

'''