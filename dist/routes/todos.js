"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/', () => { console.log('ola'); });
// router.post('/');
// router.put('/:id');
// router.delete('/:id');
exports.default = router;
