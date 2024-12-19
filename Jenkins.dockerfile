# Uses the official Jenkins image as the base
FROM jenkins/jenkins:latest

# Switches to root user to install dependencies
USER root

# Layer 1: Updates the system and basic tools
RUN apt-get update && \
    apt-get install -y ca-certificates curl wget gnupg2 lsb-release && \
    apt-get clean

# Layer 2: Adds Docker's GPG key
RUN install -m 0755 -d /etc/apt/keyrings && \
    curl -fsSL https://download.docker.com/linux/debian/gpg -o /etc/apt/keyrings/docker.asc && \
    chmod a+r /etc/apt/keyrings/docker.asc

# Layer 3: Adds Docker repository using VERSION_CODENAME
RUN echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/debian \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" > /etc/apt/sources.list.d/docker.list && \
    apt-get update

# Layer 4: Installs Docker
RUN apt-get install -y docker-ce-cli && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Layer 6: Sets permissions and cleans up
RUN apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Switches back to jenkins user for Jenkins execution
USER jenkins