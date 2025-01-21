---
title: "DevSecOps: Integrating Security into the Development Lifecycle"
date: "2024-09-20"
excerpt: "A comprehensive guide of what I learned from the TryHackMe DevSecOps learning Path"
tags: ["DevSecOps", "Security", "IaC", "CI/CD Security"]
---
# DevSecOps: Integrating Security into the Development Lifecycle

**Development, Security, and Operations (DevSecOps)** integrates security practices into the DevOps process, ensuring that security is a continuous, collaborative, and automated part of the software development lifecycle from the outset.

I recently completed the DevSecOps learning path on TryHackMe and wanted to share an overview of the concepts I learned. In this blog, we will briefly explore these concepts and their security implications.

---

## Software Development, SDLC, and SSDLC

Like many things in life, building software can be done the right way or the wrong way. I encourage you to do it the right way! The traditionally known **Software Development Lifecycle (SDLC)** now has a secure counterpart: the **Secure Software Development Lifecycle (SSDLC)**. SSDLC integrates security into each step of the SDLC. If you're unfamiliar with these terms, I encourage you to explore them further!

---

## Security of the Pipeline

The core DevSecOps focus here is **CI/CD**: Continuous Integration and Continuous Deployment.  

- **Continuous Integration (CI):** Frequently integrating code changes into a shared repository to identify and fix integration issues early.  
- **Continuous Deployment (CD):** Automating the deployment of code changes, ensuring software can be reliably released at any time.

The security implications in CI/CD pipelines are vast. Two key areas to focus on are **authentication** and **authorization**:

### Authentication
CI/CD tools (e.g., GitHub Actions) often require access to external services such as databases, APIs, or cloud platforms. This involves managing **secrets** securely.  
- Avoid placing secrets in source code.  
- Use a **secrets manager** and follow best practices.  
- Consider exploring **OIDC (OpenID Connect)**, which skips sharing credentials by using tokens to establish identity.

### Authorization
Think of CI/CD as **remote code execution as a service**.  
- Minimize your attack surface by adhering to the **principle of least privilege**.  
- Be cautious about who has access and what level of access they are given.

**Tinder** has a great [blog post](https://medium.com/tinder/identifying-vulnerabilities-in-github-actions-aws-oidc-configurations-8067c400d5b8) detailing a vulnerability in GitHub Actions and OIDC authentication.

---

## Security in the Pipeline

This section focused on three main areas:  
1. **Dependency Management**  
2. **Static Application Security Testing (SAST)**  
3. **Dynamic Application Security Testing (DAST)**  

**Key takeaway:** Use tools to help you code securely.  
- Reviewing dependencies for vulnerabilities and analyzing code additions manually is time-consuming.  
- Integrate SAST tools into your code editor for real-time feedback on potential vulnerabilities.

---

## Container Security

This section was particularly fascinating. In the container world, it’s easy to get caught up in tools like Docker and Kubernetes. Instead, focus on the concepts behind these tools:

- **Containerization:** Packaging an application and its dependencies into a lightweight, portable container. This ensures consistent behavior across environments. (Docker is an implementation of this concept.)  
- **Container Orchestration:** Automated management of containerized applications at scale, including deployment, scaling, networking, and lifecycle management. (Kubernetes is an implementation of this concept.)

**Key takeaway:** A benefit of containerization is **isolation**, but it can also be a vulnerability. Avoid containers with escalated privileges, and don't hardcode secrets!

---

## Infrastructure as Code (IaC)

IaC enables automated and scalable infrastructure deployment. Instead of manually configuring infrastructure via a console, you can define it in code, making it easy to version, track changes, and collaborate.

I enjoyed using **Terraform**, which has a supportive community and is cloud-agnostic.

**Key vulnerabilities:**  
- Hardcoded secrets  
- Overly permissive access controls  

Audit your IaC configurations as an exercise to improve security.

---

## Final Thoughts

The topics covered in this learning path extend far beyond DevSecOps engineers. They are relevant to security practitioners and beneficial to any engineer. Gaining a solid understanding of software development concepts and exploring the tools implementing these concepts was an enriching experience. It has enhanced my knowledge of what happens behind the scenes and enabled me to participate in more technical conversations.
