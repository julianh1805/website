<template>
  <div id="contact">
    <div class="container">
        <h2>
          <a class="r-link animated-underline animated-underline">
            Entrons en contact
          </a>
        </h2>
      <section id="content">
        <form>
          <div class="form-group">
            <label for="name">Votre nom : </label>
            <input type="text" name="name" id="name" placeholder="Juliano" required>
          </div>
          <div class="form-group">
            <label for="message">Votre message : </label>
            <textarea  name="message" id="message" placeholder="Ciao, come stai ?" rows="4"></textarea>
          </div>
          <div class="cta form-button">
            <button class="draw-main trans-main send">Envoyer</button>
          </div>
        </form>
        <div id="cordonnees">
          <hr class="lg-separator" v-if="windowWidth < 768">
          <div class="item" v-for="item in items">
            <span>
             <i class="fas" v-bind:class="item.class"></i>
            </span>
            <p>{{ item.text }}</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Form',

  data() {
    return {
      windowWidth: window.innerWidth,
      items: [
        {class: 'fa-map-marker-alt', text: 'Nantes (Bretagne), France'},
        {class: 'fa-phone-alt', text: '06 85 48 79 66'},
        {class: 'fa-envelope', text: 'husson.j@yahoo.com'},
      ]
    }
  },
  beforeMount(){
    this.windowWidth = window.innerWidth;
  },
  mounted() {
    window.onresize = () => {
      this.windowWidth = window.innerWidth;
    }
  },
}
</script>

<style lang="scss" scoped>
#contact {
  margin-top: 8rem;
  text-align: center;
  h2{
    font-size: 36px;
  }
  #content{
    display: grid;
    .cta{
      .send{
        box-shadow: inset 0 0 0 2px $main-color;
        color: white;
        background: $main-color;
      }
    }
  }
  #cordonnees{
    display: flex;
    align-items: center;
    .item{
      padding-bottom: 18px;
      margin-bottom: 18px;
      span{
        color: $main-color;
        font-size: 28px;
      }
    }
  }
}

@media (min-width: 276px) {
  #content {
    grid-template-columns: repeat(1, 1fr);
  }
  #cordonnees{
    flex-direction: column;
    justify-content: space-between;
    .item{
      width: 40%;
      &:not(:last-child){
        border-bottom: 1px solid #86a1cd;
      }
    }
  }
}

@media (min-width: 524px) {
  #content {
    grid-template-columns: repeat(1, 1fr);
  }
  #cordonnees{
    justify-content: space-between;
  }
}

@media (min-width: 768px) {
  #content {
    grid-template-columns: repeat(2, 1fr);
    justify-content: space-between;
  }
  #cordonnees{
    flex-direction: column;
    .item &:not(:last-child){
      border-bottom: 1px solid #86a1cd;
    }
  }
}
</style>
