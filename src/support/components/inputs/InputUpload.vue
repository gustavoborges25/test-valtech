<template lang="pug">
  .input-upload
    input-text(
      :label="label"
      @click="pickFile"
      v-model="getFile.name"
      icon="attach_file"
      readonly
      :required="required"
    )
    input(
      ref="image"
      :accept="accept"
      @change="onFilePicked"
      type="file"
      style="display: none"
    )
</template>

<script>
import InputText from './InputText.vue';

export default {
  name: 'InputUpload',
  components: {
    InputText,
  },
  props: {
    value: {
      type: Object,
      default() {
        return {
          name: '',
          file: '',
        };
      },
    },
    label: {
      type: String,
      default: '',
    },
    accept: {
      type: String,
      default: 'image/*',
    },
    required: {
      type: Boolean,
    },

  },
  computed: {
    getFile: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', { name: value[0].name, file: value[0] });
      },
    },
  },
  methods: {
    pickFile() {
      this.$refs.image.click();
    },
    onFilePicked(event) {
      const {
        target,
      } = event;

      const files = target.dataTransfer ? target.dataTransfer.files : target.files;
      if (!files || !files.length) {
        return;
      }
      this.getFile = files;
    },
  },
};
</script>
