<template>
  <teleport to="body">
    <el-dialog v-model="visible" destroy-on-close v-bind="dialogParams">
      <slot />
    </el-dialog>
  </teleport>
</template>

<script>
  import { reactive, toRefs } from 'vue'

  export default {
    name: 'DialogEl',
    setup() {
      const state = reactive({
        visible: false,
        dialogParams: {},
        setVisible: (visible, params) => {
          state.visible = visible

          if (params) {
            state.dialogParams = Object.assign(state.dialogParams, params)
          }
        },
      })
      return {
        ...toRefs(state),
      }
    },
  }
</script>

<style scoped></style>
