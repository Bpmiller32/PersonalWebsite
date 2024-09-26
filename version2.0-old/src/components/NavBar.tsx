import { defineComponent } from "vue";
import { useWindowSize } from "@vueuse/core";
import SvgLoader from "./SvgLoader.vue";

export default defineComponent({
  setup() {
    const { width: windowWidth } = useWindowSize();

    return () => {
      if (windowWidth.value < 768) {
        return (
          <nav class="mt-10 w-full flex justify-between items-center">
            <button class="flex items-center">
              <SvgLoader name="bpmLogo" class="h-14 w-14" />
            </button>
          </nav>
        );
      } else {
        return (
          <nav class="mt-10 w-full flex justify-between items-center">
            <button class="flex items-center">
              <SvgLoader name="bpmLogo" class="h-14 w-14" />
              <SvgLoader name="bpmText" class="h-10 mt-3 ml-2" />
            </button>

            <div class="flex-none text-sm text-zinc-200">
              <button
                aria-label="nav link to work section"
                class="mx-3 py-2.5 border-b-2 border-transparent hover:border-bpink-50 transition-border hover:text-bteal-50 transition-text ease-in-out duration-500"
              >
                work.
              </button>
              <button
                aria-label="nav link to projects section"
                class="mx-3 py-2.5 border-b-2 border-transparent hover:border-bpink-50 transition-border hover:text-bteal-50 transition-text ease-in-out duration-500"
              >
                projects.
              </button>
              <button
                aria-label="nav link to about section"
                class="mx-3 py-2.5 border-b-2 border-transparent hover:border-bpink-50 transition-border hover:text-bteal-50 transition-text ease-in-out duration-500"
              >
                about.
              </button>
              <button
                aria-label="nav link to contact section"
                class="mx-3 py-2.5 border-b-2 border-transparent hover:border-bpink-50 transition-border hover:text-bteal-50 transition-text ease-in-out duration-500"
              >
                contact.
              </button>
            </div>
          </nav>
        );
      }
    };
  },
});
