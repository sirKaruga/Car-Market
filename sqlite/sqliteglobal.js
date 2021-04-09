import React, { useState, useEffect } from "react";
import * as SQLite from "expo-sqlite";

global.db = SQLite.openDatabase("silkyMarket.db");
