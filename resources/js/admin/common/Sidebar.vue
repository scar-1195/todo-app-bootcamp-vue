<template>
  <v-card height="100vh" width="256">
    <v-navigation-drawer permanent>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6 d-flex justify-content-center">
            TODO APP
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" :to="{ name: item.to }" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
      items: [
        { title: 'Login', icon: 'mdi-login', to: 'login' },
        { title: 'Tareas', icon: 'mdi-pencil', to: 'tasks' },
        { title: 'Crear Tarea', icon: 'mdi-pencil-plus', to: 'create_task' },
        { title: 'Tarea(s) Completas', icon: 'mdi-help-box', to: 'completed_tasks' },
        { title: 'Tarea(s) Pendientes', icon: 'mdi-help-box', to: 'pending_tasks' },
      ],
    }
  },
}
</script>