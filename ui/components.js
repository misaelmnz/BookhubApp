import React from 'react';
import { View } from 'react-native';
import { Text, TouchableOpacity, Image } from 'react-native';

export const root = {
    C_BACKGROUND_COLOR: '#FFF8E7',
    C_BADGE_COLOR: '#F8F8F8',
    C_MAIN_COLOR: '#FEAE51',
    C_SUB_COLOR: '#FD843F',
    C_PURPLE: '#A193E0',
    C_BLACK: '#040111',
    C_WHITE: '#FFFFFF',
    C_FONT: '"Inter-Regular"',
}

export function Container({
    children,
    style,
    backgroundColor = root.C_BACKGROUND_COLOR,
    padding = 0,
    margin = 0,
    borderRadius = 0,
}) {
    return (
        <View
            style={{
                backgroundColor: backgroundColor,
                padding: padding,
                margin: margin,
                borderRadius: borderRadius,
                ...style
            }}
        >
            {children}
        </View>
    );
}

export function ContainerWithBackground({ children, style }) {
    return (
        <Container
            style={{
                backgroundColor: root.C_BACKGROUND_COLOR,
                ...style
            }}
        >
            {children}
        </Container>
    );
}

export function ContainerWithMainColor({ children, style }) {
    return (
        <Container
            style={{
                backgroundColor: root.C_MAIN_COLOR,
                ...style
            }}
        >
            {children}
        </Container>
    );
}

export function ContainerWithSubColor({ children, style }) {
    return (
        <Container
            style={{
                backgroundColor: root.C_SUB_COLOR,
                ...style
            }}
        >
            {children}
        </Container>
    );
}

export function ContainerWithPurple({ children, style }) {
    return (
        <Container
            style={{
                backgroundColor: root.C_PURPLE,
                ...style
            }}
        >
            {children}
        </Container>
    );
}

export function ContainerWithBlack({ children, style }) {
    return (
        <Container
            style={{
                backgroundColor: root.C_BLACK,
                ...style
            }}
        >
            {children}
        </Container>
    );
}

export function ContainerWithWhite({ children, style }) {
    return (
        <Container
            style={{
                backgroundColor: root.C_WHITE,
                ...style
            }}
        >
            {children}
        </Container>
    );
}

export function ContainerWithBadgeColor({ children, style }) {
    return (
        <Container
            style={{
                backgroundColor: root.C_BADGE_COLOR,
                ...style
            }}
        >
            {children}
        </Container>
    );
}

export function Spacer({ height = 0 }) {
    return (
        <View
            style={{
                height: height,
            }}
        />
    );
}

export function SpacerHorizontal({ width = 0 }) {
    return (
        <View
            style={{
                width: width,
            }}
        />
    );
}

export function Center({ children, style }) {
    return (
        <View
            style={{
                justifyContent: 'center',
                alignItems: 'center',
                ...style
            }}
        >
            {children}
        </View>
    );
}

export function CenterHorizontal({ children, style }) {
    return (
        <View
            style={{
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                ...style
            }}
        >
            {children}
        </View>
    );
}

export function CenterVertical({ children, style }) {
    return (
        <View
            style={{
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                ...style
            }}
        >
            {children}
        </View>
    );
}

export function Row({ children, style }) {
    return (
        <View
            style={{
                flexDirection: 'row',
                ...style
            }}
        >
            {children}
        </View>
    );
}

export function Column({ children, style }) {
    return (
        <View
            style={{
                flexDirection: 'column',
                ...style
            }}
        >
            {children}
        </View>
    );
}

export function Shadow({ children, style }) {
    return (
        <View
            style={{
                shadowColor: '#000',
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
                ...style
            }}
        >
            {children}
        </View>
    );
}

export function TextCustom({ children, style, color = root.C_BLACK, fontSize = 16, fontWeight = 'normal', textAlign = 'left', lineHeight = 20 }) {
    return (
        <Text
            style={{
                color: color,
                fontSize: fontSize,
                fontWeight: fontWeight,
                textAlign: textAlign,
                lineHeight: lineHeight,
                ...style
            }}
        >
            {children}
        </Text>
    );
}

export function ButtonCustom({ children, style, onPress, backgroundColor = root.C_MAIN_COLOR, padding = 10, borderRadius = 5 }) {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                backgroundColor: backgroundColor,
                padding: padding,
                borderRadius: borderRadius,
                ...style
            }}
        >
            {children}
        </TouchableOpacity>
    );
}

export function Card({ children, style, backgroundColor = root.C_WHITE, padding = 10, borderRadius = 5 }) {
    return (
        <View
            style={{
                backgroundColor: backgroundColor,
                padding: padding,
                borderRadius: borderRadius,
                ...style
            }}
        >
            {children}
        </View>
    );
}

export function ImageCustom({ source, style, resizeMode = 'cover', width = 100, height = 100 }) {
    return (
        <Image
            source={source}
            style={{
                width: width,
                height: height,
                resizeMode: resizeMode,
                ...style
            }}
        />
    );
}
