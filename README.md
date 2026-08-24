# Semaphore Node App 2

Small dependency-free Node.js service for the Semaphore UI CI/CD demo.

- Port: `3002`
- Health endpoint: `/health`
- CI check: `npm test`
- CD target: `168.144.87.145`

Each push to `main` is delivered to the matching Semaphore template, which
tests the JavaScript syntax, deploys the service, restarts it, and checks the
health endpoint.

Push-trigger verification is enabled for this repository.
