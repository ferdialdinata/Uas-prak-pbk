<template>
  <q-page class="flex flex-center">
    <div class="outer-card inputan">
      <q-card class="inner-card q-ma-md" bordered>
        <div class="text-h6">Weather Widget</div>
        <q-card-section class="content">
          <q-input
            filled
            v-model="location"
            label="Enter Location"
            class="q-my-sm"
          />
          <q-btn @click="fetchWeather" label="Search" color="primary" />
        </q-card-section>
      </q-card>
    </div>

    <div class="outer-card outputan" v-if="weather">
      <q-card class="inner-card q-ma-md" bordered style="width: 350px">
        <q-card-section class="text-center">
          <div class="text-h6">{{ weather.name }}</div>
          <div><p>Waktu: {{ currentTime }}</p></div>
          <div class="text-subtitle1">
            {{ weather.main.temp }} °C - {{ weather.weather[0].description }}
          </div>
        </q-card-section>
      </q-card>
    </div>
    
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="#a2d9ff" fill-opacity="1" d="M0,224L48,192C96,160,192,96,288,106.7C384,117,480,203,576,234.7C672,267,768,245,864,202.7C960,160,1056,96,1152,80C1248,64,1344,96,1392,112L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
    </svg>
  </q-page>
</template>

<script setup>
import { ref, computed } from 'vue';
import axios from 'axios';

const location = ref('');
const weather = ref(null);
const apiKey = '161162b0a1891b4b3a3970038806152d';

const fetchWeather = async () => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${location.value}&units=metric&appid=${apiKey}`
    );
    weather.value = response.data;
  } catch (error) {
    console.error('Failed to fetch weather data:', error);
  }
};

const currentTime = computed(() => {
  const now = new Date();
  return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
});
</script>

<style scoped>
.q-page {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  padding: 16px;
  background: linear-gradient(
    59deg,
    hsl(0, 0%, 100%) 0%,
    hsl(193.79, 63.04%, 97.97%) 10.6%,
    hsl(193.79, 63.04%, 95.39%) 20.1%,
    hsl(193.79, 63.04%, 92.35%) 28.5%,
    hsl(193.79, 63.04%, 88.9%) 36.2%,
    hsl(193.79, 63.04%, 85.13%) 43%,
    hsl(193.79, 63.04%, 81.11%) 49.3%,
    hsl(193.79, 63.04%, 76.91%) 55.1%,
    hsl(193.79, 63.04%, 72.61%) 60.6%,
    hsl(193.79, 63.04%, 68.28%) 65.8%,
    hsl(193.79, 63.04%, 64%) 71%,
    hsl(193.79, 63.04%, 59.84%) 76.2%,
    hsl(193.79, 63.04%, 55.87%) 81.5%,
    hsl(193.79, 63.04%, 52.18%) 87.2%,
    hsl(193.79, 66.09%, 48.82%) 93.3%,
    hsl(193.79, 74.36%, 45.88%) 100%
  );
}

.content {
  background-color: white;
}

.q-ma-md {
  width: 500px;
  height: 200px;
  padding-top: 30px;
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.outer-card {
  position: relative;
  margin: 16px;
  border-radius: 24px;
  padding: 2px;
  background: #f0f0f0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.inputan {
  position: fixed;
  top: 15%;
  left: 32%;
}

.outputan {
  position: fixed;
  top: 52%;
  left: 37%;
}

svg {
  position: fixed;
  z-index: 1;
  top: 60%;
}
</style>
