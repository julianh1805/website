<template>
  <div id="formation">
    <div class="container">
      <div class="section-main">
        <h1>
          <a class="r-link animated-underline animated-underline">
            Bienvenue à mon palmarès scolaire
          </a>
        </h1>
      </div>
    <div class="grid">
      <div class="row certifications">
        <div class="section">
          <h2 class="title">Diplômes et certifications</h2>
          <hr class="sm-separator">
        </div>
          <div class="list-certif">
             <div v-for="certif in certifications" v-bind:class="{'form-hovered': show && certif.id === this.id}" class="certif">
               <div class="logo">
                 <img v-bind:alt="'logo ' + certif.titre" :src="certif.image" />
               </div>
               <div class="data">
                 <h3 class="titre">{{ certif.titre }}</h3>
                 <p class="delivre">{{ certif.delivre }}</p>
               </div>
             </div>
          </div>
      </div>
      <div class="row formations">
        <div class="list-form">
          <div v-for="(form,index) in formations" @mouseover.native="addHoverClass(form.id)" @mouseleave.native="deleteHoverClass(form.id)" class="formation">
            <div class="logo">
              <img v-bind:alt="'logo ecole ' + form.ecole" :src="form.image">
            </div>
            <div class="data">
              <h3 class="ecole">{{form.ecole}}</h3>
              <h4 class="diplome">{{ form.diplome }}</h4>
              <p class="annee">{{ form.annee }}</p>
              <br>
              <p class="description" v-html="form.description">
              </p>
              <hr v-if="index !== formations.length - 1" class="separator">
            </div>
          </div>
        </div>
      </div>
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
      certifications : [
        { id: "epsi", image: require('../assets/epsi-logo.webp'), titre: 'Expert en informatique et systèmes d\'information', delivre: 'Délivré par l\'Ecole privée des sciences informatiques en août 2022'},
        { id: "wis", image: require('../assets/wis-logo.webp'), titre: 'Chef de projet digital', delivre: 'Délivré par WIS Nantes Program en octobre 2020'},
        { id: "wis", image: require('../assets/ministere-france-logo.webp'), titre: 'Concepteur développeur d\'applications', delivre: 'Délivré par le Ministère du travail en juillet 2020'},
        { id: "wis", image: require('../assets/ministere-france-logo.webp'), titre: 'Développeur web et web mobile', delivre: 'Délivré par le Ministère du travail en juin 2020'},
        { id: "iesb", image: require('../assets/ies-bendinat-logo.webp'), titre: 'Double délivrance du baccalauréat', delivre: 'Délivré par le Ministère de l’Education Nationale en juin 2017'}
      ],
      formations : [
        { id: "epsi", image: require('../assets/epsi-logo.webp'), ecole: 'EPSI', diplome: 'Expert en informatique et systèmes d\'information, Ingénierie informatique', annee: '2020-2022', description: "Études & Développement : <br>- Gérer des projets de conception de solutions applicatives dans un environnement agile <br>- Concevoir et développer des solutions applicatives mobiles et embarquées <br>- Concevoir des solutions utilisant l’intelligence artificielle <br>- Concevoir une architecture de Business Intelligence <br>- Gérer et optimiser un système d’information"},
        { id: "wis", image: require('../assets/wis-logo.webp'), ecole: 'WIS', diplome: 'Chef de projet digital, Expertise digitale', annee: '2017-2020', description: "Conception & Intégration d'Applications web & mobiles :<br>- Développement Front-end Web<br>- Serveur Web & Pilotage page web<br><br>Communication Digitale & Stratégie Relation Clients :<br>- Communication digitale & Réseaux sociaux<br>- Création et Gestion de contenus<br>- Relation Clients<br><br>Marketing Digital & Analyses de Données :<br>- Marketing & Référencement- Gestion de Données<br><br>Méthodes & Projets :<br>- Environnement Economique & Juridique<br>- Anglais & Communication"},
        { id: "iesb", image: require('../assets/ies-bendinat-logo.webp'), ecole: 'IES Bendinat', diplome: 'Bachibac ES, Économie', annee: '2011-2017', description: "Bachibac (Baccalauréat espagnol reconnu par le Ministère de l’Education Nationale en France) à Majorque (Espagne). <br><br>Le bachibac permet la délivrance simultanée du baccalauréat français et du bachillerato espagnol. Ce diplôme est préparé dans les lycées à section binationale français / espagnol \"bachibac\"."},
      ]
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
            .titre{
              font-weight: 600;
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
    scrollbar-color: rgba(4, 56, 159, 0.66) $font-wbg-color;
    scrollbar-width: thin;
    padding-right: 14px;
  }
}
</style>
