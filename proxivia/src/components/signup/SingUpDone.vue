<template>
  <div class="container">
    <p class="done-title">Demande d'inscription envoyée</p>
    <p class="done-text">
      L'équipe Proxivia vous remercie de votre demande d'inscription. Nous
      analysons votre profil et nous revenons vers vous rapidement.
    </p>
    <md-button  href="/login" class="form-button input-btn">
       Revenir sur le site
    </md-button>
    <md-button class="discover-formations">
      Découvrir nos formations
    </md-button>
  </div>
</template>

<style scoped>

.input-btn {
  filter: drop-shadow(0px 3px 6px rgba(44, 40, 40, 0.11));
  overflow: visible;
  width: 180px;
  height: 40px;
  background-color: #d23367;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.done-title {
  text-align: left;
  font-size: 25px;
  letter-spacing: 0px;
  color: #000000;
  margin-bottom: 7%;
}

.done-text {
  text-align: left;
  letter-spacing: 0px;
  color: #818e94;
  opacity: 1;
}


.discover-formations {
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #d23367;
  border-radius: 5px;
  opacity: 1;
  color: #d23367;
  font-size: 13px;
  filter: drop-shadow(0px 3px 6px rgba(44, 40, 40, 0.11));
  overflow: visible;
  width: 180px;
  height: 40px;
  cursor: pointer;
}

.discover-formations:hover {
  background: #5A6268;
  border: 1px solid #5A6268;
  color: #fff;
}
</style>
