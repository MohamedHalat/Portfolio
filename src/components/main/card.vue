<template>
  <div>
    <div class="" v-if="title">
      {{ title }}
    </div>
    <div class="" v-if="body">
      {{ body }}
    </div>
    <div class="footer">
      <div class="card-footer-content">
        <div
          class="footer-button"
          v-for="button in footerButtons"
          :key="button.text"
        >
          <a
            style="color: #0000b5; text-decoration: none"
            href="https://github.com/MohamedHalat/AnalyticsTool"
            target="_blank"
            rel="noreferrer"
            title="GitHub"
          >
            {{ button.text }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Card",
  props: {
    title: {
      type: String,
      required: false,
    },
    subtitle: {
      type: String,
      required: false,
    },
  },
};
</script>