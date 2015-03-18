var en = document.getElementById("en");
var fr = document.getElementById("fr");

var about = document.querySelector("a[href='#about']");
var works = document.querySelector("a[href='#works']");
var skills = document.querySelector("a[href='#skills']");
var examplesBar = document.querySelector("a[href='#examples']");
var intro = document.querySelector(".slider .col-lg-6 h3");
var aboutIntro = document.querySelector("#about h3");
var aboutText = document.querySelector("#about p");

var educationIntro = document.querySelector("#education h3");
var educationBac = document.querySelector("#education .container .row div:nth-child(2)");
var educationUniver = document.querySelector("#education .container .row div:nth-child(4)");
var educationBacYear = document.querySelector("#education .container .row div:nth-child(3)");
var educationUniverYear = document.querySelector("#education .container .row div:nth-child(5)");
var educationComp = document.querySelector("#education .container .row div:nth-child(6)");
var educationCompYear = document.querySelector("#education .container .row div:nth-child(7)");

var worksIntro = document.querySelector("#works h3");
var worksPromo = document.querySelector("#works .container .row div:nth-child(2)");
var worksPromoYear = document.querySelector("#works .container .row div:nth-child(3)");
var worksEpices = document.querySelector("#works .container .row div:nth-child(4)");
var worksEpiceYear = document.querySelector("#works .container .row div:nth-child(5)");
var worksItalki = document.querySelector("#works .container .row div:nth-child(6)");
var worksItalkiYear = document.querySelector("#works .container .row div:nth-child(7)");

var skillsIntro = document.querySelector("#skills h3");
var languages = document.querySelector(".languages h3");
var arabic = document.querySelector(".languages div:nth-child(2) h4");
var french = document.querySelector(".languages div:nth-child(3) h4");
var english = document.querySelector(".languages div:nth-child(4) h4");
var spanish = document.querySelector(".languages div:nth-child(5) h4");
var chinese = document.querySelector(".languages div:nth-child(6) h4");

var examples = document.querySelector("#examples h3");
en.onclick = function () {
    examplesBar.innerHTML = "EXAMPLES"
    about.innerHTML = "ABOUT";
    works.innerHTML = "WORKS";
    skills.innerHTML = "SKILLS";
    intro.innerHTML = "Web Developer & Arabic Tutor for foreigns | elhirar.youssef@gmail.com";
    aboutIntro.innerHTML = "ABOUT";
    aboutText.innerHTML = "My name is Youssef from Morocco. I got diploma in Development of comptuer science. My deal is to get more experiences and to have my own career. Coding makes feeling free, in that case I like comptuer science, specially the development web.Teaching is my passion, since a I was child, I started to teach myself a lot of things. In fact, I got that as a gift and I use it for teaching foreigns Arabic. I like to work alone, but it does not mean I do not like to work with the other partners. It is my goal to work with a developer team.";
    educationIntro.innerHTML = "EDUCATION";
    educationBac.innerHTML = "<p><t>BAC IN MATHEMATICS</t><br> Ibn Abbad, Marrakech<br><i>2010</i></p>";
    educationUniver.innerHTML = "<p><t>2 YEARS AT UNIVERSTIY IN MATHEMATICS</t><br> Caddy Ayyad, Semlalia in Marrakech<br><i>2 Years course</i></p>";
    educationBacYear.innerHTML = "<p> <sm>GRADUATING IN 2010</sm></p>";
    educationUniverYear.innerHTML = "<p><sm>FROM 2010 TO 2012</sm></p>";
    educationComp.innerHTML = "   <p><t>DIPLOMA IN COMPTUER SCIENCE</t><br> ISGI in Marrakech, specialized technician.<br> <i>2 Years Course</i> </p>";
    educationCompYear.innerHTML = "<p><sm>FROM 2012 TO 2014</sm> </p>";

    worksIntro.innerHTML = "WORK";
    worksPromo.innerHTML = "<p><t>Developer</t><br> training Promo Immo Marrakech <br> </p><p><more>I work as developer on Promo Immo Marrakech by using WordPress and I learned how to use SEM and SEO as well. The most important for me is working with different people (designer, sales agents). </more></p>";
    worksPromoYear.innerHTML = "<p><sm>April to June 2014</sm></p>";
    worksEpices.innerHTML = "<p> <t>Developer</t><br> AUX 100000 EPICES <br></p><p><more>I work in the back office of Prestashop for adding products and correcting the context (SEO, SEM)</more></p>";
    worksEpiceYear.innerHTML = "<p><sm>From September to January 2014</sm></p>";
    worksItalki.innerHTML = "<p><t>Tutor for teaching Arabic</t><br> Italki<br></p><p> <more>I teach the Standard Arabic, and the Moroccan Accent to foreign around the world.</more></p>";
    worksItalkiYear.innerHTML = " <p><sm>From 2012, current</sm></p>";

    skillsIntro.innerHTML = "SKILLS";
    languages.innerHTML = "LANGUAGES";
    arabic.innerHTML = "Arabic";
    french.innerHTML = "French";
    english.innerHTML = "English";
    spanish.innerHTML = "Spanish";
    chinese.innerHTML = "Mardarin Chinese";
    examples.innerHTML = "SOME EXAMPLES";
};
fr.onclick = function () {
    examplesBar.innerHTML = "EXEMPLES"
    about.innerHTML = "INFO";
    works.innerHTML = "TRAVAUX";
    skills.innerHTML = "COMPETENCES";
    intro.innerHTML = "Développeur Web et Tuteur d'enseignement d'arabe aux étrangers | elhirar.youssef@gmail.com";
    aboutIntro.innerHTML = "INFO";
    aboutText.innerHTML = "Je m'appelle Youssef du Maroc. J'ai un diplôme en développement informatique. Mon but est d'améliorer mes compétences et de gagner ma vie professionnelle. Je me sens beaucoup à l'aise avec le code, autrement je suis libre, c'est pourquoi j'ai choisi le développement, surtout le développement web.L'enseignement m'attire beaucoup l'attention; depuis mon enfance j'aime l'enseignement, et je commençais sur moi en faisant auto-formation.Là, j'ai commencé  d'enseigner les étrangers ma langue maternelle. J'aime travailler tout seul, mais cela ne veut pas dire que j'aime pas travailler en équipe";
    educationIntro.innerHTML = "EDUCATION";
    educationBac.innerHTML = "<p><t>BAC EN MATHEMATIQUES</t><br> Ibn Abbad, Marrakech<br><i>2010</i></p>";
    educationUniver.innerHTML = "<p><t>2 ANNEES A UNIVERSITE EN MATHEMATICS</t><br> Caddy Ayyad, Semlalia in Marrakech<br><i>2 années</i></p>";
    educationBacYear.innerHTML = "<p> <sm>DIPLOME EN 2010</sm></p>";
    educationUniverYear.innerHTML = "<p><sm>DE 2010 A 2012</sm></p>";
    educationComp.innerHTML = "   <p><t>DIPLOME EN DEVELOPPEMENT INFORMATIQUE</t><br> ISGI in Marrakech, technicien spécialisé.<br> <i>2 années</i> </p>";
    educationCompYear.innerHTML = "<p><sm>DE 2012 A 2014</sm> </p>";

    worksIntro.innerHTML = "TRAVAUX";
    worksPromo.innerHTML = "<p><t>Developpeur</t><br> Stage chez Promo Immo Marrakech <br> </p><p><more>J'ai travaillé dans le poste de développeur réferenceur en utilisant le système CMS WordPress. Ce que j'ai appris de ce stage c'est l'esprit de l'équipe ainsi le réferencement naturel et SEM aussi </more></p>";
    worksPromoYear.innerHTML = "<p><sm>Avril a Juin 2014</sm></p>";
    worksEpices.innerHTML = "<p> <t>Développeur</t><br> AUX 100000 EPICES <br></p><p><more>J'étais chargé de l'injection des produits sous la plateforme Prestashop, ainsi sur la traduction. De plus, le réferencement du site sur la toile</more></p>";
    worksEpiceYear.innerHTML = "<p><sm>De Septembre à Janvier 2014</sm></p>";
    worksItalki.innerHTML = "<p><t>Tuteur d'enseignement Arabe</t><br> Italki<br></p><p> <more>J'enseigne l'arabe classique, et l'accent marocain en ligne via hangout et le skype. C'est mon future projet sur lequel je travaille actuellement</more></p>";
    worksItalkiYear.innerHTML = " <p><sm>Depuis 2012</sm></p>";

    skillsIntro.innerHTML = "COMPETENCES";
    languages.innerHTML = "LANGUES";
    arabic.innerHTML = "Arabe";
    french.innerHTML = "Français";
    english.innerHTML = "Englais";
    spanish.innerHTML = "Espagnole";
    chinese.innerHTML = "Chinois Mandarin";
    examples.innerHTML = "QUELQUES EXAMPLES";
};