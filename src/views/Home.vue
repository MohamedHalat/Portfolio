<template>
  <div class="home">
    <div class="home-content">
      <h1 class="title">Welcome.</h1>
      <h2 class="subtitie">I'm Mohamed Halat</h2>
      <div class="links">
        <a
          href="https://www.linkedin.com/in/mohamed-halat"
          class="link linkedin"
          target="_blank"
          alt="Linked In"
        >
          <img src="@/assets/linked-in.svg" alt="Linked In" />
        </a>
        <a
          href="https://github.com/MohamedHalat"
          class="link github"
          target="_blank"
          alt="GitHub"
        >
          <img src="@/assets/git.svg" alt="Github" />
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Home",
};
</script>
<style scoped lang="scss">
.home {
  background:linear-gradient(90deg, #4B6CB7 0%, #182848 100%);
  height: 94%;
  position: absolute;
  width: 100%;
}

.home-content {
  color: white;
  width: 60%;
  margin: 20% auto;

  .links {
    display: flex;
    .link {
      margin: 5px;
      img {
        filter: invert(135%) brightness(150%)
      }
    }
  }
}
</style>
