import { colors } from '@/constants/theme'
import React from 'react'
import { StyleSheet, View, ViewProps } from 'react-native'

export function ThemedView({ style, ...props }: ViewProps) {
  return <View style={[styles.container, style]} {...props} />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
})
