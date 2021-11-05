<script>
import SidebarBrowser from './components/sidebar/SidebarBrowser'
import SidebarMobile from './components/sidebar/SidebarMobile'
export default {
  data: () => {
    return {
      mobileView: true,
      showNav: false
    };
  },
  methods: {
    handleView() {
      this.mobileView = window.innerWidth <= 990;
    }
  },
  components: { SidebarMobile, SidebarBrowser },
  created() {
    this.handleView();
    window.addEventListener('resize', this.handleView);
  }
};
</script>


<template>
  <div id="app">
    <SidebarMobile v-if="mobileView"/>
    <div class="content" :class="{'open':showNav}">
      <div class="top-bar">
        <div id="navigation-icon" v-if="mobileView"
          @click="showNav = !showNav">
          <i class="fas fa-bars"></i>
        </div>
        <SidebarBrowser v-if="!mobileView" />
      </div>
      <router-view />
    </div>
  </div>
</template>


<style lang="scss">
@import url("https://use.fontawesome.com/releases/v5.9.0/css/all.css");
@import url('https://fonts.googleapis.com/css?family=Montserrat:500');
@import url('https://fonts.googleapis.com/css?family=Montserrat:300');

body {
  width: 100%;
  margin: 0;
  padding: 0;
  font-family: "Montserrat";
}
#app {
  width: calc(100% - 20px);
  height: calc(100vh - 20px);
  padding: 10px;
  color: #333;
  overflow: hidden;
}
.top-bar {
  display: flex;
  width: 100%;
}
#navigation-icon {
  padding: 10px 10px 20px;
  margin-right: 10px;
  cursor: pointer;
  i {
    font-size: 2rem;
  }
}
.content {
  position: absolute;
  top: 10px;
  width: calc(100% - 60px);
  padding: 20px;
  background-color: #fff;
  border-radius: 30px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  transition: 1s transform cubic-bezier(0,.12,.14,1);
}
.open {
  transform: translateX(300px);
}

</style>
