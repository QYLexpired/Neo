# Neo：精心打磨的界面，灵动自由的思维
- Neo是专为思源笔记设计的第三方主题，以 Apple（macOS/iOS）设计语言为灵感，营造统一、精致且赏心悦目的笔记空间
- Neo主题大量参考了[Asri主题](https://github.com/mustakshif/Asri)的设计和创意，非常感谢[mustakshif](https://github.com/mustakshif)，没有你超强的审美、技术力和让人惊叹的创意，就不会有Neo的出现
## 更新日志
完整更新历史可查看[CHANGELOG](https://github.com/QYLexpired/Neo/blob/main/CHANGELOG.md)
- 适配思维导图（仅支持思源3.8.6）
- 支持在自定义图片设置中直接预览并选择资源文件图片（仅支持思源3.8.6）
- 支持直接在预设配色菜单使用配色库的配色方案
- 适配数据库日历视图
- 适配数据库列表视图
- 优化Windows端的滚动条样式
- 在思维导图节点中禁用聚焦块指示和平滑光标
## 说明
- 主题的部分样式和功能无法仅通过CSS实现，因此必须安装并启用主题的配套插件：[Neo+](https://github.com/QYLexpired/Neo-Plus)
- Neo主题和Neo+插件均不会对文档数据进行任何修改，可随时启用或停用，不存在迁移负担
- 使用过程中有任何问题或建议，可通过[Neo 主题介绍及反馈综合帖](https://ld246.com/article/1783158376401)或[GitHub](https://github.com/QYLexpired/Neo/issues)进行反馈
## 支持我
Neo主题是完全免费的，如果喜欢这个主题，欢迎在[GitHub](https://github.com/QYLexpired/Neo)为我点亮小星星，也可以[请我喝杯咖啡](https://icnmjy02sv9g.feishu.cn/wiki/FekNwrtB7ia1WckYelRckwzZnig?from=from_copylink)
## 特性
#### 始终如一的体验
- 适配macOS、Windows及移动端，保持全平台视觉一致性
#### 精致考究的设计
- 采用OKLCH色彩空间构建色彩模型，实现灵活的配色扩展并兼顾文字可读性
- 引入超椭圆平滑圆角
- 全局使用毛玻璃效果，让界面通透且富有层次感
- 引入溢出渐隐效果，让滚动内容在边缘自然淡出
- 弹性缓动动效让界面切换与操作反馈更自然
#### 收放自如的配色
- 预设配色：内置数十套风格各异的预设配色方案及数百套经典配色的配色库
- 自由配色：完全自定义界面关键色值
- 基色配色：通过选取基色、饱和度和亮度自定义界面颜色，支持基色跟随题头图或跟随系统强调色
- 额外引入新粗野主义风格配色
- 随机配色：每次启动思源，从主题的所有配色方案中随机选择
- 高对比：在明亮模式下，让顶栏、停靠栏采用深色背景色
- 反转界面色：在暗黑模式下，让侧栏与正文区域的背景色反转
#### 细腻多变的界面
- 超级融合：将页签栏、面包屑、题头图和笔记正文无缝融合（源于Asri主题）
- IDE风格：以线条划分界面区域（源于Asri主题）
- 侧栏静音：突出编辑器区域，使正文、侧栏更具层次感
- 垂直页签：将页签栏垂直排列，方便查看与切换
- 内置大量纹理，也支持将自定义图片设为纹理或背景
- 支持设置彩色文档树
#### 自然灵动的交互
- 添加平滑光标和流体光标效果
- 支持聚焦块指示效果
- 为搜索列表添加卡片排列效果，提升阅读效率
- 可将斜杠菜单展开为多列，并通过键盘方向键进行导航
#### 清晰舒适的排版
- 优化全局文字样式，让中英文内容更易读
- 可设置彩色标题和彩色列表，提升区分度
- 彩色选区：根据文字颜色生成选区背景色
- 支持列表子弹线，让列表层级更加清晰
## 注意
主题的某些特性对思源原生样式进行了大幅改造，因此存在无法修复的兼容性问题，若影响使用请及时关闭；此外，部分特性对性能消耗较大，需谨慎开启
- 超级融合
    - 文档动态加载滚动条无法正确指示当前浏览位置
    - 导致数据库表头吸顶失效或位置错误
    - 可能与部分插件存在冲突
    - 该特性添加了部分模糊、折射效果，可能导致卡顿
- 毛玻璃
    - 导致渲染压力增加，若感知卡顿需关闭或调整至轻量档位
- 流体光标
    - 光标拖尾动画会导致性能显著降低，需谨慎开启
- 彩色选区
    - 相关CSS选择器性能较差，需谨慎开启
## 写在最后
- Neo的性能：全局样式改造比默认主题需要更多资源，虽然已尽力优化（包括Neo+的`performancetuning`模块），流畅度仍取决于设备、插件和代码片段等多种因素。若以默认主题的流畅度为1，Neo可能为0.9；叠加复杂插件或低效代码片段后，还可能降至0.9 × 0.9 = 0.81，因此卡顿未必只由主题引起
- Neo的彩蛋：Neo主题有很多隐藏的小细节，期待你的探索（比如试试在块菜单-外观处改变引述块的整体文字颜色，看看会发生什么）
- 再次感谢[Asri主题](https://github.com/mustakshif/Asri)和其作者[mustakshif](https://github.com/mustakshif)
## 致谢
制作Neo主题时，从以下项目汲取了大量灵感，感谢这些项目的制作者
- [Asri](https://github.com/mustakshif/Asri)
- [Cupertino](https://github.com/aaaaalexis/obsidian-cupertino)
- [Border](https://github.com/akifyss/obsidian-border)
- [Rem Craft](https://github.com/svchord/Rem-Craft)
- [Savor](https://github.com/royc01/notion-theme)
- [Baseline](https://github.com/aaaaalexis/obsidian-baseline)
- [AnuPpuccin](https://github.com/anubisnekhet/AnuPpuccin)
