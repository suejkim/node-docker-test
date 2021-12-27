- Docker로 NGINX, node app user/manager 띄우기
- HTTPS 인증서 certbot 이용하여 발급받음 
---
- Dockerfile을 통해 image 생성

```bash
$ docker build -t my-node-user:0.0.1 ./my-node-user/. # 마지막은 Dockerfile 경로
```

- 생성된 image로 container 구동

```bash
$ docker-compose up -d
```

- 또는 (docker-compose 대신 run 명령어를 이용)

```bash
$ docker run -itd -p 8001:8000 my-node-user:0.0.1
```