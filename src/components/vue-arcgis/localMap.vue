<template>
    <div id="viewDiv"></div>
</template>

<script>
import { loadModules } from "esri-loader";

    export default {
        name: 'localMap',
        methods: {
            createMap() {
                const options = {
                    url: "http://10.10.12.116:8888/arcgis_js_api/library/4.5/init.js"
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
    @import url("http://10.10.12.116:8888/arcgis_js_api/library/4.5/esri/css/main.css");
    #viewDiv {
        position: absolute;
        width: 100%;
        height: 100%;
    }
</style>