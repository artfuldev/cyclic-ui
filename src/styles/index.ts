export interface Style {
  // Sets or returns the alignment between the lines inside a flexible container when the items do not use all available space
  alignContent?: string;
  // Sets or returns the alignment for items inside a flexible container
  alignItems?: string;
  // Sets or returns the alignment for selected items inside a flexible container
  alignSelf?: string;
  // A shorthand property for all the animation properties below, except the animationPlayState property
  animation?: string;
  // Sets or returns when the animation will start
  animationDelay?: string;
  // Sets or returns whether or not the animation should play in reverse on alternate cycles
  animationDirection?: string;
  // Sets or returns how many seconds or milliseconds an animation takes to complete one cycle
  animationDuration?: string;
  // Sets or returns what values are applied by the animation outside the time it is executing
  animationFillMode?: string;
  // Sets or returns the number of times an animation should be played
  animationIterationCount?: string;
  // Sets or returns a name for the @keyframes animation
  animationName?: string;
  // Sets or returns the speed curve of the animation
  animationTimingFunction?: string;
  // Sets or returns whether the animation is running or paused
  animationPlayState?: string;
  // Sets or returns all the background properties in one declaration
  background?: string;
  // Sets or returns whether a background-image is fixed or scrolls with the page
  backgroundAttachment?: string;
  // Sets or returns the background-color of an element
  backgroundColor?: string;
  // Sets or returns the background-image for an element
  backgroundImage?: string;
  // Sets or returns the starting position of a background-image
  backgroundPosition?: string;
  // Sets or returns how to repeat (tile) a background-image
  backgroundRepeat?: string;
  // Sets or returns the painting area of the background
  backgroundClip?: string;
  // Sets or returns the positioning area of the background images
  backgroundOrigin?: string;
  // Sets or returns the size of the background image
  backgroundSize?: string;
  // Sets or returns whether or not an element should be visible when not facing the screen
  backfaceVisibility?: string;
  // Sets or returns borderWidth, borderStyle, and borderColor in one declaration
  border?: string;
  // Sets or returns all the borderBottom* properties in one declaration
  borderBottom?: string;
  // Sets or returns the color of the bottom border
  borderBottomColor?: string;
  // Sets or returns the shape of the border of the bottom-left corner
  borderBottomLeftRadius?: string;
  // Sets or returns the shape of the border of the bottom-right corner
  borderBottomRightRadius?: string;
  // Sets or returns the style of the bottom border
  borderBottomStyle?: string;
  // Sets or returns the width of the bottom border
  borderBottomWidth?: string;
  // Sets or returns whether the table border should be collapsed into a single border, or not
  borderCollapse?: string;
  // Sets or returns the color of an element's border (can have up to four values)
  borderColor?: string;
  // A shorthand property for setting or returning all the borderImage* properties
  borderImage?: string;
  // Sets or returns the amount by which the border image area extends beyond the border box
  borderImageOutset?: string;
  // Sets or returns whether the image-border should be repeated, rounded or stretched
  borderImageRepeat?: string;
  // Sets or returns the inward offsets of the image-border
  borderImageSlice?: string;
  // Sets or returns the image to be used as a border
  borderImageSource?: string;
  // Sets or returns the widths of the image-border
  borderImageWidth?: string;
  // Sets or returns all the borderLeft* properties in one declaration
  borderLeft?: string;
  // Sets or returns the color of the left border
  borderLeftColor?: string;
  // Sets or returns the style of the left border
  borderLeftStyle?: string;
  // Sets or returns the width of the left border
  borderLeftWidth?: string;
  // A shorthand property for setting or returning all the four border*Radius properties
  borderRadius?: string;
  // Sets or returns all the borderRight* properties in one declaration
  borderRight?: string;
  // Sets or returns the color of the right border
  borderRightColor?: string;
  // Sets or returns the style of the right border
  borderRightStyle?: string;
  // Sets or returns the width of the right border
  borderRightWidth?: string;
  // Sets or returns the space between cells in a table
  borderSpacing?: string;
  // Sets or returns the style of an element's border (can have up to four values)
  borderStyle?: string;
  // Sets or returns all the borderTop* properties in one declaration
  borderTop?: string;
  // Sets or returns the color of the top border
  borderTopColor?: string;
  // Sets or returns the shape of the border of the top-left corner
  borderTopLeftRadius?: string;
  // Sets or returns the shape of the border of the top-right corner
  borderTopRightRadius?: string;
  // Sets or returns the style of the top border
  borderTopStyle?: string;
  // Sets or returns the width of the top border
  borderTopWidth?: string;
  // Sets or returns the width of an element's border (can have up to four values)
  borderWidth?: string;
  // Sets or returns the bottom position of a positioned element
  bottom?: string;
  // Sets or returns the behaviour of the background and border of an element at page-break, or, for in-line elements, at line-break.
  boxDecorationBreak?: string;
  // Attaches one or more drop-shadows to the box
  boxShadow?: string;
  // Allows you to define certain elements to fit an area in a certain way
  boxSizing?: string;
  // Sets or returns the position of the table caption
  captionSide?: string;
  // Sets or returns the position of the element relative to floating objects
  clear?: string;
  // Sets or returns which part of a positioned element is visible
  clip?: string;
  // Sets or returns the color of the text
  color?: string;
  // Sets or returns the number of columns an element should be divided into
  columnCount?: string;
  // Sets or returns how to fill columns
  columnFill?: string;
  // Sets or returns the gap between the columns
  columnGap?: string;
  // A shorthand property for setting or returning all the columnRule* properties
  columnRule?: string;
  // Sets or returns the color of the rule between columns
  columnRuleColor?: string;
  // Sets or returns the style of the rule between columns
  columnRuleStyle?: string;
  // Sets or returns the width of the rule between columns
  columnRuleWidth?: string;
  // A shorthand property for setting or returning columnWidth and columnCount
  columns?: string;
  // Sets or returns how many columns an element should span across
  columnSpan?: string;
  // Sets or returns the width of the columns
  columnWidth?: string;
  // Used with the ?:before and ?:after pseudo-elements, to insert generated content
  content?: string;
  // Increments one or more counters
  counterIncrement?: string;
  // Creates or resets one or more counters
  counterReset?: string;
  // Sets or returns the type of cursor to display for the mouse pointer
  cursor?: string;
  // Sets or returns the text direction
  direction?: string;
  // Sets or returns an element's display type
  display?: string;
  // Sets or returns whether to show the border and background of empty cells, or not
  emptyCells?: string;
  // Sets or returns image filters (visual effects, like blur and saturation)
  filter?: string;
  // Sets or returns the length of the item, relative to the rest
  flex?: string;
  // Sets or returns the initial length of a flexible item
  flexBasis?: string;
  // Sets or returns the direction of the flexible items
  flexDirection?: string;
  // A shorthand property for the flexDirection and the flexWrap properties
  flexFlow?: string;
  // Sets or returns how much the item will grow relative to the rest
  flexGrow?: string;
  // Sets or returns how the item will shrink relative to the rest
  flexShrink?: string;
  // Sets or returns whether the flexible items should wrap or not
  flexWrap?: string;
  // Sets or returns the horizontal alignment of an element
  cssFloat?: string;
  // Sets or returns fontStyle, fontVariant, fontWeight, fontSize, lineHeight, and fontFamily in one declaration
  font?: string;
  // Sets or returns the font family for text
  fontFamily?: string;
  // Sets or returns the font size of the text
  fontSize?: string;
  // Sets or returns whether the style of the font is normal, italic or oblique
  fontStyle?: string;
  // Sets or returns whether the font should be displayed in small capital letters
  fontVariant?: string;
  // Sets or returns the boldness of the font
  fontWeight?: string;
  // Preserves the readability of text when font fallback occurs
  fontSizeAdjust?: string;
  // Selects a normal, condensed, or expanded face from a font family
  fontStretch?: string;
  // Specifies whether a punctuation character may be placed outside the line box
  hangingPunctuation?: string;
  // Sets or returns the height of an element
  height?: string;
  // Sets how to split words to improve the layout of paragraphs
  hyphens?: string;
  // Provides the author the ability to style an element with an iconic equivalent
  icon?: string;
  // Specifies a rotation in the right or clockwise direction that a user agent applies to an image
  imageOrientation?: string;
  // Sets or returns the alignment between the items inside a flexible container when the items do not use all available space.
  justifyContent?: string;
  // Sets or returns the left position of a positioned element
  left?: string;
  // Sets or returns the space between characters in a text
  letterSpacing?: string;
  // Sets or returns the distance between lines in a text
  lineHeight?: string;
  // Sets or returns listStyleImage, listStylePosition, and listStyleType in one declaration
  listStyle?: string;
  // Sets or returns an image as the list-item marker
  listStyleImage?: string;
  // Sets or returns the position of the list-item marker
  listStylePosition?: string;
  // Sets or returns the list-item marker type
  listStyleType?: string;
  // Sets or returns the margins of an element (can have up to four values)
  margin?: string;
  // Sets or returns the bottom margin of an element
  marginBottom?: string;
  // Sets or returns the left margin of an element
  marginLeft?: string;
  // Sets or returns the right margin of an element
  marginRight?: string;
  // Sets or returns the top margin of an element
  marginTop?: string;
  // Sets or returns the maximum height of an element
  maxHeight?: string;
  // Sets or returns the maximum width of an element
  maxWidth?: string;
  // Sets or returns the minimum height of an element
  minHeight?: string;
  // Sets or returns the minimum width of an element
  minWidth?: string;
  // Sets or returns where to navigate when using the arrow-down navigation key
  navDown?: string;
  // Sets or returns the tabbing order for an element
  navIndex?: string;
  // Sets or returns where to navigate when using the arrow-left navigation key
  navLeft?: string;
  // Sets or returns where to navigate when using the arrow-right navigation key
  navRight?: string;
  // Sets or returns where to navigate when using the arrow-up navigation key
  navUp?: string;
  // Sets or returns the opacity level for an element
  opacity?: string;
  // Sets or returns the order of the flexible item, relative to the rest
  order?: string;
  // Sets or returns the minimum number of lines for an element that must be left at the bottom of a page when a page break occurs inside an element
  orphans?: string;
  // Sets or returns all the outline properties in one declaration
  outline?: string;
  // Sets or returns the color of the outline around a element
  outlineColor?: string;
  // Offsets an outline, and draws it beyond the border edge
  outlineOffset?: string;
  // Sets or returns the style of the outline around an element
  outlineStyle?: string;
  // Sets or returns the width of the outline around an element
  outlineWidth?: string;
  // Sets or returns what to do with content that renders outside the element box
  overflow?: string;
  // Specifies what to do with the left/right edges of the content, if it overflows the element's content area
  overflowX?: string;
  // Specifies what to do with the top/bottom edges of the content, if it overflows the element's content area
  overflowY?: string;
  // Sets or returns the padding of an element (can have up to four values)
  padding?: string;
  // Sets or returns the bottom padding of an element
  paddingBottom?: string;
  // Sets or returns the left padding of an element
  paddingLeft?: string;
  // Sets or returns the right padding of an element
  paddingRight?: string;
  // Sets or returns the top padding of an element
  paddingTop?: string;
  // Sets or returns the page-break behavior after an element
  pageBreakAfter?: string;
  // Sets or returns the page-break behavior before an element
  pageBreakBefore?: string;
  // Sets or returns the page-break behavior inside an element
  pageBreakInside?: string;
  // Sets or returns the perspective on how 3D elements are viewed
  perspective?: string;
  // Sets or returns the bottom position of 3D elements
  perspectiveOrigin?: string;
  // Sets or returns the type of positioning method used for an element (static, relative, absolute or fixed)
  position?: string;
  // Sets or returns the type of quotation marks for embedded quotations
  quotes?: string;
  // Sets or returns whether or not an element is resizable by the user
  resize?: string;
  // Sets or returns the right position of a positioned element
  right?: string;
  // Sets or returns the way to lay out table cells, rows, and columns
  tableLayout?: string;
  // Sets or returns the length of the tab-character
  tabSize?: string;
  // Sets or returns the horizontal alignment of text
  textAlign?: string;
  // Sets or returns how the last line of a block or a line right before a forced line break is aligned when text-align is ;;justify;;
  textAlignLast?: string;
  // Sets or returns the decoration of a text
  textDecoration?: string;
  // Sets or returns the color of the text-decoration
  textDecorationColor?: string;
  // Sets or returns the type of line in a text-decoration
  textDecorationLine?: string;
  // Sets or returns the style of the line in a text decoration
  textDecorationStyle?: string;
  // Sets or returns the indentation of the first line of text
  textIndent?: string;
  // Sets or returns the justification method used when text-align is ;;justify;;
  textJustify?: string;
  // Sets or returns what should happen when text overflows the containing element
  textOverflow?: string;
  // Sets or returns the shadow effect of a text
  textShadow?: string;
  // Sets or returns the capitalization of a text
  textTransform?: string;
  // Sets or returns the top position of a positioned element
  top?: string;
  // Applies a 2D or 3D transformation to an element
  transform?: string;
  // Sets or returns the position of transformed elements
  transformOrigin?: string;
  // Sets or returns how nested elements are rendered in 3D space
  transformStyle?: string;
  // A shorthand property for setting or returning the four transition properties
  transition?: string;
  // Sets or returns the CSS property that the transition effect is for
  transitionProperty?: string;
  // Sets or returns how many seconds or milliseconds a transition effect takes to complete
  transitionDuration?: string;
  // Sets or returns the speed curve of the transition effect
  transitionTimingFunction?: string;
  // Sets or returns when the transition effect will start
  transitionDelay?: string;
  // Sets or returns whether the text should be overridden to support multiple languages in the same document
  unicodeBidi?: string;
  // Sets or returns the vertical alignment of the content in an element
  verticalAlign?: string;
  // Sets or returns whether an element should be visible
  visibility?: string;
  // Sets or returns how to handle tabs, line breaks and whitespace in a text
  whiteSpace?: string;
  // Sets or returns the width of an element
  width?: string;
  // Sets or returns line breaking rules for non-CJK scripts
  wordBreak?: string;
  // Sets or returns the spacing between words in a text
  wordSpacing?: string;
  // Allows long, unbreakable words to be broken and wrap to the next line
  wordWrap?: string;
  // Sets or returns the minimum number of lines for an element that must be visible at the top of a page
  widows?: string;
  // Sets or returns the stack order of a positioned element
  zIndex?: string;
}
