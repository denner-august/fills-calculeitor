"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Layout/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Layout/index.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Layout\": function() { return /* binding */ Layout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _inputValores_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../inputValores/index */ \"./src/components/inputValores/index.tsx\");\n/* harmony import */ var _buttonCalcular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../buttonCalcular */ \"./src/components/buttonCalcular/index.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _context_Context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../context/Context */ \"./context/Context.tsx\");\n/* harmony import */ var _Result_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Result/index */ \"./src/components/Result/index.tsx\");\n/* harmony import */ var _background_backgroundLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../background/backgroundLayout */ \"./src/components/background/backgroundLayout.tsx\");\n/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ \"./node_modules/sweetalert2/dist/sweetalert2.all.js\");\n/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Layout() {\n    var VerificaValores = function VerificaValores() {\n        var buscar = valores.includes(0);\n        var buscarInan = valores.includes(undefined);\n        var teste = valores.filter(function(item) {\n            return item !== Number(item);\n        });\n        console.log(teste);\n        console.log(buscarInan);\n        console.log(valores);\n        // const VerificaTipo = valores.map(item => Number(item) === true )\n        if (buscar || buscarInan) {\n            return sweetalert2__WEBPACK_IMPORTED_MODULE_7___default().fire(\"Preencha todos os campos\", \"\", \"error\");\n        }\n        calcularPrecoMedio();\n    };\n    var calcularPrecoMedio = function calcularPrecoMedio() {\n        var novaQuantidade = Number(userAçõesQuantidade) + Number(QuantiCompraAções);\n        var novoValorTotal = Number(userAçõesQuantidade) * Number(userPreçoAções) + Number(QuantiCompraAções) * Number(CompraPreçoAções);\n        var precoMedio = novoValorTotal / novaQuantidade;\n        var novosValores = {\n            novaQuantidade: novaQuantidade,\n            novoValorTotal: novoValorTotal,\n            precoMedio: precoMedio\n        };\n        MostraValores(novosValores);\n    };\n    var MostraValores = function MostraValores(novosValores) {\n        setPrecoMedio({\n            quantidadeTotal: novosValores.novaQuantidade,\n            valorTotal: novosValores.novoValorTotal,\n            novoPrecoMedio: novosValores.precoMedio\n        });\n        setMostraResult(true);\n    };\n    _s();\n    var mostraResult = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_context_Context__WEBPACK_IMPORTED_MODULE_4__.FllsContext).mostraResult;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_context_Context__WEBPACK_IMPORTED_MODULE_4__.FllsContext), _usuario = ref.usuario, userAçõesQuantidade = _usuario.userAçõesQuantidade, userPreçoAções = _usuario.userPreçoAções, _ações = ref.ações, CompraPreçoAções = _ações.CompraPreçoAções, QuantiCompraAções = _ações.QuantiCompraAções, setPrecoMedio = ref.setPrecoMedio, setAções = ref.setAções, setUserAçõesQuantidade = ref.setUserAçõesQuantidade, setMostraResult = ref.setMostraResult;\n    var valores = [\n        userAçõesQuantidade,\n        userPreçoAções,\n        CompraPreçoAções,\n        QuantiCompraAções, \n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: mostraResult ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_background_backgroundLayout__WEBPACK_IMPORTED_MODULE_6__.BackgroundLayout, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Result_index__WEBPACK_IMPORTED_MODULE_5__.Result, {}, void 0, false, {\n                fileName: \"/home/denneraugusto/Documentos/GitHub/fills-calcuer/next-flls/src/components/Layout/index.tsx\",\n                lineNumber: 86,\n                columnNumber: 11\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/denneraugusto/Documentos/GitHub/fills-calcuer/next-flls/src/components/Layout/index.tsx\",\n            lineNumber: 85,\n            columnNumber: 9\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_background_backgroundLayout__WEBPACK_IMPORTED_MODULE_6__.BackgroundLayout, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    role: \"title\",\n                    children: \"Pre\\xe7o M\\xe9dio\"\n                }, void 0, false, {\n                    fileName: \"/home/denneraugusto/Documentos/GitHub/fills-calcuer/next-flls/src/components/Layout/index.tsx\",\n                    lineNumber: 90,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_inputValores_index__WEBPACK_IMPORTED_MODULE_1__.Valores, {\n                    açõesQuantidade: userAçõesQuantidade,\n                    açõesPreço: userPreçoAções,\n                    Titulo: \"Carteira\",\n                    CarteiraPlaceholder: \"Quantas a\\xe7\\xf5es Voc\\xea tem?\",\n                    ValorPlaceholder: \"Qual o pre\\xe7o?\",\n                    dispatch: setUserAçõesQuantidade,\n                    usuario: true\n                }, void 0, false, {\n                    fileName: \"/home/denneraugusto/Documentos/GitHub/fills-calcuer/next-flls/src/components/Layout/index.tsx\",\n                    lineNumber: 92,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_inputValores_index__WEBPACK_IMPORTED_MODULE_1__.Valores, {\n                    açõesPreço: CompraPreçoAções,\n                    açõesQuantidade: QuantiCompraAções,\n                    Titulo: \"Compra\",\n                    CarteiraPlaceholder: \"Quantas a\\xe7\\xf5es voc\\xea vai compra?\",\n                    ValorPlaceholder: \"Qual o valor da a\\xe7\\xe3o?\",\n                    dispatch: setAções\n                }, void 0, false, {\n                    fileName: \"/home/denneraugusto/Documentos/GitHub/fills-calcuer/next-flls/src/components/Layout/index.tsx\",\n                    lineNumber: 102,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_buttonCalcular__WEBPACK_IMPORTED_MODULE_2__.ButtonCalcular, {\n                    nomeButton: \"Calcular\",\n                    funcaoChamada: VerificaValores\n                }, void 0, false, {\n                    fileName: \"/home/denneraugusto/Documentos/GitHub/fills-calcuer/next-flls/src/components/Layout/index.tsx\",\n                    lineNumber: 111,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/denneraugusto/Documentos/GitHub/fills-calcuer/next-flls/src/components/Layout/index.tsx\",\n            lineNumber: 89,\n            columnNumber: 9\n        }, this)\n    }, void 0, false);\n}\n_s(Layout, \"bpJmjxf4jDipTSlrPIFgLcuNf9U=\");\n_c = Layout;\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7O29CQUFHOzs7OztnQkFDTyxpQkFFbkIsOERBQUNDLDBFQUFnQjs7OEJBQ2YsOERBQUNvQyxJQUFFO29CQUFDQyxJQUFJLEVBQUMsT0FBTzs4QkFBQyxtQkFBVzs7Ozs7d0JBQU87OEJBRWpDLDhEQUFEMUMsd0RBQU87b0JBQ04yQyxpQkFBZSxFQUFJcEI7b0JBQ2ZxQixhQUFNLEVBQUtsQjtvQkFDVG1CLE1BQUEsRUFBQyxVQUFVO29CQUNqQkMsbUJBQW1CLEVBQUMsa0NBQXlCO29CQUMxQ0MsZ0JBQWEsRUFBQyxrQkFBZTtvQkFDL0JDLFFBQU8sRUFBRVI7b0JBQ1JILE9BQUs7Ozs7O3dCQUNQOzhCQUVGLDhEQUFDckMsd0RBQU87b0JBQ040QyxhQUFVLEVBQUtqQjtvQkFDVGdCLGlCQUFTLEVBQUluQjtvQkFDZnFCLE1BQUUsRUFBQyxRQUFRO29CQUNmQyxtQkFBbUIsRUFBQyx5Q0FBZ0M7b0JBQ2pEQyxnQkFBYSxFQUFDLDZCQUF1QjtvQkFDdENDLFFBQU0sRUFBRVQ7Ozs7O3dCQUNWOzhCQUVGLDhEQUFDdEMsMkRBQWM7b0JBQ2JnRCxVQUFVLEVBQUMsVUFBVTtvQkFDckJDLGFBQWEsRUFBRTFDLGVBQWU7Ozs7O3dCQUM5Qjs7Ozs7O2dCQUNlO3FCQUVwQixDQUNIO0NBQ0g7R0F2R2VELE1BQU07QUFBTkEsS0FBQUEsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvaW5kZXgudHN4PzhmN2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFsb3JlcyB9IGZyb20gXCIuLi9pbnB1dFZhbG9yZXMvaW5kZXhcIjtcbmltcG9ydCB7IEJ1dHRvbkNhbGN1bGFyIH0gZnJvbSBcIi4uL2J1dHRvbkNhbGN1bGFyXCI7XG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGbGxzQ29udGV4dCB9IGZyb20gXCIuLi8uLi8uLi9jb250ZXh0L0NvbnRleHRcIjtcblxuaW1wb3J0IHsgUmVzdWx0IH0gZnJvbSBcIi4uL1Jlc3VsdC9pbmRleFwiO1xuaW1wb3J0IHsgQmFja2dyb3VuZExheW91dCB9IGZyb20gXCIuLi9iYWNrZ3JvdW5kL2JhY2tncm91bmRMYXlvdXRcIjtcbmltcG9ydCBTd2FsIGZyb20gXCJzd2VldGFsZXJ0MlwiO1xuXG5pbnRlcmZhY2Ugbm92b3NWYWxvcmVzIHtcbiAgbm92YVF1YW50aWRhZGU6IG51bWJlcjtcbiAgbm92b1ZhbG9yVG90YWw6IG51bWJlcjtcbiAgcHJlY29NZWRpbzogbnVtYmVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gTGF5b3V0KCkge1xuICBjb25zdCB7IG1vc3RyYVJlc3VsdCB9ID0gdXNlQ29udGV4dChGbGxzQ29udGV4dCk7XG5cbiAgY29uc3Qge1xuICAgIHVzdWFyaW86IHsgdXNlckHDp8O1ZXNRdWFudGlkYWRlLCB1c2VyUHJlw6dvQcOnw7VlcyB9LFxuICAgIGHDp8O1ZXM6IHsgQ29tcHJhUHJlw6dvQcOnw7VlcywgUXVhbnRpQ29tcHJhQcOnw7VlcyB9LFxuICAgIHNldFByZWNvTWVkaW8sXG4gICAgc2V0QcOnw7VlcyxcbiAgICBzZXRVc2VyQcOnw7Vlc1F1YW50aWRhZGUsXG4gICAgc2V0TW9zdHJhUmVzdWx0LFxuICB9ID0gdXNlQ29udGV4dChGbGxzQ29udGV4dCk7XG5cbiAgY29uc3QgdmFsb3JlcyA9IFtcbiAgICB1c2VyQcOnw7Vlc1F1YW50aWRhZGUsXG4gICAgdXNlclByZcOnb0HDp8O1ZXMsXG4gICAgQ29tcHJhUHJlw6dvQcOnw7VlcyxcbiAgICBRdWFudGlDb21wcmFBw6fDtWVzLFxuICBdO1xuXG4gIGZ1bmN0aW9uIFZlcmlmaWNhVmFsb3JlcygpIHtcbiAgICBjb25zdCBidXNjYXIgPSB2YWxvcmVzLmluY2x1ZGVzKDApO1xuICAgIGNvbnN0IGJ1c2NhckluYW4gPSB2YWxvcmVzLmluY2x1ZGVzKHVuZGVmaW5lZCk7XG4gICAgY29uc3QgdGVzdGUgPSB2YWxvcmVzLmZpbHRlcigoaXRlbSkgPT4gaXRlbSAhPT0gTnVtYmVyKGl0ZW0pKTtcblxuICAgIGNvbnNvbGUubG9nKHRlc3RlKTtcbiAgICBjb25zb2xlLmxvZyhidXNjYXJJbmFuKTtcbiAgICBjb25zb2xlLmxvZyh2YWxvcmVzKTtcblxuICAgIC8vIGNvbnN0IFZlcmlmaWNhVGlwbyA9IHZhbG9yZXMubWFwKGl0ZW0gPT4gTnVtYmVyKGl0ZW0pID09PSB0cnVlIClcblxuICAgIGlmIChidXNjYXIgfHwgYnVzY2FySW5hbikge1xuICAgICAgcmV0dXJuIFN3YWwuZmlyZShcIlByZWVuY2hhIHRvZG9zIG9zIGNhbXBvc1wiLCBcIlwiLCBcImVycm9yXCIpO1xuICAgIH1cblxuICAgIGNhbGN1bGFyUHJlY29NZWRpbygpO1xuICB9XG5cbiAgZnVuY3Rpb24gY2FsY3VsYXJQcmVjb01lZGlvKCkge1xuICAgIGNvbnN0IG5vdmFRdWFudGlkYWRlID1cbiAgICAgIE51bWJlcih1c2VyQcOnw7Vlc1F1YW50aWRhZGUpICsgTnVtYmVyKFF1YW50aUNvbXByYUHDp8O1ZXMpO1xuXG4gICAgY29uc3Qgbm92b1ZhbG9yVG90YWwgPVxuICAgICAgTnVtYmVyKHVzZXJBw6fDtWVzUXVhbnRpZGFkZSkgKiBOdW1iZXIodXNlclByZcOnb0HDp8O1ZXMpICtcbiAgICAgIE51bWJlcihRdWFudGlDb21wcmFBw6fDtWVzKSAqIE51bWJlcihDb21wcmFQcmXDp29Bw6fDtWVzKTtcblxuICAgIGNvbnN0IHByZWNvTWVkaW8gPSBub3ZvVmFsb3JUb3RhbCAvIG5vdmFRdWFudGlkYWRlO1xuXG4gICAgY29uc3Qgbm92b3NWYWxvcmVzID0ge1xuICAgICAgbm92YVF1YW50aWRhZGUsXG4gICAgICBub3ZvVmFsb3JUb3RhbCxcbiAgICAgIHByZWNvTWVkaW8sXG4gICAgfTtcblxuICAgIE1vc3RyYVZhbG9yZXMobm92b3NWYWxvcmVzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIE1vc3RyYVZhbG9yZXMobm92b3NWYWxvcmVzOiBub3Zvc1ZhbG9yZXMpIHtcbiAgICBzZXRQcmVjb01lZGlvKHtcbiAgICAgIHF1YW50aWRhZGVUb3RhbDogbm92b3NWYWxvcmVzLm5vdmFRdWFudGlkYWRlLFxuICAgICAgdmFsb3JUb3RhbDogbm92b3NWYWxvcmVzLm5vdm9WYWxvclRvdGFsLFxuICAgICAgbm92b1ByZWNvTWVkaW86IG5vdm9zVmFsb3Jlcy5wcmVjb01lZGlvLFxuICAgIH0pO1xuXG4gICAgc2V0TW9zdHJhUmVzdWx0KHRydWUpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge21vc3RyYVJlc3VsdCA/IChcbiAgICAgICAgPEJhY2tncm91bmRMYXlvdXQ+XG4gICAgICAgICAgPFJlc3VsdCAvPlxuICAgICAgICA8L0JhY2tncm91bmRMYXlvdXQ+XG4gICAgICApIDogKFxuICAgICAgICA8QmFja2dyb3VuZExheW91dD5cbiAgICAgICAgICA8aDEgcm9sZT1cInRpdGxlXCI+UHJlw6dvIE3DqWRpbzwvaDE+XG5cbiAgICAgICAgICA8VmFsb3Jlc1xuICAgICAgICAgICAgYcOnw7Vlc1F1YW50aWRhZGU9e3VzZXJBw6fDtWVzUXVhbnRpZGFkZX1cbiAgICAgICAgICAgIGHDp8O1ZXNQcmXDp289e3VzZXJQcmXDp29Bw6fDtWVzfVxuICAgICAgICAgICAgVGl0dWxvPVwiQ2FydGVpcmFcIlxuICAgICAgICAgICAgQ2FydGVpcmFQbGFjZWhvbGRlcj1cIlF1YW50YXMgYcOnw7VlcyBWb2PDqiB0ZW0/XCJcbiAgICAgICAgICAgIFZhbG9yUGxhY2Vob2xkZXI9XCJRdWFsIG8gcHJlw6dvP1wiXG4gICAgICAgICAgICBkaXNwYXRjaD17c2V0VXNlckHDp8O1ZXNRdWFudGlkYWRlfVxuICAgICAgICAgICAgdXN1YXJpb1xuICAgICAgICAgIC8+XG5cbiAgICAgICAgICA8VmFsb3Jlc1xuICAgICAgICAgICAgYcOnw7Vlc1ByZcOnbz17Q29tcHJhUHJlw6dvQcOnw7Vlc31cbiAgICAgICAgICAgIGHDp8O1ZXNRdWFudGlkYWRlPXtRdWFudGlDb21wcmFBw6fDtWVzfVxuICAgICAgICAgICAgVGl0dWxvPVwiQ29tcHJhXCJcbiAgICAgICAgICAgIENhcnRlaXJhUGxhY2Vob2xkZXI9XCJRdWFudGFzIGHDp8O1ZXMgdm9jw6ogdmFpIGNvbXByYT9cIlxuICAgICAgICAgICAgVmFsb3JQbGFjZWhvbGRlcj1cIlF1YWwgbyB2YWxvciBkYSBhw6fDo28/XCJcbiAgICAgICAgICAgIGRpc3BhdGNoPXtzZXRBw6fDtWVzfVxuICAgICAgICAgIC8+XG5cbiAgICAgICAgICA8QnV0dG9uQ2FsY3VsYXJcbiAgICAgICAgICAgIG5vbWVCdXR0b249XCJDYWxjdWxhclwiXG4gICAgICAgICAgICBmdW5jYW9DaGFtYWRhPXtWZXJpZmljYVZhbG9yZXN9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9CYWNrZ3JvdW5kTGF5b3V0PlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJWYWxvcmVzIiwiQnV0dG9uQ2FsY3VsYXIiLCJ1c2VDb250ZXh0IiwiRmxsc0NvbnRleHQiLCJSZXN1bHQiLCJCYWNrZ3JvdW5kTGF5b3V0IiwiU3dhbCIsIkxheW91dCIsIlZlcmlmaWNhVmFsb3JlcyIsImJ1c2NhciIsInZhbG9yZXMiLCJpbmNsdWRlcyIsImJ1c2NhckluYW4iLCJ1bmRlZmluZWQiLCJ0ZXN0ZSIsImZpbHRlciIsIml0ZW0iLCJOdW1iZXIiLCJjb25zb2xlIiwibG9nIiwiZmlyZSIsImNhbGN1bGFyUHJlY29NZWRpbyIsIm5vdmFRdWFudGlkYWRlIiwidXNlckHDp8O1ZXNRdWFudGlkYWRlIiwiUXVhbnRpQ29tcHJhQcOnw7VlcyIsIm5vdm9WYWxvclRvdGFsIiwidXNlclByZcOnb0HDp8O1ZXMiLCJDb21wcmFQcmXDp29Bw6fDtWVzIiwicHJlY29NZWRpbyIsIm5vdm9zVmFsb3JlcyIsIk1vc3RyYVZhbG9yZXMiLCJzZXRQcmVjb01lZGlvIiwicXVhbnRpZGFkZVRvdGFsIiwidmFsb3JUb3RhbCIsIm5vdm9QcmVjb01lZGlvIiwic2V0TW9zdHJhUmVzdWx0IiwibW9zdHJhUmVzdWx0IiwidXN1YXJpbyIsImHDp8O1ZXMiLCJzZXRBw6fDtWVzIiwic2V0VXNlckHDp8O1ZXNRdWFudGlkYWRlIiwiaDEiLCJyb2xlIiwiYcOnw7Vlc1F1YW50aWRhZGUiLCJhw6fDtWVzUHJlw6dvIiwiVGl0dWxvIiwiQ2FydGVpcmFQbGFjZWhvbGRlciIsIlZhbG9yUGxhY2Vob2xkZXIiLCJkaXNwYXRjaCIsIm5vbWVCdXR0b24iLCJmdW5jYW9DaGFtYWRhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Layout/index.tsx\n");

/***/ })

});