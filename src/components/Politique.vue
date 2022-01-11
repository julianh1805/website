<template>
  <div id="politique">
    <div class="container">
      <h1>
        <a class="r-link animated-underline animated-underline">
          Politique de confidentialité
        </a>
      </h1>
      <p>Le site web <b>julian-husson.com</b> est détenu par <b>Julian Husson</b>, qui est un contrôleur de données de vos données personnelles.<br>Nous avons adopté cette politique de confidentialité, qui détermine
        la manière dont nous traitons les informations collectées par <b>julian-husson.com</b>, qui fournit également les raisons pour lesquelles nous devons collecter certaines données personnelles vous
        concernant. Par conséquent, vous devez lire cette politique de confidentialité avant d'utiliser le site web de <b>julian-husson.com</b>.<br>Nous prenons soin de vos données personnelles et nous
        nous engageons à en garantir la confidentialité et la sécurité.</p>
      <h2>Responsable :</h2>
      <p>Qui est responsable du traitement de vos données ?</p>
      <p>Personne physique : Julian Husson</p>
      <p>Adresse : 19 Mail Haroun Tazieff, 44300, Nantes</p>
      <p>Contact : husson.j@yahoo.com | 06 85 48 79 66</p>
      <h2>Les informations personnelles que nous collectons :</h2>
      <p>Lorsque vous visitez le <b>julian-husson.com</b>, nous recueillons automatiquement certaines informations sur votre appareil, notamment des informations sur votre navigateur web, votre adresse IP,
        votre fuseau horaire et certains des cookies installés sur votre appareil. En outre, lorsque vous naviguez sur le site, nous recueillons des informations sur les pages web ou
        les produits individuels que vous consultez, sur les sites web ou les termes de recherche qui vous ont renvoyé au site et sur la manière dont vous interagissez avec le site.
        Nous désignons ces informations collectées automatiquement par le terme "informations sur les appareils".</p>
      <h2>Pourquoi traitons-nous vos données ?</h2>
      <p>Notre priorité absolue est la sécurité des données des clients et, à ce titre, nous ne pouvons traiter que des données minimales sur les utilisateurs, uniquement dans la mesure où
        cela est absolument nécessaire pour maintenir le site web. Les informations collectées automatiquement sont utilisées uniquement pour identifier les cas potentiels d'abus et établir
        des informations statistiques concernant l'utilisation du site web. Ces informations statistiques ne sont pas autrement agrégées de manière à identifier un utilisateur particulier du
        système.<br>Vous pouvez visiter le site web sans nous dire qui vous êtes ni révéler d'informations, par lesquelles quelqu'un pourrait vous identifier comme un individu spécifique et
        identifiable. Les utilisateurs qui ne savent pas quelles informations sont obligatoires sont invités à nous contacter via <b>husson.j@yahoo.com</b>.</p>
      <h2>Autorisation :</h2>
      <p>Vous nous autorisez à traiter vos données personnelles dès lors que vous cochez la case qui nous autorise de manière expresse à traiter les données que vous nous remettez.</p>
      <iframe style="border: 0; height: 200px; width: 100%;"
              src="https://matomo.julian-husson.com/index.php?module=CoreAdminHome&action=optOut&language=fr&backgroundColor=&fontColor=&fontSize=&fontFamily="></iframe>
      <h2>Vos droits :</h2>
      <p>Si vous êtes un résident européen, vous disposez des droits suivants liés à vos données personnelles :</p>
      <ul id="droits">
        <li>Le droit d'être informé.</li>
        <li>Le droit d'accès.</li>
        <li>Le droit de rectification.</li>
        <li>Le droit à l'effacement.</li>
        <li>Le droit de restreindre le traitement.</li>
        <li>Le droit à la portabilité des données.</li>
        <li>Le droit d'opposition.</li>
        <li>Les droits relatifs à la prise de décision automatisée et au profilage.</li>
      </ul>
      <p>Si vous souhaitez exercer ce droit, veuillez nous contacter via les coordonnées en début de page.</p>
      <h2>Liens vers d'autres sites web :</h2>
      <p>Notre site web peut contenir des liens vers d'autres sites web qui ne sont pas détenus ou contrôlés par nous. Sachez que nous ne sommes pas responsables de ces autres sites web ou des
        pratiques de confidentialité des tiers. Nous vous encourageons à être attentif lorsque vous quittez notre site web et à lire les déclarations de confidentialité de chaque site web
        susceptible de collecter des informations personnelles.</p>
      <h2>Sécurité de l'information :</h2>
      <p>Nous sécurisons les informations que vous fournissez sur des serveurs informatiques dans un environnement contrôlé et sécurisé, protégé contre tout accès, utilisation ou divulgation
        non autorisés. Nous conservons des garanties administratives, techniques et physiques raisonnables pour nous protéger contre tout accès, utilisation, modification et divulgation
        non autorisés des données personnelles sous son contrôle et sa garde. Toutefois, aucune transmission de données sur Internet ou sur un réseau sans fil ne peut être garantie.</p>
      <h2>Informations de contact :</h2>
      <p>Si vous souhaitez nous contacter pour comprendre davantage la présente politique ou si vous souhaitez nous contacter concernant toute question relative aux droits individuels et à
        vos informations personnelles, vous pouvez envoyer un courriel à <b>husson.j@yahoo.com</b>.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Politique',
}
</script>

<style lang="scss" scoped>
#politique {
  margin-top: 8rem;
  h1, h1 a {
    font-size: 36px;
    text-align: center;
  }
  h2{
    font-size: 24px;
    margin: 22px 0 10px 0;
  }
  #droits{
    color: $font-main-p-color;
    margin: 10px 0 10px 18px;
  }
}
</style>
