<template>
    <div class="hire__process">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h3>How to Hire OpenSoftTech</h3>
                </div>
            </div>
            <div class="row">
                <div v-for="(hireprocess,i) in hireprocesses" :key="i" class="col-xl-3 col-lg-6 col-md-6 g-4">
                    <div class="hire__process--block h-100">
                        <div class="hire__process--top d-flex align-center justify-content-between">
                            <div>
                                <img :src="hireprocess.image" class="img-fluid" :alt="hireprocess.alt">
                            </div>
                            <div>
                                <h4>{{ hireprocess.step }}</h4>
                            </div>
                        </div>
                        <div class="hire__process--bottom">
                            <h5>{{ hireprocess.name }}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import requirement from '~/assets/svg/requirement.svg';
import clientcall from '~/assets/svg/client-call.svg';
import introduce from '~/assets/svg/introduce.svg';
import contract from '~/assets/svg/contract.svg';

export default {
    name: 'HireProcess',
    data() {
        return {
            requirement: requirement,
            clientcall: clientcall,
            introduce: introduce,
            contract: contract,
            hireprocesses: [
                {
                    name: 'Requirement',
                    alt: 'Requirement',
                    image: requirement,
                    step: 'Step 01'                    
                },
                {
                    name: 'Client call',
                    alt: 'Client call',
                    image: clientcall,
                    step: 'Step 02'                    
                },
                {
                    name: 'Introduce',
                    alt: 'Introduce',
                    image: introduce,
                    step: 'Step 03'                    
                },
                {
                    name: 'Contract',
                    alt: 'Contract',
                    image: contract,
                    step: 'Step 04'                    
                }                
            ]
        }
    }
}
</script>

<style lang="scss" scoped>

@import '../../assets/scss/style.scss';

.hire__process {
    background: linear-gradient(96deg, #E8FCF8 0%, #FAF0E6 100%);
    @include padding(150px,0px,150px,0px);
    margin-bottom: 120px;
    h3 {
        @include font($base-font,$heading-2,$font-weight-3,55px);
        margin-bottom: 60px;
    }
    &--block {
        @include padding(30px,30px,30px,30px);
        background: $white-100;
        box-shadow: 0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06);
        border-radius: 8px;
    }
    &--top {
        margin-bottom: 30px;
        h4 {
            @include font($base-font,18px,$font-weight-2,24.48px);
            color: #5A5A67;
            margin-bottom: 0;
        }
    } 
    &--bottom {
        margin-top: 30px;
        h5 {
            @include font($base-font,20px,$font-weight-2,28px);
            color: $black-1000;
            margin-bottom: 0;
        }
    }   
}

// Media Queries: 768px - 991px

$min-width-768: 768px;
$max-width-991: 991px;

@media (min-width: $min-width-768) and (max-width: $max-width-991) {
    .hire__process {
        @include padding(70px,0px,70px,0px);
        margin-bottom: 70px;
        h3 {
            margin-bottom: 20px;
        }
    }
}

// Media Queries

$max-width: 767px;

@media (max-width: $max-width) {
    .hire__process {
        @include padding(35px,0px,35px,0px);
        margin-bottom: 35px;
        h3 {
            @include font($base-font,35px,$font-weight-3,40px);
            margin-bottom: 20px;
        }
    }
}

</style>