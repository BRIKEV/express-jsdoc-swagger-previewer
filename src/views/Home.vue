<template>
  <div class="home">
      <SwaggerUi :swaggerObject="testing" />
  </div>
</template>

<script>
import SwaggerUi from '@/components/SwaggerUi.vue';
import testing from './testing';

export default {
  components: { SwaggerUi },
  beforeMount() {
    this.testing = testing;
  },
};
</script>

<style lang="css" scoped>
.Swagger {
  width: 100%;
}
.home {
  display: flex;
  height: 100%;
}

.home  .codemirror,
.home  .pre {
    width: 50%;
    height: 100%;
    margin: 0;
    overflow: auto;
  }

.home  .pre {
    display: block;
    padding: 1rem;
    font-size: 14px;
    line-height: 1.6;
    word-break: break-all;
    word-wrap: break-word;
  }
</style>
