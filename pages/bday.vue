<template>
    <NuxtLink v-slot="{ navigate, href }" to="/puzzle" :custom="true">
  <v-sheet
    class="d-flex align-center justify-center flex-wrap text-center mx-auto px-4"
    elevation="4"
    height="1000"
    max-width="400"
    width="100%"
    rounded
  >
    <v-img src="happybday.jpg">

    </v-img><div>
      <div class="mx-auto mt-2 text-h5 font-weight-medium mb-2">
        Stinky cheesy hottie Retoschwein wird hüt 34!
      </div>

      <p class="text-body-2 mb-4">
        Alles gueti zum Geburtstag Baby!       </p>
        <p class="text-body-2 mb-4">
          Es isch amigs schwer zglaube, dass mir eus erst sit zwei Jahre kenned,
        wenn me bedenkt wie viel ich scho ha derfe mit dir erlebe. 
        Freue mich unglaublich fest uf eusi gmeinsami Reis i nerem halbe
        Jahr und au uf alles, wo vorher no und nachher passiert. Danke dass dich
        mit mir durd Welt frissisch, sooo offe bisch und das alles mit grosse
        Begeisterig und Herz machsch. Mit dir han ich Skifahre glernt, 
        Code glernt, cha jetzt sogar chli Haarschnide (skills madafaka!) und bin mit dir bereits sage und schreibe elf mal vereist!
      </p> <p class="text-body-2 mb-4">Ich bin u mega dankbar für din bedingugslose Support, segs während mim Studium und de
        entsprechend stressige ziite, defür dass du mich überhaupt ushaltisch oder au alles, was du für mini Familie machsch. Es isch
        wunderschön, dass du dich für mini Wurzle interessiersch und dass ich
        mittlerwil sogar mit dir chli chan Chinesisch rede! On top of that, weiss ich wükli nöd wie ichs verdient han, mit dinre
        cooking skills verwöhnt zwerde!
      </p>

      <p class="text-body-2 mb-4">
        Zu dim Gschenkli chunsch mit nerem chline Rätsel zu eusem Alltag & eusem Erlebtem :)
      </p>
      <v-btn :href=href link="/puzzle" @click="navigate">Start</v-btn>
    </div>
    <NuxtPage />
  </v-sheet>
</NuxtLink>
  
</template>
