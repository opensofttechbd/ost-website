<template>
    <div class="header position-relative">
        <img :src="header_ornament_1" alt="Header Ornament" class="position-absolute header__top--1 d-none d-xxl-block float" width="80" height="60"/>
        <img :src="header_ornament_2" alt="Header Ornament" class="position-absolute header__bottom--1 d-none d-lg-block" width="189" height="100"/>
        <div class="container">
            <div class="row">
                <div class="col-lg-7">
                    <h2>Build your</h2>
                    <h1>
                        <span class="position-relative">
                            <img :src="header_font_style" alt="Header Font" class="position-absolute start-0 bottom-0 d-none d-md-block">
                            Offshore
                        </span> Team
                    </h1>
                    <!-- <h3>First &amp; Reasonable Price</h3> -->
                    <p>Bitsware is a leading offshore team provider through which you can access the world's top 10 percentile talents and build your dream tech team more efficiently.</p>
                    <NuxtLink to="/projects" class="btn-blue">
                        <div class="d-flex align-items-center">
                            View Project<img :src="right_arrow" alt="Arrow" width="16" height="16">
                        </div>
                    </NuxtLink>
                </div>
                <div class="col-lg-5 d-lg-flex">
                    <img :src="header_banner" alt="Header Banner" class="d-block mx-auto img-fluid mt-4" width="670" height="400"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import headerOrnament1 from '~/assets/svg/header-ornament-1.svg';
import headerOrnament2 from '~/assets/svg/header-ornament-2.svg';
import headerFontStyle from '~/assets/svg/header-font-style.svg';
import headerBanner from '~/assets/svg/header-banner.svg';
import rightArrow from '~/assets/svg/arrow-circle-right.svg'

export default {
    name: 'Header',
    data() {
        return {
            header_ornament_1: headerOrnament1,
            header_ornament_2: headerOrnament2,
            header_font_style: headerFontStyle,
            header_banner: headerBanner,
            right_arrow: rightArrow
        }
    }
}
</script>