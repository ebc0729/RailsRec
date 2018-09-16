<template>
    <Page>
      <ActionBar :title="$route.path" />
      <StackLayout>
        <Button text="To Sub" @tap="$router.push('/sub')" />
        <Button text="To Sub (with query param)" @tap="$router.push('/sub?user=John+Appleseed')"></Button>
        <Button text="To Map" @tap="$router.push('/map')" />
        <Button text="To Api" @tap="$router.push('/api')" />
      </StackLayout>
    </Page>
</template>