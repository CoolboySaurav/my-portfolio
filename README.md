# Developer Portfolio

### My personal portfolio website built with Next.js, Tailwind CSS, and EmailJS.

[![Netlify Status](https://api.netlify.com/api/v1/badges/7b3b3b3b-1b1b-4b1b-8b1b-7b1b7b1b7b1b/deploy-status)](https://app.netlify.com/sites/saurav-mestry/deploys)

---

# Demo :movie_camera:

![](./public/image/screen.png)

---

## Table of Contents :scroll:

- [Sections](#sections-bookmark)
- [Demo](#demo-movie_camera)
- [Installation](#installation-arrow_down)
- [Getting Started](#getting-started-dart)
- [Usage](#usage-joystick)
- [Packages Used](#packages-used-package)

---

# Sections :bookmark:

- HERO SECTION
- ABOUT ME
- EXPERIENCE
- SKILLS
- PROJECTS
- EDUCATION
- BLOG
- CONTACTS

---

# Installation :arrow_down:

### You will need to download Git and Node to run this project

- [Git](https://git-scm.com/downloads)
- [Node](https://nodejs.org/en/download/)

#### Make sure you have the latest version of both Git and Node on your computer.

```
node --version
git --version
```

## <br />

# Getting Started :dart:

### Fork and Clone the repo

To Fork the repo click on the fork button at the top right of the page. Once the repo is forked open your terminal and perform the following commands

```
git clone https://github.com/CoolboySaurav/developer-portfolio.git

cd developer-portfolio
```

### Install packages from the root directory

```bash
npm install
# or
yarn install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

# Usage :joystick:

Goto [emailjs.com](https://www.emailjs.com/) and create a new account for the mail sending. In free trial you will get 200 mail per month. After setup `emailjs` account, Please create a new `.env` file from `.env.example` file.

Eg:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID =
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID =
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY =
```

### Then, Customize data in the `utils/data` [folder](https://github.com/CoolboySaurav/developer-portfolio/tree/main/utils/data).

Eg:

```javascript
export const personalData = {
  name: "Saurav Mestry",
  profile: "/profile.png",
  designation: "Graduate Student",
  description: "My name is Saurav Mestry....",
  email: "abcd@gmail.com",
  phone: "+1234567890",
  address: "Phoenix, AZ",
  github: "https://github.com/CoolboySaurav",
  facebook: "https://www.facebook.com/",
  linkedIn: "https://www.linkedin.com/in/saurav-mestry",
  twitter: "https://twitter.com/elon-musk",
  stackOverflow: "https://stackoverflow.com/",
  leetcode: "https://leetcode.com/",
  devUsername: "MasterPanda",
  resume: "...",
};
```

---

---

# Packages Used :package:

| Used Package List  |
| :----------------: |
|        next        |
|  @emailjs/browser  |
|    lottie-react    |
| react-fast-marquee |
|    react-icons     |
|   react-toastify   |
|        sass        |
|    tailwindcss     |

---
