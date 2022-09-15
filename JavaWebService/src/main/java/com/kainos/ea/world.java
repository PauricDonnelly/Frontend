package com.kainos.ea;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

public class world {
    private int id;
    private String name;
    private String countryCode;
    private String district;
    private int population;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCountryCode() {
        return countryCode;
    }

    public void setCountryCode(String countryCode) {
        this.countryCode = countryCode;
    }

    public String getDistrict() {
        return district;
    }

    public void setDistrict(String district) {
        this.district = district;
    }

    public int getPopulation() {
        return population;
    }

    public void setPopulation(int population) {
        this.population = population;
    }


//    public world(int id, String name, String countryCode, String district, int population) {
//        this.id = id;
//        this.name = name;
//        this.countryCode = countryCode;
//        this.district = district;
//        this.population = population;
//    }

    @JsonCreator
    public world( @JsonProperty("id") int id,
                     @JsonProperty("name") String name,
                     @JsonProperty("countryCode") String countryCode, @JsonProperty("district") String district,
                     @JsonProperty("population") int population ){

        this.id = id;
        this.name = name;
        this.countryCode = countryCode;
        this.district = district;
        this.population = population;
    }
}
