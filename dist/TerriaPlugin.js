/**
 * Creates a TerriaPluginContext with top-level objects accessible to the plugin.
 *
 */
export function createPluginContext(viewState, pluginConfig) {
    return {
        viewState,
        terria: viewState.terria,
        workbench: viewState.terria.workbench,
        overlays: viewState.terria.overlays,
        pluginConfig
    };
}
