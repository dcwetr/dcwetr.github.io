<template>
    <v-sheet
    class="d-flex align-center justify-center flex-wrap text-center mx-auto px-4"
    elevation="4"
    height="800""
    max-width="400"
    width="100%"
    rounded
  >
  <p class="text-body-2 mb-4">
    Lösig nach "we-re.at/" id url ifüege zums Gschenk becho! :) </p>
    <v-text-field label="Lösig (8 Zeiche)" variant="outlined"></v-text-field>
  <v-otp-input
  v-model="otp" model-value="00XXXXXX"
    length="8"
  ></v-otp-input>
      <p class="text-body-2">
       1. Find me: Döt wo Büecher Muskle gha hend.</p>
       <p class="text-body-2">
        2. Find me: Trinked mir gern heiss & flüssig.</p>
        <p class="text-body-2">
            3. Stolzes Theater (1.Buechstabe vom Vorname).</p>
            <p class="text-body-2">
                4. Simmer zletschd gsi (letschde Buechstabe).</p>
                <p class="text-body-2">
                    5. Gross uf Chinesisch (1. Pinying Buechstabe).</p>
                    <p class="text-body-2">
                      6. Find me: du hesch hunderttusig glichigi devo. </p>
                      <p class="text-body-2">
                        7. Dete hesch din gliebte Hegel verlore (letschde Buechstabe).</p>
                        <p class="text-body-2">
                          8. Find me: Hemmer immer nonig gschafft durespiele. </p>
  </v-sheet>
  </template>    
