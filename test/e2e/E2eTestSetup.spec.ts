/**
 * This test should be run as the first test so that DriverManager can be
 * configured from Mocha before other tests are run.
 */
 import { E2eTestSetup } from "@ns-ui/e2e-toolkit/lib/automation/setup/E2eTestSetup";

 const e2eTestSetup = new E2eTestSetup({ testsRootFolder: __dirname });
 
 before(E2eTestSetup.BeforeHookDescription, async function () {
	 await e2eTestSetup.beforeHook(this);
 });
 
 beforeEach(E2eTestSetup.BeforeEachHookDescription, async function () {
	 await e2eTestSetup.beforeEachHook(this);
 });
 
 afterEach(E2eTestSetup.AfterEachHookDescription, async function () {
	 await e2eTestSetup.afterEachHook(this);
 });
 
 after(E2eTestSetup.AfterHookDescription, async function () {
	 await e2eTestSetup.afterHook(this);
 });
 