<template>
  <footer>
    <h6 class="footer-text">
      Copyright {{ new Date().getFullYear() }}: Riley Bauer 🐰
    </h6>
  </footer>
</template>

<style lang="css" scoped>
footer {
  height: 25px;
  width: 100vw;
  position: sticky;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: right;
  background-color: var(--nav-bar-color);
  box-shadow: 0px -3px 10px lightgrey;
}

.footer-text {
  margin-right: 25px;
}
</style>
