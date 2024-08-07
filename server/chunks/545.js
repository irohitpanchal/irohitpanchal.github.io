"use strict";
exports.id = 545;
exports.ids = [545];
exports.modules = {

/***/ 17545:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appData: () => (/* binding */ appData),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   metadata: () => (/* binding */ metadata),
/* harmony export */   sections: () => (/* binding */ sections),
/* harmony export */   technologies: () => (/* binding */ technologies)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_mdx_import_source_file__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(69915);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44759);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14178);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_projects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19057);
/* harmony import */ var _app_apps_wrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(42267);
/*@jsxRuntime automatic @jsxImportSource react*/ 




const appData = {
    industry: "Real Estate",
    title: "Realtor Simplified",
    description: "Realtor Simplified is a saas platform that allows you to deploy a real estate website from a selection of templates within minutes.",
    image: _public_projects__WEBPACK_IMPORTED_MODULE_4__/* .realtorSimplified */ .Ed,
    date: "2023-01",
    service: "Saas application",
    url: "https://www.realtorsimplified.com/",
    pathname: "/apps/realtor-simplified",
    framework: "next"
};
const sections = [
    {
        index: 0,
        title: "About",
        id: "about"
    },
    {
        index: 1,
        title: "Challenge",
        id: "challenge"
    },
    {
        index: 2,
        title: "Solution",
        id: "solution"
    },
    {
        index: 3,
        title: "Technologies",
        id: "technologies"
    }
];
const metadata = {
    title: `${appData.title}`,
    description: appData.description
};
const technologies = [
    {
        name: "HTML5",
        image: "/logos/html5-logo.png"
    },
    {
        name: "CSS3",
        image: "/logos/css-logo.png"
    },
    {
        name: "JavaScript",
        image: "/logos/js-logo.png"
    },
    {
        name: "ReactJS",
        image: "/logos/react-logo.png"
    },
    {
        name: "NextJS",
        image: "/logos/nextjs-logo.png"
    },
    {
        name: "TailwindCSS",
        image: "/logos/tailwindcss-logo.jpg"
    },
    {
        name: "NodeJS",
        image: "/logos/nodejs-logo.png"
    },
    {
        name: "ExpressJS",
        image: "/logos/express-logo.png"
    },
    {
        name: "MongoDB",
        image: "/logos/mongodb-logo.webp"
    },
    {
        name: "Stripe",
        image: "/logos/stripe-logo.png"
    },
    {
        name: "DigitalOcean",
        image: "/logos/digital-ocean-logo.svg"
    },
    {
        name: "Git",
        image: "/logos/git-logo.png"
    },
    {
        name: "Github",
        image: "/logos/github-logo.webp"
    },
    {
        name: "Docker",
        image: "/logos/docker-logo.png"
    },
    {
        name: "Postmark",
        image: "/logos/postmark-logo.png"
    }
];

const MDXLayout = function Layout(props) {
    return react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_app_apps_wrapper__WEBPACK_IMPORTED_MODULE_5__["default"], Object.assign({}, props, {
        appData: appData
    }));
};
function _createMdxContent(props) {
    const _components = Object.assign({
        h2: "h2",
        p: "p",
        ol: "ol",
        li: "li",
        ul: "ul",
        div: "div",
        h4: "h4"
    }, (0,next_mdx_import_source_file__WEBPACK_IMPORTED_MODULE_1__/* .useMDXComponents */ .a)(), props.components);
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components__WEBPACK_IMPORTED_MODULE_2__/* .Container */ .W2, {
        children: [
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_2__/* .Border */ .OC, {
                className: "my-8"
            }),
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components__WEBPACK_IMPORTED_MODULE_2__/* .Section */ .$0, {
                id: "challenge",
                children: [
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                        id: "challenge",
                        children: "Challenge"
                    }),
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                        children: "Design & Develop a platform that desploys a premade template within minutes. This application needs to have multiple services coupled together:"
                    }),
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
                        children: [
                            "\n",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                                children: "Dedicated static image hosting service, Digital Ocean Spaces (S3 wrapper)."
                            }),
                            "\n",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                                children: "Dedicated mongodb database from Digital Ocean."
                            }),
                            "\n",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                                children: "Mapbox api key for their tiles service."
                            }),
                            "\n",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                                children: "Dedicated application hosting for a NextJS app in Digital Ocean's App Platform."
                            }),
                            "\n"
                        ]
                    }),
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                        children: [
                            "\n",
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                                children: [
                                    "\n",
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                        children: "All of this resources need to be provisioned automatically, and coupled together without any human interaction."
                                    }),
                                    "\n"
                                ]
                            }),
                            "\n",
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                                children: [
                                    "\n",
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                        children: "User should be able to manage Admin users and access to the app's dashboard."
                                    }),
                                    "\n"
                                ]
                            }),
                            "\n",
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                                children: [
                                    "\n",
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                        children: "User should be able to assign a custom domain for the application."
                                    }),
                                    "\n"
                                ]
                            }),
                            "\n",
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                                children: [
                                    "\n",
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                        children: "Admin users, should be able to modify the static content of the website as well as dynamic content, such as property listings, realtors, images, etc."
                                    }),
                                    "\n"
                                ]
                            }),
                            "\n"
                        ]
                    })
                ]
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_2__/* .Border */ .OC, {
                className: "my-8"
            }),
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components__WEBPACK_IMPORTED_MODULE_2__/* .Section */ .$0, {
                id: "solution",
                children: [
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                        id: "solution",
                        children: "Solution"
                    }),
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components__WEBPACK_IMPORTED_MODULE_2__/* .AppSolution */ .oD, {
                        image: "realtor-simplified.png",
                        href: appData.url,
                        children: [
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                children: "Realtor Simplified Saas is split in 3 different systems. Each of this systems is hosted in their own server and they communicate through apis."
                            }),
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                children: "The first system 'Shop' is a NextJs application that faces the user. It is where a user can register, manage their subscription, and choose which template to deploy.\nOnce a template is deployed this is also where that user is able to change the template, add admin users that can access the application dasboard's and where they can add\na custom domain for the application."
                            }),
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                children: "The second system 'Server' is a small express server that serves as a connection between the 'Shop' and the 'Worker' system. It's job is to recieve orders from the 'Shop'\nand initialize any of the 3 job sequences available:"
                            }),
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                role: "list",
                                className: "mt-6 space-y-8",
                                children: [
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                                                children: [
                                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                        className: "font-semibold text-blue-100",
                                                        children: "Initial Deployment (user triggered):"
                                                    }),
                                                    " This sequence is executed when a newly subscribed user deploys an application for the first time.\nThe necessary resources previously mentioned will be provisioned from digital ocean."
                                                ]
                                            })
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                                                children: [
                                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                        className: "font-semibold text-blue-100",
                                                        children: "Redeployment (user triggered)"
                                                    }),
                                                    " This sequence is executed when a subscribed user with an active application wants to change the selected\ntemplate, or when they want to change the domain name of the application. Adding or deleting admin users can be achieved without redeploying."
                                                ]
                                            })
                                        })
                                    }),
                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                                                children: [
                                                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                                        className: "font-semibold text-blue-100",
                                                        children: "Delete Application (system triggered)"
                                                    }),
                                                    " Whenever a user deletes their subscription the system will start a delete sequence that will delete\nall of their resources."
                                                ]
                                            })
                                        })
                                    })
                                ]
                            }),
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                                children: "The last system 'Worker' is a series of redis queues that execute in sequence depending on which queue they start at. It is important to note, that job error handling and job initialization is only done\nby the 'Server' this is why the 'Worker' needs to notify the 'Server' whenever a job is finished correctly or incorrectly."
                            })
                        ]
                    })
                ]
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_2__/* .Border */ .OC, {
                className: "my-8"
            }),
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components__WEBPACK_IMPORTED_MODULE_2__/* .Section */ .$0, {
                id: "technologies",
                children: [
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                        id: "technologies",
                        children: "Technologies"
                    }),
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_2__/* .FadeInStagger */ .o$, {
                        className: "flex gap-4 mt-6 flex-wrap",
                        faster: true,
                        once: true,
                        children: technologies.map((tech)=>react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_2__/* .FadeIn */ .Uo, {
                                children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.div, {
                                    className: "mt-auto",
                                    children: [
                                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                            src: tech.image,
                                            className: "object-contain rounded-md m-auto",
                                            alt: "",
                                            height: 64,
                                            width: 64,
                                            style: {
                                                width: 64,
                                                height: 64
                                            }
                                        }),
                                        react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h4, {
                                            className: "text-sm font-semibold tracking-tight text-[#525df3] text-center bg-white rounded-full w-min px-2 m-2 mx-auto",
                                            children: tech.name
                                        })
                                    ]
                                })
                            }, tech.name))
                    })
                ]
            })
        ]
    });
}
function MDXContent(props = {}) {
    return react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MDXLayout, Object.assign({}, props, {
        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_createMdxContent, props)
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MDXContent);


/***/ })

};
;