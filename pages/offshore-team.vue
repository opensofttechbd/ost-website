<template>
    <section class="service__single">
        <Nav/>
        <header-inner
            headline="Build Your Offshore Dedicated "
            headlineStyle="Team"
            :ornaments="headlineFontStyle"
            subheadline="Our experienced team of designers &amp; developers are eager to assist you on your path to success."
        >
        </header-inner>        
        <div class="introduction">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="introduction__content">
                            <h3>Around 20% of startups fail in 2 years after being open, and 45% — in 5 years.</h3>
                            <p>Building an offshore, dedicated team can be a strategic decision to leverage global talent and expand your business capabilities. It can be an excellent option for businesses looking to leverage global talent and reduce costs.</p>                            
                            <p>Our team comprises highly skilled professionals with deep expertise in their respective domains. We prioritize delivering high-quality work that meets and exceeds your expectations. Our team follows robust processes, quality assurance measures, and rigorous testing to ensure that the final deliverables are of the highest standard.</p>
                            <p>Our team is equipped with reliable communication channels and collaboration tools to ensure seamless interaction with you. We provide regular updates, promptly address any queries or concerns, and foster a transparent and responsive working relationship.</p>
                            <p>Whether you require additional resources, ramping up the team, or adjusting project priorities, our dedicated offshore team can quickly adapt to meet your changing requirements, providing the necessary support for your project's success.</p>
                            <p>Our team is culturally diverse and possesses a strong understanding of working in global environments. We prioritize cultural compatibility and aim to align our work practices with your business culture, ensuring a smooth collaboration experience and minimizing any cultural gaps.</p>
                            <p>We adhere to strict data security protocols to protect your sensitive information. Our team follows industry best practices, implements secure data transmission methods, and signs confidentiality agreements, ensuring the confidentiality and integrity of your data throughout the project lifecycle.</p>
                            <p>Our primary focus is on your satisfaction and success. We adopt a client-centric approach, prioritizing your needs and objectives. We actively engage with you, seeking feedback at every stage of the project, and align our services to deliver customized solutions that meet your specific goals.</p>
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