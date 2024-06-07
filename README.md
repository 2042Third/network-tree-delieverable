### How to Run
1. Clone the repository
2. Run `npm install`
3. Run `docker build -t <image-name> .`
4. Run `docker run -p 3000:3000 <image-name>`, which starts the docker.
5. Run `docker logs -f <container-id>` to get the stdout of the docker.
