<template>
    <div>MAP</div>
    <div ref="mapDiv" style="width: 100%; height: 500px;"></div>
</template>

<script>
/* eslint-disable no-undef */
import { mapGetters } from 'vuex';
import { Loader } from '@googlemaps/js-api-loader';
import { ref, onMounted } from 'vue';

const GOOGLE_MAPS_API_KEY = 'AIzaSyACvyEFmGKeUcmVaqdYLb8lvHGVdHkM92E';

export default {
    name: 'AppMap',
    computed: mapGetters(['propertiesList']),
    setup() {
        const loader = new Loader({ apiKey: GOOGLE_MAPS_API_KEY });
        const mapDiv = ref(null);

        onMounted(async () => {
            await loader.load();
            // eslint-disable-next-line
            const map = new google.maps.Map(mapDiv.value, {
                center: { lat: 55.6760968, lng: 12.5683371 },
                zoom: 7,
            });
            // eslint-disable-next-line
            new google.maps.Marker({
                position: new google.maps.LatLng(55.6760968, 12.5683371),
                map: mapDiv.value,
            }).setMap(map);
        });

        return { mapDiv };
    },
};
</script>
