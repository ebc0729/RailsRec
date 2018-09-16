<template>
    <Page>
        <ActionBar :title="$route.path">
            <NavigationButton text="Back!" android.systemIcon="ic_menu_back" @tap="$router.back()" />
        </ActionBar>
        <GridLayout>
            <Map />
        </GridLayout>
    </Page>
</template>

<script>
import Map from '../components/Mapbox'
module.exports =  {
    components: {
        Map
    }
};
</script>