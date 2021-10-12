<template>
  <div class="home">
     <Navbar @onClick="handleClickRun" />
     <div class="Content">
      <div class="codemirror" data-cy="codemirror">
        <CodeMirror v-model="code" />
      </div>
      <SwaggerUi :swaggerObject="swaggerData" />
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
      swaggerData: {},
    };
  },
  methods: {
    handleClickRun() {
      const { code: payload } = this;
      processOpenapi({ payload })
        .then(({ data }) => { this.swaggerData = data; })
        .catch((error) => {
          this.$notify({
            group: 'notify',
            text: error.message,
            type: 'error',
          });
        });
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
