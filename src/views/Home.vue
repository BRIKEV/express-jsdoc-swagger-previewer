<template>
  <div class="home">
     <Navbar @onClick="handleClickRun" />
     <div class="Content">
      <div class="codemirror">
        <CodeMirror v-model="code" />
      </div>
      <SwaggerUi :swaggerObject="testing" />
     </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import SwaggerUi from '@/components/SwaggerUi.vue';
import CodeMirror from '@/components/CodeMirror.vue';
import testing from './testing';

export default {
  components: { Navbar, SwaggerUi, CodeMirror },
  data() {
    return {
      code: '',
      testing: undefined,
    };
  },
  methods: {
    handleClickRun() {
      // TODO: backend api call
      this.testing = testing;
    },
  },
};
</script>

<style lang="css" scoped>
.Swagger {
  width: 50%;
}
.codemirror {
  width: 50%;
}

.home {
  display: grid;
  height: 100%;
}
.Content {
  display: flex;
}
</style>
