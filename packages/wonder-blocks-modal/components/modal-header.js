// @flow
import * as React from "react";
import {StyleSheet} from "aphrodite";
import Color from "@khanacademy/wonder-blocks-color";
import {View} from "@khanacademy/wonder-blocks-core";
import {Layout} from "@khanacademy/wonder-blocks-layout";

import type {StyleType} from "@khanacademy/wonder-blocks-core";

type Props = {|
    children: React.Node,
    style?: StyleType,
    color: "light" | "dark",
|};

export default class ModalHeader extends React.Component<Props> {
    static defaultProps = {
        color: "dark",
    };

    render() {
        const {style, color, children} = this.props;
        return (
            <Layout styleSheets={styleSheets}>
                {({styles}) => (
                    <View
                        style={[
                            styles.header,
                            color === "dark" && styles.dark,
                            style,
                        ]}
                    >
                        {children}
                    </View>
                )}
            </Layout>
        );
    }
}

const styleSheets = {
    all: StyleSheet.create({
        header: {
            flex: "0 0 auto",
            boxSizing: "border-box",
            maxHeight: 108,
            paddingLeft: 64,
            paddingRight: 64,
            paddingTop: 8,
            paddingBottom: 8,

            display: "flex",
            flexDirection: "row",
        },

        dark: {
            background: Color.darkBlue,
            color: Color.white,
        },
    }),

    small: StyleSheet.create({
        header: {
            paddingLeft: 16,
            paddingRight: 16,
        },
    }),
};
