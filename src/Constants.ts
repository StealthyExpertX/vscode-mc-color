/* eslint-disable @typescript-eslint/naming-convention */
export const Colors = {
  '0': '#000000', // black
  '1': '#0000AA', // dark blue
  '2': '#00AA00', // dark green
  '3': '#00AAAA', // dark aqua
  '4': '#AA0000', // dark red
  '5': '#AA00AA', // dark purple
  '6': '#FFAA00', // gold
  '7': '#AAAAAA', // gray
  '8': '#555555', // dark gray
  '9': '#5555FF', // blue
  'a': '#55FF55', // green
  'b': '#55FFFF', // aqua
  'c': '#FF5555', // red
  'd': '#FF55FF', // light purple
  'e': '#FFFF55', // yellow
  'f': '#FFFFFF', // white
  'g': '#DDD605', // minecoin gold
  'h': '#E3D4D1', // material quartz
  'i': '#CECACA', // material iron
  'j': '#443A3B', // material netherite
  'm': '#971607', // material redstone
  'n': '#B4684D', // material copper
  'p': '#DEB12D', // material gold
  'q': '#47A036', // material emerald
  's': '#2CBAA8', // material diamond
  't': '#21497B', // material lapis
  'u': '#9A5CC6', // material amethyst
} as const;

export const Special = {
  'l': 'BOLD',
  'o': 'ITALIC',
  'n': 'UNDERLINE',
  // 'm': 'STRIKETHROUGH',
  'ψ': 'HIDDEN_UNDERLINE_STRIKETHROUGH',
  // 'k': 'OBFUSCATED',
  'r': 'RESET'
} as const;

export type SpecialUnion = typeof Special[keyof typeof Special]
export const SpecialValues: SpecialUnion[] = Object.values(Special)
