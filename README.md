# EverythingsJake Platform

Production-style, self-hosted web platform demonstrating modern DevOps workflows, automated deployments, and operational monitoring.

---

## Overview

This project powers **https://everythingsjake.net**, a production-style web platform deployed on self-managed infrastructure.

The primary goal of this project is to demonstrate **real-world DevOps patterns**, not just to serve a website. It focuses on infrastructure design, automation, security, and observability using tooling and workflows commonly found in professional environments.

---

## Architecture

High-level deployment flow:

```
git push
   ↓
GitHub Actions
   - Build Docker image
   - Publish image to GitHub Container Registry (GHCR)
   ↓
Home Server
   - Watchtower detects new image
   - Pulls and restarts container automatically
   ↓
Traefik
   - Routes traffic
   - Terminates HTTPS (Let’s Encrypt)
   ↓
Next.js Application
```

### Design considerations

- **Pull-based deployments**  
  Container updates are initiated by the server pulling images from a private registry, avoiding inbound SSH access and mirroring modern CD patterns.

- **Reverse proxy & TLS separation**  
  Traefik handles routing and certificate management, keeping application containers simple and focused.

- **Immutable artifacts**  
  Docker images are versioned and published via CI, ensuring deployments are reproducible and traceable.

---

## Technology Stack

### Application
- Next.js (App Router, TypeScript)
- Node.js 20

### Infrastructure
- Docker (multi-stage builds)
- Docker Compose
- Traefik v3 (reverse proxy, HTTPS)
- Let’s Encrypt (automatic TLS)
- Watchtower (automated container updates)

### CI/CD
- GitHub Actions
  - Builds Docker images on every push to `main`
  - Publishes images to GitHub Container Registry (GHCR)
- GitHub Container Registry (private images)

### Monitoring & Health
- Docker healthchecks (container-level health)
- Uptime Kuma (internal availability monitoring)
- External uptime monitoring service (public reachability)

---

## Deployment Model

### Continuous Integration (CI)
- Triggered on pushes to `main`
- Docker image built from `app/Dockerfile`
- Images tagged with:
  - `:main`
  - Commit SHA
- Images published to GHCR

### Continuous Deployment (CD)
- Home server runs Watchtower
- Watchtower polls GHCR for updated images
- On update:
  - pulls new image
  - restarts the affected container
- No manual deployment steps or inbound SSH required

---

## Health & Monitoring

### Internal health
- Application exposes a `/healthz` endpoint
- Docker healthchecks validate application responsiveness

### Monitoring
- **Uptime Kuma**
  - monitors internal routing through Traefik
  - validates service availability from the LAN
- **External monitoring** (UptimeRobot)
  - validates real-world public access
  - avoids false positives caused by NAT loopback limitations
  - provides direct SMS notification of any outage

---

## Why Self-Hosted?

This project is intentionally self-hosted to explore real infrastructure constraints such as networking, DNS, TLS, and deployment automation.

While the runtime environment is self-managed hardware, the **architecture and workflows mirror cloud-based systems**. The same CI/CD, containerization, routing, and monitoring patterns demonstrated here apply directly to managed platforms such as AWS, Azure, or GCP.

---

## Skills Demonstrated

- CI/CD pipeline design and automation
- Docker image design and multi-stage builds
- Private container registry authentication and access control
- Reverse proxy configuration and TLS termination
- Pull-based deployment strategies
- Service health checks and monitoring
- Debugging distributed systems across OS, network, and container boundaries

---

## Future Improvements

- Blue/green or canary-style deployments
- Metrics collection (Prometheus/Grafana)
- Centralized logging
- Infrastructure-as-Code for cloud parity

---

## Author

**Jake**  
Software Engineer | DevOps-focused  
https://everythingsjake.net
