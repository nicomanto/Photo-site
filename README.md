# Photo-site

[![Website](https://img.shields.io/website?down_color=red&down_message=down&up_color=green&up_message=up&url=https%3A%2F%2Fphoto-site-nicomanto.vercel.app%2F)](https://shields.io/)

## Introduction
This site represents a personal site for photography model.

[Photo-site](https://photo-site-nicomanto.vercel.app/)

## Technology
- [TypeScript](https://www.typescriptlang.org/)
- [Next.js](https://nextjs.org/)
- [Node.js](https://nodejs.org/)
- [ESLint](https://eslint.org/) (linter tool)
- [Prettier](https://prettier.io/) (code formatter)
- [Cloudinary](https://cloudinary.com/) (for image hosting)
- [Nodemailer](https://nodemailer.com/about/) (for sending email)
- [Bootstrap](https://getbootstrap.com/) (for style of website)
- [Vercel](https://vercel.com/) (for deploy website)
- [i18next](https://www.i18next.com/) (in order to detect language and change language)
- [reCAPTCHA](https://www.google.com/recaptcha/about/)
- [Maps JavaScript API](https://developers.google.com/maps/documentation/javascript/overview)

## Folders structure
- **components:** components that support the render of pages
- **data:** static data for pages in json format
- **i18n:** translation part with i18n
- **interfaces:** TypeScript interfaces
- **pages:** pages of the site
- **public:** contains the favicon
- **service:** external services that site used via API
- **styles:** CSS of the site


## Usage

### Clone Repository

```
git clone https://github.com/nicomanto/Photo-site.git
```

### Installation
```
npm install or yarn install
```

### Run local website
⚠️ **Before run this command you need to configure environment variables with credentials of email used by _Nodemailer_ and account credentials of _Cloudinary_**
```
npm run dev
```



## Deploy to Vercel
### Installation Vercel
```
npm i -g vercel
```

### Create production deployment
⚠️ **Before run this command you need to configure environment variables with credentials of email used by _Nodemailer_ and account credentials of _Cloudinary_ in _Vercel environment variables_**
```
vercel --prod
```
