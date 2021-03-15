import React from "react";
import { Text } from "react-native";
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("silkyMarket.db");

export default class SQLiteScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: [],
      search: "",
    };
  }

  componentDidMount() {
    // create user table if not exist
    db.transaction((tx) => {
      tx.executeSql(
        "create table if not exists tbl_register (id integer primary key not null, name text, contact text);"
      );
    });

    // check if registered
    const query = "select *from tbl_register";
    const array = [];

    db.transaction((tx) => {
      tx.executeSql(query, array, (tx, results) => {
        this.setState({ todo: results.rows });
        console.log(this.state.todo._array);
      });
    });
  }

  render() {
    return <Text>this is important</Text>;
  }

  // ExecuteQuery = (sql, params = []) =>
  //   new Promise((resolve, reject) => {
  //     db.transaction((trans) => {
  //       trans.executeSql(
  //         sql,
  //         params,
  //         (trans, results) => {
  //           resolve(results);
  //         },
  //         (error) => {
  //           reject(error);
  //         }
  //       );
  //     });
  //   });

  // // Create Table
  // async CreateTable() {
  //   let Table = await this.executeQuery(
  //     "CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY NOT NULL, first_name VARCHAR(16), last_name VARCHAR(16), is_deleted INTEGER)",
  //     []
  //   );
  //   console.log(Table);
  // }
}
