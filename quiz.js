let score = 0; 
let currentQuestionIndex = 0; // Index fängt immer bei Null an, deshlb auch die Fragen

// Fragen in Objekten, welches innerhalb eines Array liegt
let questions = [
    {
        question: "Wofür steht 'HTML'?",
        answers: ["Hyper Text Markup Language", "High Tech Machine Learning", "Hyperlink Transfer Method Line"],
        correctAnswer: 0
    },
    {
        question: "Was ist ein 'Array'",
        answers: ["Ein Fehler im Code", "Eine geordnete Liste von Werten", "Eine Art von Datenbank"],
        correctAnswer: 1
    },
    {
        question: "Welches dieser Zeichen leitet in JavaScript einen Kommentar ein?",
        answers: ["<!--...--!>", "//", "##"],
        correctAnswer: 1
    },
    {
        question: "Was macht eine Variable?",
        answers: ["Sie speichert Werte", "Sie löscht Webseiten", "Sie verschlüsselt Werte"],
        correctAnswer: 0
    },
    {
        question: "Wofür wird CSS verwendet?",
        answers: ["Zum Speichern von Daten", "Für die Gestaltung und das Design einer Webseite", "Für die Struktur einer Webseite"],
        correctAnswer: 1
    },
    {
        question: "Welche Programmiersprche läuft direkt im Browser?",
        answers: ["C++", "Python", "JavaScript"],
        correctAnswer: 2
    },
    {
        question: "Was ist ein Bug?",
        answers: ["Ein erfolgreich kompilierter Code", "Ein Backup des Codes", "Ein Fehler im Programm"],
        correctAnswer: 2
    },
    {
        question: "Wofür steht 'API'?",
        answers: ["Application Programming Interface", "App Performance Interface", "Automatic Process Indicator"],
        correctAnswer: 0
    },
    {
        question: "Wofür bedeutet 'open-source'?",
        answers: ["Der Code ist privat", "Es speichert Daten dauerhaft", "Der Code ist öffentlich zugänglich"],
        correctAnswer: 2
    },
    {
        question: "Was ist ein Algorithmus?",
        answers: ["Ein Schritt-für-Schritt-Vorgehen zur Lösung eines Problems", "Eine Art Netzwerk", "Ein spezielles Computerprogramm"],
        correctAnswer: 0
    },
    {
        question: "Was ist 'Git'?",
        answers: ["Ein Online-Spiel", "Ein Versionkontrollsystem", "Ein Virenscanner"],
        correctAnswer: 1
    }, 
    {
        question: "Was ist ein Datentyp?",
        answers: ["Eine Kategorie für gespeicherte Werte (z.B. Zahl,Text)", "Ein Werkzeug zum Schreiben von Code", "Ein Computergehäuse"],
        correctAnswer: 0
    }, 
    {
        question: "Wofür nutzt man eine Schleife?",
        answers: ["Um Wiederholungen im Code auszuführen", "Um Webseiten zu gestalten", "Um Wiederholungen im Code zu vermeiden"],
        correctAnswer: 0
    },
    {
        question: "Was ist ein Server?",
        answers: ["Eine Art Netzwerk", "Ein spezielles Computerprogramm","Ein Computer, der Dienste oder Daten zur Verfügung stellt"],
        correctAnswer: 2
    },
    {
        question: "Was macht eine Funktion?",
        answers: ["Sie startet den Computer", "Sie fasst Code zusammen und kann mehrmals ausgeführt werden", "Sie verknüpft Variablen"],
        correctAnswer: 1
    },
    {
        question: "Was bedeutet 'Frontend' in der Webentwicklung?",
        answers: ["Alles was im Vordergrund nicht läuft", "Die Datenbankverbindung", "Die Benutzeroberfäche, die der Nutzer sieht"],
        correctAnswer: 2
    },
    {
        question: "Wie zeigt man in Python etwas auf der Konsole an?",
        answers: ["echo()", "print()", "show()"],
        correctAnswer: 1
    }, 
    {
        question: "Welche Datenstruktur ist in Python unveränderlich?",
        answers: ["dict", "list", "tuple"],
        correctAnswer: 2
    }, 
    {
        question: "Welche Bedeutung hat git commit -m 'text'?",
        answers: ["Fügt Dateien zum Index hinzu", "Speichert Änderungen mit einer Nachricht", "Lädt Änderungen hoch"],
        correctAnswer: 1
    }, 
    {
        question: "Was ist ein Betriebssystem?",
        answers: ["Eine Software, die Hardware und Programme verwaltet", "Eine Programmiersprache", "Ein Computer-Virus"],
        correctAnswer: 0
    }, 
    {
        question: "Welcher Git-Befehl lädt Änderungen vom entfernten Repository herunter?",
        answers: ["git pull", "git clone", "git push"],
        correctAnswer: 0
    }, 
    {
        question: "Was ist 'JSON'?",
        answers: ["Ein Linux-Befehl", "Ein Computerchip", "Ein Speicherformat von Daten"],
        correctAnswer: 2
    }, 
    {
        question: "Was ist ein Browser?",
        answers: ["Ein anderes Wort für Google", "Ein Programm zum Anzeigen von Webseiten", "Ein Computergehäuse"],
        correctAnswer: 1
    }, 
    {
        question: "Was ist eine API?",
        answers: ["Ein Format zum Speichern von Daten", "Ein Spezialprozessor", "Schnittstelle, über die Programme miteinander kommunizieren"],
        correctAnswer: 2
    }, 
    {
        question: "Was ist ein Router?",
        answers: ["Ein Gerät, das Netzwerke verbindet", "Ein Monitor", "Ein Fehlermeldung"],
        correctAnswer: 0
    }, 
    {
        question: "Welcher HTTP-Status bedeutet 'Seite wurde nicht gefunden'?",
        answers: ["404", "200", "500"],
        correctAnswer: 0
    }, 
    {
        question: "Wie nennt man die kleinste Informationseinheit im Computer?",
        answers: ["Byte ", "Bit", "Buffer"],
        correctAnswer: 1
    }, 
    {
        question: "Was ist eine Repository in Git?",
        answers: ["Eine Cloud für Daten", "Ein Speicherort für Code", "Ein Texteditor"],
        correctAnswer: 1
    }, 
    {
        question: "Was ist ein Framework?",
        answers: ["Eine Computergehäuse", "Ein Computervirus", "Ein Grundgerüst für Softwareentwicklung"],
        correctAnswer: 2
    }, 
    {
        question: "Welcher Befehl erstellt einen neuen Ordner in Linux?",
        answers: ["mkdir", "newdir", "folderr"],
        correctAnswer: 0
    }, 
    {
        question: "Was bedeutet 'Responsive Design'?",
        answers: ["Webseiten passen sich verschiedenen Bildschirmgrößen an", "Webseiten können sprechen", "Webseiten starten automatisch"],
        correctAnswer: 0
    }, 
    
]

// die Funktion soll die Fragen anzeigen, vom Array Block questions und immer nacheinander die Fragen anzeigen
function displayQuestion() {
    //wenn die letzte Frage erreicht wurde, verschwindet das Quiz und das Ergebnis wird angezeigt
    if(currentQuestionIndex >= questions.length) {
        
        document.getElementById('quiz-container').hidden = true;
        document.getElementById('result').hidden = false;
        document.getElementById('score').textContent = score;
        return;
    }
    
    let question = questions[currentQuestionIndex];

    //'question' steht für die class Id im HTML, davon von wir den Textinhalt question, das Array und darin sind Properties, die wieder question heißen, also die eigentliche Frage
    document.getElementById('question').textContent = question.question;
    
    //Abspeicherung des HTML-Element ID 'answers' in answersDiv um die im JavaScript für den Button zu verwenden
    let answersDiv = document.getElementById('answers');
    answersDiv.innerHTML = " "; //Buttons verschwinden bei der nächsten Frage

    //Schleife die jedes Element im Array die Funktion wiederholt
    question.answers.forEach((answer, index) => {
        let answerButton = document.createElement('button'); //Erstellt ein neues Button
        answerButton.textContent = answer; // der Textinhalt vom Antwortbutton ist jeweils die Antwortmöglichkeit
        answerButton.onclick = () => checkAnswer(index); //beim Klicken vom Button wird die Antwort überprüft
        answersDiv.appendChild(answerButton); //fügt den BUtton in HTML-Element ein und macht in sichtbar
    });
}

displayQuestion(); //Ausruf der Funktion

// Funktion zur Prüfung der Benutzerantwort
function checkAnswer(userAnswer){
    let correctAnswer = questions[currentQuestionIndex].correctAnswer;
    
    //wenn die Antwort richtig ist, erhöht sie der Score
    if(userAnswer == correctAnswer){
        score += 1;
    }

        nextQuestion();
}

function nextQuestion(){
    currentQuestionIndex += 1;
    displayQuestion();
}

function restartQuiz() {
    score = 0;
    currentQuestionIndex = 0;

    // Ergebnis verstecken
    document.getElementById('result').hidden = false;

    // Quiz wieder anzeigen
    document.getElementById('quiz-container').hidden = false;

    // Neue erste Frage anzeigen
    displayQuestion();

}
