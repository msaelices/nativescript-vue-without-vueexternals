<template>
  <StackLayout>
    <Label text="Home" />

    <RadListView :items="items"
                 pullToRefresh="true"
                 @pullToRefreshInitiated="onPullToRefreshInitiated">
      <v-template>
        <StackLayout orientation="vertical">
          <Label :text="item.name"></Label>
        </StackLayout>
      </v-template>
    </RadListView>
  </StackLayout>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      items: ['Apple', 'Orange', 'Tomato']
    }
  },
  methods: {
    onPullToRefreshInitiated ({ object }) {
      console.log('Pulling...')
      this.items.push('Berry')
      object.notifyPullToRefreshFinished()
      object.refresh()
    },
  }
}
</script>
