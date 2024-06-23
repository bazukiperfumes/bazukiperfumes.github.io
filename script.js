const answerScores = {
    "Under 18": { "fresh": 2, "fruity": 2 },
    "18-25": { "floral": 2, "sweet": 2 },
    "26-35": { "woody": 2, "spicy": 2 },
    "36-45": { "amber": 2, "warm spicy": 2 },
    "46 and above": { "powdery": 2, "musk": 2 },
    "Male": { "woody": 2, "spicy": 2 },
    "Female": { "floral": 2, "sweet": 2 },
    "Other": { "fresh": 2, "fruity": 2 },
    "Sports": { "fresh": 2, "green": 2 },
    "Parties": { "sweet": 2, "vanilla": 2 },
    "Family Time": { "floral": 2, "warm spicy": 2 },
    "Career": { "woody": 2, "amber": 2 },
    "Diwali": { "spicy": 2, "woody": 2 },
    "Holi": { "fresh": 2, "fruity": 2 },
    "Navratri": { "floral": 2, "amber": 2 },
    "Durga Puja": { "powdery": 2, "musk": 2 },
    "Gulab Jamun": { "sweet": 2, "vanilla": 2 },
    "Rasgulla": { "fresh": 2, "fruity": 2 },
    "Kaju Katli": { "powdery": 2, "nutty": 2 },
    "Jalebi": { "sweet": 2, "crispy": 2 },
    "Light": { "fresh": 2, "citrus": 2 },
    "Moderate": { "floral": 2, "fruity": 2 },
    "Strong": { "woody": 2, "spicy": 2 },
    "Fresh": { "fresh": 2, "green": 2 },
    "Warm": { "amber": 2, "warm spicy": 2 },
    "Spicy": { "spicy": 2, "woody": 2 },
    "Woody": { "woody": 2, "musk": 2 }
};

const noteScores = {
    "green": 1, "white floral": 1, "warm spicy": 1, "fresh": 1, "floral": 1,
    "rose": 1, "woody": 1, "cinnamon": 1, "lactonic": 1, "sweet": 1,
    "mossy": 1, "smoky": 1, "earthy": 1, "vanilla": 1, "amber": 1,
    "tobacco": 1, "Musk": 1, "Plum": 1, "Raspberry": 1, "Lilly of the valley": 1,
    "Dry amber": 1, "oud": 1, "aromatic": 1, "balsamic": 1, "powdery": 1,
    "citrus": 1, "marine": 1, "lavender": 1, "salty": 1, "Aquatic": 1,
    "Mint": 1, "Grape fruit": 1, "Amber wood": 1, "Red Fruits": 1, "Pine apple": 1,
    "fruity": 1, "musky": 1, "violet": 1, "sandal wood": 1, "spicy": 1,
    "fresh spicy": 1, "patchouli": 1, "sweet accord": 1, "metallic": 1,
    "leather": 1, "earthy": 1, "fresh accord": 1, "rose accord": 1, "Spicy accord": 1,
    "Star anise oil": 1, "Basil Oil": 1, "Lavender Oil": 1, "Amber Oil": 1,
    "PINK PEPPER": 1, "VIOLET LEAF": 1, "TUBEROSE": 1, "RED BERRIES": 1, "PEONY": 1,
    "LILAC": 1, "LILY": 1, "JASMINE": 1, "GERANIUM": 1, "CEDAR": 1,
    "PATCHOULI": 1, "bergamot": 1, "mandarin": 1, "cascalone": 1, "aquozone": 1,
    "Lavender": 1, "lentisk": 1, "rosemary": 1, "cypress": 1, "Bakhoor": 1,
    "Jasmine": 1, "Orchid": 1, "Violet": 1, "Agarwood (Oud)": 1, "Ambroxan": 1,
    "Saffron": 1, "Bergamot": 1, "Caraway": 1, "Verbena": 1, "dark coffee": 1,
    "Basil": 1, "Pink Pepper": 1, "Vanilla": 1, "Carnerion": 1, "Earthy": 1,
    "petrichor": 1, "Coriender": 1, "Damask Rose": 1, "Jasmin": 1, "Patchuli": 1,
    "Vanila": 1, "Vetiver": 1, "Powdery": 1, "Crispy": 1, "Nutty": 1
};

const fragrances = [
    { name: "Firdous", brand: "Jannat-Ul-Firdous", notes: "green,white floral,warm spicy,fresh,floral,rose,woody,cinnamon,lactonic" },
    { name: "Smoke", brand: "Michael Malul London", notes: "sweet,mossy,smoky,earthy,white floral,woody,warm spicy,vanilla,amber,tobacco" },
    { name: "musky crush", brand: "", notes: "Musk,Plum,Raspberry,Lilly of the valley,Dry amber" },
    { name: "Tom Ford oudwood", brand: "Tom ford", notes: "woody,oud,warm spicy,aromatic,vanilla,balsamic,fresh spicy,amber,powdery,sweet" },
    { name: "David off Cool water", brand: "David Off", notes: "aromatic,green,marine,fresh spicy,lavender,woody,salty" },
    { name: "Aqua sport", brand: "", notes: "Aquatic,Aromatic,Mint,Grape fruit,Amber wood,Musk,Red Fruits,Pine apple,Rose,Lilly" },
    { name: "falling in love", brand: "", notes: "fruity,vanilla,sweet,white floral,musky,powdery,violet" },
    { name: "love story", brand: "chloe", notes: "white floral,citrus,musky,fruity,sweet,fresh spicy,woody,rose,fresh,powdery" },
    { name: "musk sufi", brand: "Naseem", notes: "lily of the valley,white musk,sandal wood,amber" },
    { name: "satin rouge", brand: "", notes: "aromatic,green,marine,fresh spicy,lavender,woody,salty" },
    { name: "anise dream", brand: "", notes: "Star anise oil,Basil Oil,Lavender Oil,Amber,Rose,Spicy accord,Fresh accord" },
    { name: "pleasure", brand: "", notes: "GREEN NOTES,FREESIA,PINK PEPPER,VIOLET,VIOLET LEAF,TUBEROSE,RED BERRIES,LILY-OF-THE-VALLEY,PEONY,LILAC,LILY,ROSE,JASMINE,GERANIUM,MUSK,CEDAR,SANDALWOOD,PATCHOULI" },
    { name: "kesar chandan", brand: "", notes: "Saffron,Sandalwood" },
    { name: "ocean rush", brand: "", notes: "Bergamot,mandarin,cascalone,aquozone,Lavender,lentisk,rosemary,cypress,Musk,patchouli,amber" },
    { name: "louis vuitton Rhapsody", brand: "Louis Vuitton", notes: "white floral,mossy,earthy,fresh,green,woody" },
    { name: "Tom ford tobacco oud", brand: "Tom ford", notes: "warm spicy,tobacco,woody,whiskey,oud,sweet,amber,balsamic,vanilla,smoky" },
    { name: "Creed white royal oud", brand: "Creed", notes: "woody,musky,powdery,citrus,aromatic,soft spicy,oud,green,amber" },
    { name: "indigo", brand: "", notes: "ORANGE,BERRIES,FRESH NOTES,JASMINE,IRIS,LILLY OF THE VALLEY,MUSK,CEDAR,VANILLA" },
    { name: "Carolina Herrera good girl", brand: "Carolina Herrera", notes: "sweet,white floral,warm spicy,vanilla,cacao,amber,woody,tuberose,almond,powdery" },
    { name: "glory oud", brand: "", notes: "Oud,warm spicy,Fresh Spicy,Patchouli,metallic,musky,woody,leather,earthy,lavender" },
    { name: "Azzaro wanted", brand: "Azzaro", notes: "aromatic,warm spicy,citrus,fresh spicy,woody,amber,fresh,green,vanilla,fruity" },
    { name: "Givenchy dahlia", brand: "Givenchy", notes: "woody,fruity,white floral,patchouli,sweet,warm spicy,powdery,fresh,earthy,balsamic" },
    { name: "oud shanaya", brand: "", notes: "Saffron,Rose,oak moss,Citruses,Lavender,Sugar,Bakhoor,Jasmine,Orchid,Violet,Agarwood (Oud),Amber,White Musk,Ambroxan,Patchouli" },
    { name: "Noir", brand: "Flavia", notes: "Violet,Pink Pepper,Caraway,Bergamot,Verbena" },
    { name: "royal mogra", brand: "", notes: "fruity notes,floral elegance" },
    { name: "dark coffee", brand: "", notes: "dark coffee" },
    { name: "morning dew", brand: "", notes: "Manderin,Burgamot,Lemon,Basil,Pink Pepper,Vanila,Carnerion" },
    { name: "bhini mitti", brand: "", notes: "Petrichor,Earthy,patchouli,cedarwood" },
    { name: "Alexandria Xerjoff", brand: "Xerjoff", notes: "woody,amber,lavender,warm spicy,oud,vanilla,musky,cinnamon,sweet" },
    { name: "japanese cherry blosspm from Bath and Bodyworks", brand: "Bath and Body works", notes: "floral,fresh,woody,white floral,fruity,powdery" },
    { name: "wildstone", brand: "", notes: "orange,lime,peach,Lavender,Wild Berries,White flowers,amber,musk,patchouli,cedarwoods" },
    { name: "bazuki musty", brand: "", notes: "Powdery Note,Earthy,Petrichor,Patchouli,Cedarwood" },
    { name: "sandal wood", brand: "", notes: "Warm base notes of patchouli,sandlewood,amber musk,powder,creamy vanilla" },
    { name: "dior sauvage", brand: "Dior", notes: "citrus,woody,amber,aromatic,vanilla,fresh spicy,warm spicy,powdery,balsamic,sweet" },
    { name: "bleu de chanel", brand: "Channel", notes: "citrus,amber,woody,warm spicy,aromatic,fresh spicy,smoky,balsamic,fresh,green" },
    { name: "dior sauvage elixir", brand: "Dior", notes: "warm spicy,fresh spicy,woody,aromatic,lavender,soft spicy,cinnamon,amber,powdery,balsamic" },
    { name: "black xs paco rabanne", brand: "Paco Rabanne", notes: "sweet,warm spicy,citrus,amber,aromatic,woody,balsamic,cinnamon,patchouli,lactonic" },
    { name: "thousand wishes from Bath and Bodyworks", brand: "Bath and Body works", notes: "floral,fresh,aldehydic,fruity,amber,rose,almond,sweet" },
    { name: "rasasi black", brand: "Rasasi", notes: "lavender,woody,patchouli,aromatic,earthy,warm spicy,fresh spicy,mossy,herbal,musky" },
    { name: "Gucci bloom", brand: "Gucci", notes: "white floral,citrus,tuberose,floral,animalic" },
    { name: "Tom Frod tobacco vanille", brand: "Tom ford", notes: "vanilla,sweet,tobacco,warm spicy,fruity,woody,cacao,powdery" },
    { name: "Victoria Secret bombshell", brand: "Victoria Secret", notes: "fruity,sweet,fresh,citrus,floral,tropical,white floral" },
    { name: "L'Eau d'Issey Pour Homme", brand: "Issey Miyake", notes: "floral,sweet,violet,powdery,vanilla,patchouli,woody,fresh,warm spicy" },
    { name: "Lacoste", brand: "Lacoste", notes: "woody,citrus,aromatic,yellow floral,tuberose,white floral,fresh spicy,leather,sweet,animalic" },
    { name: "Jo malone Velvate rose and Oud", brand: "Jo Malone London", notes: "rose,oud,sweet,floral,warm spicy,lactonic" },
    { name: "Paco Rabanne Invictus", brand: "Paco Rabanne", notes: "citrus,marine,aromatic,fresh spicy,woody,amber,salty,white floral,aquatic,camphor" },
    { name: "mystic sandal", brand: "", notes: "Floral,Mystical,Red Sandal,Sandalwood,Patchauli,Musk" },
    { name: "Dyptique Tam Dao", brand: "Dyptique", notes: "woody,powdery,warm spicy,aromatic" },
    { name: "Dunhill Icon", brand: "Dunhill", notes: "aromatic,fresh spicy,citrus,woody,warm spicy,earthy,white floral,green,lavender,floral" },
    { name: "cocoa vanilla", brand: "", notes: "Vanilla notes" },
    { name: "ck one", brand: "Calvin Klein", notes: "" },
    { name: "coco channel", brand: "Channel", notes: "" },
    { name: "gucci rush", brand: "Gucci", notes: "Peach,California Gardenia,Africa Freesia Petals,Coriender,Damask Rose,Jasmin,Patchuli,Vanila,Vetiver" }
];

document.addEventListener('DOMContentLoaded', function() {
    const quizForm = document.getElementById('quiz-form');
    const questions = Array.from(quizForm.querySelectorAll('.question'));
    const progressBar = document.getElementById('progress-bar');
    const restartButton = document.getElementById('restart-button');
    const resultContainer = document.getElementById('result-container');
    const mixResult = document.getElementById('mix-result');
    const quizContainer = document.querySelector('.quiz-container');
    let currentQuestion = 0;

    function showQuestion(index) {
        questions.forEach((question, i) => {
            question.classList.toggle('active', i === index);
        });
        progressBar.style.width = ((index + 1) / questions.length) * 100 + '%';
    }

    function handleOptionClick(event) {
        if (event.target.classList.contains('option')) {
            const value = event.target.getAttribute('data-value');
            const input = document.createElement('input');
            input.type = 'hidden';
            input.name = `question${currentQuestion + 1}`;
            input.value = value;
            quizForm.appendChild(input);

            currentQuestion++;
            if (currentQuestion < questions.length) {
                showQuestion(currentQuestion);
            }
        }
    }

    function matchFragrances(answers) {
        const answerValues = Array.from(answers.values());
        const totalScores = {};

        // Initialize total scores for each fragrance
        fragrances.forEach(frag => {
            totalScores[frag.name] = 0;
        });

        // Calculate scores based on user answers
        answerValues.forEach(answer => {
            const scores = answerScores[answer];
            for (let note in scores) {
                fragrances.forEach(frag => {
                    if (frag.notes.includes(note)) {
                        totalScores[frag.name] += scores[note] * noteScores[note];
                    }
                });
            }
        });

        // Convert totalScores object to array and sort by score
        const sortedFragrances = Object.keys(totalScores).map(name => {
            return { name, score: totalScores[name] };
        }).sort((a, b) => b.score - a.score);

        return sortedFragrances.slice(0, 3).map(f => {
            return fragrances.find(frag => frag.name === f.name);
        });
    }

    function calculateMixRatios(fragrances) {
        const ratio = Math.floor(100 / fragrances.length);
        return fragrances.map(frag => ({
            name: frag.name,
            ratio: `${ratio}%`
        }));
    }

    quizForm.addEventListener('click', handleOptionClick);

    quizForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const answers = new FormData(quizForm);
        const matchedFragrances = matchFragrances(answers);
        const mixRatios = calculateMixRatios(matchedFragrances);

        let result = '';
        mixRatios.forEach(frag => {
            result += `<p>🧪 ${frag.name} ${frag.ratio}</p>`;
        });

        result += `<p>Take a Photo of this screen and show it to Bazuki Perfume Expert.</p>`;

        mixResult.innerHTML = result;
        quizContainer.classList.remove('active');
        resultContainer.classList.add('active');
    });

    restartButton.addEventListener('click', function() {
        currentQuestion = 0;
        showQuestion(currentQuestion);
        const hiddenInputs = quizForm.querySelectorAll('input[type="hidden"]');
        hiddenInputs.forEach(input => input.remove());
        quizContainer.classList.add('active');
        resultContainer.classList.remove('active');
    });

    showQuestion(currentQuestion);
    quizContainer.classList.add('active');
});
