import { Text, View } from "react-native";
import { Icon, IconProps } from "@tabler/icons-react-native";

import { style } from "./styles";
import { colors } from "@/styles/theme";
import React from "react";

type Props = {
    description: string,
    icon: React.ComponentType<IconProps>
}

export function Info({ icon: Icon, description }: Props) {
    return (
        <View style={style.container}>
            <Icon size={16} color={colors.gray[400]} />
            <Text style={style.text}>{description}</Text>
        </View>
    )
}