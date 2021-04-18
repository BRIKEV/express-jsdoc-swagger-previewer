<template>
    <div
      id="swagger-ui"
      class="Swagger"
    />
</template>

<script>
import SwaggerUI from 'swagger-ui';

export default {
  name: 'SwaggerUi',
  props: {
    swaggerObject: {
      type: Object,
    },
  },
  mounted() {
    const { swaggerObject: spec } = this;
    SwaggerUI({ spec, dom_id: '#swagger-ui' });
  },
};
</script>

<style scoped>
@import '../../node_modules/swagger-ui/dist/swagger-ui.css';
</style>
