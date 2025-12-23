# 🚀 Guide de Déploiement - Portfolio Steeve JuniX

## 📋 **Vue d'ensemble**

Ce guide vous aidera à déployer votre portfolio en ligne gratuitement avec un nom de domaine professionnel.

---

## ✅ **Prérequis (Déjà fait !)**

- ✅ Code poussé sur GitHub
- ✅ Projet Next.js fonctionnel
- ✅ Variables d'environnement identifiées

---

## 🎯 **Option Recommandée : Vercel (GRATUIT)**

### **Pourquoi Vercel ?**
- ✅ **Gratuit** pour projets personnels
- ✅ **Optimisé** pour Next.js
- ✅ **SSL automatique** (HTTPS)
- ✅ **Déploiement en 1 clic**
- ✅ **Domaine gratuit** (.vercel.app)
- ✅ **Domaine personnalisé** possible
- ✅ **Edge Functions** incluses
- ✅ **Analytics** gratuit

---

## 📝 **ÉTAPE 1 : Déployer sur Vercel (5 minutes)**

### **1.1 - Créer un compte Vercel**

1. Allez sur **https://vercel.com**
2. Cliquez sur **"Sign Up"**
3. Choisissez **"Continue with GitHub"**
4. Autorisez Vercel à accéder à votre GitHub

### **1.2 - Importer votre projet**

1. Sur le dashboard Vercel, cliquez **"Add New..."** > **"Project"**
2. Trouvez le repository **"portfolio-junix"**
3. Cliquez sur **"Import"**

### **1.3 - Configurer le projet**

Vercel détecte automatiquement Next.js, mais vérifiez :

```
Framework Preset: Next.js
Root Directory: ./
Build Command: npm run build
Output Directory: .next
Install Command: npm install
```

**⚠️ NE PAS déployer encore !** Passez à l'étape 1.4.

### **1.4 - Ajouter les variables d'environnement**

**TRÈS IMPORTANT** : Ajoutez vos clés API avant de déployer

Cliquez sur **"Environment Variables"** et ajoutez :

| Name | Value | Environnement |
|------|-------|---------------|
| `OPENAI_API_KEY` | `sk-proj-x5Wgt0c...` | Production |
| `RESEND_API_KEY` | `re_votre_cle` | Production |

**Comment obtenir la clé Resend :**
1. Allez sur https://resend.com
2. Créez un compte (gratuit)
3. Allez dans **API Keys**
4. Créez une clé
5. Copiez-collez dans Vercel

### **1.5 - Déployer !**

1. Cliquez sur **"Deploy"**
2. Attendez 1-2 minutes ⏳
3. ✅ Votre site est en ligne !

Vous obtiendrez une URL comme :
```
https://portfolio-junix-xxxxx.vercel.app
```

---

## 🌐 **ÉTAPE 2 : Obtenir un nom de domaine professionnel**

### **Option A : Domaine gratuit Vercel (.vercel.app)**

Vous avez déjà un domaine automatique :
```
https://portfolio-junix.vercel.app
```

Pour le personnaliser :
1. Allez dans **Settings** > **Domains**
2. Vous pouvez changer le préfixe si disponible

**Exemples de noms disponibles :**
- `steeve-junix.vercel.app`
- `junix-portfolio.vercel.app`
- `steevejunix-ai.vercel.app`

### **Option B : Domaine personnalisé payant (Recommandé pour pro)**

**Meilleurs noms de domaine pour vous :**

| Domaine | Prix/an | Fournisseur |
|---------|---------|-------------|
| `steevejunix.com` | ~12$ | Namecheap, Google Domains |
| `junix.dev` | ~15$ | Porkbun |
| `steeve-junix.me` | ~10$ | Namecheap |
| `junix.tech` | ~8$ | Porkbun |

**Comment acheter et configurer :**

1. **Acheter le domaine** (sur Namecheap par exemple)
   - Allez sur https://www.namecheap.com
   - Cherchez `steevejunix.com`
   - Achetez (~12$/an)

2. **Configurer DNS dans Vercel**
   - Dans Vercel > **Settings** > **Domains**
   - Ajoutez votre domaine : `steevejunix.com`
   - Vercel vous donnera des enregistrements DNS

3. **Configurer chez Namecheap**
   - Allez dans votre domaine > **Advanced DNS**
   - Ajoutez les enregistrements DNS de Vercel :
     ```
     Type: CNAME
     Host: www
     Value: cname.vercel-dns.com

     Type: A
     Host: @
     Value: 76.76.21.21
     ```

4. **Attendre la propagation** (5-48h, souvent ~1h)

5. ✅ Votre site sera accessible sur `steevejunix.com`

---

## 🔧 **ÉTAPE 3 : Configuration post-déploiement**

### **3.1 - Vérifier les URLs dans le code**

Mettez à jour l'URL dans `src/app/layout.tsx` :

```typescript
openGraph: {
  url: "https://steevejunix.com", // ← Changez ici
  // ...
}
```

Committez et poussez :
```bash
git add src/app/layout.tsx
git commit -m "Update domain URL"
git push
```

Vercel redéploiera automatiquement ! ✨

### **3.2 - Configurer Resend pour emails**

**Important pour le formulaire de contact :**

1. Allez sur https://resend.com/domains
2. Ajoutez votre domaine personnalisé
3. Configurez les DNS (SPF, DKIM, DMARC)
4. Modifiez dans `src/app/api/contact/route.ts` :
   ```typescript
   from: 'Portfolio <contact@steevejunix.com>', // ← Votre domaine
   ```

### **3.3 - Créer l'image Open Graph**

Pour de belles prévisualisations sur LinkedIn/Twitter :

1. Créez une image **1200x630px** avec :
   - Votre nom : "Steeve JuniX"
   - Titre : "AI Software Developer"
   - Background professionnel

2. Sauvegardez en `public/og-image.png`

3. Testez sur https://www.opengraph.xyz/

**Outils gratuits pour créer l'image :**
- Canva (templates "Open Graph")
- Figma
- Photopea (gratuit, comme Photoshop)

---

## 📱 **ÉTAPE 4 : Ajouter le lien sur vos profils**

### **LinkedIn**

1. Profil > **Modifier le profil**
2. Section **Contact** > **Site web**
3. Ajoutez : `https://steevejunix.com`
4. Vous pouvez aussi ajouter dans :
   - **À propos** : "Découvrez mon portfolio : steevejunix.com"
   - **Publications** : Créez un post pour annoncer votre portfolio

### **GitHub**

1. Profil > **Edit profile**
2. **Website** : `https://steevejunix.com`
3. Dans votre README.md :
   ```markdown
   🌐 **Portfolio**: [steevejunix.com](https://steevejunix.com)
   ```

### **CV**

Ajoutez dans la section Contact :
```
🌐 Portfolio : steevejunix.com
```

### **Email Signature**

```
---
Steeve JuniX
AI Software Developer
📧 kouakamsteve782@gmail.com
🌐 steevejunix.com
💼 linkedin.com/in/steeve-junix-044659284
```

---

## 🔄 **Mises à jour automatiques**

**Bonne nouvelle** : Chaque fois que vous faites `git push`, Vercel redéploie automatiquement !

```bash
# Faire des modifications
git add .
git commit -m "Update projects"
git push

# ✅ Vercel redéploie automatiquement en ~2 minutes
```

---

## 📊 **Activer Vercel Analytics (Gratuit)**

1. Projet Vercel > **Analytics**
2. Cliquez **"Enable"**
3. Installez le package :
   ```bash
   npm install @vercel/analytics
   ```

4. Ajoutez dans `src/app/layout.tsx` :
   ```typescript
   import { Analytics } from '@vercel/analytics/react';

   // Dans le return :
   <body>
     {children}
     <Analytics />
   </body>
   ```

5. Committez et poussez :
   ```bash
   git add .
   git commit -m "Add Vercel Analytics"
   git push
   ```

✅ Vous aurez des stats sur vos visiteurs !

---

## 🎯 **Checklist finale**

Avant de partager votre portfolio :

- [ ] ✅ Site déployé sur Vercel
- [ ] ✅ Variables d'environnement configurées
- [ ] ✅ ChatBot testé et fonctionnel
- [ ] ✅ Formulaire de contact testé (avec clé Resend)
- [ ] ✅ CV téléchargeable fonctionne
- [ ] ✅ Tous les liens externes fonctionnent
- [ ] ✅ Responsive testé sur mobile
- [ ] ✅ Image Open Graph créée
- [ ] ✅ URL mise à jour dans le code
- [ ] ✅ Lien ajouté sur LinkedIn
- [ ] ✅ Lien ajouté sur GitHub
- [ ] ✅ Analytics activé (optionnel)

---

## 💰 **Coûts estimés**

| Service | Gratuit | Payant (si besoin) |
|---------|---------|-------------------|
| **Hébergement Vercel** | ✅ Gratuit | - |
| **Domaine .vercel.app** | ✅ Gratuit | - |
| **SSL (HTTPS)** | ✅ Gratuit | - |
| **Déploiements** | ✅ Illimités | - |
| **Bandwidth** | ✅ 100GB/mois | - |
| **OpenAI API** | Payant (~$0.002/chat) | ~5-10$/mois |
| **Resend emails** | ✅ 100/jour gratuit | 20$/mois si plus |
| **Domaine personnalisé** | - | ~10-15$/an |
| **Vercel Analytics** | ✅ Gratuit | - |

**Total minimum** : **0$ + coûts API** (~5-10$/mois pour OpenAI)
**Avec domaine personnalisé** : **~12$/an** + coûts API

---

## 🆘 **Dépannage**

### **Le site ne se déploie pas**

1. Vérifiez les logs dans Vercel
2. Vérifiez que `npm run build` fonctionne localement
3. Vérifiez les variables d'environnement

### **Le ChatBot ne fonctionne pas**

- Vérifiez que `OPENAI_API_KEY` est bien configurée dans Vercel
- Vérifiez dans les logs Vercel s'il y a des erreurs

### **Le formulaire ne fonctionne pas**

- Vérifiez que `RESEND_API_KEY` est configurée
- Vérifiez que vous avez des crédits Resend restants

### **Le domaine personnalisé ne fonctionne pas**

- Attendez 24-48h pour la propagation DNS
- Vérifiez les enregistrements DNS chez votre fournisseur
- Utilisez https://dnschecker.org pour vérifier

---

## 📞 **Support**

- **Vercel** : https://vercel.com/support
- **Resend** : https://resend.com/docs
- **Documentation Next.js** : https://nextjs.org/docs

---

## 🎉 **Félicitations !**

Une fois déployé, votre portfolio sera :
- ✅ Accessible 24/7 depuis n'importe où
- ✅ Rapide (déployé sur CDN global)
- ✅ Sécurisé (HTTPS automatique)
- ✅ Professionnel avec votre domaine
- ✅ Prêt à impressionner recruteurs et clients !

**Partagez-le partout** : LinkedIn, GitHub, CV, emails, carte de visite ! 🚀

---

**Créé par Claude Code** ❤️
