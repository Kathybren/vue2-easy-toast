<template>
    <div>
        <div class="toast-contenter">
            <transition name="fade">
                <div class="toast" v-if="visible">
                    <span>{{message}}</span>
                </div>
            </transition>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            visible: false,
            message: 'hhhhh'
        }
    }
}
</script>

<style lang="scss" scoped>
.toast-contenter {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 2000;
    display: flex;
    justify-content: center;
    align-items: center;
    .toast {
        width: 180px;
        height: 60px;
        line-height: 60px;
        text-align: center;
        background: rgba(0, 0, 0, 0.61);
        border-radius: 10px;
        color: white;
    }
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity .5s
}

.fade-enter,
.fade-leave-to {
    opacity: 0
}
</style>

