<template>
    <section>
        <Nav/>
        <header-inner
            headline="Get to Know More "
            headlineStyle="About Us!"
            :ornaments="headlineFontStyle"
            subheadline="A brief introduction about OpenSoftTech."
        >
        </header-inner>
        <div class="about">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="about__block position-relative">
                            <img src="~/assets/images/about-banner.jpg" class="d-block mx-auto img-fluid" alt="About" width="1170" height="530"/>
                            <div class="about__block--content mx-auto position-relative">
                                <subheadline
                                    title="Who "
                                    titleStyle="We Are"
                                    :ornaments="subheaderFontStyle"
                                ></subheadline>      
                                <p>OpenSoftTech is a software development team builder based in New York. We are a group of dedicated, experienced designers and developers who can assist you in finding the ideal offshore personnel for the success of your firm. Our network of experienced, knowledgeable, innovative, global personnel is unrivaled in the industry. </p>                       
                                <p class="mt-3">We understand that finding the right personnel can be challenging, which is why we have built a network of experienced, knowledgeable, and innovative professionals from around the world. Our team is unrivaled in the industry, and we are committed to providing our clients with top-quality talent that will help them achieve their business goals.</p>
                                <p class="mt-3">At OpenSoftTech, we believe that success is built on trust, transparency, and open communication. We work closely with our clients to understand their needs and requirements, and we use our expertise and experience to find the ideal personnel for their projects. We also provide ongoing support to ensure that our clients are satisfied with the performance of their offshore team.</p>
                                <p class="mt-3">Whether you're looking for designers, developers, project managers, or any other type of IT personnel, OpenSoftTech can help. Our extensive network of professionals includes individuals with a wide range of skills and experience, so we can provide you with the ideal team for your specific project.</p>
                                <p class="mt-3">If you're looking for a reliable and experienced team builder to help you find the ideal offshore personnel, look no further than OpenSoftTech. Contact us today to learn more about our services and how we can help you achieve your business goals.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- <BorderBottom/> -->
        <!-- <Gallery/> -->
        <Footer/>
    </section>
</template>

<script>

import Nav from '~/components/Nav';
import BorderBottom from '~/components/Common/BorderBottom';
import Gallery from '~/components/Common/Gallery';
import Footer from '~/components/Footer';
import headlineFontStyle from '~/assets/svg/about-ornament.svg';
import subheaderFontStyle from '~/assets/svg/subheader-font-style.svg';

export default {
    name: 'About',
    components: {
        Nav,
        BorderBottom,
        Gallery,
        Footer,
        "header-inner": () => import("@/components/Common/HeaderInner"),
        "subheadline": () => import("@/components/Common/Subheadline")
    },    
    data() {
        return {
            headlineFontStyle,
            subheaderFontStyle,
        }
    }
}
</script>