<template>
  <div id="SidebarBrowser">
    <ul>
      <router-link to="/" tag="li">Promodoro</router-link>
      <router-link to="/pinlock" tag="li">Pinlock</router-link>
      <router-link to="/router" tag="li">Router</router-link>
    </ul>
  </div>
</template>


<script>
export default {};
</script>


<style lang="scss" scoped>
#SidebarBrowser {
  align-items: center;
  justify-content: center;
  display: flex;
  width: 100%;
  margin-bottom: 0px;
  ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0 0 0 0;
    li {
      font-size: 2rem;
      padding: 0px 10px;
      cursor: pointer;
      &:hover {
        color: #41B883;
      }
    }
  }
}
</style>
