/**
 * @license
 * Copyright (c) 2014, 2020, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 * @ignore
 */
"use strict";

const { hooks } = require("@ns-ui/scripts");

module.exports = async function (configObj) {
	console.log("Running after_app_typescript hook.");
	return hooks.afterAppTypescript(configObj);
};
