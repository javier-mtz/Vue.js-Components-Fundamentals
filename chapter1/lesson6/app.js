let planComponent = {
  template: "#plan-template",
  props: {
    name: {
      type: String,
      required: true,
    },
    selectPlan: {
      type: String,
    },
  },
  methods: {
    select() {
      this.$emit("select", this.name);
      this.selected = true;
    },
  },
  computed: {
    isSelected() {
      return this.name === this.selectPlan;
    },
  },
};

let planPickerComponent = {
  template: "#plan-picker-template",
  components: {
    plan: planComponent,
  },
  data() {
    return {
      plans: ["The Single", "The Curious", "The Addict"],
      selectedPlan: null,
    };
  },
  methods: {
    selectPlan(plan) {
      this.selectedPlan = plan;
    },
  },
};

new Vue({
  el: "#app",
  components: {
    "plan-picker": planPickerComponent,
  },
});
