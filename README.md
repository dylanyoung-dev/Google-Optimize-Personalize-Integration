[![Deploy to Sitecore Personalize](https://img.shields.io/badge/deploy-personalize-red?style=for-the-badge&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABOvAAATrwFj5o7DAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAA1xJREFUWIXFl81rnEUcxz+/mSfbp0ua1MSkrrbJbiIGRepN0FPxFNsqUrxUvEihF8smYQWPMX9Au0tDCXgoUhBFfEGLoIJUJCLqSQ9RpPXZmCwEszFpic3bM894sKT78uzuk93EfGEPz8x35vuZeWbm2RFrLfspta/pgNNMo5mJidjRjo72DoCxsb//F4CNS5ceM0q9CryS7OwcBLgLG3Fw9xTgTjbbpWFclHod0BXVB1oJbwiwmsudcEQ+ArpaDaqlmotwLZc7q+DLvQyvCbB2+fKzFt4BYnsZDiGv4G4ulwA+bhAeYO1vVuSrXQcA3gKO1PD7Fq5oY7JuJjPbajiAlJ6EG9nso0ZkBmgL8S4rpV500+lpgJWBgX7fmOMA2nF+fuDWrT+bASibAaPUa1gbFu4rkZfcdHp6eXCwzxgzBTyPiAAYY4JiMvmFGHO+e26usBOA8kVo7ekavil3ZOTbe+HfAScBqejnpNX6p2Jf38PNAUxOHgCOh5qMuQhggmASOFqnvwRaTzUFsGLMwRqeX91MZnbp2LFH6szQfVl7aiezsA0Qg3AAaz0A4zhPEu3rqdV/3ki6vwg3N4VYyNYX+QdAgqADker6EFljAoBif38WkRHK14vfZm1v5+zsMpSMyGi9GZW6gYzf1vYLACKnK8IBHKvU9t7fBphbXb0DtP73yNoPj9y8+VdxYGAIGAxzHM7nV6sAnhgf3xT4vcX4P6xSowAEQYbq0QPMYK1fBQCAyCdNBhvgfeM4z/R43sJiKjUMnAszWniv9LnsJBSt37a+/0ZleT1ZOOdvbX2WKBSKAIup1LBY+wHhO2bLiLxbWlBmci9c8IBrUcMBevL5q4lCobiUTD6+lExeFWs/Bw6F09orD3levrSoaqTGmDe11i8APVEAisnk10Dq3q+eFhylJioLq6bpUCZTVEqdAaJuy+cihK8pOHPY81YaAgC46fQ01r4MbESEqKd1ETnblc9/H1ZZ82iNj41dD2AYWGghfF5ETnR73qe1DHXP9vbR0W/it2+PAigRs4PgdeBizJinuj3vh3pGiXo3XOztbSceHwFOCTxN9R0hsPAjcF37/rWu+fn5KP1GBihvJU5xaOigb4wL4Gi9/mAiscaNG36jprsDsIva99vxvzyjJB7hJ/cCAAAAAElFTkSuQmCC)](https://github.com/dylanyoung-dev/sitecore-cdp-serializer)

# Sitecore Personalize to Google Analytics Optimization Integration Example
This is the code used in my Sitecore Personalize integration with Google Analytics Optimization, which is a third party integration for the Google Optimize Sunsetting initiative.

## Getting Started

If you want to get started quickly, you have a couple of options.  You are welcome to review the code in this repository to get a better understanding of what's needed to support the GA4 Analytics tracking requirements.  If you would like to see this in action and you have a Sitecore Personalize tenant, there are two options, either use the "Deploy to Personalize" button above which will send you to a tool to automatically deploy the artifacts folder or you can run the following command using Node/NPM:

```bash
npx sitecore-cdp-serializer@latest deploy repository 

```

## The implementation

We have created a Web Experience Template that can be used either as the basis for other Experience templates or that can be used on it's own (currently a Popover).  In order to use on your website, you will need to already have Google Analytics 4 installed on your website.  If you do not have this installed, you can follow the instructions here: https://developers.google.com/analytics/devguides/collection/ga4/tag-guide.  You will also either need the 

## Why is this needed?

Recently Google announced the sunsetting of Google Optimize, which was Google's own optimization tool. This tool was used to run A/B tests and multivariate tests on your website. Google has decided to sunset this tool and instead focus on Google Analytics 4 and Google Analytics Optimization. This is a great move for Google, but it leaves customers of Google Optimize in a bit of a bind. 

With the sunsetting that is slated to occur on September 30, 2023, customers need to BYOET (Bring Your Own Experimentation Tool), which is where this repository comes in, to showcase how you can integrate Sitecore Personalize with Google Analytics Optimization 3rd Party tooling.  With Sitecore Personalize you get a fantastic replacement for Google Optimize with advanced capabilities that were never present in the Google Optimize tool, plus it's now super easy to integrate with Google Analytics Optimization.

Learn more about the sunsetting of Google Optimize here: https://support.google.com/optimize/answer/10253163
Learn more about the documentation surrounding what is needed for this integration here: https://developers.google.com/analytics/devguides/collection/ga4/integration
Learn more about Personalize here: https://www.sitecore.com/products/sitecore-personalize