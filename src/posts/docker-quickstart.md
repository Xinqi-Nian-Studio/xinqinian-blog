---
title: Docker 容器速查手册
date: 2026-02-11
author: 新启年工作室
category: 开发工具
tags:
  - Docker
  - 容器
  - DevOps
---

## 容器生命周期

```bash
# 运行容器
docker run -d -p 8080:80 nginx

# 查看容器
docker ps -a

# 进入容器
docker exec -it 容器ID bash

# 停止/启动
docker stop 容器ID
docker start 容器ID

# 删除容器
docker rm 容器ID