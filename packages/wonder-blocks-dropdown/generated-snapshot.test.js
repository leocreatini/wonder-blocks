// This file is auto-generated by gen-snapshot-tests.js
// Do not edit this file.  To make changes to these snapshot tests:
//   1. edit the markdown documentation files in the package,
//        packages/wonder-blocks-dropdown
//   2. Run `yarn run gen-snapshot-tests`.
import React from "react";
import renderer from "react-test-renderer";

// Mock react-dom as jest doesn't like findDOMNode.
jest.mock("react-dom");
import ActionItem from "./components/action-item.js";
import SeparatorItem from "./components/separator-item.js";
import OptionItem from "./components/option-item.js";
import ActionMenu from "./components/action-menu.js";
import SingleSelect from "./components/single-select.js";
import MultiSelect from "./components/multi-select.js";
import Dropdown from "./components/dropdown.js";

describe("wonder-blocks-dropdown", () => {
    it("example 1", () => {
        const {View} = require("@khanacademy/wonder-blocks-core");
        const {StyleSheet} = require("aphrodite");

        const styles = StyleSheet.create({
            row: {
                flexDirection: "row",
                justifyContent: "flex-end",
            },
        });
        const example = (
            <View style={styles.row}>
                <ActionMenu
                    alignment="right"
                    menuText="Betsy Appleseed"
                    testId="teacher-menu"
                >
                    <ActionItem
                        label="Profile"
                        href="http://khanacademy.org/profile"
                        testId="profile"
                    />
                    <ActionItem
                        label="Teacher dashboard"
                        href="http://khanacademy.org/coach/dashboard"
                        testId="dashboard"
                    />
                    <ActionItem
                        label="Settings (onClick)"
                        onClick={() => console.log("user clicked on settings")}
                        testId="settings"
                    />
                    <ActionItem
                        label="Help"
                        disabled={true}
                        onClick={() => console.log("this item is disabled...")}
                        testId="help"
                    />
                    <SeparatorItem />
                    <ActionItem
                        label="Log out"
                        href="http://khanacademy.org/logout"
                        testId="logout"
                    />
                </ActionMenu>
            </View>
        );
        const tree = renderer.create(example).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it("example 2", () => {
        const {View} = require("@khanacademy/wonder-blocks-core");
        const {StyleSheet} = require("aphrodite");
        const {Spring} = require("@khanacademy/wonder-blocks-layout");

        const styles = StyleSheet.create({
            row: {
                flexDirection: "row",
            },
        });

        const example = (
            <View style={styles.row}>
                <Spring />
                <ActionMenu menuText="Betsy Appleseed" style={{width: 100}}>
                    <ActionItem
                        label="Profile"
                        href="http://khanacademy.org/profile"
                    />
                    <ActionItem
                        label="Teacher dashboard"
                        href="http://khanacademy.org/coach/dashboard"
                    />
                    <ActionItem
                        label="Settings (onClick)"
                        onClick={() => console.log("user clicked on settings")}
                    />
                    <ActionItem
                        label="Help"
                        disabled={true}
                        onClick={() => console.log("this item is disabled...")}
                    />
                    <SeparatorItem />
                    <ActionItem
                        label="Log out"
                        href="http://khanacademy.org/logout"
                    />
                </ActionMenu>
            </View>
        );
        const tree = renderer.create(example).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it("example 3", () => {
        const React = require("react");
        const {View} = require("@khanacademy/wonder-blocks-core");
        const {StyleSheet} = require("aphrodite");

        const styles = StyleSheet.create({
            row: {
                flexDirection: "row",
            },
        });

        class HybridMenu extends React.Component {
            constructor() {
                super();
                this.state = {
                    selectedValues: ["homework"],
                    showHiddenOption: false,
                };
                // Styleguidist doesn't support arrow functions in class field properties
                this.handleChange = this.handleChange.bind(this);
            }

            handleChange(update) {
                this.setState({
                    selectedValues: update,
                    showHiddenOption: update.includes("in-class"),
                });
            }

            render() {
                const {showHiddenOption} = this.state;
                return (
                    <ActionMenu
                        menuText="Assignments"
                        onChange={this.handleChange}
                        selectedValues={this.state.selectedValues}
                    >
                        <ActionItem
                            label="Create..."
                            onClick={() => console.log("create action")}
                        />
                        <ActionItem
                            label="Edit..."
                            disabled={true}
                            onClick={() => console.log("edit action")}
                        />
                        <ActionItem
                            label="Delete"
                            disabled={true}
                            onClick={() => console.log("delete action")}
                        />
                        {showHiddenOption && (
                            <ActionItem
                                label="Hidden menu for class"
                                disabled={!showHiddenOption}
                                onClick={() =>
                                    console.log("hidden menu is clicked!")
                                }
                            />
                        )}
                        <SeparatorItem />
                        <OptionItem
                            label="Show homework assignments"
                            value="homework"
                            onClick={() =>
                                console.log(`Show homework assignments toggled`)
                            }
                        />
                        <OptionItem
                            label="Show in-class assignments"
                            value="in-class"
                            onClick={() =>
                                console.log(`Show in-class assignments toggled`)
                            }
                        />
                    </ActionMenu>
                );
            }
        }

        const example = (
            <View style={styles.row}>
                <HybridMenu />
            </View>
        );
        const tree = renderer.create(example).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it("example 4", () => {
        const React = require("react");
        const {View} = require("@khanacademy/wonder-blocks-core");
        const {StyleSheet} = require("aphrodite");

        const styles = StyleSheet.create({
            row: {
                flexDirection: "row",
            },
            setWidth: {
                minWidth: 170,
                maxWidth: 190,
            },
        });

        class ExampleWithPlaceholder extends React.Component {
            constructor() {
                super();
                this.state = {
                    selectedValue: null,
                };
                this.handleChange = this.handleChange.bind(this);
            }

            handleChange(selected) {
                console.log(`${selected} was selected!`);
                this.setState({
                    selectedValue: selected,
                });
            }

            render() {
                return (
                    <SingleSelect
                        onChange={this.handleChange}
                        placeholder="Choose a fruit"
                        selectedValue={this.state.selectedValue}
                        style={styles.setWidth}
                        testId="fruit-select"
                    >
                        <OptionItem
                            label="Vine-ripened tomatoes"
                            value="tomato"
                            testId="tomato"
                        />
                        <OptionItem
                            label="Watermelon"
                            value="watermelon"
                            testId="watermelon"
                        />
                        <OptionItem
                            label="Strawberry"
                            value="strawberry"
                            testId="strawberry"
                        />
                        {false && (
                            <OptionItem
                                label="Other"
                                value="other"
                                testId="other"
                            />
                        )}
                    </SingleSelect>
                );
            }
        }

        const example = (
            <View style={styles.row}>
                <ExampleWithPlaceholder />
            </View>
        );
        const tree = renderer.create(example).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it("example 5", () => {
        const React = require("react");
        const {View} = require("@khanacademy/wonder-blocks-core");
        const {StyleSheet} = require("aphrodite");

        const styles = StyleSheet.create({
            row: {
                flexDirection: "row",
            },
            setWidth: {
                minWidth: 170,
                maxWidth: 190,
            },
            dropdown: {
                maxHeight: 240,
            },
        });

        class ExampleWithDropdownStyles extends React.Component {
            constructor() {
                super();
                this.state = {
                    selectedValue: null,
                };
                this.handleChange = this.handleChange.bind(this);
            }

            handleChange(selected) {
                console.log(`${selected} was selected!`);
                this.setState({
                    selectedValue: selected,
                });
            }

            render() {
                return (
                    <SingleSelect
                        onChange={this.handleChange}
                        placeholder="Choose a pet"
                        selectedValue={this.state.selectedValue}
                        style={styles.setWidth}
                    >
                        <OptionItem label="Cat" value="1" />
                        <OptionItem label="Dog" value="2" />
                        <OptionItem label="Goldfish" value="3" />
                        <OptionItem label="Hamster" value="4" />
                        <OptionItem label="Rabbit" value="5" />
                        <OptionItem label="Rock" value="6" />
                        <OptionItem label="Snake" value="7" />
                        <OptionItem label="Tarantula" value="8" />
                    </SingleSelect>
                );
            }
        }

        const example = (
            <View style={styles.row}>
                <ExampleWithDropdownStyles />
            </View>
        );
        const tree = renderer.create(example).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it("example 6", () => {
        const React = require("react");
        const {View} = require("@khanacademy/wonder-blocks-core");
        const {StyleSheet} = require("aphrodite");

        const styles = StyleSheet.create({
            row: {
                flexDirection: "row",
            },
        });

        class ExampleWithStartingSelection extends React.Component {
            constructor() {
                super();
                this.state = {
                    selectedValue: "banana",
                };
                // Styleguidist doesn't support arrow functions in class field properties
                this.handleChange = this.handleChange.bind(this);
            }

            handleChange(selected) {
                console.log(`${selected} was selected!`);
                this.setState({
                    selectedValue: selected,
                });
            }

            render() {
                return (
                    <SingleSelect
                        onChange={this.handleChange}
                        placeholder="Choose a juice"
                        selectedValue={this.state.selectedValue}
                    >
                        <OptionItem label="Banana juice" value="banana" />
                        <OptionItem
                            label="Guava juice"
                            value="guava"
                            disabled
                        />
                        <OptionItem label="White grape juice" value="grape" />
                    </SingleSelect>
                );
            }
        }

        const example = (
            <View style={styles.row}>
                <ExampleWithStartingSelection />
            </View>
        );
        const tree = renderer.create(example).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it("example 7", () => {
        const React = require("react");
        const {View} = require("@khanacademy/wonder-blocks-core");
        const {StyleSheet} = require("aphrodite");

        const styles = StyleSheet.create({
            row: {
                flexDirection: "row",
            },
        });

        class DisabledExample extends React.Component {
            constructor() {
                super();
                this.state = {
                    selectedValue: "banana",
                };
                // Styleguidist doesn't support arrow functions in class field properties
                this.handleChange = this.handleChange.bind(this);
            }

            handleChange(selected) {
                console.log(`${selected} was selected!`);
                this.setState({
                    selectedValue: selected,
                });
            }

            render() {
                return (
                    <SingleSelect
                        disabled={true}
                        onChange={this.handleChange}
                        placeholder="Choose a juice"
                        selectedValue={this.state.selectedValue}
                    >
                        <OptionItem label="Banana juice" value="banana" />
                        <OptionItem
                            label="Guava juice"
                            value="guava"
                            disabled
                        />
                        <OptionItem label="White grape juice" value="grape" />
                    </SingleSelect>
                );
            }
        }

        const example = (
            <View style={styles.row}>
                <DisabledExample />
            </View>
        );
        const tree = renderer.create(example).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it("example 8", () => {
        const React = require("react");
        const Color = require("@khanacademy/wonder-blocks-color");
        const {View} = require("@khanacademy/wonder-blocks-core");
        const {StyleSheet} = require("aphrodite");

        const styles = StyleSheet.create({
            row: {
                flexDirection: "row",
            },
            darkBackgroundWrapper: {
                flexDirection: "row",
                justifyContent: "flex-end",
                backgroundColor: Color.default.darkBlue,
                width: 350,
                height: 200,
                paddingRight: 10,
                paddingTop: 10,
            },
        });

        class LightRightAlignedExample extends React.Component {
            constructor() {
                super();
                this.state = {
                    selectedValue: null,
                };
                // Styleguidist doesn't support arrow functions in class field properties
                this.handleChange = this.handleChange.bind(this);
            }

            handleChange(selected) {
                console.log(`${selected} was selected!`);
                this.setState({
                    selectedValue: selected,
                });
            }

            render() {
                return (
                    <SingleSelect
                        alignment="right"
                        light={true}
                        onChange={this.handleChange}
                        placeholder="Boba order"
                        selectedValue={this.state.selectedValue}
                    >
                        <OptionItem
                            label="Regular milk tea with boba"
                            value="regular"
                        />
                        <OptionItem
                            label="Wintermelon milk tea with boba"
                            value="wintermelon"
                        />
                        <OptionItem
                            label="Taro milk tea, half sugar"
                            value="taro"
                        />
                    </SingleSelect>
                );
            }
        }

        const example = (
            <View style={styles.row}>
                <View style={styles.darkBackgroundWrapper}>
                    <LightRightAlignedExample />
                </View>
            </View>
        );

        const tree = renderer.create(example).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it("example 9", () => {
        const React = require("react");
        const {View} = require("@khanacademy/wonder-blocks-core");
        const {StyleSheet} = require("aphrodite");

        const styles = StyleSheet.create({
            row: {
                flexDirection: "row",
            },
            setWidth: {
                minWidth: 170,
            },
        });

        class ExampleNoneSelected extends React.Component {
            constructor() {
                super();
                this.state = {
                    selectedValues: [],
                };
                // Styleguidist doesn't support arrow functions in class field properties
                this.handleChange = this.handleChange.bind(this);
            }

            handleChange(update) {
                console.log("changes happened!");
                this.setState({
                    selectedValues: update,
                });
            }

            render() {
                return (
                    <MultiSelect
                        onChange={this.handleChange}
                        placeholder="Color palette"
                        selectedValues={this.state.selectedValues}
                        selectItemType="colors"
                        style={styles.setWidth}
                        testId="palette"
                    >
                        <OptionItem
                            label="Red"
                            value="1"
                            testId="red"
                            onClick={() => console.log("Roses are red")}
                        />
                        <OptionItem
                            label="Yellow"
                            value="2"
                            disabled
                            testId="yellow"
                        />
                        <OptionItem label="Green" value="3" testId="green" />
                        <OptionItem label="Blue" value="4" testId="blue" />
                        {false && (
                            <OptionItem label="Pink" value="5" testId="pink" />
                        )}
                    </MultiSelect>
                );
            }
        }

        const example = (
            <View style={styles.row}>
                <ExampleNoneSelected />
            </View>
        );
        const tree = renderer.create(example).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it("example 10", () => {
        const React = require("react");
        const {View} = require("@khanacademy/wonder-blocks-core");
        const {StyleSheet} = require("aphrodite");

        const styles = StyleSheet.create({
            row: {
                flexDirection: "row",
            },
            setWidth: {
                minWidth: 170,
            },
            dropdownHeight: {
                maxHeight: 200,
            },
        });

        class ExampleScrolling extends React.Component {
            constructor() {
                super();
                this.state = {
                    selectedValues: [],
                };
                // Styleguidist doesn't support arrow functions in class field properties
                this.handleChange = this.handleChange.bind(this);
            }

            handleChange(update) {
                console.log("changes happened!");
                this.setState({
                    selectedValues: update,
                });
            }

            render() {
                return (
                    <MultiSelect
                        onChange={this.handleChange}
                        placeholder="Solar system"
                        selectedValues={this.state.selectedValues}
                        selectItemType="planets"
                        style={styles.setWidth}
                        dropdownStyle={styles.dropdownHeight}
                    >
                        <OptionItem label="Mercury" value="1" />
                        <OptionItem label="Venus" value="2" />
                        <OptionItem label="Earth" value="3" disabled />
                        <OptionItem label="Mars" value="4" />
                        <OptionItem label="Jupiter" value="5" />
                        <OptionItem label="Saturn" value="6" />
                        <OptionItem label="Neptune" value="7" />
                        <OptionItem label="Uranus" value="8" />
                    </MultiSelect>
                );
            }
        }

        const example = (
            <View style={styles.row}>
                <ExampleScrolling />
            </View>
        );
        const tree = renderer.create(example).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it("example 11", () => {
        const React = require("react");
        const {View} = require("@khanacademy/wonder-blocks-core");
        const {StyleSheet} = require("aphrodite");

        const styles = StyleSheet.create({
            row: {
                flexDirection: "row",
            },
        });

        class ExampleWithShortcuts extends React.Component {
            constructor() {
                super();
                this.state = {
                    selectedValues: ["wonderblocks 4ever"],
                };
                // Styleguidist doesn't support arrow functions in class field properties
                this.handleChange = this.handleChange.bind(this);
            }

            handleChange(update) {
                console.log("changes happened!");
                this.setState({
                    selectedValues: update,
                });
            }

            render() {
                return (
                    <MultiSelect
                        shortcuts={true}
                        onChange={this.handleChange}
                        selectedValues={this.state.selectedValues}
                        selectItemType="interns"
                    >
                        <OptionItem label="Anesu" value="very mobile" />
                        <OptionItem label="Ioana" value="lives in roma" />
                        <OptionItem label="Jennie" value="master of dominion" />
                        <OptionItem
                            label="Kelsey"
                            value="pipelines and kotlin"
                        />
                        <OptionItem label="Mary" value="flow-distress" />
                        <OptionItem
                            label="Nisha"
                            value="on the growth boat boat"
                        />
                        <OptionItem label="Sophie" value="wonderblocks 4ever" />
                        <OptionItem
                            label="Stephanie"
                            value="ramen izakaya fan"
                        />
                        <OptionItem label="Yeva" value="boba enthusiast" />
                    </MultiSelect>
                );
            }
        }

        const example = (
            <View style={styles.row}>
                <ExampleWithShortcuts />
            </View>
        );
        const tree = renderer.create(example).toJSON();
        expect(tree).toMatchSnapshot();
    });
    it("example 12", () => {
        const {StyleSheet} = require("aphrodite");
        const React = require("react");
        const {View, Text} = require("@khanacademy/wonder-blocks-core");
        const {
            StandardModal,
            ModalLauncher,
        } = require("@khanacademy/wonder-blocks-modal");
        const Button = require("@khanacademy/wonder-blocks-button").default;

        const styles = StyleSheet.create({
            wrapper: {
                alignItems: "center",
            },
            scrolledWrapper: {
                height: 200,
                overflow: "auto",
                border: "1px solid grey",
                borderRadius: 4,
                margin: 10,
                padding: 20,
            },
            setWidth: {
                minWidth: 170,
            },
        });

        class SimpleMultiSelect extends React.Component {
            constructor() {
                super();
                this.state = {
                    selectedValues: [],
                };
                // Styleguidist doesn't support arrow functions in class field properties
                this.handleChange = this.handleChange.bind(this);
            }

            handleChange(update) {
                console.log("changes happened!");
                this.setState({
                    selectedValues: update,
                });
            }

            render() {
                return (
                    <MultiSelect
                        onChange={this.handleChange}
                        selectedValues={this.state.selectedValues}
                        selectItemType="Great Houses"
                        style={styles.setWidth}
                    >
                        <OptionItem label="Stark" value="1" />
                        <OptionItem label="Arryn" value="2" />
                        <OptionItem label="Baratheon" value="3" />
                        <OptionItem label="Tully" value="4" />
                        <OptionItem label="Greyjoy" value="5" />
                        <OptionItem label="Lannister" value="6" />
                        <OptionItem label="Tyrell" value="7" />
                        <OptionItem label="Martell" value="8" />
                        <OptionItem label="Targaryen" value="9" />
                    </MultiSelect>
                );
            }
        }

        const modalContent = (
            <View style={{height: "200vh"}}>
                <View style={styles.scrolledWrapper}>
                    <View style={{minHeight: "100vh"}}>
                        <SimpleMultiSelect />
                    </View>
                </View>
            </View>
        );

        const modal = (
            <StandardModal
                title="Westerosi modal"
                footer=""
                content={modalContent}
            />
        );

        const example = (
            <View style={styles.wrapper}>
                <ModalLauncher modal={modal}>
                    {({openModal}) => (
                        <Button onClick={openModal}>Open modal!</Button>
                    )}
                </ModalLauncher>
            </View>
        );
        const tree = renderer.create(example).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
