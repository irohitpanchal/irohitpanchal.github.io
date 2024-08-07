"use strict";
exports.id = 374;
exports.ids = [374];
exports.modules = {

/***/ 62374:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  POST: () => (/* binding */ POST)
});

;// CONCATENATED MODULE: ./src/config/postmark.js
var postmark = __webpack_require__(98659);
// Send an email:
var client = new postmark.ServerClient("186b0da5-4944-4786-b234-cdd33863f7ea");
/* harmony default export */ const config_postmark = (client);

;// CONCATENATED MODULE: ./src/app/api/contact/route.ts

async function POST(request) {
    const body = await request.json();
    try {
        await config_postmark.sendEmail({
            From: process.env.EMAIL_FROM,
            To: process.env.EMAIL_TO,
            Subject: "Porfolio Contact Form",
            HtmlBody: `
        <h1>Portfolio Contact Form</h1>
        <p><strong>Name:</strong> ${body.person_name}</p>
        <p><strong>Company:</strong> ${body.company}</p>
        <p><strong>Message:</strong> ${body.message}</p>
      `,
            ReplyTo: body.email
        });
        return new Response("ok", {
            status: 200
        });
    } catch (e) {
        return new Response("error", {
            status: 500
        });
    }
}


/***/ })

};
;