# <span style="font-family: neo;">✦ Neo: A Refined Interface for Free-Flowing Ideas</span>
- Neo is a third-party theme for SiYuan Notes inspired by Apple's macOS and iOS design language. It brings a cohesive, polished look to your workspace.
- Neo owes much of its design and ideas to the [Asri theme](https://github.com/mustakshif/Asri). Thank you, [mustakshif](https://github.com/mustakshif) — your eye for design, technical skill, and creativity made Neo possible.
## <span style="font-family: neo;">Changelog</span>
See the [CHANGELOG](https://github.com/QYLexpired/Neo/blob/main/CHANGELOG.md) for the full update history.
### <span style="font-family: neo;">1.7.7</span>
- Restored the default link style; enable link icons via Neo+ Menu → Appearance → Configure Elements
- Reduced corner radii throughout the interface
- Added a new pinned preset palette: Soft
- Removed colored lists to simplify theme maintenance
- Moved colored headings to the element settings
- Moved Multicolumn Slash Menu and Card Style Search List to the Appearance submenu
- Removed the inline memo icon and set a fixed color
- Added an option to show heading levels
- Refined loading animations (SiYuan 3.8.9)
### <span style="font-family: neo;">1.7.6</span>
- Added expand/collapse animations to details elements
- Redesigned all link styles
- Redesigned inline memo styling
- Redesigned tag styling
- Redesigned database title styling
- Refined some animations
- Removed the tab closing animation
## <span style="font-family: neo;">Notes</span>
- [Neo+](https://github.com/QYLexpired/Neo-Plus) is required because some of Neo's features cannot be implemented with CSS alone. Install and enable the plugin before using the theme.
- Neither the Neo theme nor the Neo+ plugin modifies document data. You can enable or disable them at any time without any migration.
- Have a question or suggestion? Post in the [Neo theme discussion thread](https://ld246.com/article/1783158376401) or open an issue on [GitHub](https://github.com/QYLexpired/Neo/issues)
- For reasons including design philosophy, adaptation effort, and maintenance, the Neo theme disables SiYuan's Compact Mode. "Disables" here means that when Compact Mode is enabled in SiYuan, the Neo theme removes the related styles on the front end; it does not modify any SiYuan settings.
## <span style="font-family: neo;">Support Me</span>
Neo is free to use. If you enjoy it, consider starring the project on [GitHub](https://github.com/QYLexpired/Neo) or [buying me a coffee](https://icnmjy02sv9g.feishu.cn/wiki/FekNwrtB7ia1WckYelRckwzZnig?from=from_copylink)
## <span style="font-family: neo;">Features</span>
#### <span style="font-family: neo;">A Consistent Experience</span>
- Designed for macOS, Windows, and mobile devices, with a consistent visual style across platforms
#### <span style="font-family: neo;">Refined Design</span>
- Uses the OKLCH color space to support flexible palettes while keeping text readable
- Introduces smooth superellipse corners
- Frosted glass adds translucency and depth across the interface
- Overflow fades soften the edges of scrollable content
- Spring easing gives transitions and interactions a more natural feel
#### <span style="font-family: neo;">Expressive Color Schemes</span>
- Preset palettes: dozens of distinctive presets, plus a built-in library of hundreds of classic color schemes
- Freeform Palette: set the interface's main colors yourself
- Base Palette: choose a base color and adjust saturation and brightness, or match the base color to your banner image or system accent color
- Neue Brutalism palettes are also available
- Random Color: picks a color scheme at random whenever SiYuan starts
- High Contrast: uses a dark background for the top bar and dock in light mode
- Invert: swaps the background colors of the sidebars and the content area in dark mode
#### <span style="font-family: neo;">A Customizable Interface</span>
- Super Fusion: merges the tab bar, breadcrumbs, banner image, and note content into a continuous surface (inspired by the Asri theme)
- IDE Style: uses dividing lines to organize the interface (inspired by the Asri theme)
- Sidebar Mute: tones down the sidebars to draw attention to the editor
- Vertical Tabs: stack your tabs vertically for easier viewing and switching
- Choose from built-in textures or use your own images as textures or backgrounds
- Add color to the document tree
#### <span style="font-family: neo;">Fluid Interactions</span>
- Smooth Caret and Fluid Cursor animations
- Focus Block Indicator highlights the block you are editing
- Card Style Search List: displays search results as cards for easier scanning
- Multicolumn Slash Menu: expands into multiple columns, navigable with the arrow keys
#### <span style="font-family: neo;">Readable Typography</span>
- Text styling tuned for readability in Chinese and English
- Optional colors make headings easier to distinguish
- List Bullet Line: shows guide lines to make nested lists easier to follow
## <span style="font-family: neo;">Cautions</span>
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
## <span style="font-family: neo;">Final Notes</span>
- Performance: Neo's changes throughout the interface use more resources than the default theme, although we have optimized them where we can (including Neo+'s `performancetuning` module). Responsiveness also depends on your device, plugins, and code snippets. Suppose the default theme's smoothness is 1 and Neo's is 0.9. A demanding plugin could bring the combined result to 0.9 × 0.9 = 0.81. Lag may have more than one cause.
- Easter eggs: Neo has many small details to discover. For example, change an entire blockquote's text color from the block menu under Appearance and see what happens.
- Thanks again to [mustakshif](https://github.com/mustakshif), creator of the [Asri theme](https://github.com/mustakshif/Asri)
## <span style="font-family: neo;">Acknowledgements</span>
Neo also draws inspiration from the projects below. Thanks to everyone who made them:
- [Asri](https://github.com/mustakshif/Asri)
- [Cupertino](https://github.com/aaaaalexis/obsidian-cupertino)
- [Border](https://github.com/akifyss/obsidian-border)
- [Rem Craft](https://github.com/svchord/Rem-Craft)
- [Savor](https://github.com/royc01/notion-theme)
- [Baseline](https://github.com/aaaaalexis/obsidian-baseline)
- [AnuPpuccin](https://github.com/anubisnekhet/AnuPpuccin)
