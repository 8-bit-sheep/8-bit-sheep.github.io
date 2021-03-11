(ns sakalli.intro)

(def intro-html
  [:div
   [:p [:b "Huom: Vastaa kyselyyn viimeistään sunnuntaina 28.2!"]]
   [:p
    "Ensi viikon keskiviikkona 3.3. pidettävä Medialiiton teknologiaryhmän tulevaisuustyöpaja rakennetaan tämän kyselyn tulosten ympärille. Tarkoitus on löytää mahdollisia hankkeita joihin medialiiton teknologiaryhmä keskittyy vastaisuudessa. Hyödynnä esimerkiksi seuraavaa materiaalia ajattelun ja ideoinnin kirittämiseksi:"]
   [:ul
    [:li
     "Yksittäisenä esimerkkinä alueesta jonka tutkimuksessa on viime vuosina tapahtunut paljon on neuroverkkoihin perustuva sisällön generointi/syntetisointi. Esimerkkinä huomiota herättänyt OpenAI:n GPT3:een perustuva DALL-E “avokado-tuoli” -tutkimus (https://openai.com/blog/dall-e/). Alla olevasta videosta saa hyvän yleiskuvan mistä on kysymys sekä inspiraatiota siihen minkälaisia muita mahdollisuuksia kyseiset menetelmät mahdollistavat, koska on hyvä muistaa etteivät ne rajoitu vain kyseisessä tutkimuksessa esitettyyn sovellukseen."]
    [:div
     [:iframe
      {:width "100%"
       :height "300px"
       :style {:padding "1em"}
       :src "https://www.youtube.com/embed/C7D5EzkhT6A"
       :frameBorder "0"
       :allow
       "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
       :allowFullScreen true}]]
    [:li
     "Medialiiton Mikä media 2030 -skenaariokuva (sekä muu materiaali: https://www.media2030.fi/)"]
    [:a
     {:href
      "https://static.wixstatic.com/media/df71aa_bc455c0e15a54b34a9da766e65a12294~mv2.png/v1/fill/w_1886,h_1104,al_c,q_95/df71aa_bc455c0e15a54b34a9da766e65a12294~mv2.webp"
      :target "_blank"}
     [:img
      {:style {:padding "1em"}
       :src
       "https://static.wixstatic.com/media/df71aa_bc455c0e15a54b34a9da766e65a12294~mv2.png/v1/fill/w_1886,h_1104,al_c,q_95/df71aa_bc455c0e15a54b34a9da766e65a12294~mv2.webp"
       :width "100%"
       :height "auto"}]]
    [:li
     "Gartnerin klassikot: nousussa olevat teknologiat ja digimarkkinoinnin hypekäyrät"]
    [:div {:style {:display "grid" :grid-template-columns "1fr 1fr"}}
     [:a
      {:href
       "https://images-cdn.newscred.com/Zz1lNWZiNWRjMmRlNWIxMWVhYjFjMjBlNjhjZDJlOWEzMw=="
       :target "_blank"}
      [:img
       {:style {:padding "1em"}
        :src
        "https://images-cdn.newscred.com/Zz1lNWZiNWRjMmRlNWIxMWVhYjFjMjBlNjhjZDJlOWEzMw=="
        :width "100%"
        :height "auto"}]]
     [:a
      {:href
       "https://emtemp.gcom.cloud/ngw/globalassets/en/marketing/images/tile/swg_digital_marketing_hype_cycle2020.png"
       :target "_blank"}
      [:img
       {:style {:padding "1em"}
        :src
        "https://emtemp.gcom.cloud/ngw/globalassets/en/marketing/images/tile/swg_digital_marketing_hype_cycle2020.png"
        :width "100%"
        :height "auto"}]]]
    [:li
     "Herätteeksi vielä muutamia muita viime vuosina esillä olleita teemoja:"]
    [:ol [:li "Vaivaton (biometrinen) tunnistaminen"]
     [:li "Vaivaton B2C ja B2B (mikro) ostaminen"]
     [:li
      "Nk. differential privacy ja homomorfinen suojaus yksityisyyden suojaan liittyen datan käsittelyssä"]
     [:li "MyData"]
     [:li
      "Erilaiset koneoppimiseen ja AI:hin liittyvät kehitykset kuten puheen luonnollinen syntetisointi"]
     [:li
      "NLP-analytiikka ja uutis/some-kuuntelutyökaluissa liittyen puheenaiheiden ja uutisten reaaliaikaiseen tilannekuvaan"]
     [:li "Hajautettu internet (dApps)"]
     [:li
      "Jos ajatellaan enemmän sisältönäkökulmasta, miten esimerkiksi mediamyynnissä diversifioituminen? Esimerkkinä Postin OmaPosti applikaatio joka yllättävän suuri media Suomessa"]
     [:li
      "Muita kehityksiä, esimerkiksi natiivimainonta tai verkkokaupat mediana"]]]])
