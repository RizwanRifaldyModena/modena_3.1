<template>
    <div class="news_wraper">
        <Carousel :settings="settings" :breakpoints="breakpoints" :items-to-show="2.5">
            <Slide v-for="slide in 5" :key="slide">
                <div class="carousel__item">
                    <img src="img/carousel-1.png" />
                </div>
            </Slide>
            <template #addons>
                <Navigation />
            </template>
        </Carousel>
    </div>
</template>
  
<script>
import { defineComponent } from 'vue';
import { Carousel, Navigation, Slide } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';

export default defineComponent({
    name: 'Breakpoints',
    components: {
        Carousel,
        Slide,
        Navigation,
    },
    methods: {
        next() {
            this.$refs.carousel.next()
        },
        prev() {
            this.$refs.carousel.prev()
        },
    },
    data: () => ({
        settings: {
            itemsToShow: 1,
            snapAlign: 'center',
        },
        breakpoints: {
            700: {
                itemsToShow: 1,
                snapAlign: 'center',
            },
            1024: {
                itemsToShow: 2.5,
                snapAlign: 'start',
            },
        },
    }),
});
</script>
<style>
@import 'section_10.scss';
</style>