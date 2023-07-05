<template>
  <v-container class="d-flex flex-column align-items-center">
    <h1 class="my-5">¡Bienvenido!</h1>
    <v-card width="500" height="80vh">
      <v-card-title class="d-flex justify-content-center">
        <h2>Registro</h2>
      </v-card-title>
      <v-card-text>
        <v-form class="px-5" ref="form" lazy-validation>
          <v-row>
            <v-col cols="12">
              <label>Nombre</label>
              <v-text-field v-model="registerUser.name" :rules="rules.name" placeholder="Nombre completo" solo
                type="text" />
            </v-col>
            <v-col cols="12">
              <label>Correo electronico</label>
              <v-text-field v-model="registerUser.email" :rules="rules.email" placeholder="Ingresa tu correo electronico"
                solo type="text" />
            </v-col>
            <v-col cols="12">
              <label>Password</label>
              <v-text-field v-model="registerUser.password" :rules="rules.password" placeholder="********" solo
                type="password" />
            </v-col>
            <v-col cols="12" class="d-flex justify-content-center">
              <v-btn @click="submit" color="primary">
                Registrate
              </v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "RegisterMain",
  data: () => ({
    loading: false,
    registerUser: {
      name: '',
      email: '',
      password: '',
    },

    rules: {
      name: [
        v => !!v || 'El nombre es requerida.'
      ],
      email: [
        v => !!v || 'El correo es requerido.',
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'El correo debe tener un formato válido.'
      ],
      password: [
        v => !!v || 'La contraseña es requerida.'
      ],
    }
  }),

  methods: {
    submit() {
      let valid = this.$refs.form.validate();
      if (valid) {
        localStorage.setItem("authUser", JSON.stringify(this.registerUser));
        this.$router.push({ name: 'login' });
      }
    }
  }
}
</script>