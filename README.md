
# Personal-Homepage-Rock  

![Picture display](https://github.com/add-qwq/Personal-Homepage-Rock/raw/main/Personal-Homepage-Rock.png?raw=true)  

## Description (English)  
[Online Demo (Click to Visit)](https://www.rockaz.top/rockaz/)  
*Note: The demo server is located in China.*  

This project, named **Personal-Homepage-Rock**, is a personalized homepage built with HTML, CSS, and JavaScript for myself. It features a glassmorphism design with smooth animations, showcasing personal information, tech stack visualization, interest tags, timeline updates, an interactive "About" modal, and a **real-time birthday countdown** function. The page also supports background switching and responsive layout adjustments.  


## Features (English)  
- **Glassmorphism Aesthetic**: Semi-transparent glass-like backgrounds with backdrop blur and subtle shadows create a modern, frosted visual style.  
- **Dynamic Animations**: CSS animations including fade-in, slide-in, and floating effects (e.g., avatar floating animation) enhance page loading and interaction fluency.  
- **Comprehensive Info Display**:  
  - Avatar with hover zoom effect  
  - Nickname and signature with staggered fade-in animations  
  - Social links (GitHub) in the navigation bar  
- **Tech Stack Visualization**: Horizontal bars display proficiency percentages for different programming languages (CSS, PHP, JS, etc.).  
- **Interactive Tag Cloud**: Hover-scaling tags (e.g., "Minecraft," "ScriptHookVDotNet") highlight personal interests with color transitions.  
- **Reverse-Chronological Timeline**: Recent activities are displayed in descending order, with each entry featuring a slide-in animation on scroll.  
- **Modal "About" Popup**: Click "About" in the navigation to trigger a personalized introduction modal, closable via the close button or clicking outside.  
- **Background Switching**: Click "Switch Background" to cycle through preset background images (1.jpg to 5.jpg).  
- **Background Preview Mode**: Click "View Background" to hide the main content card and fix the footer at the bottom for better background viewing.  
- **Responsive Design**: Layout adapts automatically for mobile (≤600px), tablet (≤900px), and desktop devices, ensuring optimal display across screens.  


## File Structure (English)  
```  
├── index.html       # Main HTML structure and page content  
├── 1.css            # Stylesheet for layout, animations, and glassmorphism effects  
└── 1.js             # JavaScript for interactions (countdown, modals, background switching)  
```  


## Usage (English)  
### 1. Direct Deployment  
- Download all files (index.html, 1.css, 1.js, and prepare your own avatar/background image and other resources).  
- Open index.html in modern browsers (Chrome, Firefox, Edge, Safari) to view the homepage with full functionality.  


### 2. Customization  
#### **Content Modification**  
- **Basic Info**: Edit HTML text (nickname, signature, tags, timeline entries) in index.html to reflect your personal information.  
- **Avatar/Background**: Replace tx.svg (avatar) and background images (e.g., 1.jpg-5.jpg) with your custom images.  
- **Social Links**: Update the navigation bar links (e.g., GitHub URL) in the <nav> section of index.html.  

#### **Birthday Adjustment**  
- In 1.js, modify the getNextBirthday() function to set your birthday. The month parameter uses 0-11 (e.g., new Date(currentYear, 4, 6) = May 6th).  

#### **Style Tweaks**  
- **Color Theme**: Adjust CSS variables in :root (e.g., --primary-color, --glass-bg) in 1.css to change the main color and glass background opacity.  
- **Animations**: Modify @keyframes rules (e.g., fadeInDown, float) in 1.css to adjust animation duration, easing, or effects.  
- **Tech Stack**: Update the width style and text in .tech-block elements (in index.html) to reflect your skill percentages.  

#### **Background Images**  
- Add/remove background images by updating the bgList array in 1.js (e.g., const bgList = [1, 2, 3, 4, 5] for 1.jpg-5.jpg).  


## Compatibility (English)  
Works well on modern browsers (Chrome ≥80, Firefox ≥75, Edge ≥80, Safari ≥14). Older browsers may have limited support for CSS features like backdrop-filter or object-fit, resulting in slightly reduced visual effects (e.g., less blurred backgrounds).  


---


# 个人主页-Rock  


## 描述 (中文)  
[在线演示（点击访问）](https://www.rockaz.top/rockaz/)  

本项目名为 **Personal-Homepage-Rock**，是为 我自己 打造的个人主页，基于 HTML、CSS、JavaScript 开发。页面采用玻璃拟态设计与流畅动画，包含个人信息展示、技术栈可视化、兴趣标签云、时间线动态、交互式“关于”弹窗及**实时生日倒计时**功能，同时支持背景切换与响应式布局适配。  


## 功能特性 (中文)  
- **玻璃拟态界面**：半透明玻璃质感背景，搭配毛玻璃模糊与轻阴影，营造现代冰透视觉风格。  
- **动态动画效果**：包含淡入、滑入、漂浮（如头像漂浮动画）等 CSS 动画，提升页面加载与交互的灵动感。  
- **核心信息展示**：  
  - 悬停放大的头像  
  - 带交错淡入动画的昵称与个性签名  
  - 导航栏集成 GitHub 等社交链接  
- **技术栈可视化**：通过水平条直观展示不同编程语言（CSS、PHP、JS 等）的掌握百分比。  
- **可交互标签云**：标签（如“Minecraft”“ScriptHookVDotNet”）支持悬停缩放与变色，直观呈现兴趣爱好。  
- **倒序时间线**：近期动态按时间倒序排列，每条动态随滚动触发滑入动画。  
- **模态“关于”弹窗**：点击导航栏“关于”触发个性化介绍弹窗，支持点击关闭按钮或外部区域关闭。  
- **背景切换功能**：点击“切换背景”按钮可循环切换预设背景图（1.jpg 至 5.jpg）。  
- **背景预览模式**：点击“查看背景”可隐藏主内容卡片并固定页脚到底部，专注查看背景图。  
- **响应式布局**：自动适配手机（≤600px）、平板（≤900px）、桌面端，不同屏幕下布局智能调整。  


## 文件结构 (中文)  
```  
├── index.html       # 主 HTML 结构与页面内容  
├── 1.css            # 布局、动画及玻璃拟态效果样式表  
└── 1.js             # 交互逻辑（倒计时、弹窗、背景切换等）  
```  


## 使用方法 (中文)  
### 1. 直接部署  
- 下载所有文件（index.html、1.css、1.js 并自行准备头像/背景图等资源）。  
- 使用 Chrome、Firefox 等现代浏览器打开 index.html，即可完整体验主页功能。  


### 2. 自定义修改  
#### **内容更新**  
- **基础信息**：编辑 index.html 中的昵称、个性签名、标签、时间动态等文本，替换为个人信息。  
- **头像/背景图**：将 tx.svg（头像）和背景图（如 1.jpg - 5.jpg）替换为自定义图片。  
- **社交链接**：修改 index.html 中导航栏的链接（如 GitHub 地址）。  

#### **生日调整**  
- 在 1.js 中修改 getNextBirthday() 函数内的生日日期（月份参数为 0-11，例如 new Date(currentYear, 4, 6) 表示5月6日）。  

#### **样式调整**  
- **主题色**：通过 1.css 中 :root 下的 CSS 变量（如 --primary-color 主色、--glass-bg 玻璃背景）修改主题配色。  
- **动画效果**：调整 1.css 中 @keyframes 规则（如 fadeInDown、float），修改动画时长、缓动效果等。  
- **技术栈**：在 index.html 的 .tech-block 元素中修改 width 样式和文本，调整技术掌握百分比。  

#### **背景图管理**  
- 如需添加/删除背景图，修改 1.js 中的 bgList 数组（例如 const bgList = [1, 2, 3, 4, 5] 对应 1.jpg-5.jpg）。  


## 兼容性 (中文)  
支持 Chrome ≥80、Firefox ≥75、Edge ≥80、Safari ≥14 等现代浏览器。旧版浏览器可能不支持 backdrop-filter、object-fit 等 CSS 特性，导致背景模糊、图片适配等视觉效果略有下降。
