import { colors } from '@/constants/theme'
import React from 'react'
import { StyleSheet, Text, TextProps } from 'react-native'

export type ThemedTextProps = TextProps & {
  type?: 'title' | 'link'
}

export function ThemedText({ type, style, ...props }: ThemedTextProps) {
  return <Text style={[styles.text, type && styles[type], style]} {...props} />
}

const styles = StyleSheet.create({
  text: {
    color: colors.foreground,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
  },
  link: {
    color: colors.primary,
  },
})