<template>
    <ListPicker :items="areaNames" selectedIndex="0" />
</template>

<script>
    import axios from 'axios'
    export default {
        data () {
            return {
                areas: null,
                areaNames: null
            };
        },
        mounted() {
            axios
            .get("http://0.0.0.0:3333/areas")
            .then(response => {
                console.log(response)
                // this.areas = JSON.stringify(response.data);
                this.areaNames = response.data.map(x => x.name)
            })
            .catch(error => {
                console.log(error);
            })
        }
    }
</script>
