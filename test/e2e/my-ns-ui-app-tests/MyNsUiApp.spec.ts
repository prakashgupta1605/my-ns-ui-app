import { By } from "selenium-webdriver";
import { ApplicationRegisterManager, NsUiDriver, Navigate, UrlBuilder, Verify } from "@ns-ui/e2e-toolkit/lib";

describe("my-ns-ui-app app", () => {
	let driver: NsUiDriver;
	let navigate: Navigate;
	let applicationRegistration: ApplicationRegisterManager;
	let urlBuilder: UrlBuilder;
	let verify: Verify;
	let counter = 0;

	beforeEach(async () => {
		driver = await NsUiDriver.getDriver(counter);
		navigate = new Navigate(driver);
		verify = new Verify(driver);
		applicationRegistration = new ApplicationRegisterManager(driver);

		await navigate.loginAsARandomUser();
		await applicationRegistration.registerLocalApplication();
	});

	afterEach(() => {
		driver.releaseDriver();
		counter++;
	});

	it("NSXDGE-XX should verify that text 'HELLO, WORLD' is present on the page.", async () => {
		urlBuilder = new UrlBuilder("home");
		await navigate.to(urlBuilder);
		const helloWorldLabel = await driver.findElementText(By.id("my-ns-ui-app-id"));
		verify.match("HELLO, WORLD.", helloWorldLabel.toString());
	});
});
