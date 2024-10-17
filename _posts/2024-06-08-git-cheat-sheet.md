---
layout: post
title:  "Essential Git Commands: A Quick Reference Guide"
date:   2024-06-06
categories: Git
---

### SETUP & INIT

| Command                                                                                                                 | Description                                                                                           |
|:------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------------------------------------------------------|
| $ **git init**                                                                                                          | Initialize an existing directory as a Git repository                                                  |
| $ **git clone [url]** \<new name>                                                                                       | Get an entire repository from a host<br/>and (optional) place on your local computer under a new name |
| **$ git clone \--recurse-submodules**                                                                                   | Get a repository with submodules                                                                      |
| **$ git clone [url]** <br/>**$ git submodule init** <br/>**$ git submodule update**<br/>(=git submodule update \--init) | Get a repository with submodules<br/> (when forgot to clone with submodules)                               |



### CHECK IT UP

| Command           | Description                 |
|:------------------|:----------------------------|
| $ **git status**  | Show the working stage      |
| **$ git branch**  | Show the list of branches   |
| **$ git config -l**   | Show your settings          |
| **$ git remote -v** | Show remote repository      |
| **$ git log** | Show the history of commits |
| **$ git log --merge** | Show logs of merge process  |
| **$ git diff** | Show difference             |


### SIMPLE PUSH

| Command                       | Description                         |
|:------------------------------|:------------------------------------|
| $ **git add .**               | Specify files to be committed       |
| **$ git commit -m "Message"** | Make a commit                       |
| **$ git pull**                | Download changes from a remote repo |
| **$ git push**                | Upload changes to a remote repo     |


### SUBMODULES

[Git Docs](https://git-scm.com/book/en/v2/Git-Tools-Submodules )

| Command                       | Description                         |
|:------------------------------|:------------------------------------|
| $ **git submodule add [url]** | Add an existing Git repository as a submodule of the repository that we’re working on       |
| |                     |
|              |  |
|                |     |




