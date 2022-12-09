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
    viewState: ViewState;
    terria: Terria;
    workbench: Workbench;
    overlays: Workbench;
}
export declare function createPluginContext(viewState: ViewState): TerriaPluginContext;
