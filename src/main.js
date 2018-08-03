import Vue from 'nativescript-vue';
import * as app from 'tns-core-modules/application'
import { isAndroid } from 'tns-core-modules/platform'

import * as views from './views'
import store from './store'
import './styles.scss'


Vue.registerElement(
  'RadSideDrawer',
  () => require('nativescript-ui-sidedrawer').RadSideDrawer
)

Vue.registerElement(
  'RadListView',
  () => require('nativescript-ui-listview').RadListView,
)

Vue.component(views.Home.name, views.Home)

Vue.config.silent = false

new Vue({

  store,

  template: `
  <Frame>
    <Page>
      <ActionBar class="action-bar" title="Sample App" >
        <ActionItem text="Menu" @tap="$refs.drawer.nativeView.showDrawer()"/>
      </ActionBar>

      <RadSideDrawer ref="drawer">
        <StackLayout ~drawerContent backgroundColor="white">
          <Label text="Menu" />
        </StackLayout>
        <StackLayout ~mainContent backgroundColor="lightgray">
          <Home></Home>
        </StackLayout>
      </RadSideDrawer>
    </Page>
  </Frame>
  `,

  created () {
/*    if (isAndroid) {
      const eventTypes = [
        app.AndroidApplication.activityCreatedEvent,
        app.AndroidApplication.activityDestroyedEvent,
        app.AndroidApplication.activityStartedEvent,
        app.AndroidApplication.activityPausedEvent,
        app.AndroidApplication.activityResumedEvent,
        app.AndroidApplication.activityStoppedEvent,
        app.AndroidApplication.saveActivityStateEvent,
        app.AndroidApplication.activityResultEvent,
        app.AndroidApplication.activityBackPressedEvent
      ]
      for (let i = 0; i < eventTypes.length; i++) {
        app.android.on(eventTypes[i], event => {
          console.log(`Event: ${event.eventName}, Activity: ${event.activity}`)
          this.androidEvents.push(event)
        })
      }
    }
    */
  },
}).$start()
