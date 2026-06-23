/* eslint-disable @typescript-eslint/no-unused-vars */
import { i18nBuilder } from "keycloakify/login";
import type { ThemeName } from "../kc.gen";

/** @see: https://docs.keycloakify.dev/features/i18n */
const { useI18n, ofTypeI18n } = i18nBuilder
  .withThemeName<ThemeName>()
  .withCustomTranslations({
    tr: {
      loginAccountTitle: "Hesabınızda oturum açın",
      loginTotpDeviceName: "Cihaz Adı",
      loginTotpStep3DeviceName: "OTP cihazlarınızı yönetmenize yardımcı olması için bir Cihaz Adı belirtin.",
      logoutOtherSessions: "Diğer cihazlardaki oturumları kapat"
    }
  })
  .build();

type I18n = typeof ofTypeI18n;

export { useI18n, type I18n };
