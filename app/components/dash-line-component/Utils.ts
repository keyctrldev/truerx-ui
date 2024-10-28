import { StyleProp, StyleSheet, ViewStyle } from 'react-native';

interface DashStyleProps {
  dashGap: number;
  dashLength: number;
  dashThickness: number;
  dashColor: string;
}

export const isStyleRow = (style: StyleProp<ViewStyle>): boolean => {
  const flatStyle = StyleSheet.flatten(style);
  return flatStyle.flexDirection !== 'column';
};

const getDashStyleId = ({ dashGap, dashLength, dashThickness, dashColor }: DashStyleProps, isRow: boolean): string =>
  `${dashGap}-${dashLength}-${dashThickness}-${dashColor}-${isRow ? 'row' : 'column'}`;

const createDashStyleSheet = (
  { dashGap, dashLength, dashThickness, dashColor }: DashStyleProps,
  isRow: boolean,
): ViewStyle => {
  return StyleSheet.create({
    style: {
      width: isRow ? dashLength : dashThickness,
      height: isRow ? dashThickness : dashLength,
      marginRight: isRow ? dashGap : 0,
      marginBottom: isRow ? 0 : dashGap,
      backgroundColor: dashColor,
    },
  }).style;
};

let stylesStore: { [key: string]: ViewStyle } = {};

export const getDashStyle = ({
  style,
  dashGap,
  dashLength,
  dashThickness,
  dashColor,
}: {
  style: StyleProp<ViewStyle>;
  dashGap: number;
  dashLength: number;
  dashThickness: number;
  dashColor: string;
}): ViewStyle => {
  const isRow = isStyleRow(style);
  const id = getDashStyleId({ dashGap, dashLength, dashThickness, dashColor }, isRow);

  if (!stylesStore[id]) {
    stylesStore[id] = createDashStyleSheet({ dashGap, dashLength, dashThickness, dashColor }, isRow);
  }

  return stylesStore[id];
};
