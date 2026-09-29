package com.mirim.backend.dto;

import lombok.Getter;
import lombok.Setter;

public class Card {
    @Getter
    @Setter
    int id;
    @Getter
    @Setter
    String title;
    @Getter
    @Setter
    String content;
    @Getter
    @Setter
    String category;
    @Getter
    @Setter
    String[] howto;
    @Getter
    @Setter
    Expressions[] expressions;
    @Getter
    @Setter
    String[] report;

    public Card(int id, String title, String content, String category, String[] howto, Expressions[] expressions, String[] report) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.category = category;
        this.howto = howto;
        this.expressions = expressions;
        this.report = report;
    }
}
