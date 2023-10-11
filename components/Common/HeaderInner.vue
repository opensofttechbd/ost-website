<template>
    <div class="headerinner position-relative">
        <img :src="headerornament_1" class="position-absolute headerinner__ornament--1 d-none d-lg-block float" alt="Ornament" width="80" height="60"/>
        <img :src="headerornament_2" class="position-absolute headerinner__ornament--2 d-none d-lg-block" alt="Ornament" width="189" height="100"/>
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <div class="headerinner__block mx-auto">
                        <h1>
                            {{ headline }}
                            <span class="subheadlineStyle position-relative">                
                                {{ headlineStyle }}
                                <img :src="ornaments" alt="Header Style" class="position-absolute d-none d-md-block">
                            </span>
                                {{ extraHeadline }}                             
                        </h1>
                        <h2>{{ subheadline }}</h2>                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import headerOrnament1 from '~/assets/svg/header-ornament-1.svg';
import headerOrnament2 from '~/assets/svg/header-ornament-2.svg';

export default {
    name: 'HeaderInner',
    data() {        
        return {
            headerornament_1: headerOrnament1,
            headerornament_2: headerOrnament2,
        }
    },
    props: {
        headline: {
            type: String,
            required: false,
            default: () => ""            
        },
        subheadline: {
            type: String,
            required: false,
            default: () => ""            
        }, 
        ornaments: {
            type: String,
            required: false,
            default: () => ""
        },
        headlineStyle: {
            type: String,
            required: false,
            default: () => ""
        },
        extraHeadline: {
            type: String,
            required: false,
            default: () => ""            
        },                                
    }
}
</script>

<style lang="scss" scoped>

@import '../../assets/scss/style.scss';
.headerinner {
    @include padding(100px,0px,100px,0px);
    background: linear-gradient(96deg, #E8FCF8 0%, #FAF0E6 100%);
    &__ornament {
        &--1 {
            left: 90px;
            top: 50px;
        }
        &--2 {
            right: 0;
            bottom: 0;
        }
    }
    &__block {
        max-width: 800px;
        h1 {
            @include font($base-font,$heading-1,$font-weight-3,$line-height-1);
            color: $black-1000;
            margin-bottom: 25px;
        }
        h2 {
            @include font($base-font,$heading-5,$font-weight-1,$line-height-4);
            color: $black-900;
            margin-bottom: 0;
        } 
        .subheadlineStyle {
            img {
                left: 0;
                bottom: 8px;
            }            
        }               
    }
}

// Media Queries

$max-width: 767px;

@media (max-width: $max-width) {
    .headerinner {
        @include padding(50px,0px,50px,0px);
        &__block {
            h1 {
                @include font($base-font,30px,$font-weight-3,40px);
                margin-bottom: 15px;
            }
            h2 {
                @include font($base-font,$base-font-size,$font-weight-1,24px);
            }
        }
    }
}

</style>