<template>
  <div id="contact">
    <div class="container">
        <h1>
          <a class="r-link animated-underline animated-underline">
            Entrons en contact
          </a>
        </h1>
      <section id="content">
        <form @submit.prevent="onSubmit" v-if="!loading && !send">
          <div class="form-group">
            <label for="name">Votre nom : </label>
            <input type="text" name="name" id="name" v-model="name" placeholder="Juliano" required v-bind:class="{'invalid': submitted && name === ''}">
            <span class="invalid" v-if="submitted && name === ''">Vous êtes qui ?</span>
          </div>
          <div class="form-group">
            <label for="message">Votre message : </label>
            <textarea  name="message" id="message" v-model="message" placeholder="Ciao, come stai ?" rows="4" v-bind:class="{'invalid': submitted && message === ''}"></textarea>
            <span class="invalid" v-if="submitted && message === ''">Vous voulez quoi ?</span>
          </div>
          <div class="cta form-button">
            <button class="draw-main trans-main send" value="Send" type="submit">Envoyer</button>
          </div>
        </form>
        <LoadingSpinner v-if="loading"></LoadingSpinner>
        <div class="centered" v-if="!loading && send">
          <p>Cool ! Votre message a bien été envoyé. Si je mets trop de temps à repondre, vous pouvez me trouver tous les soirs au Bar Bière Numéro 8.</p>
        </div>
        <div id="cordonnees">
          <div class="grid">
          <div class="item">
            <a target="_blank" href="https://www.google.com/maps?channel=trow5&client=firefox-b-d&q=google+map+nantes+44300&um=1&ie=UTF-8&sa=X&ved=2ahUKEwj0jaOey6T0AhUE3IUKHUaYAGkQ_AUoAXoECAEQAw">
            <span>
             <i class="fas fa-map-marker-alt"></i>
            </span>
            <p>Nantes (Bretagne), France</p>
            </a>
          </div>
          <div class="item">
            <a target="_blank" href="tel:+330685487966">
            <span>
             <i class="fas fa-phone-alt"></i>
            </span>
            <p>06 85 48 79 66</p>
            </a>
          </div>
          <div class="item">
            <a href="mailto:husson.j@yahoo.com">
            <span>
             <i class="fas fa-envelope"></i>
            </span>
            <p>husson.j@yahoo.com</p>
            </a>
          </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import emailjs from 'emailjs-com';
import LoadingSpinner from "./LoadingSpinner";

export default {
  name: 'Form',
  components: {LoadingSpinner},
  data() {
    return {
      name: '',
      message: '',
      submitted: false,
      loading: false,
      send: false,
      windowWidth: window.innerWidth
    }
  },
  methods: {
    onSubmit(e){
      this.submitted = true;
      if(this.name && this.message){
        try {
          this.loading = true;
          emailjs.sendForm(process.env.VUE_APP_EMAILJS_SERVICE_ID, process.env.VUE_APP_EMAILJS_TEMPLATE_ID, e.target,
              process.env.VUE_APP_EMAILJS_USER_ID, {
                name: this.name,
                message: this.message
              }).then(res => {
                this.name = '';
                this.send = true;
                this.loading = false
          })
        } catch(error) {
          this.loading = false;
          console.log({error})
        }
      }
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
  h1{
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
    .grid{
      .item{
        padding: 20px 0;
        background: white;
        &:hover{
          transition-duration: 600ms;
          cursor: pointer;
          span{
            color: $font-wbg-hover-color!important;
            transition-duration: 600ms;
          }
        }
        span{
          color: $main-color;
          font-size: 28px;
        }
      }
    }
  }
}

@media (min-width: 276px) {
  #content {
    grid-template-columns: 1fr;
  }
  #cordonnees{
    .grid{
      display: grid;
      margin: auto;
      grid-template-columns: repeat(1, 1fr);
      background: $main-color;
      grid-gap: 1px;
      width: 80%;
    }
  }
}

@media (min-width: 276px) and (max-width: 767px){
  #cordonnees {
    margin-top: 40px;
  }
}


@media (min-width: 524px) {
  #content {
    grid-template-columns: repeat(1, 1fr);
  }
  #cordonnees{
  }
}

@media (min-width: 768px) {
  #content {
    grid-template-columns: 3fr 2fr;
    justify-content: space-between;
  }
  #cordonnees{
    justify-content: end;
    .grid{
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      background: $main-color;
      grid-gap: 1px;
      max-height: 330px;
      width: 80%;
    }
  }
}
</style>
