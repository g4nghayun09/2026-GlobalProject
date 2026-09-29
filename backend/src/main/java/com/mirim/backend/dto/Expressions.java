package com.mirim.backend.dto;

import lombok.Getter;
import lombok.Setter;

public class Expressions {
    @Getter
    @Setter
    String japan;
    @Getter
    @Setter
    String japanPro;
    @Getter
    @Setter
    String korea;
    @Getter
    @Setter
    int id;

    public Expressions(int id, String japan, String japanPro, String korea) {
        this.japan = japan;
        this.japanPro = japanPro;
        this.korea = korea;
        this.id = id;
    }
}
