interface ClassDirectives {
    /** Name of the parent class to extend from. */
    extend?: string;

    /** Classes that must be loaded before this one. */
    requires?: string | string[];

    /** Classes that may be loaded after this one (optional dependencies). */
    uses?: string | string[];

    /** Mixins to merge into this class (by name or object). */
    mixins?: Record<string, string> | string[];

    /** Shorthand alias(es) for lookup, e.g. "widget.window". */
    alias?: string | string[];

    /** Component alias (xtype) for instantiation by xtype name. */
    xtype?: string;

    /** Static members that belong directly to the class. */
    statics?: Record<string, any>;

    /** Static members inherited by subclasses. */
    inheritableStatics?: Record<string, any>;

    /** Members marked as private (non-inheritable and hidden). */
    privates?: Record<string, any>;

    /** Standard configuration block that auto-generates getters/setters. */
    config?: Record<string, any>;

    /** Config values cached on the prototype for performance. */
    cachedConfig?: Record<string, any>;

    /** Conditional configs applied by platform (desktop, phone, etc.). */
    platformConfig?: Record<string, any>;

    /** Conditional configs applied by responsive rules (media queries). */
    responsiveConfig?: Record<string, any>;

    /** Alternative class names for backward compatibility. */
    alternateClassName?: string | string[];

    /** Marks this class as a singleton; only one instance will exist. */
    singleton?: boolean;

    /** Declares this class as an override of another existing class. */
    override?: string;

    /** Inline overrides applied to specific classes. */
    overrides?: Record<string, any>;

    /** Developer hooks for debugging or instrumentation. */
    debugHooks?: Record<string, Function>;

    /** Marks members or APIs as deprecated with optional metadata. */
    deprecated?: Record<string, any>;
}