// Import React
import React from "react";

// Import Spectacle Core tags
import {
	Appear,
	Code,
	CodePane,
	Deck,
	Fill,
	Heading,
	Image,
	Layout,
	Link,
	List,
	ListItem,
	Slide,
	Spectacle,
	Text
} from "spectacle";
import CodeSlide from "spectacle-code-slide";
import preloader from "spectacle/lib/utils/preloader";
import { theme } from "spectacle-theme-solarized-dark";

const images = {
	counterApp: require("../images/js-bridge-test-demo.gif"),
	aliceGif: require("../images/alice.gif"),
	stephonThanks: require("../images/stephonThanks.gif")
};
preloader(images);

export default class Presentation extends React.Component {
	render() {
		return (
			<Spectacle theme={theme}>
				<Deck transition={["fade"]} transitionDuration={300}>
					<Slide>
						<Heading size={1} fit caps lineHeight={1}>
							Building Bridges
						</Heading>
						<Heading size={1} fit textColor="secondary">
							With JavaScriptCore
						</Heading>
						<Link href="https://github.com/bspaulding/building-bridges-with-javascriptcore" margin="20px 0px 0px">
							<Text>github.com/bspaulding/</Text>
							<Text fit>presentation-building-bridges-with-javascriptcore</Text>
						</Link>
					</Slide>
					<Slide>
						<Heading fit>
							What is React Native?
						</Heading>
						<Layout>
							<Fill>
								<Text>Write React</Text>
							</Fill>
							<Fill>
								<Text>Render Native</Text>
							</Fill>
						</Layout>
						<Layout>
							<Fill>
								<CodePane
									textSize="16px"
									lang="jsx"
									source={require("raw!../examples/counter-app.example")}
								/>
							</Fill>
							<Fill>
								<div
									style={{
										backgroundImage: `url(${images.counterApp.replace("/", "")})`,
										backgroundPosition: "0px -310px",
										height: "230px",
										width: "100%"
									}}
								/>
							</Fill>
						</Layout>
					</Slide>
					<Slide>
						<Heading fit caps>How!?</Heading>
						<Appear>
						<Heading fit textColor="secondary">JavaScript Bridge</Heading>
						</Appear>
					</Slide>
					<Slide notes={'NOT the JS engine of the same name!'}>
						<Heading fit>JavaScriptCore</Heading>
						<Text margin="20px 0px">(iOS Only)</Text>
						<Layout>
							<Fill>
								<Appear>
									<Heading size={5} textColor="secondary">JSContext</Heading>
								</Appear>
							</Fill>
							<Fill>
								<Appear>
									<Heading size={5} textColor="secondary">JSValue</Heading>
								</Appear>
							</Fill>
						</Layout>
					</Slide>
					<CodeSlide
						transition={[]}
						lang="js"
						code={require("raw!../examples/jscontext.example")}
						showLineNumbers={false}
						ranges={[{
							loc: [0, 0], title: "JSContext"
						}, {
							loc: [0, 1], title: "import JSC"
						}, {
							loc: [2, 3], title: "create a context"
						}, {
							loc: [4, 6], title: "eval!"
						}, {
							loc: [6, 11], title: "put data in"
						}, {
							locs: [[7, 8], [10, 11]], title: "put data in"
						}, {
							loc: [8, 9], title: "put data in"
						}, {
							loc: [9, 10], title: "put data in"
						}, {
							loc: [12, 14], title: "use it"
						}]}
					/>
					<CodeSlide
						transition={[]}
						lang="js"
						code={require("raw!../examples/jsvalue.example")}
						showLineNumbers={false}
						ranges={[{
							loc: [0, 2], title: "JSValue"
						}, {
							loc: [3, 4], title: "convert to string"
						}, {
							loc: [4, 5], title: "convert to number"
						}, {
							loc: [6, 8], title: "create js function"
						}, {
							loc: [9, 11], title: "inject it"
						}, {
							loc: [12, 14], title: "call it!"
						}]}
					/>
					<Slide>
						<Heading caps>Demo</Heading>
						<Text>A Simple REPL</Text>
						<Link href="https://github.com/bspaulding/JSRepl">
							<Text textSize={16} margin="20px 0px 0px">github.com/bspaulding/JSRepl</Text>
						</Link>
					</Slide>
					<Slide>
						<Heading fit>What about React?</Heading>
						<Appear>
							<Image src={images.aliceGif.replace("/", "")} />
						</Appear>
						<Appear>
							<Text>Let's do something simpler...</Text>
						</Appear>
					</Slide>
					<Slide>
						<Heading fit caps>The Important Part</Heading>
						<Appear>
						<Text textColor="secondary">Virtual DOM</Text>
						</Appear>
						<Appear>
						<Text>render</Text>
						</Appear>
						<Appear>
						<Text>diff tree</Text>
						</Appear>
						<Appear>
						<Text>patch updates</Text>
						</Appear>
						<Appear>
						<Code>npm i virtual-dom</Code>
						</Appear>
					</Slide>
					<CodeSlide
						transition={[]}
						lang="js"
						code={require("raw!../examples/virtual-dom.example")}
						showLineNumbers={false}
						ranges={[{
							loc: [0, 1], title: "virtual-dom"
						}, {
							loc: [1, 2], title: "tagNames"
						}, {
							loc: [3, 12]
						}, {
							loc: [12, 13], title: "initial state"
						}, {
							loc: [13, 15], title: "render"
						}, {
							loc: [15, 16], title: "make DOMElement"
						}, {
							loc: [16, 17], title: "append (web)"
						}, {
							loc: [18, 19], title: "handle updates!"
						}, {
							loc: [19, 20], title: "inc count"
						}, {
							loc: [21, 22], title: "just render!"
						}, {
							loc: [22, 23], title: "compute diff"
						}, {
							loc: [23, 24], title: "update the DOM"
						}]}
					/>
					<CodeSlide
						transition={[]}
						lang="js"
						code={require("raw!../examples/vtree.example")}
						showLineNumbers={false}
						ranges={[{
							loc: [0, 0], title: "what's in a vtree?"
						}, {
							loc: [1, 2], title: "tagName"
						}, {
							loc: [2, 3], title: "attributes"
						}, {
							loc: [3, 4], title: "children"
						}, {
							loc: [4, 5], title: "tagName"
						}, {
							loc: [5, 6], title: "attributes"
						}, {
							loc: [6, 9], title: "children"
						}, {
							loc: [15, 16], title: "tagName"
						}, {
							loc: [16, 19], title: "attributes"
						}, {
							loc: [19, 22], title: "children"
						}]}
					/>
					<CodeSlide
						transition={[]}
						lang="js"
						code={require("raw!../examples/vpatch.example")}
						showLineNumbers={false}
						ranges={[{
							loc: [0, 0], title: "what's in a patch?"
						}, {
							loc: [1, 10]
						}, {
							loc: [1, 2], title: "node index"
						}, {
							loc: [2, 5], title: "patch type"
						}, {
							loc: [5, 8], title: "prev value"
						}, {
							loc: [8, 11], title: "next value"
						}]}
					/>
					<Slide>
						<Heading fit>DOMNode -> UIView</Heading>
						<CodePane
							textSize="24px"
							lang="js"
							source={require("raw!../examples/vdom-interface.example")}
						/>
					</Slide>
					<Slide transition={["fade"]}>
						<Heading fit>DOMNode -> UIView</Heading>
						<CodePane
							textSize="24px"
							lang="js"
							source={require("raw!../examples/vdom-interface-native.example")}
						/>
					</Slide>
					<CodeSlide
						transition={["fade"]}
						lang="js"
						code={require("raw!../examples/swift-create-element.example")}
						showLineNumbers={false}
						ranges={[{
							loc: [0, 1], title: "create in swift"
						}, {
							loc: [1, 2], title: "base case"
						}, {
							loc: [3, 6], title: "set text"
						}, {
							loc: [6, 9], title: "set text"
						}, {
							loc: [14, 15], title: "new node"
						}, {
							loc: [15, 17], title: "UITextView"
						}, {
							loc: [17, 19], title: "JSButton"
						}, {
							loc: [20, 22], title: "setProps"
						}, {
							loc: [22, 24], title: "UIView"
						}, {
							loc: [27, 28], title: "append to parent"
						}, {
							loc: [34, 39], title: "recurse children"
						}]}
					/>
					<CodeSlide
						transition={["fade"]}
						lang="js"
						code={require("raw!../examples/swift-jsbutton.example")}
						showLineNumbers={false}
						ranges={[{
							loc: [0, 0], title: "JSButton"
						}, {
							loc: [3, 4], title: "UIButton subclass"
						}, {
							loc: [4, 5], title: "retain props"
						}, {
							loc: [6, 8]
						}, {
							loc: [8, 13], title: "handle touches"
						}, {
							loc: [11, 12], title: "self.onclick"
						}, {
							loc: [20, 21], title: "self.onclick"
						}, {
							loc: [23, 26], title: "call js func"
						}]}
					/>
					<CodeSlide
						transition={["fade"]}
						lang="js"
						code={require("raw!../examples/swift-patch.example")}
						showLineNumbers={false}
						ranges={[{
							loc: [0, 0], title: "patch in swift"
						}, {
							loc: [0, 11]
						}, {
							loc: [14, 17]
						}, {
							loc: [17, 19]
						}, {
							loc: [19, 20]
						}, {
							loc: [21, 22]
						}, {
							loc: [24, 25]
						}, {
							loc: [25, 29]
						}, {
							loc: [36, 40]
						}, {
							loc: [40, 41]
						}, {
							loc: [41, 42]
						}, {
							loc: [42, 43]
						}]}
					/>
					<Slide>
						<Heading caps>Demo</Heading>
						<Text>Counter App</Text>
						<Link href="https://github.com/bspaulding/JSBridgeTest">
							<Text textSize={16} margin="20px 0px 0px">github.com/bspaulding/JSBridgeTest</Text>
						</Link>
					</Slide>
					<Slide notes={'Say What you understand now!'}>
						<Heading fit>What's Missing?</Heading>
						<List>
						<Appear>
							<ListItem>Layout!</ListItem>
						</Appear>
						<Appear>
							<ListItem>Debugging Tools</ListItem>
						</Appear>
						<Appear>
							<ListItem>UI Library</ListItem>
						</Appear>
						<Appear>
							<ListItem>Android!</ListItem>
						</Appear>
						</List>
					</Slide>
					<Slide>
						<Heading>Questions?</Heading>
					</Slide>
					<Slide>
						<Heading>Thanks!</Heading>
						<Text margin="20px">github / bspaulding</Text>
						<Text margin="20px">twitter / @bradspaulding</Text>
						<Image src={images.stephonThanks.replace("/", "")}/>
					</Slide>
				</Deck>
			</Spectacle>
		);
	}
}
