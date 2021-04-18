<template>
  <div class="bg">
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
<style scoped>
.home-content {
  width: 60%;
  height: 100%;
  margin: 20% auto;
}
.links {
  display: flex;
}
a.link {
  margin: 5px;
}
</style>
