(ns sakalli.configuration)

(def common-labels
  {:question
   "Arvioi yllä olevaa ideaa ja sen vaikutuksia suomalaiselle media-ekosysteemille mikäli sitä alettaisiin editämään teknologiaryhmän puitteissa."
   :triad-top
   "idean hyödyt ja vaikutukset ovat potentiaalisesti huomattavia"
   :triad-left "idean tuottamat hyödyt alkaisivat näkyä nopeasti"
   :triad-right
   "idean meriteistä huolimatta pelkään ettei tähän kannata lähteä"})

(def triads
  {:medialiitto
   [{:id 0
     :narrative
     [:div
      [:h3 "Idea 1. Sisältöjen personointi ja kiinnostusprofiilit "]
      [:h4 "Yhteenveto"]
      [:p
       "Personoida käyttäjän sisältökokemusta hänen kiinnostuksiinsa pohjautuen yli palvelurajojen ja tarjota mainostajille mielekkäitä (kontekstuaalisia kohderyhmiä)"]
      [:h4 "Mikä on hankkeen tavoite ja hyöty?"]
      [:p
       "Tarjota käyttäjälle omiin kiinnostuksen kohteisiin liittyvää sisältöä kaikissa mukana olevissa palveluissa, käyttäjän antamaan suostumukseen perustuen. Parantaa engagement-mittareita ja tarjoaa mainostajille selkeitä kontekstuaalisia kohderyhmiä, joiden ostaminen olisi helppoa, mikäli ne olisivat yhteisesti määriteltyjä."]
      [:h4 "Keitä tarvitaan jotta se voisi onnistua?"]
      [:p
       "Media- ja sisältömyyntiä sekä sisällöntuotanto-osaamista määrittämään riittävän yleispätevät profiilit, tekniikkaa määrittelemään toteutuksen reunaehdot. Lisäksi tarvitaan keskitetty ratkaisu, jossa käyttäjät hallinnoivat omaa profiiliaan."]
      [:h4
       "Miksi hanketta kannattaisi edistää teknologiatyöryhmässä?"]
      [:p
       "“Ole se muutos, jonka haluat maailmassa nähdä”. Asian edistämiselle ei liene olemassa muita relevantteja foorumeita, teknologiaryhmä voisi toimia aloitteen tekijänä. Sivuaa teknisesti media-avain-hanketta."]]
     :question (:question common-labels)
     :triad-top (:triad-top common-labels)
     :triad-left (:triad-left common-labels)
     :triad-right (:triad-right common-labels)}
    {:id 1
     :narrative
     [:div [:h3 "Idea 2. Asiakas edellä"] [:h4 "Yhteenveto"]
      [:p
       "Hankkeen lopputulemana on pienempi riippuvuus legacy-järjestelmistä ja nopeampi asiakaslähtöinen kehittäminen jonka keskiössä on palvelupolkujen suoraviivaistaminen ja tilaustuotteiden ja tilaustyyppien ketterämpi hallinta, niin että eri asiakasryhmät huomioidaan paremmin."]
      [:h4 "Mikä on hankkeen tavoite ja hyöty?"]
      [:p
       "Hankkeen avulla tavoitellaan kehitystä, jonka avulla saadaan legacy-järjestelmät siirrettyä digiaikaan . Tätä kautta saadaan luotua yhteinen perusta (tapa tehdä, metadata jne.), jonka avulla voidaan keskittyä asiakaslähtöiseen palveluiden kehittämiseen ja riippuvuus järjestelmistä olisi pienempi."]
      [:h4 "Keitä tarvitaan jotta se voisi onnistua?"]
      [:p
       "Hanke vaatii asiakaslähtöistä kehitystapaa ja siinä on hyvä olla mukana isojen ja pienien mediatalojen edustajia."]
      [:h4
       "Miksi hanketta kannattaisi edistää teknologiatyöryhmässä?"]
      [:p
       "Hankkeen looginen paikka on teknologiaryhmä, sillä ryhmässä on osaamista ajatella hankkeen mahdollisia vaikutuksia asiakkaan (sisäiset ja ulkoiset) näkökulmasta."]]
     :question (:question common-labels)
     :triad-top (:triad-top common-labels)
     :triad-left (:triad-left common-labels)
     :triad-right (:triad-right common-labels)}
    {:id 2
     :narrative
     [:div [:h3 "Idea 3. Liiton yhteinen asiantuntijapalvelu"]
      [:h4 "Yhteenveto"]
      [:p
       "Luodaan liitolle yhteinen asiantuntijapalvelu, joka antaa suosituksia ja toimii käytännön tulkkina muuttuvien evästekäytäntöjen, selaintekniikoiden ja hakupalveluiden algoritmien osalta."]
      [:h4 "Mikä on hankkeen tavoite ja hyöty?"]
      [:p
       "Tiukentuvan ja jatkuvasti muuttuvien evästekäytäntöjen, selaintekniikkojen ja Google hakupalveluun liittyvä yhteinen reagointi ja suositukset. Ns. perusasiat ja pohja kuntoon digipalveluiden kehityksessä ja ylläpidossa. Pienen alan resurssien tehokas käyttö."]
      [:h4 "Keitä tarvitaan jotta se voisi onnistua?"]
      [:p
       "Voisiko liitolla tai esim. MMF:llä olla ryhmä, joka kerää näitä yhteen ja jakaa? Tai ostaminen keskitetysti aiheeseen erikoistuneilta konsulttitaloilta? Vaatii media-alan ja mediatalojen toiminnan ymmärrystä."]
      [:h4
       "Miksi hanketta kannattaisi edistää teknologiatyöryhmässä?"]
      [:p
       "Koskettaa koko media-alaa eikä itsessään tuota kilpailuetua. Jatkuvaan muutosten seurantaan ei tahdo löytyä isoistakaan mediataloista resursseja. Lisäksi vaatii syvällistä asiaan perehtymistä ja jatkuvaa seurantaa."]]
     :question (:question common-labels)
     :triad-top (:triad-top common-labels)
     :triad-left (:triad-left common-labels)
     :triad-right (:triad-right common-labels)}
    {:id 3
     :narrative
     [:div
      [:h3
       "Idea 4. Jaicomin yhteinen piiskaus digiajan tilaus- ja asiakkuudenhallintajärjestelmäksi"]
      [:h4 "Yhteenveto"]
      [:p
       "Kayakin toiminallisuuksien laajentaminen kattamaan myös digi-ajan vaatimukset, kuin myös kattamaan paremmin asiakkuuden hallintaa."]
      [:h4 "Mikä on hankkeen tavoite ja hyöty?"]
      [:p
       "Jaicomin käyttömahdollisuudet laajentuvat print fulfillment järjestelmästä laaja-alaisemmaksi digiajan asiakkuuden hallintajärjestelmäksi. Näin ollen yritysten ei tarvitse hankkia tähän kylkeen toista digituotteiden tilaustenhallintajärjestelmää ja operoimaan usean järjestelmän ympäristössä (kallista ja paljon resursseja vievää)"]
      [:h4 "Keitä tarvitaan jotta se voisi onnistua?"]
      [:p
       "Jokaisesta yrityksestä valitut henkilöt jotka keräävät yrityksen näkemyksen ja vaatimukset valmistelutyönä, synkataan yhteistyössä Jaicomin kanssa (mediafirmat ja Jaicom), luodaan samalla malli jolla vaatimuksia iteroidaan ja Jaicom antaa päivityksiä miten homma etenee"]
      [:h4
       "Miksi hanketta kannattaisi edistää teknologiatyöryhmässä?"]
      [:p
       "Vastaa juuri ryhmän tarkoitusta, että miten saadaan yhteisiä hyötyjä yrityksille jotka käyttävät samaa järjestelmää (tämä ei siis itsessään tuo kilpailuetua), myös vältetään tällä sitä että jokainen omalla tahollaan ajaa eri asioita, johtaen Jaicomin rajallisten resurssien epäoptimaaliseen hyödyntämiseen jolloin ei saada kuin pieniä parannuksia mutta suurempi transformaatio jää tekemättä"]]
     :question (:question common-labels)
     :triad-top (:triad-top common-labels)
     :triad-left (:triad-left common-labels)
     :triad-right (:triad-right common-labels)}
    {:id 4
     :narrative
     [:div [:h3 "Idea 5. Yllättävää lisäarvoa tuova personointi"]
      [:h4 "Yhteenveto"]
      [:p
       "Asiakkaalle tarjoillaa positiivisesti yllättäviä personoituja sisältöjä ilman asiakkaan omaa vaivaa. Sisältöjä tulisi personoida aiempien käyttökertojen lisäksi mm. käyttöajankohdan, päätelaitteen sekä muun digijalanjäljen (my data & AI) perusteella."]
      [:h4 "Mikä on hankkeen tavoite ja hyöty?"]
      [:p
       "Tavoite olisi rakentaa malli, jolla sisältöjä personoitaisiin asiakkaalle yllättävillä tavoilla ristiin yli mediatalojen. Tämän ansiosta käyttökokemus parantuisi ja näin ollen oletettavasti lisäisi niin sisältö- kuin mainostuloja"]
      [:h4 "Keitä tarvitaan jotta se voisi onnistua?"]
      [:p
       "Merkittävää osaa mediataloista (toimituksia, sisältömyynnin edustajia ja luonnollisesti kehitystiimejä)"]
      [:h4
       "Miksi hanketta kannattaisi edistää teknologiatyöryhmässä?"]
      [:p
       "Selkeästi yhteinen ongelma, jota ei voi ratkaista yksin (muutoin personointitoteutukset jäävät mediatalokohtaisiksi)"]]
     :question (:question common-labels)
     :triad-top (:triad-top common-labels)
     :triad-left (:triad-left common-labels)
     :triad-right (:triad-right common-labels)}
    {:id 5
     :narrative
     [:div
      [:h3
       "Idea 6. Yhtenäiset metatiedot (pohjat kuntoon) - tekoälyn ja toimintamallien yhteiskehittäminen"]
      [:h4 "Yhteenveto"]
      [:p
       "Lisätäksemme kiinnostavan sisällön löydettävyyttä kuluttajillemme yhtenäinen personointi ja tagitys läpi palveluiden ja myös datan kaupallinen hyödyntäminen jatkossa."]
      [:h4 "Mikä on hankkeen tavoite ja hyöty?"]
      [:p
       "Yhtenäisten metatietojen, sitä hyödyntävän tekoälyn/nlp:n ja toimintamallien yhteiskehittäminen. Hyöty tulee asiakkaille relevantin sisällön löydettävyydestä läpi eri palveluiden, kustannusten jakamisesta sekä yhteisen metatiedon hyödynnettävyydestä uudenlaisia mediaratkaisuja tulevaisuudessa luodessamme. Hyvät pohjat mahdollistavat paljon uutta innovointia mutta pskt pohjat blokkaa lähes kaiken."]
      [:h4 "Keitä tarvitaan jotta se voisi onnistua?"]
      [:p
       "Tarpeeksi laaja osanotto medialiiton jäsenistä, mahdollisesti konsultti viemään asiaa neutraalisti eteenpäin"]
      [:h4
       "Miksi hanketta kannattaisi edistää teknologiatyöryhmässä?"]
      [:p
       "Teknologiaryhmässä on sekä kaupallinen että tekninen ymmärrys tarvittavalla tasolla. Tällä tavoin saataisiin myös tarpeeksi laaja osallistuminen, jotta hankkeesta olisi hyötyä"]]
     :question (:question common-labels)
     :triad-top (:triad-top common-labels)
     :triad-left (:triad-left common-labels)
     :triad-right (:triad-right common-labels)}
    {:id 6
     :narrative
     [:div [:h3 "Idea 7. Keskitetty ja selkeä käyttökokemus"]
      [:h4 "Yhteenveto"]
      [:p
       "Mediapalveluiden käytettävyyden kehittäminen siten, että niistä saadaan käyttäjäystävällisiä, yksinkertaisia ja yhdenmukaisia suostumus-, kirjautumis- ja maksu toiminnallisuuksien osalta"]
      [:h4 "Mikä on hankkeen tavoite ja hyöty?"]
      [:p
       "Pystyttäisiin tuottamaan parempaa ja selkeämpää asiakaskokemusta tiettyjen “pakollisten” toiminnallisuuksien osalta"]
      [:h4 "Keitä tarvitaan jotta se voisi onnistua?"] [:p ""]
      [:h4
       "Miksi hanketta kannattaisi edistää teknologiatyöryhmässä?"]
      [:p
       "Teknologiaryhmässä löytyisi erilaisten (ja eri kokoisten) toimijoiden näkemykset, jotka yhdistämällä saataisiin hyvä kokonaisuus. Vähintään etenemisen seuranta olisi hyvä keskittää teknologiaryhmään."]]
     :question (:question common-labels)
     :triad-top (:triad-top common-labels)
     :triad-left (:triad-left common-labels)
     :triad-right (:triad-right common-labels)}]})




(def texts
  {:service-header
   "Medialiitto Teknologiatyöryhmän tulevaisuustyöpajan ideoiden arviointi"
   :triads triads
   :main-header "Kysely"
   :service ""
   :micronarrative0
   "Mikä on mielestäsi kiinnostavin mahdollisuusalue, sekä teknisesti että liiketoiminnallisesti, jos ajattelet suomalaista media-ekosysteemia? Kirjoita myös lyhyt perustelu:"
   :micronarrative1
   "Millä alueilla on digitaalisen teknologian suhteen kiinnostavimpia mahdollisuuksia, joilla ei  välttämättä ole suoria vaikutuksia media-alalle? Kuvaa lyhyesti miksi ne ovat kiinnostavia."
   :micronarrative2
   "Kirjoita lyhyt hissi-pitch jostakin kehitysideasta, johon sinusta kannattaisi panostaa jos haetaan uutta kasvua ja suomalaisen media-ekosysteemin kestävää kehitystä:"
   :micronarrative3
   "Mitä muita toiveita ja odotuksia sinulla on medialiiton ja työryhmän toiminnalta?"
   :micro-placeholder "Kuvaa tähän"
   :free "Vapaa palaute"
   :free-placeholder "Kirjoita vapaa palaute tähän"
   :birthyear-label "8. Syntymävuosi*"
   :gender-label "9. Sukupuoli*"
   :gender-options [:choose "Valitse tästä" :not-available
                    "En halua sanoa" :female "Nainen" :male "Mies"
                    :other "Muu"]
   :company-label "Yritys"
   :company-options
   [:choose "Valitse tästä" :alma "Alma" :keskisuomalainen
    "Keskisuomalainen" :sanoma "Sanoma" :ts "Turun Sanomat"
    :lehtipaino "Suomalainen Lehtipaino" :otava "Otavamedia" :kaleva
    "Kaleva" :viestilehdet "Viestilehdet" :other "Muu"]
   :name-label "Vastaajan nimi"
   :send-label "Lähetä"
   :thank-you "Kiitoksia, että osallistuit kyselyyn!"
   :validation-error
   "Vastaa kaikkiin tähdellä merkityttyihin kysymyksiin!"})
(def conf
  {:url
   "https://script.google.com/macros/s/AKfycbyayxZg_TXRVFD1xRjOTKWW-f9pvvKonac-ndq5W8yxXsUO5M3y/exec"})





