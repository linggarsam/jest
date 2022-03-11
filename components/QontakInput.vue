<template>
  <b-input-group>
    <b-form-input
      autocomplete="off"
      :value="value"
      @input="onInput"
    />
  </b-input-group>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: () => ''
    }
  },
  methods: {
    onInput (val) {
      this.$emit('input', val)
    }
  }
}
</script>
