/**
 * Configuration options for {@link Ext.panel.Panel}.
 *
 * Basic rendered structure:
 * ```html
 * <div class="{cls} {overCls}">
 *   <div class="{baseCls}-bodyWrap">
 *     <header class="{baseCls}-header">{title}</header>
 *     <div class="{baseCls}-body {bodyCls}" style="{bodyStyle}">
 *       {items}
 *     </div>
 *     <footer class="{baseCls}-bbar">{bbar}</footer>
 *   </div>
 * </div>
 * ```
 *
 * Extends {@link ContainerConfig} and adds panel-specific
 * elements such as header, body, and docked toolbars.
 */
interface PanelConfig extends ContainerConfig {
    /** The text to display in the panel header. */
    title?: string;

    /** Optional header configuration or `false` to hide the header. */
    header?: boolean | Record<string, any>;

    /** Position of the header ('top', 'right', 'bottom', 'left'). */
    headerPosition?: 'top' | 'right' | 'bottom' | 'left';

    /** True to make the panel collapsible. */
    collapsible?: boolean;

    /** True to start collapsed. */
    collapsed?: boolean;

    /** Direction from which the panel should collapse. */
    collapseDirection?: 'top' | 'right' | 'bottom' | 'left';

    /** Animate panel collapse/expand. Can be boolean or duration (ms). */
    animCollapse?: boolean | number;

    /** Apply an extra CSS class to the panel body. */
    bodyCls?: string;

    /** Padding for the panel body (number or CSS shorthand). */
    bodyPadding?: number | string | boolean;

    /** Inline CSS applied to the panel body. */
    bodyStyle?: string | Partial<CSSStyleDeclaration>;

    /** True to draw a border around the panel body. */
    bodyBorder?: boolean;

    /** ARIA role for the body element. */
    bodyAriaRole?: string;

    /** Toolbar or component docked to the top. */
    tbar?: any[] | Record<string, any>;

    /** Toolbar or component docked to the bottom. */
    bbar?: any[] | Record<string, any>;

    /** Buttons to display below the body (classic layout shortcut). */
    buttons?: any[] | Record<string, any>;

    /** Footer toolbar (synonym for buttons or fbar). */
    fbar?: any[] | Record<string, any>;

    /** Alignment of buttons or fbar ('left' | 'center' | 'right'). */
    buttonAlign?: 'left' | 'center' | 'right';

    /** Docked components such as toolbars or tab bars. */
    dockedItems?: any[] | Record<string, any>;

    /** True to constrain panel within its container. */
    constrain?: boolean;

    /** True to constrain only the header. */
    constrainHeader?: boolean;

    /** True to apply a frame-style UI (bordered box). */
    frame?: boolean;

    /** True to remove default styling and margins. */
    unstyled?: boolean;

    /** Optional default dock position for docked items. */
    defaultDock?: 'top' | 'right' | 'bottom' | 'left';
}
