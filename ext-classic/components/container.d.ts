/**
 * Configuration options for {@link Ext.Container}.
 *
 * Basic rendered structure:
 * ```html
 * <div class="{cls} {overCls}">
 *   <div class="{containerCls} {layoutCls}">
 *     {items}
 *   </div>
 * </div>
 * ```
 *
 * - The **outer element** represents the container itself.
 *   - Receives `cls` (permanent class) and `overCls` (added on hover).
 * - The **inner element** is the layout target.
 *   - Receives `containerCls` and `layoutCls`.
 * - Child components (`items`) are rendered inside the inner element.
 */
interface ContainerConfig extends ComponentConfig {
    /**
     * Child components to include in this container.
     * Accepts an array of configs or component instances.
     */
    items?: any[]; // later: (ComponentConfig | Component)[]

    /**
     * The layout type or configuration object controlling child arrangement.
     * Examples: 'hbox', 'vbox', or { type: 'card', deferredRender: false }.
     */
    layout?: string | object;

    /**
     * 🚫 `defaults` is deliberately disabled — setting shared configs here
     * hides behavior and causes subtle bugs when copying code.
     *
     * Configure children explicitly instead.
     */
    defaults?: never;

    /** Components docked to container edges (e.g. toolbars or buttons). */
    dockedItems?: any[];

    /** True to automatically destroy child items when this container is destroyed. */
    autoDestroy?: boolean;

    /** True to automatically show all child items when rendered. */
    autoShow?: boolean;

    /** 
     * I think this is used for themes or something
     * If you don't know what this is use containerCls instead. */
    layoutCls?: string;

    /** CSS class added to this container’s root element in addition to `componentCls`. */
    containerCls?: string;

    /** Specifies how child items are hidden (e.g. 'display', 'visibility'). */
    hideMode?: string;
}