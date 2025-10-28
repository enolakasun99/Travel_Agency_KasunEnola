<img width="1658" height="874" alt="image" src="https://github.com/user-attachments/assets/0d00376d-fc5f-4d34-89a7-5afb617b9f70" />
Travel Agency Website

Opis:
Završni rad na temu "Travel Agency" implementiran kao Single Page Application (SPA)  koristeći React i Webpack. 
Cilj projekta bio je izraditi kompletnu, responzivnu web aplikaciju s komponentnim dizajnom, podrškom za navigaciju, pretragu, filtriranje i validaciju forme.

Za pokretanje projekta na lokalnom računalu, slijedite ove korake:
1. Instalacija ovisnosti: npm install
2. Pokretanje Development Servera: Development server pokreće aplikaciju s automatskim osvježavanjem: npm start ili npm run dev.
   Aplikacija će biti dostupna na http://localhost:3000/
3. Kreiranje Production Builda: Generira optimiziranu, statičnu verziju aplikacije u dist/ folderu: npm run build.

Aplikacija sadrži sedam obaveznih stranica  i ključne funkcionalnosti:
- Header/Footer - Fiksni (sticky) Header, navigacija koristi NavLink za isticanje aktivne rute. Responzivni Hamburger meni za manje ili jednako od 768px. 
- Naslovnica - Prikaz Hero sekcije (slika, CTA) i 3 istaknuta izleta.
- O Nama - Dummy sadržaj o agenciji i timu. 
- Kategorije - Prikaz kartica 5 kategorija. Klik preusmjerava na filtrirani popis izleta(/tours?category=X).
- Izleti - Glavna funkcionalnost: Pretraga po nazivu, Filtriranje po kategoriji, i Sortiranje po cijeni/nazivu.
- Detalji izleta - Prikazuje sve podatke, tablicu termina, listu pogodnosti. Gumb "Rezerviraj" prikazuje alert . Prikazuje "Izlet nije pronađen" ako ID ne postoji.
- Kontakt - Kontakt obrazac s klijentskom validacijom za sva polja. Prikazuje poruke grešaka i alert nakon uspješnog slanja.
- F.A.Q. - Koristi Accordion komponentu. Osigurano da je samo jedno pitanje otvoreno u trenutku.

Poznati Bugovi / Ograničenja

Slike Kategorija: Koriste se generički placeholder stilovi umjesto uvezenih slika, jer su eksterni placeholder servisi nestabilni.

Git Log: Projekt je inicijaliziran s nizom smislenih commit poruka, prema zadanim uputama.

Primjer izgleda Hamburger Menija na mobilnim uređajima: 

<img width="493" height="899" alt="HamburgerMenu" src="https://github.com/user-attachments/assets/603f8be0-7e0f-42ab-bea7-a7ed56249013" />
