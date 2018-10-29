<template>
  <div class="container pt-4 pb-4">
    <h2 class="mb-4">{{ title }}</h2>

    <add-item-component @add="addItem"></add-item-component>

    <items-component :items="items"></items-component>

    <hr class="invisible">
    <strong class="text-muted">data preview:</strong>
    <pre class="p-3 bg-light text-muted"><code>{{ items }}</code></pre>
  </div>
</template>

<script>

</script>
