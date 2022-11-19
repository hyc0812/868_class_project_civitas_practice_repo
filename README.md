




---
# Dev memo

## Multiple developers work simultaneously using their own branch on git



#### 1. Create a new branch:

```javascript
git checkout -b yong-active-members-dev
```

Switched to a new branch 'yong-active-members-dev'
yongchanghe@MacBookPro 868_class_project_civitas_practice_repo % git push origin yong-active-members-dev 
Total 0 (delta 0), reused 0 (delta 0), pack-reused 0
remote: 
remote: Create a pull request for 'yong-active-members-dev' on GitHub by visiting:
remote:      https://github.com/hyc0812/868_class_project_civitas_practice_repo/pull/new/yong-active-members-dev
remote: 
To https://github.com/hyc0812/868_class_project_civitas_practice_repo.git

 * [new branch]      yong-active-members-dev -> yong-active-members-dev



#### 2. Check Which branch is currently used:

```js
git branch -a
```


  master

* yong-active-members-dev
  remotes/origin/HEAD -> origin/master
  remotes/origin/master
  remotes/origin/yong-active-members-dev

  

#### 3. Develop the new branch and commit the changes



#### 4. When complete, go back to master branch

```js 
git checkout master 
```

Switched to branch 'master'
Your branch is up to date with 'origin/master'.
yongchanghe@MacBookPro 868_class_project_civitas_practice_repo % git pull origin master 
From https://github.com/hyc0812/868_class_project_civitas_practice_repo

 * branch            master     -> FETCH_HEAD
   Already up to date.

  

#### 5. Merge your branch to master

```js
git merge yong-active-members-dev
```

Updating 98f2681..4fdc41c
Fast-forward
 src/app/demo/dashboard/active-members/active-members.component.html | 1 +
 1 file changed, 1 insertion(+)



#### 6. Push to master branch

```js
git push origin master 
```

Total 0 (delta 0), reused 0 (delta 0), pack-reused 0
To https://github.com/hyc0812/868_class_project_civitas_practice_repo.git
98f2681..4fdc41c  master -> master
yongchanghe@MacBookPro 868_class_project_civitas_practice_repo % 
