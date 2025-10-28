/**
 * ExtJS Classic 7.9.0.35
 * Typed by Odin Songe Thorsen, 2025.
 *
 *   Only verified against this version.
 *   Later Ext releases may add, change or remove configs.
 */
declare namespace Ext {
    function create<K extends string>(
        path: K,
        config?:  K extends keyof ExtTypeMap
            ? ExtTypeMap[K]
            : Record<string, any>
    ): any;

    /**
     * 🚫 Invalid overload: XTemplate must be created via `new Ext.XTemplate()`
     * instead of `Ext.create('Ext.XTemplate')`.
     */
    function create(
        path: 'Ext.XTemplate',
        ...args: never
    ): never;

    /** Defines a new Ext component at the given path. */
    function define<P extends string, E extends string>(
        path: P,
        config: E extends keyof ExtTypeMap
            ? { extend: E } & ExtTypeMap[E]
            : Record<string, any>
    ): void;
    
    class XTemplate {
        /**
         * Creates an advanced template supporting `<tpl>` blocks,
         * conditionals (`<tpl if=...>`) and iteration (`<tpl for=...>`).
         *
         * Example:
         * ```js
         * const tpl = new Ext.XTemplate(
         *   '<ul>',
         *   '  <tpl for=".">',
         *   '    <li>{name} — {age} years old</li>',
         *   '  </tpl>',
         *   '</ul>'
         * );
         * const html = tpl.apply([
         *   { name: 'Alice', age: 30 },
         *   { name: 'Bob', age: 27 }
         * ]);
         * ```
         */
        constructor(...html: string[]);

        /** Renders the template with the given data and returns the resulting HTML string. */
        apply(data: any): string;

        /** Low-level render helper that pushes output into an existing array (rarely used). */
        applyOut(data: any, out: any[]): any[];

        /**
         * Pre-compiles the template into an optimized JavaScript function
         * for faster repeated rendering.
         *
         * Recommended when reusing the same template many times:
         * ```js
         * const tpl = new Ext.XTemplate('<div>{name}</div>').compile();
         * for (let i = 0; i < 1000; i++) {
         *   tpl.apply({ name: 'User ' + i });
         * }
         * ```
         * Many Ext components that have a `tpl` property call
         * `compile()` automatically.
         */
        compile(): this;

        /** Renders and appends output HTML to the specified element or selector. */
        append(target: string | HTMLElement, data: any): void;

        /** Renders and replaces the contents of the specified element or selector. */
        overwrite(target: string | HTMLElement, data: any): void;
    }


}
