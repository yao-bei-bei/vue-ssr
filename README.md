# vue-ssr node 服务端渲染工作流
- 【手机端首屏渲染问题】
- 【SEO 解决搜索引擎抓取问题】
- 【提高页面渲

### 开发自动化
- 自动化搭建本地研发环境，快速响应文件更改并自动刷新浏览器。
- 自动化编译 ES6 或 CommonJS 标准的 JS 代码，自动化生成 source map 便于浏览器端调试。
- 自动化编译 SASS/LESS => CSS 文件，自动化添加 CSS3 的各种浏览器前缀。
- 服务端使用 express，前端使用 webpack 自动化构建打包。

#### 全局安装 webpack 最新版本
```bash
npm install webpack -g
```
### 运行 Demo 示例项目
#### 安装 NPM 包
- 进入项目 目录执行以下命令
```bash
npm install
```

#### 运行 Demo 示例

- 在项目目录下执行

```bash
// 打包命令
npm run build
```

```bash
// production模式下启动服务
npm run start
```

```bash
// dev模式下启动服务
npm run dev
```

npm run dev 启动服务路径http://localhost:6180


