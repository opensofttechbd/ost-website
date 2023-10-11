<template>
    <div class="whyopensofttech position-relative">
        <img :src="ornament_5" alt="Ornaments" class="position-absolute whyopensofttech__ornament1 d-none d-xxl-block bounce" width="74" height="97"/>
        <img :src="ornament_6" alt="Ornaments" class="position-absolute whyopensofttech__ornament2 d-none d-xxl-block" width="189" height="100"/>
        <img :src="connect" alt="Ornaments" class="position-absolute whyopensofttech__ornament3 d-none d-xxl-block" width="360" height="360"/>
        <img :src="ornament_4" alt="Ornaments" class="position-absolute whyopensofttech__ornament4 d-none d-xxl-block float" width="97" height="74"/>
        <img :src="plus" alt="Ornaments" class="position-absolute whyopensofttech__ornament5 d-none d-xxl-block pulse"  width="20" height="20"/>
        <img :src="round" alt="Ornaments" class="position-absolute whyopensofttech__ornament6 d-none d-xxl-block float" width="15" height="15"/>        
                    
        <WhyChoose/>
        <div class="container">
            <div class="row">
                <div class="whyopensofttech__line">
                    <img src="~/assets/svg/line.svg" alt="Line" class="img-fluid d-none d-xl-block" width="1296" height="1"/>
                </div>
            </div>
        </div>
        <WorkProcess/>
    </div>
</template>

<script>

import WhyChoose from '~/components/Common/WhyChoose';
import WorkProcess from '~/components/Common/WorkProcess';
import ornament05 from '~/assets/svg/ornament-5.svg';
import ornament06 from '~/assets/svg/ornament-6.svg';
import connect01 from '~/assets/images/block.gif';
import plus03 from '~/assets/svg/plus-orange.svg';
import ornament4 from '~/assets/svg/ornament-4.svg';
import round02 from '~/assets/svg/round02.svg';

export default {
    name: 'WhyBitsware',
    components: {
        WhyChoose,
        WorkProcess
    },    
    data() {
        return {
            ornament_5: ornament05,
            ornament_6: ornament06,
            connect: connect01,
            plus: plus03,
            ornament_4: ornament4,
            round: round02
        }
    }
}
</script>