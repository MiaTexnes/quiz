// Array of 200 questions in Norwegian
const questions = [
    {
        question: "Hva er hovedstaden i Norge?",
        options: ["Oslo", "Bergen", "Trondheim", "Stavanger"],
        correctAnswer: "Oslo"
    },
    {
        question: "Hva er 5 + 7?",
        options: ["10", "11", "12", "13"],
        correctAnswer: "12"
    },
    {
        question: "Hvilket år startet andre verdenskrig?",
        options: ["1935", "1939", "1941", "1945"],
        correctAnswer: "1939"
    },
    {
        question: "Hva er Norges nasjonalblomst?",
        options: ["Blåklokke", "Røsslyng", "Hvitveis", "Liljekonvall"],
        correctAnswer: "Røsslyng"
    },
    {
        question: "Hvem skrev 'Et dukkehjem'?",
        options: ["Henrik Ibsen", "Knut Hamsun", "Sigrid Undset", "Johan Falkberget"],
        correctAnswer: "Henrik Ibsen"
    },
    {
        question: "Hva er det kjemiske symbolet for vann?",
        options: ["H2O", "O2", "CO2", "NaCl"],
        correctAnswer: "H2O"
    },
    {
        question: "Hva er verdens høyeste fjell?",
        options: ["K2", "Mount Everest", "Kilimanjaro", "Denali"],
        correctAnswer: "Mount Everest"
    },
    {
        question: "Hvilken planet er nærmest solen?",
        options: ["Venus", "Mars", "Merkur", "Jupiter"],
        correctAnswer: "Merkur"
    },
    {
        question: "Hva er Norges lengste elv?",
        options: ["Glomma", "Numedalslågen", "Drammenselva", "Namsen"],
        correctAnswer: "Glomma"
    },
    {
        question: "Hvem malte 'Skrik'?",
        options: ["Edvard Munch", "Pablo Picasso", "Claude Monet", "Vincent van Gogh"],
        correctAnswer: "Edvard Munch"
    },
    // Erstatter veldig enkle spørsmål med mer alderstilpassede
    {
        question: "Hva kalles den lengste perioden i jordens historie?",
        options: ["Prekambrium", "Jura", "Kritt", "Kvartær"],
        correctAnswer: "Prekambrium"
    },
    {
        question: "Hvilke tre primærfarger brukes i maling?",
        options: ["Rød, gul, blå", "Rød, grønn, blå", "Cyan, magenta, gul", "Oransje, grønn, lilla"],
        correctAnswer: "Rød, gul, blå"
    },
    {
        question: "Hvilken frukt inneholder mest vitamin C?",
        options: ["Kiwi", "Appelsin", "Eple", "Banan"],
        correctAnswer: "Kiwi"
    },
    {
        question: "Hvilket dyr regnes som det raskeste på land?",
        options: ["Gepard", "Løve", "Antilope", "Struts"],
        correctAnswer: "Gepard"
    },
    {
        question: "Hvilken årstid starter astronomisk ved vårjevndøgn?",
        options: ["Vår", "Sommer", "Høst", "Vinter"],
        correctAnswer: "Vår"
    },
    {
        question: "Hvor mange planeter er det i vårt solsystem?",
        options: ["8", "9", "7", "10"],
        correctAnswer: "8"
    },
    {
        question: "Hva kalles fenomenet som forårsaker regnbuer?",
        options: ["Lysbrytning", "Refleksjon", "Diffraksjon", "Konveksjon"],
        correctAnswer: "Lysbrytning"
    },
    {
        question: "Hva står forkortelsen DNA for?",
        options: ["Deoksyribonukleinsyre", "Dinitroacetat", "Dioksyribose-Niacin-Adenosin", "Deoxygenert Nukleær Adenin"],
        correctAnswer: "Deoksyribonukleinsyre"
    },
    {
        question: "Hvilken karakter ble spilt av Daniel Radcliffe i en populær filmserie?",
        options: ["Harry Potter", "Frodo Baggins", "Percy Jackson", "Edward Cullen"],
        correctAnswer: "Harry Potter"
    },
    {
        question: "Hvilket dyr kan leve lengst?",
        options: ["Grønlandshval", "Elefant", "Skilpadde", "Papegøye"],
        correctAnswer: "Grønlandshval"
    },
    // Populære filmer og karakterer
    {
        question: "Hvem er hovedpersonen i 'Harry Potter'-bøkene?",
        options: ["Harry Potter", "Ron Weasley", "Hermione Granger", "Draco Malfoy"],
        correctAnswer: "Harry Potter"
    },
    {
        question: "Hvilken film handler om en gutt som blir etterlatt hjemme ved juletider?",
        options: ["Alene hjemme", "Julenissen", "Polarekspressen", "Grinchen"],
        correctAnswer: "Alene hjemme"
    },
    {
        question: "Hvilken tegneseriefigur er kjent for å spise spinat?",
        options: ["Skipper'n", "Mikke Mus", "Donald Duck", "Snurre Sprett"],
        correctAnswer: "Skipper'n"
    },
    {
        question: "Hvilken karakter sier 'Hasta la vista, baby' i Terminator 2?",
        options: ["T-800", "John Connor", "Sarah Connor", "T-1000"],
        correctAnswer: "T-800"
    },
    {
        question: "Hvem spiller hovedrollen i 'Pirates of the Caribbean'?",
        options: ["Johnny Depp", "Orlando Bloom", "Keira Knightley", "Geoffrey Rush"],
        correctAnswer: "Johnny Depp"
    },
    {
        question: "Hvilken superhelt er også kjent som 'Edderkoppmannen'?",
        options: ["Spider-Man", "Batman", "Superman", "Iron Man"],
        correctAnswer: "Spider-Man"
    },
    {
        question: "Hva heter prinsessen i 'Frozen'?",
        options: ["Elsa", "Anna", "Moana", "Rapunzel"],
        correctAnswer: "Elsa"
    },
    {
        question: "Hvilken farge er Sonic the Hedgehog?",
        options: ["Blå", "Rød", "Grønn", "Gul"],
        correctAnswer: "Blå"
    },
    {
        question: "I hvilken by bor Batman?",
        options: ["Gotham City", "Metropolis", "New York", "Star City"],
        correctAnswer: "Gotham City"
    },
    {
        question: "Hvem spiller Iron Man i Marvel-filmene?",
        options: ["Robert Downey Jr.", "Chris Evans", "Chris Hemsworth", "Mark Ruffalo"],
        correctAnswer: "Robert Downey Jr."
    },
    // Erstatter flere enkle spørsmål med mer utfordrende
    {
        question: "Hva kalles prosessen der planter lager næring ved hjelp av sollys?",
        options: ["Fotosyntese", "Celledeling", "Respirasjons", "Fordøyelse"],
        correctAnswer: "Fotosyntese"
    },
    {
        question: "Hvor mange timer tar jorden å rotere rundt sin egen akse?",
        options: ["24 timer", "12 timer", "365 timer", "1 time"],
        correctAnswer: "24 timer"
    },
    {
        question: "Hvilken av disse er et pattedyr som legger egg?",
        options: ["Nebbdyr", "Krokodille", "Pingvin", "Frosk"],
        correctAnswer: "Nebbdyr"
    },
    {
        question: "Hvilken farge er trafikklys i midten?",
        options: ["Gul", "Grønn", "Rød", "Blå"],
        correctAnswer: "Gul"
    },
    {
        question: "Hvilken ukedag er oppkalt etter den norrøne guden Odin?",
        options: ["Onsdag", "Torsdag", "Tirsdag", "Fredag"],
        correctAnswer: "Onsdag"
    },
    {
        question: "Hvilken type energi kan solcellepaneler fange opp?",
        options: ["Solenergi", "Vindenergi", "Bølgeenergi", "Varmeenergi"],
        correctAnswer: "Solenergi"
    },
    {
        question: "Hvilken frukttype er eple klassifisert som?",
        options: ["Kjernefrukt", "Steinfrukt", "Bær", "Sitrusfrukt"],
        correctAnswer: "Kjernefrukt"
    },
    {
        question: "Hva er resultatet av 5² (5 i andre)?",
        options: ["25", "10", "20", "5"],
        correctAnswer: "25"
    },
    {
        question: "Hvilket organ i kroppen produserer insulin?",
        options: ["Bukspyttkjertelen", "Leveren", "Nyrene", "Hjertet"],
        correctAnswer: "Bukspyttkjertelen"
    },
    {
        question: "Hva kalles en samling av skyer som gir regn?",
        options: ["Nedbør", "Kondensasjon", "Evaporasjon", "Sublimering"],
        correctAnswer: "Nedbør"
    },
    // Dyr og natur
    {
        question: "Hvilken fugl kan ikke fly?",
        options: ["Pingvin", "Ørn", "Due", "Papegøye"],
        correctAnswer: "Pingvin"
    },
    {
        question: "Hvilken farge er ofte blader om høsten?",
        options: ["Oransje/rød", "Grønn", "Blå", "Lilla"],
        correctAnswer: "Oransje/rød"
    },
    {
        question: "Hvilket dyr er kjent som 'skogens konge'?",
        options: ["Løven", "Elg", "Bjørn", "Tiger"],
        correctAnswer: "Løven"
    },
    {
        question: "Hvor mange bein har en edderkopp?",
        options: ["8", "6", "4", "10"],
        correctAnswer: "8"
    },
    {
        question: "Hva heter dyret som har lang hals?",
        options: ["Sjiraff", "Elefant", "Flodhest", "Krokodille"],
        correctAnswer: "Sjiraff"
    },
    {
        question: "Hvilket dyr er kjent for å 'brekke'?",
        options: ["Sau", "Hund", "Katt", "Hest"],
        correctAnswer: "Sau"
    },
    {
        question: "Hva lager bier?",
        options: ["Honning", "Melk", "Syltetøy", "Sukker"],
        correctAnswer: "Honning"
    },
    {
        question: "Hvilken fisk er kjent for å være oransje?",
        options: ["Gullfisk", "Laks", "Torsk", "Makrell"],
        correctAnswer: "Gullfisk"
    },
    {
        question: "Hvilke dyr er kjent for å leve i Australia?",
        options: ["Kenguru", "Isbjørn", "Løve", "Pingvin"],
        correctAnswer: "Kenguru"
    },
    {
        question: "Hvilket av disse dyrene lever i havet?",
        options: ["Delfin", "Elefant", "Løve", "Ørn"],
        correctAnswer: "Delfin"
    },
    // Sport og spill - Erstatter enkle spørsmål med mer interessante
    {
        question: "Hvilken form har en fotball?",
        options: ["Ikosaeder (20-sidet)", "Kube", "Kule", "Pyramide"],
        correctAnswer: "Ikosaeder (20-sidet)"
    },
    {
        question: "Hvilket spill ble oppfunnet av den franske matematikeren Blaise Pascal?",
        options: ["Rulett", "Sjakk", "Poker", "Backgammon"],
        correctAnswer: "Rulett"
    },
    {
        question: "Hvilken sport bruker begrepet 'birdie'?",
        options: ["Golf", "Fotball", "Tennis", "Svømming"],
        correctAnswer: "Golf"
    },
    {
        question: "Hva kalles det høyeste kortet i standard kortstokk?",
        options: ["Ess", "Konge", "Dronning", "Joker"],
        correctAnswer: "Ess"
    },
    {
        question: "Hvilken farge er hovedfargen på Wimbledon-tennisbanen?",
        options: ["Grønn", "Rød", "Blå", "Brun"],
        correctAnswer: "Grønn"
    },
    {
        question: "Hva er en 'spare' i bowling?",
        options: ["Alle kjegler ned på to kast", "Alle kjegler ned på ett kast", "Ingen kjegler ned", "Halvparten av kjeglene ned"],
        correctAnswer: "Alle kjegler ned på to kast"
    },
    {
        question: "Hvilket brettspill har brikker som kalles 'tårn', 'løper' og 'springer'?",
        options: ["Sjakk", "Monopol", "Ludo", "Backgammon"],
        correctAnswer: "Sjakk"
    },
    {
        question: "Hvilken sport har en bane som kalles 'court'?",
        options: ["Tennis", "Fotball", "Golf", "Ski"],
        correctAnswer: "Tennis"
    },
    {
        question: "Hvor mange spillere er det totalt på banen i en håndballkamp?",
        options: ["14", "10", "12", "16"],
        correctAnswer: "14"
    },
    {
        question: "Hvilket brettspill går ut på å erobre territorier og kontinenter?",
        options: ["Risk", "Monopol", "Settlers of Catan", "Scrabble"],
        correctAnswer: "Risk"
    },
    // Mat og drikke - mer alderstilpassede
    {
        question: "Hvilken ost kommer opprinnelig fra Hellas?",
        options: ["Feta", "Cheddar", "Brie", "Gorgonzola"],
        correctAnswer: "Feta"
    },
    {
        question: "Hvilken frukt blir tørket for å lage rosiner?",
        options: ["Drue", "Eple", "Banan", "Plomme"],
        correctAnswer: "Drue"
    },
    {
        question: "Hva er hovedingrediensen i tradisjonell hummus?",
        options: ["Kikerter", "Linser", "Poteter", "Ris"],
        correctAnswer: "Kikerter"
    },
    {
        question: "Hvilket land er kjent for å ha oppfunnet pizza?",
        options: ["Italia", "Frankrike", "Spania", "Hellas"],
        correctAnswer: "Italia"
    },
    {
        question: "Hvilken farge har modne blåbær?",
        options: ["Mørkeblå/svart", "Lyseblå", "Lilla", "Rød"],
        correctAnswer: "Mørkeblå/svart"
    },
    {
        question: "Hvilken grønnsak er hovedingrediensen i guacamole?",
        options: ["Avokado", "Agurk", "Brokkoli", "Løk"],
        correctAnswer: "Avokado"
    },
    {
        question: "Hvilken dessert er laget av pisket eggehvite og sukker?",
        options: ["Marengs", "Pannekake", "Vaffel", "Brownies"],
        correctAnswer: "Marengs"
    },
    {
        question: "Hvilken type mat serveres tradisjonelt på julaften i Norge?",
        options: ["Ribbe eller pinnekjøtt", "Kalkun", "Pizza", "Taco"],
        correctAnswer: "Ribbe eller pinnekjøtt"
    },
    {
        question: "Hva kalles japansk risvin?",
        options: ["Sake", "Mirin", "Soya", "Wasabi"],
        correctAnswer: "Sake"
    },
    {
        question: "Hvilken brus ble oppfunnet av apoteker John Pemberton i 1886?",
        options: ["Coca-Cola", "Pepsi", "Fanta", "Sprite"],
        correctAnswer: "Coca-Cola"
    },
    // Geografi - enkelt
    {
        question: "I hvilket land finner du Eiffeltårnet?",
        options: ["Frankrike", "Italia", "Spania", "England"],
        correctAnswer: "Frankrike"
    },
    {
        question: "Hvilket land har form som en støvel?",
        options: ["Italia", "Spania", "Frankrike", "Tyskland"],
        correctAnswer: "Italia"
    },
    {
        question: "Hva er verdens største kontinent?",
        options: ["Asia", "Afrika", "Europa", "Nord-Amerika"],
        correctAnswer: "Asia"
    },
    {
        question: "Hvilken by er kjent for Big Ben?",
        options: ["London", "Paris", "New York", "Roma"],
        correctAnswer: "London"
    },
    {
        question: "Hvor finner du Colosseum?",
        options: ["Roma", "Athen", "Paris", "Barcelona"],
        correctAnswer: "Roma"
    },
    {
        question: "Hvilken by ligger pyramidene nær?",
        options: ["Kairo", "Dubai", "Athen", "Istanbul"],
        correctAnswer: "Kairo"
    },
    {
        question: "Hva er hovedstaden i Japan?",
        options: ["Tokyo", "Beijing", "Seoul", "Bangkok"],
        correctAnswer: "Tokyo"
    },
    {
        question: "Hvilket land er kjent for sine kangaruer?",
        options: ["Australia", "Sør-Afrika", "Brasil", "India"],
        correctAnswer: "Australia"
    },
    {
        question: "Hvilket land er kjent som 'landet med tusen sjøer'?",
        options: ["Finland", "Sverige", "Norge", "Danmark"],
        correctAnswer: "Finland"
    },
    {
        question: "Hvilken by kalles 'Venezia i nord'?",
        options: ["Amsterdam", "Stockholm", "København", "Oslo"],
        correctAnswer: "Amsterdam"
    },
    // Teknologi - mer alderstilpasset
    {
        question: "Hvem grunnla selskapet Apple?",
        options: ["Steve Jobs og Steve Wozniak", "Bill Gates", "Mark Zuckerberg", "Elon Musk"],
        correctAnswer: "Steve Jobs og Steve Wozniak"
    },
    {
        question: "Hva står forkortelsen HTML for?",
        options: ["Hypertext Markup Language", "High Tech Modern Language", "Home Tool Management Language", "Hyper Technical Machine Learning"],
        correctAnswer: "Hypertext Markup Language"
    },
    {
        question: "Hvilken komponent i en datamaskin blir ofte kalt 'hjernen'?",
        options: ["Prosessor (CPU)", "Harddisk", "Minne (RAM)", "Skjermkort"],
        correctAnswer: "Prosessor (CPU)"
    },
    {
        question: "Hvilket sosialt nettverk ble lansert i 2004?",
        options: ["Facebook", "Twitter", "Instagram", "Snapchat"],
        correctAnswer: "Facebook"
    },
    {
        question: "Hva er en 'pixel'?",
        options: ["Et bildepunkt på en skjerm", "En type minnekort", "En liten datamaskin", "En trådløs mus"],
        correctAnswer: "Et bildepunkt på en skjerm"
    },
    {
        question: "Hvilken enhet brukes til å lagre data permanent i en datamaskin?",
        options: ["Harddisk", "RAM", "CPU", "Motherboard"],
        correctAnswer: "Harddisk"
    },
    {
        question: "Hva står forkortelsen Wi-Fi for?",
        options: ["Wireless Fidelity", "Wired Finance", "Wireless Finding", "Web Fiber"],
        correctAnswer: "Wireless Fidelity"
    },
    {
        question: "Hvilken teknologi brukes for å identifisere varer i en butikk?",
        options: ["Strekkode", "Bluetooth", "GPS", "NFC"],
        correctAnswer: "Strekkode"
    },
    {
        question: "Hvilket selskap utviklet operativsystemet Windows?",
        options: ["Microsoft", "Apple", "Google", "IBM"],
        correctAnswer: "Microsoft"
    },
    {
        question: "Hva er hovedfunksjonen til en nettleser?",
        options: ["Vise nettsider", "Sende e-post", "Redigere bilder", "Spille spill"],
        correctAnswer: "Vise nettsider"
    },
    // Hverdagsliv - erstatter de enkleste
    {
        question: "Hva kalles det når vannet i havet stiger og synker to ganger i døgnet?",
        options: ["Tidevann", "Tsunamibølge", "Havstrøm", "Monsun"],
        correctAnswer: "Tidevann"
    },
    {
        question: "Hvilken husholdningsartikkel brukes til å fjerne fuktighet fra klær?",
        options: ["Tørketrommel", "Oppvaskmaskin", "Kaffetrakter", "Mikrobølgeovn"],
        correctAnswer: "Tørketrommel"
    },
    {
        question: "Hva betyr trafikklyset når det blinker gult?",
        options: ["Vær ekstra oppmerksom", "Stopp", "Kjør", "Trafikklys ute av drift"],
        correctAnswer: "Vær ekstra oppmerksom"
    },
    {
        question: "Hvilken måned har 30 dager?",
        options: ["April", "Januar", "August", "Desember"],
        correctAnswer: "April"
    },
    {
        question: "Hvilken transport bruker skinner til å bevege seg?",
        options: ["Tog", "Bil", "Båt", "Fly"],
        correctAnswer: "Tog"
    },
    {
        question: "Hva måler et barometer?",
        options: ["Lufttrykk", "Temperatur", "Fuktighet", "Vindstyrke"],
        correctAnswer: "Lufttrykk"
    },
    {
        question: "Hva brukes i øyet for å justere mengden lys som kommer inn?",
        options: ["Iris", "Hornhinne", "Netthinne", "Linse"],
        correctAnswer: "Iris"
    },
    {
        question: "Hvilken årstid har høstjevndøgn?",
        options: ["Høst", "Vinter", "Vår", "Sommer"],
        correctAnswer: "Høst"
    },
    {
        question: "Hva kalles en person som arbeider på et hotell og bærer bagasje?",
        options: ["Piccolo", "Concierge", "Resepsjonist", "Vaktmester"],
        correctAnswer: "Piccolo"
    },
    {
        question: "Hva kalles partneren til en gift kvinne?",
        options: ["Ektemann", "Kjæreste", "Forlovede", "Ektefelle"],
        correctAnswer: "Ektemann"
    },
    // Norsk pop-kultur
    {
        question: "Hvilken norsk artist har hatt hits som 'Unforgettable' og 'Faded'?",
        options: ["Alan Walker", "Astrid S", "Kygo", "Sigrid"],
        correctAnswer: "Alan Walker"
    },
    {
        question: "Hvilken norsk TV-serie handler om tenåringer på Hartvig Nissen skole?",
        options: ["SKAM", "Exit", "Rådebank", "Førstegangstjenesten"],
        correctAnswer: "SKAM"
    },
    {
        question: "Hvem spiller hovedrollen i filmen 'Den 12. mann'?",
        options: ["Thomas Gullestad", "Aksel Hennie", "Kristofer Hivju", "Nicolai Cleve Broch"],
        correctAnswer: "Thomas Gullestad"
    },
    {
        question: "Hvilken norsk forfatter skrev 'Sofies Verden'?",
        options: ["Jostein Gaarder", "Jo Nesbø", "Karl Ove Knausgård", "Anne B. Ragde"],
        correctAnswer: "Jostein Gaarder"
    },
    {
        question: "Hvilken norsk DJ har samarbeidet med artister som Selena Gomez og Imagine Dragons?",
        options: ["Kygo", "Alan Walker", "Matoma", "Cashmere Cat"],
        correctAnswer: "Kygo"
    },
    {
        question: "Hvilken norsk reality-serie følger unge nordmenn på fest i utlandet?",
        options: ["Paradise Hotel", "Ex on the Beach", "71 grader nord", "Farmen"],
        correctAnswer: "Paradise Hotel"
    },
    {
        question: "Hvilken norsk skuespiller spiller i 'Game of Thrones' som Tormund Giantsbane?",
        options: ["Kristofer Hivju", "Aksel Hennie", "Nikolaj Coster-Waldau", "Tobias Santelmann"],
        correctAnswer: "Kristofer Hivju"
    },
    {
        question: "Hvilken norsk komiker har karakteren 'Asbjørn Brekke'?",
        options: ["Herman Flesvig", "Harald Eia", "Odd-Magnus Williamson", "Atle Antonsen"],
        correctAnswer: "Herman Flesvig"
    },
    {
        question: "Hvilken populær norsk TV-serie handler om oljefondet?",
        options: ["Exit", "Okkupert", "Lykkeland", "Mammon"],
        correctAnswer: "Exit"
    },
    {
        question: "Hvilken norsk komiker er kjent for 'Førstegangstjenesten'?",
        options: ["Herman Flesvig", "Jon Almaas", "Thomas Giertsen", "Bård Ylvisåker"],
        correctAnswer: "Herman Flesvig"
    }
];

// Add a submit button to check answers
const submitButton = document.createElement('button');
submitButton.textContent = "Sjekk svar";
submitButton.className = "submit-button";

// Add the submit button to the page
document.body.appendChild(submitButton);

// Add event listener to check answers when the button is clicked
submitButton.addEventListener('click', () => {
    let score = 0;

    selectedQuestions.forEach((questionObj, index) => {
        const selectedOption = document.querySelector(`input[name="question-${index}"]:checked`);
        
        if (selectedOption && selectedOption.value === questionObj.correctAnswer) {
            score++;
            // Highlight correct answer
            selectedOption.parentElement.classList.add('correct-answer');
        } else if (selectedOption) {
            // Highlight wrong answer
            selectedOption.parentElement.classList.add('wrong-answer');
            
            // Find and highlight the correct answer
            const options = document.querySelectorAll(`input[name="question-${index}"]`);
            options.forEach(option => {
                if (option.value === questionObj.correctAnswer) {
                    option.parentElement.classList.add('correct-answer');
                }
            });
        }
    });

    // Display score
    const scoreDisplay = document.createElement('div');
    scoreDisplay.textContent = `Din poengsum: ${score} av ${selectedQuestions.length}`;
    scoreDisplay.className = 'score-display';
    
    // Insert score display at the top
    quizContainer.insertBefore(scoreDisplay, quizContainer.secondChild);
    
    // Disable submit button after checking answers
    submitButton.disabled = true;
});

// Function to shuffle the questions array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function shuffleOptions(options) {
    for (let i = options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [options[i], options[j]] = [options[j], options[i]];
    }
}

// Shuffle the questions
shuffleArray(questions);

// Select the first 30 questions
const selectedQuestions = questions.slice(0, 30);

// Display the questions on the webpage
const quizContainer = document.getElementById('quiz-container');
selectedQuestions.forEach((questionObj, index) => {
    // Shuffle the options for this question
    shuffleOptions(questionObj.options);

    // Create container for each question
    const questionContainer = document.createElement('div');
    questionContainer.className = 'question-container';
    
    // Create and add the question text
    const questionText = document.createElement('div');
    questionText.className = 'question-text';
    questionText.textContent = `${index + 1}. ${questionObj.question}`;
    questionContainer.appendChild(questionText);
    
    // Create a container for all options for this question
    const optionsContainer = document.createElement('div');
    optionsContainer.className = 'options-container';
    
    // Create and add each option as a radio button
    questionObj.options.forEach((option, optionIndex) => {
        const optionContainer = document.createElement('div');
        optionContainer.className = 'option';
        
        // Create radio button
        const radioButton = document.createElement('input');
        radioButton.type = 'radio';
        radioButton.name = `question-${index}`;
        radioButton.id = `question-${index}-option-${optionIndex}`;
        radioButton.value = option;
        
        // Create label for the radio button
        const label = document.createElement('label');
        label.htmlFor = `question-${index}-option-${optionIndex}`;
        label.textContent = option;
        
        // Add radio button and label to option container
        optionContainer.appendChild(radioButton);
        optionContainer.appendChild(label);
        
        // Add option to options container
        optionsContainer.appendChild(optionContainer);
    });
    
    // Add the options container to the question container
    questionContainer.appendChild(optionsContainer);
    
    // Add the question container to the quiz container
    quizContainer.appendChild(questionContainer);
});

// ...etter at du har laget quiz-container...

// Legg til en grønn knapp rett under h1 (i fasit-button-container)
const fasitButton = document.createElement('button');
fasitButton.textContent = "Vis fasit";
fasitButton.className = "fasit-button";

// Finn containeren rett under h1
const fasitButtonContainer = document.getElementById('fasit-button-container');
fasitButtonContainer.appendChild(fasitButton);

// Åpne fasit når knappen trykkes
fasitButton.addEventListener('click', () => {
    openFasitWindow(selectedQuestions);
});

// Add a print button functionality
document.getElementById('print-button').addEventListener('click', () => {
    window.print();
});

function openFasitWindow(questions) {
    const fasitData = questions.map((q, i) => ({
        number: i + 1,
        question: q.question,
        correctAnswer: q.correctAnswer
    }));
    const dataParam = encodeURIComponent(JSON.stringify(fasitData));
    window.open(`fasit.html?data=${dataParam}`, "_blank");
}