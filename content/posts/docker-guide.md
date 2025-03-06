---
title: "Docker Guide"
date: 2024-04-15T13:27:34-04:00
draft: false
tags:
  - computer-science
  - docker
  - programming
  - devops
  - tutorial
---

{{< toc >}}

This is an excerpt of my [Software Delivery course notes](https://blog.elijahlopez.ca/posts/university/cs-489-software-delivery/)

Before learning Docker, it is best to figure out why we want to use Docker. We don't want to force it down our throat unless it enables us to do more.

Put simply, Docker enables precise reproducibility. Projects can be compiled or run with one or two commands.

- Without Docker, a guide would need to be followed manually to setup a dev environment
- With docker, developers can build/download an environment with the compiled project with one command and run the project with another command

<details><summary>My use case</summary>

In my case, I have a music player, Music Caster which I want to port on Linux. Since it's made with Python plus a tkinter custom add-on, there are several issues with setting up the development environment on Linux. One would need to install a non-system version of Python which is difficult on Debian based systems and then they would need to run a script to install one dependency on the system level but the rest virtually. Most importantly, I want to guarantee that when we compile the application for Linux that an important system dependency won't be missing.

We can use Docker to ensure that builds will always work with one command on new machines and don't have to worry about getting it to work on all the different distros just to produce an executable anyways. The `Image` in this case is an environment to run the deployment procedure rather than running the application itself.

</details>

Therefore, deployment simplifies to focusing on replacing the image which is running (as a container) rather than figuring out how to keep the  dependencies up to date as the project progresses (most applicable to languages that require a runtime such as .NET, Java, Python, NodeJS)

- [Overview](https://docs.docker.com/get-started/overview/)
  - Client (docker cli or desktop), Daemon (always running background service), and Registry (image storage)
  - A container is an instance of an image
- Orchestration tool for containers with several features
  - Portability
  - App-centric
  - Builds from "source"
  - Versioning
  - Component reuse
  - Public registry
  - Tool ecosystem

<details><summary>Jekyll Dockerfile</summary>

```Dockerfile
FROM jekyll/jekyll:3.8.6
# the base image sets the working directory to /srv/jekyll
# the base image already uses EXPOSE 4000
COPY . .
RUN bundle install
CMD bundle exec jekyll serve
```

</details>

## Quick Reference

### Dockerfile

Dockerfile: a instruction sheet that docker will parse to build an `Image`; an isolated environment

- Typically, each line is a new layer that can be cached
  - When a line is changed or a reference to the host on a line is modified, that layer and the layers below it are rebuilt
- `ENV VAR=value`: a way to define environment variables (usage: `$VAR`)
  - We want to define environment variables just before where they are used to minimize rebuilds (an exception can be made if it's permanent)
- `FROM`: an image to build off of. If we want to run an application, we would need an operating system. I recommend `alpine` or `fedora`
- `COPY`: copy files from host into the image
  - This is a layer where changing files on the host can trigger a rebuild of the layer and subsequent layers
  - We want to COPY the absolute minimum into the image such as just the dependency list and lock file (package.json, yarn.lock, requirements.txt, custom whl files, Pipfile, Pipfile.lock)
  - Use `.dockerignore` (similar syntax as `.gitignore`) to ignore files such as the `.git/` dir
- `RUN`: execute shell (root by default) during build process
- `CMD`: command to execute when an image is started in a container
  - use `&&` to run multiple commands
- Use `\` for multiline commands (`RUN` and `CMD`)

### Building an Image

- `docker build .`
- Docker enables caching. Therefore, we want to include any system dependency `update` and an `install` in the same `RUN` (e.g. apt)
- [dnf example in Music Caster](https://github.com/elibroftw/music-caster/blob/master/Dockerfile#L7)

### Running an Image in a Container

[docker container run | Docker Docs](https://docs.docker.com/reference/cli/docker/container/run/)

- `docker run --rm -p 4000:4000 tagOrId`
  - '--rm': removes the container after it has stopped
    - A container stops once the CMD has finished running or if we decide to stop it manually and of course if an unexpected error occurs
  - `p`: open the localhost container port
  - `-d`: run the container as a daemon (keep using the shell)
- Use `docker tag source copy` to clone the image (e.g. prepping for new push to a remote registry)
- Use `docker push tag` to push to a registry
  - Registry tags are usually of the form `{username}/{name}:{version}`
- Use --volume src:dest to copy a directory on the host machine to a directory on the container. This way we can persist data without deleting the volume
- We can also limit the system resources available to the container ([read more](https://docs.docker.com/config/containers/resource_constraints/#limit-a-containers-access-to-memory))
- If the container is running, you can use `docker exec -it containerId sh` to access the shell `sh` is symlinked to inside a **running** container (not necessarily bash, so be careful)
- If the container immediately exits, we need to set an entrypoint
  - `docker run --rm -it --entrypoint bash image`
    - `i`: interactive
    - `t`: Allocate a pseudo-TTY
