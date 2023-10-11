<template>
    <section>
        <Nav/>
        <header-inner
            headline="Our "
            headlineStyle="Projects"
            :ornaments="headlineFontStyle"
            subheadline="Our experienced team of designers &amp; developers are eager to assist you on your path to success."
        ></header-inner>
        <filter-project/>
        <Footer/>
    </section>
</template>

<script>

import Nav from '~/components/Nav';
import Footer from '~/components/Footer';

import headlineFontStyle from '~/assets/svg/projects-ornament.svg';

export default {
    name: 'Projects',
    components: {
        Nav,
        Footer,
        "header-inner": () => import("@/components/Common/HeaderInner"),
        "filter-project": () => import("@/components/Common/FilterProject")
    },
    data() {
        return {
            headlineFontStyle
        }
    }   
}
</script>