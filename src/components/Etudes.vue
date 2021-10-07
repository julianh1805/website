<template>
  <div id="formation">
    <div class="container">
      <div class="section-main">
        <h2>
          <a class="r-link animated-underline animated-underline">
            Bienvenues à mon palmarès scolaire : les pourquoi de mes choix
          </a>
        </h2>
      </div>
    <div class="grid">
      <div class="row certifications">
        <div class="section">
          <h3 class="title">Certifications</h3>
          <hr class="sm-separator">
        </div>
          <div class="list-certif">
             <div v-for="certif in certifications" v-bind:class="{'form-hovered': show && certif.id === this.id}" class="certif">
               <div class="logo">
                 <img :src="certif.image" />
               </div>
               <div class="data">
                 <h4 class="titre">{{ certif.titre }}</h4>
                 <p class="delivre">{{ certif.delivre }}</p>
               </div>
             </div>
          </div>
      </div>
      <div class="row formations">
        <div class="list-form">
          <div v-for="(form,index) in formations" @mouseover.native="addHoverClass(form.id)" @mouseleave.native="deleteHoverClass(form.id)" class="formation">
            <div class="logo">
              <img :src="form.image">
            </div>
            <div class="data">
              <h4 class="ecole">{{form.ecole}}</h4>
              <h5 class="diplome">{{ form.diplome }}</h5>
              <p class="annee">{{ form.annee }}</p>
              <br>
              <p class="description" v-html="form.description">
              </p>
              <hr v-if="index != formations.length - 1" class="separator">
            </div>
          </div>
        </div>
        <div v-if="windowWidth >= 968" class="cta">
          <button class="draw-main trans-main to-formation" @click="goToFormation">Visiter mon palmarès</button>
          <button class="draw-main trans-main to-contact" @click="goToContact">Me contacter</button>
        </div>
      </div>
    </div>
      <div v-if="windowWidth < 968" class="cta center">
        <button class="draw-main trans-main to-formation" @click="goToFormation">Visiter mon palmarès</button>
        <button class="draw-main trans-main to-contact" @click="goToContact">Me contacter</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Etudes',
  data() {
    return {
      show: false,
      id: null,
      windowWidth: window.innerWidth,
      certifications : [
        { id: "epsi", image: require('../assets/toeic-logo.jpg'), titre: 'TOEIC (825 points)', delivre: 'Délivré par le TOEIC® Program en juillet 2021'},
        { id: "wis", image: require('../assets/wis-logo.jpg'), titre: 'Chef de projet digital', delivre: 'Délivré par WIS Nantes Program en octobre 2020'},
        { id: "wis", image: require('../assets/ministere-france-logo.jpg'), titre: 'Concepteur développeur d\'applications Niveau II', delivre: 'Délivré par le Ministère du travail en juillet 2020'},
        { id: "wis", image: require('../assets/ministere-france-logo.jpg'), titre: 'Développeur web et web mobile Niveau III', delivre: 'Délivré par le Ministère du travail en juin 2020'},
        { id: "wis", image: require('../assets/certification-voltaire-logo.jpg'), titre: 'Certification voltaire (775 points)', delivre: 'Délivré par Projet Voltaire en février 2019'},
        { id: "iesb", image: require('../assets/ies-bendinat-logo.png'), titre: 'Double délivrance du baccalauréat', delivre: 'Délivré par le Ministère de l’Education Nationale  en juin 2017'}
      ],
      formations : [
        { id: "epsi", image: require('../assets/epsi-logo.jpg'), ecole: 'EPSI', diplome: 'Expert en Informatique et Système d’Information, Ingénierie informatique', annee: '2020-2022', description: "Études & Développement : <br>- Gérer des projets de conception de solutions applicatives dans un environnement agile <br>- Concevoir et développer des solutions applicatives mobiles et embarquées <br>- Concevoir des solutions utilisant l’intelligence artificielle <br>- Concevoir une architecture de Business Intelligence <br>- Gérer et optimiser un système d’information"},
        { id: "wis", image: require('../assets/wis-logo.jpg'), ecole: 'WIS', diplome: 'Gestion du Web / multimédia et webmaster', annee: '2017-2020', description: "Conception & Intégration d'Applications web & mobiles :<br>- Développement Front-end Web<br>- Serveur Web & Pilotage page web<br><br>Communication Digitale & Stratégie Relation Clients :<br>- Communication digitale & Réseaux sociaux<br>- Création et Gestion de contenus<br>- Relation Clients<br><br>Marketing Digital & Analyses de Données :<br>- Marketing & Référencement- Gestion de Données<br><br>Méthodes & Projets :<br>- Environnement Economique & Juridique<br>- Anglais & Communication"},
        { id: "iesb", image: require('../assets/ies-bendinat-logo.png'), ecole: 'IES Bendinat', diplome: 'Bachibac ES, Économie', annee: '2011-2017', description: "Bachibac (Baccalauréat espagnol reconnu par le Ministère de l’Education Nationale en France) à Majorque (Espagne). <br><br>Le bachibac permet la délivrance simultanée du baccalauréat français et du bachillerato espagnol. Ce diplôme est préparé dans les lycées à section binationale français / espagnol \"bachibac\"."},
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
  methods: {
    addHoverClass(id){
      this.id = id;
      this.show = true;
    },
    deleteHoverClass(){
      this.id = null;
      this.show = false;
    }
  }
}
</script>
<style lang="scss">

.form-hovered{
  transform: translate(15px, 0);
  border-left: 2px solid #f6f666!important;
}

.center{
  display: flex;
  justify-content: center;
}

#formation{
  margin-top: 8em;

  .section-main{
    text-align: center;
    margin-bottom: 70px;
    h2{
      font-size: 36px;
    }
  }

  .sm-separator{
  margin-bottom: 14px;
  }

  .grid{
    width: 100%;
    margin: 0 auto;

    .certifications {
      grid-column: 1/2;

      .list-certif{

        .certif{
          display: flex;
          align-items: start;
          padding: 4px 8px;
          margin-bottom: 20px;
          border-left: 2px solid $main-color;
          transition: 0.8s;
          &:hover{
            transform: translate(15px, 0);
            border-left: 2px solid #f6f666;
          }

          .logo{
            margin-right: 5px;
            img{
              width: 40px;
            }
          }

          .data{
            .delivre{
              margin-top: 5px;
               font-size: 12px;
            }
          }
        }
      }
    }
    .formations {
      width: 100%;
      grid-column: 2/4;

      .list-form{
        padding-bottom: 30px;
        .separator{
          height: 1px;
          background: #86a1cd;;
          width: 100%;
          margin: 40px 0;
        }

        .formation{
          display: flex;

          .logo{
            img{
              width: 56px;
            }
            margin-right: 8px;
          }

          .data{
            width: 100%;

            .ecole{
              margin-top: -4px;
            }

            .diplome{
              font-weight: 500;
              margin-bottom: 3px;
            }

          }
        }
      }
    }
  }
  .cta{
    margin: 30px 0 0 20px;
    .to-formation{
      box-shadow: inset 0 0 0 2px $main-color;
      color: white;
      background: $main-color;
    }
    .to-contact{
      box-shadow: inset 0 0 0 2px $main-color;
      color: $main-color;
      background: white;
    }
  }
}

@media (min-width: 276px) {
  .grid{
    display: flex;
    flex-direction: column-reverse;
  }

  .formations{
    margin-bottom: 60px;
  }
}


@media (min-width: 968px) {
  .grid{
    display: grid;
    grid-gap: 4rem;
    grid-template-columns: repeat(3, 1fr);
  }

  .formations{
    margin-bottom: 20px;
  }

  .list-form{
    height: 520px;
    overflow: auto;
    overflow-y: auto;
    scrollbar-gutter: stable;
    scrollbar-color: rgba(4, 56, 159, 0.66) $font-wbg-color;
    scrollbar-width: thin;
    padding-right: 14px;
  }
}
</style>
