# Neo: Refined Interface, Fluid and Free Thinking
- Neo is a third-party theme designed specifically for SiYuan Notes, with a design language inspired by Apple (macOS/iOS). Its globally unified, meticulously polished interface makes every note-taking experience a delight.
- Neo draws heavily on the design and ideas of the [Asri theme](https://github.com/mustakshif/Asri). A huge thank you to [mustakshif](https://github.com/mustakshif) — without your impeccable taste, technical skill, and astonishing creativity, Neo would never have come to be.
## Changelog
See the [CHANGELOG](https://github.com/QYLexpired/Neo/blob/main/CHANGELOG.md) for the full update history.
- The mobile app no longer supports Super Fusion
- Adjusted settings page and bazaar page styles
## Notes
- Some of the theme's styles and features cannot be implemented with CSS alone, so the companion plugin [Neo+](https://github.com/QYLexpired/Neo-Plus) **MUST** be installed and enabled.
- For any questions or suggestions during use, please visit the [Neo Theme Introduction & Feedback Thread](https://ld246.com/article/1783158376401) or [GitHub](https://github.com/QYLexpired/Neo/issues)
## Support Me
The Neo theme is completely free. If you enjoy this theme, feel free to star it on [GitHub](https://github.com/QYLexpired/Neo) or [buy me a coffee](https://icnmjy02sv9g.feishu.cn/wiki/FekNwrtB7ia1WckYelRckwzZnig?from=from_copylink)
## Features
#### Rich, Rigorous Color Schemes
- Dozens of built-in preset color schemes, each with its own distinct style
- Custom Theme Color: pick an accent color and adjust its saturation to customize the interface
- The theme color can follow time, banner, or system accent color
- Neue Brutalism color schemes
- Random Color: a random scheme is selected from all available ones on every SiYuan launch
#### Ever-Changing Interface
- Super Fusion: seamlessly blends tabs, breadcrumbs, banner images, and note content together (inspired by the Asri theme)
- IDE Style: a minimalist look defined by clean line-based divisions (inspired by the Asri theme)
- Sidebar Mute: emphasizes the editor area, giving the content and sidebars more depth
- High Contrast: uses a dark background for the top bar and dock in light mode
- Invert: swaps the background colors of the sidebars and the content area in dark mode
- Vertical Tabs: stack your tabs vertically for easier viewing and switching
- Global frosted glass effects for a transparent and layered interface
- Parallax scrolling for banner images and a cinematic scroll effect for the editor body, for striking visual impact
- Fade-out effects to eliminate visual fragmentation
- A large variety of preset Textures, plus support for custom image textures or backgrounds
- Colored Folders: colorize folders in the document tree
#### Natural and Dynamic Interactions
- Adds fluid easing animations to enhance interactive delight and visual smoothness
- Card Style Search List: card-style layout for search results to improve reading efficiency
- Multicolumn Slash Menu: expands into multiple columns, navigable with the arrow keys
#### Effortless Editing
- Optimized global typography for an enhanced Chinese and English reading experience
- Smooth Caret and Fluid Cursor effects
- Colored Headings and Colored Lists for better differentiation
- Immersive Mode: automatically highlights the focused line and scrolls it to the center of the editor
- Pinned Toolbar: pin the formatting toolbar to the editor
- List Bullet Line: guide lines for a clearer list hierarchy
- Focus Block Indicator effect
- Side Memo: renders memo content in a WYSIWYG fashion right beside the editor
## Cautions
Some features heavily rework SiYuan's native styles, so there are compatibility issues that cannot be fixed. Please disable them promptly if they affect your usage. Additionally, some features are quite performance-intensive and should be enabled with caution.
- Super Fusion
    - The document's dynamically loaded scrollbar cannot correctly indicate the current reading position
    - Causes database table headers to fail to stick to the top or end up in the wrong position
    - May conflict with some plugins
    - This feature adds blur and refraction effects, which may cause lag
- Cinematic Scroll
    - May cause the top or bottom of short documents to not display correctly
    - Causes database table headers to fail to stick to the top or end up in the wrong position
    - May cause performance degradation or scroll lag
- Theme Color Following Time
    - This feature constantly changes the theme color over time, causing heavy repainting that may lead to lag
- Frosted Glass
    - Increases rendering load; if you perceive lag, turn it off or switch to the Light level
- Fluid Cursor
    - The cursor trail animation can significantly degrade performance; enable with caution
- Colored Selection
    - The related CSS selectors have poor performance; enable with caution
- Immersive Mode
    - The focused-line highlight effect within it can significantly degrade performance; enable with caution
## A Final Word
- Who Neo is for: users who crave a more modern design, prefer a clean and minimal note-taking interface, and are willing to trade some performance for aesthetics
- Who Neo is NOT for: not for those who demand the absolute best performance. If you expect Neo to feel as smooth as the default theme, it isn't for you. Neo reworks the appearance of the entire SiYuan on a massive scale (almost rebuilt SiYuan's interface, which actually took a huge amount of my effort) — it's not a simple recolor or a pile of scattered CSS tweaks. In the pursuit of a refined look across the entire interface, a higher performance cost is inevitable. That said, the theme is already optimized to the best of its ability, and most features are optional. So before you complain that Neo makes your SiYuan notes laggy, keep this in mind.
- Neo's Easter Eggs: The Neo theme has many hidden little details waiting for you to discover (for example, try changing the overall text color of a blockquote from the Block Menu → Appearance and see what happens)
- Once again, thanks to the [Asri theme](https://github.com/mustakshif/Asri) and its author, [mustakshif](https://github.com/mustakshif)
## Acknowledgements
The creation of the Neo theme drew significant inspiration from the following projects. Thanks to their creators:
- [Asri](https://github.com/mustakshif/Asri)
- [Cupertino](https://github.com/aaaaalexis/obsidian-cupertino)
- [Border](https://github.com/akifyss/obsidian-border)
- [Rem Craft](https://github.com/svchord/Rem-Craft)
- [Savor](https://github.com/royc01/notion-theme)
- [Baseline](https://github.com/aaaaalexis/obsidian-baseline)
- [AnuPpuccin](https://github.com/anubisnekhet/AnuPpuccin)