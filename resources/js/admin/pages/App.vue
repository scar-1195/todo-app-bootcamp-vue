<template>
  <v-app>
    <v-row>
      <v-col cols="2">
        <Sidebar />
      </v-col>
      <v-col cols="10">
        <router-view></router-view>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
import Sidebar from "../common/Sidebar.vue";
export default {
  name: "App",
  components: { Sidebar }

}
</script>