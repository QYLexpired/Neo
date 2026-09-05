### v1.6.0 / 2026-09-05
- 破坏性更新：为了增强主题的可维护性，移除Neo+插件中超出主题职责的特性或兼容性较差的特性
    - 移除钉住工具栏
    - 移除侧边备注
    - 移除沉浸模式
    - 移除卷轴效果
    - 由于修改幅度较大，部分旧配置无法迁移，需重新设置
- 整合菜单结构
- Breaking change: to improve the maintainability of the theme, Neo+ features beyond the theme's scope or with poor compatibility have been removed.
    - Removed Pinned Toolbar
    - Removed Side Memo
    - Removed Immersive Mode
    - Removed Cinematic Scroll
    - Because the changes are extensive, some old configurations cannot be migrated and need to be set again.
- Consolidated the menu structure
### v1.5.8 / 2026-09-02
- 彩色标题支持配置色彩风格
- 彩色列表支持配置色彩风格
- 彩色文档树支持配置色彩风格
- 预设纹理支持配置层级
- 棋盘纹理支持细节配置
- 网格纹理支持细节配置
- 波点纹理支持细节配置
- Colored headings now support configurable color styles
- Colored lists now support configurable color styles
- Colored document tree now supports configurable color styles
- Preset textures now support configurable layers
- Checkerboard texture now supports detailed configuration
- Grid texture now supports detailed configuration
- Polka dot texture now supports detailed configuration
### v1.5.7 / 2026-09-01
- 优化Neo+的生命周期管理
- 新增预设配色：旧杂志
- 移除主题色跟随时间（该特性存在无法解决的性能问题）
- 修复大量边界错误
- Optimized Neo+ lifecycle management
- New preset color scheme: Old Magazine
- Removed theme color following time (the feature had an unsolvable performance issue)
- Fixed numerous edge cases
### v1.5.6 / 2026-08-29
- 随机配色支持配置随机参数
- 优化主题在Windows平台的性能表现
- 修复彩色选区初始化失败的问题
- Random color schemes now support configurable random parameters
- Optimized theme performance on Windows
- Fixed an issue where colored selection failed to initialize
### v1.5.5 / 2026-08-27
- 自定义主题色支持调整亮度
- 支持双击饱和度/亮度滑块恢复默认值
- Custom theme colors now support adjusting brightness
- Double-clicking the saturation/brightness slider restores the default value
### v1.5.4 / 2026-08-26
- 移动端不再支持超级融合
- 调整设置页和集市页样式
- The mobile app no longer supports Super Fusion
- Adjusted settings page and bazaar page styles
### v1.5.3 / 2026-08-25
- 自定义图片纹理支持设置层级：底层、内容层、顶层
- Custom image textures now support setting their layer: backdrop, content, topmost
### v1.5.2 / 2026-08-23
- 重构自定义图片纹理功能
    - 支持CSS函数背景（如渐变背景）
    - 支持纯色背景
    - 支持背景组合
    - 支持自定义图片尺寸
    - 新增背景层混合模式参数
    - 由于重构幅度较大，之前的配置可能部分失效，需重新配置
- 垂直页签栏支持配置默认宽度
- 优化新粗野主义配色
- Rebuilt the custom image texture feature
    - Supports CSS function backgrounds (e.g., gradient backgrounds)
    - Supports solid color backgrounds
    - Supports background combinations
    - Supports custom image sizes
    - Added background layer blend mode parameters
    - Due to the significant scope of the rebuild, some previous configurations may no longer work and need to be reconfigured
- The vertical tab bar now supports configuring a default width
- Optimized Neue Brutalism color schemes
### v1.5.1 / 2026-08-21
- 引入全新设计语言：新粗野主义-以原始质感，重回纯粹表达
- 适配思源3.8.2-alpha
- Introducing a brand-new design language: Neue Brutalism — raw texture, back to pure expression
- Adapted for SiYuan 3.8.2-alpha
### v1.5.0 / 2026-08-20
- 全部预设配色同时支持明亮模式/暗黑模式
- 全新预设配色：远行、粗野主义（beta）
- All preset color schemes support both light and dark modes
- New preset color schemes: Voyage, Brutalism (beta)
### v1.4.8 / 2026-08-19
- 苔原配色适配暗黑模式
- 黄昏配色适配暗黑模式
- 蛋白石配色适配暗黑模式
- 氧配色适配明亮模式
- 暮光配色适配明亮模式
- 松烟配色适配明亮模式
- 重做深渊配色
- Tundra color scheme now supports dark mode
- Dusk color scheme now supports dark mode
- Opalite color scheme now supports dark mode
- Oxygen color scheme now supports light mode
- Twilight color scheme now supports light mode
- Songyan color scheme now supports light mode
- Redesigned the Abyss color scheme
### v1.4.7 / 2026-08-18
- 适配思源3.8.1
- 调整部分动效的响应速度，提升流畅度
- Adapted for SiYuan 3.8.1
- Adjusted the response speed of some animations to improve smoothness
### v1.4.6 / 2026-08-16
- 适配思源3.8.1-beta.4
- 优化部分细节
- Adapted for SiYuan 3.8.1-beta.4
- Optimized some details
### v1.4.5 / 2026-08-15
- 优化流体光标性能
- 优化沉浸模式性能
- Optimized fluid cursor performance
- Optimized immersive mode performance
### v1.4.4 / 2026-08-13
- Neo+的CSS改为按需加载以显著提升性能
- Neo+ CSS is now loaded on demand to significantly improve performance
### v1.4.3 / 2026-08-12
- 适配思源3.8.0
- 重做毛玻璃效果：提高可读性并增加层次感
- 移除列表多级序号特性
- 移除液态玻璃的色散效果以提升性能
- 数据库卡片支持字段名和字段值并排显示
- Adapted for SiYuan 3.8.0
- Redesigned the frosted glass effect to improve readability and add a sense of layering
- Removed the multi-level numbering feature for lists
- Removed the chromatic dispersion effect of liquid glass to improve performance
- Database cards now support displaying field names and field values side by side
### v1.4.2 / 2026-08-08
- 适配思源3.8.0-beta.1
- 重新引入平滑圆角效果
- 优化PDF标注效果
- 修复钉住工具栏在智能体界面错误生效的问题
- Adapted for SiYuan 3.8.0-beta.1
- Re-introduced the smooth rounded corners effect
- Optimized PDF annotation effects
- Fixed the issue where the pinned toolbar incorrectly took effect in the AI agent interface
### v1.4.1 / 2026-08-07
- 适配思源3.8.0-alpha.2
- 手机端支持使用超级融合
- 毛玻璃效果支持选择档位：轻量、全局
- 全面适配手机端样式
- Adapted for SiYuan 3.8.0-alpha.2
- Mobile now supports Super Fusion
- Frosted glass effect now supports level selection: Light, Global
- Fully adapted mobile styles
### v1.4.0 / 2026-08-05
- 适配思源3.8.0-alpha.1
- 优化全局界面通透度
- 修复超级融合与伪文档面包屑插件的冲突
- 适配手机端样式
- Adapted for SiYuan 3.8.0-alpha.1
- Optimized global interface translucency
- Fixed conflict between Super Fusion and the Pseudo Document Breadcrumb plugin
- Adapted mobile styles
### v1.3.10 / 2026-08-01
- 适配思源3.7.4-alpha.5
- 支持通过CSS代码片段自定义彩色标题/彩色列表/彩色文档树的亮度、饱和度
- 重做全局阴影
- 优化大量细节
- Adapted for SiYuan 3.7.4-alpha.5
- Support customizing the brightness and saturation of colored headings, colored lists, and colored document tree via CSS snippets
- Redesigned global shadows
- Optimized numerous details
### v1.3.9 / 2026-07-29
- 为明亮/暗黑模式切换添加平滑过渡
- 分隔线可通过块样式设置不同颜色
- 调整部分按钮样式
- 修复侧边备注的错误
- 优化智能体样式
- 更换主题色跟随题头图的取色算法
- 调整块引弹窗动效
- Added smooth transition for light/dark mode switching
- Dividers can now be set to different colors via block styles
- Adjusted some button styles
- Fixed side memo errors
- Optimized AI agent styles
- Changed the color extraction algorithm for theme color following banner images
- Adjusted block reference popup animation
### v1.3.8 / 2026-07-26
- 适配思源3.7.4-alpha.1
    - 适配标题自动编号
    - 适配文档顶部数据库属性
    - 适配文档底部双链
- 重做消息气泡动效
- 重做集市动效
- 优化跨块选区效果
- 优化块拖拽提示效果
- Adapted for SiYuan 3.7.4-alpha.1
    - Adapted heading auto-numbering
    - Adapted document top database properties
    - Adapted document bottom backlinks
- Redesigned message bubble animation
- Redesigned bazaar animation
- Optimized cross-block selection effect
- Optimized block drag hint effect
### v1.3.7 / 2026-07-23
- 适配思源3.7.3
- 调整菜单和对话框阴影
- 调整主界面阴影
- 优化流体光标的波纹效果
- 侧边备注支持临时隐藏
- 修复卷轴效果与侧边备注的冲突
- Adapted for SiYuan 3.7.3
- Adjusted menu and dialog shadows
- Adjusted main interface shadows
- Optimized fluid cursor ripple effect
- Side memo support temporary hiding
- Fixed conflict between scroll effect and side memo
### v1.3.6 / 2026-07-19
- 移除部分溢出渐隐效果，彻底解决渲染进程崩溃（闪退）的问题
- 适配思源3.7.3-beta.1
- Removed some overflow fade-out effects, completely resolving the rendering process crash (CTD) issue
- Adapted for SiYuan 3.7.3-beta.1
### v1.3.5 / 2026-07-18
- 降低彩色标题和彩色列表的饱和度
- 优化部分预设配色下彩色标题和彩色列表的可读性
- Reduced saturation of colored headings and colored lists
- Optimized readability of colored headings and colored lists under some preset color schemes
### v1.3.4 / 2026-07-18
- 新增纹理：压纹纸
- 优化关系图颜色
- 优化搜索界面
- 优化contrast-color颜色阈值
- 优化卷轴效果，并修复其导致智能体输入框样式异常的问题
- 修复侧边备注的部分错误
- New texture: Embossed Paper
- Optimized graph colors
- Optimized search interface
- Optimized contrast-color threshold
- Optimized scroll effect, and fixed the issue where it caused abnormal styles in the AI agent input field
- Fixed some errors with side memo
### v1.3.3 / 2026-07-14
- 适配思源3.7.2
    - 修正文档树引导线样式
    - 优化题头图对话框样式
    - 修正备注输入框样式
- 新增视觉-毛玻璃，主题将不再默认开启毛玻璃效果，需手动开启
- 优化流体光标路径，防止鼠标移动弧度过大时出现锯齿感
- 流体光标支持配置鼠标点击效果
- 新增预设配色：湖畔
- 覆写Windows端选单样式
- 优化Windows端右上角控制栏样式
- 移除性能模式
- 移除AI配色功能
- Adapted for SiYuan 3.7.2
    - Fixed document tree guide line styles
    - Optimized banner image dialog styles
    - Fixed note input field styles
- Added Visual - Frosted Glass; the theme will no longer enable frosted glass by default, must be manually enabled
- Optimized fluid cursor path to prevent jaggedness when the mouse moves in large arcs
- Fluid cursor now supports configurable mouse click effect
- New preset color scheme: Lakeside
- Overridden Windows select input styles
- Optimized Windows top-right control bar styles
- Removed Performance mode
- Removed AI color scheme feature
### v1.3.2 / 2026-07-12
- 增大界面圆角弧度
- Increased interface border radius
### v1.3.1 / 2026-07-12
- 重做代码块样式
- Redesigned code block styles
### v1.3.0 / 2026-07-12
- 新增扩展特性：侧边备注
- 重做菜单和对话框阴影及毛玻璃效果
- New extended feature: Side memo
- Redesigned menu and dialog shadows and frosted glass effects
### v1.2.12 / 2026-07-10
- 在Neo+菜单中添加顶栏融合按钮，方便快速开关思源的页签融合至顶栏
- 为输入框聚焦环添加动效
- 区分动态锚文本和静态锚文本
- 修复平滑光标选区时未折叠导致定位偏移的问题
- 矩形/下划线平滑光标更改为向右延伸
- Added topbar fusion button in Neo+ menu for quickly toggling SiYuan's tab fusion to topbar
- Added animation for input focus ring
- Differentiated dynamic anchor text from static anchor text
- Fixed positioning offset caused by collapsed selection in smooth cursor
- Changed block/underline smooth cursor to extend to the right
### v1.2.11 / 2026-07-09
- 修复有序列表序号样式异常的问题
- 平滑光标支持设置移动的缓动参数
- 平滑光标新增样式：矩形、下划线
- 平滑光标新增动效：伸缩
- 重做卷轴效果，提升流动感并适应大尺寸元素
- 将搜索结果多行展示与卡片式搜索列表解耦
- 优化部分暗色预设配色在反转效果下的文字颜色
- Fixed ordered list numbering style issue
- Smooth cursor now supports configurable easing parameters for movement
- Smooth cursor new styles: Block, Underline
- Smooth cursor new motion: Stretch
- Redesigned scroll effect for better flow and adaptation to larger elements
- Decoupled multi-line search results display from card-style search list
- Optimized text color for some dark preset color schemes under invert effect
### v1.2.10 / 2026-07-07
- 暂时移除平滑圆角特性以提升主题性能和稳定性
- Temporarily removed smooth rounded corners feature to improve theme performance and stability
### v1.2.9 / 2026-07-07
- 多层无序列表和有序列表采用不同序标
- 列表子弹线、聚焦块指示适配RTL
- Multi-level unordered and ordered lists use different numbering markers
- List bullet lines and focused block indicator now support RTL
### v1.2.8 / 2026-07-06
- 新增特性-性能模式：启用后将通过以下方式提升主题性能
    - 关闭部分毛玻璃效果
    - 关闭部分动效
    - 关闭平滑圆角
- New feature - Performance mode: When enabled, improves theme performance through the following:
    - Disables some frosted glass effects
    - Disables some animations
    - Disables smooth rounded corners
### v1.2.7 / 2026-07-05
- 新增预设配色：经典
- 重做浮动侧栏样式
- 简化设置页面样式
- 使引述块、Callout块、表格块可跟随块样式
- 修复部分情况IDE风格浮动侧栏无法调整宽度的问题
- 修复与思阅插件的冲突
- New preset color scheme: Classic
- Redesigned floating sidebar style
- Simplified settings page styles
- Made blockquote, Callout block, and table block follow block styles
- Fixed the issue where IDE-style floating sidebar width could not be adjusted in some cases
- Fixed conflict with the Siyue plugin
### v1.2.6 / 2026-07-01
- 将卡片式搜索列表改为可选项（位于视觉模块）
- 为消息气泡添加动效
- 修复复选框偏移的问题
- 彩色文档树新增风格：卡片
- Changed card-style search list to optional (located in Visual module)
- Added animation to message bubbles
- Fixed checkbox offset issue
- New styles for colored document tree: Card
### v1.2.5 / 2026-06-30
- 移除停靠栏收起/展开动效（防止顶部页签位置错误）
- 修复开关智能体可能闪退的问题
- Removed dock collapse/expand animation (to prevent top tab position errors)
- Fixed potential crash when toggling AI agent
### v1.2.4 / 2026-06-29
- 提升部分特性的稳定性
- Improved stability of some features
### v1.2.3 / 2026-06-28
- 适配智能体
- Adapted for SiYuan AI Agent
### v1.2.2 / 2026-06-27
- 新增配色：钛空、萤火、松烟
- 新增元素-彩色选区
- 适配思源v3.7.0-beta.3
- 超级融合支持配置融合效果
- IDE风格支持使用侧栏静音
- 优化大量细节
- New color schemes: Titaniumspace, Firefly, Songyan
- New element: Colorful selection
- Adapted for SiYuan v3.7.0-beta.3
- Super fusion supports configurable fusion effects
- IDE style supports sidebar mute
- Optimized numerous details
### v1.2.1 / 2026-06-22
- 大幅优化超级融合的性能
- Greatly optimized super fusion performance
### v1.2.0 / 2026-06-21
- 新增界面风格：IDE（参考Asri主题）
- 适配设置页
- 优化布局
- New interface style: IDE (inspired by Asri theme)
- Adapted settings page
- Optimized layout
### v1.1.8 / 2026-06-21
- 优化主题性能
- Optimized theme performance
### v1.1.7 / 2026-06-20
- 重构代码结构
- 视觉-彩色文档树新增风格：简约
- 新增特性：视觉-侧栏静音
- 重做文档树缩进线样式
- Refactored code structure
- Visual - Colored document tree added new style: Simple
- New feature: Visual - Sidebar mute
- Redesigned document tree indent line styles
### v1.1.6 / 2026-06-16
- 新增扩展-钉住工具栏
- 新增布局-多列斜杠菜单
- 优化手机端显示效果
- Added extension - Pinnable toolbar
- Added layout - Multi-column slash menu
- Improved mobile display performance
### v1.1.5 / 2026-06-14
- 大幅优化主题性能
- 垂直页签支持配置应用模式
- 沉浸模式支持分别开关打字机模式和高亮效果
- 平滑光标支持配置显示状态
- 聚焦块指示支持配置具体效果
- Significantly optimized theme performance
- Vertical tabs support configurable application mode
- Immersive mode supports toggling typewriter mode and highlight effects independently
- Smooth cursor supports configurable display state
- Focused block indicator supports configurable specific effects
### v1.1.4 / 2026-06-12
- 为非顶栏融合状态也引入超级融合效果（实验性）
- 超级融合默认关闭，须通过Neo+开启
- 为配色切换增加平滑过渡
- 移除活跃文档标题动效
- 重做Select表单样式
- 修复部分情况下顶栏无法拖动的问题
- 修复全屏查看文档时面包屑按钮无法点击的问题
- 纹理-自定义图片支持设置图片填充模式（等比缩放、平铺）
- 修复从其他主题切换回Neo时快捷键被重复注册的问题
- 提升菜单项样式的健壮性
- 优化导出界面样式
- Introduced super fusion effect for non-topbar fusion states as well (experimental)
- Super fusion is disabled by default, must be enabled via Neo+
- Added smooth transition for color scheme switching
- Removed active document title animation
- Redesigned Select form styles
- Fixed an issue where the top bar could not be dragged in some cases
- Fixed an issue where breadcrumb buttons were unclickable when viewing documents in fullscreen
- Custom image texture supports setting image fill mode (proportional scaling, tiling)
- Fixed issue where shortcuts were repeatedly registered when switching back to Neo from other themes
- Improved robustness of menu item styles
- Optimized export interface styles
### v1.1.3 / 2026-06-10
- 修复Kmind插件弹窗不可见的问题
- 为部分插件设置页添加毛玻璃效果：叶归、任务笔记管理、STtools
- 提升与部分插件的兼容性
- 修复与Kmind插件的冲突
- 使暗黑模式的全部配色均可使用"反转"
- Fixed Kmind plugin popup not visible issue
- Added frosted glass effect to some plugin settings pages: Yegui, Task Note Management, STtools
- Improved compatibility with certain plugins
- Fixed conflict with Kmind plugin
- All dark mode color schemes now support the "Invert" function
### v1.1.2 / 2026-06-09
- 重构按钮样式体系，统一按钮悬浮色变量
- 优化菜单项高度与内边距
- 优化列表项圆角
- Refactored button style system with unified button hover color variables
- Optimized menu item heights and padding
- Optimized list item border radius
### v1.1.1 / 2026-06-09
- 适配SY插件增强插件
- 提升与部分插件的兼容性
- 优化文档标题加载动效
- Adapted for the SY Plugin Enhance plugin
- Improved compatibility with certain plugins
- Optimized document title loading animation
### v1.1.0 / 2026-06-07
- 适配思源AI智能体界面：欢迎页示例、思考卡片、输入区域、消息气泡、工具卡片等
- 卡片式搜索列表改为通过Neo+插件启用
- 重做菜单和对话框阴影，改为内阴影风格
- 优化题头图视差效果
- Adapted for SiYuan AI Agent interface: welcome page examples, thinking cards, input area, message bubbles, tool cards, etc.
- Card-style search list now enabled via the Neo+ plugin
- Redesigned menu and dialog shadows to inset style
- Optimized hero image parallax effect
### v1.0.16 / 2026-06-04
- 优化搜索分组样式
- 优化对话框操作按钮样式
- 优化列表项悬浮交互效果
- 修复停靠栏左右边距的问题
- Optimized search group styles
- Optimized dialog action button styles
- Optimized list item hover interaction
- Fixed left/right margin issues of the dock
### v1.0.15 / 2026-05-31
- 优化单选按钮、复选框的动效与图标
- 优化按钮内边距
- 优化搜索列表、历史面板样式
- 优化Callout块的颜色反转效果
- Optimized radio button and checkbox animations and icons
- Optimized button padding
- Optimized search list and history panel styles
- Optimized color invert effect for Callout blocks
### v1.0.14 / 2026-05-30
- 新增块折叠动效
- 新增文档锁定/解锁图标动效
- 优化contrast-color颜色反转算法
- 完善超级融合效果
- 适配思源3.7.0开发版，调整最低应用版本至3.6.5
- Added block fold animation
- Added document lock/unlock icon animations
- Optimized contrast-color invert algorithm
- Refined super fusion effect
- Adapted for SiYuan 3.7.0 dev version, adjusted minimum app version to 3.6.5
### v1.0.13 / 2026-05-30
- 新增手机端样式适配：工具栏、菜单、状态栏等
- 手机端支持全局通透玻璃效果
- 重构毛玻璃效果，统一使用surface色系
- 重构超级融合布局变量
- Added mobile styles: toolbar, menu, status bar, etc.
- Mobile now supports global transparent glass effect
- Refactored frosted glass effect to unify the surface color scheme
- Refactored super fusion layout variables
### v1.0.12 / 2026-05-26
- 优化停靠栏动效，修复页签位置异常的问题
- 调整部分界面圆角
- Optimized dock animations, fixed abnormal tab positioning
- Adjusted some interface border radii
### v1.0.11 / 2026-05-25
- 大幅优化主题性能（媲美默认主题）
- 为停靠栏展开/收起添加动效
- 优化菜单、组件过渡动效
- Significantly optimized theme performance (comparable to the default theme)
- Added dock expand/collapse animations
- Optimized menu and component transition animations
### v1.0.10 / 2026-05-24
- 重做PDF标注配色，适配明亮/暗黑模式
- 新增卡片语义色（错误/警告/信息/成功）与文字色系，跟随主题色自动生成
- 优化浮动停靠栏毛玻璃效果
- 移除内容滚动浮现动效
- 优化代码块、kbd样式
- Redesigned PDF annotation colors for light/dark modes
- Added card semantic colors (error/warning/info/success) and text color palette generated from theme color
- Optimized floating dock frosted glass effect
- Removed content scroll reveal animation
- Optimized code block and kbd styles
### v1.0.9 / 2026-05-20
- 完善超级融合：面包屑栏毛玻璃、滚动区域位置调整
- 优化搜索界面布局
- 优化卡片式搜索列表间距
- 优化内容滚动浮现动效
- Refined super fusion: frosted glass breadcrumb bar, scroll area position adjustments
- Optimized search interface layout
- Optimized card-style search list spacing
- Optimized content scroll reveal animation
### v1.0.8 / 2026-05-19
- 新增浅/重阴影变量
- 优化列表项、任务复选框样式
- 优化卡片布局样式
- Added light/heavy shadow variables
- Optimized list items and task checkbox styles
- Optimized card layout styles
### v1.0.7 / 2026-05-16
- 新增特性：卡片式搜索列表
- 新增特性：全局排版优化，提升中英文阅读体验
- New feature: Card-style search list
- New feature: Global typography optimization for better Chinese and English reading experience
### v1.0.6 / 2026-05-15
- 新增特性：超级融合（顶栏融合模式下将面包屑与正文无缝融合）
- 升级题头图视差效果
- 优化内容滚动浮现动效
- New feature: Super Fusion (seamlessly blends breadcrumbs with content in topbar fusion mode)
- Upgraded hero image parallax effect
- Optimized content scroll reveal animation
### v1.0.5 / 2026-05-13
- 默认色与自定义色分离，支持饱和度调节
- Separated default and custom colors, added saturation adjustment
### v1.0.4 / 2026-05-11
- 重构配色系统：引入基础色变量
- 错误色、高亮色跟随主题色自动生成
- 新增停靠栏展开/收起动效
- 优化状态栏、页签样式
- 调整布局圆角
- Refactored color system: introduced base color variables
- Error and highlight colors now auto-generate from the theme color
- Added dock expand/collapse animations
- Optimized status bar and tab styles
- Adjusted layout border radius
### v1.0.3 / 2026-05-10
- 支持自定义主题色与饱和度调节
- 重做动画系统：块标、格式化工具栏、斜杠菜单入场动效
- 新增题头图视差效果
- 新增编辑器卷轴动效
- 全局平滑圆角
- 优化高亮色生成逻辑
- Support for custom theme color and saturation adjustment
- Redesigned animation system: block handle, formatting toolbar, and slash menu entrance animations
- Added hero image parallax effect
- Added editor scroll-driven animations
- Global smooth rounded corners
- Optimized highlight color generation logic
### v1.0.2 / 2026-05-09
- 新增动画特性：块标、格式化工具栏入场动效
- 新增数据库样式：画廊卡片、属性按钮等
- 支持多列斜杠菜单
- 优化菜单、对话框、顶栏、页签样式
- New animation feature: block handle and formatting toolbar entrance animations
- Added database styles: gallery cards, attribute buttons, etc.
- Support for multi-column slash menu
- Optimized menu, dialog, topbar, and tab styles
### v1.0.1 / 2026-05-05
- 优化设置页样式，设置分组毛玻璃化
- 优化账户页样式
- 优化卡片操作按钮样式
- 优化标题、引用块、代码块、列表等块级元素样式
- Optimized settings page styles with frosted glass for setting groups
- Optimized account page styles
- Optimized card action button styles
- Optimized block-level element styles: headings, blockquotes, code blocks, lists, etc.
### v1.0.0 / 2026-05-05
- 主题发布
    - 全局毛玻璃效果
    - 全局平滑圆角与溢出渐隐效果
    - 完备的块级元素与组件样式：对话框、停靠栏、编辑器、菜单、PDF、状态栏、页签、顶栏等
    - 基于OKLCH色彩空间的配色体系，支持明亮/暗黑模式
- Theme release
    - Global frosted glass effect
    - Global smooth rounded corners and overflow fade-out effects
    - Complete block-level element and component styles: dialog, dock, editor, menu, PDF, status bar, tab, topbar, etc.
    - OKLCH color space based color system with light/dark mode support
