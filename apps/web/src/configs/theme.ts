import type { ThemeConfig } from 'antd';

const sabaiFontFamily =
  '"LINE Seed Sans TH", "Noto Sans Thai", Inter, system-ui, sans-serif';

export const theme: ThemeConfig = {
  token: {
    colorPrimary: '#3a8f73',
    colorInfo: '#3a8f73',
    colorSuccess: '#4d9f6f',
    colorWarning: '#b7791f',
    colorError: '#c84a43',
    colorTextBase: '#1f352d',
    colorTextSecondary: '#5f756c',
    colorBgBase: '#f5fbf6',
    colorBgLayout: '#edf8ef',
    colorBgContainer: 'rgba(255, 255, 255, 0.82)',
    colorBorder: 'rgba(111, 172, 139, 0.28)',
    colorBorderSecondary: 'rgba(255, 255, 255, 0.62)',
    boxShadow:
      '0 18px 48px rgba(52, 116, 90, 0.14), 0 4px 16px rgba(52, 116, 90, 0.08)',
    boxShadowSecondary: '0 10px 30px rgba(52, 116, 90, 0.12)',
    borderRadius: 12,
    borderRadiusLG: 16,
    borderRadiusSM: 8,
    controlHeight: 44,
    controlHeightLG: 48,
    fontSize: 16,
    fontSizeHeading1: 34,
    fontSizeHeading2: 28,
    fontSizeHeading3: 23,
    lineHeight: 1.62,
    fontFamily: sabaiFontFamily,
  },
  components: {
    Button: {
      borderRadius: 12,
      controlHeight: 44,
      controlHeightLG: 48,
      primaryShadow: '0 12px 24px rgba(58, 143, 115, 0.22)',
    },
    Card: {
      borderRadiusLG: 16,
      paddingLG: 24,
    },
    Form: {
      itemMarginBottom: 18,
      labelColor: '#2f4f43',
    },
    Input: {
      borderRadius: 12,
      controlHeight: 44,
    },
    Layout: {
      bodyBg: 'transparent',
      headerBg: 'rgba(255, 255, 255, 0.68)',
      siderBg: 'rgba(255, 255, 255, 0.72)',
    },
    Typography: {
      titleMarginBottom: 12,
      titleMarginTop: 0,
    },
  },
};
