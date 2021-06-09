<template>
  <div class="home">
     <Navbar @onClick="handleClickRun" />
     <div class="Content">
      <div class="codemirror" data-cy="codemirror">
        <CodeMirror v-model="code" />
      </div>
      <SwaggerUi :swaggerObject="testing" />
      <!-- TODO: Information banner and loading -->
     </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import SwaggerUi from '@/components/SwaggerUi.vue';
import CodeMirror from '@/components/CodeMirror.vue';
import { processOpenapi } from '@/api';

export default {
  components: { Navbar, SwaggerUi, CodeMirror },
  data() {
    return {
      code: '',
      testing: {},
    };
  },
  methods: {
    handleClickRun() {
      const { code: payload } = this;
      processOpenapi({ payload })
        .then((res) => {
          console.log(res);
          this.testing = res.body;
        })
        .catch(console.err);
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
