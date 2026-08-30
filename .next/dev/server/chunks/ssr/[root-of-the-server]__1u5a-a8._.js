module.exports = [
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/dns [external] (dns, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("dns", () => require("dns"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/http2 [external] (http2, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("http2", () => require("http2"));

module.exports = mod;
}),
"[externals]/net [external] (net, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("net", () => require("net"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/process [external] (process, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("process", () => require("process"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/tls [external] (tls, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("tls", () => require("tls"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[project]/src/app/booking/[resourceId]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BookingPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.mjs [app-rsc] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/lib/firestore.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$slots$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/slots.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$booking$2f$BookingClient$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/booking/BookingClient.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
async function BookingPage({ params }) {
    const { resourceId } = await params;
    console.log("BOOKING RESOURCE ID:", resourceId);
    const resource = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getResource"])(resourceId);
    console.log("BOOKING RESOURCE:", resource);
    if (!resource) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "mx-auto max-w-7xl px-4 py-10",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-2xl font-bold text-red-600",
                    children: "Resource not found"
                }, void 0, false, {
                    fileName: "[project]/src/app/booking/[resourceId]/page.tsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-2 text-sm text-muted",
                    children: [
                        "Resource ID: ",
                        resourceId
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/booking/[resourceId]/page.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/booking/[resourceId]/page.tsx",
            lineNumber: 31,
            columnNumber: 7
        }, this);
    }
    const venue = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getVenue"])(resource.venueId);
    console.log("BOOKING VENUE:", venue);
    if (!venue) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "mx-auto max-w-7xl px-4 py-10",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-2xl font-bold text-red-600",
                    children: "Venue not found"
                }, void 0, false, {
                    fileName: "[project]/src/app/booking/[resourceId]/page.tsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-2 text-sm text-muted",
                    children: [
                        "Resource: ",
                        resource.name
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/booking/[resourceId]/page.tsx",
                    lineNumber: 54,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-1 text-sm text-muted",
                    children: [
                        "Venue ID: ",
                        resource.venueId
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/booking/[resourceId]/page.tsx",
                    lineNumber: 58,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/booking/[resourceId]/page.tsx",
            lineNumber: 49,
            columnNumber: 7
        }, this);
    }
    const today = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["todayKey"])();
    const [booked, reserved, disabled] = await Promise.all([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getBookedSlotIds"])(resource.id, today),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getReservedSlotIds"])(resource.id, today),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firestore$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getDisabledSlotMap"])(resource.id, today)
    ]);
    const slots = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$slots$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateSlotsForDate"])({
        resource,
        date: today,
        bookedSlotIds: booked,
        reservedSlotIds: reserved,
        disabledSlotIds: disabled
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "mx-auto  px-4 py-10 sm:px-6 lg:px-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                href: `/sports/${resource.category}`,
                className: "mb-6 inline-flex items-center gap-1 text-sm font-medium text-muted hover:text-primary",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                        className: "h-4 w-4"
                    }, void 0, false, {
                        fileName: "[project]/src/app/booking/[resourceId]/page.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this),
                    "Back to ",
                    resource.category
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/booking/[resourceId]/page.tsx",
                lineNumber: 84,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-3xl font-bold text-ink",
                        children: resource.name
                    }, void 0, false, {
                        fileName: "[project]/src/app/booking/[resourceId]/page.tsx",
                        lineNumber: 93,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1 text-sm text-muted",
                        children: venue.location
                    }, void 0, false, {
                        fileName: "[project]/src/app/booking/[resourceId]/page.tsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2 text-sm text-muted",
                        children: [
                            "₹",
                            resource.pricePerSlot,
                            " / ",
                            resource.slotDuration,
                            " minutes"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/booking/[resourceId]/page.tsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/booking/[resourceId]/page.tsx",
                lineNumber: 92,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$booking$2f$BookingClient$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BookingClient"], {
                resource: resource,
                venue: venue,
                initialDate: today,
                initialSlots: slots
            }, void 0, false, {
                fileName: "[project]/src/app/booking/[resourceId]/page.tsx",
                lineNumber: 106,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/booking/[resourceId]/page.tsx",
        lineNumber: 82,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/booking/[resourceId]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/booking/[resourceId]/page.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/app/favicon.ico (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/favicon.2vob68tjqpejf.ico" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/app/favicon.ico (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 256,
    height: 256
};
}),
"[project]/src/components/booking/BookingClient.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BookingClient",
    ()=>BookingClient
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const BookingClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call BookingClient() from the server but BookingClient is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/booking/BookingClient.tsx", "BookingClient");
}),
"[project]/src/components/booking/BookingClient.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BookingClient",
    ()=>BookingClient
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const BookingClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call BookingClient() from the server but BookingClient is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/booking/BookingClient.tsx <module evaluation>", "BookingClient");
}),
"[project]/src/components/booking/BookingClient.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$booking$2f$BookingClient$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/booking/BookingClient.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$booking$2f$BookingClient$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/booking/BookingClient.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$booking$2f$BookingClient$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/lib/firebase.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "app",
    ()=>app,
    "auth",
    ()=>auth,
    "db",
    ()=>db,
    "isFirebaseConfigured",
    ()=>isFirebaseConfigured
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$app$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/app/dist/index.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@firebase/app/dist/esm/index.esm.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$auth$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/auth/dist/index.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$totp$2d$C24pd8aS$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__D__as__getAuth$3e$__ = __turbopack_context__.i("[project]/node_modules/@firebase/auth/dist/node-esm/totp-C24pd8aS.js [app-rsc] (ecmascript) <export D as getAuth>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/index.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$common$2d$DjihRWhV$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__b7__as__getFirestore$3e$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/common-DjihRWhV.node.mjs [app-rsc] (ecmascript) <export b7 as getFirestore>");
;
;
;
const firebaseConfig = {
    apiKey: ("TURBOPACK compile-time value", "AIzaSyCx9B7Hl89UfhYAvg23WAOiKkgRht9s1pc"),
    authDomain: ("TURBOPACK compile-time value", "playzo-booking.firebaseapp.com"),
    projectId: ("TURBOPACK compile-time value", "playzo-booking"),
    storageBucket: ("TURBOPACK compile-time value", "playzo-booking.firebasestorage.app"),
    messagingSenderId: ("TURBOPACK compile-time value", "662011719207"),
    appId: ("TURBOPACK compile-time value", "1:662011719207:web:9074a353cfeb48f18aa802")
};
const isFirebaseConfigured = Boolean(firebaseConfig.apiKey && firebaseConfig.authDomain && firebaseConfig.projectId && firebaseConfig.appId);
let app;
let auth;
let db;
if (isFirebaseConfigured) {
    app = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getApps"])().length ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getApps"])()[0] : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$app$2f$dist$2f$esm$2f$index$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["initializeApp"])(firebaseConfig);
    auth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$auth$2f$dist$2f$node$2d$esm$2f$totp$2d$C24pd8aS$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__D__as__getAuth$3e$__["getAuth"])(app);
    db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$common$2d$DjihRWhV$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__b7__as__getFirestore$3e$__["getFirestore"])(app);
}
;
}),
"[project]/src/lib/firestore.ts [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RESERVATION_HOLD_MS",
    ()=>RESERVATION_HOLD_MS,
    "blockSlots",
    ()=>blockSlots,
    "confirmBooking",
    ()=>confirmBooking,
    "createReservation",
    ()=>createReservation,
    "getAllBookings",
    ()=>getAllBookings,
    "getBookedSlotIds",
    ()=>getBookedSlotIds,
    "getBooking",
    ()=>getBooking,
    "getDisabledSlotMap",
    ()=>getDisabledSlotMap,
    "getReservedSlotIds",
    ()=>getReservedSlotIds,
    "getResource",
    ()=>getResource,
    "getResources",
    ()=>getResources,
    "getResourcesByCategory",
    ()=>getResourcesByCategory,
    "getUserBookings",
    ()=>getUserBookings,
    "getVenue",
    ()=>getVenue,
    "getVenues",
    ()=>getVenues,
    "releaseReservation",
    ()=>releaseReservation,
    "updateBookingStatus",
    ()=>updateBookingStatus,
    "upsertResource",
    ()=>upsertResource,
    "upsertVenue",
    ()=>upsertVenue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$firebase$2f$firestore$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/firebase/firestore/dist/index.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$common$2d$DjihRWhV$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__a___as__collection$3e$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/common-DjihRWhV.node.mjs [app-rsc] (ecmascript) <export a_ as collection>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$common$2d$DjihRWhV$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__doc$3e$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/common-DjihRWhV.node.mjs [app-rsc] (ecmascript) <export t as doc>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/index.node.mjs [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$common$2d$DjihRWhV$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__bd__as__serverTimestamp$3e$__ = __turbopack_context__.i("[project]/node_modules/@firebase/firestore/dist/common-DjihRWhV.node.mjs [app-rsc] (ecmascript) <export bd as serverTimestamp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/firebase.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockStore$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/mockStore.ts [app-rsc] (ecmascript)");
;
;
;
;
async function getVenues() {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isFirebaseConfigured"] || !__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"]) return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockStore$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mockGetVenues"]();
    const snap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getDocs"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$common$2d$DjihRWhV$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__a___as__collection$3e$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"], "venues"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["where"])("active", "==", true)));
    return snap.docs.map((d)=>({
            id: d.id,
            ...d.data()
        }));
}
async function getVenue(id) {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isFirebaseConfigured"] || !__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"]) return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockStore$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mockGetVenue"](id);
    const snap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$common$2d$DjihRWhV$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__doc$3e$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"], "venues", id));
    return snap.exists() ? {
        id: snap.id,
        ...snap.data()
    } : null;
}
async function getResources() {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isFirebaseConfigured"] || !__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"]) return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockStore$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mockGetResources"]();
    const snap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getDocs"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$common$2d$DjihRWhV$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__a___as__collection$3e$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"], "resources"));
    return snap.docs.map((d)=>({
            id: d.id,
            ...d.data()
        }));
}
async function getResourcesByCategory(category) {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isFirebaseConfigured"] || !__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"]) return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockStore$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mockGetResourcesByCategory"](category);
    const snap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getDocs"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$common$2d$DjihRWhV$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__a___as__collection$3e$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"], "resources"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["where"])("category", "==", category)));
    return snap.docs.map((d)=>({
            id: d.id,
            ...d.data()
        }));
}
async function getResource(id) {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isFirebaseConfigured"] || !__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"]) return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockStore$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mockGetResource"](id);
    const snap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$common$2d$DjihRWhV$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__doc$3e$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"], "resources", id));
    return snap.exists() ? {
        id: snap.id,
        ...snap.data()
    } : null;
}
async function getBookedSlotIds(resourceId, date) {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isFirebaseConfigured"] || !__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"]) return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockStore$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mockGetBookedSlotIds"](resourceId, date);
    const snap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getDocs"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$common$2d$DjihRWhV$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__a___as__collection$3e$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"], "bookings"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["where"])("resourceId", "==", resourceId), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["where"])("date", "==", date)));
    const ids = new Set();
    snap.docs.forEach((d)=>{
        const b = d.data();
        if (b.bookingStatus === "CONFIRMED" || b.bookingStatus === "COMPLETED") {
            b.slotIds.forEach((id)=>ids.add(id));
        }
    });
    return ids;
}
async function getReservedSlotIds(resourceId, date) {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isFirebaseConfigured"] || !__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"]) return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockStore$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mockGetReservedSlotIds"](resourceId, date);
    const snap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getDocs"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$common$2d$DjihRWhV$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__a___as__collection$3e$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"], "slotLocks"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["where"])("resourceId", "==", resourceId), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["where"])("date", "==", date)));
    const now = Date.now();
    const ids = new Set();
    snap.docs.forEach((d)=>{
        const l = d.data();
        if (new Date(l.expiresAt).getTime() > now) ids.add(l.id);
    });
    return ids;
}
async function getDisabledSlotMap(resourceId, date) {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isFirebaseConfigured"] || !__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"]) return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockStore$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mockGetDisabledSlotMap"](resourceId, date);
    const snap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getDocs"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$common$2d$DjihRWhV$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__a___as__collection$3e$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"], "blockedSlots"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["where"])("resourceId", "==", resourceId), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["where"])("date", "==", date)));
    const map = new Map();
    snap.docs.forEach((d)=>{
        const b = d.data();
        map.set(b.slotId, b.reason);
    });
    return map;
}
const RESERVATION_HOLD_MS = 5 * 60 * 1000; // 5 minutes
async function createReservation(params) {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isFirebaseConfigured"] || !__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"]) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockStore$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mockCreateReservation"]({
            ...params,
            holdMs: RESERVATION_HOLD_MS
        });
    }
    const expiresAt = new Date(Date.now() + RESERVATION_HOLD_MS).toISOString();
    const bookingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$common$2d$DjihRWhV$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__doc$3e$__["doc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$common$2d$DjihRWhV$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__a___as__collection$3e$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"], "bookings"));
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["runTransaction"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"], async (tx)=>{
        for (const slotId of params.slotIds){
            const lockRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$common$2d$DjihRWhV$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__doc$3e$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"], "slotLocks", slotId);
            const lockSnap = await tx.get(lockRef);
            if (lockSnap.exists()) {
                const existing = lockSnap.data();
                if (new Date(existing.expiresAt).getTime() > Date.now()) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockStore$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SlotConflictError"](`Slot ${slotId} is currently held by another user.`);
                }
            }
        }
        for (const slotId of params.slotIds){
            const lockRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$common$2d$DjihRWhV$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__doc$3e$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"], "slotLocks", slotId);
            tx.set(lockRef, {
                id: slotId,
                resourceId: params.resourceId,
                date: params.date,
                startTime: slotId.split("_").pop() ?? "",
                endTime: "",
                bookingId: bookingRef.id,
                userId: params.userId,
                status: "TEMPORARILY_RESERVED",
                expiresAt
            });
        }
    });
    return params.slotIds.map((id)=>({
            id,
            resourceId: params.resourceId,
            date: params.date,
            startTime: id.split("_").pop() ?? "",
            endTime: "",
            bookingId: bookingRef.id,
            userId: params.userId,
            status: "TEMPORARILY_RESERVED",
            expiresAt
        }));
}
async function releaseReservation(slotIds) {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isFirebaseConfigured"] || !__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"]) return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockStore$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mockReleaseReservation"](slotIds);
    await Promise.all(slotIds.map((id)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["updateDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$common$2d$DjihRWhV$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__doc$3e$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"], "slotLocks", id), {
            status: "RELEASED"
        }).catch(()=>{})));
}
async function confirmBooking(booking) {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isFirebaseConfigured"] || !__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"]) return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockStore$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mockConfirmBooking"](booking);
    const bookedIds = await getBookedSlotIds(booking.resourceId, booking.date);
    const conflict = booking.slotIds.find((id)=>bookedIds.has(id));
    if (conflict) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockStore$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SlotConflictError"](`Slot ${conflict} was just booked by another user.`);
    }
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["setDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$common$2d$DjihRWhV$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__doc$3e$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"], "bookings", booking.id), {
        ...booking,
        createdAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$common$2d$DjihRWhV$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__bd__as__serverTimestamp$3e$__["serverTimestamp"])(),
        updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$common$2d$DjihRWhV$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__bd__as__serverTimestamp$3e$__["serverTimestamp"])()
    });
    await Promise.all(booking.slotIds.map((id)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["updateDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$common$2d$DjihRWhV$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__doc$3e$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"], "slotLocks", id), {
            status: "CONVERTED"
        }).catch(()=>{})));
    return booking;
}
async function getUserBookings(userId) {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isFirebaseConfigured"] || !__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"]) return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockStore$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mockGetUserBookings"](userId);
    const snap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getDocs"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["query"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$common$2d$DjihRWhV$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__a___as__collection$3e$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"], "bookings"), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["where"])("userId", "==", userId)));
    return snap.docs.map((d)=>d.data()).sort((a, b)=>a.date < b.date ? 1 : -1);
}
async function getBooking(id) {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isFirebaseConfigured"] || !__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"]) return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockStore$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mockGetBooking"](id);
    const snap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$common$2d$DjihRWhV$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__doc$3e$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"], "bookings", id));
    return snap.exists() ? snap.data() : null;
}
async function getAllBookings() {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isFirebaseConfigured"] || !__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"]) return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockStore$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mockGetAllBookings"]();
    const snap = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getDocs"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$common$2d$DjihRWhV$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__a___as__collection$3e$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"], "bookings"));
    return snap.docs.map((d)=>d.data()).sort((a, b)=>a.createdAt < b.createdAt ? 1 : -1);
}
async function updateBookingStatus(id, bookingStatus, paymentStatus) {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isFirebaseConfigured"] || !__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"]) return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockStore$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mockUpdateBookingStatus"](id, bookingStatus, paymentStatus);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["updateDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$common$2d$DjihRWhV$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__doc$3e$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"], "bookings", id), {
        bookingStatus,
        ...paymentStatus ? {
            paymentStatus
        } : {},
        updatedAt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$common$2d$DjihRWhV$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__bd__as__serverTimestamp$3e$__["serverTimestamp"])()
    });
}
async function upsertResource(resource) {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isFirebaseConfigured"] || !__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"]) return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockStore$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mockUpsertResource"](resource);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["setDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$common$2d$DjihRWhV$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__doc$3e$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"], "resources", resource.id), resource);
}
async function upsertVenue(venue) {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isFirebaseConfigured"] || !__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"]) return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockStore$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mockUpsertVenue"](venue);
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["setDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$common$2d$DjihRWhV$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__t__as__doc$3e$__["doc"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"], "venues", venue.id), venue);
}
async function blockSlots(params) {
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isFirebaseConfigured"] || !__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"]) return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mockStore$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mockBlockSlots"](params);
    await Promise.all(params.slotIds.map((slotId)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$index$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["addDoc"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$firebase$2f$firestore$2f$dist$2f$common$2d$DjihRWhV$2e$node$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__a___as__collection$3e$__["collection"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$firebase$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"], "blockedSlots"), {
            resourceId: params.resourceId,
            date: params.date,
            slotId,
            reason: params.reason
        })));
}
;
}),
"[project]/src/lib/mockStore.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SlotConflictError",
    ()=>SlotConflictError,
    "mockBlockSlots",
    ()=>mockBlockSlots,
    "mockConfirmBooking",
    ()=>mockConfirmBooking,
    "mockCreateReservation",
    ()=>mockCreateReservation,
    "mockCreateUser",
    ()=>mockCreateUser,
    "mockFindUserByEmail",
    ()=>mockFindUserByEmail,
    "mockGetAllBookings",
    ()=>mockGetAllBookings,
    "mockGetBookedSlotIds",
    ()=>mockGetBookedSlotIds,
    "mockGetBooking",
    ()=>mockGetBooking,
    "mockGetDisabledSlotMap",
    ()=>mockGetDisabledSlotMap,
    "mockGetReservedSlotIds",
    ()=>mockGetReservedSlotIds,
    "mockGetResource",
    ()=>mockGetResource,
    "mockGetResources",
    ()=>mockGetResources,
    "mockGetResourcesByCategory",
    ()=>mockGetResourcesByCategory,
    "mockGetUserBookings",
    ()=>mockGetUserBookings,
    "mockGetUserById",
    ()=>mockGetUserById,
    "mockGetVenue",
    ()=>mockGetVenue,
    "mockGetVenues",
    ()=>mockGetVenues,
    "mockReleaseReservation",
    ()=>mockReleaseReservation,
    "mockUnblockSlot",
    ()=>mockUnblockSlot,
    "mockUpdateBookingStatus",
    ()=>mockUpdateBookingStatus,
    "mockUpsertResource",
    ()=>mockUpsertResource,
    "mockUpsertVenue",
    ()=>mockUpsertVenue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$seedData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/seedData.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-rsc] (ecmascript)");
;
;
const STORAGE_KEY = "playzo_mock_store_v1";
function seedStore() {
    return {
        venues: [
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$seedData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SEED_VENUE"]
        ],
        resources: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$seedData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SEED_RESOURCES"],
        bookings: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$seedData$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildSeedBookings"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["todayKey"])()),
        locks: [],
        disabledSlots: [],
        users: [
            {
                id: "admin_seed",
                name: "Playzo Admin",
                email: "admin@playzo.app",
                phone: "9999999999",
                role: "admin",
                createdAt: new Date().toISOString(),
                password: "admin123"
            }
        ]
    };
}
let memoryStore = null;
function load() {
    if ("TURBOPACK compile-time truthy", 1) {
        if (!memoryStore) memoryStore = seedStore();
        return memoryStore;
    }
    //TURBOPACK unreachable
    ;
    const fresh = undefined;
}
function save(store) {
    if ("TURBOPACK compile-time truthy", 1) {
        memoryStore = store;
        return;
    }
    //TURBOPACK unreachable
    ;
}
function delay(value, ms = 220) {
    return new Promise((resolve)=>setTimeout(()=>resolve(value), ms));
}
async function mockGetVenues() {
    return delay(load().venues.filter((v)=>v.active));
}
async function mockGetVenue(id) {
    return delay(load().venues.find((v)=>v.id === id) ?? null);
}
async function mockGetResources() {
    return delay(load().resources);
}
async function mockGetResourcesByCategory(category) {
    return delay(load().resources.filter((r)=>r.category === category));
}
async function mockGetResource(id) {
    return delay(load().resources.find((r)=>r.id === id) ?? null);
}
// ---------- Availability ----------
function pruneExpiredLocks(store) {
    const now = Date.now();
    const before = store.locks.length;
    store.locks = store.locks.filter((l)=>new Date(l.expiresAt).getTime() > now);
    if (store.locks.length !== before) save(store);
}
async function mockGetBookedSlotIds(resourceId, date) {
    const store = load();
    const ids = new Set();
    for (const b of store.bookings){
        if (b.resourceId === resourceId && b.date === date && (b.bookingStatus === "CONFIRMED" || b.bookingStatus === "COMPLETED")) {
            b.slotIds.forEach((id)=>ids.add(id));
        }
    }
    return delay(ids, 120);
}
async function mockGetReservedSlotIds(resourceId, date) {
    const store = load();
    pruneExpiredLocks(store);
    const ids = new Set();
    for (const l of store.locks){
        if (l.resourceId === resourceId && l.date === date) ids.add(l.id);
    }
    return delay(ids, 80);
}
async function mockGetDisabledSlotMap(resourceId, date) {
    const store = load();
    const map = new Map();
    for (const d of store.disabledSlots){
        if (d.resourceId === resourceId && d.date === date) map.set(d.slotId, d.reason);
    }
    return delay(map, 80);
}
class SlotConflictError extends Error {
}
async function mockCreateReservation(params) {
    const store = load();
    pruneExpiredLocks(store);
    const bookedIds = await mockGetBookedSlotIds(params.resourceId, params.date);
    const conflict = params.slotIds.find((id)=>bookedIds.has(id) || store.locks.some((l)=>l.id === id));
    if (conflict) {
        throw new SlotConflictError(`Slot ${conflict} was just booked by another user.`);
    }
    const expiresAt = new Date(Date.now() + params.holdMs).toISOString();
    const bookingId = `hold_${Date.now()}`;
    const newLocks = params.slotIds.map((slotId)=>({
            id: slotId,
            resourceId: params.resourceId,
            date: params.date,
            startTime: slotId.split("_").pop() ?? "",
            endTime: "",
            bookingId,
            userId: params.userId,
            status: "TEMPORARILY_RESERVED",
            expiresAt
        }));
    store.locks.push(...newLocks);
    save(store);
    return delay(newLocks, 300);
}
async function mockReleaseReservation(slotIds) {
    const store = load();
    store.locks = store.locks.filter((l)=>!slotIds.includes(l.id));
    save(store);
    return delay(undefined, 60);
}
async function mockConfirmBooking(booking) {
    const store = load();
    // Re-validate: none of the slots may already be confirmed-booked by someone else.
    const bookedIds = await mockGetBookedSlotIds(booking.resourceId, booking.date);
    const conflict = booking.slotIds.find((id)=>bookedIds.has(id));
    if (conflict) {
        throw new SlotConflictError(`Slot ${conflict} was just booked by another user.`);
    }
    store.bookings.push(booking);
    store.locks = store.locks.filter((l)=>!booking.slotIds.includes(l.id));
    save(store);
    return delay(booking, 200);
}
async function mockGetUserBookings(userId) {
    const store = load();
    return delay(store.bookings.filter((b)=>b.userId === userId).sort((a, b)=>a.date < b.date ? 1 : -1));
}
async function mockGetBooking(id) {
    return delay(load().bookings.find((b)=>b.id === id) ?? null);
}
async function mockGetAllBookings() {
    return delay([
        ...load().bookings
    ].sort((a, b)=>a.createdAt < b.createdAt ? 1 : -1));
}
async function mockUpdateBookingStatus(id, bookingStatus, paymentStatus) {
    const store = load();
    const b = store.bookings.find((x)=>x.id === id);
    if (b) {
        b.bookingStatus = bookingStatus;
        if (paymentStatus) b.paymentStatus = paymentStatus;
        b.updatedAt = new Date().toISOString();
        save(store);
    }
    return delay(undefined, 150);
}
async function mockUpsertResource(resource) {
    const store = load();
    const idx = store.resources.findIndex((r)=>r.id === resource.id);
    if (idx >= 0) store.resources[idx] = resource;
    else store.resources.push(resource);
    save(store);
    return delay(undefined, 150);
}
async function mockUpsertVenue(venue) {
    const store = load();
    const idx = store.venues.findIndex((v)=>v.id === venue.id);
    if (idx >= 0) store.venues[idx] = venue;
    else store.venues.push(venue);
    save(store);
    return delay(undefined, 150);
}
async function mockBlockSlots(params) {
    const store = load();
    for (const slotId of params.slotIds){
        store.disabledSlots.push({
            id: `block_${slotId}`,
            resourceId: params.resourceId,
            date: params.date,
            slotId,
            reason: params.reason
        });
    }
    save(store);
    return delay(undefined, 150);
}
async function mockUnblockSlot(slotId) {
    const store = load();
    store.disabledSlots = store.disabledSlots.filter((d)=>d.slotId !== slotId);
    save(store);
    return delay(undefined, 100);
}
async function mockFindUserByEmail(email) {
    return load().users.find((u)=>u.email.toLowerCase() === email.toLowerCase()) ?? null;
}
async function mockCreateUser(user) {
    const store = load();
    store.users.push(user);
    save(store);
    return delay(user, 150);
}
async function mockGetUserById(id) {
    const u = load().users.find((x)=>x.id === id);
    if (!u) return null;
    const rest = {
        id: u.id,
        name: u.name,
        email: u.email,
        phone: u.phone,
        role: u.role,
        createdAt: u.createdAt
    };
    return delay(rest, 60);
}
}),
"[project]/src/lib/seedData.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SEED_RESOURCES",
    ()=>SEED_RESOURCES,
    "SEED_VENUE",
    ()=>SEED_VENUE,
    "buildSeedBookings",
    ()=>buildSeedBookings
]);
const SEED_VENUE = {
    id: "venue_spr_multisport",
    name: "SPR Multisport Turf",
    location: "Ramachandra Nagar, Madurai, Tamil Nadu",
    address: "Ramachandra Nagar, Keelavaithiyanathapuram, Thathaneri, Madurai, Tamil Nadu",
    city: "Madurai",
    description: "Madurai's favourite multisport arena — turf football, badminton courts, PlayStation lounge and a full cricket ground under one roof.",
    image: "venue-hero",
    active: true,
    createdAt: new Date("2025-01-10").toISOString()
};
const SEED_RESOURCES = [
    {
        id: "res_turf_2",
        venueId: SEED_VENUE.id,
        name: "Turf 2.0",
        category: "turf",
        type: "5-a-side",
        description: "FIFA-approved synthetic turf with floodlights, ideal for 5-a-side football and box cricket.",
        image: "turf",
        pricePerSlot: 600,
        slotDuration: 30,
        openingTime: "14:30",
        closingTime: "23:30",
        active: true,
        amenities: [
            "Floodlights",
            "Changing room",
            "Drinking water",
            "Parking"
        ]
    },
    {
        id: "res_turf_3",
        venueId: SEED_VENUE.id,
        name: "Turf 3.0",
        category: "turf",
        type: "7-a-side",
        description: "Our largest turf, built for 7-a-side matches with premium synthetic grass and stadium seating.",
        image: "turf",
        pricePerSlot: 700,
        slotDuration: 30,
        openingTime: "06:00",
        closingTime: "23:30",
        active: true,
        amenities: [
            "Floodlights",
            "Seating",
            "Washrooms",
            "Parking"
        ]
    },
    {
        id: "res_turf_23",
        venueId: SEED_VENUE.id,
        name: "Turf 2.0 + 3.0",
        category: "turf",
        type: "Combined ground",
        description: "Book both turfs together for tournaments, corporate events, or large group games.",
        image: "turf",
        pricePerSlot: 1200,
        slotDuration: 30,
        openingTime: "06:00",
        closingTime: "23:30",
        active: true,
        amenities: [
            "Floodlights",
            "Seating",
            "Scoreboard",
            "Parking"
        ]
    },
    {
        id: "res_badminton_1",
        venueId: SEED_VENUE.id,
        name: "Badminton Court 1",
        category: "badminton",
        type: "Wooden court",
        description: "Indoor wooden court with BWF-standard flooring and lighting.",
        image: "badminton",
        pricePerSlot: 300,
        slotDuration: 30,
        openingTime: "05:30",
        closingTime: "23:00",
        active: true,
        amenities: [
            "AC",
            "Wooden flooring",
            "Racket rental",
            "Washrooms"
        ]
    },
    {
        id: "res_badminton_2",
        venueId: SEED_VENUE.id,
        name: "Badminton Court 2",
        category: "badminton",
        type: "Synthetic court",
        description: "Synthetic-mat court, great grip, popular for evening leagues.",
        image: "badminton",
        pricePerSlot: 300,
        slotDuration: 30,
        openingTime: "05:30",
        closingTime: "23:00",
        active: true,
        amenities: [
            "AC",
            "Synthetic mat",
            "Racket rental"
        ]
    },
    {
        id: "res_badminton_3",
        venueId: SEED_VENUE.id,
        name: "Badminton Court 3",
        category: "badminton",
        type: "Wooden court",
        description: "Our quietest court, tucked away from the main hall — great for coaching.",
        image: "badminton",
        pricePerSlot: 300,
        slotDuration: 30,
        openingTime: "05:30",
        closingTime: "23:00",
        active: true,
        amenities: [
            "AC",
            "Wooden flooring",
            "Coaching available"
        ]
    },
    {
        id: "res_ps_1",
        venueId: SEED_VENUE.id,
        name: "PS 1",
        category: "playstation",
        type: "PS5 · 55\" display",
        description: "PS5 console paired with a 55-inch 4K display and two extra controllers.",
        image: "playstation",
        pricePerSlot: 200,
        slotDuration: 30,
        openingTime: "10:00",
        closingTime: "22:30",
        active: true,
        amenities: [
            "4 controllers",
            "4K display",
            "Snacks counter"
        ]
    },
    {
        id: "res_ps_2",
        venueId: SEED_VENUE.id,
        name: "PS 2",
        category: "playstation",
        type: "PS5 · 43\" display",
        description: "Cosy PS5 pod, perfect for 1v1s and quick sessions.",
        image: "playstation",
        pricePerSlot: 200,
        slotDuration: 30,
        openingTime: "10:00",
        closingTime: "22:30",
        active: true,
        amenities: [
            "2 controllers",
            "43\" display",
            "Snacks counter"
        ]
    },
    {
        id: "res_cricket_ground",
        venueId: SEED_VENUE.id,
        name: "Full Ground",
        category: "cricket",
        type: "Full-size ground",
        description: "Full-size cricket ground with practice nets, pavilion and floodlights for night matches.",
        image: "cricket",
        pricePerSlot: 1500,
        slotDuration: 30,
        openingTime: "06:00",
        closingTime: "22:00",
        active: true,
        amenities: [
            "Floodlights",
            "Practice nets",
            "Pavilion",
            "Scoreboard"
        ]
    }
];
function buildSeedBookings(todayISO) {
    const now = new Date().toISOString();
    return [
        {
            id: "PZ-2026-000101",
            userId: "seed_user_1",
            venueId: SEED_VENUE.id,
            venueName: SEED_VENUE.name,
            resourceId: "res_turf_2",
            resourceName: "Turf 2.0",
            category: "turf",
            date: todayISO,
            startTime: "17:00",
            endTime: "18:00",
            slotIds: [
                `${todayISO}_res_turf_2_17:00`,
                `${todayISO}_res_turf_2_17:30`
            ],
            duration: 60,
            subtotal: 1200,
            tax: 60,
            convenienceFee: 10,
            total: 1270,
            paymentStatus: "PAID",
            paymentMethod: "upi",
            bookingStatus: "CONFIRMED",
            customerName: "Arun Kumar",
            customerPhone: "9876543210",
            customerEmail: "arun@example.com",
            createdAt: now,
            updatedAt: now
        }
    ];
}
}),
"[project]/src/lib/slots.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildSlotId",
    ()=>buildSlotId,
    "generateSlotsForDate",
    ()=>generateSlotsForDate,
    "resolveContiguousRange",
    ()=>resolveContiguousRange
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-rsc] (ecmascript)");
;
function buildSlotId(date, resourceId, startTime) {
    return `${date}_${resourceId}_${startTime}`;
}
function generateSlotsForDate({ resource, date, bookedSlotIds, reservedSlotIds, disabledSlotIds }) {
    /*
   * Firebase currently stores these values as strings.
   * Convert them to numbers here.
   */ const slotDuration = Number(resource.slotDuration);
    const openMin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["timeToMinutes"])(String(resource.openingTime));
    let closeMin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["timeToMinutes"])(String(resource.closingTime));
    if (!slotDuration || slotDuration <= 0) {
        console.error("Invalid slotDuration:", resource.slotDuration);
        return [];
    }
    if (closeMin <= openMin) {
        closeMin += 24 * 60;
    }
    const slots = [];
    const now = new Date();
    const isToday = date === (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["todayKey"])();
    const nowMinutes = now.getHours() * 60 + now.getMinutes();
    for(let start = openMin; start + slotDuration <= closeMin; start += slotDuration){
        const startTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["minutesToTime"])(start);
        const endTime = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["minutesToTime"])(start + slotDuration);
        const id = buildSlotId(date, resource.id, startTime);
        let status = "AVAILABLE";
        let reason;
        /*
     * Only today's slots can be PAST.
     */ if (isToday && start <= nowMinutes) {
            status = "PAST";
        } else if (bookedSlotIds.has(id)) {
            status = "BOOKED";
        } else if (reservedSlotIds.has(id)) {
            status = "TEMPORARILY_RESERVED";
        } else if (disabledSlotIds.has(id)) {
            status = "DISABLED";
            reason = disabledSlotIds.get(id);
        }
        slots.push({
            id,
            resourceId: resource.id,
            date,
            startTime,
            endTime,
            status,
            reason
        });
    }
    console.log("GENERATED SLOTS:", {
        resource: resource.name,
        date,
        openingTime: resource.openingTime,
        closingTime: resource.closingTime,
        slotDuration: resource.slotDuration,
        totalSlots: slots.length,
        availableSlots: slots.filter((slot)=>slot.status === "AVAILABLE").length,
        slots
    });
    return slots;
}
function resolveContiguousRange(slots, fromId, toId) {
    const fromIdx = slots.findIndex((s)=>s.id === fromId);
    const toIdx = slots.findIndex((s)=>s.id === toId);
    if (fromIdx === -1 || toIdx === -1) {
        return {
            ok: false,
            message: "Selected slot is no longer available."
        };
    }
    const start = Math.min(fromIdx, toIdx);
    const end = Math.max(fromIdx, toIdx);
    const range = slots.slice(start, end + 1);
    for (const s of range){
        if (s.status === "BOOKED") {
            return {
                ok: false,
                message: `${formatSlotLabel(s)} is already booked. Please select another time.`
            };
        }
        if (s.status === "TEMPORARILY_RESERVED") {
            return {
                ok: false,
                message: `${formatSlotLabel(s)} is being held by another user right now.`
            };
        }
        if (s.status === "DISABLED") {
            return {
                ok: false,
                message: `${formatSlotLabel(s)} is unavailable${s.reason ? ` (${s.reason})` : ""}.`
            };
        }
        if (s.status === "PAST") {
            return {
                ok: false,
                message: `${formatSlotLabel(s)} has already passed.`
            };
        }
    }
    return {
        ok: true,
        slotIds: range.map((s)=>s.id)
    };
}
function formatSlotLabel(s) {
    return s.startTime;
}
}),
"[project]/src/lib/utils.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addDaysKey",
    ()=>addDaysKey,
    "cn",
    ()=>cn,
    "formatDateKeyLong",
    ()=>formatDateKeyLong,
    "formatDateKeyShort",
    ()=>formatDateKeyShort,
    "formatINR",
    ()=>formatINR,
    "formatMonthYear",
    ()=>formatMonthYear,
    "formatTime12h",
    ()=>formatTime12h,
    "generateBookingId",
    ()=>generateBookingId,
    "generateId",
    ()=>generateId,
    "isPastDateKey",
    ()=>isPastDateKey,
    "isValidEmail",
    ()=>isValidEmail,
    "isValidPhone",
    ()=>isValidPhone,
    "minutesToTime",
    ()=>minutesToTime,
    "timeToMinutes",
    ()=>timeToMinutes,
    "toDateKey",
    ()=>toDateKey,
    "todayKey",
    ()=>todayKey
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-rsc] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
function toDateKey(date) {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, "0");
    const d = String(date.getDate()).padStart(2, "0");
    return `${y}-${m}-${d}`;
}
function todayKey() {
    return toDateKey(new Date());
}
function addDaysKey(dateKey, days) {
    const [y, m, d] = dateKey.split("-").map(Number);
    const dt = new Date(y, m - 1, d);
    dt.setDate(dt.getDate() + days);
    return toDateKey(dt);
}
function isPastDateKey(dateKey) {
    return dateKey < todayKey();
}
function formatDateKeyLong(dateKey) {
    const [y, m, d] = dateKey.split("-").map(Number);
    const dt = new Date(y, m - 1, d);
    return dt.toLocaleDateString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric"
    });
}
function formatDateKeyShort(dateKey) {
    const [y, m, d] = dateKey.split("-").map(Number);
    const dt = new Date(y, m - 1, d);
    return {
        day: String(dt.getDate()),
        weekday: dt.toLocaleDateString("en-IN", {
            weekday: "short"
        }).toUpperCase(),
        month: dt.toLocaleDateString("en-IN", {
            month: "short"
        }).toUpperCase()
    };
}
function formatMonthYear(dateKey) {
    const [y, m, d] = dateKey.split("-").map(Number);
    const dt = new Date(y, m - 1, d);
    return dt.toLocaleDateString("en-IN", {
        month: "long",
        year: "numeric"
    });
}
function formatTime12h(time24) {
    const [hStr, mStr] = time24.split(":");
    let h = Number(hStr) % 24;
    const m = Number(mStr);
    const suffix = h >= 12 ? "PM" : "AM";
    h = h % 12;
    if (h === 0) h = 12;
    return `${h}:${String(m).padStart(2, "0")} ${suffix}`;
}
function timeToMinutes(time24) {
    const [h, m] = time24.split(":").map(Number);
    return h * 60 + m;
}
function minutesToTime(mins) {
    const h = Math.floor(mins / 60) % 24;
    const m = mins % 60;
    return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
}
function formatINR(amount) {
    return `₹${amount.toLocaleString("en-IN")}`;
}
function generateId(prefix = "id") {
    return `${prefix}_${Math.random().toString(36).slice(2, 10)}${Date.now().toString(36)}`;
}
function generateBookingId(date = new Date()) {
    const year = date.getFullYear();
    const num = Math.floor(100000 + Math.random() * 899999);
    return `PZ-${year}-${num}`;
}
function isValidPhone(phone) {
    return /^[6-9]\d{9}$/.test(phone.trim());
}
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1u5a-a8._.js.map