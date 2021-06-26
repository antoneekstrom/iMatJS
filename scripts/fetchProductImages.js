"use strict";
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
        while (_) try {
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
exports.__esModule = true;
var promises_1 = require("fs/promises");
var path_1 = require("path");
var node_fetch_1 = require("node-fetch");
var fs_1 = require("fs");
var dir = path_1.resolve(__dirname, '../butikens-egna-varor-id_2347');
if (!fs_1.existsSync(dir)) {
    fs_1.mkdirSync(dir);
}
readImages(dir);
function readImages(dir) {
    return __awaiter(this, void 0, void 0, function () {
        var files;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, promises_1.readdir(dir)];
                case 1:
                    files = _a.sent();
                    files.forEach(function (file) { return __awaiter(_this, void 0, void 0, function () {
                        var fullPath, json, _a, _b, imgDir;
                        var _this = this;
                        return __generator(this, function (_c) {
                            switch (_c.label) {
                                case 0:
                                    fullPath = path_1.resolve(dir, file);
                                    _b = (_a = JSON).parse;
                                    return [4 /*yield*/, promises_1.readFile(fullPath)];
                                case 1:
                                    json = _b.apply(_a, [(_c.sent()).toString()]);
                                    imgDir = path_1.join(dir, '/images', file.split('.')[0]);
                                    console.log({ fullPath: fullPath, imgDir: imgDir });
                                    if (!fs_1.existsSync(imgDir)) {
                                        fs_1.mkdirSync(imgDir, { recursive: true });
                                    }
                                    json.forEach(function (_a) {
                                        var gtin = _a.gtin, name = _a.name, sku = _a.sku;
                                        return __awaiter(_this, void 0, void 0, function () {
                                            var buffer, imgPath;
                                            return __generator(this, function (_b) {
                                                switch (_b.label) {
                                                    case 0: return [4 /*yield*/, node_fetch_1["default"](getImageUrl(sku))];
                                                    case 1: return [4 /*yield*/, (_b.sent()).buffer()];
                                                    case 2:
                                                        buffer = _b.sent();
                                                        imgPath = path_1.join(imgDir, name + ".jpg");
                                                        console.log("saving image " + imgPath);
                                                        return [4 /*yield*/, promises_1.writeFile(imgPath, buffer, { flag: 'w' })];
                                                    case 3:
                                                        _b.sent();
                                                        return [2 /*return*/];
                                                }
                                            });
                                        });
                                    });
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    return [2 /*return*/];
            }
        });
    });
}
function getImageUrl(id) {
    return "https://assets.icanet.se/t_product_medium_v1,f_auto/" + id + ".jpg";
}
