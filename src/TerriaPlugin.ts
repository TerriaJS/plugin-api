import ViewState from "terriajs/lib/ReactViewModels/ViewState";

export interface TerriaPlugin {
    name: string;
    description: string;
    version: string;
    register: (ctx: TerriaPluginContext) => void;
}

export interface TerriaPluginContext {
    viewState: ViewState;
}

export function createPluginContext(viewState: ViewState): TerriaPluginContext {
    return {
        viewState
    }
}
