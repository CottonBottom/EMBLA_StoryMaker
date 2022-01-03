import React, { useState } from "react";
import { combineArrays } from "./ArrayMethods";
import dollData from "./DollDataLight.json";
//Background:
import background from "./Dolls/00_background.png";
//Number Container:
import number_container from "./Dolls/01_number_container.png";
//Broken dolls:
import bd1_brazoder from "./Dolls/bd1_brazoderecho.png";
import bd1_brazoizq from "./Dolls/bd1_brazoizquierdo.png";
import bd1_cabeza from "./Dolls/bd1_cabeza.png";
import bd1_piernader from "./Dolls/bd1_piernaderecha.png";
import bd1_piernaizq from "./Dolls/bd1_piernaizquierda.png";
import bd1_tronco from "./Dolls/bd1_tronco.png";
import bd2_brazoder from "./Dolls/bd2_brazoderecho.png";
import bd2_brazoizq from "./Dolls/bd2_brazoizquierdo.png";
import bd2_cabeza from "./Dolls/bd2_cabeza.png";
import bd2_piernader from "./Dolls/bd2_piernaderecha.png";
import bd2_piernaizq from "./Dolls/bd2_piernaizquierda.png";
import bd2_tronco from "./Dolls/bd2_tronco.png";
import bd3_brazoder from "./Dolls/bd3_brazoderecho.png";
import bd3_brazoizq from "./Dolls/bd3_brazoizquierdo.png";
import bd3_cabeza from "./Dolls/bd3_cabeza.png";
import bd3_piernader from "./Dolls/bd3_piernaderecha.png";
import bd3_piernaizq from "./Dolls/bd3_piernaizquierda.png";
import bd3_tronco from "./Dolls/bd3_tronco.png";
import bd4_brazoder from "./Dolls/bd4_brazoderecho.png";
import bd4_brazoizq from "./Dolls/bd4_brazoizquierdo.png";
import bd4_cabeza from "./Dolls/bd4_cabeza.png";
import bd4_piernader from "./Dolls/bd4_piernaderecha.png";
import bd4_piernaizq from "./Dolls/bd4_piernaizquierda.png";
import bd4_tronco from "./Dolls/bd4_tronco.png";
import bd5_brazoder from "./Dolls/bd5_brazoderecho.png";
import bd5_brazoizq from "./Dolls/bd5_brazoizquierdo.png";
import bd5_cabeza from "./Dolls/bd5_cabeza.png";
import bd5_piernader from "./Dolls/bd5_piernaderecha.png";
import bd5_piernaizq from "./Dolls/bd5_piernaizquierda.png";
import bd5_tronco from "./Dolls/bd5_tronco.png";
import bd6_brazoder from "./Dolls/bd6_brazoderecho.png";
import bd6_brazoizq from "./Dolls/bd6_brazoizquierdo.png";
import bd6_cabeza from "./Dolls/bd6_cabeza.png";
import bd6_piernader from "./Dolls/bd6_piernaderecha.png";
import bd6_piernaizq from "./Dolls/bd6_piernaizquierda.png";
import bd6_tronco from "./Dolls/bd6_tronco.png";
import bd7_brazoder from "./Dolls/bd7_brazoderecho.png";
import bd7_brazoizq from "./Dolls/bd7_brazoizquierdo.png";
import bd7_cabeza from "./Dolls/bd7_cabeza.png";
import bd7_piernader from "./Dolls/bd7_piernaderecha.png";
import bd7_piernaizq from "./Dolls/bd7_piernaizquierda.png";
import bd7_tronco from "./Dolls/bd7_tronco.png";
import bd8_brazoder from "./Dolls/bd8_brazoderecho.png";
import bd8_brazoizq from "./Dolls/bd8_brazoizquierdo.png";
import bd8_cabeza from "./Dolls/bd8_cabeza.png";
import bd8_piernader from "./Dolls/bd8_piernaderecha.png";
import bd8_piernaizq from "./Dolls/bd8_piernaizquierda.png";
import bd8_tronco from "./Dolls/bd8_tronco.png";
import bd9_brazoder from "./Dolls/bd9_brazoderecho.png";
import bd9_brazoizq from "./Dolls/bd9_brazoizquierdo.png";
import bd9_cabeza from "./Dolls/bd9_cabeza.png";
import bd9_piernader from "./Dolls/bd9_piernaderecha.png";
import bd9_piernaizq from "./Dolls/bd9_piernaizquierda.png";
import bd9_tronco from "./Dolls/bd9_tronco.png";
import bd10_brazoder from "./Dolls/bd10_brazoderecho.png";
import bd10_brazoizq from "./Dolls/bd10_brazoizquierdo.png";
import bd10_cabeza from "./Dolls/bd10_cabeza.png";
import bd10_piernader from "./Dolls/bd10_piernaderecha.png";
import bd10_piernaizq from "./Dolls/bd10_piernaizquierda.png";
import bd10_tronco from "./Dolls/bd10_tronco.png";

import bd11_brazoder from "./Dolls/bd11_brazoderecho.png";
import bd11_brazoizq from "./Dolls/bd11_brazoizquierdo.png";
import bd11_cabeza from "./Dolls/bd11_cabeza.png";
import bd11_piernader from "./Dolls/bd11_piernaderecha.png";
import bd11_piernaizq from "./Dolls/bd11_piernaizquierda.png";
import bd11_tronco from "./Dolls/bd11_tronco.png";

import bd12_brazoder from "./Dolls/bd12_brazoderecho.png";
import bd12_brazoizq from "./Dolls/bd12_brazoizquierdo.png";
import bd12_cabeza from "./Dolls/bd12_cabeza.png";
import bd12_piernader from "./Dolls/bd12_piernaderecha.png";
import bd12_piernaizq from "./Dolls/bd12_piernaizquierda.png";
import bd12_tronco from "./Dolls/bd12_tronco.png";

import bd13_brazoder from "./Dolls/bd13_brazoderecho.png";
import bd13_brazoizq from "./Dolls/bd13_brazoizquierdo.png";
import bd13_cabeza from "./Dolls/bd13_cabeza.png";
import bd13_piernader from "./Dolls/bd13_piernaderecha.png";
import bd13_piernaizq from "./Dolls/bd13_piernaizquierda.png";
import bd13_tronco from "./Dolls/bd13_tronco.png";

import bd14_brazoder from "./Dolls/bd14_brazoderecho.png";
import bd14_brazoizq from "./Dolls/bd14_brazoizquierdo.png";
import bd14_cabeza from "./Dolls/bd14_cabeza.png";
import bd14_piernader from "./Dolls/bd14_piernaderecha.png";
import bd14_piernaizq from "./Dolls/bd14_piernaizquierda.png";
import bd14_tronco from "./Dolls/bd14_tronco.png";

import bd15_brazoder from "./Dolls/bd15_brazoderecho.png";
import bd15_brazoizq from "./Dolls/bd15_brazoizquierdo.png";
import bd15_cabeza from "./Dolls/bd15_cabeza.png";
import bd15_piernader from "./Dolls/bd15_piernaderecha.png";
import bd15_piernaizq from "./Dolls/bd15_piernaizquierda.png";
import bd15_tronco from "./Dolls/bd15_tronco.png";

import bd16_brazoder from "./Dolls/bd16_brazoderecho.png";
import bd16_brazoizq from "./Dolls/bd16_brazoizquierdo.png";
import bd16_cabeza from "./Dolls/bd16_cabeza.png";
import bd16_piernader from "./Dolls/bd16_piernaderecha.png";
import bd16_piernaizq from "./Dolls/bd16_piernaizquierda.png";
import bd16_tronco from "./Dolls/bd16_tronco.png";

import bd17_brazoder from "./Dolls/bd17_brazoderecho.png";
import bd17_brazoizq from "./Dolls/bd17_brazoizquierdo.png";
import bd17_cabeza from "./Dolls/bd17_cabeza.png";
import bd17_piernader from "./Dolls/bd17_piernaderecha.png";
import bd17_piernaizq from "./Dolls/bd17_piernaizquierda.png";
import bd17_tronco from "./Dolls/bd17_tronco.png";

import bd18_brazoder from "./Dolls/bd18_brazoderecho.png";
import bd18_brazoizq from "./Dolls/bd18_brazoizquierdo.png";
import bd18_cabeza from "./Dolls/bd18_cabeza.png";
import bd18_piernader from "./Dolls/bd18_piernaderecha.png";
import bd18_piernaizq from "./Dolls/bd18_piernaizquierda.png";
import bd18_tronco from "./Dolls/bd18_tronco.png";

import bd19_brazoder from "./Dolls/bd19_brazoderecho.png";
import bd19_brazoizq from "./Dolls/bd19_brazoizquierdo.png";
import bd19_cabeza from "./Dolls/bd19_cabeza.png";
import bd19_piernader from "./Dolls/bd19_piernaderecha.png";
import bd19_piernaizq from "./Dolls/bd19_piernaizquierda.png";
import bd19_tronco from "./Dolls/bd19_tronco.png";

import bd20_brazoder from "./Dolls/bd20_brazoderecho.png";
import bd20_brazoizq from "./Dolls/bd20_brazoizquierdo.png";
import bd20_cabeza from "./Dolls/bd20_cabeza.png";
import bd20_piernader from "./Dolls/bd20_piernaderecha.png";
import bd20_piernaizq from "./Dolls/bd20_piernaizquierda.png";
import bd20_tronco from "./Dolls/bd20_tronco.png";

import bd21_brazoder from "./Dolls/bd21_brazoderecho.png";
import bd21_brazoizq from "./Dolls/bd21_brazoizquierdo.png";
import bd21_cabeza from "./Dolls/bd21_cabeza.png";
import bd21_piernader from "./Dolls/bd21_piernaderecha.png";
import bd21_piernaizq from "./Dolls/bd21_piernaizquierda.png";
import bd21_tronco from "./Dolls/bd21_tronco.png";

import bd22_brazoder from "./Dolls/bd22_brazoderecho.png";
import bd22_brazoizq from "./Dolls/bd22_brazoizquierdo.png";
import bd22_cabeza from "./Dolls/bd22_cabeza.png";
import bd22_piernader from "./Dolls/bd22_piernaderecha.png";
import bd22_piernaizq from "./Dolls/bd22_piernaizquierda.png";
import bd22_tronco from "./Dolls/bd22_tronco.png";

import bd23_brazoder from "./Dolls/bd23_brazoderecho.png";
import bd23_brazoizq from "./Dolls/bd23_brazoizquierdo.png";
import bd23_cabeza from "./Dolls/bd23_cabeza.png";
import bd23_piernader from "./Dolls/bd23_piernaderecha.png";
import bd23_piernaizq from "./Dolls/bd23_piernaizquierda.png";
import bd23_tronco from "./Dolls/bd23_tronco.png";

import bd24_brazoder from "./Dolls/bd24_brazoderecho.png";
import bd24_brazoizq from "./Dolls/bd24_brazoizquierdo.png";
import bd24_cabeza from "./Dolls/bd24_cabeza.png";
import bd24_piernader from "./Dolls/bd24_piernaderecha.png";
import bd24_piernaizq from "./Dolls/bd24_piernaizquierda.png";
import bd24_tronco from "./Dolls/bd24_tronco.png";

import bd25_brazoder from "./Dolls/bd25_brazoderecho.png";
import bd25_brazoizq from "./Dolls/bd25_brazoizquierdo.png";
import bd25_cabeza from "./Dolls/bd25_cabeza.png";
import bd25_piernader from "./Dolls/bd25_piernaderecha.png";
import bd25_piernaizq from "./Dolls/bd25_piernaizquierda.png";
import bd25_tronco from "./Dolls/bd25_tronco.png";

import bd26_brazoder from "./Dolls/bd26_brazoderecho.png";
import bd26_brazoizq from "./Dolls/bd26_brazoizquierdo.png";
import bd26_cabeza from "./Dolls/bd26_cabeza.png";
import bd26_piernader from "./Dolls/bd26_piernaderecha.png";
import bd26_piernaizq from "./Dolls/bd26_piernaizquierda.png";
import bd26_tronco from "./Dolls/bd26_tronco.png";

import bd27_brazoder from "./Dolls/bd27_brazoderecho.png";
import bd27_brazoizq from "./Dolls/bd27_brazoizquierdo.png";
import bd27_cabeza from "./Dolls/bd27_cabeza.png";
import bd27_piernader from "./Dolls/bd27_piernaderecha.png";
import bd27_piernaizq from "./Dolls/bd27_piernaizquierda.png";
import bd27_tronco from "./Dolls/bd27_tronco.png";

import bd28_brazoder from "./Dolls/bd28_brazoderecho.png";
import bd28_brazoizq from "./Dolls/bd28_brazoizquierdo.png";
import bd28_cabeza from "./Dolls/bd28_cabeza.png";
import bd28_piernader from "./Dolls/bd28_piernaderecha.png";
import bd28_piernaizq from "./Dolls/bd28_piernaizquierda.png";
import bd28_tronco from "./Dolls/bd28_tronco.png";

import bd29_brazoder from "./Dolls/bd29_brazoderecho.png";
import bd29_brazoizq from "./Dolls/bd29_brazoizquierdo.png";
import bd29_cabeza from "./Dolls/bd29_cabeza.png";
import bd29_piernader from "./Dolls/bd29_piernaderecha.png";
import bd29_piernaizq from "./Dolls/bd29_piernaizquierda.png";
import bd29_tronco from "./Dolls/bd29_tronco.png";

import bd30_brazoder from "./Dolls/bd30_brazoderecho.png";
import bd30_brazoizq from "./Dolls/bd30_brazoizquierdo.png";
import bd30_cabeza from "./Dolls/bd30_cabeza.png";
import bd30_piernader from "./Dolls/bd30_piernaderecha.png";
import bd30_piernaizq from "./Dolls/bd30_piernaizquierda.png";
import bd30_tronco from "./Dolls/bd30_tronco.png";

import bd31_brazoder from "./Dolls/bd31_brazoderecho.png";
import bd31_brazoizq from "./Dolls/bd31_brazoizquierdo.png";
import bd31_cabeza from "./Dolls/bd31_cabeza.png";
import bd31_piernader from "./Dolls/bd31_piernaderecha.png";
import bd31_piernaizq from "./Dolls/bd31_piernaizquierda.png";
import bd31_tronco from "./Dolls/bd31_tronco.png";

import bd32_brazoder from "./Dolls/bd32_brazoderecho.png";
import bd32_brazoizq from "./Dolls/bd32_brazoizquierdo.png";
import bd32_cabeza from "./Dolls/bd32_cabeza.png";
import bd32_piernader from "./Dolls/bd32_piernaderecha.png";
import bd32_piernaizq from "./Dolls/bd32_piernaizquierda.png";
import bd32_tronco from "./Dolls/bd32_tronco.png";

import bd33_brazoder from "./Dolls/bd33_brazoderecho.png";
import bd33_brazoizq from "./Dolls/bd33_brazoizquierdo.png";
import bd33_cabeza from "./Dolls/bd33_cabeza.png";
import bd33_piernader from "./Dolls/bd33_piernaderecha.png";
import bd33_piernaizq from "./Dolls/bd33_piernaizquierda.png";
import bd33_tronco from "./Dolls/bd33_tronco.png";

import bd34_brazoder from "./Dolls/bd34_brazoderecho.png";
import bd34_brazoizq from "./Dolls/bd34_brazoizquierdo.png";
import bd34_cabeza from "./Dolls/bd34_cabeza.png";
import bd34_piernader from "./Dolls/bd34_piernaderecha.png";
import bd34_piernaizq from "./Dolls/bd34_piernaizquierda.png";
import bd34_tronco from "./Dolls/bd34_tronco.png";

import bd35_brazoder from "./Dolls/bd35_brazoderecho.png";
import bd35_brazoizq from "./Dolls/bd35_brazoizquierdo.png";
import bd35_cabeza from "./Dolls/bd35_cabeza.png";
import bd35_piernader from "./Dolls/bd35_piernaderecha.png";
import bd35_piernaizq from "./Dolls/bd35_piernaizquierda.png";
import bd35_tronco from "./Dolls/bd35_tronco.png";

import bd36_brazoder from "./Dolls/bd36_brazoderecho.png";
import bd36_brazoizq from "./Dolls/bd36_brazoizquierdo.png";
import bd36_cabeza from "./Dolls/bd36_cabeza.png";
import bd36_piernader from "./Dolls/bd36_piernaderecha.png";
import bd36_piernaizq from "./Dolls/bd36_piernaizquierda.png";
import bd36_tronco from "./Dolls/bd36_tronco.png";

import bd37_brazoder from "./Dolls/bd37_brazoderecho.png";
import bd37_brazoizq from "./Dolls/bd37_brazoizquierdo.png";
import bd37_cabeza from "./Dolls/bd37_cabeza.png";
import bd37_piernader from "./Dolls/bd37_piernaderecha.png";
import bd37_piernaizq from "./Dolls/bd37_piernaizquierda.png";
import bd37_tronco from "./Dolls/bd37_tronco.png";

import bd38_brazoder from "./Dolls/bd38_brazoderecho.png";
import bd38_brazoizq from "./Dolls/bd38_brazoizquierdo.png";
import bd38_cabeza from "./Dolls/bd38_cabeza.png";
import bd38_piernader from "./Dolls/bd38_piernaderecha.png";
import bd38_piernaizq from "./Dolls/bd38_piernaizquierda.png";
import bd38_tronco from "./Dolls/bd38_tronco.png";

import bd39_brazoder from "./Dolls/bd39_brazoderecho.png";
import bd39_brazoizq from "./Dolls/bd39_brazoizquierdo.png";
import bd39_cabeza from "./Dolls/bd39_cabeza.png";
import bd39_piernader from "./Dolls/bd39_piernaderecha.png";
import bd39_piernaizq from "./Dolls/bd39_piernaizquierda.png";
import bd39_tronco from "./Dolls/bd39_tronco.png";

import bd40_brazoder from "./Dolls/bd40_brazoderecho.png";
import bd40_brazoizq from "./Dolls/bd40_brazoizquierdo.png";
import bd40_cabeza from "./Dolls/bd40_cabeza.png";
import bd40_piernader from "./Dolls/bd40_piernaderecha.png";
import bd40_piernaizq from "./Dolls/bd40_piernaizquierda.png";
import bd40_tronco from "./Dolls/bd40_tronco.png";

import bd41_brazoder from "./Dolls/bd41_brazoderecho.png";
import bd41_brazoizq from "./Dolls/bd41_brazoizquierdo.png";
import bd41_cabeza from "./Dolls/bd41_cabeza.png";
import bd41_piernader from "./Dolls/bd41_piernaderecha.png";
import bd41_piernaizq from "./Dolls/bd41_piernaizquierda.png";
import bd41_tronco from "./Dolls/bd41_tronco.png";

import bd42_brazoder from "./Dolls/bd42_brazoderecho.png";
import bd42_brazoizq from "./Dolls/bd42_brazoizquierdo.png";
import bd42_cabeza from "./Dolls/bd42_cabeza.png";
import bd42_piernader from "./Dolls/bd42_piernaderecha.png";
import bd42_piernaizq from "./Dolls/bd42_piernaizquierda.png";
import bd42_tronco from "./Dolls/bd42_tronco.png";

import bd43_brazoder from "./Dolls/bd43_brazoderecho.png";
import bd43_brazoizq from "./Dolls/bd43_brazoizquierdo.png";
import bd43_cabeza from "./Dolls/bd43_cabeza.png";
import bd43_piernader from "./Dolls/bd43_piernaderecha.png";
import bd43_piernaizq from "./Dolls/bd43_piernaizquierda.png";
import bd43_tronco from "./Dolls/bd43_tronco.png";

import bd44_brazoder from "./Dolls/bd44_brazoderecho.png";
import bd44_brazoizq from "./Dolls/bd44_brazoizquierdo.png";
import bd44_cabeza from "./Dolls/bd44_cabeza.png";
import bd44_piernader from "./Dolls/bd44_piernaderecha.png";
import bd44_piernaizq from "./Dolls/bd44_piernaizquierda.png";
import bd44_tronco from "./Dolls/bd44_tronco.png";

import bd45_brazoder from "./Dolls/bd45_brazoderecho.png";
import bd45_brazoizq from "./Dolls/bd45_brazoizquierdo.png";
import bd45_cabeza from "./Dolls/bd45_cabeza.png";
import bd45_piernader from "./Dolls/bd45_piernaderecha.png";
import bd45_piernaizq from "./Dolls/bd45_piernaizquierda.png";
import bd45_tronco from "./Dolls/bd45_tronco.png";

import bd46_brazoder from "./Dolls/bd46_brazoderecho.png";
import bd46_brazoizq from "./Dolls/bd46_brazoizquierdo.png";
import bd46_cabeza from "./Dolls/bd46_cabeza.png";
import bd46_piernader from "./Dolls/bd46_piernaderecha.png";
import bd46_piernaizq from "./Dolls/bd46_piernaizquierda.png";
import bd46_tronco from "./Dolls/bd46_tronco.png";

import bd47_brazoder from "./Dolls/bd47_brazoderecho.png";
import bd47_brazoizq from "./Dolls/bd47_brazoizquierdo.png";
import bd47_cabeza from "./Dolls/bd47_cabeza.png";
import bd47_piernader from "./Dolls/bd47_piernaderecha.png";
import bd47_piernaizq from "./Dolls/bd47_piernaizquierda.png";
import bd47_tronco from "./Dolls/bd47_tronco.png";

import bd48_brazoder from "./Dolls/bd48_brazoderecho.png";
import bd48_brazoizq from "./Dolls/bd48_brazoizquierdo.png";
import bd48_cabeza from "./Dolls/bd48_cabeza.png";
import bd48_piernader from "./Dolls/bd48_piernaderecha.png";
import bd48_piernaizq from "./Dolls/bd48_piernaizquierda.png";
import bd48_tronco from "./Dolls/bd48_tronco.png";

import bd49_brazoder from "./Dolls/bd49_brazoderecho.png";
import bd49_brazoizq from "./Dolls/bd49_brazoizquierdo.png";
import bd49_cabeza from "./Dolls/bd49_cabeza.png";
import bd49_piernader from "./Dolls/bd49_piernaderecha.png";
import bd49_piernaizq from "./Dolls/bd49_piernaizquierda.png";
import bd49_tronco from "./Dolls/bd49_tronco.png";

import bd50_brazoder from "./Dolls/bd50_brazoderecho.png";
import bd50_brazoizq from "./Dolls/bd50_brazoizquierdo.png";
import bd50_cabeza from "./Dolls/bd50_cabeza.png";
import bd50_piernader from "./Dolls/bd50_piernaderecha.png";
import bd50_piernaizq from "./Dolls/bd50_piernaizquierda.png";
import bd50_tronco from "./Dolls/bd50_tronco.png";

const allBrokenParts = [
  bd1_brazoder,
  bd1_brazoizq,
  bd1_cabeza,
  bd1_piernader,
  bd1_piernaizq,
  bd1_tronco,
  bd2_brazoder,
  bd2_brazoizq,
  bd2_cabeza,
  bd2_piernader,
  bd2_piernaizq,
  bd2_tronco,
  bd3_brazoder,
  bd3_brazoizq,
  bd3_cabeza,
  bd3_piernader,
  bd3_piernaizq,
  bd3_tronco,
  bd4_brazoder,
  bd4_brazoizq,
  bd4_cabeza,
  bd4_piernader,
  bd4_piernaizq,
  bd4_tronco,
  bd5_brazoder,
  bd5_brazoizq,
  bd5_cabeza,
  bd5_piernader,
  bd5_piernaizq,
  bd5_tronco,
  bd6_brazoder,
  bd6_brazoizq,
  bd6_cabeza,
  bd6_piernader,
  bd6_piernaizq,
  bd6_tronco,
  bd7_brazoder,
  bd7_brazoizq,
  bd7_cabeza,
  bd7_piernader,
  bd7_piernaizq,
  bd7_tronco,
  bd8_brazoder,
  bd8_brazoizq,
  bd8_cabeza,
  bd8_piernader,
  bd8_piernaizq,
  bd8_tronco,
  bd9_brazoder,
  bd9_brazoizq,
  bd9_cabeza,
  bd9_piernader,
  bd9_piernaizq,
  bd9_tronco,
  bd10_brazoder,
  bd10_brazoizq,
  bd10_cabeza,
  bd10_piernader,
  bd10_piernaizq,
  bd10_tronco,

  bd11_brazoder,
  bd11_brazoizq,
  bd11_cabeza,
  bd11_piernader,
  bd11_piernaizq,
  bd11_tronco,

  bd12_brazoder,
  bd12_brazoizq,
  bd12_cabeza,
  bd12_piernader,
  bd12_piernaizq,
  bd12_tronco,

  bd13_brazoder,
  bd13_brazoizq,
  bd13_cabeza,
  bd13_piernader,
  bd13_piernaizq,
  bd13_tronco,

  bd14_brazoder,
  bd14_brazoizq,
  bd14_cabeza,
  bd14_piernader,
  bd14_piernaizq,
  bd14_tronco,

  bd15_brazoder,
  bd15_brazoizq,
  bd15_cabeza,
  bd15_piernader,
  bd15_piernaizq,
  bd15_tronco,

  bd16_brazoder,
  bd16_brazoizq,
  bd16_cabeza,
  bd16_piernader,
  bd16_piernaizq,
  bd16_tronco,

  bd17_brazoder,
  bd17_brazoizq,
  bd17_cabeza,
  bd17_piernader,
  bd17_piernaizq,
  bd17_tronco,

  bd18_brazoder,
  bd18_brazoizq,
  bd18_cabeza,
  bd18_piernader,
  bd18_piernaizq,
  bd18_tronco,

  bd19_brazoder,
  bd19_brazoizq,
  bd19_cabeza,
  bd19_piernader,
  bd19_piernaizq,
  bd19_tronco,

  bd20_brazoder,
  bd20_brazoizq,
  bd20_cabeza,
  bd20_piernader,
  bd20_piernaizq,
  bd20_tronco,

  bd21_brazoder,
  bd21_brazoizq,
  bd21_cabeza,
  bd21_piernader,
  bd21_piernaizq,
  bd21_tronco,

  bd22_brazoder,
  bd22_brazoizq,
  bd22_cabeza,
  bd22_piernader,
  bd22_piernaizq,
  bd22_tronco,

  bd23_brazoder,
  bd23_brazoizq,
  bd23_cabeza,
  bd23_piernader,
  bd23_piernaizq,
  bd23_tronco,

  bd24_brazoder,
  bd24_brazoizq,
  bd24_cabeza,
  bd24_piernader,
  bd24_piernaizq,
  bd24_tronco,

  bd25_brazoder,
  bd25_brazoizq,
  bd25_cabeza,
  bd25_piernader,
  bd25_piernaizq,
  bd25_tronco,

  bd26_brazoder,
  bd26_brazoizq,
  bd26_cabeza,
  bd26_piernader,
  bd26_piernaizq,
  bd26_tronco,

  bd27_brazoder,
  bd27_brazoizq,
  bd27_cabeza,
  bd27_piernader,
  bd27_piernaizq,
  bd27_tronco,

  bd28_brazoder,
  bd28_brazoizq,
  bd28_cabeza,
  bd28_piernader,
  bd28_piernaizq,
  bd28_tronco,

  bd29_brazoder,
  bd29_brazoizq,
  bd29_cabeza,
  bd29_piernader,
  bd29_piernaizq,
  bd29_tronco,

  bd30_brazoder,
  bd30_brazoizq,
  bd30_cabeza,
  bd30_piernader,
  bd30_piernaizq,
  bd30_tronco,

  bd31_brazoder,
  bd31_brazoizq,
  bd31_cabeza,
  bd31_piernader,
  bd31_piernaizq,
  bd31_tronco,

  bd32_brazoder,
  bd32_brazoizq,
  bd32_cabeza,
  bd32_piernader,
  bd32_piernaizq,
  bd32_tronco,

  bd33_brazoder,
  bd33_brazoizq,
  bd33_cabeza,
  bd33_piernader,
  bd33_piernaizq,
  bd33_tronco,

  bd34_brazoder,
  bd34_brazoizq,
  bd34_cabeza,
  bd34_piernader,
  bd34_piernaizq,
  bd34_tronco,

  bd35_brazoder,
  bd35_brazoizq,
  bd35_cabeza,
  bd35_piernader,
  bd35_piernaizq,
  bd35_tronco,

  bd36_brazoder,
  bd36_brazoizq,
  bd36_cabeza,
  bd36_piernader,
  bd36_piernaizq,
  bd36_tronco,

  bd37_brazoder,
  bd37_brazoizq,
  bd37_cabeza,
  bd37_piernader,
  bd37_piernaizq,
  bd37_tronco,

  bd38_brazoder,
  bd38_brazoizq,
  bd38_cabeza,
  bd38_piernader,
  bd38_piernaizq,
  bd38_tronco,

  bd39_brazoder,
  bd39_brazoizq,
  bd39_cabeza,
  bd39_piernader,
  bd39_piernaizq,
  bd39_tronco,

  bd40_brazoder,
  bd40_brazoizq,
  bd40_cabeza,
  bd40_piernader,
  bd40_piernaizq,
  bd40_tronco,

  bd41_brazoder,
  bd41_brazoizq,
  bd41_cabeza,
  bd41_piernader,
  bd41_piernaizq,
  bd41_tronco,

  bd42_brazoder,
  bd42_brazoizq,
  bd42_cabeza,
  bd42_piernader,
  bd42_piernaizq,
  bd42_tronco,

  bd43_brazoder,
  bd43_brazoizq,
  bd43_cabeza,
  bd43_piernader,
  bd43_piernaizq,
  bd43_tronco,

  bd44_brazoder,
  bd44_brazoizq,
  bd44_cabeza,
  bd44_piernader,
  bd44_piernaizq,
  bd44_tronco,

  bd45_brazoder,
  bd45_brazoizq,
  bd45_cabeza,
  bd45_piernader,
  bd45_piernaizq,
  bd45_tronco,

  bd46_brazoder,
  bd46_brazoizq,
  bd46_cabeza,
  bd46_piernader,
  bd46_piernaizq,
  bd46_tronco,

  bd47_brazoder,
  bd47_brazoizq,
  bd47_cabeza,
  bd47_piernader,
  bd47_piernaizq,
  bd47_tronco,

  bd48_brazoder,
  bd48_brazoizq,
  bd48_cabeza,
  bd48_piernader,
  bd48_piernaizq,
  bd48_tronco,

  bd49_brazoder,
  bd49_brazoizq,
  bd49_cabeza,
  bd49_piernader,
  bd49_piernaizq,
  bd49_tronco,

  bd50_brazoder,
  bd50_brazoizq,
  bd50_cabeza,
  bd50_piernader,
  bd50_piernaizq,
  bd50_tronco,
];

const DollMaker = () => {
  const [head, setHead] = useState<string>("bd1");
  const [leftSide, setLeftSide] = useState<string>("bd1");
  const [rightSide, setRightSide] = useState<string>("bd1");
  const [rightLeg, setRightLeg] = useState<string>("bd1");

  const getBodyPart = (bodyPart: string[]) => {
    const options: JSX.Element[] = [<option hidden>select</option>];
    bodyPart.forEach((part) => {
      options.push(<option value={part}>{part}</option>);
    });
    return options;
  };

  const makeBody = () => {
    return `${head} ${leftSide} ${rightSide} ${rightLeg}`;
  };

  const makeImageName = (bd: string, part: string) => {
    return `${bd}_${part}`;
  };

  const getImage = (imageName: string) => {
    console.log(allBrokenParts);
    return allBrokenParts.filter((brokenPart) =>
      brokenPart.includes(imageName)
    )[0];
  };

  const getTotalCombinations = () => {
    const arrayOfArrays = [
      dollData.cabeza,
      dollData.tronco_brazoizq,
      dollData.brazoder_piernaizq,
      dollData.piernader,
    ];
    const allCombinations = combineArrays(arrayOfArrays);
    return allCombinations.length;
  };

  const getDollCode = () => {
    // return `${head} ${leftSide} ${rightSide} ${rightLeg}`;

    const headNumber = head.replace(/\D/g, "");
    const leftSideNumber = leftSide.replace(/\D/g, "");
    const rightSideNumber = rightSide.replace(/\D/g, "");
    const rightLegNumber = rightLeg.replace(/\D/g, "");

    return `DOLL ${headNumber.length < 2 ? `0${headNumber}` : headNumber}-${
      leftSideNumber.length < 2 ? `0${leftSideNumber}` : leftSideNumber
    }-${rightSideNumber.length < 2 ? `0${rightSideNumber}` : rightSideNumber}-${
      rightLegNumber.length < 2 ? `0${rightLegNumber}` : rightLegNumber
    }`;
  };

  // Commented to save resources
  // const makeRows = () => {
  //   const arrayOfArrays = [
  //     dollData.cabeza,
  //     dollData.tronco_brazoizq,
  //     dollData.brazoder_piernaizq,
  //     dollData.piernader,
  //   ];
  //   const allCombinations = combineArrays(arrayOfArrays);
  //   console.log("All combinations: ", allCombinations.length);
  //   const onlySomeArrays = allCombinations.slice(10);

  //   return allCombinations.map((combination, index) => {
  //     const comboArray = combination.split(",");
  //     comboArray.pop();
  //     const head = makeImageName(comboArray[0], "cabeza");
  //     const tronco = makeImageName(comboArray[1], "tronco");
  //     const leftArm = makeImageName(comboArray[1], "brazoizq");
  //     const rightArm = makeImageName(comboArray[2], "brazoder");
  //     const leftLeg = makeImageName(comboArray[2], "piernaizq");
  //     const rightLeg = makeImageName(comboArray[3], "piernader");
  //     return (
  //       <tr>
  //         <td>{index + 1}</td>
  //         <td>fallen-angel-{index + 1}</td>
  //         <td className="image-cell">
  //           <div className="image-container">
  //             <img
  //               className="base tronco"
  //               src={getImage(tronco)}
  //               alt={`embla-${index}`}
  //             />
  //             <img
  //               className="part head"
  //               src={getImage(head)}
  //               alt={`embla-${index}`}
  //             />
  //             <img
  //               className="part arm"
  //               src={getImage(leftArm)}
  //               alt={`embla-${index}`}
  //             />
  //             <img
  //               className="part arm"
  //               src={getImage(rightArm)}
  //               alt={`embla-${index}`}
  //             />
  //             <img
  //               className="part leg"
  //               src={getImage(leftLeg)}
  //               alt={`embla-${index}`}
  //             />
  //             <img
  //               className="part leg"
  //               src={getImage(rightLeg)}
  //               alt={`embla-${index}`}
  //             />
  //           </div>
  //         </td>
  //         <td>
  //           <ul>
  //             <li>head: {comboArray[0]}</li>
  //             <li>leftSide: {comboArray[1]}</li>
  //             <li>rightSide: {comboArray[2]}</li>
  //             <li>rightLeg: {comboArray[3]}</li>
  //           </ul>
  //         </td>
  //       </tr>
  //     );
  //   });
  // };

  return (
    <div className="container">
      <div className="bd-maker-container">
        <div className="result">
          <label htmlFor="result">Result</label>
          <div className="image-container">
            <img className="base" src={background} alt={`background`} />
            <img
              className="part tronco"
              src={getImage(makeImageName(leftSide, "tronco"))}
              alt={`tronco`}
            />
            <img
              className="part head"
              src={getImage(makeImageName(head, "cabeza"))}
              alt={`head`}
            />
            <img
              className="part arm"
              src={getImage(makeImageName(leftSide, "brazoizq"))}
              alt={`leftArm`}
            />
            <img
              className="part arm"
              src={getImage(makeImageName(rightSide, "brazoder"))}
              alt={`rightArm`}
            />
            <img
              className="part leg"
              src={getImage(makeImageName(rightSide, "piernaizq"))}
              alt={`leftLeg`}
            />
            <img
              className="part leg"
              src={getImage(makeImageName(rightLeg, "piernader"))}
              alt={`rightLeg`}
            />
            <div className="number-container">
              <img src={number_container} alt={`number_container`} />
              <span className="number">{getDollCode()}</span>
            </div>
          </div>
        </div>
        <div className="setup">
          <div className="label-set">
            <label htmlFor="head">Head</label>
            <select name="" id="head" onChange={(e) => setHead(e.target.value)}>
              {getBodyPart(dollData.cabeza)}
            </select>
          </div>
          <div className="label-set">
            <label htmlFor="left_side">Left Side</label>
            <select
              name=""
              id="left_side"
              onChange={(e) => setLeftSide(e.target.value)}
            >
              {getBodyPart(dollData.tronco_brazoizq)}
            </select>
          </div>
          <div className="label-set">
            <label htmlFor="right_side">Right Side</label>
            <select
              name=""
              id="right_side"
              onChange={(e) => setRightSide(e.target.value)}
            >
              {getBodyPart(dollData.brazoder_piernaizq)}
            </select>
          </div>
          <div className="label-set">
            <label htmlFor="right_leg">Right Leg</label>
            <select
              name=""
              id="right_leg"
              onChange={(e) => setRightLeg(e.target.value)}
            >
              {getBodyPart(dollData.piernader)}
            </select>
          </div>
          <textarea value={makeBody()} rows={5} />
        </div>
      </div>
      <div className="total-combinations-title">
        Total Combinations: {getTotalCombinations()}
      </div>
      {/* Commented to save resources
      <div className="table-top">
        <div className="label-set">
          <label htmlFor="results">Results</label>
          <select
            name=""
            id="results"
            onChange={(e) => setRightLeg(e.target.value)}
          >
            {getBodyPart(dollData.right_legs)}
          </select>
        </div>
      </div> */}
      {/* <table>
        <thead>
          <tr>
            <th>#</th>
            <th>ID</th>
            <th>Broken Doll</th>
            <th>Parts Used</th>
          </tr>
        </thead>
        <tbody>{makeRows()}</tbody>
      </table> */}
    </div>
  );
};

export default DollMaker;
