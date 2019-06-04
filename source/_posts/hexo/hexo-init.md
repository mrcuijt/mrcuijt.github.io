---
title: Hexo + GitHub 搭建个人博客
date: 2019-05-30 13:06:46
tags: Hexo
---

#### 第一步:环境配置

本地需要安装 <a href="http://nodejs.cn/download/" target="_blank">NodeJS</a> 和 <a href="https://git-scm.com/downloads" target="_blank">Git</a> 。

检查是否安装成功

```python
## Git
git --version

## NPM
npm -v

## NodeJS
node -v
```

##### 安装 Hexo 框架

```python
## 安装 CNPM 设置淘宝镜像
npm install -g cnpm --registry=https://registry.npm.taobao.org

## 安装 Hexo
cnpm install -g hexo-cli

## 验证是否安装成功
hexo -v
```

#### 第二步:本地创建项目

自建一个文件夹 然后进入文件下 比如 D:/hexo ,把 Hexo 安装进该文件夹里

```python
## 进入 hexo 目录
cd D:\hexo

## 初始化 hexo
hexo init

## hexo 项目目录结构
## D:/hexo
## │   .gitignore
## │   package-lock.json
## │   package.json
## │   _config.yml
## │   
## ├───node_modules
## │               
## ├───scaffolds
## │       
## ├───source
## │           
## └───themes

## 本地运行 hexo 访问 http://localhost:4000
hexo s

## INFO  Start processing
## INFO  Hexo is running at http://localhost:4000 . Press Ctrl+C to stop.
```

##### 新建文章

另打开一个 cmd 到 D:\hexo 目录下

```python
## 创建一个新的文件，名为 demo
## 访问 http://localhost:4000 可以看到新添加 demo 文章
hexo n demo

## 主动生成
hexo g

## 清理已生成资源
hexo clean
```

#### 第三步:部署到 GitHub

一、安装 hexo-deployer-git 模块

```python
## 打开 cmd 到 D:\hexo 目录下
cd D:\hexo

## 安装 hexo-deployer-git
npm install hexo-deployer-git
```

二、GitHub 仓库配置

 - new repository 新建仓库

 - 用户名.github.io 必须是这个格式，就会自动创建站点，完成即可

三、修改 hexo 配置文件

```python
## _config.yml

## 定位到 Deployment
# Deployment
## Docs: https://hexo.io/docs/deployment.html
deploy:
  type:
  
## 需改为如下配置
# Deployment
## Docs: https://hexo.io/docs/deployment.html
deploy:
  type: git
  repo: https://github.com/mrcuijt/mrcuijt.github.io.git
  branch: master
```

 - `repo` 修改为自己的 GitHub 仓库地址

四、发布到 GitHub

```python
## 发布到 GitHub
hexo d

## 如果是首次安装 Git 会提示输入 GitHub 的用户名和密码进行登录

## 访问 https://mrcuijt.github.io 
```