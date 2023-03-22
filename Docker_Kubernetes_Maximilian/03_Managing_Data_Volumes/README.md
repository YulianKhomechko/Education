## Data

- Application
    - Written & provided by you (= the developer)
    - Added to image and container in build phase
    - "Fixed": Can't be changed once image is built (Images are read only)
- Temporary App Data (e.g. entered user input)
    - Fetched / Produced in running container
    - Stored in memory or temporary files
    - Dynamic and changing but cleared regularly
    - Read + write, temporary, hence stored in Containers
- Permanent App Data (e.g. user accounts)
    - Fetched / Produced in running container
    - Stored in files or a database
    - Must not be lost if container stops / restarts
    - Read + write, permanent, stored with Containers & Volumes

## Volumes

Volumes help us to persist data.
Volumes are folders on your host machine hard drive which are mounted ("made available", mapped) into containers.

Volumes persist if a container shuts down. If a container (re-) starts and mounts a volume, any data inside that volume,
is available in the container.
A container can write data into a volume and read data from it.

## Two External Data Storages

- Volumes (Managed by Docker)
    - Anonymous volumes
    - Named Volumes
    - In both cases Docker sets up a folder / path on your host machine, exact location is unknown to you. Managed via
      docker volume commands.
    - A defined path in the container is mapped to the created volume / mount. e.g. /some-path on your hosting machine
      is mapped to /app/data
    - Great for data which should be persistent but which you don't need to edit directly.
- Bind Mounts (Managed by you)
    - You define a folder / path on your host machine.
    - Great for persistent, editable (by you) data (e.g. source code)

`docker run -v /app/data` - anonymous volume. Attached to container. Will be removed if container is removed. Can't be
used to share data between containers
`docker run -v data:/app/data` - named volume (name is before ':'')
`docker run -v /absolute/path/to/code:/app/code` - bind mount

## ARGuments & ENVironment Variables

Docker supports build-time ARGuments and runtime ENVironment variables

- ARG
    - Available inside of Dockerfile, NOT accessible in CMD or any application code
    - Set on image build (docker build) via `--build-arg`
- ENV
    - Available inside of Dockerfile & in application code
    - Set via **ENV** in Dockerfile or via `--env` on `docker run`

## Summary

Containers can read and write data. **Volumes** can help with data storage, **Bind Mounts** can help with direct
container interaction.
Containers can read and write data, bt written data is lost if the container is removed.
**Volumes** are folders on the host machine, managed by Docker, which are mounter into the Containers.
Volumes persist if a container shuts down. If a container (re-)starts and mounts a volume, any data inside of that
volume is available in the container.
A container can write data into a volume and read data from it.
**Named Volumes** survive container removal and can therefore be used to store persistent data.
Anonymous Volumes are attached to a container - they can be used to save (temporary) data inside the container.
**Bind Mounts** are folders on the host machine which are specified by the user and mounted into containers - like Named
Volumes.

**Build ARGuments** and **Runtime ENVironment** variables can be used to make images and containers more dynamic / configurable.

