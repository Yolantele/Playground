export const primaryColour = '#FF6767'
export const primaryColourTap = '#C97698'
export const secondaryColour = '#C97698'
export const specialTextColour = '#c9ffe8'
export const bodyColour = '#ffefeb'
export const textColour = '#3a353b'
export const backgroundColor = '#ffcec2'
export const fontSizeBase = 14
export const radiusBase = 20
export const lineHeight = 20
export const brandShadow = {
  shadowOffset: { width: 1, height: 1 },
  shadowColor: 'grey',
  shadowOpacity: 0.6,
  shadowRadius: 5
}

export const brandGlow = {
  shadowColor: primaryColour,
  shadowOpacity: 0.5,
  shadowRadius: 7
}
export const customTheme = {
  color_text_base: '#4c474d',
  color_text_base_inverse: '#f5f0f0',
  color_text_secondary: '#a4a9b0',
  color_text_placeholder: '#5f4e6e',
  color_text_disabled: '#5f4e6e',
  color_text_caption: '#888888',
  color_text_paragraph: '#413a42',
  color_link: primaryColour,

  fill_base: bodyColour,
  fill_body: bodyColour,
  fill_tap: bodyColour,
  fill_disabled: '#dddddd',
  fill_mask: 'rgba(0, 0, 0, .4)',
  color_icon_base: '#cccccc',
  fill_grey: '#f7f7f7',

  opacity_disabled: '0.6',

  brand_primary: primaryColour,
  brand_primary_tap: primaryColourTap,
  brand_success: '#49c9b0',
  brand_warning: '#f0ab22',
  brand_error: '#bf1b5a',
  brand_important: '#f0ab22',
  brand_wait: '#8eeef5',

  border_color_base: '#FFD7CF',

  font_size_icontext: fontSizeBase - 4,
  font_size_caption_sm: fontSizeBase - 2,
  font_size_base: fontSizeBase,
  font_size_subhead: fontSizeBase + 1,
  font_size_caption: fontSizeBase + 2,
  font_size_heading: fontSizeBase + 3,

  radius_xs: radiusBase - 10,
  radius_sm: radiusBase - 5,
  radius_md: radiusBase,
  radius_lg: radiusBase + 5,

  border_width_sm: 0,
  border_width_md: 0,
  border_width_lg: 0,

  h_spacing_sm: 5,
  h_spacing_md: 8,
  h_spacing_lg: 15,

  v_spacing_xs: 3,
  v_spacing_sm: 6,
  v_spacing_md: 9,
  v_spacing_lg: 15,
  v_spacing_xl: 21,

  line_height_base: 1,
  line_height_paragraph: 1.5,

  icon_size_xxs: 15,
  icon_size_xs: 18,
  icon_size_sm: 21,
  icon_size_md: 22,
  icon_size_lg: 36,

  ease_in_out_quint: 'cubic_bezier(0.86, 0, 0.07, 1)',
  actionsheet_item_height: 50,
  actionsheet_item_font_size: 18,

  //button
  button_height: 47,
  button_font_size: 18,

  button_height_sm: 23,
  button_font_size_sm: 12,

  primary_button_fill: primaryColour,
  primary_button_fill_tap: primaryColourTap,

  ghost_button_color: primaryColour,
  ghost_button_fill_tap: 'lightgrey',

  warning_button_fill: '#e94f4f',
  warning_button_fill_tap: '#d24747',

  link_button_fill_tap: '#dddddd',
  link_button_font_size: 16,

  // modal
  modal_font_size_heading: fontSizeBase + 4,
  modal_button_font_size: 18,
  modal_button_height: 50,

  // list
  list_title_height: 30,
  list_item_height_sm: 35,
  list_item_height: 44,

  // input
  input_label_width: 17,
  input_font_size: 17,
  input_color_icon: '#cccccc',
  input_color_icon_tap: primaryColour,

  //tabs
  tabs_color: primaryColour,
  tabs_height: 42,
  tabs_font_size_heading: 15,

  //segmented_control
  segmented_control_color: primaryColour,
  segmented_control_height: 27,
  segmented_control_fill_tap: `${primaryColour}10`,

  // tab_bar
  tab_bar_fill: '#ebeeef',
  tab_bar_height: 50,

  // toast
  toast_fill: 'rgba(0, 0, 0, .8)',

  //search_bar
  search_bar_fill: '#efeff4',
  search_bar_height: 44,
  search_bar_input_height: 28,
  search_bar_font_size: 15,
  search_color_icon: '#bbbbbb',

  //   // notice_bar
  notice_bar_fill: '#fffada',
  notice_bar_height: 36,

  //   // switch
  switch_fill: '#4dd865',

  //   // tag
  tag_height: 25,
  tag_small_height: 15,

  //   // picker
  option_height: 42,

  toast_zindex: 1999,
  action_sheet_zindex: 1000,
  popup_zindex: 999,
  modal_zindex: 999
}
