export function createPluginContext(viewState) {
    return {
        viewState,
        terria: viewState.terria,
        workbench: viewState.terria.workbench,
        overlays: viewState.terria.overlays
    };
}
