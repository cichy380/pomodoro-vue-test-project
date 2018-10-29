<template>
  <div class="container pt-4 pb-4">
    <h3>Pomodoro timer</h3>
    <h5 class="mb-4 text-muted">plain version</h5>

    <div class="btn-group" role="group">
      <button type="button" class="btn btn-outline-primary disabled" disabled>Stop</button>
      <button type="button" class="btn btn-outline-primary active">Play</button>
      <button type="button" class="btn btn-outline-primary">Pause</button>
    </div>

    <hr class="invisible">
    <strong class="text-muted">data preview:</strong>
    <pre class="p-3 bg-light text-muted"><code>data</code></pre>
  </div>
</template>

<script>
    const STATES = {
        WORK: 'work',
        REST: 'rest'
    }

    console.log(STATES)
</script>
