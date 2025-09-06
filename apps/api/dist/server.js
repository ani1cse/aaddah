"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const shared_1 = require("@aaddah/shared");
console.log((0, shared_1.hello)()); // should log: Hello from @aaddah/shared
