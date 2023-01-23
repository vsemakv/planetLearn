<template lang="pug">
    .header 
        n-link(to='/').header__logo   
            img(src="@/assets/images/svg/logoHeader.svg", alt="Logo PlanetLearn").header__logo-image
            p.header__logo-text Planet
                span Learn
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

.header {
    display: flex;

    &__logo{
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        
        &-text{
            color: #FF842B;
            font-weight: 700;
            font-size: 24px;
            line-height: 29px;
            margin-left: 8px;
            
            & > span { 
                color: #000000;
            }
        }
    }
}
</style>