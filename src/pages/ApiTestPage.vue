<template>
    <Page>
        <ActionBar :title="$route.path">
        <NavigationButton text="Back!" android.systemIcon="ic_menu_back" @tap="$router.back()" />
        </ActionBar>
        <RailApi />
    </Page>
</template>

<script>
import RailApi from '../components/RailApi'
module.exports =  {
    components: {
        RailApi
    }
};
</script>