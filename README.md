### Node 서버 실행 
- server.js 파일 구동
``` bash
$ node server.js
```
- 실행 `localhost:8080`
---
### Dockerfile 이용
- image build
``` bash
$ docker build -t app .
```
- 이미지 확인
``` bash
$ docker images # app 있는지 확인
```
- run
``` bash
$ sudo docker run -p 8000:8080 -d app
```
- 실행 `localhost:8000`