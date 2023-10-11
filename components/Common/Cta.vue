<template>
    <div class="cta position-relative">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 d-flex align-items-center">
                    <div class="cta__block">
                        <h3>Ready to discuss your project?</h3>
                        <p>Drop us a line, and we'll get in touch.</p>
                        <p>We'll see if we're a match and how we can help each other.</p>
                    </div>        
                </div>
                <div class="col-lg-4 position-relative d-flex align-items-center justify-content-lg-end">
                    <img :src="round_shape" alt="Ornaments" class="position-absolute cta__ornament1 d-none d-xxl-block" width="635" height="392"/>
                    <img :src="down_arrow" alt="Ornaments" class="position-absolute cta__ornament2 d-none d-xxl-block float" width="192" height="102"/>
                    <div class="cta__block mt-4">
                        <NuxtLink to="/contact" class="btn-blue">
                            <div class="d-flex align-items-center">
                                Contact Us<img :src="right_arrow" alt="Arrow" width="16" height="16">
                            </div>
                        </NuxtLink>                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import rightArrow from '~/assets/svg/read-more-hover.svg';
import round from '~/assets/svg/ellipse.svg';
import downArrow from '~/assets/svg/down-arrow.svg';

export default {
    name: 'Cta',
    data() {
        return {
            right_arrow: rightArrow,
            round_shape: round,
            down_arrow: downArrow
        }
    }
}
</script>