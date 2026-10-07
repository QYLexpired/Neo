# Neo: A Refined Interface for Free-Flowing Ideas
- Neo is a third-party theme for SiYuan Notes inspired by Apple's macOS and iOS design language. It brings a cohesive, polished look to your workspace.
- Neo owes much of its design and ideas to the [Asri theme](https://github.com/mustakshif/Asri). Thank you, [mustakshif](https://github.com/mustakshif) — your eye for design, technical skill, and creativity made Neo possible.
## Changelog
See the [CHANGELOG](https://github.com/QYLexpired/Neo/blob/main/CHANGELOG.md) for the full update history.
### 1.7.0
- Major update: Neo+ color schemes, colored headings, and colored lists now apply to PDF exports
- Added support for the standalone settings window (SiYuan 3.8.7)
- Added two Neue Brutalism palettes: California Coast and Bubblegum
- Palette Library entries under Preset palettes now support Invert in dark mode
- The Focus Block Indicator's vertical line can now follow the text color
- Added an Outline effect to Focus Block Indicator
- Updated focus styles for tab blocks
- Adjusted inline annotation background colors
- Adjusted scrollbar styles across platforms
- Added support for mind map resize handles
- Redesigned keyboard key styles
- Fixed arrow-key navigation in the Multicolumn Slash Menu within table rich text cells
- Fixed colored lists not applying within table rich text cells
- Fixed breadcrumb overflow fades when Super Fusion is enabled
- Improved sticky database headers when Super Fusion is enabled
## Notes
- [Neo+](https://github.com/QYLexpired/Neo-Plus) is required because some of Neo's features cannot be implemented with CSS alone. Install and enable the plugin before using the theme.
- Neither the Neo theme nor the Neo+ plugin modifies document data. You can enable or disable them at any time without any migration.
- Have a question or suggestion? Post in the [Neo theme discussion thread](https://ld246.com/article/1783158376401) or open an issue on [GitHub](https://github.com/QYLexpired/Neo/issues)
## Support Me
Neo is free to use. If you enjoy it, consider starring the project on [GitHub](https://github.com/QYLexpired/Neo) or [buying me a coffee](https://icnmjy02sv9g.feishu.cn/wiki/FekNwrtB7ia1WckYelRckwzZnig?from=from_copylink)
## Features
#### A Consistent Experience
- Designed for macOS, Windows, and mobile devices, with a consistent visual style across platforms
#### Refined Design
- Uses the OKLCH color space to support flexible palettes while keeping text readable
- Introduces smooth superellipse corners
- Frosted glass adds translucency and depth across the interface
- Overflow fades soften the edges of scrollable content
- Spring easing gives transitions and interactions a more natural feel
#### Expressive Color Schemes
- Preset palettes: dozens of distinctive presets, plus a built-in library of hundreds of classic color schemes
- Freeform Palette: set the interface's main colors yourself
- Base Palette: choose a base color and adjust saturation and brightness, or match the base color to your banner image or system accent color
- Neue Brutalism palettes are also available
- Random Color: picks a color scheme at random whenever SiYuan starts
- High Contrast: uses a dark background for the top bar and dock in light mode
- Invert: swaps the background colors of the sidebars and the content area in dark mode
#### A Customizable Interface
- Super Fusion: merges the tab bar, breadcrumbs, banner image, and note content into a continuous surface (inspired by the Asri theme)
- IDE Style: uses dividing lines to organize the interface (inspired by the Asri theme)
- Sidebar Mute: tones down the sidebars to draw attention to the editor
- Vertical Tabs: stack your tabs vertically for easier viewing and switching
- Choose from built-in textures or use your own images as textures or backgrounds
- Add color to the document tree
#### Fluid Interactions
- Smooth Caret and Fluid Cursor animations
- Focus Block Indicator highlights the block you are editing
- Card Style Search List: displays search results as cards for easier scanning
- Multicolumn Slash Menu: expands into multiple columns, navigable with the arrow keys
#### Readable Typography
- Text styling tuned for readability in Chinese and English
- Optional colors for headings and lists make them easier to distinguish
- Colorful Selection: selection highlights take their color from the text
- List Bullet Line: shows guide lines to make nested lists easier to follow
## Cautions
Some features substantially change SiYuan's default styling and may cause compatibility issues that **cannot be fixed**. Disable any feature that causes problems. Others can affect performance, so enable them with care.
- Super Fusion
    - In documents with dynamically loaded content, the scrollbar may not accurately show your position
    - Arrow keys and block dragging cannot trigger upward scrolling in the editor
    - Database table headers may fail to stay pinned or appear in the wrong position
    - May conflict with some plugins
    - Its blur and refraction effects may cause lag
- Multicolumn Slash Menu
    - In split view, the menu may extend over another editor, preventing the caret in the covered area from moving to other blocks with the arrow keys
- Frosted Glass
    - Increases rendering load; if you notice lag, turn it off or select the Light setting
- Fluid Cursor
    - Its cursor trail can significantly slow down the interface; enable it with care
- Colorful Selection
    - Its CSS selectors may slow down the app; enable it with care
## Final Notes
- Performance: Neo's changes throughout the interface use more resources than the default theme, although we have optimized them where we can (including Neo+'s `performancetuning` module). Responsiveness also depends on your device, plugins, and code snippets. Suppose the default theme's smoothness is 1 and Neo's is 0.9. A demanding plugin could bring the combined result to 0.9 × 0.9 = 0.81. Lag may have more than one cause.
- Easter eggs: Neo has many small details to discover. For example, change an entire blockquote's text color from the block menu under Appearance and see what happens.
- Thanks again to [mustakshif](https://github.com/mustakshif), creator of the [Asri theme](https://github.com/mustakshif/Asri)
## Acknowledgements
Neo also draws inspiration from the projects below. Thanks to everyone who made them:
- [Asri](https://github.com/mustakshif/Asri)
- [Cupertino](https://github.com/aaaaalexis/obsidian-cupertino)
- [Border](https://github.com/akifyss/obsidian-border)
- [Rem Craft](https://github.com/svchord/Rem-Craft)
- [Savor](https://github.com/royc01/notion-theme)
- [Baseline](https://github.com/aaaaalexis/obsidian-baseline)
- [AnuPpuccin](https://github.com/anubisnekhet/AnuPpuccin)
