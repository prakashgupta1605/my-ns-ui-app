import { h, Component, ComponentChild } from "preact";
import { customElement, ExtendGlobalProps } from "ojs/ojvcomponent";
import { AppProps } from "ns-ui-toolkit/core/app/AppProps";
import AppContext from "ns-ui-toolkit/core/app/AppContext";
import { generate } from "./NumberGenerator";
import { Container } from "ns-ui-toolkit/container/container";
import { Text, TypographyLevel } from "ns-ui-toolkit/text/text";

/**
 * @ojmetadata displayName "Template App"
 * @ojmetadata description "Template App is an empty example app that you can use to create awesomeness."
 * @ojmetadata version "1.0.0"
 * @ojmetadata extension {
 *   "catalog": {
 *     "tags": ["NetSuite", "NS-UI"],
 *     "coverImage": "cover-image.png"
 *   }
 * }
 */
@customElement("my-ns-ui-app")
export class MyNsUiApp extends Component<ExtendGlobalProps<AppProps>> {
	public render(): ComponentChild {
		return (
			<AppContext.Provider value={this.props}>
				<Container class="oj-flex">
					<Container class="oj-panel oj-flex oj-flex-item oj-sm-12 oj-md-12 oj-lg-12 my-project-name-content">
						<Container>
							<Text resource="HELLO, WORLD." id="my-project-name-id" typographyLevel={TypographyLevel.HeadingSm}/>
							<Text resource={this.props.name} typographyLevel={TypographyLevel.HeadingMd}/>
							<Text resource="Updated Jan. 15, 2021" typographyLevel={TypographyLevel.Body2Xs}/>
							<Text resource="Welcome to the amazing NetSuite initiative!&#128526;"/>
							<Text resource="Powered by Oracle JET"/>
						</Container>
						<Text resource={`This is a random number with two digits: ${generate()}`}/>
					</Container>
				</Container>
			</AppContext.Provider>
		);
	}
}
