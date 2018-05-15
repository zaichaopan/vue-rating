<template>
  <div class="ratings">
     <span v-for="(val, index) in ratings" 
           :key="index" 
           :class="`star${val}`" 
           :style="{color: getColor(val)}"
           @mouseover="!readOnly && (hoveredRating = val)" 
           @mouseleave="!readOnly && (hoveredRating = 0)">
       <input type="radio" 
              name="rating" 
              :id="ratingIds[index]" 
              :value="val" 
              @click="handleClickRating(val)">
       <label :for="ratingIds[index]" 
              :style="{fontSize: fontSize}">
         <slot name="icon"> &#9733;</slot>    
        </label>
      </span>
  </div>
</template>

<script>
import randomString from "../random-string";

export default {
  model: {
    prop: "rating",
    event: "change"
  },
  props: {
    rating: {
      type: Number,
      default: 0
    },
    maxRating: {
      type: Number,
      default: 5
    },
    inactiveColor: {
      type: String,
      default: "#ddd"
    },
    activeColor: {
      type: String,
      default: "#FFED85"
    },
    fontSize: {
      type: String,
      default: "2em"
    },
    readOnly: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ratings() {
      return Array.from(new Array(this.maxRating), (val, index) => index + 1);
    },
    ratingIds() {
      return Array.from(new Array(this.maxRating), (val, index) =>
        randomString()
      );
    }
  },
  data() {
    return {
      currentRating: this.rating,
      hoveredRating: 0
    };
  },
  methods: {
    handleClickRating(val) {
      if (this.readOnly) {
        return;
      }
      this.currentRating = val;
      this.$emit("change", val);
    },
    getColor(val) {
      return val <= this.currentRating ||
        (!this.readOnly && val <= this.hoveredRating)
        ? this.activeColor
        : this.inactiveColor;
    }
  }
};
</script>

<style lang="scss" scoped>
.ratings {
  display: flex;
  input {
    display: none;
  }
}
</style>
