/** 裁切逻辑 */
declare type VCSSOverFlow = 'squish' | 'clip' | 'scroll' | 'noclip'
/** 排序方向 */
declare type VCSSDirection = 'up' | 'down' | 'left' | 'right'
/** 水平居中 */
declare type VCSSVerticalAlign = 'top' | 'center' | 'bottom' | 'middle'
/** 垂直居中 */
declare type VCSSHorizontalAlign = 'left' | 'center' | 'right'
/** 百分比字符串 */
declare type VCSSPercentString = `${number}%`
/** 像素字符串 */
declare type VCSSPixelsString = `${number}px`

declare type DefaultFont =
    | "Radiance"
    | "FZLanTingHei-R-GBK"
    | "TH Sarabun New"
    | "YDYGO 540"
    | "Gulim"
    | "MingLiU"
    | "RadianceM"
    | "Reaver"
    | "Goudy Trajan Medium"
    | "FZKai-Z03"
    | "Courier New"
    | "Courier"
    | "Creepster"
    | "Valve Radus"

interface VCSSStyleDeclaration {
    /**
     * Controls blending mode for the panel. See CSS mix-blend-mode docs on web, except normal for us is with alpha blending.
     *
     * Examples:
     * -s2-mix-blend-mode: normal;
     * -s2-mix-blend-mode: multiply;
     * -s2-mix-blend-mode: screen;
     */
    S2MixBlendMode: string | null;

    align: `${VCSSHorizontalAlign} ${VCSSVerticalAlign}`;

    animation: string | null;
    animationDelay: string | null;
    animationDirection: string | null;
    animationFillMode: string | null;
    animationDuration: string | null;
    animationIterationCount: string | null;
    animationName: string | null;
    animationTimingFunction: string | null;

    /**
     * Sets the background fill color/gradient/combination for a panel.
     *
     * Examples:
     * background-color: #FFFFFFFF;
     * background-color: gradient( linear, 0% 0%, 0% 100%, from( #fbfbfbff ), to( #c0c0c0c0 ) );
     * background-color: gradient( linear, 0% 0%, 0% 100%, from( #fbfbfbff ), color-stop( 0.3, #ebebebff ), to( #c0c0c0c0 ) );
     * background-color: gradient( radial, 50% 50%, 0% 0%, 80% 80%, from( #00ff00ff ), to( #0000ffff ) );
     * background-color: #0d1c22ff, gradient( radial, 100% -0%, 100px -40px, 320% 270%, from( #3a464bff ), color-stop( 0.23, #0d1c22ff ), to( #0d1c22ff ) );
     */
    backgroundColor: string | null;

    /**
     * Comma separated list of images or movies to draw in the background. Can specify "none" to not draw a background layer. Combined with background-position, background-size and background-repeat
     * values.
     *
     * Example:
     * background-image: url("file://{images}/default.tga"), url( "file://{movies}/Background1080p.webm" );
     */
    backgroundImage: string | null;

    /**
     * Controls the horizontal and vertical placement of the background image, with the format: <left|center|right> <horizontal length> <top|center|bottom> <vertical length>
     *
     * If length is a percent, the specified location within the image is positioned over that same specified position in the background. If the length is pixels, the top left corner is placed
     * relative to the provided alignment keywords (left, bottom, etc.). See examples for more details.
     *
     * If 1 value is specified, the other value is assumed to be center. If 2 values are specified, the first value must be for horizontal placement and the second for vertical.
     *
     * Examples:
     * // aligns the top left corner of the image with the top left corner of the panel (default)
     * background-position: 0% 0%;
     * // centers the image within the background (same as "center center")
     * background-position: center;
     * // aligns the bottom right corner of the image with the bottom right corner of the panel (same as "100% 100%")
     * background-position: right bottom;
     * // the top left corner of the image is placed 10px to the right of, 40px below the top left corner of the panel
     * background-position: left 10px top 40px;
     */
    backgroundPosition: string | null;

    /**
     * Controls if the background should be repeated in the horizontal and vertical directions.
     *
     * Possible values per direction:
     * "repeat" - (default) Repeated in the specified direction until it fills the panel
     * "space" - Repeated as many times as required to fill the panel w/o being clipped. Space is added between images to to align first and last image with panel edges.
     * "round" - Repeated as many times as required to fill the panel w/o being clipped. The image is resized to align first and last image with panel edges.
     * "no-repeat" - Not repeated
     *
     * Possible single values:
     * "repeat-x" - equals "repeat no-repeat"
     * "repeat-y" - equals "no-repeat repeat"
     *
     * Examples:
     * background-repeat: repeat; // equals "repeat repeat" (default)
     * background-repeat: repeat space; // repeats horizontally, spaces vertically
     * background-repeat: no-repeat round; // 1 column of images, scaled to fit evenly
     */
    backgroundRepeat: string | null;

    /**
     * Sets the horizontal and vertical dimensions used to draw the background image. Can be set in pixels, percent, "contains" to size down to panel dimensions or "auto" preserves the image aspect
     * ratio. By default, set to "auto" which preveres the image's original size.
     *
     * Multiple background layers can be specified in a comma separated list, which are then combined with background-image, background-position, and background-repeat values.
     *
     * Examples:
     * background-size: auto; // same as "auto auto" (default)
     * background-size: 100% 100%; // image fills the panel
     * background-size: 50% 75%; // image fills 50% of the panel's width, and 75% of the panel's height
     * background-size: 300px 200px; // image is drawn 300px wide, 200px tall
     */
    backgroundSize: string | null;

    /**
     * Sets the amount of blur to apply to the panel and all it's children during composition.  Default is no blur, for now Gaussian is the only blur type and takes a horizontal standard deviation,
     * vertical standard deviation, and number of passes.  Good std deviation values are around 0-10, if 10 is still not intense enough consider more passes, but more than one pass is bad for perf.
     * As shorthand you can specify with just one value, which will be used for the standard deviation in both directions and 1 pass will be set.
     *
     * Examples:
     * blur: gaussian( 2.5 );
     * blur: gaussian( 6, 6, 1 );
     */
    blur: string | null;

    /**
     * Shorthand for setting panel border. Specify width, style, and color.  Supported styles are: solid, none.
     *
     * Examples:
     * border: 2px solid #111111FF;
     */
    border: string | null;

    /**
     * Shorthand for setting the bottom panel border. Specify width, style, and color.  Supported styles are: solid, none.
     *
     * Examples:
     * border-bottom: 2px solid #111111FF;
     */
    borderBottom: string | null;

    /**
     * Specifies border color for the bottom edge of the panel.
     *
     * Examples:
     * border-bottom-color: #111111FF;
     */
    borderBottomColor: string | null;

    /**
     * Specifies border-radius for bottom-left corner which rounds off border and clips background/foreground content to rounded edge.  Takes 1 or 2 values in px or %, first value is horizontal
     * radii for elliptical corner, second is vertical radii, if only one is specified then horizontal/vertical will both be set and corner will be circular.
     *
     * Examples:
     * border-bottom-left-radius: 2px 2px;
     * border-bottom-left-radius: 5%;
     */
    borderBottomLeftRadius: string | null;

    /**
     * Specifies border-radius for bottom-right corner which rounds off border and clips background/foreground content to rounded edge.  Takes 1 or 2 values in px or %, first value is horizontal
     * radii for elliptical corner, second is vertical radii, if only one is specified then horizontal/vertical will both be set and corner will be circular.
     *
     * Examples:
     * border-bottom-right-radius: 2px 2px;
     * border-bottom-right-radius: 5%;
     */
    borderBottomRightRadius: string | null;

    /**
     * Specifies border style for the bottom edge of the panel.
     *
     * Examples:
     * border-bottom-style: solid;
     */
    borderBottomStyle: string | null;

    /**
     * Specifies border width for the bottom edge of the panel.
     *
     * Examples:
     * border-bottom-width: 2px;
     */
    borderBottomWidth: string | null;

    /**
     * Specifies border color for panel.  If a single color value is set it applies to all sides, if 2 are set the first is top/bottom and the second is left/right, if all four are set then they are
     * top, right, bottom, left in order.
     *
     * Examples:
     * border-color: #111111FF;
     * border-color: #FF0000FF #00FF00FF #0000FFFF #00FFFFFF;
     */
    borderColor: string | null;

    /**
     * Shorthand for setting the left panel border. Specify width, style, and color.  Supported styles are: solid, none.
     *
     * Examples:
     * border-left: 2px solid #111111FF;
     */
    borderLeft: string | null;

    /**
     * Specifies border color for the left edge of the panel.
     *
     * Examples:
     * border-left-color: #111111FF;
     */
    borderLeftColor: string | null;

    /**
     * Specifies border style for the left edge of the panel.
     *
     * Examples:
     * border-left-style: solid;
     */
    borderLeftStyle: string | null;

    /**
     * Specifies border width for the left edge of the panel.
     *
     * Examples:
     * border-left-width: 2px;
     */
    borderLeftWidth: string | null;

    /**
     * Shorthand to set border radius for all corners at once.  Border radius rounds off corners of the panel, adjusting the border to smoothly round and also clipping background image/color and
     * contents to the specified elliptical or circular values.  In this shorthand version you may specify a single value for all raddi, or horizontal / vertical separated by the '/' character.
     * For both horizontal and vertical you may specify 1 to 4 values in pixels or %, they will be taken in order as top-left, top-right, bottom-right, bottom-left radii values.
     *
     * Examples:
     * // 2 px circular corners on all sides
     * border-radius: 2px;
     * // Perfect circular or elliptical panel (circular if box was square)
     * border-radius: 50% / 50%;
     * // 2 px horizontal radii 4px vertical elliptical corners on all sides
     * border-radius: 2px / 4px;
     * // All corners fully specified
     * border-radius: 2px 3px 4px 2px / 2px 3px 3px 2px;
     */
    borderRadius: string | null;

    /**
     * Shorthand for setting the right panel border. Specify width, style, and color.  Supported styles are: solid, none.
     *
     * Examples:
     * border-right: 2px solid #111111FF;
     */
    borderRight: string | null;

    /**
     * Specifies border color for the right edge of the panel.
     *
     * Examples:
     * border-right-color: #111111FF;
     */
    borderRightColor: string | null;

    /**
     * Specifies border style for the right edge of the panel.
     *
     * Examples:
     * border-right-style: solid;
     */
    borderRightStyle: string | null;

    /**
     * Specifies border width for the right edge of the panel.
     *
     * Examples:
     * border-right-width: 2px;
     */
    borderRightWidth: string | null;

    /**
     * Specifies border style for panel.  If a single style value is set it applies to all sides, if 2 are set the first is top/bottom and the second is left/right, if all four are set then they are
     * top, right, bottom, left in order.
     *
     * Examples:
     * border-style: solid;
     * border-style: solid none solid none;
     */
    borderStyle: string | null;

    /**
     * Shorthand for setting the top panel border. Specify width, style, and color.  Supported styles are: solid, none.
     *
     * Examples:
     * border-top: 2px solid #111111FF;
     */
    borderTop: string | null;

    /**
     * Specifies border color for the top edge of the panel.
     *
     * Examples:
     * border-top-color: #111111FF;
     */
    borderTopColor: string | null;

    /**
     * Specifies border-radius for top-left corner which rounds off border and clips background/foreground content to rounded edge.  Takes 1 or 2 values in px or %, first value is horizontal radii
     * for elliptical corner, second is vertical radii, if only one is specified then horizontal/vertical will both be set and corner will be circular.
     *
     * Examples:
     * border-top-left-radius: 2px 2px;
     * border-top-left-radius: 5%;
     */
    borderTopLeftRadius: string | null;

    /**
     * Specifies border-radius for top-right corner which rounds off border and clips background/foreground content to rounded edge.  Takes 1 or 2 values in px or %, first value is horizontal radii
     * for elliptical corner, second is vertical radii, if only one is specified then horizontal/vertical will both be set and corner will be circular.
     *
     * Examples:
     * border-top-right-radius: 2px 2px;
     * border-top-right-radius: 5%;
     */
    borderTopRightRadius: string | null;

    /**
     * Specifies border style for the top edge of the panel.
     *
     * Examples:
     * border-top-style: solid;
     */
    borderTopStyle: string | null;

    /**
     * Specifies border width for the top edge of the panel.
     *
     * Examples:
     * border-top-width: 2px;
     */
    borderTopWidth: string | null;

    /**
     * Specifies border width for panel.  If a single width value is set it applies to all sides, if 2 are set the first is top/bottom and the second is left/right, if all four are set then they are
     * top, right, bottom, left in order.
     *
     * Examples:
     * border-width: 1px;'
     * border-width: 20px 1px 20px 1px;
     */
    borderWidth: string | null;

    /**
     * Specifies outer shadows for boxes, or inset shadows/glows.  The shadow shape will match the border box for the panel,so use border-radius to affect rounding.  Syntax takes optional 'inset',
     * optional 'fill' then color, and then horizontal offset pixels, vertical offset pixels, blur radius pixels, and spread distance in pixels. Inset means the shadow is an inner shadow/glow, fill
     * is validonly on outer shadows and means draw the shadow behind the entire box, not clipping it to outside the border area only.
     *
     * Examples:
     * box-shadow: #ffffff80 4px 4px 8px 0px; // outer
     * box-shadow: fill #ffffff80 4px 4px 8px 0px; // outer, filled
     * box-shadow: inset #333333b0 0px 0px 8px 12px; // inner
     */
    boxShadow: string | null;

    /**
     * Sets the brightness that applies to the panel and all it's children during composition. The value is a multiplier on the HSB brightness value.
     *
     * Example:
     * brightness: 1.5;
     */
    brightness: string | null;

    /**
     * Specifies a clip region within the panel, where contents will be clipped at render time. This clipping has no impact on layout, and is fast and supported for transitions/animations. Radialclip
     * mode takes a center point, start angle and angular width of the revealed sector.
     *
     * Example:
     * clip: rect( 10%, 90%, 90%, 10% );clip: radial( 50% %50, 0deg, 90deg );
     */
    clip: string | null;

    /**
     * Sets the foreground fill color/gradient/combination for a panel.  This color is the color used to render text within the panel.
     *
     * Examples:
     * color: #FFFFFFFF;
     * color: gradient( linear, 0% 0%, 0% 100%, from( #cbcbcbff ), to( #a0a0a0a0 ) );
     */
    color: string | null;

    /**
     * Specifies where to point the arrow of a context menu at on this panel. The first value controls how the arrow is positioned horizontally when the context menu is to the top or bottom of the
     * panel, and the second value controls how the arrow is positioned vertically when the context menu is to the left or right of the panel. Default is '50% 50%'.
     *
     * Example:
     * context-menu-arrow-position: 25% 50%;
     */
    contextMenuArrowPosition: string | null;

    /**
     * Specifies where to position the body of a context menu relative to this panel. The first value controls how the body is aligned horizontally when the context menu is to the top or bottom of
     * the panel, and the second value controls how the body is aligned vertically when the context menu is to the left or right of the panel. 0% means left/top aligned, 50% means center/middle
     * aligned, and 100% means right/bottom aligned. Default is '0% 0%'.
     *
     * Example:
     * context-menu-body-position: 50% 100%;
     */
    contextMenuBodyPosition: string | null;

    /**
     * Specifies where to position a context menu relative to this panel. Valid options include 'left', 'top', 'right', and 'bottom'. List up to 4 positions to determine the order that positions are
     * tried if the context menu doesn't fully fit on screen. Default is 'right left bottom top'. If less than 4 positions are specified, the context menu first tries the opposite of the specified
     * position along the same axis before switching to the other axis.
     *
     * Examples:
     * context-menu-position: bottom;
     * context-menu-position: left bottom;
     */
    contextMenuPosition: string | null;

    /**
     * Sets the contrast that applies to the panel and all it's children during composition.
     *
     * Example:
     * contrast: 1.5;
     */
    contrast: string | null;

    /**
     * 子成员自动排列
     */
    flowChildren: VCSSDirection | `${VCSSDirection}-wrap`;

    /** 忽略父级flow样式 */
    ignoreParentFlow: boolean;

    font: string | null;

    /** 字体文件
     * Specifies the font face to use.
     *
     * Examples:
     * font-family: Arial;
     * font-family: "Comic Sans MS";
     */
    fontFamily: DefaultFont | string

    /**
     * Specifies the target font face height in pixels.
     *
     * Example:
     * font-size: 12;
     */
    fontSize: string | null;

    /**
     * Specifies the font style to use. Supported values are normal, and italic
     *
     * Example:
     * font-style: normal;
     */
    fontStyle: 'noraml' | 'italic' | null;

    /**
     * Specifies the font weight to use. Supported values are light, thin, normal, medium, bold, and black.
     *
     * Examples:
     * font-weight: normal;
     * font-weight: bold;
     * font-weight: thin;
     */
    fontWeight: 'light' | 'thin' | 'normal' | 'medium' | 'bold' | 'black' | null;

    /** 板子的高度
     * Sets the height for this panel. Possible values:
     * "fit-children" - Panel size is set to the required size of all children (default)
     * <pixels> - Any fixed pixel value (ex: "100px")
     * <percentage> - Percentage of parent height (ex: "100%")
     * "fill-parent-flow( <weight> )" - Fills to remaining parent width. If multiple children are set to this value, weight is used to determine final height. For example, if three children are set
     * to fill-parent-flow of 1.0 and the parent is 300px tall, each child will be 100px tall. (ex: "fill-parent-flow( 1.0 )" )
     * "width-percentage( <percentage> )" - Percentage of the panel's width, which allows you to enforce a particular aspect ratio.  The width cannot also be height-percentage.
     */
    height: 'fit-children' | VCSSPixelsString | VCSSPercentString | `width-percentage(${VCSSPercentString})` | `fill-parent-flow(${number})`;

    /** 垂直居中 */
    horizontalAlign: VCSSHorizontalAlign;

    /**
     * Sets the hue rotation to apply to the panel and all it's children during composition. Default of 0.0 means no adjustment, domain is in degrees.
     *
     * Example:
     * hue-rotation: 180deg;
     */
    hueRotation: string | null;

    /**
     * Sets letter-spacing for text in a string. Possible values:
     * normal - no manual spacing
     * <pixels> - Any fixed pixel value (ex: "1px")
     */
    letterSpacing: string | null;

    /**
     * Specifies the line height (distance between top edge of line above and line below) to use for text.  By default this is unset and a value that matches the font-size reasonably will be used
     * automatically.
     *
     * Example:
     * line-height: 20px;
     */
    lineHeight: string | null;

    margin: string | null;
    marginBottom: string | null;
    marginLeft: string | null;
    marginRight: string | null;
    marginTop: string | null;

    minHeight: string | null;
    maxHeight: string | null;

    minWidth: string | null;
    maxWidth: string | null;

    /**
     * Sets the opacity or amount of transparency applied to the panel and all it's children during composition. Default of 1.0 means fully opaque, 0.0 means fully transparent.
     *
     * Example:
     * opacity: 0.8;
     */
    opacity: string | null;

    /**
     * Applies an image as an opacity mask that stretches to the panel bounds and fades out it's content based on the alpha channel. The second float value is an optional opacity value for the mask
     * itself, the image won't interpolate/cross-fade, but you can animate the opacity to fade the mask in/out. The -scroll-up, -scroll-down, and -scroll-up-down varients override the mask and apply
     * only when the various vertical scroll scenarios affect the panel based on the overflow property.
     *
     * Examples:
     * opacity-mask: url( "file://{images}/upper_row_mask.tga" );
     * opacity-mask: url( "file://{images}/upper_row_mask.tga" ) 0.5;
     * opacity-mask-scroll-up: url( "file://{images}/upper_row_mask_up.tga" ) 0.5;
     * opacity-mask-scroll-down: url( "file://{images}/upper_row_mask_down.tga" ) 0.5;
     * opacity-mask-scroll-up-down: url( "file://{images}/upper_row_mask_up_down.tga" ) 0.5;
     */
    opacityMask: string | null;
    opacityMaskScrollDown: string | null;
    opacityMaskScrollUp: string | null;
    opacityMaskScrollUpDown: string | null;


    /**
      * 指定如何处理溢出面板可用空间的内容。 可能的值：
      * "squish" - 如果需要，孩子会被压扁以适应面板的边界（默认）
      * "clip"   - 孩子们保持他们想要的大小，但他们的内容被剪掉了
      * "scroll" - 孩子们保持他们想要的大小，并且一个滚动条被添加到这个面板
     *
     * 例子:
     * overflow: squish squish; // 在水平和垂直方向挤压内容
     * overflow: squish scroll; // 在 Y 方向滚动内容
     */
    overflow: VCSSOverFlow | `${VCSSOverFlow} ${VCSSOverFlow}`;

    padding: string | null;
    paddingBottom: string | null;
    paddingLeft: string | null;
    paddingRight: string | null;
    paddingTop: string | null;

    /**
     * Sets the perspective depth space available for children of the panel.  Default of 1000 would mean that children at 1000px zpos are right at the viewers eye, -1000px are just out of view
     * distance faded to nothing.
     *
     * Example:
     * perspective: 1000;
     */
    perspective: string | null;
    /**
     * Sets the perspective origin which will be used when transforming children of this panel.  This can be thought of as the camera x/y position relative to the panel.
     *
     * Example:
     * perspective-origin: 50% 50%;
     */
    perspectiveOrigin: string | null;

    /**
     * Sets the x, y, z position for a panel. Must not be in a flowing layout.
     *
     * Example:
     * position: 3% 20px 0px;
     */
    position: string | null;

    /**
     * Sets 2 dimensional rotation degrees that apply to the quad for this panel prior to 3 dimensional transforms. This rotation applies without perspective and leaves the panel centered at the same
     * spot as it started.
     *
     * Example:
     * pre-transform-rotate2d: 45deg;
     */
    preTransformRotate2d: string | null;

    /**
     * Sets 2 dimensional X/Y scale factors that apply to the quad for this panel prior to 3 dimensional transforms. This scaling applies without perspective and leaves the panel centered at the same
     * spot as it started. Default of 1.0 means no scaling, 0.5 would be half size.
     *
     * Examples:
     * pre-transform-scale2d: 0.8
     * pre-transform-scale2d: 0.4, 0.6
     */
    preTransformScale2d: string | null;

    /**
     * Sets the amount of saturation to apply to the panel and all it's children during composition.  Default of 1.0 means no adjustment, 0.0 means fully desaturated to gray scale, greater than 1.0
     * means over-saturation.
     *
     * Example:
     * saturation: 0.4;
     */
    saturation: string | null;

    /**
     * Specifies a sound name to play when this selector is applied.
     *
     * Example:
     * sound: "whoosh_in";
     */
    sound: string | null;

    /**
     * Specifies a sound name to play when this selector is removed.
     *
     * Example:
     * sound-out: "whoosh_out";
     */
    soundOut: string | null;

    /**
     * Specifies the text alignment for text within this panel, defaults to left.
     *
     * Examples:
     * text-align: left;
     * text-align: right;
     * text-align: center;
     */
    textAlign: VCSSHorizontalAlign;

    /**
     * Specifies the decoration for text within this panel, defaults to none. Possible values: none, underline, line-through.
     *
     * Example:
     * text-decoration: underline;
     */
    textDecoration: 'none' | 'underline' | 'line-through' | null;

    /**
     * Controls truncation of text that doesn't fit in a panel.  "clip" means to simply truncate (on char boundaries), "ellipsis" means to end with '...', and "shrink" means to a
     * We default to ellipsis, which is contrary to the normal CSS spec.
     *
     * Examples:
     * text-overflow: ellipsis;
     * text-overflow: clip;
     * text-overflow: shrink;
     *
     */
    textOverflow: 'ellipsis' | 'clip' | 'shrink' | null;

    /**
     * Specifies text shadows.  The shadow shape will match the text the panel can generate,and this is only meaningful for labels.  Syntax takes horizontal offset pixels, vertical offset pixels,
     * blur radius pixels, strength, and then shadow color.
     *
     * Example:
     * text-shadow: 2px 2px 8px 3.0 #333333b0;
     */
    textShadow: string | null;

    /**
     * Specifies the transform for text within this panel, defaults to none. Possible values: none, uppercase, lowercase.
     *
     * Example:
     * text-transform: uppercase;
     */
    textTransform: 'none' | 'uppercase' | 'lowercase' | null;

    /**
     * Controls texture sampling mode for the panel. Set to alpha-only to use the textures alpha data across all 3 color channels.
     *
     * Examples:
     * texture-sampling: normal;
     * texture-sampling: alpha-only;
     */
    textureSampling: 'normal' | 'alpha-only' | null;

    /**
     * Specifies where to point the arrow of a tooltip at on this panel. The first value controls how the arrow is positioned horizontally when the tooltip is to the top or bottom of the panel, and
     * the second value controls how the arrow is positioned vertically when the tooltip is to the left or right of the panel. Default is '50% 50%'.
     *
     * Example:
     * tooltip-arrow-position: 25% 50%;
     */
    tooltipArrowPosition: string | null;

    /**
     * Specifies where to position the body of a tooltip relative to this panel. The first value controls how the body is aligned horizontally when the tooltip is to the top or bottom of the panel,
     * and the second value controls how the body is aligned vertically when the tooltip is to the left or right of the panel. 0% means left/top aligned, 50% means center/middle aligned, and 100%
     * means right/bottom aligned. Default is '0% 0%'.
     *
     * Example:
     * tooltip-body-position: 50% 100%;
     */
    tooltipBodyPosition: string | null;

    /**
     * Specifies where to position a tooltip relative to this panel. Valid options include 'left', 'top', 'right', and 'bottom'. List up to 4 positions to determine the order that positions are tried
     * if the tooltip doesn't fully fit on screen. Default is 'right left bottom top'. If less than 4 positions are specified, the tooltip first tries the opposite of the specified position along the
     * same axis before switching to the other axis.
     *
     * Examples:
     * tooltip-position: bottom;
     * tooltip-position: left bottom;
     */
    tooltipPosition: string | null;

    /**
     * Sets the transforms to apply to the panel in 2d or 3d space.  You can combine various transforms (comma separated) and they will be applied in order to create a 4x4 3d transform matrix.
     * The possible operations are: translate3d( x, y, z ), translatex( x ), translatey( y ), translatez( z ), scale3d( x, y, z), rotate3d( x, y, z ), rotatex( x ), rotatey( y ), rotatez( z ).
     *
     * Examples:
     * transform: translate3d( -100px, -100px, 0px );
     * transform: rotateZ( -32deg ) rotateX( 30deg ) translate3d( 125px, 520px, 230px );
     */
    transform: string | null;

    /**
     * Sets the transform origin about which transforms will be applied.  Default is 50% 50% on the panel so a rotation/scale is centered.
     *
     * Example:
     * transform-origin: 50% 50%
     */
    transformOrigin: string | null;

    /**
     * Specifies which properties should transition smoothly to new values if a class/pseudo class changes the styles.  Also specifies duration, timing function, and delay.
     * Valid timing functions are: ease, ease-in, ease-out, ease-in-out, linear.
     *
     * Example:
     * transition: position 2.0s ease-in-out 0.0s, perspective-origin 1.2s ease-in-out 0.8s;
     */
    transition: string | null;

    /**
     * Specifies the delay in seconds to use for transition properties on this panel, if more than one comma delimited value is specified then the values are applied to each property specified in
     * 'transition-property' in order.  If only one value is specified then it applies to all the properties specified in transition-property.
     *
     * Examples:
     * transition-delay: 0.0s;
     * transition-delay: 0.0s, 1.2s;
     */
    transitionDelay: string | null;

    /**
     * Specifies the durating in seconds to use for transition properties on this panel, if more than one comma delimited value is specified then the values are applied to each property specified in
     * 'transition-property' in order.  If only one value is specified then it applies to all the properties specified in transition-property.
     *
     * Examples:
     * transition-duration: 2.0s;
     * transition-duration: 2.0s, 1.2s, 1.2s, 4.0s, 2.0s;
     */
    transitionDuration: string | null;

    /**
     * Specifies which properties should transition smoothly to new values if a class/pseudo class changes the styles.
     *
     * Examples:
     * transition: position, transform, background-color;
     */
    transitionProperty: string | null;

    /**
     * Specifies the timing function to use for transition properties on this panel, if more than one comma delimited value is specified then the values are applied to each property specified in
     * 'transition-property' in order.  If only one value is specified then it applies to all the properties specified in transition-property. Valid timing functions are: ease, ease-in, ease-out,
     * ease-in-out, linear.
     *
     * Examples:
     * transition-timing-function: ease-in-out;
     * transition-timing-function: ease-in-out, linear;
     * transition-timing-function: cubic-bezier( 0.785, 0.385, 0.555, 1.505 );
     */
    transitionTimingFunction: string | null;

    /**
     * Specifies a scale to apply to this panel's layout and all descendants. This scale happens at the layout level ratherthan the bitmap level, so things like text will increase their font size
     * rather than just bitmap scaling.
     *
     * Examples:
     * ui-scale: 150%; // 150% scaling for X, Y, and Z.
     * ui-scale: 50% 100% 150%; // 50% scaling for X, 100% for Y. 150% for Z.
     */
    uiScale: string | null;

    /**
     * Specifies a scale to apply to this panel's layout and all descendants. This scale happens at the layout level ratherthan the bitmap level, so things like text will increase their font size
     * rather than just bitmap scaling.
     *
     * Examples:
     * ui-scale: 150%; // 150% scaling for X, Y, and Z.
     * ui-scale: 50% 100% 150%; // 50% scaling for X, 100% for Y. 150% for Z.
     */
    uiScaleX: string | null;

    /**
     * Specifies a scale to apply to this panel's layout and all descendants. This scale happens at the layout level ratherthan the bitmap level, so things like text will increase their font size
     * rather than just bitmap scaling.
     *
     * Examples:
     * ui-scale: 150%; // 150% scaling for X, Y, and Z.
     * ui-scale: 50% 100% 150%; // 50% scaling for X, 100% for Y. 150% for Z.
     */
    uiScaleY: string | null;

    /**
     * Specifies a scale to apply to this panel's layout and all descendants. This scale happens at the layout level ratherthan the bitmap level, so things like text will increase their font size
     * rather than just bitmap scaling.
     *
     * Examples:
     * ui-scale: 150%; // 150% scaling for X, Y, and Z.
     * ui-scale: 50% 100% 150%; // 50% scaling for X, 100% for Y. 150% for Z.
     */
    uiScaleZ: string | null;

    /** 水平居中 */
    verticalAlign: VCSSVerticalAlign;

    /**
     * Controls if the panel is visible and is included in panel layout. Possible values:
     * "visible" - panel is visible and included in layout (default)
     * "collapse" - panel is invisible and not included in layout
     */
    visibility: 'visible' | 'collapse' | null;

    /**
     * Specifies a 'wash' color, which means a color that will be blended over the panel and all it's children at composition time, tinting them.  The alpha value of the color determines the
     * intensity of the tinting.
     *
     * Example:
     * wash-color: #39b0d325;
     */
    washColor: string | null;

    /**
     * Controls white-space wrapping on rendered text.  "normal" means wrap on whitespace, "nowrap" means do no wrapping at all.
     *
     * Examples:
     * white-space: normal;
     * white-space: nowrap;
     */
    whiteSpace: 'normal' | 'nowrap' | null;

    /** 板子的宽度
     * Sets the width for this panel. Possible values:
     * "fit-children" - Panel size is set to the required size of all children (default)
     * <pixels> - Any fixed pixel value (ex: "100px")
     * <percentage> - Percentage of parent width (ex: "100%")
     * "fill-parent-flow( <weight> )" - Fills to remaining parent width. If multiple children are set to this value, weight is used to determine final width. For example, if three children are set
     * to fill-parent-flow of 1.0 and the parent is 300px wide, each child will be 100px wide. (ex: "fill-parent-flow( 1.0 )" )
     * "height-percentage( <percentage> )" - Percentage of the panel's height, which allows you to enforce a particular aspect ratio.  The height cannot also be width-percentage.
     */
    width: 'fit-children' | VCSSPixelsString | VCSSPercentString | `height-percentage(${VCSSPercentString})` | `fill-parent-flow(${number})`;

    /**
     * Sets the x, y, z position for a panel. Must not be in a flowing layout.
     *
     * Example:
     * position: 3% 20px 0px;
     */
    x: string | null;

    /**
     * Sets the x, y, z position for a panel. Must not be in a flowing layout.
     *
     * Example:
     * position: 3% 20px 0px;
     */
    y: string | null;

    /**
     * Sets the x, y, z position for a panel. Must not be in a flowing layout.
     *
     * Example:
     * position: 3% 20px 0px;
     */
    z: string | null;

    /**
     * Sets the z-index for a panel, panels will be sorted and painted in order within a parent panel.
     * The sorting first sorts by the z-pos computed from position and transforms, then if panels have matching zpos zindex is used. z-index is different than z-pos in that it doesn't affect rendering perspective, just paint/hit-test ordering.
     * The default z-index value is 0, and any floating point value is accepted.
     *
     * Example:
     * z-index: 1;
     */

    zIndex: number | null;
}
