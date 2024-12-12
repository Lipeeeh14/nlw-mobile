import { Text, Pressable, PressableProps } from "react-native"
import { style } from "./styles"
import { colors } from "@/styles/theme"
import { categoriesIcons } from "@/utils/categories-icons"

type Props = PressableProps & {
    name: string
    iconId: string,
    isSelected?: boolean
}

export function Category({ name, iconId, isSelected = false, ...rest }: Props) {
    const Icon = categoriesIcons[iconId]

    return (
        <Pressable style={[style.container, isSelected && style.containerSelected]} {...rest}>
            <Icon size={16} color={colors.gray[isSelected ? 100 : 400]}/>
            <Text style={[style.name, isSelected && style.nameSelected]}>{name}</Text>
        </Pressable>
    )
}