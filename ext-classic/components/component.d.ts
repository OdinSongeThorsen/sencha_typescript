interface ComponentConfig extends ClassDirectives{
    // ----- Layout & sizing -----
    width?: number | string;
    height?: number | string;
    minWidth?: number;
    minHeight?: number;
    maxWidth?: number;
    maxHeight?: number;
    shrinkWrap?: boolean | number;
    columnWidth?: number;
    margin?: number | string;
    padding?: number | string;
    border?: number | string | boolean;
    frame?: boolean;

    // ----- Positioning -----
    x?: number;
    y?: number;
    flex?: number;
    alignTarget?: string | HTMLElement | Component;
    defaultAlign?: string;
    weight?: number;

    // ----- Visibility & behavior -----
    hidden?: boolean;
    disabled?: boolean;
    autoShow?: boolean;
    autoRender?: boolean | string | HTMLElement | Element;
    floating?: boolean;
    draggable?: boolean | object;
    resizable?: boolean | object;
    toFrontOnShow?: boolean;
    constrainTo?: any;
    constraintInsets?: string | object;
    scrollable?: boolean | string | object;
    autoScroll?: boolean; // deprecated but still used
    overflowX?: 'auto' | 'scroll' | 'hidden';
    overflowY?: 'auto' | 'scroll' | 'hidden';
    maskElement?: string | null;
    maskDefaults?: object;

    // ----- Content -----
    html?: string;
    tpl?: string | string[] | any;
    data?: any;
    contentEl?: string | HTMLElement;
    autoEl?: string | object;

    // ----- Styling & appearance -----

    /** Adds class(es) to the component’s outer element for custom styling.*/
    cls?: string | string[];

    // Adds a CSS class when the mouse hovers over the component.
    overCls?: string;

    // This is set by Ext internally; do not override it manually.
    baseCls?: never;
    // This is set by Ext internally; do not override it manually.
    componentCls?: never;

    // Defines a named UI variant (e.g. "default", "primary", "toolbar").
    ui?: string;

    // Inline style(s) applied directly to the component’s root element.
    style?: string | Partial<CSSStyleDeclaration>;

    // Logical identifiers and references
    itemId?: string;
    id?: string;
    xtype?: string;
    reference?: string;

    // ----- State & identification -----
    stateful?: boolean;
    stateId?: string;
    stateEvents?: string[];
    modelValidation?: boolean;
    loader?: object;

    // ----- Interactivity -----
    listeners?: Record<string, (...args: any[]) => void>;
    controller?: string | object;
    viewModel?: string | object;

    // ----- Miscellaneous -----
    renderTo?: string | HTMLElement;
    componentLayout?: string | object;
    childEls?: Record<string, any>;
    defaultBindProperty?: string;
    touchAction?: Record<string, boolean> | null;
}

interface Component {
    show(): void;
    hide(): void;
    destroy(): void;
    enable(): void;
    disable(): void;
    setHidden(hidden: boolean): void;
    setDisabled(disabled: boolean): void;
    setLoading(load?: boolean | string | object): any;
    setPosition(x: number, y?: number, animate?: boolean | object): this;
    setSize(width?: number | string, height?: number | string): this;
    setWidth(width: number | string): this;
    setHeight(height: number | string): this;
    getId(): string;
    getEl(): HTMLElement;
    getScrollable(): any;
}