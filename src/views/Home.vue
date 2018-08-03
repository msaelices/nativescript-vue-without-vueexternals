<template>
  <StackLayout>
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
import { mapState } from 'vuex'

export default {
  name: 'Home',
  computed: {
    ...mapState({
      items: state => state.fruits.items,
    })
  },
  methods: {
    onPullToRefreshInitiated ({ object }) {
      console.log('Pulling...')
      this
        .$store
        .dispatch('fruits/add', 'Berry')
        .then(() => {
          object.notifyPullToRefreshFinished()
          object.refresh()
        })
    },
  }
}
</script>
