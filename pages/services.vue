<template>
    <section>
        <Nav/>
        <header-inner
            headline="We Think Big, and Make it "
            headlineStyle="Bigger"
            :ornaments="headlineFontStyle"
            subheadline="Our diverse range of offerings is designed to cater to a wide variety of requirements and ensure customer satisfaction."
        >
        </header-inner>
        <OurServices/>
        <Technology/>
        <Footer/>
    </section>
</template>

<script>

import Nav from '~/components/Nav';
import OurServices from '~/components/Common/OurServices';
import Technology from '~/components/Common/Technology';
import Footer from '~/components/Footer';

import headlineFontStyle from '~/assets/svg/subheader-font-style.svg';

export default {
    name: 'Services',
    components: {
        Nav,
        OurServices,
        Technology,
        Footer,
        "header-inner": () => import("@/components/Common/HeaderInner")
    },    
    data() {
        return {
            headlineFontStyle
        }
    } 
}
</script>