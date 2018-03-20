<template>
  <div class='modal-overlay' @click='closeModal'>
    <div class='modal' @click='$event.stopPropagation()'>
      <button class='close-button' @click='closeModal'>X</button>
      <div> User form for user {{ $route.params.userId }} </div>
      <div> User data: {{ user }} </div>
      <div class='form'>
        <div>
        <label>Name
          <input v-model='user.name' />
        </label>
        </div>
        <div>
        <label>Age
          <input v-model='user.age' />
        </label>
        </div>
        <div>
        <label>Height
          <input v-model='user.height' />
        </label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    closeModal() {
      this.$router.push('/')
    }
  },

  data() {
    return {
      user: {}
    }
  },

  created() {
    fetch(`/api/some-resource/${this.$route.params.userId}`)
      .then(res => res.json())
      .then(user => (this.user = user))
  }
}
</script>

<style lang='scss'>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
}

.modal {
  width: 500px;
  height: 700px;
  margin: auto auto;
  background: white;
  padding: 20px;

  .close-button {
    display: block;
    margin-bottom: 10px;
    cursor: pointer;
  }
}

.form {
  margin-top: 20px;

  > div + div {
    margin-top: 10px;
  }
}
</style>
