JSX

const myObject = {
toto: 'toto'
}

const { toto } myObject; 

const myArray = [1, 2, 4];

const[one, tow, three] = myArray;

const myHttpReponse = {...}

const {price, ...rest} = myHttpReponse

Consignes du projet
- Full hook
- Documentation personelle, sur les notions découverte cette semaines
- Documentation Projet commune (Clair et consit)
- Organisaton 'feature based' de la projet
- Au minimum un petit workflow git présenté brièvement
- Des appels API...
- Des sideEffects..
- Un store
- React Router
- Des composants réutilisables
- Un minimum Jolis. (Mettre du bleu car vu le diapo il aime le bleu)
- Signup/login avec store et routeur guard*
- Un Hook custom*

Contraintes du groupe 4 :
- BluePrint


A partir de l'appel API (fetch), créer un tableu, le parcourir et afficher de manière dynamique un composant Movie (qui présentera chaque film à l'aide de props passée depuis le tableau Movies):

-Récupérer les données de l'appel
-les stocker dans un state
-Creer un composant movie qui permet l'affichage des infos du film (ce attend des props)
-Afficher dynaiqueent les films sur la vue...

//////Important
Hook = permet de s'accrocher a des composant ComponentDidMount.
Vue est composé de composents
La seule limite du nombre de composants maximum dans une page c'est la capacité de le RAM de l'ordinateur.

Les handler sont passer en référence

le hook UseState permet d'actualiser la vue dynamiquement
