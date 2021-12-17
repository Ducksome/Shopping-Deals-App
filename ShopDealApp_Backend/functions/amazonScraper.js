const axios = require("axios");
const cheerio = require("cheerio");
const puppeteer = require("puppeteer")

const fetchProducts = async (searchTerm) => {
   try {
    //    selectors for the searchBox and nextButton for puppeteer
    //    const selectors = {
    //        searchBox: '#twotabsearchtextbox',
    //        nextButton: '[class="a-last"]'
    //    }

    //    get dynamic url value using puppeteer
    //    const browser = await puppeteer.launch({headless: false});
    //    const page = await browser.newPage();
    //    await page.goto('https://www.amazon.com/');
    //    await page.type(selectors.searchBox, `${searchTerm}`);
    //    await page.keyboard.press('Enter')
    //    const url = await page.url()

       const url = `https://www.amazon.com/s?k=${searchTerm}&ref=nb_sb_noss_2`

       const response = await axios.get(url);

       const html = response.data;

       const $ = cheerio.load(html);

       const products = [];
// filtering by elements in html for prices and titles, etc.
 $('div.s-result-item.s-asin').each((_idx, el) => {
           const elements = $(el)
           const title = elements.find('span.a-size-medium.a-color-base.a-text-normal').text()

           const image = elements.find('img.s-image').attr('src')

           const link = elements.find('a.a-link-normal.a-text-normal').attr('href')
           
           const reviews = elements.find('div.a-section.a-spacing-none.a-spacing-top-micro > div.a-row.a-size-small').children('span').last().attr('aria-label')
           
           const stars = elements.find('div.a-section.a-spacing-none.a-spacing-top-micro > div > span').attr('aria-label')
           
           const price = elements.find('span.a-price > span > span.a-price-whole').text().concat(elements.find('span.a-price > span > span.a-price-fraction').text());
           
           
               let element = {
                   title,
                   image,
                   link: `https://amazon.com${link}`,
                   price,
               }
           
               if (reviews) {
                   element.reviews = reviews
               }
           
               if (stars) {
                   element.stars = stars
               }

           products.push(element)
       });

       return products;
   } catch (error) {
       throw error;
   }
};

module.exports = fetchProducts;

