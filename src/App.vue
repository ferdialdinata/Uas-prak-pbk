<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-header>
      <q-tabs
        v-model="tab"
        align="center"
        class="bg-transparent text-primary"
        active-color="primary"
        indicator-color="secondary"
      >
        <q-tab name="widget" label="Widget" @click="navigate('Widget')" />
        <q-tab name="portcv" label="PortCv" @click="navigate('PortCv')" />
        <q-tab name="tugas2" label="Tugas 2" @click="navigate('Tugas2')" />
        <q-tab name="tugas3" label="Tugas 3" @click="navigate('Tugas3')" />
        <q-tab name="tugas4" label="Tugas 4" @click="navigate('Tugas4')" />
        <q-tab name="tugas5" label="Tugas 5" @click="navigate('Tugas5')" />
        <q-tab name="tugas6" label="Tugas 6" @click="navigate('Tugas6')" />
      </q-tabs>
    </q-header>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      tab: 'widget'
    }
  },
  methods: {
    navigate(route) {
      this.$router.push({ name: route })
    }
  }
}
</script>

<style scoped>
.q-header {
  background: transparent;
}
</style>
