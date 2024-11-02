import React, { useState } from 'react';
import { SafeAreaView, Text, View, StyleSheet } from 'react-native';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

const CELL_COUNT = 4;

// Inspired by
// https://github.com/retyui/react-native-confirmation-code-field/issues/129
// https://dribbble.com/shots/8020632/attachments/530078?mode=media

const SmsInput = () => {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const renderCell = ({ index, symbol, isFocused }: { index: number, symbol: string | null, isFocused: boolean }) => {
    let textChild = null;

    if (symbol) {
      textChild = symbol;
    } else if (isFocused) {
      textChild = <Cursor />;
    } else {
      textChild = '-';
    }

    return (
      <Text
        key={index}
        style={[styles.cell, isFocused && styles.focusCell]}
        onLayout={getCellOnLayoutHandler(index)}>
        {textChild}
      </Text>
    );
  };

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.fieldRow}>
        <CodeField
          ref={ref}
          {...props}
          value={value}
          onChangeText={setValue}
          cellCount={CELL_COUNT}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={renderCell}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: { padding: 20 },
  title: { textAlign: 'center', fontSize: 30 },
  fieldRow: {
    marginTop: 20,
    flexDirection: 'row',
    marginLeft: 8,
  },
  cell: {
    width: 75,
    height: 75,
    lineHeight: 75,
    fontSize: 30,
    fontWeight: '700',
    textAlign: 'center',
    marginLeft: 8,
    borderRadius: 10000,
    backgroundColor: 'white',
    borderColor: '#DD527B',
    borderWidth: 1,
  },
  toggle: {
    width: 75,
    height: 75,
    lineHeight: 75,
    fontSize: 24,
    textAlign: 'center',
  },
  focusCell: {
    borderColor: '#000',
  },
});

export default SmsInput;
