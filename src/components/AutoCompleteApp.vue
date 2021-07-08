<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AutoCompleteApp",
  mounted() {
    browser.runtime.sendMessage({});
  },
  computed: {
    defaultText() {
      return browser.i18n.getMessage("extName");
    },
  },
});
</script>
