const deviceSizes = {
  mobile: 375,
  tablet: 768,
  desktop: 1024
};

const device = {
  mobile: `screen and (max-width: ${deviceSizes.tablet}px - 1px)`,
  tablet: `screen and (min-width: ${deviceSizes.tablet}px)`,
  desktop: `screen and (min-width: ${deviceSizes.desktop}px)`
};

const theme = {
  device
}

export default theme;