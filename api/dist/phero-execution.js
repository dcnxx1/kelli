"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rpc_executor_helloWorldService__helloWorld = exports.service_cors_config__helloWorldService = void 0;
var server_1 = require("@phero/server");
var phero_1 = require("./phero");
var ParseError = /** @class */ (function (_super) {
    __extends(ParseError, _super);
    function ParseError(errors, input) {
        var _this = _super.call(this, "ParseError") || this;
        _this.errors = errors;
        _this.input = input;
        // https://github.com/microsoft/TypeScript/issues/22585
        Object.setPrototypeOf(_this, ParseError.prototype);
        return _this;
    }
    return ParseError;
}(Error));
function defaultErrorMapper(error) {
    if (error instanceof ParseError) {
        return { status: 400, input: error.input, errors: error.errors };
    }
    else if (error instanceof Error) {
        return {
            status: 500,
            error: {
                name: "Error",
                props: { message: error.message },
                stack: error.stack,
            },
        };
    }
    else {
        return {
            status: 500,
            error: {
                name: "Error",
                props: { message: "Internal Server Error" },
            },
        };
    }
}
function service_cors_config__helloWorldService() {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_c) {
        return [2 /*return*/, (_b = (_a = phero_1.helloWorldService.config.cors) === null || _a === void 0 ? void 0 : _a.originWhitelist) !== null && _b !== void 0 ? _b : []];
    }); });
}
exports.service_cors_config__helloWorldService = service_cors_config__helloWorldService;
function rpc_executor_helloWorldService__helloWorld(input) {
    return __awaiter(this, void 0, void 0, function () {
        var result, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, rpc_executor_helloWorldService__helloWorld__inner(input)];
                case 1:
                    result = _a.sent();
                    return [2 /*return*/, { status: 200, result: result }];
                case 2:
                    error_1 = _a.sent();
                    if (error_1 instanceof ParseError) {
                        return [2 /*return*/, { status: 400, input: error_1.input, errors: error_1.errors }];
                    }
                    return [2 /*return*/, defaultErrorMapper(error_1)];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.rpc_executor_helloWorldService__helloWorld = rpc_executor_helloWorldService__helloWorld;
function rpc_executor_helloWorldService__helloWorld__inner(input) {
    return __awaiter(this, void 0, void 0, function () {
        function noopParser(data) { return { ok: true, result: data }; }
        var output, inputParser, contextParser, outputParser, isFunctionCalled, parsedContext, contextParseResult, inputParseResult, outputParseResult;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    inputParser = function (data) {
                        var _parser = server_1.parser.ObjectLiteral(["name", false, server_1.parser.String]);
                        return _parser(data);
                    };
                    contextParser = noopParser;
                    outputParser = function (data) { var _parser = server_1.parser.String; return _parser(data); };
                    isFunctionCalled = false;
                    parsedContext = {};
                    contextParseResult = contextParser(parsedContext);
                    if (!contextParseResult.ok)
                        throw new ParseError(contextParseResult.errors, parsedContext);
                    inputParseResult = inputParser(input);
                    if (!inputParseResult.ok)
                        throw new ParseError(inputParseResult.errors, input);
                    return [4 /*yield*/, phero_1.helloWorldService.functions.helloWorld(inputParseResult.result.name)];
                case 1:
                    output = _a.sent();
                    isFunctionCalled = true;
                    outputParseResult = outputParser(output);
                    if (!outputParseResult.ok)
                        throw new ParseError(outputParseResult.errors, output);
                    return [2 /*return*/, outputParseResult.result];
            }
        });
    });
}
