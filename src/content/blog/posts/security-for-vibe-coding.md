---
title: "Security Rules for AI-Assisted Development: Do They Actually Work?"
date: "2025-04-02"
excerpt: "If you’ve been following the AI wave you likely have heard of “vibe coding” — building applications completely from AI generated code, often without even reading a single line of code generated. Well it turns out doing so introduces a ton of security vulnerabilities."
tags: ["Vibe Coding", "AI Security", "Shift-Left"]
---

# Can Simple Security Rules Save Your AI-Generated Code? I Tested It So You Don't Have To

![Security Rules in AI Coding](/public/images/synk-projects-scans.png "AI Security Experiment")

If you've been following the AI wave you likely have heard of "vibe coding" — building applications completely from AI generated code, often without even reading a single line of code generated. Well it turns out doing so introduces a ton of security vulnerabilities.

My LinkedIn feed has had a bunch of people recounting their "vibe coding horror stories", leaked credentials, exposed user data, pretty much anything you can think of.

I've been doing quite a lot of AI fueled development myself and I've encountered the feature of providing your AI coding assistant "rules" to abide by while writing code. My first thought was: "why don't people just always include a solid list of security focused rules to help prevent these horror stories"

Seems too good to be true so I decided to experiment with this idea to identify if having security rules in place led to more secure code and how much of an impact it had. In this blog I will explain how I tested this, the results, my analysis and finish off with some takeaways.

## The Experiment

Use an AI assisted coding tool to build a web app, twice. The first time with no security rules and the second with a comprehensive set of generalized security focused rules. I would then run a SAST tool on the source code of these application and compare the results of the findings.

### Experiment Parameters

- **AI coding tool used**: Aider with CONVENTIONS.md as the "rules"

- **App being built**: A document management system with user authentication, file uploads, sharing capabilities, and basic document editing. This is ideal for my use case because:
  - It has multiple common attack vectors (authentication, file uploads, access control)
  - It involves various security-sensitive operations like user management, file handling, and permission control

- **SAST tool used**: Snyk

- **Security rules used for second pass**: found in appendix

## The Results

- No security rules: 2 Critical, 8 High, 4 Medium, 82 Low
- Security rules: 2 Critical, 9 High, 4 Medium, 52 Low

![Comparison of Security Findings](/public/images/path-traversal.png "SAST Results Comparison")

## Analysis

Three major things stand out to me when looking at the difference between the two:

1. The application built with security rules had an additional "High" vulnerability finding.
2. The application built with security rules had 27 less "Low" findings.

Let's explore these:

### The application built with security rules had an additional "High" vulnerability

The high vulnerability that Snyk found was a path traversal vulnerability. I checked my rules and I do have a rule to prevent path traversals:

> rule: "Never allow direct path traversal for file access"

### The application built with security rules had 27 less "Low" findings

All of these low findings are "Use of Hardcoded Credentials". While the application with security rules did not eliminate all instances of hardcoded credentials it did seem to perform substantially better.

### The critical and high findings

Almost all of the critical and high findings were vulnerabilities introduced through third party dependencies.

## Thoughts on Why this Happened

To best answer this questions let's briefly discuss the threat model for AI coding assistants (full blog on this coming soon)

- **Models learn from the aggregate of their training data, including all its flaws**: The internet and public repositories contain far more insecure code than secure code. Think about the last documentation you followed, where security best practices followed or did they show you code to get you up and running fastest?

- **AI Coding favors functionality over security**: AI models predict "what code typically follows" rather than what code should follow for security". This is pattern matching versus true understanding and correlates to our last point.

- **Models have a knowledge cutoff date which takes a toll on dependency management**: Even if the model you are using knows to not use vulnerable libraries, it may not even be aware of the vulnerability it's introducing in your application.

With this perspective it shows that the way models are trained and operate provide some fundamental weaknesses when it comes to writing secure code.

## Takeaways and Recommendations

- **DO** use security rules - the more targeted for your use case they are the better
- **DO** run security scanners on your AI generated code frequently to catch vulnerabilities before they start stacking up (Consider implementing the Semgrep MCP server to do this automatically)
- **DO** prompt in a way that reinforces security checks, tests, reviews and best practices while developing
- **DO** define what major dependencies and their versions you want to use and feed in documentation that your model may not have. ex. please use next.js@15.2.3
- **DO** spend time defining requirements with security in mind before code generation
- **DON'T** assume that a few rules will ensure your code is vulnerability free
- **DON'T** expect your model to understand your application's threat model
- **DON'T** blindly vibe code without expecting a horror story

Thanks for reading.





## Appendix: CONVENTIONS.md

I'm building a document management system called DocSecure with:
- Next.js frontend (App Router) with React and TypeScript 
- Python FastAPI backend
- PostgreSQL database

Please help me implement a working system that allows:
1. User registration and login
2. Document upload, storage, and retrieval
3. Document sharing with permission controls
4. Basic document preview
5. Audit logging of user actions

Focus on getting a working implementation first. Let's follow test-driven development practices by writing tests before implementation.

### Authentication & Authorization
authentication_rules:
  - rule: "Always verify JWT tokens on protected routes"
  - rule: "Use secure HttpOnly cookies for token storage"
  - rule: "Implement proper token expiration and refresh mechanism"
  - rule: "Never store sensitive credentials in client-side code or localStorage"
  - rule: "Use bcrypt or Argon2 for password hashing with appropriate work factors"
  - rule: "Implement rate limiting on authentication endpoints"
  - rule: "Add CSRF protection for authentication flows"
  - rule: "Validate user permissions before any data access or modification"
  - rule: "Log all authentication failures and suspicious activities"

### Input Validation
input_validation_rules:
  - rule: "Validate all user inputs server-side regardless of client validation"
  - rule: "Use parameterized queries for all database operations"
  - rule: "Implement strict type checking for all API inputs"
  - rule: "Sanitize HTML/markdown content before storage and rendering"
  - rule: "Validate file types using content inspection, not just extensions"
  - rule: "Implement maximum size limits for all uploads"
  - rule: "Use allowlists for accepted file types rather than denylists"
  - rule: "Validate and sanitize URL parameters and query strings"

### Output Encoding
output_encoding_rules:
  - rule: "Use context-appropriate encoding for all dynamic data in responses"
  - rule: "Implement Content Security Policy headers"
  - rule: "Set X-Content-Type-Options: nosniff header"
  - rule: "Avoid directly inserting user data into HTML templates"
  - rule: "Use templating engines that automatically escape output"

### File Operations
file_operation_rules:
  - rule: "Store uploaded files outside of web root"
  - rule: "Generate random filenames for stored files, never use user-provided names directly"
  - rule: "Validate file content matches declared content type"
  - rule: "Scan uploaded files for malware or malicious content"
  - rule: "Implement proper file permissions on the server"
  - rule: "Use stream processing for large file operations to prevent DoS"
  - rule: "Never allow direct path traversal for file access"

### Database Security
database_rules:
  - rule: "Use ORM with parameterized queries by default"
  - rule: "Implement least privilege database users"
  - rule: "Never concatenate strings to build SQL queries"
  - rule: "Use database connection pooling with limits to prevent DoS"
  - rule: "Encrypt sensitive data at rest in the database"
  - rule: "Implement proper database backup and recovery procedures"
  - rule: "Use database migrations for schema changes"

### API Security
api_security_rules:
  - rule: "Implement proper HTTP response codes"
  - rule: "Add rate limiting on all API endpoints"
  - rule: "Use HTTPS for all communications"
  - rule: "Set appropriate CORS headers"
  - rule: "Validate all API request parameters and payloads"
  - rule: "Implement API versioning"
  - rule: "Use proper error handling that doesn't leak sensitive information"
  - rule: "Add security headers to all responses"

### Session Management
session_management_rules:
  - rule: "Generate cryptographically secure session IDs"
  - rule: "Implement session timeout and renewal"
  - rule: "Validate session origin and integrity"
  - rule: "Store session data securely server-side"
  - rule: "Properly invalidate sessions on logout"
  - rule: "Implement session rotation after privilege changes"

### Logging and Monitoring
logging_rules:
  - rule: "Log all security-relevant events"
  - rule: "Sanitize logs to prevent log injection"
  - rule: "Implement centralized log collection"
  - rule: "Never log sensitive data like passwords or full tokens"
  - rule: "Include detailed context in security logs"
  - rule: "Implement log rotation and retention policies"

### Error Handling
error_handling_rules:
  - rule: "Use generic error messages for users"
  - rule: "Log detailed errors for debugging"
  - rule: "Catch and handle all exceptions properly"
  - rule: "Never expose stack traces to end users"
  - rule: "Implement fallback mechanisms for critical functions"

### Dependency Management
dependency_rules:
  - rule: "Regularly update all dependencies"
  - rule: "Use lock files to pin dependency versions"
  - rule: "Scan dependencies for known vulnerabilities"
  - rule: "Minimize dependency usage where possible"
  - rule: "Prefer established libraries for security-critical functions"
  - rule: "Use the most recent version of dependencies"

### Infrastructure Security
infrastructure_rules:
  - rule: "Use environment variables for configuration"
  - rule: "Never hardcode secrets in source code"
  - rule: "Implement proper container security"
  - rule: "Use least privilege principles for service accounts"
  - rule: "Separate development and production environments"
  - rule: "Implement proper network security controls"

### Frontend Security
frontend_rules:
  - rule: "Implement proper state management"
  - rule: "Sanitize all rendered data"
  - rule: "Use secure form handling"
  - rule: "Implement proper client-side validation"
  - rule: "Use subresource integrity for third-party scripts"
  - rule: "Avoid client-side storage of sensitive data"
  - rule: "Follow React/Next.js security best practices"