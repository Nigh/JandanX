![title](title.png)

# JandanX

A userscript that restyles [jandan.net](https://jandan.net/) into a Twitter-like three-column dark layout.

一个仿推特三栏布局的煎蛋夜间模式油猴脚本。纯 DOM / CSS 换肤，不改站点内容接口。

> [!WARNING]
> 煎蛋由于版本更新，目前网页正在高频率变化中，插件可能随时会失效。如果我未及时适配，可提交 issue。

## 功能

- 页面加载后重建为三栏布局（导航 / 主栏 / 侧栏）
- 暗色琥珀主题，重绘主导航（首页、问答、树洞、段子等）
- 移动端（≤768px）汉堡菜单；桌面端侧栏间距自适应
- OO / XX、分页等样式调整

## Screenshot

![image](https://github.com/user-attachments/assets/4cf5c56c-abd5-4509-840a-18dff7c7beb0)

## 安装

1. 安装用户脚本管理器（[Tampermonkey](https://www.tampermonkey.net/) 或 [Violentmonkey](https://violentmonkey.github.io/)）
2. 从下列任一来源安装脚本：

- [GreasyFork](https://greasyfork.org/en/scripts/533519-jandanx)
- [OpenUserJS](https://openuserjs.org/scripts/xianii/JandanX)
- [GitHub Releases](https://github.com/Nigh/JandanX/releases)

## 开发

```sh
npm install
npm run build   # → dist/jandanX.user.js
npm run dev     # 监视 src/，自动重建
```

将 `dist/jandanX.user.js` 安装到脚本管理器即可本地调试。站点改版导致失效时，对照 `src/jandanX.js` / `src/jandanX.css` 修改后重新 build。
