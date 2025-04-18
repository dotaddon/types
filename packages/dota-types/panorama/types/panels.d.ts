interface PanoramaPanelNameMap {
    Panel: Panel;
    Label: LabelPanel;

    Image: ImagePanel;
    DOTAAbilityImage: AbilityImage;
    DOTAItemImage: ItemImage;
    DOTAHeroImage: HeroImage;
    DOTACountryFlagImage: ImagePanel;
    DOTALeagueImage: LeagueImage;
    EconItemImage: ImagePanel;

    AnimatedImageStrip: ImagePanel;
    DOTAEmoticon: ImagePanel;

    Movie: MoviePanel;
    DOTAHeroMovie: HeroMovie;

    DOTAScenePanel: ScenePanel;
    DOTAParticleScenePanel: ParticleScenePanel;
    DOTAEconItem: EconItemPanel;

    ProgressBar: ProgressBar;
    CircularProgressBar: CircularProgressBar;
    ProgressBarWithMiddle: ProgressBarWithMiddle;

    DOTAUserName: UserName;
    DOTAUserRichPresence: UserName;
    DOTAAvatarImage: AvatarImage;

    Countdown: CountdownPanel;

    Button: Button;
    TextButton: TextButton;
    ToggleButton: ToggleButton;
    DOTASettingsCheckbox: ToggleButton;
    RadioButton: RadioButton;

    TextEntry: TextEntry;
    DOTAHUDShopTextEntry: TextEntry;
    NumberEntry: NumberEntry;
    Slider: SliderPanel;
    SlottedSlider: SliderPanel;

    DropDown: DropDown;
    ContextMenuScript: ContextMenuScriptPanel;

    Carousel: CarouselPanel;
    DOTAHeroSetList: CarouselPanel;
    CarouselNav: Panel;

    DOTAHUDOverlayMap: HUDOverlayMap;
    DOTAMinimap: Panel;

    HTML: HTMLPanel;
    DOTAAccountLinkHTML: HTMLPanel;
    DOTAHTMLPanel: HTMLPanel;
    DOTAStoreCustomControls: HTMLPanel;

    CustomLayoutPanel: Panel;

    TabButton: Panel
    TabContents: Panel
    /** 英雄介绍页面 */
    DOTAHeroInspect: Panel
    /** 战斗事件 */
    DOTACombatEvents: Panel
    /** 雷达图 */
    DOTASpiderGraph: Panel
    /** 属性表 */
    DOTAStatsRegion: Panel
    /** 三维表 */
    DOTAHUDStrAgiInt: Panel
    /** 快速购买 */
    DOTAQuickBuy: Panel
    /** 物品栏 */
    DOTAInventory: Panel
    /** 储藏室 */
    DOTAStash: Panel
    /** 经验圈 */
    DOTAXP: Panel
    /** 肖像画 */
    DOTAPortrait: Panel
    /** 死亡状态 */
    DOTAHUDDeathPanel: Panel
    /** BUFF栏 */
    DOTABuffList: DOTABuffListPanel
    /** 天赋树图形 */
    DOTAHudTalentDisplay: Panel
    /** 天赋树弹出 */
    DOTAStatBranch: Panel


    DOTAAbilityDetails: AbilityImage;
    DOTAAbilityList: Panel;

    DOTASettingsEnum: Panel;
    DropDownMenu: DropDown
    DOTASettingsEnumDropDown: DropDown;

    RangeSlider: SliderPanel

    TextEntryAutocomplete: TextEntry;
    TextEntryIMEControls: TextEntry;

    CycleButton: ToggleButton;

    VerticalScrollBar: Panel
    HorizontalScrollBar: Panel
    HTMLHorizontalScrollBar: Panel
    HTMLVerticalScrollBar: Panel
    EdgeScroller: Panel
    EdgeScrollBar: Panel

    SimpleContextMenu: Panel
    TournamentMatchDetails: Panel

    DOTASortHeader: Panel
    DOTAPunchCard: Panel
    DOTATooltipFriendsMenu: Panel
    DOTATooltipCustomGame: Panel
    DOTATooltipProfileCard: Panel
    DOTAContextMenuPlayer: Panel
    DOTATooltipChatBubble: Panel
    DOTATooltipDroppedItem: Panel
    DOTATooltipRune: Panel

    DOTAGameItemsPage: Panel
    DOTAShopItem: ItemImage
    DOTAWatchDownloadsElement: Panel
    DOTACustomGamesSubscribedPage: Panel
    DOTACustomLobbyList: Panel
    DOTAParty: Panel
    DOTAChat: Panel
    DOTAPostGame: Panel
    DOTATreasureDetailsPage: Panel
    AsyncDataPanel: Panel
    DOTAGuildImage: ImagePanel
    DOTAEventCrestImage: ImagePanel
}

declare interface HeroImage extends ImagePanel {
    persona: string;
}

declare interface DOTABuffListPanel extends Panel {
    showbuffs: boolean;
    showdebuffs: boolean;
}
// from https://developer.valvesoftware.com/wiki/Dota_2_Workshop_Tools/Panorama/Events#Default_Event_Attributes
type PanelEvent =
    | 'onactivate'
    | 'oncancel'
    | 'oncontextmenu'
    | 'ondblclick'
    | 'ondeselect'
    | 'oneconsetloaded'
    | 'onfilled'
    | 'onfindmatchend'
    | 'onfindmatchstart'
    | 'onfocus'
    | 'onblur'
    | 'ondescendantfocus'
    | 'ondescendantblur'
    | 'oninputsubmit'
    | 'onload'
    | 'onmouseactivate'
    | 'onmouseout'
    | 'onmouseover'
    | 'onmovedown'
    | 'onmoveleft'
    | 'onmoveright'
    | 'onmoveup'
    | 'onnotfilled'
    | 'onpagesetupsuccess'
    | 'onpopupsdismissed'
    | 'onselect'
    | 'ontabforward'
    | 'ontabbackward'
    | 'ontextentrychange'
    | 'ontextentrysubmit'
    | 'onscrolledtobottom'
    | 'onscrolledtorightedge'
    | 'ontooltiploaded'
    | 'onvaluechanged';

interface PanelBase {
    readonly type: string;
    readonly paneltype: string;
    rememberchildfocus: boolean;

    SetPanelEvent(event: PanelEvent, handler: () => void): void;
    RunScriptInPanelContext(script: string): void;
}

declare const enum scrollBehavior {
    自由对齐 = 0,
    左对齐 = 1,
    右对齐 = 2,
    居中对齐 = 3,
}

interface Panel extends PanelBase {
    readonly style: VCSSStyleDeclaration;

    readonly scrolloffset_x: number;
    readonly scrolloffset_y: number;

    readonly actualxoffset: number;
    readonly actualyoffset: number;

    readonly actuallayoutwidth: number;
    readonly actuallayoutheight: number;

    readonly desiredlayoutwidth: number;
    readonly desiredlayoutheight: number;

    readonly contentwidth: number;
    readonly contentheight: number;

    readonly actualuiscale_y: number;
    readonly actualuiscale_x: number;

    readonly layoutfile: string;
    readonly id: string;

    // get(): number | null; set(): number | 'auto' | null;
    selectionpos_x: number | null;
    selectionpos_y: number | null;

    // get(): number | null; set(): number | 'auto' | null;
    tabindex: number | null;

    hittestchildren: boolean;
    hittest: boolean;
    inputnamespace: string;
    defaultfocus: string;

    checked: boolean;
    enabled: boolean;
    visible: boolean;

    IsValid(): boolean;

    AddClass(name: string): void;
    RemoveClass(name: string): void;
    BAscendantHasClass(name: string): boolean;
    BHasClass(name: string): boolean;
    SetHasClass(name: string, active: boolean): void;
    ToggleClass(name: string): void;
    SwitchClass(name: string, replacement: string): void;
    TriggerClass(name: string): void;

    ClearPanelEvent(event: PanelEvent): void;

    SetDraggable(draggable: boolean): void;
    IsDraggable(): boolean;
    IsSizeValid(): boolean;

    GetChildCount(): number;
    GetChild(index: number): Panel | null;
    GetChildIndex(child: Panel): number;
    Children(): Panel[];

    FindChildrenWithClassTraverse(classname: string): Panel[];

    GetParent(): Panel | null;
    SetParent(parent: Panel): void;

    FindChild(childId: string): Panel | null;
    FindChildTraverse(childId: string): Panel | null;
    FindChildInLayoutFile(childId: string): Panel | null;
    FindPanelInLayoutFile(id: string): Panel | null;
    FindAncestor(id: string): Panel | null;

    RemoveAndDeleteChildren(): void;

    MoveChildBefore(child: PanelBase, beforeChild: PanelBase): void;
    MoveChildAfter(child: PanelBase, afterChild: PanelBase): void;

    GetPositionWithinWindow(): { x: number; y: number };
    GetPositionWithinAncestor(unknown: Panel): { x: number; y: number };
    /**
     * Sets whether to update panel with style changes
     */
    ApplyStyles(bool: boolean): void;
    ClearPropertyFromCode(unknown: string): void;

    DeleteAsync(time: number): void;

    BIsTransparent(): boolean;
    BAcceptsInput(): boolean;
    BAcceptsFocus(): boolean;
    SetFocus(): void; // ??
    UpdateFocusInContext(): void; // ??

    BHasHoverStyle(): boolean;
    SetAcceptsFocus(value: boolean): void; // ??
    SetDisableFocusOnMouseDown(value: boolean): void; // ??
    BHasKeyFocus(): boolean;
    SetScrollParentToFitWhenFocused(value: boolean): void; // ??
    BScrollParentToFitWhenFocused(): boolean;

    IsSelected(): boolean;
    BHasDescendantKeyFocus(): boolean;

    BLoadLayout(path: string, overrideExisting: boolean, partialLayout: boolean): boolean;

    BLoadLayoutSnippet(snippetName: string): boolean;
    BHasLayoutSnippet(snippetName: string): boolean;

    SetTopOfInputContext(): void; // ????
    SetDialogVariable(name: string, value: string): void;
    SetDialogVariableInt(name: string, value: number): void;
    SetDialogVariableTime(name: string, value: number): void;
    SetDialogVariableLocString(name: string, token: string): void;
    SetDialogVariablePluralLocStringInt(name: string, token: string, value: number): void;

    ScrollToTop(): void;
    ScrollToBottom(): void;
    ScrollToLeftEdge(): void;
    ScrollToRightEdge(): void;

    // Scroll behaviour is an enum?
    ScrollParentToMakePanelFit(scrollBehaviour: scrollBehavior, unknown: boolean): void;
    BCanSeeInParentScroll(): boolean;

    GetAttributeInt(name: string, defaultValue: number): number;
    GetAttributeString(name: string, defaultValue: string): string;
    GetAttributeUInt32(name: string, defaultValue: number): number;
    SetAttributeInt(name: string, value: number): void;
    SetAttributeString(name: string, value: string): void;
    SetAttributeUInt32(name: string, value: number): void;

    SetInputNamespace(namespace: string): void; // ??

    RegisterForReadyEvents(callback: (event: object) => void): void; // ????

    BReadyForDisplay(): boolean;
    SetReadyForDisplay(value: boolean): void; // ???

    SetPositionInPixels(x: number, y: number, z: number): void;

    Data<T = object>(): T;

    SetSendScrollPositionChangedEvents(value: boolean): void;
}

interface LabelPanel extends Panel {
    text: string;
    html: boolean;

    SetLocString(token: string): void;
    SetAlreadyLocalizedText(token: string): void;
}

type ScalingFunction =
    | 'none'
    | 'stretch' // the default
    | 'stretchx'
    | 'stretchy'
    | 'stretch-to-fit-preserve-aspect'
    | 'stretch-to-fit-x-preserve-aspect'
    | 'stretch-to-fit-y-preserve-aspect'
    | 'stretch-to-cover-preserve-aspect';

interface ImagePanel extends Panel {
    /**
     * Sets the source of this Image.
     *
     * @example
     * image.SetImage("file://{images}/custom_image.png");
     * image.SetImage("s2r://panorama/images/hud/reborn/icon_glyph_on_psd.vtex");
     */
    SetImage(path: string): void;
    SetScaling(scale: ScalingFunction): void;

    SetImageFromPanel(sourcePanel: Panel, unknown1: boolean): void;
}

interface AbilityImage extends ImagePanel {
    abilityname: string;
    contextEntityIndex: AbilityEntityIndex;
}

interface ItemImage extends ImagePanel {
    itemname: string;
    contextEntityIndex: ItemEntityIndex;
}

interface HeroImage extends ImagePanel {
    heroid: HeroID;
    heroname: string;
    heroimagestyle: 'icon' | 'portrait' | 'landscape';
}

interface LeagueImage extends ImagePanel {
    leagueid: number;
}

interface ContextMenuScriptPanel extends Panel {
    GetContentsPanel(): Panel;
}

type WeekendTourneyTrophyScene = ScenePanel;
interface ScenePanel extends Panel {
    FireEntityInput(entityName: string, inputName: string, value: string): void;
    PlayEntitySoundEvent(arg1: any, arg2: any): number;
    /** 设置显示单位 大头像 渲染背景 */
    SetUnit(unitName: string, environment: string, drawBackground: boolean): void;
    /** 获取附着于材质表面的板子 */
    GetPanoramaSurfacePanel(): Panel | null;
    /** 设置旋转参数 */
    SetRotateParams(yawMin: number, yawMax: number, pitchMin: number, pitchMax: number): void;
    /** 在场景中指定镜头前生成指定场次 获胜队伍的 玩家英雄 带饰品 */
    SpawnHeroInScenePanelByPlayerSlot(match_id: string, slot: number, entityName: string): boolean;
    /** 在场景中生成指定英雄 指定饰品 默认无 */
    SpawnHeroInScenePanelByHeroId(heroID: number, entityName: string, /** 饰品id */econId: number): boolean;
    /** 比赛场次，玩家编号 获胜队伍的0-4玩家 展台 有饰品 */
    SetScenePanelToPlayerHero(heroName: string, player: PlayerID): boolean;
    /** 展示本地玩家的指定英雄 带饰品的展台 */
    SetScenePanelToLocalHero(heroId: HeroID): boolean;
    SetPostProcessFade(value: number): void;
    /**
     * @example
     * scenePanel.SetCustomPostProcessMaterial("materials/dev/deferred_post_process_graphic_ui.vmat")
     */
    SetCustomPostProcessMaterial(material: string): void;
    /** 生成指定场次 获胜队伍的 玩家英雄 带饰品 无展台 */
    SpawnHeroInScenePanelByPlayerSlotWithFullBodyView(heroName: string, player: PlayerID): boolean;
    LerpToCameraEntity(entityName: string, duration: number): void;

    ReloadScene(): void;
    ClearScene(unknown1: boolean): void;

    SetAnimgraphParameterOnEntityInt(entityName: string, name: string, value: number): void;
    SetAnimgraphParameterOnEntityFloat(entityName: string, name: string, value: number): void;
    SetAnimgraphParameterOnEntityEnum(entityName: string, name: string, value: string): void;
}

interface ParticleScenePanel extends ScenePanel {
    StartParticles(): void;
    StopParticlesImmediately(b: boolean): void;
    StopParticlesWithEndcaps(): void;
    SetControlPoint(cp: number, x: number, y: number, z: number): void;
}

interface EconItemPanel extends Panel {
    /**
     * @example
     * // Wyvern Hatchling, Ice style
     * panel.SetItemByDefinition(11321);
     */
    SetItemByDefinition(itemDef: number): void;

    /**
     * @example
     * // Wyvern Hatchling, Gold style
     * panel.SetItemByDefinition(11321, 2);
     */
    SetItemByDefinitionAndStyle(itemDef: number, style: number): void;
}

interface RadioButton extends Panel {
    GetSelectedButton(): RadioButton;
}

interface TextButton extends Panel {
    text: string;
}

interface ToggleButton extends Panel {
    text: string;
    SetSelected(value: boolean): void;
}

interface TextEntry extends Panel {
    text: string;

    RaiseChangeEvents(bool: boolean): void;

    SelectAll(): void;
    ClearSelection(): void;

    GetMaxCharCount(): number;
    SetMaxChars(value: number): void;

    GetCursorOffset(): number;
    SetCursorOffset(value: number): void;
}

interface NumberEntry extends Panel {
    value: number;
    /** @default 0 */
    min: number;
    /** @default 1000000 */
    max: number;
    /** @default 1 */
    increment: number;
}

interface DropDown extends Panel {
    HasOption(id: string): boolean;
    AddOption(panel: Panel): void;
    RemoveOption(id: string): void;
    RemoveAllOptions(): void;

    GetSelected(): Panel;
    SetSelected(id: string): void;

    AccessDropDownMenu(): Panel;
    FindDropDownMenuChild(string: string): Panel;

    SetSelectedIndex(index: number): void;
}

interface SliderPanel extends PanelBase {
    value: number;
    min: number;
    max: number;

    default: number;
    increment: number;
    mousedown: boolean;

    SetDirection(value: any): void; // ??
    SetRequiresSelection(value: boolean): void;
    SetShowDefaultValue(value: boolean): void;
    SetValueNoEvents(value: number): void;
}

interface ProgressBar extends Panel {
    value: number;
    min: number;
    max: number;
    hasNotches: boolean;
    valuePerNotch: boolean;
}

// Needs _BG and _FG styles, see lower hud hero exp
interface CircularProgressBar extends PanelBase {
    value: number;
    min: number;
    max: number;
}

/**
 * @see https://github.com/SteamDatabase/GameTracking-Dota2/search?q=ProgressBarWithMiddle
 */
interface ProgressBarWithMiddle extends Panel {
    lowervalue: number;
    uppervalue: number;
    min: number;
    max: number;
}

interface UserName extends Panel {
    /**
     * 64-bit Steam ID number.
     */
    steamid: string;
    /**
     * 32-bit Steam ID number.
     */
    accountid: string;
}

interface AvatarImage extends UserName {
    SetAccountID(accountid: number): void;
}

interface CountdownPanel extends Panel {
    // get(): string; set(): number;
    startTime: string | number;
    // get(): string; set(): number;
    endTime: string | number;
    /** @default 1 */
    updateInterval: number;
    /** @default 'countdown_time' */
    timeDialogVariable: string;
}

interface MoviePanel extends Panel {
    SetMovie(source: string): void;
    SetControls(controls: 'none' | 'minimal' | 'full'): void;
    /**
     * Changes video title that is shown with 'full' controls.
     */
    SetTitle(title: string): void;
    Play(): void;
    Pause(): void;
    Stop(): void;
    SetRepeat(repeat: boolean): void;
    /**
     * @param volume A number within 0..1 range.
     */
    SetPlaybackVolume(volume: number): void;
    BAdjustingVolume(): boolean;
}

interface HeroMovie extends Panel {
    heroid: HeroID;
    heroname: string;
    persona: any; // ??
}

interface HTMLPanel extends Panel {
    SetURL(url: string): void;
    SetIgnoreCursor(value: boolean): void;
    RunJavascript(js: string): void;
}

interface CarouselPanel extends Panel {
    GetFocusIndex(): number;
    GetFocusChild(): Panel;
    SetSelectedChild(selected: Panel): void;
}

interface Button extends Panel {}

interface HUDOverlayMap extends Panel {
    mapscale: number;
    maptexture: string;
    mapscroll: boolean;
    fixedoffsetenabled: boolean;
    SetFixedOffset(x: number, y: number): void;
    SetFixedBackgroundTexturePosition(size: number, x: number, y: number): void;
}

interface AnimatedImageStrip extends ImagePanel {
    StartAnimating(): void;
    StopAnimating(): void;
}
