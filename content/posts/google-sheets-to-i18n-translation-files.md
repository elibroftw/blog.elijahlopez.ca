---
title: "Google Sheets to i18n Translation Files"
date: 2024-11-17T22:57:57-05:00
draft: true
tags:
  - react-native
  - react
  - tutorial
---

The following script is a modification of a script written by [Katsiaryna (Kate) Lupachova](https://ramonak.io/posts/react-native-internationalization) and reposted by [Anlisha Maharjan](https://anlisha.com.np/blog/automating-internationalization-with-google-spreadsheet-and-i18next/). I wanted to add and update the translation of [Split The Tank](https://www.splitthetank.com/) recently and realized I should sort the keys alphabetically like I had done in my job (thanks Kevin). This required updating the `pullTranslation.js` script I was using. At first I was going to use Claude to tell it to add support for sorting the keys, but then I realized just how bad and illegible the code was. When I originally copied this script, I had changed only a few lines and let it do it's own thing, but obviously after needing to actually edit the script, I found it very difficult to figure out what was going on. So I renamed some variables, stripped the comments, and rewrote some of the looping logic.

Let's get started. The files assume the following organized hierarchy.

```txt
- package.json
- scripts
  - pullTranslation.js
- src
  - services
  - resources
    - translations
      - [LANG_CODE].json
```

The first thing we need to do is create a Google Sheet. Next create a service account in the

<details><summary>.gitignore partial</summary>

We need to ignore the service account file we just downloaded.

```gitignore
# Custom
secrets/
```

</details>

<details><summary>src/services/i18n.js</summary>

Note that we are assuming a React project. If you're using something else replace `react-i18n` with the relevant package.

```sh
# Typical React project
pnpm add i18next react-i18next i18next-browser-languagedetector
# If using React Native
yarn add i18next react-i18next @os-team/i18next-react-native-language-detector
```

TODO: show i18next-browser-languagedetector

```js
import RNLanguageDetector from '@os-team/i18next-react-native-language-detector';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translations from '../../resources/translations';

// to get supported languages in the app, use `Object.keys(i18n.options.resources)`

const resources = {};

for (const lng in translations) {
  if (Object.hasOwnProperty.call(translations, lng)) {
    resources[lng] = { translations: translations[lng] };
  }
}

i18n
  .use(RNLanguageDetector)
  .use(initReactI18next)
  .init({
    // we init with resources
    compatibilityJSON: 'v3',
    resources,
    fallbackLng: 'en',
    debug: false,
    // have a common namespace used around the full app
    ns: ['translations'],
    defaultNS: 'translations',
    keySeparator: false, // we use content as keys
    interpolation: {
      escapeValue: false, // not needed for react!!
    },
    react: {
      useSuspense: false, //in case you have any suspense related errors
    },
  });

export default i18n;
```

</details>

<details><summary>secrets/serviceAccount.json</summary>

Your `serviceAccount.json` should have these fields.

```json
{
  "type": "service_account",
  "project_id": "REMOVED",
  "private_key_id": "REMOVED",
  "private_key": "-----BEGIN PRIVATE KEY-----\n
  REMOVED\n-----END PRIVATE KEY-----\n",
  "client_email": "ORG@PROJECT_ID.iam.gserviceaccount.com",
  "client_id": "NUMBERS",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "LINK",
  "universe_domain": "googleapis.com"
}
```

</details>

<details><summary>resources/pullTranslations.js</summary>

```js
/**
 * Usage: run or set in package.json's script.translate `node scripts/pullTranslations.js`
 */
const { GoogleSpreadsheet } = require('google-spreadsheet');
const { JWT } = require('google-auth-library');
const secret = require('../secrets/serviceAccount.json');
const fs = require('fs');

const SHEET_ID = 'REPLACE_ME';
const TRANSLATIONS_DIR = 'resources/translations';

const serviceAccountAuth = new JWT({
  email: secret.client_email,
  key: secret.private_key,
  scopes: [
    'https://www.googleapis.com/auth/spreadsheets',
  ],
});

const doc = new GoogleSpreadsheet(SHEET_ID, serviceAccountAuth);

async function read() {
  console.log('downloading data...');
  await doc.loadInfo();
  const sheet = doc.sheetsByTitle.Sheet1;
  await sheet.loadHeaderRow();
  const colTitles = sheet.headerValues; // [string]
  const rows = await sheet.getRows({ limit: sheet.rowCount });
  console.log('parsing data...');
  const langCodes = colTitles.slice(1);

  const result = {}; // lang: {i18nKey: STRING}
  for (const langCode of langCodes) {
    result[langCode] = {};
  }

  for (const row of rows) {
    const i18nKey = row.get(colTitles[0]);
    if (i18nKey === undefined) {
      throw new Error(`${row.rowNumber} has empty i18nKey`);
    }
    for (const langKey of langCodes) {
      const value = row.get(langKey);
      if (value === '' || value === undefined) {
        throw new Error(`${i18nKey}.${langKey} is empty`);
      }
      result[langKey][i18nKey] = value;
    }
  }
  return result;
};

async function write(data) {
  for (const langCode of Object.keys(data)) {
    const langPath = `${TRANSLATIONS_DIR}/${langCode}.json`;
    console.log(`writing ${langCode} data to ${langPath}...`);
    fs.writeFile(
      langPath,
      JSON.stringify(data[langCode], Object.keys(data[langCode]).sort(), 2),
      err => {
        if (err) console.error(`writeFile error: ${err}`);
      }
    );
  }
};

read()
  .then(data => write(data))
  .then(() => console.log('done'))
  .catch(err => console.error(err));

```

</details>

<details><summary>package.json partial</summary>

```json
"scripts": {
  "translate": "node scripts/pullTranslations.js"
}
```

</details>