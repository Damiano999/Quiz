/* Autorskie pytania inspirowane celami SY0-701; nie są materiałem CompTIA. */
const DOMAINS = {
  general: { name: '1. General Security Concepts', weight: 12 },
  threats: { name: '2. Threats, Vulnerabilities & Mitigations', weight: 22 },
  architecture: { name: '3. Security Architecture', weight: 18 },
  operations: { name: '4. Security Operations', weight: 28 },
  management: { name: '5. Security Program Management & Oversight', weight: 20 }
};
const q=(id,domain,stem,options,correct,explanation,multi=false)=>({id,domain,stem,options,correct:Array.isArray(correct)?correct:[correct],explanation,multi,type:multi?'multiple':'single'});
const pbq=(id,domain,stem,fields,explanation)=>({id,domain,stem,fields,explanation,type:'pbq'});
const BANK = [
q('g01','general','Który element triady CIA zapewnia, że dane nie zostały zmienione bez uprawnienia?',['Poufność','Integralność','Dostępność','Niezaprzeczalność'],1,'Integralność chroni poprawność i kompletność danych.'),
q('g02','general','Firma udostępnia system tylko po uwierzytelnieniu wieloskładnikowym. Jaki cel bezpieczeństwa jest realizowany przede wszystkim?',['Autoryzacja','Uwierzytelnienie','Audyt','Segmentacja'],1,'MFA potwierdza tożsamość użytkownika, czyli wspiera uwierzytelnienie.'),
q('g03','general','Które DWA przykłady są kontrolami technicznymi?',['Zapora sieciowa','Polityka czystego biurka','Czytnik kart RFID','Szkolenie awareness'],[0,2],'Zapora i czytnik RFID egzekwują ochronę technicznie; polityka i szkolenie to kontrole administracyjne.',true),
q('g04','general','Organizacja wymaga, aby administrator bazy danych nie mógł zatwierdzać własnych zmian w produkcji. Jaka zasada ma zastosowanie?',['Need to know','Separation of duties','Job rotation','Least privilege'],1,'Rozdzielenie obowiązków zapobiega sytuacji, w której jedna osoba sama wykonuje i zatwierdza czynność wysokiego ryzyka.'),
q('g05','general','Jaki typ kryptografii najlepiej nadaje się do szyfrowania dużych ilości danych w czasie rzeczywistym?',['Asymetryczna','Symetryczna','Haszowanie','Steganografia'],1,'Szyfry symetryczne są wydajne i używają jednego współdzielonego klucza.'),
q('g06','general','Który mechanizm zapewnia dowód, że nadawca podpisał konkretną wiadomość?',['Sól do hasła','Podpis cyfrowy','Tokenizacja','Kompresja'],1,'Podpis cyfrowy wiąże wiadomość z kluczem prywatnym nadawcy i zapewnia niezaprzeczalność.'),
q('g07','general','Analityk dodaje losową wartość do każdego hasła przed haszowaniem. Przed jakim atakiem chroni to najskuteczniej?',['Rainbow table','SQL injection','Pass-the-hash','Brute force online'],0,'Unikalna sól uniemożliwia skuteczne stosowanie wcześniej obliczonych tablic skrótów.'),
q('g08','general','Który termin opisuje lukę, dla której nie ma jeszcze publicznej poprawki?',['False positive','Zero-day','Sandbox','Baseline'],1,'Zero-day to nieznana lub niezałatana podatność, dla której obrońcy mają zerowy czas na przygotowanie.'),
q('g09','general','Zespół chce ograniczyć skutki przejęcia konta zwykłego użytkownika. Która praktyka jest NAJLEPSZA?',['Nadać konto administratora lokalnego','Stosować zasadę najmniejszych uprawnień','Wydłużyć czas sesji','Wyłączyć logowanie zdarzeń'],1,'Least privilege ogranicza możliwości atakującego po przejęciu konta.'),
q('g10','general','Które DWA działania wspierają defense in depth?',['MFA i segmentacja sieci','Jeden wspólny administrator','Wyłączenie logów','EDR i filtrowanie poczty'],[0,3],'Defense in depth stosuje niezależne, nakładające się warstwy ochrony.',true),
q('g11','general','Właściciel danych określa, kto może używać rekordu klienta. Kto zwykle wdraża te decyzje technicznie?',['Data custodian','Data owner','Data processor','Audytor'],0,'Właściciel ustala klasyfikację i zasady, a custodian utrzymuje i chroni dane zgodnie z tymi zasadami.'),

q('t01','threats','Użytkownik otrzymuje wiadomość z pilną prośbą o podanie kodu MFA w fałszywym portalu. Jaki atak opisano?',['Vishing','Phishing','Tailgating','Watering hole'],1,'Phishing wykorzystuje fałszywą wiadomość lub stronę do wyłudzenia danych.'),
q('t02','threats','Który wskaźnik NAJSILNIEJ sugeruje atak typu password spraying?',['Wiele prób na jedno konto','Pojedyncza próba na setki kont','Duży transfer DNS','Zmiana adresu MAC'],1,'Password spraying używa małej liczby popularnych haseł wobec wielu kont, aby uniknąć blokady.'),
q('t03','threats','Serwer WWW przekazuje dane użytkownika bez walidacji do zapytania SQL. Jaka podatność jest najbardziej prawdopodobna?',['XSS','SQL injection','CSRF','Buffer overflow'],1,'Niewalidowane dane w zapytaniu SQL mogą zmienić jego logikę.'),
q('t04','threats','Które DWA mechanizmy ograniczają skutki ransomware?',['Niezmienne kopie zapasowe','Wyłączenie segmentacji','EDR z behawioralnym wykrywaniem','Wspólne konto administratora'],[0,2],'Kopie niezmienne umożliwiają odtworzenie, a EDR wykrywa i powstrzymuje złośliwe zachowania.',true),
q('t05','threats','Napastnik podszywa się pod bramę domyślną, aby przechwytywać ruch w LAN. To przykład:',['ARP poisoning','DNSSEC','DDoS','Directory traversal'],0,'Zatrucie ARP tworzy fałszywe mapowanie IP–MAC i umożliwia man-in-the-middle.'),
q('t06','threats','Które rozwiązanie NAJLEPIEJ chroni API przed nadużyciem przez automaty?',['Rate limiting','Wydłużenie tokenu sesji','Wyłączenie TLS','Otwarcie CORS dla wszystkich'],0,'Rate limiting ogranicza liczbę żądań w czasie od klienta lub klucza API.'),
q('t07','threats','Analityk widzi zapytania DNS o bardzo długie, zakodowane subdomeny do jednej domeny zewnętrznej. Co jest najbardziej prawdopodobne?',['DNS tunneling','ARP spoofing','SQL injection','Evil twin'],0,'Długie zakodowane nazwy w wielu zapytaniach DNS są typowym wskaźnikiem tunelowania danych.'),
q('t08','threats','Który atak polega na dzieleniu szkodliwego kodu na fragmenty, aby ominąć podpisy antywirusa?',['Obfuscation','Shimming','Fragmentation','Refactoring'],0,'Obfuskacja ukrywa zamiar lub strukturę kodu, utrudniając detekcję sygnaturową.'),
q('t09','threats','Pracownik skanuje kod QR prowadzący do strony kradnącej hasła. Jak nazywa się ta odmiana phishingu?',['Smishing','Quishing','Spear phishing','Whaling'],1,'Quishing wykorzystuje kod QR jako przynętę do złośliwej strony.'),
q('t10','threats','Która kontrola najskuteczniej ogranicza exploit wykorzystujący makro w dokumencie biurowym?',['Domyślne blokowanie makr z Internetu','Zwiększenie przepustowości','Włączenie FTP','Wyłączenie logowania'],0,'Blokada makr pobranych z Internetu redukuje powszechny wektor początkowego dostępu.'),
q('t11','threats','Które DWA elementy są oznakami business email compromise?',['Nagła zmiana danych płatności','Prośba o zachowanie poufności przelewu','Podpisany sterownik','Wewnętrzny certyfikat CA'],[0,1],'BEC wykorzystuje zaufanie i presję do przekierowania płatności lub ujawnienia danych.',true),
q('t12','threats','Aplikacja wstawia treść komentarza użytkownika do strony bez kodowania HTML. Jaki atak umożliwia?',['Stored XSS','CSRF','SYN flood','Privilege escalation'],0,'Brak kodowania outputu pozwala zapisać i wykonać skrypt w przeglądarce innych użytkowników.'),
q('t13','threats','Jakie działanie NAJLEPIEJ ogranicza ryzyko CSRF?',['Token anty-CSRF związany z sesją','Usunięcie cookies','Szyfrowanie dysku','Włączenie SNMPv1'],0,'Unikalny token w żądaniu pozwala serwerowi odróżnić własny formularz od fałszywego żądania.'),
q('t14','threats','Który typ złośliwego oprogramowania pozostaje aktywny po restarcie przez modyfikację boot procesu?',['Rootkit','Worm','Adware','Logic bomb'],0,'Rootkit może ukrywać się głęboko w systemie, także w mechanizmach rozruchu.'),
q('t15','threats','Który atak jest wymierzony w zależność lub aktualizację dostarczaną przez zaufanego producenta?',['Supply-chain attack','Shoulder surfing','Dumpster diving','Bluesnarfing'],0,'Atak na łańcuch dostaw kompromituje dostawcę, komponent lub proces dystrybucji.'),
q('t16','threats','Firma chce wykrywać nietypowe logowania pracownika względem jego normalnej lokalizacji i pory dnia. Co wdrożyć?',['UEBA','NAT','WAF','HSM'],0,'UEBA buduje profil zachowania użytkownika i sygnalizuje odchylenia.'),
q('t17','threats','Która metoda łamania haseł najpierw używa słów ze słownika, a potem typowych modyfikacji, np. cyfry na końcu?',['Dictionary attack','Replay attack','Birthday attack','Downgrade attack'],0,'Atak słownikowy testuje słowa i ich popularne warianty.'),
q('t18','threats','Zespół wykrył nieautoryzowany punkt Wi-Fi podszywający się pod firmowy SSID. Jak nazywa się ten atak?',['Evil twin','Rogue DHCP','Bluejacking','Wardriving'],0,'Evil twin to fałszywy AP naśladujący zaufaną sieć bezprzewodową.'),
q('t19','threats','Które DWA działania pomagają ograniczyć atak typu DDoS?',['Usługa scrubbing/CDN','Rate limiting na brzegu','Wyłączenie redundancji','Publikacja poświadczeń'],[0,1],'Rozproszona absorpcja i ograniczanie ruchu redukują skutki zalewania usług.',true),
q('t20','threats','Czym różni się vulnerability od threat?',['Vulnerability to słabość; threat to potencjalna przyczyna szkody','Threat to poprawka; vulnerability to atak','Są synonimami','Threat jest zawsze użytkownikiem'],0,'Podatność jest słabością, a zagrożenie może ją wykorzystać.'),

q('a01','architecture','Który model chmurowy pozwala klientowi zarządzać aplikacją i systemem operacyjnym, ale nie sprzętem?',['SaaS','PaaS','IaaS','On-premises'],2,'W IaaS dostawca obsługuje infrastrukturę, a klient OS, aplikacje i konfigurację.'),
q('a02','architecture','Jaka technologia logicznie oddziela urządzenia w tej samej fizycznej sieci przełączanej?',['VLAN','VPN','NTP','NAC'],0,'VLAN tworzy oddzielne domeny rozgłoszeniowe na wspólnej infrastrukturze.'),
q('a03','architecture','Które DWA elementy są kluczowe dla architektury zero trust?',['Ciągła weryfikacja','Jawne zaufanie do sieci wewnętrznej','Najmniejsze uprawnienia','Jeden wspólny segment'],[0,2],'Zero trust zakłada weryfikację każdego dostępu i minimalny zakres uprawnień.',true),
q('a04','architecture','Organizacja chce umieścić publiczny serwer WWW tak, aby naruszenie nie dawało bezpośredniego dostępu do LAN. Gdzie go umieścić?',['W DMZ','W tej samej sieci co kontroler domeny','W sieci zarządzania','Na hoście kopii zapasowych'],0,'DMZ izoluje usługi publiczne od sieci wewnętrznej.'),
q('a05','architecture','Który protokół zapewnia zaszyfrowany tunel warstwy sieciowej dla ruchu IP?',['IPsec','SMTP','DHCP','TFTP'],0,'IPsec chroni pakiety IP, często dla VPN site-to-site lub zdalnego dostępu.'),
q('a06','architecture','Jaka technologia pozwala przechowywać klucze kryptograficzne w sprzęcie odpornym na manipulację?',['HSM','Hypervisor','Proxy','Load balancer'],0,'HSM bezpiecznie generuje i przechowuje klucze oraz wykonuje operacje kryptograficzne.'),
q('a07','architecture','Firma wymaga dostępu do aplikacji wewnętrznej bez dawania użytkownikom pełnego dostępu sieciowego. Co jest NAJLEPSZE?',['ZTNA','Port forwarding','Open Wi-Fi','Split tunneling bez kontroli'],0,'ZTNA udostępnia konkretną aplikację po weryfikacji zamiast całą sieć.'),
q('a08','architecture','Które rozwiązanie separuje procesy aplikacji w lekkich, współdzielących kernel środowiskach?',['Kontenery','Maszyny fizyczne','Tape library','VLAN tagging'],0,'Kontenery izolują procesy przy współdzieleniu jądra hosta.'),
q('a09','architecture','Co należy zastosować, aby usługa internetowa obsługiwała awarię pojedynczego serwera bez przerwy?',['Load balancer i redundantne instancje','Jeden większy serwer','Wyłączenie health checków','Statyczny adres MAC'],0,'Równoważnik obciążenia z kontrolą zdrowia kieruje ruch do sprawnych, redundantnych instancji.'),
q('a10','architecture','Który mechanizm bezpiecznie mapuje prywatne adresy IP na publiczny adres przy dostępie do Internetu?',['NAT/PAT','DNS zone transfer','ARP cache','SFTP'],0,'NAT/PAT translatuje prywatne adresy i porty na adres publiczny.'),
q('a11','architecture','Które DWA praktyki wzmacniają bezpieczeństwo środowiska kontenerowego?',['Skanowanie obrazów','Uruchamianie jako root','Podpisywanie obrazów','Wspólny sekret w obrazie'],[0,2],'Skanowanie wykrywa podatności, a podpisy potwierdzają pochodzenie obrazu.',true),
q('a12','architecture','Jakie rozwiązanie filtruje ruch HTTP/HTTPS i chroni aplikacje przed typowymi atakami warstwy 7?',['WAF','Layer 2 switch','UPS','NTP server'],0,'WAF analizuje ruch aplikacyjny i może blokować m.in. SQLi oraz XSS.'),
q('a13','architecture','Który element SASE dostarcza polityki bezpieczeństwa w chmurze dla ruchu użytkowników zdalnych?',['Security service edge','Tape rotation','BIOS password','Hub'],0,'SSE zapewnia usługi bezpieczeństwa z chmury, m.in. ZTNA, SWG i CASB.'),
q('a14','architecture','Co jest głównym ryzykiem split tunnelingu na urządzeniu zdalnym?',['Równoczesny dostęp do Internetu i sieci firmowej','Brak możliwości użycia MFA','Brak szyfrowania dysku','Utrata DNSSEC'],0,'Zainfekowane urządzenie może stać się mostem między Internetem a siecią organizacji.'),
q('a15','architecture','Który protokół służy do bezpiecznego rozwiązywania nazw przez walidację podpisów DNS?',['DNSSEC','SNMPv2c','Telnet','FTP'],0,'DNSSEC dodaje podpisy kryptograficzne pozwalające zweryfikować autentyczność odpowiedzi DNS.'),
q('a16','architecture','Jaka kontrola blokuje niezgodne urządzenie przed otrzymaniem dostępu do sieci?',['NAC','NTP','CDN','NFS'],0,'Network Access Control sprawdza tożsamość i stan urządzenia przed przyznaniem dostępu.'),

q('o01','operations','Która aktywność jest pierwszą fazą cyklu incident response według popularnych modeli?',['Preparation','Lessons learned','Containment','Recovery'],0,'Przygotowanie obejmuje narzędzia, procesy, role i ćwiczenia przed incydentem.'),
q('o02','operations','Co jest NAJLEPSZYM źródłem czasu referencyjnego dla korelacji logów z wielu systemów?',['NTP','FTP','LDAP','ARP'],0,'Synchronizacja NTP zapewnia zgodne znaczniki czasu, niezbędne w analizie zdarzeń.'),
q('o03','operations','Które DWA dane powinny być zebrane jako pierwsze podczas triage zainfekowanego endpointu?',['Volatile memory','Aktywne połączenia sieciowe','Usunięte kopie zapasowe','Zmienione polityki HR'],[0,1],'Dane ulotne, jak RAM i bieżące połączenia, mogą zniknąć po wyłączeniu hosta.',true),
q('o04','operations','SOC chce automatycznie wzbogacać alerty o reputację adresów IP i blokować potwierdzone IOC. Jakie narzędzie najlepiej pasuje?',['SOAR','UPS','KVM switch','PKI'],0,'SOAR orkiestruje playbooki i automatyzuje reakcje, takie jak enrichment lub blokowanie IOC.'),
q('o05','operations','Który log jest najbardziej przydatny do ustalenia, kto nadawał uprawnienia grupowe w Active Directory?',['Audit log kontrolera domeny','Log drukarki','Log temperatury','Historia przeglądarki'],0,'Logi audytowe kontrolera domeny rejestrują zmiany obiektów i grup.'),
q('o06','operations','Administrator odłącza podejrzany host od sieci, ale go nie wyłącza. Jaka faza reakcji to opisuje?',['Containment','Eradication','Recovery','Lessons learned'],0,'Izolacja ogranicza rozprzestrzenianie przy zachowaniu dowodów; to containment.'),
q('o07','operations','Które działanie należy wykonać PO usunięciu malware, a PRZED przywróceniem normalnej pracy?',['Zweryfikować eliminację i załatać przyczynę','Usunąć wszystkie logi','Zniszczyć dysk','Pominąć testy'],0,'Eradication wymaga usunięcia przyczyny i weryfikacji, zanim nastąpi recovery.'),
q('o08','operations','Czym jest false positive w systemie detekcji?',['Normalne zdarzenie błędnie oznaczone jako złośliwe','Złośliwe zdarzenie niewykryte','Potwierdzony incydent','Kopia logu'],0,'False positive generuje alert dla nieszkodliwej aktywności.'),
q('o09','operations','Która polityka retencji logów jest najrozsądniejsza?',['Zgodna z wymaganiami prawnymi, biznesowymi i pojemnością','Usuwanie logów codziennie','Przechowywanie wszystkiego bez kontroli','Brak centralizacji'],0,'Retencja powinna równoważyć wymagania dochodzeniowe, compliance i koszt.'),
q('o10','operations','Które DWA elementy zwiększają użyteczność kopii zapasowych podczas recovery?',['Regularne testy odtworzenia','Kopia offline/immutable','Przechowywanie tylko na tym samym hoście','Brak właściciela procesu'],[0,1],'Backup musi być możliwy do odtworzenia i odporny na kompromitację środowiska produkcyjnego.',true),
q('o11','operations','Jaką technikę stosuje SIEM, aby wskazać możliwy atak z wielu pozornie niezależnych zdarzeń?',['Korelację zdarzeń','Defragmentację','Tokenizację','Maskowanie'],0,'SIEM koreluje logi i reguły, aby wykryć sekwencje zachowań atakujących.'),
q('o12','operations','Na czym polega chain of custody?',['Dokumentowaniu każdego przekazania i obsługi dowodu','Szyfrowaniu wszystkich e-maili','Nadawaniu ról RBAC','Ładowaniu balansu'],0,'Udokumentowany łańcuch posiadania pomaga wykazać integralność dowodów.'),
q('o13','operations','Który typ skanowania jest najbezpieczniejszy dla produkcji, gdy wymagana jest minimalna ingerencja?',['Skanowanie nieinwazyjne/uwierzytelnione według okna zmian','Destrukcyjny exploit scan','Skan bez zgody','Fuzzing w godzinach szczytu'],0,'Skanowanie planowane i bezpieczne ogranicza ryzyko wpływu na usługę.'),
q('o14','operations','Który dokument opisuje krok po kroku operacyjną reakcję na konkretny scenariusz, np. ransomware?',['Runbook/playbook','Acceptable use policy','SLA','MOU'],0,'Runbook lub playbook zawiera powtarzalny zestaw kroków dla danego zdarzenia.'),
q('o15','operations','Co najczęściej wskazuje na lateral movement?',['Jedno konto loguje się z wielu hostów administracyjnych poza wzorcem','Spadek temperatury serwerowni','Nowy certyfikat publiczny','Zapytanie DNS do CDN'],0,'Niestandardowe zdalne logowania i użycie poświadczeń między hostami mogą wskazywać ruch boczny.'),
q('o16','operations','Który mechanizm redukuje ryzyko nadużycia kont uprzywilejowanych przez używanie haseł jednorazowych na żądanie?',['PAM','DHCP','NAT','RAID'],0,'Privileged Access Management kontroluje, rejestruje i może czasowo udostępniać dostęp uprzywilejowany.'),
q('o17','operations','Które DWA wskaźniki zwykle uznaje się za IOC?',['Hash złośliwego pliku','Adres IP serwera C2','Opis stanowiska pracownika','Numer wersji polityki'],[0,1],'Hash i infrastruktura C2 są technicznymi wskaźnikami kompromitacji.',true),
q('o18','operations','Która metoda niszczenia danych na SSD jest zalecana, gdy urządzenie ma zostać wycofane?',['Crypto erase zgodnie z procedurą producenta','Samo formatowanie szybkie','Usunięcie skrótu','Zmiana nazwy woluminu'],0,'Crypto erase usuwa klucze szyfrujące, czyniąc dane nieczytelnymi; należy stosować zatwierdzoną procedurę.'),
q('o19','operations','Administrator potrzebuje potwierdzić, czy plik został zmodyfikowany od chwili zebrania. Czego użyć?',['Porównania kryptograficznego hash','Adresu MAC','Nazwy pliku','Kompresji ZIP'],0,'Hash jest odciskiem danych; zmiana pliku prowadzi do innej wartości skrótu.'),
q('o20','operations','Które narzędzie zapisuje szczegóły żądań HTTP do późniejszej analizy przez zespół bezpieczeństwa?',['Web proxy log','DHCP relay','UPS','Kabel konsolowy'],0,'Proxy może rejestrować żądania webowe, użytkowników i decyzje filtrujące.'),
q('o21','operations','Po incydencie zespół aktualizuje reguły detekcji i prowadzi retrospektywę. Jaka faza?',['Lessons learned','Identification','Containment','Escalation'],0,'Lessons learned wzmacnia proces po incydencie poprzez analizę i usprawnienia.'),
pbq('o22','operations','PBQ: Przypisz właściwą pierwszą czynność do każdego sygnału SOC.',[
  {label:'Podejrzenie ransomware na stacji finansowej',options:['Izoluj host od sieci','Usuń wszystkie logi','Opublikuj hasło'],correct:0},
  {label:'Alert o logowaniu niemożliwym geograficznie',options:['Zweryfikuj konto i sesje','Zrestartuj firewall','Usuń konto bez analizy'],correct:0},
  {label:'Wyciek klucza API w repozytorium',options:['Unieważnij i obróć sekret','Zostaw klucz do audytu','Wyłącz DNS'],correct:0}
],'Priorytetem jest ograniczenie aktywnego ryzyka: izolacja, weryfikacja sesji oraz natychmiastowa rotacja ujawnionego sekretu.'),
q('o23','operations','Jaka praktyka zmniejsza liczbę false positives bez zwiększania ryzyka przeoczenia?',['Tuning reguł na podstawie potwierdzonych wyników','Wyłączenie wszystkich alertów','Usunięcie SIEM','Ignorowanie baseline'],0,'Dostrajanie z użyciem kontekstu i historycznych danych poprawia jakość alertów.'),
q('o24','operations','Która kontrola zapewnia, że aktualizacje systemowe są wdrażane przewidywalnie i z możliwością wycofania?',['Patch management z testami i change control','Ręczne instalowanie bez zapisu','Wyłączenie aktualizacji','Udostępnienie admina wszystkim'],0,'Proces patch management obejmuje testy, harmonogram, zatwierdzenie i plan cofnięcia.'),
pbq('o25','operations','PBQ: Uporządkuj działania po potwierdzeniu kompromitacji serwera WWW.',[
  {label:'Krok 1',options:['Containment: odizoluj serwer','Recovery: przywróć ruch','Lessons learned: napisz raport'],correct:0},
  {label:'Krok 2',options:['Eradication: usuń webshell i załataj','Preparation: kup narzędzia','Recovery: zamknij incydent'],correct:0},
  {label:'Krok 3',options:['Recovery: waliduj i przywróć usługę','Identification: zignoruj IOC','Containment: usuń dowody'],correct:0}
],'Typowa kolejność to containment, eradication, recovery, a potem lessons learned.'),

q('m01','management','Jakie określenie najlepiej opisuje możliwą stratę wynikającą z zagrożenia wykorzystującego podatność?',['Ryzyko','Kontrola','Aktywum','Baseline'],0,'Ryzyko to prawdopodobieństwo i wpływ niepożądanego zdarzenia.'),
q('m02','management','Organizacja akceptuje niewielkie ryzyko pozostałe po wdrożeniu kontroli. To jest:',['Risk acceptance','Risk avoidance','Risk transfer','Risk deterrence'],0,'Akceptacja oznacza świadomą decyzję o tolerowaniu ryzyka rezydualnego.'),
q('m03','management','Które DWA dokumenty zwykle określają wymagania ochrony danych osobowych?',['Polityka prywatności','Klauzule retencji danych','Diagram sieciowy','Plan okablowania'],[0,1],'Prywatność i retencja regulują sposób przetwarzania oraz czas przechowywania danych.',true),
q('m04','management','Jaki dokument definiuje ogólne zasady bezpieczeństwa zatwierdzone przez kierownictwo?',['Security policy','Runbook','Ticket incidentu','Diagram racka'],0,'Polityka ustanawia wysokopoziomowe zasady i kierunek; standardy i procedury je uszczegóławiają.'),
q('m05','management','Który element BIA identyfikuje maksymalny akceptowalny czas niedostępności procesu?',['RTO','RPO','MTTR','SLA'],0,'Recovery Time Objective wskazuje docelowy czas przywrócenia procesu.'),
q('m06','management','Co określa RPO?',['Maksymalną akceptowalną utratę danych w czasie','Czas do odtworzenia serwera','Koszt kontroli','Liczbę użytkowników'],0,'Recovery Point Objective określa, jak daleko wstecz dane mogą zostać utracone.'),
q('m07','management','Firma kupuje cyberubezpieczenie na wypadek kosztów incydentu. Jaka strategia ryzyka?',['Risk transfer','Risk avoidance','Risk acceptance','Risk escalation'],0,'Ubezpieczenie przenosi część finansowego skutku ryzyka na inny podmiot.'),
q('m08','management','Które DWA działania są częścią skutecznego programu security awareness?',['Symulowane phishingi z edukacją','Szkolenie dostosowane do roli','Jednorazowy e-mail bez pomiaru','Ukrywanie procedur zgłaszania'],[0,1],'Program powinien być ciągły, mierzalny i adekwatny do ryzyka oraz roli.',true),
q('m09','management','Jaki typ umowy definiuje mierzalny poziom dostępności usługi dostawcy?',['SLA','NDA','MOU','AUP'],0,'Service Level Agreement określa mierzalne parametry świadczonej usługi.'),
q('m10','management','Dlaczego należy klasyfikować dane?',['Aby dobrać proporcjonalne kontrole ochronne','Aby usunąć wszystkie dane','Aby pominąć właściciela danych','Aby zastąpić backup'],0,'Klasyfikacja wskazuje wrażliwość i właściwy sposób obchodzenia się z informacją.'),
q('m11','management','Które działanie jest przykładem risk avoidance?',['Rezygnacja z przetwarzania szczególnie ryzykownych danych','Kupno ubezpieczenia','Wdrożenie WAF','Akceptacja ryzyka'],0,'Unikanie ryzyka eliminuje aktywność powodującą ekspozycję.'),
q('m12','management','Co jest celem procesu vendor risk management?',['Ocena i nadzór nad ryzykiem dostawców','Wyłącznie negocjacja ceny','Zastąpienie umów','Automatyczne zaufanie partnerom'],0,'VRM bada bezpieczeństwo dostawców przed współpracą i okresowo w jej trakcie.'),
q('m13','management','Który dokument określa dozwolone i niedozwolone korzystanie z zasobów IT przez pracowników?',['AUP','BIA','SOW','COOP'],0,'Acceptable Use Policy opisuje dopuszczalne zasady użycia zasobów organizacji.'),
q('m14','management','Jakie ćwiczenie DR testuje role i decyzje bez faktycznego odtwarzania systemów?',['Tabletop exercise','Full interruption test','Penetration test','Vulnerability scan'],0,'Tabletop pozwala przejść scenariusz i decyzje w bezpiecznej, dyskusyjnej formie.'),
q('m15','management','Które DWA elementy powinien zawierać plan komunikacji incydentu?',['Zdefiniowane kanały eskalacji','Właścicieli komunikatów','Prywatne hasła użytkowników','Niezweryfikowane plotki'],[0,1],'Jasne kanały i właściciele zapewniają spójną, terminową komunikację.',true),
q('m16','management','Na czym polega due diligence wobec dostawcy przed podpisaniem umowy?',['Ocena jego kontroli, ryzyk i dowodów','Automatyczne przekazanie danych','Wyłączenie prawa do audytu','Użycie wspólnego konta'],0,'Due diligence weryfikuje zdolność dostawcy do spełnienia wymagań bezpieczeństwa.'),
q('m17','management','Który wskaźnik najtrafniej mierzy skuteczność programu zarządzania podatnościami?',['Czas do naprawy podatności krytycznych','Liczba wysłanych e-maili','Rozmiar logo','Liczba haseł'],0,'Czas remediacji krytycznych luk pokazuje, czy ryzyko jest redukowane w wymaganym czasie.'),
pbq('m18','management','PBQ: Dopasuj wymaganie ciągłości działania do właściwej definicji.',[
  {label:'RTO',options:['Maksymalny czas przywrócenia','Maksymalna utrata danych','Wartość aktywa'],correct:0},
  {label:'RPO',options:['Maksymalna utrata danych w czasie','Czas na wykrycie','Czas szkolenia'],correct:0},
  {label:'BIA',options:['Analiza wpływu zakłócenia procesów','Skan portów','Polityka haseł'],correct:0}
],'RTO dotyczy czasu powrotu usługi, RPO utraty danych, a BIA analizuje wpływ przerwy w działalności.')
];
if (BANK.length !== 90) console.warn(`Expected 90 questions, found ${BANK.length}`);

// Active, English question pool. Each item is original exam-style practice content.
const ENGLISH_CONTEXTS = [
  'During a security review,', 'In a post-incident assessment,', 'For a new production system,',
  'While validating a control,', 'A security analyst is asked:', 'In a regulated environment,',
  'During an internal audit,', 'At a financial-services company,', 'For a healthcare provider,',
  'At a global manufacturing company,', 'When supporting a remote workforce,', 'During a merger integration,',
  'For a newly acquired subsidiary,', 'When reviewing a vendor proposal,', 'After a red-team exercise,',
  'During a quarterly risk assessment,', 'While preparing for an external audit,', 'For a public-facing application,',
  'In a hybrid cloud deployment,', 'For a critical business service,', 'During a security architecture workshop,',
  'When updating an incident playbook,', 'In a high-availability environment,', 'For a regulated data-processing workflow,',
  'When onboarding a privileged administrator,', 'During a change-control review,', 'For a newly deployed endpoint fleet,',
  'When investigating an anomalous alert,', 'In a multi-tenant cloud environment,', 'While improving the security baseline,',
  'For a business-continuity exercise,', 'During a compliance gap analysis,', 'When conducting a tabletop exercise,'
];
const enSeries = (domain, prefix, rows) => rows.flatMap((row, rowIndex) => ENGLISH_CONTEXTS.map((context, variant) => q(
  `en-${domain}-${rowIndex}-${variant}`, domain,
  `${context} ${prefix ? `${prefix} ` : ''}${row.stem}`,
  row.options, row.correct, row.explanation, row.multi
)));
const ENGLISH_BANK = [
  ...enSeries('general', '', [
    {stem:'which CIA principle ensures that records have not been altered without authorization?',options:['Confidentiality','Integrity','Availability','Non-repudiation'],correct:1,explanation:'Integrity protects the accuracy and completeness of information.'},
    {stem:'which control most directly verifies a user identity before access is granted?',options:['Authorization','Authentication','Accounting','Segmentation'],correct:1,explanation:'Authentication verifies an identity; authorization determines what that identity may do.'},
    {stem:'which TWO are technical controls?',options:['A web application firewall','Security awareness training','A smart-card reader','A clean-desk policy'],correct:[0,2],multi:true,explanation:'A WAF and smart-card reader technically enforce controls. Training and policies are administrative controls.'},
    {stem:'which principle prevents one administrator from approving their own privileged production change?',options:['Need to know','Separation of duties','Job rotation','Acceptable use'],correct:1,explanation:'Separation of duties divides sensitive actions among multiple people.'},
    {stem:'which cryptographic approach is usually most efficient for encrypting large volumes of data?',options:['Asymmetric encryption','Symmetric encryption','Hashing','Steganography'],correct:1,explanation:'Symmetric ciphers are designed for efficient bulk encryption.'},
    {stem:'which mechanism provides evidence that the sender approved a specific message?',options:['Password salting','Digital signature','Tokenization','Compression'],correct:1,explanation:'A digital signature binds the message to the sender private key and supports non-repudiation.'}
  ]),
  ...enSeries('threats', '', [
    {stem:'a user receives a message that links to a fake sign-in page requesting an MFA code. What attack is this?',options:['Vishing','Phishing','Tailgating','Watering-hole attack'],correct:1,explanation:'Phishing uses deceptive messages or websites to obtain credentials.'},
    {stem:'which pattern most strongly indicates password spraying?',options:['Thousands of passwords against one account','One or two common passwords attempted against many accounts','High DNS traffic','A changed MAC address'],correct:1,explanation:'Password spraying tries a small number of passwords across many accounts to avoid lockouts.'},
    {stem:'an application includes unvalidated user input directly in a database query. Which vulnerability is most likely?',options:['Cross-site scripting','SQL injection','CSRF','Buffer overflow'],correct:1,explanation:'Unvalidated input can alter the intended SQL query.'},
    {stem:'which TWO controls best reduce ransomware impact?',options:['Immutable backups','A flat network','Behavioral EDR','A shared administrator account'],correct:[0,2],multi:true,explanation:'Recoverable immutable backups and behavioral detection reduce ransomware impact and spread.'},
    {stem:'an attacker advertises a false gateway mapping to intercept local traffic. Which attack is occurring?',options:['ARP poisoning','DNSSEC validation','DDoS','Directory traversal'],correct:0,explanation:'ARP poisoning creates a false IP-to-MAC mapping and can enable a man-in-the-middle attack.'},
    {stem:'what is the BEST protection against automated abuse of a public API?',options:['Rate limiting','Longer session timeouts','Disabling TLS','Allowing every CORS origin'],correct:0,explanation:'Rate limiting constrains request volume per client, token, or time window.'}
  ]),
  ...enSeries('architecture', '', [
    {stem:'which cloud service model leaves the customer responsible for the operating system and application, while the provider operates the hardware?',options:['SaaS','PaaS','IaaS','On-premises'],correct:2,explanation:'With IaaS, the provider operates the infrastructure and the customer manages the OS and software.'},
    {stem:'which technology logically separates devices into different broadcast domains on the same switching infrastructure?',options:['VLAN','VPN','NTP','NAC'],correct:0,explanation:'A VLAN creates logical Layer 2 network separation.'},
    {stem:'which TWO are zero-trust design principles?',options:['Continuous verification','Implicit trust of the internal network','Least privilege','One shared segment'],correct:[0,2],multi:true,explanation:'Zero trust continuously verifies access and grants only the minimum privilege needed.'},
    {stem:'where should a public web server be placed to reduce direct exposure of the internal network?',options:['DMZ','The domain controller subnet','The management network','The backup host'],correct:0,explanation:'A DMZ isolates internet-facing services from internal systems.'},
    {stem:'which technology provides a secure network-layer tunnel for IP traffic?',options:['IPsec','SMTP','DHCP','TFTP'],correct:0,explanation:'IPsec protects IP packets and is commonly used for VPNs.'},
    {stem:'which component stores cryptographic keys in tamper-resistant hardware?',options:['HSM','Hypervisor','Load balancer','Proxy'],correct:0,explanation:'A hardware security module generates, protects, and uses cryptographic keys.'}
  ]),
  ...enSeries('operations', '', [
    {stem:'which incident-response phase establishes roles, tools, procedures, and exercises before an incident?',options:['Preparation','Lessons learned','Containment','Recovery'],correct:0,explanation:'Preparation ensures that people and processes are ready before an incident occurs.'},
    {stem:'what is the BEST time source for correlating events from multiple systems?',options:['NTP','FTP','LDAP','ARP'],correct:0,explanation:'NTP keeps system timestamps aligned for reliable log correlation.'},
    {stem:'which TWO sources should be collected early during triage of a compromised endpoint?',options:['Volatile memory','Active network connections','Deleted backups','HR policy documents'],correct:[0,1],multi:true,explanation:'Volatile data, including memory and live connections, can disappear after shutdown or reboot.'},
    {stem:'which tool automates alert enrichment and response playbooks, such as blocking confirmed indicators?',options:['SOAR','UPS','KVM switch','PKI'],correct:0,explanation:'SOAR coordinates and automates security workflows and response actions.'},
    {stem:'isolating a suspicious host from the network without powering it off is an example of which response phase?',options:['Containment','Eradication','Recovery','Lessons learned'],correct:0,explanation:'Containment limits harm while preserving the host and evidence for investigation.'},
    {stem:'what should occur after malware removal and before normal service is restored?',options:['Verify eradication and remediate the root cause','Delete all logs','Destroy the disk','Skip testing'],correct:0,explanation:'The team must verify removal and correct the underlying weakness before recovery.'}
  ]),
  ...enSeries('management', '', [
    {stem:'what term describes potential loss when a threat exploits a vulnerability?',options:['Risk','Control','Asset','Baseline'],correct:0,explanation:'Risk combines the likelihood and impact of an adverse event.'},
    {stem:'a business knowingly retains a small residual risk after evaluating it. Which treatment is this?',options:['Risk acceptance','Risk avoidance','Risk transfer','Risk escalation'],correct:0,explanation:'Risk acceptance is a documented decision to tolerate residual risk.'},
    {stem:'which TWO are common elements of an effective security-awareness program?',options:['Role-based training','Phishing simulations with feedback','One email with no measurement','Hidden reporting procedures'],correct:[0,1],multi:true,explanation:'Effective programs are continuous, measurable, relevant to roles, and reinforce reporting.'},
    {stem:'which business-impact-analysis metric defines the maximum acceptable time to restore a process?',options:['RTO','RPO','MTTR','SLA'],correct:0,explanation:'The recovery time objective is the target maximum outage duration.'},
    {stem:'which business-impact-analysis metric defines the maximum acceptable amount of lost data measured in time?',options:['RPO','RTO','SLA','MOU'],correct:0,explanation:'The recovery point objective defines how far back data loss may extend.'},
    {stem:'purchasing cyber insurance is an example of which risk strategy?',options:['Risk transfer','Risk avoidance','Risk acceptance','Risk deterrence'],correct:0,explanation:'Insurance transfers part of the financial impact to another party.'}
  ]),
  pbq('en-pbq-operations','operations','PBQ: Choose the best immediate action for each SOC signal.',[
    {label:'Ransomware suspected on a finance workstation',options:['Isolate the host from the network','Delete all logs','Publish credentials'],correct:0},
    {label:'Impossible-travel sign-in alert',options:['Validate the account and sessions','Restart the firewall','Delete the user without analysis'],correct:0},
    {label:'API key exposed in a repository',options:['Revoke and rotate the secret','Leave the key for audit','Disable DNS'],correct:0}
  ],'Contain active risk first: isolate affected systems, validate sessions, and rotate exposed secrets immediately.'),
  pbq('en-pbq-management','management','PBQ: Match each continuity term to its definition.',[
    {label:'RTO',options:['Maximum time to restore','Maximum data loss in time','Asset value'],correct:0},
    {label:'RPO',options:['Maximum data loss in time','Time to detect','Training duration'],correct:0},
    {label:'BIA',options:['Analysis of disruption impact','Port scan','Password policy'],correct:0}
  ],'RTO concerns restoration time, RPO concerns accepted data loss, and a BIA analyzes business disruption.'),
  pbq('en-pbq-architecture','architecture','PBQ: Select the most appropriate security control for each goal.',[
    {label:'Protect a public web application from SQL injection',options:['WAF','UPS','NTP'],correct:0},
    {label:'Keep encryption keys in tamper-resistant hardware',options:['HSM','VLAN','CDN'],correct:0},
    {label:'Provide application-only access for remote users',options:['ZTNA','Open Wi-Fi','Port mirroring'],correct:0}
  ],'A WAF protects web traffic, an HSM protects cryptographic keys, and ZTNA limits remote access to authorized applications.'),
  pbq('en-pbq-threats','threats','PBQ: Select the most likely attack classification.',[
    {label:'Fake access point using the corporate SSID',options:['Evil twin','DDoS','SQL injection'],correct:0},
    {label:'Encoded data hidden in long DNS labels',options:['DNS tunneling','Tailgating','Smishing'],correct:0},
    {label:'Vendor update compromises customer systems',options:['Supply-chain attack','Shoulder surfing','XSS'],correct:0}
  ],'The scenarios describe an evil twin, DNS tunneling, and a supply-chain compromise.'),
  pbq('en-pbq-general','general','PBQ: Match the objective to the correct security concept.',[
    {label:'Prevent unauthorized disclosure',options:['Confidentiality','Integrity','Availability'],correct:0},
    {label:'Prevent unauthorized modification',options:['Integrity','Authentication','Availability'],correct:0},
    {label:'Ensure service can be used when required',options:['Availability','Non-repudiation','Tokenization'],correct:0}
  ],'Confidentiality prevents disclosure, integrity prevents unauthorized change, and availability keeps services usable.'),
  pbq('en-pbq-operations-2','operations','PBQ: Choose the evidence-preservation action for each situation.',[
    {label:'Need to prove a collected file has not changed',options:['Record and verify a cryptographic hash','Rename the file','Compress it repeatedly'],correct:0},
    {label:'Need to document each evidence handoff',options:['Maintain chain of custody','Delete temporary notes','Use an anonymous share'],correct:0},
    {label:'Need consistent timestamps across logs',options:['Synchronize systems with NTP','Disable time services','Use local clocks only'],correct:0}
  ],'Hashes support integrity, chain of custody records evidence handling, and NTP aligns timestamps.'),
  pbq('en-pbq-management-2','management','PBQ: Select the appropriate risk treatment.',[
    {label:'Stop collecting a data type that creates unacceptable exposure',options:['Risk avoidance','Risk transfer','Risk acceptance'],correct:0},
    {label:'Purchase insurance for residual financial loss',options:['Risk transfer','Risk avoidance','Risk escalation'],correct:0},
    {label:'Document that a low-impact residual risk is tolerated',options:['Risk acceptance','Risk mitigation','Risk elimination'],correct:0}
  ],'Avoidance removes the activity, transfer shifts financial impact, and acceptance tolerates documented residual risk.'),
  pbq('en-pbq-architecture-2','architecture','PBQ: Match the network goal to its best control.',[
    {label:'Separate public services from the internal LAN',options:['DMZ','Flat network','Shared admin account'],correct:0},
    {label:'Separate departments on the same switches',options:['VLAN','SMTP','NTP'],correct:0},
    {label:'Validate device posture before network access',options:['NAC','FTP','DNS zone transfer'],correct:0}
  ],'A DMZ isolates public services, VLANs create logical segments, and NAC enforces pre-access checks.'),
  pbq('en-pbq-threats-2','threats','PBQ: Choose the most effective control for each attack path.',[
    {label:'Credential harvesting through a fake sign-in page',options:['Phishing-resistant MFA and user reporting','Disable backups','Use a flat network'],correct:0},
    {label:'Repeated automated API requests',options:['Rate limiting','Longer API sessions','Disable TLS'],correct:0},
    {label:'Malicious office macros from the Internet',options:['Block Internet-originated macros','Increase bandwidth','Disable audit logs'],correct:0}
  ],'Phishing-resistant MFA, API rate limiting, and macro blocking address these respective attack paths.'),
  pbq('en-pbq-general-2','general','PBQ: Match the access requirement to the correct control.',[
    {label:'Verify who a user is',options:['Authentication','Authorization','Accounting'],correct:0},
    {label:'Decide what an authenticated user may do',options:['Authorization','Authentication','Hashing'],correct:0},
    {label:'Record access and activity',options:['Accounting','Availability','Tokenization'],correct:0}
  ],'AAA consists of authentication, authorization, and accounting.'),
];
if (ENGLISH_BANK.length !== 1000) console.warn(`Expected 1000 English questions, found ${ENGLISH_BANK.length}`);

// Core acronyms and concepts used throughout Security+ study. Definitions are intentionally concise.
const GLOSSARY = [
  ['AAA','Authentication, Authorization, and Accounting: the three functions used to verify identity, grant access, and record activity.','General'],
  ['ACL','Access Control List: a rule set that permits or denies traffic or access to an object.','General'],
  ['AES','Advanced Encryption Standard: a widely used symmetric encryption algorithm.','General'],
  ['Asymmetric encryption','Encryption using a public/private key pair; commonly used for key exchange and digital signatures.','General'],
  ['Availability','The CIA principle that ensures systems and data are usable when needed.','General'],
  ['CIA triad','Confidentiality, Integrity, and Availability: the foundational security objectives.','General'],
  ['Confidentiality','The CIA principle that prevents unauthorized disclosure of information.','General'],
  ['Digital signature','A cryptographic signature that verifies integrity, origin, and supports non-repudiation.','General'],
  ['Hash','A one-way fixed-length digest used to verify data integrity.','General'],
  ['HMAC','Hash-based Message Authentication Code: uses a shared secret and hash to verify integrity and authenticity.','General'],
  ['Integrity','The CIA principle that prevents unauthorized alteration or destruction of information.','General'],
  ['Least privilege','Granting only the minimum access required to perform a task.','General'],
  ['MFA','Multifactor Authentication: authentication using two or more different factor types.','General'],
  ['Non-repudiation','Assurance that a party cannot plausibly deny performing an action.','General'],
  ['PKI','Public Key Infrastructure: the people, policies, certificates, and systems that manage public keys.','General'],
  ['RBAC','Role-Based Access Control: permissions are granted through defined job roles.','General'],
  ['Salt','Random data added to a password before hashing to resist rainbow-table attacks.','General'],
  ['Separation of duties','Dividing sensitive tasks among people to reduce fraud and error.','General'],
  ['Symmetric encryption','Encryption using one shared secret key; efficient for bulk data.','General'],
  ['Zero day','A newly discovered or unpatched vulnerability with no available vendor fix.','General'],
  ['ARP poisoning','A man-in-the-middle technique that sends false IP-to-MAC mappings on a local network.','Threats'],
  ['BEC','Business Email Compromise: social engineering intended to redirect payments or obtain sensitive data.','Threats'],
  ['Botnet','A group of compromised systems remotely controlled by an attacker.','Threats'],
  ['Buffer overflow','Writing beyond allocated memory, potentially changing program behavior or executing code.','Threats'],
  ['CSRF','Cross-Site Request Forgery: tricks an authenticated browser into submitting an unwanted request.','Threats'],
  ['CVE','Common Vulnerabilities and Exposures: an identifier for a publicly known vulnerability.','Threats'],
  ['CVSS','Common Vulnerability Scoring System: a standardized severity score for vulnerabilities.','Threats'],
  ['DDoS','Distributed Denial of Service: many sources overwhelm a service or network.','Threats'],
  ['DNS tunneling','Using DNS queries and responses to hide command traffic or exfiltrate data.','Threats'],
  ['Evil twin','A rogue wireless access point impersonating a legitimate SSID.','Threats'],
  ['IOC','Indicator of Compromise: an observable artifact such as a malicious hash, domain, or IP address.','Threats'],
  ['MITM','Man-in-the-Middle: an attacker intercepts or alters communication between two parties.','Threats'],
  ['Phishing','Deceptive messages or sites designed to steal information or persuade a user to act.','Threats'],
  ['Quishing','Phishing that uses a QR code to direct a victim to malicious content.','Threats'],
  ['Ransomware','Malware that encrypts or steals data to extort payment.','Threats'],
  ['SQL injection','Injecting malicious input into a database query to change its intended behavior.','Threats'],
  ['Supply-chain attack','Compromise of a trusted vendor, dependency, update, or delivery process.','Threats'],
  ['UEBA','User and Entity Behavior Analytics: identifies abnormal behavior against an established baseline.','Threats'],
  ['WAF','Web Application Firewall: filters HTTP/S traffic to protect web applications from common attacks.','Threats'],
  ['XSS','Cross-Site Scripting: injecting script into a site so it runs in another user browser.','Threats'],
  ['CASB','Cloud Access Security Broker: applies security policy between cloud service users and providers.','Architecture'],
  ['CDN','Content Delivery Network: distributed servers that deliver content close to users and can absorb traffic.','Architecture'],
  ['Container','A lightweight isolated application environment that shares the host operating-system kernel.','Architecture'],
  ['DMZ','Demilitarized Zone: an isolated network segment for internet-facing services.','Architecture'],
  ['DNSSEC','DNS Security Extensions: cryptographic signatures that validate DNS responses.','Architecture'],
  ['HSM','Hardware Security Module: tamper-resistant hardware for generating and safeguarding cryptographic keys.','Architecture'],
  ['IaaS','Infrastructure as a Service: cloud provider supplies infrastructure; customer manages OS and applications.','Architecture'],
  ['IPsec','A suite of protocols that protects IP traffic, commonly used for VPNs.','Architecture'],
  ['NAC','Network Access Control: verifies identity and device posture before allowing network access.','Architecture'],
  ['NAT','Network Address Translation: maps private addresses to public addresses.','Architecture'],
  ['PaaS','Platform as a Service: provider manages infrastructure and runtime; customer deploys applications.','Architecture'],
  ['SaaS','Software as a Service: provider hosts and manages a complete application.','Architecture'],
  ['SASE','Secure Access Service Edge: cloud-delivered networking and security services.','Architecture'],
  ['Segmentation','Dividing a network into isolated zones to limit lateral movement and exposure.','Architecture'],
  ['SSE','Security Service Edge: cloud security services such as SWG, CASB, and ZTNA.','Architecture'],
  ['VLAN','Virtual LAN: a logical Layer 2 segmentation mechanism.','Architecture'],
  ['VPN','Virtual Private Network: an encrypted tunnel over an untrusted network.','Architecture'],
  ['Zero trust','A strategy that requires explicit, continuous verification rather than trusting a network location.','Architecture'],
  ['ZTNA','Zero Trust Network Access: application-specific access after identity and posture verification.','Architecture'],
  ['Chain of custody','Documentation showing who collected, handled, transferred, and stored evidence.','Operations'],
  ['Change management','A controlled process for reviewing, approving, implementing, and documenting changes.','Operations'],
  ['EDR','Endpoint Detection and Response: endpoint telemetry and response capability for detecting threats.','Operations'],
  ['Eradication','Incident-response phase that removes the cause of an incident, such as malware or persistence.','Operations'],
  ['False positive','A benign event incorrectly identified as malicious.','Operations'],
  ['Forensics','Collection and analysis of evidence in a way that preserves its integrity and usefulness.','Operations'],
  ['Immutable backup','A backup that cannot be changed or deleted for a defined retention period.','Operations'],
  ['Incident response','The coordinated process for preparing for, detecting, containing, removing, and recovering from incidents.','Operations'],
  ['NTP','Network Time Protocol: synchronizes clocks across systems for reliable log correlation.','Operations'],
  ['PAM','Privileged Access Management: controls and monitors use of high-privilege accounts.','Operations'],
  ['Playbook','A repeatable set of response actions for a defined security scenario.','Operations'],
  ['Recovery','Incident-response phase that safely restores systems and validates normal operation.','Operations'],
  ['SIEM','Security Information and Event Management: centralizes, correlates, and analyzes security logs.','Operations'],
  ['SOAR','Security Orchestration, Automation, and Response: automates workflows and response playbooks.','Operations'],
  ['Triage','The initial assessment and prioritization of security alerts or incidents.','Operations'],
  ['Threat hunting','Proactively searching systems and telemetry for signs of hidden adversary activity.','Operations'],
  ['Vulnerability management','The process of finding, prioritizing, remediating, and verifying vulnerabilities.','Operations'],
  ['BIA','Business Impact Analysis: identifies the effect of disruption on business processes.','Management'],
  ['Data classification','Categorizing information by sensitivity and required handling controls.','Management'],
  ['Data retention','Rules that define how long data must be kept and when it should be disposed of.','Management'],
  ['Due diligence','Evaluating a third party controls and risks before entering an agreement.','Management'],
  ['GDPR','General Data Protection Regulation: European Union privacy law governing personal data.','Management'],
  ['NDA','Non-Disclosure Agreement: a contract requiring parties to protect confidential information.','Management'],
  ['Policy','A high-level management statement of required security direction and rules.','Management'],
  ['Procedure','Detailed, repeatable steps for carrying out a policy or standard.','Management'],
  ['Risk acceptance','A documented decision to tolerate a risk without further treatment.','Management'],
  ['Risk avoidance','Eliminating the activity that creates a particular risk.','Management'],
  ['Risk transfer','Shifting some financial impact of a risk to another party, such as through insurance.','Management'],
  ['RPO','Recovery Point Objective: maximum acceptable data loss measured in time.','Management'],
  ['RTO','Recovery Time Objective: target maximum time to restore a process or service.','Management'],
  ['SLA','Service Level Agreement: measurable commitments for a provider service, such as availability.','Management'],
  ['Standard','A mandatory, specific requirement that supports a policy.','Management'],
  ['Tabletop exercise','A discussion-based continuity or incident exercise that tests decisions and roles without disrupting systems.','Management'],
  ['Third-party risk','Risk introduced by suppliers, partners, contractors, and their systems or services.','Management'],
  ['AUP','Acceptable Use Policy: rules for permitted use of organization technology and information.','Management'],
].map(([term,definition,domain])=>({term,definition,domain}));

const AZ_DOMAINS = {
  core: { name: 'Core networking infrastructure', weight: 28 },
  connectivity: { name: 'Connectivity services', weight: 23 },
  delivery: { name: 'Application delivery services', weight: 18 },
  private: { name: 'Private access to Azure services', weight: 13 },
  security: { name: 'Azure network security services', weight: 18 }
};
const AZ_BANK = [
  ...enSeries('core', 'for an Azure deployment,', [
    {stem:'which resource provides a logically isolated network boundary for Azure workloads?',options:['Virtual network (VNet)','Resource group','Availability set','Management group'],correct:0,explanation:'A VNet is the foundational logical network boundary for Azure resources.'},
    {stem:'which mechanism directs subnet traffic to a virtual appliance or virtual network gateway?',options:['User-defined route (UDR)','Network security group','Private DNS zone','Application security group'],correct:0,explanation:'A UDR in a route table controls the next hop for subnet traffic.'},
    {stem:'which Azure service provides outbound SNAT at scale for resources in a subnet?',options:['NAT Gateway','Azure Bastion','Private Endpoint','Route Server'],correct:0,explanation:'NAT Gateway provides scalable, predictable outbound connectivity and SNAT.'},
    {stem:'which TWO actions are required to use a private DNS zone for Azure private endpoints?',options:['Link the zone to the VNet','Create the appropriate private DNS records','Assign a public IP prefix','Enable an NSG service tag'],correct:[0,1],multi:true,explanation:'The private DNS zone must be linked to the VNet and contain the records that map the private endpoint name to its private IP.'},
    {stem:'which service should be used to inspect effective routes and diagnose packet paths in Azure?',options:['Azure Network Watcher','Azure Policy','Azure Advisor','Microsoft Sentinel'],correct:0,explanation:'Network Watcher includes effective routes, next hop, connection troubleshoot, and other network diagnostics.'},
    {stem:'which Azure component exchanges dynamic routes between network virtual appliances and a virtual network?',options:['Azure Route Server','Azure Front Door','Azure DNS','Azure Load Balancer'],correct:0,explanation:'Azure Route Server enables BGP route exchange with supported NVAs.'}
  ]),
  ...enSeries('connectivity', 'for Azure hybrid connectivity,', [
    {stem:'which connection type creates encrypted connectivity between an on-premises network and an Azure VNet over the public Internet?',options:['Site-to-site VPN','VNet peering','Private Link','Service endpoint'],correct:0,explanation:'A site-to-site VPN uses VPN gateways and IPsec/IKE across the Internet.'},
    {stem:'which gateway configuration is required for most modern Azure VPN connections that use multiple tunnels and BGP?',options:['Route-based VPN gateway','Policy-based VPN gateway','Application Gateway','NAT Gateway'],correct:0,explanation:'Route-based VPN gateways support features such as BGP and multiple connections.'},
    {stem:'which component represents the on-premises network and VPN device configuration in Azure?',options:['Local network gateway','Virtual network gateway','Route table','Private endpoint'],correct:0,explanation:'A local network gateway contains on-premises address spaces and VPN device information.'},
    {stem:'which service provides dedicated private connectivity from an organization to Microsoft cloud services?',options:['ExpressRoute','Point-to-site VPN','Azure Bastion','VNet peering'],correct:0,explanation:'ExpressRoute provides private connectivity through a connectivity provider rather than the public Internet.'},
    {stem:'which TWO choices can authenticate a point-to-site VPN user?',options:['Microsoft Entra ID','Certificate authentication','A public load balancer','A route table'],correct:[0,1],multi:true,explanation:'Point-to-site VPN supports authentication methods including certificates and Microsoft Entra ID, subject to selected tunnel type and gateway configuration.'},
    {stem:'which feature lets a peered spoke VNet use a hub virtual network gateway?',options:['Gateway transit','Service chaining','Forced tunneling','IP forwarding'],correct:0,explanation:'Gateway transit and use remote gateways allow spokes to use a gateway in the hub.'}
  ]),
  ...enSeries('delivery', 'for an internet-facing Azure application,', [
    {stem:'which Azure service provides Layer 7 HTTP/S load balancing inside a region and can include a web application firewall?',options:['Application Gateway','Azure Load Balancer','NAT Gateway','Route Server'],correct:0,explanation:'Application Gateway is a regional Layer 7 load balancer with optional WAF.'},
    {stem:'which service is designed for global HTTP/S acceleration, edge delivery, and global WAF policy?',options:['Azure Front Door','Application Gateway','Internal Load Balancer','VPN Gateway'],correct:0,explanation:'Azure Front Door is a global application delivery service with edge routing and WAF integration.'},
    {stem:'which Azure load-balancing service operates at Layer 4 for TCP and UDP traffic?',options:['Azure Load Balancer','Azure Front Door','Application Gateway','Traffic Manager'],correct:0,explanation:'Azure Load Balancer distributes Layer 4 TCP and UDP flows.'},
    {stem:'which service uses DNS responses to direct clients to healthy endpoints based on a traffic-routing method?',options:['Traffic Manager','Azure Load Balancer','NAT Gateway','Private Link'],correct:0,explanation:'Traffic Manager is DNS-based traffic distribution and endpoint health monitoring.'},
    {stem:'which TWO settings are essential when configuring an Application Gateway listener for HTTPS?',options:['A TLS certificate','A frontend IP configuration','A local network gateway','A BGP peer'],correct:[0,1],multi:true,explanation:'An HTTPS listener needs a certificate and a frontend IP configuration on the gateway.'},
    {stem:'which routing method is best when users should be directed to the Azure endpoint with the lowest network latency?',options:['Performance routing in Traffic Manager','Priority routing only','Forced tunneling','Gateway transit'],correct:0,explanation:'Traffic Manager performance routing directs clients to the endpoint with the lowest latency.'}
  ]),
  ...enSeries('private', 'for a private Azure PaaS design,', [
    {stem:'which feature assigns a private IP address from a VNet to an Azure PaaS resource?',options:['Private Endpoint','Service endpoint','Public IP prefix','NAT Gateway'],correct:0,explanation:'A private endpoint is a network interface with a private IP in the consumer VNet.'},
    {stem:'which feature keeps a PaaS service public but extends its identity to a selected VNet subnet?',options:['Service endpoint','Private Link service','VNet peering','Azure Bastion'],correct:0,explanation:'Service endpoints extend a subnet identity to supported Azure services while the service retains a public endpoint.'},
    {stem:'which DNS design is normally required so clients resolve a private endpoint name to its private address?',options:['Private DNS zone linked to the VNet','Public DNS zone only','Public IP prefix','Traffic Manager profile'],correct:0,explanation:'Private DNS zones provide name resolution to private endpoint addresses for linked VNets.'},
    {stem:'which Azure capability exposes a service behind a standard load balancer privately to consumers through Private Link?',options:['Private Link service','Service endpoint policy','Azure Firewall Manager','Virtual WAN'],correct:0,explanation:'A Private Link service exposes a provider service privately through an Azure Standard Load Balancer.'},
    {stem:'which TWO statements describe a private endpoint?',options:['It uses a private IP in a VNet','It can secure access to supported PaaS resources','It requires a public IP on the client VM','It replaces all DNS configuration automatically'],correct:[0,1],multi:true,explanation:'Private endpoints use VNet private IPs and support private access to compatible services; DNS still requires deliberate configuration.'},
    {stem:'which control can restrict which Azure PaaS resources are reachable through service endpoints from a subnet?',options:['Service endpoint policy','Network Watcher','Application security group','Public IP prefix'],correct:0,explanation:'Service endpoint policies filter access to supported Azure service resources from a subnet.'}
  ]),
  ...enSeries('security', 'for Azure network protection,', [
    {stem:'which Azure control filters inbound and outbound Layer 3 and Layer 4 traffic at a subnet or network interface?',options:['Network security group','Azure DNS','Traffic Manager','Private DNS zone'],correct:0,explanation:'NSGs contain stateful security rules and can be associated with subnets and NICs.'},
    {stem:'which NSG feature lets rules refer to a logical group of application NICs rather than IP addresses?',options:['Application security group','Service tag','Route table','Private Link service'],correct:0,explanation:'Application security groups allow NSG rules to use logical application group membership.'},
    {stem:'which Azure service provides centralized, stateful firewalling with network and application rules?',options:['Azure Firewall','Network security group','Azure Route Server','Azure DNS Private Resolver'],correct:0,explanation:'Azure Firewall is a managed, stateful firewall service with network and application rule processing.'},
    {stem:'which deployment option provides a managed WAF at Microsoft global edge locations?',options:['Azure Front Door WAF','Azure Load Balancer','NAT Gateway','VPN Gateway'],correct:0,explanation:'Azure Front Door WAF protects HTTP/S applications at the global edge.'},
    {stem:'which TWO capabilities are available in Network Watcher for NSG troubleshooting?',options:['IP flow verify','NSG flow logs','Automatic certificate issuance','BGP route advertisement'],correct:[0,1],multi:true,explanation:'Network Watcher provides IP flow verify and flow logging to inspect NSG behavior and traffic.'},
    {stem:'which service helps protect Azure public IP resources from volumetric distributed denial-of-service attacks?',options:['Azure DDoS Protection','Azure Policy','Azure Key Vault','Azure Backup'],correct:0,explanation:'Azure DDoS Protection provides enhanced mitigation and telemetry for protected public IP resources.'}
  ]),
  ...Array.from({length:10},(_,i)=>pbq(`az-pbq-${i}`,['core','connectivity','delivery','private','security'][i%5],`PBQ: Select the Azure service that best fits each networking objective (scenario ${i+1}).`,[
    {label:'Private access to a supported PaaS service',options:['Private Endpoint','Public IP prefix','Traffic Manager'],correct:0},
    {label:'Stateful centralized network and application filtering',options:['Azure Firewall','Route table','Private DNS zone'],correct:0},
    {label:'Global HTTP/S routing with edge WAF',options:['Azure Front Door','NAT Gateway','Local network gateway'],correct:0}
  ],'Private Endpoint provides private PaaS access, Azure Firewall provides centralized filtering, and Azure Front Door provides global HTTP/S delivery with WAF.')),
];
if (AZ_BANK.length !== 1000) console.warn(`Expected 1000 AZ-700 questions, found ${AZ_BANK.length}`);
const AZ_GLOSSARY = [
  ['ASG','Application Security Group: logical grouping of NICs for use in NSG rules.','Network security'],
  ['Azure Bastion','A managed service providing secure RDP and SSH access without exposing VMs with public IPs.','Connectivity'],
  ['Azure Firewall','Managed, stateful cloud firewall with network, application, and NAT rules.','Network security'],
  ['Azure Front Door','Global application delivery and acceleration service with optional WAF.','Application delivery'],
  ['Azure Load Balancer','Layer 4 TCP/UDP load balancer for Azure workloads.','Application delivery'],
  ['Azure Route Server','Managed BGP route exchange between Azure VNets and NVAs.','Core networking'],
  ['Azure Virtual WAN','Managed networking service for large-scale branch, VPN, ExpressRoute, and virtual hub connectivity.','Connectivity'],
  ['BGP','Border Gateway Protocol: dynamic routing protocol used by Azure VPN gateways, ExpressRoute, and Route Server.','Connectivity'],
  ['DDoS Protection','Azure service that mitigates distributed denial-of-service attacks against protected public IP resources.','Network security'],
  ['DNS Private Resolver','Managed Azure service for hybrid DNS resolution between Azure and on-premises networks.','Core networking'],
  ['ExpressRoute','Private dedicated connectivity from an organization to Microsoft cloud services.','Connectivity'],
  ['Forced tunneling','Routing Internet-bound Azure traffic through an on-premises network or security appliance.','Core networking'],
  ['Gateway transit','A VNet peering setting that lets a spoke use a hub VPN or ExpressRoute gateway.','Connectivity'],
  ['NAT Gateway','Managed service providing scalable outbound SNAT for a subnet.','Core networking'],
  ['NVA','Network Virtual Appliance: a VM-based networking function such as a firewall or router.','Core networking'],
  ['NSG','Network Security Group: stateful Layer 3/4 allow and deny rules for a subnet or NIC.','Network security'],
  ['Private Endpoint','A private IP network interface that connects a VNet to a supported Azure service through Private Link.','Private access'],
  ['Private Link','Azure private connectivity platform for supported PaaS services and customer-provided services.','Private access'],
  ['Route table','A collection of user-defined routes associated with one or more subnets.','Core networking'],
  ['Service endpoint','Extends a VNet subnet identity to supported Azure PaaS services over the Azure backbone.','Private access'],
  ['Service tag','A named group of Azure IP prefixes used in NSG and firewall rules.','Network security'],
  ['Traffic Manager','DNS-based global traffic distribution service with endpoint health checks.','Application delivery'],
  ['UDR','User-Defined Route: custom route that controls a subnet next hop.','Core networking'],
  ['VNet peering','Private Azure backbone connectivity between virtual networks.','Connectivity'],
  ['VPN Gateway','Managed gateway for site-to-site, point-to-site, and VNet-to-VNet VPN connections.','Connectivity'],
  ['WAF','Web Application Firewall: protection for HTTP/S apps on Application Gateway or Azure Front Door.','Network security'],
].map(([term,definition,domain])=>({term,definition,domain}));
const EXAMS = {
  security: {name:'CompTIA Security+ SY0-701',shortName:'Security+ SY0-701',bank:ENGLISH_BANK,glossary:GLOSSARY,domains:DOMAINS,counts:{general:11,threats:20,architecture:16,operations:25,management:18},questions:90,seconds:5400,score:'750 / 900',description:'Cybersecurity fundamentals, operations, architecture, and governance.'},
  az700: {name:'Microsoft Azure Network Engineer Associate — AZ-700',shortName:'AZ-700',bank:AZ_BANK,glossary:AZ_GLOSSARY,domains:AZ_DOMAINS,counts:{core:17,connectivity:14,delivery:11,private:8,security:10},questions:60,seconds:6000,score:'Practice simulation',description:'Designing and implementing Microsoft Azure networking solutions.'}
};

