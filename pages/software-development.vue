<template>
    <section class="service__single">
        <Nav/>
        <header-inner
            headline="Build Your Software Development "
            headlineStyle="Team"
            :ornaments="headlineFontStyle"
            subheadline="We offer cost-effective software development services without compromising on quality."
        >
        </header-inner>        
        <div class="introduction">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="introduction__content">
                            <h3>The most important criteria for hiring a developer is the willingness to learn and become a cultural fit.</h3>
                            <p>Our team comprises highly skilled professionals who are experts in the latest programming languages and technologies. We stay up-to-date with industry trends, ensuring that we can leverage the most cutting-edge tools and techniques to develop robust and innovative software solutions for your business.</p>
                            <p>Our competitive pricing structure allows you to maximize your return on investment while receiving top-notch development services that align with your budgetary requirements.</p>
                            <p>We prioritize delivering high-quality software solutions that meet the highest standards. Our team follows industry best practices, employs rigorous testing methodologies, and adheres to quality assurance processes to ensure that the software we develop is reliable, scalable, and performs optimally. We offer scalability, allowing you to ramp up or down resources as needed, ensuring that our services align with your changing needs.</p>
                            <p>We are dedicated to delivering software solutions that drive your business forward and exceed your expectations.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>        
        <HireProcess/>
        <Projects/>
        <BorderBottom/>
        <Cta/>
        <Footer/>
    </section>
</template>

<script>

import Nav from '~/components/Nav';
import HireProcess from '~/components/Common/HireProcess';
import Projects from '~/components/Common/Projects';
import BorderBottom from '~/components/Common/BorderBottom';
import Cta from '~/components/Common/Cta';
import Footer from '~/components/Footer';
import headlineFontStyle from '~/assets/svg/team-ornament.svg';

export default {
    name: 'ServiceSingle',
    components: {
        Nav,
        HireProcess,
        Projects,
        BorderBottom,
        Cta,
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