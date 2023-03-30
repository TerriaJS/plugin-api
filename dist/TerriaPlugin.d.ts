import ViewState from "terriajs/lib/ReactViewModels/ViewState";
import Terria from "terriajs/lib/Models/Terria";
import Workbench from "terriajs/lib/Models/Workbench";
export interface TerriaPlugin {
    name: string;
    description: string;
    version: string;
    register: (ctx: TerriaPluginContext) => void;
}
export interface TerriaPluginModule {
    default: TerriaPlugin;
}
export interface TerriaPluginContext {
    /**
     * The root view model for terriajs. Most API interfaces will require this
     * ViewState instance to be passed as a parameter.
     */
    viewState: ViewState;
    /**
     * Terria app instance
     */
    terria: Terria;
    /**
     * Workbench instance
     *
     * TODO: Decide whether we need to expose Workbench object?
     * Perhaps we should write a Workbench ViewModel that
     * defines functions like Workbench.addItem(viewState, item)
     * without having to expose the internal Workbench object.
     */
    workbench: Workbench;
    /**
     *
     * Map overlay instance. Items added to the overlay appear on the map but do
     * not appear in the workbench.
     *
     * TODO: Decide whether we need to expose Workbench object?
     * Perhaps we should write a Workbench ViewModel that
     * defines functions like Overlays.addItem(viewState, item)
     * without having to expose the internal Workbench object.
     */
    overlays: Workbench;
    /**
     * Configuration for the plugin read from `config.json`.
     */
    pluginConfig?: any;
}
/**
 * Creates a TerriaPluginContext with top-level objects accessible to the plugin.
 *
 */
export declare function createPluginContext(viewState: ViewState, pluginConfig: any): TerriaPluginContext;
