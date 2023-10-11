<template>
    <footer class="footer position-relative overflow-hidden">
        <img :src="footer_left" alt="Footer" class="position-absolute footer__ornament1 d-none d-xxl-block" width="257" height="601"/>
        <div class="container position-relative">
            <img :src="footer_arrow" alt="Footer" class="position-absolute footer__ornament2 d-none d-xxl-block float" width="208" height="73"/>
            <div class="footer__line">
                <div class="row">
                <div class="col-lg-3">
                    <div class="footer__block">
                        <img src="~/assets/svg/footer-logo.svg" alt="Logo" width="161" height="42" class="img-fluid">
                        <div class="footer__block--intro">
                            <p>A leading IT company dedicated to providing innovative solutions and exceptional services. With a strong focus on leveraging technology to drive business growth, we empower our clients to stay ahead in today's digital landscape.</p>
                            <div class="footer__socials">
                                <ul class="list-inline">
                                    <li v-for="(social,i) in socials" :key="i" class="list-inline-item">
                                        <a :href="social.link" :aria-label="social.name" target="_blank"><i :class="[social.social,social.socialClass]"></i></a> 
                                    </li>
                                </ul>
                            </div>    
                        </div>
                    </div>
                </div>
                <div class="col-lg-8 offset-lg-1">
                    <div class="row">
                        <div class="col-lg-4">
                            <div class="footer__block">
                                <div class="footer__block">
                                    <h3>Company</h3>
                                    <ul class="list-unstyled">
                                        <li v-for="(companylink,i) in companylinks" :key="i">
                                            <NuxtLink :to="companylink.link">{{ companylink.name }}</NuxtLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="footer__block">
                                <h3>IT Services</h3>
                                <ul class="list-unstyled">
                                    <li v-for="(servicelink,i) in servicelinks" :key="i">
                                        <NuxtLink :to="servicelink.link">{{ servicelink.name }}</NuxtLink>
                                    </li>
                                </ul>                        
                            </div>                    
                        </div>
                        <div class="col-lg-4">
                            <div class="footer__block">
                                <h3>Newsletter</h3>
                                <p>Subscribing to our newsletter is quick, easy, and free. Simply provide us with your email address, and we'll deliver the latest technology insights and resources right to your inbox.</p>
                                <div class="footer__block--newsletter">
                                    <div class="input-group">
                                        <input type="text" class="form-control" placeholder="Enter your email">
                                        <div class="input-group-append">
                                            <button class="btn-blue" type="button">Subscribe</button>
                                        </div>
                                    </div>                                  
                                </div>
                            </div>                    
                        </div>                        
                    </div>
                </div>                                                    
                </div>                
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="footer__copyright text-center">
                        <p>&copy; {{currentYear}} All Rights Reserved. Developed By Bitsware.</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>

import footerArrow from '../assets/svg/footer-arrow.svg';
import footerLeft from '../assets/svg/footer-left.svg';

export default {
    name: 'Footer',
    data() {
        return {
            currentYear: new Date().getFullYear(),
            footer_arrow: footerArrow,
            footer_left: footerLeft,
            companylinks: [
                {
                    name: 'About Us',
                    link: '/about'
                },
                {
                    name: 'FAQs',
                    link: '/faq'
                },
                {
                    name: 'Contact Us',
                    link: '/contact'
                },
                {
                    name: 'Privacy Policy',
                    link: '/privacy-policy'
                },
                {
                    name: 'Terms of Service',
                    link: '/terms-conditions'
                }                                
            ],
            servicelinks: [
                {
                    name: 'Offshore Team',
                    link: '/offshore-team'
                },                
                {
                    name: 'Software Development',
                    link: '/software-development'
                },
                {
                    name: 'Design & Development',
                    link: '/design-development'
                },
                {
                    name: 'Mobile Application',
                    link: '/mobile-application'
                },
                {
                    name: 'DevOps',
                    link: '/devops'
                },
                {
                    name: 'Digital Marketing',
                    link: '/digital-marketing'
                }                                                                  
            ],
            socials: [
                {
                    name: 'Facebook',
                    social: 'fa fa-facebook',
                    socialClass: 'facebook',
                    link: 'https://www.facebook.com/opensofttechllc'
                },
                {
                    name: 'Twitter',
                    social: 'fa fa-twitter',
                    socialClass: 'twitter',
                    link: 'https://twitter.com/_opensofttech'
                },
                {
                    name: 'Pinterest',
                    social: 'fa fa-pinterest',
                    socialClass: 'pinterest',
                    link: 'https://www.pinterest.com/opensofttech'
                },
                {
                    name: 'Instagram',
                    social: 'fa fa-instagram',
                    socialClass: 'instagram',
                    link: 'https://www.instagram.com/opensofttechllc'
                },
                {
                    name: 'Youtube',
                    social: 'fa fa-youtube-play',
                    socialClass: 'youtube',
                    link: 'https://www.youtube.com/@opensofttech'
                },
                {
                    name: 'Linkedin',
                    social: 'fa fa-linkedin',
                    socialClass: 'linkedin',
                    link: 'https://www.linkedin.com/company/opensofttechllc'
                }                                
            ]            
        }
    }
}
</script>