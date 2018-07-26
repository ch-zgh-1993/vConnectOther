<template>
    <div id="viewDiv"></div>
</template>

<script>
    import { loadModules } from 'esri-loader';

    export default {
        name: 'map3d',
        methods: {
            createMap () {
                const options = {
                    url: "https://js.arcgis.com/4.5/"
                };
                loadModules(
                        [
                            "esri/Map",
                            "esri/views/SceneView"
                        ],
                        options
                ).then(([ Map, SceneView]) => {
                    const map = new Map({
                        basemap: "streets",
                        ground: "world-elevation"
                    });
                    const view = new SceneView({
                        map: map,
                        container: "viewDiv"
                    });
                });
            }
        },
        mounted() {
            this.createMap();
        }
    }
</script>

<style>
    @import url("https://js.arcgis.com/4.5/esri/css/main.css");
    #viewDiv {
        position: absolute;
        width: 100%;
        height: 100%;
    }
</style>