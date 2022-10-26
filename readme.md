
# Démarche à suivre pour le déploiement en local ou en ligne

## Création de l'application Next.JS et déploiement

### Depuis un template
Il est possible de créer et déployer le projet en quelques clics depuis le site Netlify. Celui-ci propose la création d'un nouveau projet depuis un template, que l'on aura juste à ajouter sur notre plateforme d'hébergement de Git, et le récupérer  ensuite pour commencer le développement. Le projet est alors directement déployé.

### Manuellement
Cependant, il est aussi possible de partir de zéro. En créant tout d'abord le projet en local, puis en le commitant sur notre plateforme. Il faut ensuite l'ajouter sur l'hébergeur Netlify en se connectant avec notre plateforme d'hébergement de Git, puis en choisissant le projet à déployer.

#### Installation automatique
Afin de créer le projet de base, on peut utiliser la ligne de commande suivante :

```bash
npx create-next-app@latest
```
#### Installation manuelle
Ou bien en initialisant un projet vide, puis en installant les dépendances :
```bash
npm install next react react-dom
```
Puis en ajoutant le script suivant dans le fichier *package.json*
```json
{
  "scripts": {
    "dev": "next",
    "build": "next build",
    "start": "next start",
    "export": "npm run build && next export"
  }
}
```
---
### Déploiement
Le déploiement en ligne se fera automatiquement à chaque commit sur la branche master (Si celle-ci a été choisie).

Il est aussi possible de déployer le projet localement en exécutant la commande suivante :
```bash
npm run dev
```