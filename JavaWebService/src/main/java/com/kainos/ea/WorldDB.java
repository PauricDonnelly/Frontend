package com.kainos.ea;

import java.io.FileInputStream;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Properties;

public class WorldDB {

    private static Connection conn;

    public static List<String> getCity() {
        List<String> readCity = new ArrayList<>();

        try {
            Connection c = getConnection();
            Statement st = c.createStatement();
            ResultSet rs = st.executeQuery(
                    "SELECT name FROM city");

            while (rs.next()) {
                readCity.add(rs.getString("Name"));
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return readCity;
    }

    private static Connection getConnection() {
        String user;
        String password;
        String host;

        if (conn != null) {
            return conn;
        }

        try {

            FileInputStream propsStream =
                    new FileInputStream("worldDB.properties");

            Properties props = new Properties();
            props.load(propsStream);

            user = props.getProperty("user");
            password = props.getProperty("password");
            host = props.getProperty("host");

            if (user == null || password == null || host == null)
                throw new IllegalArgumentException(
                        "Properties file must exist and must contain "
                                + "user, password, and host properties.");

            conn = DriverManager.getConnection("jdbc:mysql://"
                    + host + "/world_NialD?useSSL=false", user, password);
            return conn;

        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }
}

