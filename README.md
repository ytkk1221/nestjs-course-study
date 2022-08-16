<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

###  NestJS官方基础课程学习记录
跟着敲、每节课做一次提交
> 前7节概括为安装环境、创建项目，步骤如下


1. 安装node环境
2. 全局安装nest-cli
3. 使用nest-cli命令创建项目

```bash
nest new
```
4. 运行
```bash
npm run start:dev
```

> 7节至19节为NestJS基础课程（不涉及数据库等）

该部分代码移动至分支（基础课程7-19）

> 20节至22节介绍Docker PostgreSQL

因本人不了解Docker、PostgreSQL,该部分改用 MySQL(后续章节确保本地安装MySQL)

> 24节安装数据库，使用命令安装对应数据库所需的依赖以及typeorm

原视频使用PostgreSQL
```bash
npm install --save @nestjs/typeorm typeorm pg
```

本人使用MySQL 因而根据 [文档] (https://docs.nestjs.cn/9/techniques?id=%e6%95%b0%e6%8d%ae%e5%ba%93) 安装mysql2
```bash
npm install --save @nestjs/typeorm typeorm mysql2
```

> 32节数据迁移，因根据视频操作出现报错等原因，暂时跳过，数据迁移部分暂时也用不到后续在进行学习。
> 
#### bug记录
- 25节疑似typeorm0.3以上版本findOne用法发生变化可改用findOneBy，但是在27节需要使用relations又改回了findOne并查阅findOne新用法

