<template>
  <section>
    <Nav/>
    <Header/>
    <WeProvide/>
    <Projects/>  
    <WhyOpenSoftTech/>
    <Technology/>
    <Cta/>
    <Footer/>
  </section>
</template>

<script>

import Nav from '~/components/Nav';
import Header from '~/components/Header';
import WeProvide from '~/components/Common/WeProvide';
import Projects from '~/components/Common/Projects';
import WhyOpenSoftTech from '~/components/Common/WhyOpenSoftTech';
import Technology from '~/components/Common/Technology';
import Cta from '~/components/Common/Cta';
import Footer from '~/components/Footer';

export default {  
  name: 'Home',
  components: {
    Nav,
    Header,
    WeProvide,
    Projects,
    WhyOpenSoftTech,
    Technology,
    Cta,
    Footer
  }
}

</script>
