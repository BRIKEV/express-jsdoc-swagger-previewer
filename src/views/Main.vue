<template>
  <div class="home">
     <Navbar @onClick="handleClickRun">
      <VueMultiselect
        v-model="selected"
        track-by="name"
        label="name"
        :options="options"
        :show-labels="false"
        @input="handleSelectExample"
        placeholder="Select example"
      />
     </Navbar>
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
import EXAMPLES from '@/schemas';

export default {
  components: { Navbar, SwaggerUi, CodeMirror },
  data() {
    return {
      code: '',
      swaggerData: {},
      selected: '',
      options: [
        { name: 'Components', value: EXAMPLES.COMPONENTS },
        { name: 'Responses', value: EXAMPLES.RESPONSES },
        { name: 'Request body', value: EXAMPLES.REQUEST_BODY },
        { name: 'Parameters', value: EXAMPLES.PARAMETERS },
        { name: 'Example', value: EXAMPLES.EXAMPLE },
        { name: 'Tag', value: EXAMPLES.TAG },
      ],
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
    handleSelectExample(selected) {
      this.code = selected ? selected.value : '';
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

.multiselect ::v-deep .multiselect__element .multiselect__option:hover {
  background: #A0A0A0;
}

.multiselect ::v-deep .multiselect__element .multiselect__option--highlight {
  background: #A0A0A0;
}

.multiselect ::v-deep .multiselect__element .multiselect__option--selected {
  background: #666666;
  color: #FFF;
}

.home {
  display: grid;
  height: 100%;
}
.Content {
  display: flex;
}
</style>
