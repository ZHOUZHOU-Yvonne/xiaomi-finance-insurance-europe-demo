# 小米金保欧洲介绍页 Demo

这是一个面向欧洲市场的 Xiaomi Financial Services 英文官网 Demo，以 Xiaomi SU7 Ultra 为核心车型，整合金融、保险与欧洲金保介绍内容。

## 快速查看

- 线上成品：<https://xiaomi-financial-services-europe-demo.zhouyajiezzz.chatgpt.site/>
- 金融区块：<https://xiaomi-financial-services-europe-demo.zhouyajiezzz.chatgpt.site/#finance>
- 保险区块：<https://xiaomi-financial-services-europe-demo.zhouyajiezzz.chatgpt.site/#insurance>
- 三个离线页面：`handoff/03_Deliverable_最终作品/本地HTML版本/`

项目背景、输入、要求和交付物说明位于 [`handoff/`](handoff/) 目录。

## 本地运行

无需开发环境时，可直接双击 `handoff/03_Deliverable_最终作品/本地HTML版本/` 中的任一 HTML 文件。

如需运行完整源码，环境要求为 Node.js 22.13.0 或更高版本：

```bash
npm install
npm run dev
```

浏览器访问：<http://localhost:3000/>

## 验证

```bash
npm run lint
npm test
```

## 主要源码目录

- `app/`：页面入口和兼容跳转
- `components/sections/`：欧洲金保、金融和保险三个内容区块
- `components/`：计算器、对比表、FAQ、页头和页脚
- `lib/`：业务文案与金融计算逻辑
- `public/`：车型图片与分享卡片
- `tests/`：页面渲染与旧链接兼容测试
- `scripts/`：三份离线 HTML 的自动导出工具
- `handoff/`：对外交付说明

## 重要说明

这是演示项目。示例联系方式和金融测算均为 Demo 内容，不构成正式报价、承保承诺或授信承诺。
