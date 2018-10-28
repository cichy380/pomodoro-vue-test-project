<template>
  <div class="container pt-4 pb-4">
    <h3>Pomodoro timer</h3>
    <h5 class="mb-4 text-muted">plain version</h5>

    <hr class="invisible">
    <strong class="text-muted">data preview:</strong>
    <pre class="p-3 bg-light text-muted"><code>{{ items }}</code></pre>
  </div>
</template>

<script>
let data = {
  items: [
    {id: 'sl-01', text: 'Bananas', checked: false},
    {id: 'sl-02', text: 'Apples', checked: true},
    {id: 'sl-03', text: 'Orange', checked: false}
  ],
  title: 'Plain Shopping List',
  newItem: ''
}

export default {
  name: 'ShoppingListPlain',
  data () {
    return data
  },
  methods: {
    addItem: function () {
      let text = this.newItem.trim()

      if (text) {
        this.items.push({
          id: this._generateId(),
          text: text,
          checked: false
        })
        this.newItem = ''
      }
    },

    _generateId: function () {
      return 'sl-' + Math.random().toString(36).substr(2, 9)
    }
  }
}
</script>
