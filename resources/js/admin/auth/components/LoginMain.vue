<template class="dark-theme">
  <v-container class="d-flex flex-column align-items-center">
    <h1 class="my-5">¡Bienvenido!</h1>
    <v-card width="500" height="80vh">
      <v-card-title class="d-flex justify-content-center">
        <h2>Login</h2>
      </v-card-title>
      <v-card-text>
        <v-form class="px-5" ref="form" lazy-validation>
          <v-row>
            <v-col cols="12">
              <label>Correo electronico</label>
              <v-text-field v-model="login.email" :rules="rules.email" placeholder="Ingresa tu correo electronico" solo
                type="text" />
            </v-col>
            <v-col cols="12">
              <label>Password</label>
              <v-text-field v-model="login.password" :rules="rules.password" placeholder="********" solo
                type="password" />
            </v-col>
            <v-col cols="12" class="d-flex justify-content-around align-items-center">
              <p class="m-0">No cuentas con una cuenta</p>
              <v-btn :to="{ name: 'register' }" color="success" text>
                Registrate
              </v-btn>
            </v-col>
            <v-col cols="12" class="d-flex justify-content-center">
              <v-btn @click="submit">
                Ingresar
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
  name: "LoginMain",
  data: () => ({
    loading: false,
    login: {
      email: '',
      password: '',
    },

    rules: {
      email: [
        v => !!v || 'El correo es requerido.',
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'El correo debe tener un formato válido.'
      ],
      password: [
        v => !!v || 'La contraseña es requerida.'
      ]
    },
  }),

  methods: {
    submit() {
      let valid = this.$refs.form.validate();
      const authUser = JSON.parse(localStorage.getItem("authUser"));
      if (valid) {
        if (authUser.email === this.login.email && authUser.password === this.login.password) {
          this.alert('success', 'Bienvenido', '');
          localStorage.setItem("authFlag", true);
          this.$router.replace({ name: 'tasks' });
        } else {
          this.alert('error', 'Ocurrio un error', 'Correo o Contraseña incorrecta');
        }
      }
    },

    alert(icon, title, text) {
      this.$swal(
        icon,
        title,
        text,
      );
    }
  }
}
</script>