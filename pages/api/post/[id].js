import puppeteer from 'puppeteer';
//import { getData } from '../../../lib/helpers';

//const runPuppeteer = async (url) => {
//    const browser = await puppeteer.launch();
//    const page = await browser.newPage();
//    await page.goto(url);
//
//    console.log(await page.content());
//
//    await browser.close();
//};

export default async function postHandler(req, res) {
    const {
        query: { post, id },
        method,
    } = req;

    switch (method) {
        case 'POST': {
            fetch(`http://localhost:3000/post/${id}`)
                .then((html) => {
                    html.text()
                        .then((text) => {
                            console.log(text);
                        });
                });

            //console.log(response.then((html) => html));

            res.status(200)
                .json({
                    status: 'success',
                });

            break;
        }
        case 'PUT': {
            res.status(200)
                .json({
                    post,
                    id,
                });
            break;
        }
        default: {
            res.setHeader('Allow', ['GET', 'POST', 'PUT']);
            res.status(405)
                .end(`Method ${method} Not Allowed`);
        }
    }
}
