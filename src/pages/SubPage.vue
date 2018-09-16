<template>
    <Page>
        <ActionBar :title="$route.path">
        <NavigationButton text="Back!" android.systemIcon="ic_menu_back" @tap="$router.back()" />
        </ActionBar>
        <StackLayout>
        <Label :text="$route.query.user" v-if="$route.query.user" />
        <Button text="Back to Home" @tap="$router.go(-1)" />
        </StackLayout>
    </Page>
</template>
