[1mdiff --git a/backend/app.js b/backend/app.js[m
[1mindex a59fe0c..efba9db 100755[m
[1m--- a/backend/app.js[m
[1m+++ b/backend/app.js[m
[36m@@ -13,7 +13,7 @@[m [mimport { authorize } from './utils/middlewares.js';[m
 const app = express();[m
 [m
 // Configure CORS to allow requests from both production and development URLs[m
[31m-const allowedOrigins = [process.env.FRONTEND_URL, 'http://localhost:3000'];[m
[32m+[m[32mconst allowedOrigins = [process.env.FRONTEND_URL, 'http://localhost:3000', 'https://czestochowapte.pl'];[m
 app.use(cors({[m
     origin: (origin, callback) => {[m
         if (!origin || allowedOrigins.includes(origin)) {[m
[1mdiff --git a/backend/package-lock.json b/backend/package-lock.json[m
[1mindex ca9f6ed..3660807 100755[m
[1m--- a/backend/package-lock.json[m
[1m+++ b/backend/package-lock.json[m
[36m@@ -349,6 +349,7 @@[m
       "version": "16.4.5",[m
       "resolved": "https://registry.npmjs.org/dotenv/-/dotenv-16.4.5.tgz",[m
       "integrity": "sha512-ZmdL2rui+eB2YwhsWzjInR8LldtZHGDoQ1ugH85ppHKwpUHL7j7rN0Ti9NCnGiQbhaZ11FpR+7ao1dNsmduNUg==",[m
[32m+[m[32m      "license": "BSD-2-Clause",[m
       "engines": {[m
         "node": ">=12"[m
       },[m
[1mdiff --git a/client/..env.swp b/client/..env.swp[m
[1mdeleted file mode 100644[m
[1mindex 968b3b2..0000000[m
Binary files a/client/..env.swp and /dev/null differ
[1mdiff --git a/client/package-lock.json b/client/package-lock.json[m
[1mindex bab9431..fcad1de 100755[m
[1m--- a/client/package-lock.json[m
[1m+++ b/client/package-lock.json[m
[36m@@ -45,6 +45,7 @@[m
         "slugify": "^1.6.6"[m
       },[m
       "devDependencies": {[m
[32m+[m[32m        "@next/swc-linux-x64-gnu": "^15.0.3",[m
         "@types/cookie": "^0.6.0",[m
         "@types/formidable": "^3.4.5",[m
         "@types/node": "^22.9.0",[m
[36m@@ -52,10 +53,10 @@[m
         "@types/react-dom": "^18.3.1",[m
         "eslint": "^8",[m
         "eslint-config-next": "14.2.5",[m
[31m-        "react-email": "3.0.1",[m
[32m+[m[32m        "react-email": "^3.0.2",[m
         "tailwindcss": "^3.4.1",[m
         "typescript": "^5.6.3",[m
[31m-        "webpack": "^5.95.0",[m
[32m+[m[32m        "webpack": "^5.96.1",[m
         "webpack-cli": "^5.1.4"[m
       }[m
     },[m
[36m@@ -93,12 +94,13 @@[m
       }[m
     },[m
     "node_modules/@babel/code-frame": {[m
[31m-      "version": "7.25.9",[m
[31m-      "resolved": "https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.25.9.tgz",[m
[31m-      "integrity": "sha512-z88xeGxnzehn2sqZ8UdGQEvYErF1odv2CftxInpSYJt6uHuPe9YjahKZITGs3l5LeI9d2ROG+obuDAoSlqbNfQ==",[m
[32m+[m[32m      "version": "7.26.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.26.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-RJlIHRueQgwWitWgF8OdFYGZX328Ax5BCemNGlqHfplnRT9ESi8JkFlvaVYbS+UubVY6dpv87Fs2u5M29iNFVQ==",[m
       "license": "MIT",[m
       "dependencies": {[m
[31m-        "@babel/highlight": "^7.25.9",[m
[32m+[m[32m        "@babel/helper-validator-identifier": "^7.25.9",[m
[32m+[m[32m        "js-tokens": "^4.0.0",[m
         "picocolors": "^1.0.0"[m
       },[m
       "engines": {[m
[36m@@ -106,9 +108,9 @@[m
       }[m
     },[m
     "node_modules/@babel/compat-data": {[m
[31m-      "version": "7.25.9",[m
[31m-      "resolved": "https://registry.npmjs.org/@babel/compat-data/-/compat-data-7.25.9.tgz",[m
[31m-      "integrity": "sha512-yD+hEuJ/+wAJ4Ox2/rpNv5HIuPG82x3ZlQvYVn8iYCprdxzE7P1udpGF1jyjQVBU4dgznN+k2h103vxZ7NdPyw==",[m
[32m+[m[32m      "version": "7.26.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@babel/compat-data/-/compat-data-7.26.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-Z0WgzSEa+aUcdiJuCIqgujCshpMWgUpgOxXotrYPSA53hA3qopNaqcJpyr0hVb1FeWdnqFA35/fUtXgBK8srQg==",[m
       "dev": true,[m
       "license": "MIT",[m
       "engines": {[m
[36m@@ -164,12 +166,13 @@[m
       }[m
     },[m
     "node_modules/@babel/generator": {[m
[31m-      "version": "7.25.9",[m
[31m-      "resolved": "https://registry.npmjs.org/@babel/generator/-/generator-7.25.9.tgz",[m
[31m-      "integrity": "sha512-omlUGkr5EaoIJrhLf9CJ0TvjBRpd9+AXRG//0GEQ9THSo8wPiTlbpy1/Ow8ZTrbXpjd9FHXfbFQx32I04ht0FA==",[m
[32m+[m[32m      "version": "7.26.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@babel/generator/-/generator-7.26.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-zevQbhbau95nkoxSq3f/DC/SC+EEOUZd3DYqfSkMhY2/wfSeaHV1Ew4vk8e+x8lja31IbyuUa2uQ3JONqKbysw==",[m
       "license": "MIT",[m
       "dependencies": {[m
[31m-        "@babel/types": "^7.25.9",[m
[32m+[m[32m        "@babel/parser": "^7.26.2",[m
[32m+[m[32m        "@babel/types": "^7.26.0",[m
         "@jridgewell/gen-mapping": "^0.3.5",[m
         "@jridgewell/trace-mapping": "^0.3.25",[m
         "jsesc": "^3.0.2"[m
[36m@@ -236,14 +239,13 @@[m
       }[m
     },[m
     "node_modules/@babel/helper-module-transforms": {[m
[31m-      "version": "7.25.9",[m
[31m-      "resolved": "https://registry.npmjs.org/@babel/helper-module-transforms/-/helper-module-transforms-7.25.9.tgz",[m
[31m-      "integrity": "sha512-TvLZY/F3+GvdRYFZFyxMvnsKi+4oJdgZzU3BoGN9Uc2d9C6zfNwJcKKhjqLAhK8i46mv93jsO74fDh3ih6rpHA==",[m
[32m+[m[32m      "version": "7.26.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@babel/helper-module-transforms/-/helper-module-transforms-7.26.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-xO+xu6B5K2czEnQye6BHA7DolFFmS3LB7stHZFaOLb1pAwO1HWLS8fXA+eh0A2yIvltPVmx3eNNDBJA2SLHXFw==",[m
       "dev": true,[m
       "license": "MIT",[m
       "dependencies": {[m
         "@babel/helper-module-imports": "^7.25.9",[m
[31m-        "@babel/helper-simple-access": "^7.25.9",[m
         "@babel/helper-validator-identifier": "^7.25.9",[m
         "@babel/traverse": "^7.25.9"[m
       },[m
[36m@@ -254,20 +256,6 @@[m
         "@babel/core": "^7.0.0"[m
       }[m
     },[m
[31m-    "node_modules/@babel/helper-simple-access": {[m
[31m-      "version": "7.25.9",[m
[31m-      "resolved": "https://registry.npmjs.org/@babel/helper-simple-access/-/helper-simple-access-7.25.9.tgz",[m
[31m-      "integrity": "sha512-c6WHXuiaRsJTyHYLJV75t9IqsmTbItYfdj99PnzYGQZkYKvan5/2jKJ7gu31J3/BJ/A18grImSPModuyG/Eo0Q==",[m
[31m-      "dev": true,[m
[31m-      "license": "MIT",[m
[31m-      "dependencies": {[m
[31m-        "@babel/traverse": "^7.25.9",[m
[31m-        "@babel/types": "^7.25.9"[m
[31m-      },[m
[31m-      "engines": {[m
[31m-        "node": ">=6.9.0"[m
[31m-      }[m
[31m-    },[m
     "node_modules/@babel/helper-string-parser": {[m
       "version": "7.25.9",[m
       "resolved": "https://registry.npmjs.org/@babel/helper-string-parser/-/helper-string-parser-7.25.9.tgz",[m
[36m@@ -297,41 +285,26 @@[m
       }[m
     },[m
     "node_modules/@babel/helpers": {[m
[31m-      "version": "7.25.9",[m
[31m-      "resolved": "https://registry.npmjs.org/@babel/helpers/-/helpers-7.25.9.tgz",[m
[31m-      "integrity": "sha512-oKWp3+usOJSzDZOucZUAMayhPz/xVjzymyDzUN8dk0Wd3RWMlGLXi07UCQ/CgQVb8LvXx3XBajJH4XGgkt7H7g==",[m
[32m+[m[32m      "version": "7.26.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@babel/helpers/-/helpers-7.26.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-tbhNuIxNcVb21pInl3ZSjksLCvgdZy9KwJ8brv993QtIVKJBBkYXz4q4ZbAv31GdnC+R90np23L5FbEBlthAEw==",[m
       "dev": true,[m
       "license": "MIT",[m
       "dependencies": {[m
         "@babel/template": "^7.25.9",[m
[31m-        "@babel/types": "^7.25.9"[m
[31m-      },[m
[31m-      "engines": {[m
[31m-        "node": ">=6.9.0"[m
[31m-      }[m
[31m-    },[m
[31m-    "node_modules/@babel/highlight": {[m
[31m-      "version": "7.25.9",[m
[31m-      "resolved": "https://registry.npmjs.org/@babel/highlight/-/highlight-7.25.9.tgz",[m
[31m-      "integrity": "sha512-llL88JShoCsth8fF8R4SJnIn+WLvR6ccFxu1H3FlMhDontdcmZWf2HgIZ7AIqV3Xcck1idlohrN4EUBQz6klbw==",[m
[31m-      "license": "MIT",[m
[31m-      "dependencies": {[m
[31m-        "@babel/helper-validator-identifier": "^7.25.9",[m
[31m-        "chalk": "^2.4.2",[m
[31m-        "js-tokens": "^4.0.0",[m
[31m-        "picocolors": "^1.0.0"[m
[32m+[m[32m        "@babel/types": "^7.26.0"[m
       },[m
       "engines": {[m
         "node": ">=6.9.0"[m
       }[m
     },[m
     "node_modules/@babel/parser": {[m
[31m-      "version": "7.25.9",[m
[31m-      "resolved": "https://registry.npmjs.org/@babel/parser/-/parser-7.25.9.tgz",[m
[31m-      "integrity": "sha512-aI3jjAAO1fh7vY/pBGsn1i9LDbRP43+asrRlkPuTXW5yHXtd1NgTEMudbBoDDxrf1daEEfPJqR+JBMakzrR4Dg==",[m
[32m+[m[32m      "version": "7.26.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@babel/parser/-/parser-7.26.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-DWMCZH9WA4Maitz2q21SRKHo9QXZxkDsbNZoVD62gusNtNBBqDg9i7uOhASfTfIGNzW+O+r7+jAlM8dwphcJKQ==",[m
       "license": "MIT",[m
       "dependencies": {[m
[31m-        "@babel/types": "^7.25.9"[m
[32m+[m[32m        "@babel/types": "^7.26.0"[m
       },[m
       "bin": {[m
         "parser": "bin/babel-parser.js"[m
[36m@@ -341,9 +314,9 @@[m
       }[m
     },[m
     "node_modules/@babel/runtime": {[m
[31m-      "version": "7.25.9",[m
[31m-      "resolved": "https://registry.npmjs.org/@babel/runtime/-/runtime-7.25.9.tgz",[m
[31m-      "integrity": "sha512-4zpTHZ9Cm6L9L+uIqghQX8ZXg8HKFcjYO3qHoO8zTmRm6HQUJ8SSJ+KRvbMBZn0EGVlT4DRYeQ/6hjlyXBh+Kg==",[m
[32m+[m[32m      "version": "7.26.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@babel/runtime/-/runtime-7.26.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-FDSOghenHTiToteC/QRlv2q3DhPZ/oOXTBoirfWNx1Cx3TMVcGWQtMMmQcSvb/JjpNeGzx8Pq/b4fKEJuWm1sw==",[m
       "license": "MIT",[m
       "dependencies": {[m
         "regenerator-runtime": "^0.14.0"[m
[36m@@ -385,9 +358,9 @@[m
       }[m
     },[m
     "node_modules/@babel/types": {[m
[31m-      "version": "7.25.9",[m
[31m-      "resolved": "https://registry.npmjs.org/@babel/types/-/types-7.25.9.tgz",[m
[31m-      "integrity": "sha512-OwS2CM5KocvQ/k7dFJa8i5bNGJP0hXWfVCfDkqRFP1IreH1JDC7wG6eCYCi0+McbfT8OR/kNqsI0UU0xP9H6PQ==",[m
[32m+[m[32m      "version": "7.26.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@babel/types/-/types-7.26.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-Z/yiTPj+lDVnF7lWeKCIJzaIkI0vYO87dMpZ4bg4TDrFe4XXLFWL1TbXU27gBP3QccxV9mZICCrnjnYlJjXHOA==",[m
       "license": "MIT",[m
       "dependencies": {[m
         "@babel/helper-string-parser": "^7.25.9",[m
[36m@@ -955,25 +928,28 @@[m
       }[m
     },[m
     "node_modules/@eslint-community/eslint-utils": {[m
[31m-      "version": "4.4.0",[m
[31m-      "resolved": "https://registry.npmjs.org/@eslint-community/eslint-utils/-/eslint-utils-4.4.0.tgz",[m
[31m-      "integrity": "sha512-1/sA4dwrzBAyeUoQ6oxahHKmrZvsnLCg4RfxW3ZFGGmQkSNQPFNLV9CUEFQP1x9EYXHTo5p6xdhZM1Ne9p/AfA==",[m
[32m+[m[32m      "version": "4.4.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@eslint-community/eslint-utils/-/eslint-utils-4.4.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-s3O3waFUrMV8P/XaF/+ZTp1X9XBZW1a4B97ZnjQF2KYWaFD2A8KyFBsrsfSjEmjn3RGWAIuvlneuZm3CUK3jbA==",[m
       "dev": true,[m
       "license": "MIT",[m
       "dependencies": {[m
[31m-        "eslint-visitor-keys": "^3.3.0"[m
[32m+[m[32m        "eslint-visitor-keys": "^3.4.3"[m
       },[m
       "engines": {[m
         "node": "^12.22.0 || ^14.17.0 || >=16.0.0"[m
       },[m
[32m+[m[32m      "funding": {[m
[32m+[m[32m        "url": "https://opencollective.com/eslint"[m
[32m+[m[32m      },[m
       "peerDependencies": {[m
         "eslint": "^6.0.0 || ^7.0.0 || >=8.0.0"[m
       }[m
     },[m
     "node_modules/@eslint-community/regexpp": {[m
[31m-      "version": "4.11.1",[m
[31m-      "resolved": "https://registry.npmjs.org/@eslint-community/regexpp/-/regexpp-4.11.1.tgz",[m
[31m-      "integrity": "sha512-m4DVN9ZqskZoLU5GlWZadwDnYo3vAEydiUayB9widCl9ffWx2IvPnp6n3on5rJmziJSw9Bv+Z3ChDVdMwXCY8Q==",[m
[32m+[m[32m      "version": "4.12.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@eslint-community/regexpp/-/regexpp-4.12.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-CCZCDJuduB9OUkFkY2IgppNZMi2lBQgD2qzwXkEia16cge2pijY/aXi96CJMquDMn3nJdlPV1A5KrJEXwfLNzQ==",[m
       "dev": true,[m
       "license": "MIT",[m
       "engines": {[m
[36m@@ -1031,53 +1007,53 @@[m
       }[m
     },[m
     "node_modules/@formatjs/ecma402-abstract": {[m
[31m-      "version": "2.2.0",[m
[31m-      "resolved": "https://registry.npmjs.org/@formatjs/ecma402-abstract/-/ecma402-abstract-2.2.0.tgz",[m
[31m-      "integrity": "sha512-IpM+ev1E4QLtstniOE29W1rqH9eTdx5hQdNL8pzrflMj/gogfaoONZqL83LUeQScHAvyMbpqP5C9MzNf+fFwhQ==",[m
[32m+[m[32m      "version": "2.2.3",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@formatjs/ecma402-abstract/-/ecma402-abstract-2.2.3.tgz",[m
[32m+[m[32m      "integrity": "sha512-aElGmleuReGnk2wtYOzYFmNWYoiWWmf1pPPCYg0oiIQSJj0mjc4eUfzUXaSOJ4S8WzI/cLqnCTWjqz904FT2OQ==",[m
       "license": "MIT",[m
       "dependencies": {[m
[31m-        "@formatjs/fast-memoize": "2.2.1",[m
[31m-        "@formatjs/intl-localematcher": "0.5.5",[m
[31m-        "tslib": "^2.7.0"[m
[32m+[m[32m        "@formatjs/fast-memoize": "2.2.3",[m
[32m+[m[32m        "@formatjs/intl-localematcher": "0.5.7",[m
[32m+[m[32m        "tslib": "2"[m
       }[m
     },[m
     "node_modules/@formatjs/fast-memoize": {[m
[31m-      "version": "2.2.1",[m
[31m-      "resolved": "https://registry.npmjs.org/@formatjs/fast-memoize/-/fast-memoize-2.2.1.tgz",[m
[31m-      "integrity": "sha512-XS2RcOSyWxmUB7BUjj3mlPH0exsUzlf6QfhhijgI941WaJhVxXQ6mEWkdUFIdnKi3TuTYxRdelsgv3mjieIGIA==",[m
[32m+[m[32m      "version": "2.2.3",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@formatjs/fast-memoize/-/fast-memoize-2.2.3.tgz",[m
[32m+[m[32m      "integrity": "sha512-3jeJ+HyOfu8osl3GNSL4vVHUuWFXR03Iz9jjgI7RwjG6ysu/Ymdr0JRCPHfF5yGbTE6JCrd63EpvX1/WybYRbA==",[m
       "license": "MIT",[m
       "dependencies": {[m
[31m-        "tslib": "^2.7.0"[m
[32m+[m[32m        "tslib": "2"[m
       }[m
     },[m
     "node_modules/@formatjs/icu-messageformat-parser": {[m
[31m-      "version": "2.8.0",[m
[31m-      "resolved": "https://registry.npmjs.org/@formatjs/icu-messageformat-parser/-/icu-messageformat-parser-2.8.0.tgz",[m
[31m-      "integrity": "sha512-r2un3fmF9oJv3mOkH+wwQZ037VpqmdfahbcCZ9Lh+p6Sx+sNsonI7Zcr6jNMm1s+Si7ejQORS4Ezlh05mMPAXA==",[m
[32m+[m[32m      "version": "2.9.3",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@formatjs/icu-messageformat-parser/-/icu-messageformat-parser-2.9.3.tgz",[m
[32m+[m[32m      "integrity": "sha512-9L99QsH14XjOCIp4TmbT8wxuffJxGK8uLNO1zNhLtcZaVXvv626N0s4A2qgRCKG3dfYWx9psvGlFmvyVBa6u/w==",[m
       "license": "MIT",[m
       "dependencies": {[m
[31m-        "@formatjs/ecma402-abstract": "2.2.0",[m
[31m-        "@formatjs/icu-skeleton-parser": "1.8.4",[m
[31m-        "tslib": "^2.7.0"[m
[32m+[m[32m        "@formatjs/ecma402-abstract": "2.2.3",[m
[32m+[m[32m        "@formatjs/icu-skeleton-parser": "1.8.7",[m
[32m+[m[32m        "tslib": "2"[m
       }[m
     },[m
     "node_modules/@formatjs/icu-skeleton-parser": {[m
[31m-      "version": "1.8.4",[m
[31m-      "resolved": "https://registry.npmjs.org/@formatjs/icu-skeleton-parser/-/icu-skeleton-parser-1.8.4.tgz",[m
[31m-      "integrity": "sha512-LMQ1+Wk1QSzU4zpd5aSu7+w5oeYhupRwZnMQckLPRYhSjf2/8JWQ882BauY9NyHxs5igpuQIXZDgfkaH3PoATg==",[m
[32m+[m[32m      "version": "1.8.7",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@formatjs/icu-skeleton-parser/-/icu-skeleton-parser-1.8.7.tgz",[m
[32m+[m[32m      "integrity": "sha512-fI+6SmS2g7h3srfAKSWa5dwreU5zNEfon2uFo99OToiLF6yxGE+WikvFSbsvMAYkscucvVmTYNlWlaDPp0n5HA==",[m
       "license": "MIT",[m
       "dependencies": {[m
[31m-        "@formatjs/ecma402-abstract": "2.2.0",[m
[31m-        "tslib": "^2.7.0"[m
[32m+[m[32m        "@formatjs/ecma402-abstract": "2.2.3",[m
[32m+[m[32m        "tslib": "2"[m
       }[m
     },[m
     "node_modules/@formatjs/intl-localematcher": {[m
[31m-      "version": "0.5.5",[m
[31m-      "resolved": "https://registry.npmjs.org/@formatjs/intl-localematcher/-/intl-localematcher-0.5.5.tgz",[m
[31m-      "integrity": "sha512-t5tOGMgZ/i5+ALl2/offNqAQq/lfUnKLEw0mXQI4N4bqpedhrSE+fyKLpwnd22sK0dif6AV+ufQcTsKShB9J1g==",[m
[32m+[m[32m      "version": "0.5.7",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@formatjs/intl-localematcher/-/intl-localematcher-0.5.7.tgz",[m
[32m+[m[32m      "integrity": "sha512-GGFtfHGQVFe/niOZp24Kal5b2i36eE2bNL0xi9Sg/yd0TR8aLjcteApZdHmismP5QQax1cMnZM9yWySUUjJteA==",[m
       "license": "MIT",[m
       "dependencies": {[m
[31m-        "tslib": "^2.7.0"[m
[32m+[m[32m        "tslib": "2"[m
       }[m
     },[m
     "node_modules/@humanwhocodes/config-array": {[m
[36m@@ -1619,50 +1595,6 @@[m
         "@jridgewell/sourcemap-codec": "^1.4.14"[m
       }[m
     },[m
[31m-    "node_modules/@mapbox/node-pre-gyp": {[m
[31m-      "version": "1.0.11",[m
[31m-      "resolved": "https://registry.npmjs.org/@mapbox/node-pre-gyp/-/node-pre-gyp-1.0.11.tgz",[m
[31m-      "integrity": "sha512-Yhlar6v9WQgUp/He7BdgzOz8lqMQ8sU+jkCq7Wx8Myc5YFJLbEe7lgui/V7G1qB1DJykHSGwreceSaD60Y0PUQ==",[m
[31m-      "license": "BSD-3-Clause",[m
[31m-      "optional": true,[m
[31m-      "dependencies": {[m
[31m-        "detect-libc": "^2.0.0",[m
[31m-        "https-proxy-agent": "^5.0.0",[m
[31m-        "make-dir": "^3.1.0",[m
[31m-        "node-fetch": "^2.6.7",[m
[31m-        "nopt": "^5.0.0",[m
[31m-        "npmlog": "^5.0.1",[m
[31m-        "rimraf": "^3.0.2",[m
[31m-        "semver": "^7.3.5",[m
[31m-        "tar": "^6.1.11"[m
[31m-      },[m
[31m-      "bin": {[m
[31m-        "node-pre-gyp": "bin/node-pre-gyp"[m
[31m-      }[m
[31m-    },[m
[31m-    "node_modules/@mapbox/node-pre-gyp/node_modules/abbrev": {[m
[31m-      "version": "1.1.1",[m
[31m-      "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-1.1.1.tgz",[m
[31m-      "integrity": "sha512-nne9/IiQ/hzIhY6pdDnbBtz7DjPTKrY00P/zvPSm5pOFkl6xuGrGnXn/VtTNNfNtAfZ9/1RtehkszU9qcTii0Q==",[m
[31m-      "license": "ISC",[m
[31m-      "optional": true[m
[31m-    },[m
[31m-    "node_modules/@mapbox/node-pre-gyp/node_modules/nopt": {[m
[31m-      "version": "5.0.0",[m
[31m-      "resolved": "https://registry.npmjs.org/nopt/-/nopt-5.0.0.tgz",[m
[31m-      "integrity": "sha512-Tbj67rffqceeLpcRXrT7vKAN8CwfPeIBgM7E6iBkmKLV7bEMwpGgYLGv0jACUsECaa/vuxP0IjEont6umdMgtQ==",[m
[31m-      "license": "ISC",[m
[31m-      "optional": true,[m
[31m-      "dependencies": {[m
[31m-        "abbrev": "1"[m
[31m-      },[m
[31m-      "bin": {[m
[31m-        "nopt": "bin/nopt.js"[m
[31m-      },[m
[31m-      "engines": {[m
[31m-        "node": ">=6"[m
[31m-      }[m
[31m-    },[m
     "node_modules/@mui/core-downloads-tracker": {[m
       "version": "5.16.7",[m
       "resolved": "https://registry.npmjs.org/@mui/core-downloads-tracker/-/core-downloads-tracker-5.16.7.tgz",[m
[36m@@ -1844,14 +1776,14 @@[m
       }[m
     },[m
     "node_modules/@mui/private-theming": {[m
[31m-      "version": "6.1.5",[m
[31m-      "resolved": "https://registry.npmjs.org/@mui/private-theming/-/private-theming-6.1.5.tgz",[m
[31m-      "integrity": "sha512-FJqweqEXk0KdtTho9C2h6JEKXsOT7MAVH2Uj3N5oIqs6YKxnwBn2/zL2QuYYEtj5OJ87rEUnCfFic6ldClvzJw==",[m
[32m+[m[32m      "version": "6.1.6",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@mui/private-theming/-/private-theming-6.1.6.tgz",[m
[32m+[m[32m      "integrity": "sha512-ioAiFckaD/fJSnTrUMWgjl9HYBWt7ixCh7zZw7gDZ+Tae7NuprNV6QJK95EidDT7K0GetR2rU3kAeIR61Myttw==",[m
       "license": "MIT",[m
       "peer": true,[m
       "dependencies": {[m
[31m-        "@babel/runtime": "^7.25.7",[m
[31m-        "@mui/utils": "^6.1.5",[m
[32m+[m[32m        "@babel/runtime": "^7.26.0",[m
[32m+[m[32m        "@mui/utils": "^6.1.6",[m
         "prop-types": "^15.8.1"[m
       },[m
       "engines": {[m
[36m@@ -1872,14 +1804,14 @@[m
       }[m
     },[m
     "node_modules/@mui/private-theming/node_modules/@mui/utils": {[m
[31m-      "version": "6.1.5",[m
[31m-      "resolved": "https://registry.npmjs.org/@mui/utils/-/utils-6.1.5.tgz",[m
[31m-      "integrity": "sha512-vp2WfNDY+IbKUIGg+eqX1Ry4t/BilMjzp6p9xO1rfqpYjH1mj8coQxxDfKxcQLzBQkmBJjymjoGOak5VUYwXug==",[m
[32m+[m[32m      "version": "6.1.6",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@mui/utils/-/utils-6.1.6.tgz",[m
[32m+[m[32m      "integrity": "sha512-sBS6D9mJECtELASLM+18WUcXF6RH3zNxBRFeyCRg8wad6NbyNrdxLuwK+Ikvc38sTZwBzAz691HmSofLqHd9sQ==",[m
       "license": "MIT",[m
       "peer": true,[m
       "dependencies": {[m
[31m-        "@babel/runtime": "^7.25.7",[m
[31m-        "@mui/types": "^7.2.18",[m
[32m+[m[32m        "@babel/runtime": "^7.26.0",[m
[32m+[m[32m        "@mui/types": "^7.2.19",[m
         "@types/prop-types": "^15.7.13",[m
         "clsx": "^2.1.1",[m
         "prop-types": "^15.8.1",[m
[36m@@ -1903,13 +1835,13 @@[m
       }[m
     },[m
     "node_modules/@mui/styled-engine": {[m
[31m-      "version": "6.1.5",[m
[31m-      "resolved": "https://registry.npmjs.org/@mui/styled-engine/-/styled-engine-6.1.5.tgz",[m
[31m-      "integrity": "sha512-tiyWzMkHeWlOoE6AqomWvYvdml8Nv5k5T+LDwOiwHEawx8P9Lyja6ZwWPU6xljwPXYYPT2KBp1XvMly7dsK46A==",[m
[32m+[m[32m      "version": "6.1.6",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@mui/styled-engine/-/styled-engine-6.1.6.tgz",[m
[32m+[m[32m      "integrity": "sha512-I+yS1cSuSvHnZDBO7e7VHxTWpj+R7XlSZvTC4lS/OIbUNJOMMSd3UDP6V2sfwzAdmdDNBi7NGCRv2SZ6O9hGDA==",[m
       "license": "MIT",[m
       "peer": true,[m
       "dependencies": {[m
[31m-        "@babel/runtime": "^7.25.7",[m
[32m+[m[32m        "@babel/runtime": "^7.26.0",[m
         "@emotion/cache": "^11.13.1",[m
         "@emotion/serialize": "^1.3.2",[m
         "@emotion/sheet": "^1.4.0",[m
[36m@@ -1938,17 +1870,17 @@[m
       }[m
     },[m
     "node_modules/@mui/system": {[m
[31m-      "version": "6.1.5",[m
[31m-      "resolved": "https://registry.npmjs.org/@mui/system/-/system-6.1.5.tgz",[m
[31m-      "integrity": "sha512-vPM9ocQ8qquRDByTG3XF/wfYTL7IWL/20EiiKqByLDps8wOmbrDG9rVznSE3ZbcjFCFfMRMhtxvN92bwe/63SA==",[m
[32m+[m[32m      "version": "6.1.6",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@mui/system/-/system-6.1.6.tgz",[m
[32m+[m[32m      "integrity": "sha512-qOf1VUE9wK8syiB0BBCp82oNBAVPYdj4Trh+G1s+L+ImYiKlubWhhqlnvWt3xqMevR+D2h1CXzA1vhX2FvA+VQ==",[m
       "license": "MIT",[m
       "peer": true,[m
       "dependencies": {[m
[31m-        "@babel/runtime": "^7.25.7",[m
[31m-        "@mui/private-theming": "^6.1.5",[m
[31m-        "@mui/styled-engine": "^6.1.5",[m
[31m-        "@mui/types": "^7.2.18",[m
[31m-        "@mui/utils": "^6.1.5",[m
[32m+[m[32m        "@babel/runtime": "^7.26.0",[m
[32m+[m[32m        "@mui/private-theming": "^6.1.6",[m
[32m+[m[32m        "@mui/styled-engine": "^6.1.6",[m
[32m+[m[32m        "@mui/types": "^7.2.19",[m
[32m+[m[32m        "@mui/utils": "^6.1.6",[m
         "clsx": "^2.1.1",[m
         "csstype": "^3.1.3",[m
         "prop-types": "^15.8.1"[m
[36m@@ -1979,14 +1911,14 @@[m
       }[m
     },[m
     "node_modules/@mui/system/node_modules/@mui/utils": {[m
[31m-      "version": "6.1.5",[m
[31m-      "resolved": "https://registry.npmjs.org/@mui/utils/-/utils-6.1.5.tgz",[m
[31m-      "integrity": "sha512-vp2WfNDY+IbKUIGg+eqX1Ry4t/BilMjzp6p9xO1rfqpYjH1mj8coQxxDfKxcQLzBQkmBJjymjoGOak5VUYwXug==",[m
[32m+[m[32m      "version": "6.1.6",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@mui/utils/-/utils-6.1.6.tgz",[m
[32m+[m[32m      "integrity": "sha512-sBS6D9mJECtELASLM+18WUcXF6RH3zNxBRFeyCRg8wad6NbyNrdxLuwK+Ikvc38sTZwBzAz691HmSofLqHd9sQ==",[m
       "license": "MIT",[m
       "peer": true,[m
       "dependencies": {[m
[31m-        "@babel/runtime": "^7.25.7",[m
[31m-        "@mui/types": "^7.2.18",[m
[32m+[m[32m        "@babel/runtime": "^7.26.0",[m
[32m+[m[32m        "@mui/types": "^7.2.19",[m
         "@types/prop-types": "^15.7.13",[m
         "clsx": "^2.1.1",[m
         "prop-types": "^15.8.1",[m
[36m@@ -2010,9 +1942,9 @@[m
       }[m
     },[m
     "node_modules/@mui/types": {[m
[31m-      "version": "7.2.18",[m
[31m-      "resolved": "https://registry.npmjs.org/@mui/types/-/types-7.2.18.tgz",[m
[31m-      "integrity": "sha512-uvK9dWeyCJl/3ocVnTOS6nlji/Knj8/tVqVX03UVTpdmTJYu/s4jtDd9Kvv0nRGE0CUSNW1UYAci7PYypjealg==",[m
[32m+[m[32m      "version": "7.2.19",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@mui/types/-/types-7.2.19.tgz",[m
[32m+[m[32m      "integrity": "sha512-6XpZEM/Q3epK9RN8ENoXuygnqUQxE+siN/6rGRi2iwJPgBUR25mphYQ9ZI87plGh58YoZ5pp40bFvKYOCDJ3tA==",[m
       "license": "MIT",[m
       "peerDependencies": {[m
         "@types/react": "^17.0.0 || ^18.0.0 || ^19.0.0"[m
[36m@@ -2054,9 +1986,9 @@[m
       }[m
     },[m
     "node_modules/@mui/x-date-pickers": {[m
[31m-      "version": "7.21.0",[m
[31m-      "resolved": "https://registry.npmjs.org/@mui/x-date-pickers/-/x-date-pickers-7.21.0.tgz",[m
[31m-      "integrity": "sha512-WLpuTu3PvhYwd7IAJSuDWr1Zd8c5C8Cc7rpAYCaV5+tGBoEP0C2UKqClMR4F1wTiU2a7x3dzgQzkcgK72yyqDw==",[m
[32m+[m[32m      "version": "7.22.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@mui/x-date-pickers/-/x-date-pickers-7.22.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-1KHSlIlnSoY3oHm820By8X344pIdGYqPvCCvfVHrEeeIQ/pHdxDD8tjZFWkFl4Jgm9oVFK90fMcqNZAzc+WaCw==",[m
       "license": "MIT",[m
       "dependencies": {[m
         "@babel/runtime": "^7.25.7",[m
[36m@@ -2084,7 +2016,7 @@[m
         "dayjs": "^1.10.7",[m
         "luxon": "^3.0.2",[m
         "moment": "^2.29.4",[m
[31m-        "moment-hijri": "^2.1.2",[m
[32m+[m[32m        "moment-hijri": "^2.1.2 || ^3.0.0",[m
         "moment-jalaali": "^0.7.4 || ^0.8.0 || ^0.9.0 || ^0.10.0",[m
         "react": "^17.0.0 || ^18.0.0",[m
         "react-dom": "^17.0.0 || ^18.0.0"[m
[36m@@ -2142,8 +2074,7 @@[m
     "node_modules/@next/env": {[m
       "version": "14.2.16",[m
       "resolved": "https://registry.npmjs.org/@next/env/-/env-14.2.16.tgz",[m
[31m-      "integrity": "sha512-fLrX5TfJzHCbnZ9YUSnGW63tMV3L4nSfhgOQ0iCcX21Pt+VSTDuaLsSuL8J/2XAiVA5AnzvXDpf6pMs60QxOag==",[m
[31m-      "license": "MIT"[m
[32m+[m[32m      "integrity": "sha512-fLrX5TfJzHCbnZ9YUSnGW63tMV3L4nSfhgOQ0iCcX21Pt+VSTDuaLsSuL8J/2XAiVA5AnzvXDpf6pMs60QxOag=="[m
     },[m
     "node_modules/@next/eslint-plugin-next": {[m
       "version": "14.2.5",[m
[36m@@ -2162,7 +2093,6 @@[m
       "cpu": [[m
         "arm64"[m
       ],[m
[31m-      "license": "MIT",[m
       "optional": true,[m
       "os": [[m
         "darwin"[m
[36m@@ -2178,7 +2108,6 @@[m
       "cpu": [[m
         "x64"[m
       ],[m
[31m-      "license": "MIT",[m
       "optional": true,[m
       "os": [[m
         "darwin"[m
[36m@@ -2194,7 +2123,6 @@[m
       "cpu": [[m
         "arm64"[m
       ],[m
[31m-      "license": "MIT",[m
       "optional": true,[m
       "os": [[m
         "linux"[m
[36m@@ -2210,7 +2138,6 @@[m
       "cpu": [[m
         "arm64"[m
       ],[m
[31m-      "license": "MIT",[m
       "optional": true,[m
       "os": [[m
         "linux"[m
[36m@@ -2220,14 +2147,14 @@[m
       }[m
     },[m
     "node_modules/@next/swc-linux-x64-gnu": {[m
[31m-      "version": "14.2.16",[m
[31m-      "resolved": "https://registry.npmjs.org/@next/swc-linux-x64-gnu/-/swc-linux-x64-gnu-14.2.16.tgz",[m
[31m-      "integrity": "sha512-9AGcX7VAkGbc5zTSa+bjQ757tkjr6C/pKS7OK8cX7QEiK6MHIIezBLcQ7gQqbDW2k5yaqba2aDtaBeyyZh1i6Q==",[m
[32m+[m[32m      "version": "15.0.3",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@next/swc-linux-x64-gnu/-/swc-linux-x64-gnu-15.0.3.tgz",[m
[32m+[m[32m      "integrity": "sha512-gWL/Cta1aPVqIGgDb6nxkqy06DkwJ9gAnKORdHWX1QBbSZZB+biFYPFti8aKIQL7otCE1pjyPaXpFzGeG2OS2w==",[m
       "cpu": [[m
         "x64"[m
       ],[m
[32m+[m[32m      "dev": true,[m
       "license": "MIT",[m
[31m-      "optional": true,[m
       "os": [[m
         "linux"[m
       ],[m
[36m@@ -2242,7 +2169,6 @@[m
       "cpu": [[m
         "x64"[m
       ],[m
[31m-      "license": "MIT",[m
       "optional": true,[m
       "os": [[m
         "linux"[m
[36m@@ -2258,7 +2184,6 @@[m
       "cpu": [[m
         "arm64"[m
       ],[m
[31m-      "license": "MIT",[m
       "optional": true,[m
       "os": [[m
         "win32"[m
[36m@@ -2274,7 +2199,6 @@[m
       "cpu": [[m
         "ia32"[m
       ],[m
[31m-      "license": "MIT",[m
       "optional": true,[m
       "os": [[m
         "win32"[m
[36m@@ -2290,7 +2214,6 @@[m
       "cpu": [[m
         "x64"[m
       ],[m
[31m-      "license": "MIT",[m
       "optional": true,[m
       "os": [[m
         "win32"[m
[36m@@ -5923,8 +5846,7 @@[m
       "version": "3.1.2",[m
       "resolved": "https://registry.npmjs.org/@socket.io/component-emitter/-/component-emitter-3.1.2.tgz",[m
       "integrity": "sha512-9BCxFwvbGg/RsZK9tjXd8s4UcwR0MWeFQ1XEKIQVVvAGJyINdrqKMcTRyLoK8Rse1GjzLV9cwjWV1olXRWEXVA==",[m
[31m-      "dev": true,[m
[31m-      "license": "MIT"[m
[32m+[m[32m      "dev": true[m
     },[m
     "node_modules/@spruceid/siwe-parser": {[m
       "version": "2.1.2",[m
[36m@@ -5972,8 +5894,7 @@[m
     "node_modules/@swc/counter": {[m
       "version": "0.1.3",[m
       "resolved": "https://registry.npmjs.org/@swc/counter/-/counter-0.1.3.tgz",[m
[31m-      "integrity": "sha512-e2BR4lsJkkRlKZ/qCHPw9ZaSxc0MVUd7gtbtaB7aMvHeJVYe8sOB8DBZkP2DtISHGSku9sCK6T6cnY0CtXrOCQ==",[m
[31m-      "license": "Apache-2.0"[m
[32m+[m[32m      "integrity": "sha512-e2BR4lsJkkRlKZ/qCHPw9ZaSxc0MVUd7gtbtaB7aMvHeJVYe8sOB8DBZkP2DtISHGSku9sCK6T6cnY0CtXrOCQ=="[m
     },[m
     "node_modules/@swc/helpers": {[m
       "version": "0.5.13",[m
[36m@@ -5988,15 +5909,16 @@[m
       "version": "5.59.20",[m
       "resolved": "https://registry.npmjs.org/@tanstack/query-core/-/query-core-5.59.20.tgz",[m
       "integrity": "sha512-e8vw0lf7KwfGe1if4uPFhvZRWULqHjFcz3K8AebtieXvnMOz5FSzlZe3mTLlPuUBcydCnBRqYs2YJ5ys68wwLg==",[m
[32m+[m[32m      "license": "MIT",[m
       "funding": {[m
         "type": "github",[m
         "url": "https://github.com/sponsors/tannerlinsley"[m
       }[m
     },[m
     "node_modules/@tanstack/query-devtools": {[m
[31m-      "version": "5.58.0",[m
[31m-      "resolved": "https://registry.npmjs.org/@tanstack/query-devtools/-/query-devtools-5.58.0.tgz",[m
[31m-      "integrity": "sha512-iFdQEFXaYYxqgrv63ots+65FGI+tNp5ZS5PdMU1DWisxk3fez5HG3FyVlbUva+RdYS5hSLbxZ9aw3yEs97GNTw==",[m
[32m+[m[32m      "version": "5.59.20",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@tanstack/query-devtools/-/query-devtools-5.59.20.tgz",[m
[32m+[m[32m      "integrity": "sha512-vxhuQ+8VV4YWQSFxQLsuM+dnEKRY7VeRzpNabFXdhEwsBYLrjXlF1pM38A8WyKNLqZy8JjyRO8oP4Wd/oKHwuQ==",[m
       "license": "MIT",[m
       "funding": {[m
         "type": "github",[m
[36m@@ -6007,6 +5929,7 @@[m
       "version": "5.59.20",[m
       "resolved": "https://registry.npmjs.org/@tanstack/react-query/-/react-query-5.59.20.tgz",[m
       "integrity": "sha512-Zly0egsK0tFdfSbh5/mapSa+Zfc3Et0Zkar7Wo5sQkFzWyB3p3uZWOHR2wrlAEEV2L953eLuDBtbgFvMYiLvUw==",[m
[32m+[m[32m      "license": "MIT",[m
       "dependencies": {[m
         "@tanstack/query-core": "5.59.20"[m
       },[m
[36m@@ -6019,19 +5942,19 @@[m
       }[m
     },[m
     "node_modules/@tanstack/react-query-devtools": {[m
[31m-      "version": "5.59.16",[m
[31m-      "resolved": "https://registry.npmjs.org/@tanstack/react-query-devtools/-/react-query-devtools-5.59.16.tgz",[m
[31m-      "integrity": "sha512-Dejo39QBXmDqXZ3vdrk7vHDvs7TvL573/AX2NveMBmRAufAPYuE3oWSKP/gGqkDfEqyr4CmldOj+v9cKskUchQ==",[m
[32m+[m[32m      "version": "5.59.20",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@tanstack/react-query-devtools/-/react-query-devtools-5.59.20.tgz",[m
[32m+[m[32m      "integrity": "sha512-AL/eQS1NFZhwwzq2Bq9Gd8wTTH+XhPNOJlDFpzPMu9NC5CQVgA0J8lWrte/sXpdWNo5KA4hgHnEdImZsF4h6Lw==",[m
       "license": "MIT",[m
       "dependencies": {[m
[31m-        "@tanstack/query-devtools": "5.58.0"[m
[32m+[m[32m        "@tanstack/query-devtools": "5.59.20"[m
       },[m
       "funding": {[m
         "type": "github",[m
         "url": "https://github.com/sponsors/tannerlinsley"[m
       },[m
       "peerDependencies": {[m
[31m-        "@tanstack/react-query": "^5.59.16",[m
[32m+[m[32m        "@tanstack/react-query": "^5.59.20",[m
         "react": "^18 || ^19"[m
       }[m
     },[m
[36m@@ -6047,11 +5970,32 @@[m
       "resolved": "https://registry.npmjs.org/@types/cors/-/cors-2.8.17.tgz",[m
       "integrity": "sha512-8CGDvrBj1zgo2qE+oS3pOCyYNqCPryMWY2bGfwA0dcfopWGgxs+78df0Rs3rc9THP4JkOhLsAa+15VdpAqkcUA==",[m
       "dev": true,[m
[31m-      "license": "MIT",[m
       "dependencies": {[m
         "@types/node": "*"[m
       }[m
     },[m
[32m+[m[32m    "node_modules/@types/eslint": {[m
[32m+[m[32m      "version": "9.6.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@types/eslint/-/eslint-9.6.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-FXx2pKgId/WyYo2jXw63kk7/+TY7u7AziEJxJAnSFzHlqTAS3Ync6SvgYAN/k4/PQpnnVuzoMuVnByKK2qp0ag==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "license": "MIT",[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "@types/estree": "*",[m
[32m+[m[32m        "@types/json-schema": "*"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "node_modules/@types/eslint-scope": {[m
[32m+[m[32m      "version": "3.7.7",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@types/eslint-scope/-/eslint-scope-3.7.7.tgz",[m
[32m+[m[32m      "integrity": "sha512-MzMFlSLBqNF2gcHWO0G1vP/YQyfvrxZ0bF+u7mzUdZ1/xK4A4sru+nraZz5i3iEIk1l1uyicaDVTB4QbbEkAYg==",[m
[32m+[m[32m      "dev": true,[m
[32m+[m[32m      "license": "MIT",[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "@types/eslint": "*",[m
[32m+[m[32m        "@types/estree": "*"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
     "node_modules/@types/estree": {[m
       "version": "1.0.6",[m
       "resolved": "https://registry.npmjs.org/@types/estree/-/estree-1.0.6.tgz",[m
[36m@@ -6093,9 +6037,9 @@[m
       "license": "MIT"[m
     },[m
     "node_modules/@types/lodash": {[m
[31m-      "version": "4.17.12",[m
[31m-      "resolved": "https://registry.npmjs.org/@types/lodash/-/lodash-4.17.12.tgz",[m
[31m-      "integrity": "sha512-sviUmCE8AYdaF/KIHLDJBQgeYzPBI0vf/17NaYehBJfYD1j6/L95Slh07NlyK2iNyBNaEkb3En2jRt+a8y3xZQ==",[m
[32m+[m[32m      "version": "4.17.13",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@types/lodash/-/lodash-4.17.13.tgz",[m
[32m+[m[32m      "integrity": "sha512-lfx+dftrEZcdBPczf9d0Qv0x+j/rfNCMuC6OcfXmO8gkfeNAY88PgKUbvG56whcN23gc27yenwF6oJZXGFpYxg==",[m
       "license": "MIT"[m
     },[m
     "node_modules/@types/lodash.debounce": {[m
[36m@@ -6111,6 +6055,7 @@[m
       "version": "22.9.0",[m
       "resolved": "https://registry.npmjs.org/@types/node/-/node-22.9.0.tgz",[m
       "integrity": "sha512-vuyHg81vvWA1Z1ELfvLko2c8f34gyA0zaic0+Rllc5lbCnbSyuvb2Oxpm6TAUAC/2xZN3QGqxBNggD1nNR2AfQ==",[m
[32m+[m[32m      "license": "MIT",[m
       "dependencies": {[m
         "undici-types": "~6.19.8"[m
       }[m
[36m@@ -6131,6 +6076,7 @@[m
       "version": "18.3.12",[m
       "resolved": "https://registry.npmjs.org/@types/react/-/react-18.3.12.tgz",[m
       "integrity": "sha512-D2wOSq/d6Agt28q7rSI3jhU7G6aiuzljDGZ2hTZHIkrTLUI+AF3WMeKkEZ9nN2fkBAlcktT6vcZjDFiIhMYEQw==",[m
[32m+[m[32m      "license": "MIT",[m
       "dependencies": {[m
         "@types/prop-types": "*",[m
         "csstype": "^3.0.2"[m
[36m@@ -6303,73 +6249,73 @@[m
       "license": "ISC"[m
     },[m
     "node_modules/@webassemblyjs/ast": {[m
[31m-      "version": "1.12.1",[m
[31m-      "resolved": "https://registry.npmjs.org/@webassemblyjs/ast/-/ast-1.12.1.tgz",[m
[31m-      "integrity": "sha512-EKfMUOPRRUTy5UII4qJDGPpqfwjOmZ5jeGFwid9mnoqIFK+e0vqoi1qH56JpmZSzEL53jKnNzScdmftJyG5xWg==",[m
[32m+[m[32m      "version": "1.14.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@webassemblyjs/ast/-/ast-1.14.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-nuBEDgQfm1ccRp/8bCQrx1frohyufl4JlbMMZ4P1wpeOfDhF6FQkxZJ1b/e+PLwr6X1Nhw6OLme5usuBWYBvuQ==",[m
       "dev": true,[m
       "license": "MIT",[m
       "dependencies": {[m
[31m-        "@webassemblyjs/helper-numbers": "1.11.6",[m
[31m-        "@webassemblyjs/helper-wasm-bytecode": "1.11.6"[m
[32m+[m[32m        "@webassemblyjs/helper-numbers": "1.13.2",[m
[32m+[m[32m        "@webassemblyjs/helper-wasm-bytecode": "1.13.2"[m
       }[m
     },[m
     "node_modules/@webassemblyjs/floating-point-hex-parser": {[m
[31m-      "version": "1.11.6",[m
[31m-      "resolved": "https://registry.npmjs.org/@webassemblyjs/floating-point-hex-parser/-/floating-point-hex-parser-1.11.6.tgz",[m
[31m-      "integrity": "sha512-ejAj9hfRJ2XMsNHk/v6Fu2dGS+i4UaXBXGemOfQ/JfQ6mdQg/WXtwleQRLLS4OvfDhv8rYnVwH27YJLMyYsxhw==",[m
[32m+[m[32m      "version": "1.13.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@webassemblyjs/floating-point-hex-parser/-/floating-point-hex-parser-1.13.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-6oXyTOzbKxGH4steLbLNOu71Oj+C8Lg34n6CqRvqfS2O71BxY6ByfMDRhBytzknj9yGUPVJ1qIKhRlAwO1AovA==",[m
       "dev": true,[m
       "license": "MIT"[m
     },[m
     "node_modules/@webassemblyjs/helper-api-error": {[m
[31m-      "version": "1.11.6",[m
[31m-      "resolved": "https://registry.npmjs.org/@webassemblyjs/helper-api-error/-/helper-api-error-1.11.6.tgz",[m
[31m-      "integrity": "sha512-o0YkoP4pVu4rN8aTJgAyj9hC2Sv5UlkzCHhxqWj8butaLvnpdc2jOwh4ewE6CX0txSfLn/UYaV/pheS2Txg//Q==",[m
[32m+[m[32m      "version": "1.13.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@webassemblyjs/helper-api-error/-/helper-api-error-1.13.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-U56GMYxy4ZQCbDZd6JuvvNV/WFildOjsaWD3Tzzvmw/mas3cXzRJPMjP83JqEsgSbyrmaGjBfDtV7KDXV9UzFQ==",[m
       "dev": true,[m
       "license": "MIT"[m
     },[m
     "node_modules/@webassemblyjs/helper-buffer": {[m
[31m-      "version": "1.12.1",[m
[31m-      "resolved": "https://registry.npmjs.org/@webassemblyjs/helper-buffer/-/helper-buffer-1.12.1.tgz",[m
[31m-      "integrity": "sha512-nzJwQw99DNDKr9BVCOZcLuJJUlqkJh+kVzVl6Fmq/tI5ZtEyWT1KZMyOXltXLZJmDtvLCDgwsyrkohEtopTXCw==",[m
[32m+[m[32m      "version": "1.14.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@webassemblyjs/helper-buffer/-/helper-buffer-1.14.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-jyH7wtcHiKssDtFPRB+iQdxlDf96m0E39yb0k5uJVhFGleZFoNw1c4aeIcVUPPbXUVJ94wwnMOAqUHyzoEPVMA==",[m
       "dev": true,[m
       "license": "MIT"[m
     },[m
     "node_modules/@webassemblyjs/helper-numbers": {[m
[31m-      "version": "1.11.6",[m
[31m-      "resolved": "https://registry.npmjs.org/@webassemblyjs/helper-numbers/-/helper-numbers-1.11.6.tgz",[m
[31m-      "integrity": "sha512-vUIhZ8LZoIWHBohiEObxVm6hwP034jwmc9kuq5GdHZH0wiLVLIPcMCdpJzG4C11cHoQ25TFIQj9kaVADVX7N3g==",[m
[32m+[m[32m      "version": "1.13.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@webassemblyjs/helper-numbers/-/helper-numbers-1.13.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-FE8aCmS5Q6eQYcV3gI35O4J789wlQA+7JrqTTpJqn5emA4U2hvwJmvFRC0HODS+3Ye6WioDklgd6scJ3+PLnEA==",[m
       "dev": true,[m
       "license": "MIT",[m
       "dependencies": {[m
[31m-        "@webassemblyjs/floating-point-hex-parser": "1.11.6",[m
[31m-        "@webassemblyjs/helper-api-error": "1.11.6",[m
[32m+[m[32m        "@webassemblyjs/floating-point-hex-parser": "1.13.2",[m
[32m+[m[32m        "@webassemblyjs/helper-api-error": "1.13.2",[m
         "@xtuc/long": "4.2.2"[m
       }[m
     },[m
     "node_modules/@webassemblyjs/helper-wasm-bytecode": {[m
[31m-      "version": "1.11.6",[m
[31m-      "resolved": "https://registry.npmjs.org/@webassemblyjs/helper-wasm-bytecode/-/helper-wasm-bytecode-1.11.6.tgz",[m
[31m-      "integrity": "sha512-sFFHKwcmBprO9e7Icf0+gddyWYDViL8bpPjJJl0WHxCdETktXdmtWLGVzoHbqUcY4Be1LkNfwTmXOJUFZYSJdA==",[m
[32m+[m[32m      "version": "1.13.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@webassemblyjs/helper-wasm-bytecode/-/helper-wasm-bytecode-1.13.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-3QbLKy93F0EAIXLh0ogEVR6rOubA9AoZ+WRYhNbFyuB70j3dRdwH9g+qXhLAO0kiYGlg3TxDV+I4rQTr/YNXkA==",[m
       "dev": true,[m
       "license": "MIT"[m
     },[m
     "node_modules/@webassemblyjs/helper-wasm-section": {[m
[31m-      "version": "1.12.1",[m
[31m-      "resolved": "https://registry.npmjs.org/@webassemblyjs/helper-wasm-section/-/helper-wasm-section-1.12.1.tgz",[m
[31m-      "integrity": "sha512-Jif4vfB6FJlUlSbgEMHUyk1j234GTNG9dBJ4XJdOySoj518Xj0oGsNi59cUQF4RRMS9ouBUxDDdyBVfPTypa5g==",[m
[32m+[m[32m      "version": "1.14.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@webassemblyjs/helper-wasm-section/-/helper-wasm-section-1.14.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-ds5mXEqTJ6oxRoqjhWDU83OgzAYjwsCV8Lo/N+oRsNDmx/ZDpqalmrtgOMkHwxsG0iI//3BwWAErYRHtgn0dZw==",[m
       "dev": true,[m
       "license": "MIT",[m
       "dependencies": {[m
[31m-        "@webassemblyjs/ast": "1.12.1",[m
[31m-        "@webassemblyjs/helper-buffer": "1.12.1",[m
[31m-        "@webassemblyjs/helper-wasm-bytecode": "1.11.6",[m
[31m-        "@webassemblyjs/wasm-gen": "1.12.1"[m
[32m+[m[32m        "@webassemblyjs/ast": "1.14.1",[m
[32m+[m[32m        "@webassemblyjs/helper-buffer": "1.14.1",[m
[32m+[m[32m        "@webassemblyjs/helper-wasm-bytecode": "1.13.2",[m
[32m+[m[32m        "@webassemblyjs/wasm-gen": "1.14.1"[m
       }[m
     },[m
     "node_modules/@webassemblyjs/ieee754": {[m
[31m-      "version": "1.11.6",[m
[31m-      "resolved": "https://registry.npmjs.org/@webassemblyjs/ieee754/-/ieee754-1.11.6.tgz",[m
[31m-      "integrity": "sha512-LM4p2csPNvbij6U1f19v6WR56QZ8JcHg3QIJTlSwzFcmx6WSORicYj6I63f9yU1kEUtrpG+kjkiIAkevHpDXrg==",[m
[32m+[m[32m      "version": "1.13.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@webassemblyjs/ieee754/-/ieee754-1.13.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-4LtOzh58S/5lX4ITKxnAK2USuNEvpdVV9AlgGQb8rJDHaLeHciwG4zlGr0j/SNWlr7x3vO1lDEsuePvtcDNCkw==",[m
       "dev": true,[m
       "license": "MIT",[m
       "dependencies": {[m
[36m@@ -6377,9 +6323,9 @@[m
       }[m
     },[m
     "node_modules/@webassemblyjs/leb128": {[m
[31m-      "version": "1.11.6",[m
[31m-      "resolved": "https://registry.npmjs.org/@webassemblyjs/leb128/-/leb128-1.11.6.tgz",[m
[31m-      "integrity": "sha512-m7a0FhE67DQXgouf1tbN5XQcdWoNgaAuoULHIfGFIEVKA6tu/edls6XnIlkmS6FrXAquJRPni3ZZKjw6FSPjPQ==",[m
[32m+[m[32m      "version": "1.13.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@webassemblyjs/leb128/-/leb128-1.13.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-Lde1oNoIdzVzdkNEAWZ1dZ5orIbff80YPdHx20mrHwHrVNNTjNr8E3xz9BdpcGqRQbAEa+fkrCb+fRFTl/6sQw==",[m
       "dev": true,[m
       "license": "Apache-2.0",[m
       "dependencies": {[m
[36m@@ -6387,79 +6333,79 @@[m
       }[m
     },[m
     "node_modules/@webassemblyjs/utf8": {[m
[31m-      "version": "1.11.6",[m
[31m-      "resolved": "https://registry.npmjs.org/@webassemblyjs/utf8/-/utf8-1.11.6.tgz",[m
[31m-      "integrity": "sha512-vtXf2wTQ3+up9Zsg8sa2yWiQpzSsMyXj0qViVP6xKGCUT8p8YJ6HqI7l5eCnWx1T/FYdsv07HQs2wTFbbof/RA==",[m
[32m+[m[32m      "version": "1.13.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@webassemblyjs/utf8/-/utf8-1.13.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-3NQWGjKTASY1xV5m7Hr0iPeXD9+RDobLll3T9d2AO+g3my8xy5peVyjSag4I50mR1bBSN/Ct12lo+R9tJk0NZQ==",[m
       "dev": true,[m
       "license": "MIT"[m
     },[m
     "node_modules/@webassemblyjs/wasm-edit": {[m
[31m-      "version": "1.12.1",[m
[31m-      "resolved": "https://registry.npmjs.org/@webassemblyjs/wasm-edit/-/wasm-edit-1.12.1.tgz",[m
[31m-      "integrity": "sha512-1DuwbVvADvS5mGnXbE+c9NfA8QRcZ6iKquqjjmR10k6o+zzsRVesil54DKexiowcFCPdr/Q0qaMgB01+SQ1u6g==",[m
[32m+[m[32m      "version": "1.14.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@webassemblyjs/wasm-edit/-/wasm-edit-1.14.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-RNJUIQH/J8iA/1NzlE4N7KtyZNHi3w7at7hDjvRNm5rcUXa00z1vRz3glZoULfJ5mpvYhLybmVcwcjGrC1pRrQ==",[m
       "dev": true,[m
       "license": "MIT",[m
       "dependencies": {[m
[31m-        "@webassemblyjs/ast": "1.12.1",[m
[31m-        "@webassemblyjs/helper-buffer": "1.12.1",[m
[31m-        "@webassemblyjs/helper-wasm-bytecode": "1.11.6",[m
[31m-        "@webassemblyjs/helper-wasm-section": "1.12.1",[m
[31m-        "@webassemblyjs/wasm-gen": "1.12.1",[m
[31m-        "@webassemblyjs/wasm-opt": "1.12.1",[m
[31m-        "@webassemblyjs/wasm-parser": "1.12.1",[m
[31m-        "@webassemblyjs/wast-printer": "1.12.1"[m
[32m+[m[32m        "@webassemblyjs/ast": "1.14.1",[m
[32m+[m[32m        "@webassemblyjs/helper-buffer": "1.14.1",[m
[32m+[m[32m        "@webassemblyjs/helper-wasm-bytecode": "1.13.2",[m
[32m+[m[32m        "@webassemblyjs/helper-wasm-section": "1.14.1",[m
[32m+[m[32m        "@webassemblyjs/wasm-gen": "1.14.1",[m
[32m+[m[32m        "@webassemblyjs/wasm-opt": "1.14.1",[m
[32m+[m[32m        "@webassemblyjs/wasm-parser": "1.14.1",[m
[32m+[m[32m        "@webassemblyjs/wast-printer": "1.14.1"[m
       }[m
     },[m
     "node_modules/@webassemblyjs/wasm-gen": {[m
[31m-      "version": "1.12.1",[m
[31m-      "resolved": "https://registry.npmjs.org/@webassemblyjs/wasm-gen/-/wasm-gen-1.12.1.tgz",[m
[31m-      "integrity": "sha512-TDq4Ojh9fcohAw6OIMXqiIcTq5KUXTGRkVxbSo1hQnSy6lAM5GSdfwWeSxpAo0YzgsgF182E/U0mDNhuA0tW7w==",[m
[32m+[m[32m      "version": "1.14.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@webassemblyjs/wasm-gen/-/wasm-gen-1.14.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-AmomSIjP8ZbfGQhumkNvgC33AY7qtMCXnN6bL2u2Js4gVCg8fp735aEiMSBbDR7UQIj90n4wKAFUSEd0QN2Ukg==",[m
       "dev": true,[m
       "license": "MIT",[m
       "dependencies": {[m
[31m-        "@webassemblyjs/ast": "1.12.1",[m
[31m-        "@webassemblyjs/helper-wasm-bytecode": "1.11.6",[m
[31m-        "@webassemblyjs/ieee754": "1.11.6",[m
[31m-        "@webassemblyjs/leb128": "1.11.6",[m
[31m-        "@webassemblyjs/utf8": "1.11.6"[m
[32m+[m[32m        "@webassemblyjs/ast": "1.14.1",[m
[32m+[m[32m        "@webassemblyjs/helper-wasm-bytecode": "1.13.2",[m
[32m+[m[32m        "@webassemblyjs/ieee754": "1.13.2",[m
[32m+[m[32m        "@webassemblyjs/leb128": "1.13.2",[m
[32m+[m[32m        "@webassemblyjs/utf8": "1.13.2"[m
       }[m
     },[m
     "node_modules/@webassemblyjs/wasm-opt": {[m
[31m-      "version": "1.12.1",[m
[31m-      "resolved": "https://registry.npmjs.org/@webassemblyjs/wasm-opt/-/wasm-opt-1.12.1.tgz",[m
[31m-      "integrity": "sha512-Jg99j/2gG2iaz3hijw857AVYekZe2SAskcqlWIZXjji5WStnOpVoat3gQfT/Q5tb2djnCjBtMocY/Su1GfxPBg==",[m
[32m+[m[32m      "version": "1.14.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@webassemblyjs/wasm-opt/-/wasm-opt-1.14.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-PTcKLUNvBqnY2U6E5bdOQcSM+oVP/PmrDY9NzowJjislEjwP/C4an2303MCVS2Mg9d3AJpIGdUFIQQWbPds0Sw==",[m
       "dev": true,[m
       "license": "MIT",[m
       "dependencies": {[m
[31m-        "@webassemblyjs/ast": "1.12.1",[m
[31m-        "@webassemblyjs/helper-buffer": "1.12.1",[m
[31m-        "@webassemblyjs/wasm-gen": "1.12.1",[m
[31m-        "@webassemblyjs/wasm-parser": "1.12.1"[m
[32m+[m[32m        "@webassemblyjs/ast": "1.14.1",[m
[32m+[m[32m        "@webassemblyjs/helper-buffer": "1.14.1",[m
[32m+[m[32m        "@webassemblyjs/wasm-gen": "1.14.1",[m
[32m+[m[32m        "@webassemblyjs/wasm-parser": "1.14.1"[m
       }[m
     },[m
     "node_modules/@webassemblyjs/wasm-parser": {[m
[31m-      "version": "1.12.1",[m
[31m-      "resolved": "https://registry.npmjs.org/@webassemblyjs/wasm-parser/-/wasm-parser-1.12.1.tgz",[m
[31m-      "integrity": "sha512-xikIi7c2FHXysxXe3COrVUPSheuBtpcfhbpFj4gmu7KRLYOzANztwUU0IbsqvMqzuNK2+glRGWCEqZo1WCLyAQ==",[m
[32m+[m[32m      "version": "1.14.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@webassemblyjs/wasm-parser/-/wasm-parser-1.14.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-JLBl+KZ0R5qB7mCnud/yyX08jWFw5MsoalJ1pQ4EdFlgj9VdXKGuENGsiCIjegI1W7p91rUlcB/LB5yRJKNTcQ==",[m
       "dev": true,[m
       "license": "MIT",[m
       "dependencies": {[m
[31m-        "@webassemblyjs/ast": "1.12.1",[m
[31m-        "@webassemblyjs/helper-api-error": "1.11.6",[m
[31m-        "@webassemblyjs/helper-wasm-bytecode": "1.11.6",[m
[31m-        "@webassemblyjs/ieee754": "1.11.6",[m
[31m-        "@webassemblyjs/leb128": "1.11.6",[m
[31m-        "@webassemblyjs/utf8": "1.11.6"[m
[32m+[m[32m        "@webassemblyjs/ast": "1.14.1",[m
[32m+[m[32m        "@webassemblyjs/helper-api-error": "1.13.2",[m
[32m+[m[32m        "@webassemblyjs/helper-wasm-bytecode": "1.13.2",[m
[32m+[m[32m        "@webassemblyjs/ieee754": "1.13.2",[m
[32m+[m[32m        "@webassemblyjs/leb128": "1.13.2",[m
[32m+[m[32m        "@webassemblyjs/utf8": "1.13.2"[m
       }[m
     },[m
     "node_modules/@webassemblyjs/wast-printer": {[m
[31m-      "version": "1.12.1",[m
[31m-      "resolved": "https://registry.npmjs.org/@webassemblyjs/wast-printer/-/wast-printer-1.12.1.tgz",[m
[31m-      "integrity": "sha512-+X4WAlOisVWQMikjbcvY2e0rwPsKQ9F688lksZhBcPycBBuii3O7m8FACbDMWDojpAqvjIncrG8J0XHKyQfVeA==",[m
[32m+[m[32m      "version": "1.14.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@webassemblyjs/wast-printer/-/wast-printer-1.14.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-kPSSXE6De1XOR820C90RIo2ogvZG+c3KiHzqUoO/F34Y2shGzesfqv7o57xrxovZJH/MetF5UjroJ/R/3isoiw==",[m
       "dev": true,[m
       "license": "MIT",[m
       "dependencies": {[m
[31m-        "@webassemblyjs/ast": "1.12.1",[m
[32m+[m[32m        "@webassemblyjs/ast": "1.14.1",[m
         "@xtuc/long": "4.2.2"[m
       }[m
     },[m
[36m@@ -6547,9 +6493,9 @@[m
       }[m
     },[m
     "node_modules/acorn": {[m
[31m-      "version": "8.13.0",[m
[31m-      "resolved": "https://registry.npmjs.org/acorn/-/acorn-8.13.0.tgz",[m
[31m-      "integrity": "sha512-8zSiw54Oxrdym50NlZ9sUusyO1Z1ZchgRLWRaK6c86XJFClyCgFKetdowBg5bKxyp/u+CDBJG4Mpp0m3HLZl9w==",[m
[32m+[m[32m      "version": "8.14.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/acorn/-/acorn-8.14.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-cl669nCJTZBsL97OF4kUQm5g5hC2uihk0NxY3WENAC0TYdILVkAyHymAntgxGkl7K+t0cXIrH5siy5S4XkFycA==",[m
       "dev": true,[m
       "license": "MIT",[m
       "bin": {[m
[36m@@ -6559,16 +6505,6 @@[m
         "node": ">=0.4.0"[m
       }[m
     },[m
[31m-    "node_modules/acorn-import-attributes": {[m
[31m-      "version": "1.9.5",[m
[31m-      "resolved": "https://registry.npmjs.org/acorn-import-attributes/-/acorn-import-attributes-1.9.5.tgz",[m
[31m-      "integrity": "sha512-n02Vykv5uA3eHGM/Z2dQrcD56kL8TyDb2p1+0P83PClMnC/nc+anbQRhIOWnSq4Ke/KvDPrY3C9hDtC/A3eHnQ==",[m
[31m-      "dev": true,[m
[31m-      "license": "MIT",[m
[31m-      "peerDependencies": {[m
[31m-        "acorn": "^8"[m
[31m-      }[m
[31m-    },[m
     "node_modules/acorn-jsx": {[m
       "version": "5.3.2",[m
       "resolved": "https://registry.npmjs.org/acorn-jsx/-/acorn-jsx-5.3.2.tgz",[m
[36m@@ -6586,19 +6522,6 @@[m
       "license": "MIT",[m
       "peer": true[m
     },[m
[31m-    "node_modules/agent-base": {[m
[31m-      "version": "6.0.2",[m
[31m-      "resolved": "https://registry.npmjs.org/agent-base/-/agent-base-6.0.2.tgz",[m
[31m-      "integrity": "sha512-RZNwNclF7+MS/8bDg70amg32dyeZGZxiDuQmZxKLAlQjr3jGyLx+4Kkk58UO7D2QdgFIQCovuSuZESne6RG6XQ==",[m
[31m-      "license": "MIT",[m
[31m-      "optional": true,[m
[31m-      "dependencies": {[m
[31m-        "debug": "4"[m
[31m-      },[m
[31m-      "engines": {[m
[31m-        "node": ">= 6.0.0"[m
[31m-      }[m
[31m-    },[m
     "node_modules/ajv": {[m
       "version": "6.12.6",[m
       "resolved": "https://registry.npmjs.org/ajv/-/ajv-6.12.6.tgz",[m
[36m@@ -6636,15 +6559,18 @@[m
       }[m
     },[m
     "node_modules/ansi-styles": {[m
[31m-      "version": "3.2.1",[m
[31m-      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-3.2.1.tgz",[m
[31m-      "integrity": "sha512-VT0ZI6kZRdTh8YyJw3SMbYm/u+NqfsAxEpWO0Pf9sq8/e94WxxOpPKx9FR1FlyCtOVDNOQ+8ntlqFxiRc+r5qA==",[m
[32m+[m[32m      "version": "4.3.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",[m
       "license": "MIT",[m
       "dependencies": {[m
[31m-        "color-convert": "^1.9.0"[m
[32m+[m[32m        "color-convert": "^2.0.1"[m
       },[m
       "engines": {[m
[31m-        "node": ">=4"[m
[32m+[m[32m        "node": ">=8"[m
[32m+[m[32m      },[m
[32m+[m[32m      "funding": {[m
[32m+[m[32m        "url": "https://github.com/chalk/ansi-styles?sponsor=1"[m
       }[m
     },[m
     "node_modules/any-promise": {[m
[36m@@ -6672,28 +6598,6 @@[m
       "integrity": "sha512-fefmXFknJmtgtNEXfPwZKYkMFX4Fyeyz+fNF6JWp87biGOPslJbCBVU158zvKRZfHBKnJDy8CMM40oLFGkXT8Q==",[m
       "license": "BSD-2-Clause"[m
     },[m
[31m-    "node_modules/aproba": {[m
[31m-      "version": "2.0.0",[m
[31m-      "resolved": "https://registry.npmjs.org/aproba/-/aproba-2.0.0.tgz",[m
[31m-      "integrity": "sha512-lYe4Gx7QT+MKGbDsA+Z+he/Wtef0BiwDOlK/XkBrdfsh9J/jPPXbX0tE9x9cl27Tmu5gg3QUbUrQYa/y+KOHPQ==",[m
[31m-      "license": "ISC",[m
[31m-      "optional": true[m
[31m-    },[m
[31m-    "node_modules/are-we-there-yet": {[m
[31m-      "version": "2.0.0",[m
[31m-      "resolved": "https://registry.npmjs.org/are-we-there-yet/-/are-we-there-yet-2.0.0.tgz",[m
[31m-      "integrity": "sha512-Ci/qENmwHnsYo9xKIcUJN5LeDKdJ6R1Z1j9V/J5wyq8nh/mYPEpIKJbBZXtZjG04HiK7zV/p6Vs9952MrMeUIw==",[m
[31m-      "deprecated": "This package is no longer supported.",[m
[31m-      "license": "ISC",[m
[31m-      "optional": true,[m
[31m-      "dependencies": {[m
[31m-        "delegates": "^1.0.0",[m
[31m-        "readable-stream": "^3.6.0"[m
[31m-      },[m
[31m-      "engines": {[m
[31m-        "node": ">=10"[m
[31m-      }[m
[31m-    },[m
     "node_modules/arg": {[m
       "version": "5.0.2",[m
       "resolved": "https://registry.npmjs.org/arg/-/arg-5.0.2.tgz",[m
[36m@@ -6927,9 +6831,9 @@[m
       }[m
     },[m
     "node_modules/axe-core": {[m
[31m-      "version": "4.10.1",[m
[31m-      "resolved": "https://registry.npmjs.org/axe-core/-/axe-core-4.10.1.tgz",[m
[31m-      "integrity": "sha512-qPC9o+kD8Tir0lzNGLeghbOrWMr3ZJpaRlCIb6Uobt/7N4FiEDvqUMnxzCHRHmg8vOg14kr5gVNyScRmbMaJ9g==",[m
[32m+[m[32m      "version": "4.10.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/axe-core/-/axe-core-4.10.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-RE3mdQ7P3FRSe7eqCWoeQ/Z9QXrtniSjp1wUjt5nRC3WIpz5rSCve6o3fsZ2aCpJtrZjSZgjwXAoTO5k4tEI0w==",[m
       "dev": true,[m
       "license": "MPL-2.0",[m
       "engines": {[m
[36m@@ -6982,7 +6886,7 @@[m
       "version": "1.5.1",[m
       "resolved": "https://registry.npmjs.org/base64-js/-/base64-js-1.5.1.tgz",[m
       "integrity": "sha512-AKpaYlHn8t4SVbOHCy+b5+KKgvR4vrsD8vbvrbiQJps7fKDTkjkDry6ji0rUJjC0kzbNePLwzxq8iypo41qeWA==",[m
[31m-      "dev": true,[m
[32m+[m[32m      "devOptional": true,[m
       "funding": [[m
         {[m
           "type": "github",[m
[36m@@ -7004,7 +6908,6 @@[m
       "resolved": "https://registry.npmjs.org/base64id/-/base64id-2.0.0.tgz",[m
       "integrity": "sha512-lGe34o6EHj9y3Kts9R4ZYs/Gr+6N7MCaMlIFA3F1R2O5/m7K06AxfSeO5530PEERE6/WyEg3lsuyw4GHlPZHog==",[m
       "dev": true,[m
[31m-      "license": "MIT",[m
       "engines": {[m
         "node": "^4.5.0 || >= 5.9"[m
       }[m
[36m@@ -7025,7 +6928,7 @@[m
       "version": "4.1.0",[m
       "resolved": "https://registry.npmjs.org/bl/-/bl-4.1.0.tgz",[m
       "integrity": "sha512-1W07cM9gS6DcLperZfFSj+bWLtaPGSOHWhPiGzXmvVJbRLdG82sH/Kn8EtW1VqWVA54AKf2h5k5BbnIbwF3h6w==",[m
[31m-      "dev": true,[m
[32m+[m[32m      "devOptional": true,[m
       "license": "MIT",[m
       "dependencies": {[m
         "buffer": "^5.5.0",[m
[36m@@ -7076,7 +6979,7 @@[m
       "version": "1.1.11",[m
       "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.11.tgz",[m
       "integrity": "sha512-iCuPHDFgrHX7H2vEI/5xpz07zSHB00TpugqhmYtVmMO6518mCuRMoOYFldEBl0g187ufozdaHgWKcYFb61qGiA==",[m
[31m-      "devOptional": true,[m
[32m+[m[32m      "dev": true,[m
       "license": "MIT",[m
       "dependencies": {[m
         "balanced-match": "^1.0.0",[m
[36m@@ -7132,7 +7035,7 @@[m
       "version": "5.7.1",[m
       "resolved": "https://registry.npmjs.org/buffer/-/buffer-5.7.1.tgz",[m
       "integrity": "sha512-EHcyIPBQ4BSGlvjB16k5KgAJ27CIsHY/2JBmCRReo48y9rQ3MaUzWX3KVlBa4U7MyX02HdVj0K7C3WaB3ju7FQ==",[m
[31m-      "dev": true,[m
[32m+[m[32m      "devOptional": true,[m
       "funding": [[m
         {[m
           "type": "github",[m
[36m@@ -7218,9 +7121,9 @@[m
       }[m
     },[m
     "node_modules/caniuse-lite": {[m
[31m-      "version": "1.0.30001669",[m
[31m-      "resolved": "https://registry.npmjs.org/caniuse-lite/-/caniuse-lite-1.0.30001669.tgz",[m
[31m-      "integrity": "sha512-DlWzFDJqstqtIVx1zeSpIMLjunf5SmwOw0N2Ck/QSQdS8PLS4+9HrLaYei4w8BIAL7IB/UEDu889d8vhCTPA0w==",[m
[32m+[m[32m      "version": "1.0.30001679",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/caniuse-lite/-/caniuse-lite-1.0.30001679.tgz",[m
[32m+[m[32m      "integrity": "sha512-j2YqID/YwpLnKzCmBOS4tlZdWprXm3ZmQLBH9ZBXFOhoxLA46fwyBvx6toCBWBmnuwUY/qB3kEU6gFx8qgCroA==",[m
       "funding": [[m
         {[m
           "type": "opencollective",[m
[36m@@ -7238,42 +7141,36 @@[m
       "license": "CC-BY-4.0"[m
     },[m
     "node_modules/canvas": {[m
[31m-      "version": "2.11.2",[m
[31m-      "resolved": "https://registry.npmjs.org/canvas/-/canvas-2.11.2.tgz",[m
[31m-      "integrity": "sha512-ItanGBMrmRV7Py2Z+Xhs7cT+FNt5K0vPL4p9EZ/UX/Mu7hFbkxSjKF2KVtPwX7UYWp7dRKnrTvReflgrItJbdw==",[m
[32m+[m[32m      "version": "3.0.0-rc2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/canvas/-/canvas-3.0.0-rc2.tgz",[m
[32m+[m[32m      "integrity": "sha512-esx4bYDznnqgRX4G8kaEaf0W3q8xIc51WpmrIitDzmcoEgwnv9wSKdzT6UxWZ4wkVu5+ileofppX0TpyviJRdQ==",[m
       "hasInstallScript": true,[m
       "license": "MIT",[m
       "optional": true,[m
       "dependencies": {[m
[31m-        "@mapbox/node-pre-gyp": "^1.0.0",[m
[31m-        "nan": "^2.17.0",[m
[32m+[m[32m        "node-addon-api": "^7.0.0",[m
[32m+[m[32m        "prebuild-install": "^7.1.1",[m
         "simple-get": "^3.0.3"[m
       },[m
       "engines": {[m
[31m-        "node": ">=6"[m
[32m+[m[32m        "node": "^18.12.0 || >= 20.9.0"[m
       }[m
     },[m
     "node_modules/chalk": {[m
[31m-      "version": "2.4.2",[m
[31m-      "resolved": "https://registry.npmjs.org/chalk/-/chalk-2.4.2.tgz",[m
[31m-      "integrity": "sha512-Mti+f9lpJNcwF4tWV8/OrTTtF1gZi+f8FqlyAdouralcFWFQWF2+NgCHShjkCb+IFBLq9buZwE1xckQU4peSuQ==",[m
[32m+[m[32m      "version": "4.1.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",[m
[32m+[m[32m      "dev": true,[m
       "license": "MIT",[m
       "dependencies": {[m
[31m-        "ansi-styles": "^3.2.1",[m
[31m-        "escape-string-regexp": "^1.0.5",[m
[31m-        "supports-color": "^5.3.0"[m
[32m+[m[32m        "ansi-styles": "^4.1.0",[m
[32m+[m[32m        "supports-color": "^7.1.0"[m
       },[m
       "engines": {[m
[31m-        "node": ">=4"[m
[31m-      }[m
[31m-    },[m
[31m-    "node_modules/chalk/node_modules/escape-string-regexp": {[m
[31m-      "version": "1.0.5",[m
[31m-      "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-1.0.5.tgz",[m
[31m-      "integrity": "sha512-vbRorB5FUQWvla16U8R/qgaFIya2qGzwDrNmCZuYKrbdSUMG6I1ZCGQRefkRVhuOkIGVne7BQ35DSfo1qvJqFg==",[m
[31m-      "license": "MIT",[m
[31m-      "engines": {[m
[31m-        "node": ">=0.8.0"[m
[32m+[m[32m        "node": ">=10"[m
[32m+[m[32m      },[m
[32m+[m[32m      "funding": {[m
[32m+[m[32m        "url": "https://github.com/chalk/chalk?sponsor=1"[m
       }[m
     },[m
     "node_modules/chokidar": {[m
[36m@@ -7313,14 +7210,11 @@[m
       }[m
     },[m
     "node_modules/chownr": {[m
[31m-      "version": "2.0.0",[m
[31m-      "resolved": "https://registry.npmjs.org/chownr/-/chownr-2.0.0.tgz",[m
[31m-      "integrity": "sha512-bIomtDF5KGpdogkLd9VspvFzk9KfpyyGlS8YFVZl7TGPBHL5snIOnxeshwVgPteQ9b4Eydl+pVbIyE1DcvCWgQ==",[m
[32m+[m[32m      "version": "1.1.4",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/chownr/-/chownr-1.1.4.tgz",[m
[32m+[m[32m      "integrity": "sha512-jJ0bqzaylmJtVnNgzTeSOs8DPavpbYgEr/b0YL8/2GO3xJEhInFmhKMUnEJQjZumK7KXGFhUy89PrsJWlakBVg==",[m
       "license": "ISC",[m
[31m-      "optional": true,[m
[31m-      "engines": {[m
[31m-        "node": ">=10"[m
[31m-      }[m
[32m+[m[32m      "optional": true[m
     },[m
     "node_modules/chrome-trace-event": {[m
       "version": "1.0.4",[m
[36m@@ -7361,8 +7255,7 @@[m
     "node_modules/client-only": {[m
       "version": "0.0.1",[m
       "resolved": "https://registry.npmjs.org/client-only/-/client-only-0.0.1.tgz",[m
[31m-      "integrity": "sha512-IV3Ou0jSMzZrd3pZ48nLkT9DA7Ag1pnPzaiQhpW7c3RbcqqzvzzVu+L8gfqMp/8IM2MQtSiqaCxrrcfu8I8rMA==",[m
[31m-      "license": "MIT"[m
[32m+[m[32m      "integrity": "sha512-IV3Ou0jSMzZrd3pZ48nLkT9DA7Ag1pnPzaiQhpW7c3RbcqqzvzzVu+L8gfqMp/8IM2MQtSiqaCxrrcfu8I8rMA=="[m
     },[m
     "node_modules/clone": {[m
       "version": "1.0.4",[m
[36m@@ -7425,18 +7318,21 @@[m
       }[m
     },[m
     "node_modules/color-convert": {[m
[31m-      "version": "1.9.3",[m
[31m-      "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-1.9.3.tgz",[m
[31m-      "integrity": "sha512-QfAUtd+vFdAtFQcC8CCyYt1fYWxSqAiK2cSD6zDB8N3cpsEBAvRxp9zOGg6G/SHHJYAT88/az/IuDGALsNVbGg==",[m
[32m+[m[32m      "version": "2.0.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",[m
       "license": "MIT",[m
       "dependencies": {[m
[31m-        "color-name": "1.1.3"[m
[32m+[m[32m        "color-name": "~1.1.4"[m
[32m+[m[32m      },[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=7.0.0"[m
       }[m
     },[m
     "node_modules/color-name": {[m
[31m-      "version": "1.1.3",[m
[31m-      "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.3.tgz",[m
[31m-      "integrity": "sha512-72fSenhMw2HZMTVHeCA9KCmpEIbzWiQsjN+BHcBbS9vr1mtt+vJjPdksIBNUmKAW8TFUDPJK5SUU3QhE9NEXDw==",[m
[32m+[m[32m      "version": "1.1.4",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",[m
[32m+[m[32m      "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",[m
       "license": "MIT"[m
     },[m
     "node_modules/color-string": {[m
[36m@@ -7449,34 +7345,6 @@[m
         "simple-swizzle": "^0.2.2"[m
       }[m
     },[m
[31m-    "node_modules/color-support": {[m
[31m-      "version": "1.1.3",[m
[31m-      "resolved": "https://registry.npmjs.org/color-support/-/color-support-1.1.3.tgz",[m
[31m-      "integrity": "sha512-qiBjkpbMLO/HL68y+lh4q0/O1MZFj2RX6X/KmMa3+gJD3z+WwI1ZzDHysvqHGS3mP6mznPckpXmw1nI9cJjyRg==",[m
[31m-      "license": "ISC",[m
[31m-      "optional": true,[m
[31m-      "bin": {[m
[31m-        "color-support": "bin.js"[m
[31m-      }[m
[31m-    },[m
[31m-    "node_modules/color/node_modules/color-convert": {[m
[31m-      "version": "2.0.1",[m
[31m-      "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",[m
[31m-      "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",[m
[31m-      "license": "MIT",[m
[31m-      "dependencies": {[m
[31m-        "color-name": "~1.1.4"[m
[31m-      },[m
[31m-      "engines": {[m
[31m-        "node": ">=7.0.0"[m
[31m-      }[m
[31m-    },[m
[31m-    "node_modules/color/node_modules/color-name": {[m
[31m-      "version": "1.1.4",[m
[31m-      "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",[m
[31m-      "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",[m
[31m-      "license": "MIT"[m
[31m-    },[m
     "node_modules/color2k": {[m
       "version": "2.0.3",[m
       "resolved": "https://registry.npmjs.org/color2k/-/color2k-2.0.3.tgz",[m
[36m@@ -7521,7 +7389,7 @@[m
       "version": "0.0.1",[m
       "resolved": "https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz",[m
       "integrity": "sha512-/Srv4dswyQNBfohGpz9o6Yb3Gz3SrUDqBH5rTuhGR7ahtlbYKnVxw2bCFMRljaA7EXHaXZ8wsHdodFvbkhKmqg==",[m
[31m-      "devOptional": true,[m
[32m+[m[32m      "dev": true,[m
       "license": "MIT"[m
     },[m
     "node_modules/config-chain": {[m
[36m@@ -7534,13 +7402,6 @@[m
         "proto-list": "~1.2.1"[m
       }[m
     },[m
[31m-    "node_modules/console-control-strings": {[m
[31m-      "version": "1.1.0",[m
[31m-      "resolved": "https://registry.npmjs.org/console-control-strings/-/console-control-strings-1.1.0.tgz",[m
[31m-      "integrity": "sha512-ty/fTekppD2fIwRvnZAVdeOiGd1c7YXEixbgJTNzqcxJWKQnjJ/V1bNEEE6hygpM3WjwHFUVK6HTjWSzV4a8sQ==",[m
[31m-      "license": "ISC",[m
[31m-      "optional": true[m
[31m-    },[m
     "node_modules/content-disposition": {[m
       "version": "0.5.4",[m
       "resolved": "https://registry.npmjs.org/content-disposition/-/content-disposition-0.5.4.tgz",[m
[36m@@ -7588,7 +7449,6 @@[m
       "resolved": "https://registry.npmjs.org/cors/-/cors-2.8.5.tgz",[m
       "integrity": "sha512-KIHbLJqu73RGr/hnbrO9uBeixNGuvSQjul/jdFvS/KFSIH1hWVd1ng7zOHx+YrEfInLG7q4n6GHQ9cDtxv/P6g==",[m
       "dev": true,[m
[31m-      "license": "MIT",[m
       "dependencies": {[m
         "object-assign": "^4",[m
         "vary": "^1"[m
[36m@@ -7614,9 +7474,9 @@[m
       }[m
     },[m
     "node_modules/cross-spawn": {[m
[31m-      "version": "7.0.3",[m
[31m-      "resolved": "https://registry.npmjs.org/cross-spawn/-/cross-spawn-7.0.3.tgz",[m
[31m-      "integrity": "sha512-iRDPJKUPVEND7dHPO8rkbOnPpyDygcDFtWjpeWNCgy8WP2rXcxXL8TskReQl6OrB2G7+UJrags1q15Fudc7G6w==",[m
[32m+[m[32m      "version": "7.0.5",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/cross-spawn/-/cross-spawn-7.0.5.tgz",[m
[32m+[m[32m      "integrity": "sha512-ZVJrKKYunU38/76t0RMOulHOnUcbU9GbpWKAOZ0mhjr7CX6FVrH+4FrAapSOekrgFQ3f/8gwMEuIft0aKq6Hug==",[m
       "license": "MIT",[m
       "dependencies": {[m
         "path-key": "^3.1.0",[m
[36m@@ -7759,6 +7619,16 @@[m
         "node": ">=8"[m
       }[m
     },[m
[32m+[m[32m    "node_modules/deep-extend": {[m
[32m+[m[32m      "version": "0.6.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/deep-extend/-/deep-extend-0.6.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-LOHxIOaPYdHlJRtCQfDIVZtfw/ufM8+rVj649RIHzcm/vGwQRXFt6OPqIFWsm2XEMrNIEtWR64sY1LEKD2vAOA==",[m
[32m+[m[32m      "license": "MIT",[m
[32m+[m[32m      "optional": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=4.0.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
     "node_modules/deep-is": {[m
       "version": "0.1.4",[m
       "resolved": "https://registry.npmjs.org/deep-is/-/deep-is-0.1.4.tgz",[m
[36m@@ -7832,13 +7702,6 @@[m
         "node": ">=0.4.0"[m
       }[m
     },[m
[31m-    "node_modules/delegates": {[m
[31m-      "version": "1.0.0",[m
[31m-      "resolved": "https://registry.npmjs.org/delegates/-/delegates-1.0.0.tgz",[m
[31m-      "integrity": "sha512-bd2L678uiWATM6m5Z1VzNCErI3jiGzt6HGY8OVICs40JQq/HALfbyNJmp0UDakEY4pMMaN0Ly5om/B1VI/+xfQ==",[m
[31m-      "license": "MIT",[m
[31m-      "optional": true[m
[31m-    },[m
     "node_modules/depd": {[m
       "version": "2.0.0",[m
       "resolved": "https://registry.npmjs.org/depd/-/depd-2.0.0.tgz",[m
[36m@@ -7990,6 +7853,7 @@[m
       "version": "16.4.5",[m
       "resolved": "https://registry.npmjs.org/dotenv/-/dotenv-16.4.5.tgz",[m
       "integrity": "sha512-ZmdL2rui+eB2YwhsWzjInR8LldtZHGDoQ1ugH85ppHKwpUHL7j7rN0Ti9NCnGiQbhaZ11FpR+7ao1dNsmduNUg==",[m
[32m+[m[32m      "license": "BSD-2-Clause",[m
       "engines": {[m
         "node": ">=12"[m
       },[m
[36m@@ -8052,9 +7916,9 @@[m
       "license": "MIT"[m
     },[m
     "node_modules/electron-to-chromium": {[m
[31m-      "version": "1.5.43",[m
[31m-      "resolved": "https://registry.npmjs.org/electron-to-chromium/-/electron-to-chromium-1.5.43.tgz",[m
[31m-      "integrity": "sha512-NxnmFBHDl5Sachd2P46O7UJiMaMHMLSofoIWVJq3mj8NJgG0umiSeljAVP9lGzjI0UDLJJ5jjoGjcrB8RSbjLQ==",[m
[32m+[m[32m      "version": "1.5.55",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/electron-to-chromium/-/electron-to-chromium-1.5.55.tgz",[m
[32m+[m[32m      "integrity": "sha512-6maZ2ASDOTBtjt9FhqYPRnbvKU5tjG0IN9SztUOWYw2AzNDNpKJYLJmlK0/En4Hs/aiWnB+JZ+gW19PIGszgKg==",[m
       "dev": true,[m
       "license": "ISC"[m
     },[m
[36m@@ -8073,19 +7937,28 @@[m
         "node": ">= 0.8"[m
       }[m
     },[m
[32m+[m[32m    "node_modules/end-of-stream": {[m
[32m+[m[32m      "version": "1.4.4",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/end-of-stream/-/end-of-stream-1.4.4.tgz",[m
[32m+[m[32m      "integrity": "sha512-+uw1inIHVPQoaVuHzRyXd21icM+cnt4CzD5rW+NC1wjOUSTOs+Te7FOv7AhN7vS9x/oIyhLP5PR1H+phQAHu5Q==",[m
[32m+[m[32m      "license": "MIT",[m
[32m+[m[32m      "optional": true,[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "once": "^1.4.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
     "node_modules/engine.io": {[m
[31m-      "version": "6.5.5",[m
[31m-      "resolved": "https://registry.npmjs.org/engine.io/-/engine.io-6.5.5.tgz",[m
[31m-      "integrity": "sha512-C5Pn8Wk+1vKBoHghJODM63yk8MvrO9EWZUfkAt5HAqIgPE4/8FF0PEGHXtEd40l223+cE5ABWuPzm38PHFXfMA==",[m
[32m+[m[32m      "version": "6.6.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/engine.io/-/engine.io-6.6.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-gmNvsYi9C8iErnZdVcJnvCpSKbWTt1E8+JZo8b+daLninywUWi5NQ5STSHZ9rFjFO7imNcvb8Pc5pe/wMR5xEw==",[m
       "dev": true,[m
[31m-      "license": "MIT",[m
       "dependencies": {[m
         "@types/cookie": "^0.4.1",[m
         "@types/cors": "^2.8.12",[m
         "@types/node": ">=10.0.0",[m
         "accepts": "~1.3.4",[m
         "base64id": "2.0.0",[m
[31m-        "cookie": "~0.4.1",[m
[32m+[m[32m        "cookie": "~0.7.2",[m
         "cors": "~2.8.5",[m
         "debug": "~4.3.1",[m
         "engine.io-parser": "~5.2.1",[m
[36m@@ -8100,7 +7973,6 @@[m
       "resolved": "https://registry.npmjs.org/engine.io-parser/-/engine.io-parser-5.2.3.tgz",[m
       "integrity": "sha512-HqD3yTBfnBxIrbnM1DoD6Pcq8NECnh8d4As1Qgh0z5Gg3jRRIqijury0CL3ghu/edArpUYiYqQiDUQBIs4np3Q==",[m
       "dev": true,[m
[31m-      "license": "MIT",[m
       "engines": {[m
         "node": ">=10.0.0"[m
       }[m
[36m@@ -8109,15 +7981,13 @@[m
       "version": "0.4.1",[m
       "resolved": "https://registry.npmjs.org/@types/cookie/-/cookie-0.4.1.tgz",[m
       "integrity": "sha512-XW/Aa8APYr6jSVVA1y/DEIZX0/GMKLEVekNG727R8cs56ahETkRAy/3DR7+fJyh7oUgGwNQaRfXCun0+KbWY7Q==",[m
[31m-      "dev": true,[m
[31m-      "license": "MIT"[m
[32m+[m[32m      "dev": true[m
     },[m
     "node_modules/engine.io/node_modules/cookie": {[m
[31m-      "version": "0.4.2",[m
[31m-      "resolved": "https://registry.npmjs.org/cookie/-/cookie-0.4.2.tgz",[m
[31m-      "integrity": "sha512-aSWTXFzaKWkvHO1Ny/s+ePFpvKsPnjc551iI41v3ny/ow6tBG5Vd+FuqGNhh1LxOmVzOlGUriIlOaokOvhaStA==",[m
[32m+[m[32m      "version": "0.7.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/cookie/-/cookie-0.7.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-yki5XnKuf750l50uGTllt6kKILY4nQ1eNIQatoXEByZ5dWgnKqbnqmTrBE5B4N7lrMJKQ2ytWMiTO2o0v6Ew/w==",[m
       "dev": true,[m
[31m-      "license": "MIT",[m
       "engines": {[m
         "node": ">= 0.6"[m
       }[m
[36m@@ -8253,9 +8123,9 @@[m
       }[m
     },[m
     "node_modules/es-iterator-helpers": {[m
[31m-      "version": "1.1.0",[m
[31m-      "resolved": "https://registry.npmjs.org/es-iterator-helpers/-/es-iterator-helpers-1.1.0.tgz",[m
[31m-      "integrity": "sha512-/SurEfycdyssORP/E+bj4sEu1CWw4EmLDsHynHwSXQ7utgbrMRWW195pTrCjFgFCddf/UkYm3oqKPRq5i8bJbw==",[m
[32m+[m[32m      "version": "1.2.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/es-iterator-helpers/-/es-iterator-helpers-1.2.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-tpxqxncxnpw3c93u8n3VOzACmRFoVmWJqbWXvX/JfKbkhBw1oslgPrUfeSt2psuqyEJFD6N/9lg5i7bsKpoq+Q==",[m
       "dev": true,[m
       "license": "MIT",[m
       "dependencies": {[m
[36m@@ -8267,6 +8137,7 @@[m
         "function-bind": "^1.1.2",[m
         "get-intrinsic": "^1.2.4",[m
         "globalthis": "^1.0.4",[m
[32m+[m[32m        "gopd": "^1.0.1",[m
         "has-property-descriptors": "^1.0.2",[m
         "has-proto": "^1.0.3",[m
         "has-symbols": "^1.0.3",[m
[36m@@ -8646,9 +8517,9 @@[m
       }[m
     },[m
     "node_modules/eslint-plugin-jsx-a11y": {[m
[31m-      "version": "6.10.1",[m
[31m-      "resolved": "https://registry.npmjs.org/eslint-plugin-jsx-a11y/-/eslint-plugin-jsx-a11y-6.10.1.tgz",[m
[31m-      "integrity": "sha512-zHByM9WTUMnfsDTafGXRiqxp6lFtNoSOWBY6FonVRn3A+BUwN1L/tdBXT40BcBJi0cZjOGTXZ0eD/rTG9fEJ0g==",[m
[32m+[m[32m      "version": "6.10.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/eslint-plugin-jsx-a11y/-/eslint-plugin-jsx-a11y-6.10.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-scB3nz4WmG75pV8+3eRUQOHZlNSUhFNq37xnpgRkCCELU3XMvXAxLk1eqWWyE22Ki4Q01Fnsw9BA3cJHDPgn2Q==",[m
       "dev": true,[m
       "license": "MIT",[m
       "dependencies": {[m
[36m@@ -8660,7 +8531,6 @@[m
         "axobject-query": "^4.1.0",[m
         "damerau-levenshtein": "^1.0.8",[m
         "emoji-regex": "^9.2.2",[m
[31m-        "es-iterator-helpers": "^1.1.0",[m
         "hasown": "^2.0.2",[m
         "jsx-ast-utils": "^3.3.5",[m
         "language-tags": "^1.0.9",[m
[36m@@ -8793,59 +8663,6 @@[m
         "url": "https://opencollective.com/eslint"[m
       }[m
     },[m
[31m-    "node_modules/eslint/node_modules/ansi-styles": {[m
[31m-      "version": "4.3.0",[m
[31m-      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",[m
[31m-      "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",[m
[31m-      "dev": true,[m
[31m-      "license": "MIT",[m
[31m-      "dependencies": {[m
[31m-        "color-convert": "^2.0.1"[m
[31m-      },[m
[31m-      "engines": {[m
[31m-        "node": ">=8"[m
[31m-      },[m
[31m-      "funding": {[m
[31m-        "url": "https://github.com/chalk/ansi-styles?sponsor=1"[m
[31m-      }[m
[31m-    },[m
[31m-    "node_modules/eslint/node_modules/chalk": {[m
[31m-      "version": "4.1.2",[m
[31m-      "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",[m
[31m-      "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",[m
[31m-      "dev": true,[m
[31m-      "license": "MIT",[m
[31m-      "dependencies": {[m
[31m-        "ansi-styles": "^4.1.0",[m
[31m-        "supports-color": "^7.1.0"[m
[31m-      },[m
[31m-      "engines": {[m
[31m-        "node": ">=10"[m
[31m-      },[m
[31m-      "funding": {[m
[31m-        "url": "https://github.com/chalk/chalk?sponsor=1"[m
[31m-      }[m
[31m-    },[m
[31m-    "node_modules/eslint/node_modules/color-convert": {[m
[31m-      "version": "2.0.1",[m
[31m-      "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",[m
[31m-      "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",[m
[31m-      "dev": true,[m
[31m-      "license": "MIT",[m
[31m-      "dependencies": {[m
[31m-        "color-name": "~1.1.4"[m
[31m-      },[m
[31m-      "engines": {[m
[31m-        "node": ">=7.0.0"[m
[31m-      }[m
[31m-    },[m
[31m-    "node_modules/eslint/node_modules/color-name": {[m
[31m-      "version": "1.1.4",[m
[31m-      "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",[m
[31m-      "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",[m
[31m-      "dev": true,[m
[31m-      "license": "MIT"[m
[31m-    },[m
     "node_modules/eslint/node_modules/globals": {[m
       "version": "13.24.0",[m
       "resolved": "https://registry.npmjs.org/globals/-/globals-13.24.0.tgz",[m
[36m@@ -8862,29 +8679,6 @@[m
         "url": "https://github.com/sponsors/sindresorhus"[m
       }[m
     },[m
[31m-    "node_modules/eslint/node_modules/has-flag": {[m
[31m-      "version": "4.0.0",[m
[31m-      "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",[m
[31m-      "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",[m
[31m-      "dev": true,[m
[31m-      "license": "MIT",[m
[31m-      "engines": {[m
[31m-        "node": ">=8"[m
[31m-      }[m
[31m-    },[m
[31m-    "node_modules/eslint/node_modules/supports-color": {[m
[31m-      "version": "7.2.0",[m
[31m-      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",[m
[31m-      "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",[m
[31m-      "dev": true,[m
[31m-      "license": "MIT",[m
[31m-      "dependencies": {[m
[31m-        "has-flag": "^4.0.0"[m
[31m-      },[m
[31m-      "engines": {[m
[31m-        "node": ">=8"[m
[31m-      }[m
[31m-    },[m
     "node_modules/espree": {[m
       "version": "9.6.1",[m
       "resolved": "https://registry.npmjs.org/espree/-/espree-9.6.1.tgz",[m
[36m@@ -9020,6 +8814,16 @@[m
         "node": ">=0.8.x"[m
       }[m
     },[m
[32m+[m[32m    "node_modules/expand-template": {[m
[32m+[m[32m      "version": "2.0.3",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/expand-template/-/expand-template-2.0.3.tgz",[m
[32m+[m[32m      "integrity": "sha512-XYfuKMvj4O35f/pOXLObndIRvyQ+/+6AhODh+OKWj9S9498pHHn/IMszH+gt0fBCRWMNfk1ZSp5x3AifmnI2vg==",[m
[32m+[m[32m      "license": "(MIT OR WTFPL)",[m
[32m+[m[32m      "optional": true,[m
[32m+[m[32m      "engines": {[m
[32m+[m[32m        "node": ">=6"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
     "node_modules/express": {[m
       "version": "4.21.1",[m
       "resolved": "https://registry.npmjs.org/express/-/express-4.21.1.tgz",[m
[36m@@ -9350,9 +9154,9 @@[m
       }[m
     },[m
     "node_modules/framer-motion": {[m
[31m-      "version": "11.11.9",[m
[31m-      "resolved": "https://registry.npmjs.org/framer-motion/-/framer-motion-11.11.9.tgz",[m
[31m-      "integrity": "sha512-XpdZseuCrZehdHGuW22zZt3SF5g6AHJHJi7JwQIigOznW4Jg1n0oGPMJQheMaKLC+0rp5gxUKMRYI6ytd3q4RQ==",[m
[32m+[m[32m      "