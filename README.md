# Photo-site

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
