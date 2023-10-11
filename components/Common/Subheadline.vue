<template>
    <div class="title">
        <h3>
            {{ title }}
            <span class="subtitle position-relative">                
                {{ titleStyle }}
                <img :src="ornaments" alt="Header Style" class="position-absolute d-none d-md-block">
            </span>
            {{ extraTitle }}             
        </h3>        
    </div>
</template>

<script>
export default {
    name: 'Subheadline',
    props: {
        title: {
            type: String,
            required: false,
            default: () => ""            
        },
        ornaments: {
            type: String,
            required: false,
            default: () => ""
        },
        titleStyle: {
            type: String,
            required: false,
            default: () => ""
        },
        extraTitle: {
            type: String,
            required: false,
            default: () => ""            
        },        
    }
}
</script>

<style lang="scss" scoped>

@import '../../assets/scss/style.scss';
.title {
    h3 {
        @include font($base-font,$heading-2,$font-weight-3,$line-height-2);
        color: $black-1000;
        margin-bottom: 25px !important;
        .subtitle {
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
    .title {
        h3 {
            font-size: 35px;
            line-height: 40px;
            margin-bottom: 20px !important;            
        }
    }
}

</style>