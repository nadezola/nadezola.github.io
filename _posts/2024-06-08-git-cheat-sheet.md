---
layout: post
title:  "Git Handbook"
date:   2024-06-06
categories: Git
---

## Essential Git Commands: A Quick Reference Guide

  * [SETUP & INIT](#setup--init)
  * [CHECK IT UP](#check-it-up)
  * [SIMPLE PUSH](#simple-push)
  * [GLOBAL .gitignore](#global-gitignore)
  * [SUBMODULES](#submodules)
  * [CORRECT MISTAKES](#correct-mistakes)
  * [BRANCHES](#branches)

<hr>

### SETUP & INIT

| Command                                                                                                                                                          | Description                                                                                                                                                                                                             |
|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| $ **git init**                                                                                                                                                   | Initialize a local directory as a Git repository                                                                                                                                                                        |
| $ **git clone** [url] \<local_name>                                                                                                                              | Get an entire repository from a remote<br/>and (optional) place on your local computer under a new name                                                                                                                 |
| $ **git clone \--recurse-submodules**                                                                                                                            | Get a repository with submodules from the remote                                                                                                                                                                        |
| $ **git clone** [url] \<local_name><br/>$ **cd** \<local_name> <br/>$ **git submodule init** <br/>$ **git submodule update**<br/>                                | Get a repository with submodules from the remote <br/> (when forgot to clone with submodules)                                                                                                                           |
| _or_ <br/> $ **git clone** [url] \<local_name><br/>$ **cd** \<local_name><br/> $ **git submodule update \--init**                                                |                                                                                                                                                                                                                         |                                                                                            |
| $ **git remote add** \<new_name> [url] <br/>_Ex.: $ **git remote add upstream** [url]_                                                                           | Add new remote repository <br/> :: _Add new "upstream" repo link_                                                                                                                                                       |
| _Fork a repo:_ <br/> $ **git clone** [url] \<local_name><br/> $ **cd** \<local_name> <br/> $ **git remote add upstream** [url]<br/> $ **git pull upstream main** | <br/> :: _Create a new empty repo on a remote and clone it to local_ <br/> :: _Switch to the local working directory_<br/> :: _Add the source repo as upstream_ <br/> :: _Pull the changes from the remote source repo_ |
 


### CHECK IT UP

| Command                                                                                                                                    | Description                                                                                         |
|:-------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------------------------------------------------------|
| $ **git status**                                                                                                                           | Check the working stage                                                                             |
| $ **git branch**                                                                                                                           | Check the list of branches                                                                          |
| $ **git branch -vv** <br/> _Ex.:_ *main <..> [origin/main] <..>                                                                            | Check what main branch tracks <br/>:: _Main local branch tracks remote repo "origin" branch "main"_ |  
| $ **git config -l**                                                                                                                        | Check your settings                                                                                 |
| $ **git remote -v** <br/> _Ex.:<br/> origin [url] (fetch)<br/> origin [url] (push)<br/>upstream [url] (fetch)<br/> upstream [url] (push)_ | Check remote repositories<br/><br/> :: _Two remote repos: "origin" and "upstream"_     |
| $ **git log**                                                                                                                              | Check the history of commits                                                                        |
| $ **git log \--merge**                                                                                                                     | Check logs of merge process                                                                         |
| $ **git diff**                                                                                                                             | Check difference                                                                                    |


### SIMPLE PUSH

| Command                                                                                                                      | Description                                                                                                                                        |
|:-----------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|
| $ **git add .**                                                                                                              | Specify files to be committed                                                                                                                      |
| $ **git commit -m "**Message**"**                                                                                            | Make a commit                                                                                                                                      |
| $ **git pull**                                                                                                               | Download changes from a remote repo                                                                                                                |
| $ **git push** [remote_repo] \<branch_name>  <br/> _Ex.:<br/> $ **git push origin main** <br/> $ **git push upstream main**_ | Upload changes to a remote repo <br/><br/> :: _Push to remote repo "origin" branch "main"_ <br/> :: _Push to remote repo "upstream" branch "main"_ |
| _or_ <br/> $ **git push -u origin main** _(once)_ <br/>$ **git push**  _(all next times)_                                    | Upload changes to a remote repo "origin" branch "main" and set this reference for future                                                           |


### GLOBAL .gitignore

| Command                                                             | Description                                          |
|:--------------------------------------------------------------------|:-----------------------------------------------------|
| 1. $ **nano ~/.gitignore_global**                                   | Create global gitiglore file (in the root)        |
| 2. $ **git config \--global core.excludesfile ~/.gitignore_global** | Set to use this file as the global gitignore file | 
| 3. $ **git config \--global core.excludesfile**                     | Confirm that this file is configured to be used   |
| 4. _(Optional)_ $ **git rm \--cached -r \<what-to-ignore>**         | Remove all before tracked from cach               |


### SUBMODULES

[Git Docs](https://git-scm.com/book/en/v2/Git-Tools-Submodules )

| Command                                                  | Description                                                     |
|:---------------------------------------------------------|:----------------------------------------------------------------|
| $ **git submodule add** [url]                           | Add a new repo as our submodule                                 |
| $ **git submodule update \--remote** \<submodule_name> | Update the submodule to the latest changes from the remote|


### CORRECT MISTAKES

| Command                                        | Description                                         |
|:-----------------------------------------------|:----------------------------------------------------|
| $ **git add rm -r** \<file>                    | Remove "file" from "add"                            |
| $ **git commit \--amend -m "**New comment**"** | Change the last committed comment (typo correction) |


### BRANCHES

| Command                                                                                         | Description                                                                                             |
|:------------------------------------------------------------------------------------------------|:--------------------------------------------------------------------------------------------------------|
| $ **git checkout -b** \<branch_name>                                                            | Create and switch to a new branch                                                                       |
| $ **git push origin** \<branch_name>                                                            | Upload changes from the local branch to the remote branch on the "origin" repo                          |
| $ **git push -u origin** \<branch_name><br/>_Next times:_ $ **git push**                        | Upload changes from the local branch to a remote repo “origin/branch” and set this reference for future |
| $ **git checkout** \<branch_name> <br/> $ **git merge** \<main_branch_name>                     | Take changes from a main branch                                                                         |
| $ **git checkout** \<main_branch_name> <br/> $ **git branch -d** \<branch_name>                 | Delete  branch                                                                                          |
| $ **git stash** <br/> $ **git checkout** \<branch_name>                                         | Save uncommitted changes without committing them and <br/> switch to another branch                     |
| $ **git stash show**                                                                            | Show a summary of what changes are in a stash                                                           |
| $ **git checkout** \<branch_name> <br/> $ **git stash pop**                                     | Return to the branch and <br/> restore saved uncommitted changes                                        |
| $ **git restore** \<file_name>                                                                  | Return the file to its original (last committed) version                                                |
| $ **git restore \--staged** \<file_name>                                                        | Return the file to its original version if the file has already been added to the stage using _git add_ |
| $ **git checkout** \<main_branch_name> <br/> $ **git pull** <br/>$ **git merge** \<branch_name> | Merge branch to the main branch                                                                         |