# rg-server
- igrica pravljena na predmetu RG etf.unsa.ba

# Instalacija
### 1. npm install
### 2. promijenite za sve CSV fajlove da 'end of line sequence' bude LF, a ne CRLF 
### 3. npm start/node index.js, 
### 4. http://localhost:9000

# Primjer koristenja - pogledati metodu app.post('/update') !!:
Genericka metoda za sobe da se updatuje kolona unutar igravrijeme.csv, morate poslati unutar body-a sljedece:
- 'korisnik' - ime korisnika kojem se mijenja vrijeme, uvijek ce biti legalan korisnik
- 'brojSobe' - brojSobe sto moze biti 1 2 3 4 samo
- 'novaVrijednost' - ono sto se upisuje na to mjesto, a to je x.AB:CD

Svako dira svoju kolonu:
- soba1 - Solja - brojSobe: 1
- soba2 - Dzenana - brojSobe: 2
- soba3 - Ajla - brojSobe: 3
- soba4 - Amir - brojSobe: 4

## mozete pisati dodatne API call requestove, samo mi javite da dodam
