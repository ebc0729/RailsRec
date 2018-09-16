<template>
    <Mapbox
        accessToken=process.env.MAPBOX_ACCESS_TOKEN
        mapStyle="traffic_day"
        latitude="52.3833160"
        longitude="4.8991780"
        hideCompass="true"
        zoomLevel="4"
        showUserLocation="false"
        disableZoom="false"
        disableRotation="false"
        disableScroll="false"
        disableTilt="false"
        @mapReady="onMapReady($event)">
    </Mapbox>
</template>

<script>
    import * as utils from "utils/utils";
    export default {
        data () {
            return { };
        },
        methods: {
            onMapReady(args) {
                args.map.addPolyline({
                    id: 1, // optional, can be used in 'removePolylines'
                    color: '#F00', // Set the color of the line (default black)
                    width: 7, // Set the width of the line (default 5)
                    opacity: 0.6, //Transparency / alpha, ranging 0-1. Default fully opaque (1).
                    points: [
                        {
                            'lat': 52.3833160, // mandatory
                            'lng': 4.8991780 // mandatory
                        },
                        {
                            'lat': 52.3834160,
                            'lng': 10.8991880
                        },
                        {
                            'lat': 30.3835160,
                            'lng': 10.8991980
                        }
                    ]
                });
            }
        }
    };
</script>

<style scoped></style>
