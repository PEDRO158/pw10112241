<template>
    <div>
        <div class="allert alert-danger" role="alert" style="text-align:center">
            <h2><Icon icon="maki:police"></Icon> Acceso no autorizado<Icon icon="ph:hand-doutone"></Icon> </h2>
        </div>      
    </div>
</template>
<script>
    import { Icon } from '@iconify/vue';
    export default{
        name: "NoAutorizarView",
        components: {Icon},
    }
</script>