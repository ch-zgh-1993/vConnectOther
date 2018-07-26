<template>
    <div id="viewDiv"></div>
</template>

<script>
    import { loadModules } from "esri-loader";
    export default {
        name: 'ArcgisFrist',
        data() {
            return {
                mapTitle: ""
            };
        },
        watch: {
            $route() {}
        },
        methods: {
            createMap() {
                const options = {
                    url: "https://js.arcgis.com/4.5/"
                };
                loadModules(
                        [
                            "esri/Map",
                            "esri/views/MapView"
                        ],
                        options
                ).then(([ Map, MapView]) => {
                    const map = new Map({
                        basemap: "streets"
                    });
                    const view = new MapView({
                        map: map,
                        container: "viewDiv"
                    });
                    console.info('it will start')
                    view.then(function(){
                        console.info('start')
                    })
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