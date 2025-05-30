---
title: "Chapter 9 - Deployment"
date: 2025-03-06T15:10:22-05:00
draft: true
aliases:
- /posts/software-engineering-handbook/chapter-9
- /posts/software-deployment
summary: "This post, 'Chapter 9 - Deployment' of 'The Software Engineering Handbook,' provides a guide to deploying full-stack applications, focusing on migrating from Heroku to DigitalOcean as a case study. It covers configuring application servers (like using gunicorn for Flask), containerizing applications with Docker (including examples for Flask and ASP.NET), and managing production environments using tools like Ansible for single VPS deployments or Kubernetes for distributed systems. The post emphasizes the benefits of containers for environment consistency and simplified deployment."
---

It was Summer 2018. I just learned how to use Flask, HTML, CSS, and JavaScript. I wanted to deploy my website. I didn't own a domain at the time, so I found Heroku's free tier. It would be one more year till I got my visa debit card. All was well, and a few years later, I even bought a domain, [elijahlopez.ca](https://elijahlopez.ca). However, to use this domain with https enabled, I also needed to purchase an SSL certificate ($35) (Heroku doesn't you use Let's Encrypt easily). Then in 2022, Heroku (owned by SalesForce), announced the removal of free plans. What did that mean for me? It meant that I would be paying $1/month more just for hosting. I didn't have free time on my hands then, but I knew I would ideally deploy my website on a VPS like DigitalOcean.

Well, a few weeks ago almost three years later, the day came. After years of accumulating knowledge, here are the steps I took to migrate from Heroku to DigitalOcean, and how you can deploy your full-stack application.

## Configuration

The first step is ensuring you have your application server configured properly. This isn't really applicable to any binary based applications, but it is definitely applicable to micro-frameworks like Flask where you need to use gunicorn in production. Here is my `gunicorn.conf.py` which allows us to avoid using command line arguments in the next step (gunicorn will by default automatically read gunicorn.conf.py).

<details><summary>gunicorn.conf.py</summary>

```py
import multiprocessing
bind = '0.0.0.0:8000'
workers = multiprocessing.cpu_count() * 2 + 1
preload_app = True
pidfile = 'gunicorn.pid'
wsgi_app = 'app:app'  # This tells gunicorn to import app from app.py, it may be different for you
capture_output = True
errorlog = 'gunicorn.error.log'
log_level = 'debug'
```

</details>

## Containers

Why containers? Docker can be to create an OS environment, and then reuse it multiple times. Instead of having to keep a working memory or manually manage system dependencies for each application, it's all done in a Dockerfile so that these docker images can be spawned in docker containers wth one command and just work. I have a [quick docker tutorial](/posts/docker-guide/) on an brief intro and some common references, like starting a shell in a docker container or starting an image with a shell.

### Dockerize your application

The first step is to Dockerize your application. I'll provide two examples for Flask and ASP.NET. Note that I do not yet have a full-stack application that serves React, so you will need to double check the frontend-related Docker steps.

```txt
- backend/
  - requirements.txt
- frontend/
  - package.json
- Dockerfile
- .dockerignore
```

<details><summary>Flask + Jinja2 + React Dockerfile</summary>

```Dockerfile
# Build stage for React app
FROM node:20-slim AS react-builder
WORKDIR /frontend
COPY frontend/package*.json ./
RUN pnpm install
COPY frontend/ .
RUN pnpm run build

# Final stage with AlmaLinux minimal
FROM almalinux:9-minimal

# Useful for common environment variables
ARG SPOTIFY_CLIENT_ID
ARG SPOTIFY_SECRET
ARG COMMIT_SHA
ARG STRIPE_API_KEY
ARG SECRET_KEY
# Set environment variables
ENV SPOTIFY_CLIENT_ID=${SPOTIFY_CLIENT_ID}
ENV SPOTIFY_SECRET=${SPOTIFY_SECRET}
ENV COMMIT_SHA=${COMMIT_SHA}
ENV STRIPE_API_KEY=${STRIPE_API_KEY}
ENV SECRET_KEY=${SECRET_KEY}
# Install Python and required system dependencies
RUN microdnf install -y python3 python3-pip

# Set working directory
WORKDIR /app

# Copy requirements first to leverage Docker cache
COPY requirements.txt .

# Install Python dependencies
RUN python -m pip install --no-cache-dir -r requirements.txt

# Copy built React files from builder stage
COPY --from=frontend /frontend/dist ./frontend/dist

# Copy application code (node_modules excluded via .dockerignore)
COPY backend .

EXPOSE 8000

# test if app was configured properly
RUN SERVER_ID=1 python -c "import app"

HEALTHCHECK --interval=5m --timeout=3s CMD curl -f http://localhost:8000/ || exit 1

CMD ["gunicorn", "app:app"]
```

</details>

## Managing the Production Environment

There's two main ways to manage a production environment. One is where you scale vertically and deploy everything on a single VPS. This is very ideal for saving on costs. For example, I deploy my website and my nextcloud instance on a single server. Cons: if the server goes down both applications go down. HOWEVER, a VPS will likely provide backups and by using something like Ansible, redeployment is quick. Even in a micro-service architecture, if one thing goes down, the entire app will stop working. The only thing that really should always be separated is a status page, but I would argue it should be hosted on two different VPSes!

### Ansible

Ansible is useful to avoid writing custom deployment scripts for your applications like I have done. All you need is to setup SSH and you're good to go.

### Kubernetes

For serious full stack applications where you want to take advantage of a distributed system architecture (multiple servers for the same application), Kubernetes is a fine example.
