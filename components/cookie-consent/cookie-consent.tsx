"use client";

import { useEffect } from "react";
import * as cookieConsent from "vanilla-cookieconsent";
import getConfig from "./config";
import "vanilla-cookieconsent/dist/cookieconsent.css";
import "./styles.css";
import { Button } from "../ui/button";

export const CookieConsent = () => {
  useEffect(() => {
    cookieConsent.run(getConfig());
  }, []);

  return null;
  return process.env.NODE_ENV === "development" ? (
    <div>
      <Button
        type="button"
        variant={"link"}
        onClick={cookieConsent.showPreferences}
      >
        Manage cookie preferences
      </Button>
      <Button type="button" variant={"link"} onClick={resetCookieConsent}>
        Reset cookie consent
      </Button>
    </div>
  ) : null;
};
const resetCookieConsent = () => {
  cookieConsent.reset(true);
  cookieConsent.run(getConfig());
};
