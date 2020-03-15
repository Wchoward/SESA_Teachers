# SESA_Teachers
### 1 导入项目

微信开发工具-加号-“导入项目”-输入项目名称和你申请到的AppID

编辑器推荐vscode(插件minapp、wechet-snippet、wxml)

<br>

### 2 目录说明

- `pages\`
  - `index\` - 教练点评页
  - `profile\` - 用户信息页
- `components\` - 组件
- `icons\` - 图标

<br>

### 3 设计&规范

1. **暂时**不严格要求代码规范，但使用编辑器时请设置`Space`代替`Tab`，防止MAC OS与WINDOWS的缩进冲突。

2. 暂定的颜色方案，建议使用也可不用，毕竟大概率会改。

   ```css
   #5582ff 主题色
   #707070 字体色
   #8a8a8a 字体色-light
   #cbcbcb 描边
   ```

<br>

### 4 注意事项

1. 在自己的feature分支下，每完成一个基础功能（细颗粒度）后进行一次commit。并push到远程自己的feature分支。
2. 必须经由测试人员测试后，才能结束自己的功能分支。
3. 请不要删除每组文件夹中wxml中对navbar的引入，请保持它在文件最上方，也不要误删了json中的navbar组件引入。
4. 想不到了，有问题和建议可以随时问组长，他很闲。